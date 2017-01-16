var path = require('path');
var lassoPageTag = require('lasso/taglib/page-tag');
var lassoSlotTag = require('lasso/taglib/slot-tag');
var lassoBodyTag = require('lasso/taglib/body-tag');
var getLassoRenderContext = require('lasso/taglib/getLassoRenderContext');

module.exports = function(input, out) {
    var lassoRenderContext = getLassoRenderContext(out);
    var lassoPageResultAsyncValue = lassoRenderContext.data.lassoPageResult;
    var template = out.global.template;
    var dependencies;

    if (!lassoPageResultAsyncValue) {
        dependencies = template.getDependencies();

        if(out.global.dependencies) {
            dependencies = dependencies.concat(out.global.dependencies);
        }

        lassoPageTag({
            dependencies: dependencies,
            filename: template.path,
            dirname: path.dirname(template.path)
        }, out);
    }

    lassoSlotTag(input, out);
}