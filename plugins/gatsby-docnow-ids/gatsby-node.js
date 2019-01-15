exports.onCreateNode = (
    { node, actions, loadNodeContent, createNodeId, createContentDigest },
    options
  ) => {
    const { createNode, createParentChildLink } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if (node.extension !== `csv`) {
        return
    }

    const content = loadNodeContent(node)
    content.then(data => {
      for (const id of data.split(/[\r\n]+/)) {
        if (id === '') continue
        const tweet =  {
          id: id,
          children: [],
          parent: node.id,
          internal: {
            contentDigest: createContentDigest(id),
            type: 'docnow_tweetid',
          },
        }
        createNode(tweet)
        createParentChildLink({ parent: node, child: tweet })
      } 
    })

    return
  }
