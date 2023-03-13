import * as React from 'react';
import { Button, Card, Text } from 'react-native-paper';

const myCard = (props) => (
  <Card>
      <Card.Content>
      <Text variant="titleLarge">{props.title}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button icon="cards-heart-outline"/>
    </Card.Actions>
  </Card>
);

export default myCard;