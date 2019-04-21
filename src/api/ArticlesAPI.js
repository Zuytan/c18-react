const responseTime = 200

const getAllArticlesName = (callback) => {
  const articleNames = [
    { id: 1, title: 'Page 1' },
    { id: 2, title: 'Page 2' },
  ]
  setTimeout(() => {
    callback(articleNames)
  }, responseTime)
}

const getAllArticles = (callback) => {
  const articles = [
    { 
      id: 1,
      title: 'Page 1', 
      description:'mozuebflqizjbflkzjbfluiezbj iuz leufihqlskjbfl euf liqulu fliuql uehlfi hqzliuef quzeflu zhleuqlu eh qlulfiuqe l',
      pictures: [{url: '/images/img1.png', alt:'img1'}]
    },
    { 
      id: 2,
      title: 'Page 2', 
      description:'mozuebflqizjbflkzjbfluiezbj iuz leufihqlskjbfl euf liqulu fliuql uehlfi hqzliuef quzeflu zhleuqlu eh qlulfiuqe l',
      pictures: [{url: '/images/img2.png', alt:'img2'}, {url: '/images/img3.png', alt:'img3'}]
    },
  ]
  setTimeout(() => {
    callback(articles)
  }, responseTime)
}

const getArticleById = (id, callback) => {
  const articleToReturn = {
    title: 'Article 1',
    sections: [
      {
        card: 'SectionCardImage',
        side: 'right',
        text: 'mozuebflqizjbflkzjbfluiezbj iuz leufihqlskjbfl euf liqulu fliuql uehlfi hqzliuef quzeflu zhleuqlu eh qlulfiuqe l',
        pictures: [{url: '/images/img1.png', alt:'img1'}]
      },
      {
        card: 'SectionCardImage',
        side: 'right',
        text: 'mozuebflqizjbflkzjbfluiezbj iuz leufihqlskjbfl euf liqulu fliuql uehlfi hqzliuef quzeflu zhleuqlu eh qlulfiuqe l',
        pictures: [{url: '/images/img1.png', alt:'img1'}, {url: '/images/img3.png', alt:'img3'}]
      },
      {
        card: 'SectionCardImage',
        side: 'left',
        text: 'mozuebflqizjbflkzjbfluiezbj iuz leufihqlskjbfl euf liqulu fliuql uehlfi hqzliuef quzeflu zhleuqlu eh qlulfiuqe l',
        pictures: [{url: '/images/img1.png', alt:'img1'}, {url: '/images/img2.png', alt:'img2'}]
      },
    ],
  }
  setTimeout(() => {
    callback(articleToReturn)
  }, responseTime)

}
export { getAllArticlesName, getAllArticles, getArticleById }