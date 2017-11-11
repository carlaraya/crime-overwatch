import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import FeaturedInfo from './FeaturedInfo.js'

const ncols = 2;

function splitIntoPairs(arr) {
  return arr.reduce((result, val, i) => {
    if (i % ncols === 0) result.push(arr.slice(i, i + ncols))
    return result
  }, [])
}

function createGridCols(articleGroup) {
  return articleGroup.map((article, j) => {
    return (
      <Grid.Column key={j}>
        <FeaturedInfo article={article} />
      </Grid.Column>
    )
  })
}

function createGrid(articleGroups) {
  return (
    <Grid stackable>
      {articleGroups.map((articleGroup, i) => {
        return (
          <Grid.Row columns={ncols} key={i}>
            {createGridCols(articleGroup)}
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
        precinct: "Cainta Police Department",
        crimetype: "Robbery",
        datetime_posted: "Mar 1, 2017 2:34:56am",
        content: "Aenean sodales vel augue ut pulvinar. Cras sodales nunc ut purus lacinia accumsan. Etiam molestie orci quis orci porttitor, quis hendrerit tortor hendrerit. Aenean blandit, purus a lobortis cursus, erat nulla egestas sem, eu lacinia erat tellus a nibh. Sed mattis viverra augue a ullamcorper. Cras eu eros neque. Sed molestie non ex et consequat. Nulla id dui hendrerit, semper massa vitae, posuere augue. Etiam condimentum, massa nec finibus pretium, nulla orci dignissim quam, nec eleifend est velit a nisi. Sed sit amet cursus mi, sed porttitor justo. Sed vel malesuada ligula. Etiam quis mollis justo. Cras lacinia ullamcorper turpis vitae blandit. Etiam non consequat diam. Nunc vitae odio ac odio consectetur sagittis. "
      },
      {
        title: "angery",
        precinct: "NYPD",
        crimetype: "Other",
        datetime_posted: "Feb 28, 2017 11:00:23pm",
        content: "Integer dapibus mattis neque et ultricies. Quisque auctor orci quis odio tincidunt lacinia. Vivamus varius, elit eget dignissim suscipit, turpis lorem feugiat justo, sit amet volutpat est ante et nunc. Proin accumsan, mauris sit amet condimentum posuere, risus mi feugiat erat, vel pretium velit tellus a mi. Maecenas massa ligula, tristique eu tortor eu, rhoncus varius nibh. Phasellus aliquam rutrum malesuada. Integer ultricies dolor ac bibendum efficitur."
      },
      {
        title: "Wtf is going on??",
        precinct: "Marikina Police Department",
        crimetype: "Murder",
        datetime_posted: "Jan 3, 2017 8:00:01pm",
        content: " Pellentesque sollicitudin, nunc vitae faucibus aliquet, augue nisl lobortis lectus, id dignissim velit lectus non leo. Proin convallis at orci bibendum cursus. Sed cursus pharetra laoreet. Donec faucibus ac purus non luctus. In elementum felis cursus condimentum suscipit. In ut mi eu lacus consectetur fermentum. Quisque vitae sem id lorem congue gravida. Sed pretium erat quis dui consectetur, sit amet fermentum dolor ornare. Integer dictum est vel urna consequat laoreet. Vivamus eu diam eu lectus accumsan pharetra ut sed felis. Donec pellentesque magna tortor, id pretium lorem volutpat nec. Mauris porttitor cursus enim, a auctor sapien viverra in. Sed scelerisque diam sem, at venenatis risus interdum vitae. "
      },
      {
        title: "Lorem ipserm",
        precinct: "Cainta Police Department",
        crimetype: "Theft",
        datetime_posted: "Jan 2, 2017 8:00:01pm",
        content: " Praesent laoreet nisi et felis hendrerit, vel aliquam enim viverra. In hac habitasse platea dictumst. Donec egestas nulla felis, eget fringilla ante varius id. Maecenas in sapien orci. In sagittis, risus vitae vulputate bibendum, nisi mi ultrices ligula, quis gravida nisi metus id velit. Maecenas odio nulla, dictum ut vestibulum quis, sollicitudin et dolor. Mauris eget mauris eu tellus dignissim scelerisque. Etiam sed dignissim augue. Vivamus quis laoreet lectus, quis bibendum odio. Nunc venenatis, ligula ut vehicula condimentum, enim leo consectetur nunc, sodales cursus libero sem vel est. Nullam consequat lectus at turpis facilisis, eget vehicula lorem ultricies. Etiam a mi nec tortor eleifend blandit non in felis. "
      },
      {
        title: "Robbery at Sta. Lucia",
        precinct: "Cainta Police Department",
        crimetype: "Robbery",
        date_posted: "Jan 1, 2017 4:00:02am",
        content: " Nullam sem leo, porttitor et erat ut, bibendum condimentum nisi. Cras condimentum varius massa, eget pharetra ipsum laoreet et. Morbi nec orci a neque iaculis euismod id nec orci. Donec nunc dolor, rutrum vitae ullamcorper non, malesuada sed ligula. Fusce nec nulla dolor. Aenean eu convallis leo. Sed ullamcorper porttitor odio non efficitur. Pellentesque hendrerit libero sit amet porta rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat mauris id erat dictum fermentum. Ut tincidunt orci gravida lacus efficitur dapibus. Nunc maximus nisi mi, in dapibus magna tristique sit amet. "
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
