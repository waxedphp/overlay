# Overlay


jQuery LoadingOverlay
A flexible loading overlay jQuery plugin


[https://gasparesganga.com/labs/jquery-loading-overlay/]

MIT license

```
npm install gasparesganga-jquery-loading-overlay

```

### HTML:

```

<form class="form-horizontal waxed-overlay" data-name="bodyoverlay" >

</form>

```

### PHP:

```

      $this->waxed->pick('main')->inspire([
        'bodyoverlay' => [
            'waxedOverlayShow' => true,
        ],
      ]);

      $this->waxed->pick('main')->inspire([
        'bodyoverlay' => [
            'waxedOverlayHide' => true,
        ],
      ],1000);


```


