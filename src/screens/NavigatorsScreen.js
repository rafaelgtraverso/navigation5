import React from 'react';
import {Button, Text, Container, Grid, Col} from 'native-base';
import {s} from '../css/homeCSS/style';

const NavigatorsScreen = ({navigation}) => {
  return (
    <Container>
      <Grid style={s.homeContainer}>
        <Col>
          <Button block transparent onPress={() => navigation.openDrawer()}>
            <Text>Drawer Navigation</Text>
          </Button>
          <Button
            block
            transparent
            onPress={() => navigation.navigate('Stack')}>
            <Text>Stack Navigation</Text>
          </Button>
          <Button block transparent onPress={() => navigation.navigate('Tabs')}>
            <Text>Tabs Navigation</Text>
          </Button>
        </Col>
      </Grid>
    </Container>
  );
};

export default NavigatorsScreen;
