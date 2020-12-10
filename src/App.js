import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'


import NewsCards from './components/newsCards/NewsCards'
import useStyles from './styles.js' 

const alanKey = '4d7d24c6b98aa2a66465ba1d1ddc5ab42e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => { 
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1)
  const classes= useStyles()
  useEffect(() => {
    alanBtn({
      key: alanKey, 
      onCommand: ({command, articles, number}) => {
        if(command === 'newHeadlines' | command === "newCountry") {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if(command === 'highlight') {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        } 
      } 
    })
  },[])
  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://www.virtalent.com/wp-content/uploads/2018/12/VIRTALENT-LOGO-CMYK-Left-aligned.png" className={classes.logo} alt="Virtalent Logo"/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  )
}    
 
export default App