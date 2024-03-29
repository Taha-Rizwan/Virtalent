import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'

import useStyles from './styles.js'
import NewsCard from '../newsCard/NewsCard'

const infoCards = [
  { color: '#E94F64', title: 'Latest News', text: 'Give me the latest news or just chat with him, can also do a bit of math' },
  { color: '#E57254', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#E5C454', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#46BCDE', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle}) => {
  const classes = useStyles()

  if(!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (  
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ?(<Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}:<br />{infoCard.info}</strong></Typography>) : null}
                <Typography variant="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    )
  }
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i ) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
            <NewsCard article={article} i={i} activeArticle={activeArticle}/>
          </Grid>
          ))}
      </Grid>

   
    
      </Grow>
  )
}

export default NewsCards
