# @mindinventory/awesome-clock

_

## Installation

```sh
npm install @mindinventory/awesome-clock
```

or

```sh
yarn add @mindinventory/awesome-clock
```

## React Native MIClockView

A MIClockView implemented in React Native.

```
<AnimatedClockView
          circleSize={300}
          clockLinesHeightWidth={150 + 25}
          containerStyle={styles.containerStyle}
          minuteCircleStyles={styles.minuteCircleStyles}
          hourCircleStyle={styles.hourCircleStyle}
          countryZoneVisible={true}
          countryZoneName={'America/New_York'}
          hourCircleBackgroundColor="blue"
          secondCircleColor="grey"
          minuteCircleColor="blue"
          gradientLinesColor0="blue"
          gradientLinesColor1="blue"
          hourTextColor="white"
          minuteTextColor="blue"
        />

export const styles = StyleSheet.create({
   minuteCircleStyles: {
    position: 'absolute',
  },
  hourCircleStyle: {
    position: 'absolute',
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 20,
  },
});

```

# MIClockView Props

| Props     |  Type
| ------------------------ | ---------- |
| circleSize   | number |
| minuteCircleStyles            | ViewStyle |
| hourCircleStyle   | ViewStyle | void |
| countryZoneName             | string |
| countryZoneVisible           | boolean |
| minuteCircleColor          | string  |
| minuteTextColor    | string|
| gradientLinesColor1            |string |
| gradientLinesColor0   | string|
| secondCircleColor            | string |
| secondTextColor      | string |
| hourCircleBackgroundColor             | string |
| hourTextColor             | number |
| clockLinesHeightWidth             | number |
| minuteCircleStyles             | ViewStyle |
| containerStyle             | ViewStyle |

## Steps to publish RN SDK

1. Create a PR from develop -> main branch and review all the changes going out in this release. **Make sure there are no customer keys
2. Make sure all feature branches for this release have been merged to develop
3. contained in the PR**
4. Merge PR to main
5. Tag the latest commit on main with the release version eg `0.1.0`
6. Push tags back to origin: `git push origin main --tags`
7. Add the external distribution repo (<https://github.com/Mindinventory/react-native-awesome-clock.git>)
8. Push the tagged commit to the distribution main branch: `git push distribution main --tags`
  
## Contributing

To begin development, clone the project and check out the develop branch.

Create a new branch from develop for your assigned ticket with the format `feature/my-ticket-#5` where `my-ticket` is a few words describing the feature and `#5` is the Github issue number. Please make sure you have moved the ticket to the "In Progress" column in Github.

As you develop your feature, run the example app to test and debug your code.

Once your work is complete, verify that you have met all acceptance criteria on the ticket and have sufficient tests to cover the behavior. Then you may create a pull request back to the develop branch which will be reviewed and subsequently approved and merged.

##### Thanks react-native-reanimated lib for help us to create easy animation in view

## License

MIT
