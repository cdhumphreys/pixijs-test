var canvasContainer = document.getElementById('pixi_container');
var renderer = PIXI.autoDetectRenderer(256, 256);
var stage = new PIXI.Container();

// Aliases
var resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;



// set renderer.view for the root canvas element
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.resize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);



canvasContainer.appendChild(renderer.view);




PIXI.loader
.add("images/artorias_pixel.png")
.on("progress", loadProgressHandler)
.load(setup);

function loadProgressHandler(loader, resource) {
  console.log("loading: " + resource.url);
  console.log("progress: " + loader.progress + "%");

  TweenLite.to("#inner_loading_bar", 0.25, {scaleX: (loader.progress/100), ease: Quad.easeInOut});
}

function setup() {

  var player = new PIXI.Sprite(
    PIXI.loader.resources["images/artorias_pixel.png"].texture
  );

  stage.addChild(player);

  renderer.render(stage);

  TweenLite.to("#loader", 0.5, {delay: 1, autoAlpha: 0, ease: Quad.easeInOut});
}
