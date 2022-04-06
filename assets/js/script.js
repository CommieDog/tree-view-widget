const treeViewWidgetElement = $("#tree-view-widget")

function populateTreeViewWidget()
{
    treeViewWidgetElement.append(generateTreeViewWidget());
}

function generateTreeViewWidget()
{
    const content = $("<div>");
    content.append("Head<ul><li>ListItem1</li><li>ListItem2</li><li>ListItem3</li></ul>");
    content.addClass("tree-view-content");
    return content;
}

populateTreeViewWidget();