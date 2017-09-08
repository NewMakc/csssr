import gulp from 'gulp';
import bump from 'gulp-bump';

const dest = gulp.dest('./');

gulp.task('patch', () => (
	gulp.src('data.json')
		.pipe(bump())
		.pipe(dest)
));

gulp.task('minor', () => (
	gulp.src('data.json')
		.pipe(bump({type: 'minor'}))
		.pipe(dest)
));

gulp.task('major', () => (
	gulp.src('data.json')
		.pipe(bump({type: 'major'}))
		.pipe(dest)
));

gulp.task('semver:reset', () => (
	gulp.src('data.json')
		.pipe(bump({version: '0.1.0'}))
		.pipe(dest)
));
