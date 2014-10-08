sourcemaps : Compass Naked CLI Commando Style
==========

- Compass 1.0.0
- Ruby 2.1.2
- Node 0.10.26

Chrome 36 & Firefox 31.

![demo gif](https://dl.dropboxusercontent.com/u/41114960/github/sourcemaps/cli.gif)

### Installing Compass

If you would like to install Compass via bundler just run the command:

```bash
$ bundle install
```

**Without Bundler**

If you would like to install Compass w/out bundler run the command:

```bash
$ gem install compass
```

### Static Server

Start the server from another tab of your CLI within the root of the project directory…

```bash
$ python -m SimpleHTTPServer
```
Access the server on the following URI…

```bash
$ http://127.0.0.1:8000
```

### Sass/Compass Sourcemaps

```bash
sass --compass --sourcemap --watch css/src/styles.scss:css/styles.css
```
