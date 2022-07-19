# @mindinventory/awesome-clock
MindInventory react-native-awesome-clock lib is use for showing awesome UI Clock View into your react-native project.

<a href="url"><img src="https://user-images.githubusercontent.com/87525902/179689424-9137c3f6-5081-43a4-9dc6-6c33949b2739.gif" align="left" height="500" width="250" ></a>

## Installation

```sh
yarn add @mindinventory/react-native-awesome-clock
```

## A MIClockView implemented in React Native

```
<AwesomeClockView
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
```

# AwesomeClockView Props

| Props     |  Type  |  Description
| ------------------------ | ---------- | ---------- |
| minuteCircleColor          | string  | to applying minute circle color |
| minuteTextColor    | string| to applying minute text color |
| gradientLinesColor1            |string | to applying cut clock color for gradient mixture|
| gradientLinesColor0   | string| to applying cut clock color for gradient mixture|
| secondCircleColor            | string | to applying second circle color |
| secondTextColor      | string | to applying second text color |
| circleSize   | number | to main circle size |
| minuteCircleStyles            | ViewStyle | applying for minute circle style |
| hourCircleStyle   | ViewStyle  | applying for hour circle style |
| countryZoneName             | string | to specified country wise clock |
| countryZoneVisible           | boolean | to show/hide country clock name |
| hourCircleBackgroundColor             | string | to applying background color for hour circle |
| hourTextColor             | number | to applying hour text color |
| clockLinesHeightWidth             | number | to applying clock line height and width in number|
| minuteCircleStyles             | ViewStyle | to applying minute circle additional style|
| containerStyle             | ViewStyle | to applying main container style|

## Contributing

To begin development, clone the project and check out the develop branch.

Create a new branch from develop for your assigned ticket with the format `feature/my-ticket-#5` where `my-ticket` is a few words describing the feature and `#5` is the Github issue number. Please make sure you have moved the ticket to the "In Progress" column in Github.

As you develop your feature, run the example app to test and debug your code.

Once your work is complete, verify that you have met all acceptance criteria on the ticket and have sufficient tests to cover the behavior. Then you may create a pull request back to the develop branch which will be reviewed and subsequently approved and merged.

# LICENSE

React-native-tabbar-interaction is [MIT-licensed](https://github.com/Mindinventory/react-native-awesome-clock/blob/main/LICENSE).

# Let us know

We’d be really happy if you send us links to your projects where you use our component. Just send an email to sales@mindinventory.com And do let us know if you have any questions or suggestion regarding our work.
