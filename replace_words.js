document.addEventListener("DOMContentLoaded", function(event) {
  var replaceWords = {
    "original word 1": "replacement word 1",
    "original word 2": "replacement word 2",
    // Add as many word replacements as you need
  };

  var replaceNodeText = function(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      var text = node.textContent;
      for (var originalWord in replaceWords) {
        var replacementWord = replaceWords[originalWord];
        var regex = new RegExp(originalWord, "gi");
        text = text.replace(regex, replacementWord);
      }
      node.textContent = text;
    } else {
      for (var i = 0; i < node.childNodes.length; i++) {
        replaceNodeText(node.childNodes[i]);
      }
    }
  };

  var nodes = document.body.querySelectorAll("*");
  for (var i = 0; i < nodes.length; i++) {
    replaceNodeText(nodes[i]);
  }
});
