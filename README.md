# jugband-react

Isomorphic React-based version of [Jugband](https://github.com/clouserw/jugband), a Podio-backed project tracking application used by [Firefox Marketplace](https://jugband.paas.allizom.org/). 


## Installation

```shell
git clone https://github.com/chuckharmston/jugband-react.git
cd jugband-react
cp config.local.json.dist config.local.json
npm install
```

Then add the appropriate local configuration to config.local.json. You can get API keys from [your Podio profile](https://podio.com/settings/api).


## Usage

You can run the development server using:

```shell
npm run dev
```

In production, instead use:

```shell
babel-node server.js
```


## Deployment

Jugband can be deployed to Heroku out of the box.

To use memcached (you should), install the memcachier add-on and run:

```shell
heroku config:set USE_MEMCACHED=true
``` 


## Credits

- [Wil Clouser](http://micropipes.com/blog/)'s [Jugband](https://github.com/clouserw/jugband)
- Yahoo's [`fluxible-router` example](https://github.com/yahoo/flux-examples)
