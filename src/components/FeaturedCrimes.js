import React, { Component } from 'react'
import { Header, Grid, Segment } from 'semantic-ui-react'

const ncols = 2;

function splitIntoPairs(arr) {
  return arr.reduce((result, val, i) => {
    if (i % ncols === 0) result.push(arr.slice(i, i + ncols))
    return result
  }, [])
}

function createGrid(articleGroups) {
  return (
    <Grid stackable>
      {articleGroups.map((articleGroup, i) => {
        return (
          <Grid.Row columns={ncols} key={i}>
            {articleGroup.map((article, j) => {
              return (
                <Grid.Column key={j}>
                  <Segment>
                    <Header as='h3'>{article.title}</Header>
                    <p>{article.content}</p>
                  </Segment>
                </Grid.Column>
              )
            })}
          </Grid.Row>
        )
      })}
    </Grid>
  )
}

export default class FeaturedCrimes extends Component {
  render() {
    const articles = [
      {
        title: "Lorem ipsum",
        content: "ey."
      },
      {
        title: "angery",
        content: ">:("
      },
      {
        title: "Wtf is going on??",
        content: "putangina......................."
      },
      {
        title: "Lorem ipserm",
        content: "yo."
      }
    ]
    return (
      <div>
        <Header as='h1'>
          Featured Crimes
        </Header>
        {createGrid(splitIntoPairs(articles))}
      </div>
    )
  }
}
