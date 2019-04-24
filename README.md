# javascript-notebook
My attempt at developing a Javascript notebook, similar to other notebook style development tools, where I can keep JS snippets in one place

Missing package.json because it's different on each of my Windows, Linux and Mac machines:

```
{
  "name": "javascript-notebook",
  "main": "notebook.html",
  "scripts": {
    "release": "/Applications/nwjs.app/Contents/MacOS/nwjs .",
    "start": "~/nwjs-sdk-v0.37.4-x64/nwjs.app/Contents/MacOS/nwjs ."
  },
  "window": {
    "width": 1920,
    "height": 1080,
    "toolbar": true
  }
}
```

Currently stores javascript snippets in local storage but will modify this to support different cloud/file system options.

TODO
- allow user to move sections around
- console controls to clear/copy etc.
- make editors rich text for syntax highlighting
- make console rich so errors are displayed in different colour
- maybe have console per snippet
- option to have HTML element and/or canvas for sections to see outputs
- integration with jsbin or others
