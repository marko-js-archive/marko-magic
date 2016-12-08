module.exports = function(el, context) {
    var lasso = context.createNodeForEl('lasso-inject', {
        name: context.builder.literal('head')
    });
    el.appendChild(lasso);
}