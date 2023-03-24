import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import NewReleasesCard from "./NewReleasesCard"

const NewRelaeases = ({title ,releaseYear}) => {
  return (
    <View className="flex-1">
            <NewReleasesCard title={title} releaseYear={releaseYear}/>
    </View>
  )
}

export default NewRelaeases