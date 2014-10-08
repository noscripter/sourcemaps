sourcemaps - compass/codekit2
==========

- Compass 1.0.0
- Ruby 2.1.2
- Node 0.10.26

Chrome 36 & Firefox 31.

![](https://dl.dropboxusercontent.com/u/41114960/github/sourcemaps/compass-codekit.png)

**Note**: Add the line below to your ``config.rb``. This allows for the mapping in your DevTools for sourcemaps.

```ruby
sourcemap = (environment == :development) ? true : false;
```
