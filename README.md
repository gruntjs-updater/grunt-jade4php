# grunt-jade4php

> A Grunt plugin for jade4php

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jade4php --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jade4php');
```

## The "jade4php" task

### Overview
In your project's Gruntfile, add a section named `jade4php` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  jade4php: {
    options: {
      // Task-specific options go here.
    },
    // Target-specific file lists and/or options go here.
  },
});
```

### Options

#### pretty

Type: `Boolean`
Default: `false`

Adds whitespace to the resulting html to make it easier for a human to read.

### Usage Examples

#### Compile all contents of a release directory and add a `.phtml` extension
```js
jad4php: {
  options: {
    pretty: true
  },
  expand: true,
  cwd: 'release/jade/',
  src: ['*.jade'],
  dest: 'release/phtml/',
  ext: '.phtml'
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
