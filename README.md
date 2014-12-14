A fast way to bootstrap a Chaplin project

Setup
===

```
  git clone git@github.com:victormours/chaplin-init.git my_chaplin_project
  cd my_chaplin_project
  rm -rf .git
  bundle
  npm install
  bower install
```

Add an api in `chaplin_config.json`

Starting the server
===

```
  bundle exec rackup
```

