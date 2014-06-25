var gulp = require("gulp");
var marked = require("gulp-marked");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
var clean = require("gulp-clean");
var dust = require("dustjs-linkedin");
dust.helper = require("dustjs-helpers");
var es = require("event-stream");
var ssg = require("gulp-ssg");
var fs = require("fs");
var highlight = require("highlight.js");
var pages = require("gulp-gh-pages");

dust.onLoad = function(name, cb) {
	fs.readFile(name, function(err, contents) {
		cb(err, contents.toString());
	});
};

gulp.task("clean", function() {
	return gulp.src("./.dist/**/*", {read:false})
		.pipe(clean());
});

gulp.task("convert", ["clean"], function() {
	return gulp.src("./src/**/*.md")
		.pipe(marked({
			highlight: function(code, lang) {
				return highlight.highlight(lang, code).value;
			}
		}))
		.pipe(rename({
			extname:".html"
		}))/*
		.pipe(ssg({
			title: "Cadmus"
		}, {
			property:"meta",
			baseUrl:"/.dist/"
		}))*/
		.pipe(es.map(function(file, cb) {
			var contents = String(file.contents);
			dust.render("./templates/page.dust", {contents:contents}, function(err, contents) {
				if(err) {
					console.log(err);
					cb(err);
				} else {
					file.contents = Buffer(contents);
					cb(null, file);
				}
			});
		}))
		.pipe(gulp.dest("./.dist"));
});

gulp.task("copy", ["clean"], function() {
	return gulp.src("./public/**/*")
		.pipe(gulp.dest("./.dist"));
});

gulp.task("deploy", function() {
	return gulp.src("./.dist/**/*").
		pipe(pages());
});

gulp.task("server", function() {
	connect.server({
		root:".dist"
	});
});

gulp.task("default", ["convert", "copy"], function() {
	gulp.start("server");
});
