import React, { Component } from 'react';
import { Container, Header, Title, Content, Form, Item, Input, Label, Button, Text, Body} from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';

class App extends Component {

  constructor() {
    super();
    this.state = {massa : "", tinggi : "", IMB : "", diagnosa : "", weight: "", height : "", a : "", b : "", c : "", d : ""}
  }

  count = () => {
    var m = this.state.massa;
    var t = (this.state.tinggi/100);

    var imb;
    var d;

    imb = (m/(t^2));
    
    if (imb < 18.5)
    {
      d = "Berat badan kurang!";
    }
    else if (imb >= 18.5 && imb <= 24.9)
    {
      d = "Berat badan ideal!";
    }
    else if (imb >= 25 && imb <= 29.9)
    {
      d = "BB berlebih!"
    }
    else if (imb >= 30 && imb <= 39.9)
    {
      d = "BB sangat berlebih!"
    }
    else
    {
      d = "Obesitas!!!!!"
    }

    this.setState({a: `Massa Tubuh :`});
    this.setState({b: `Tinggi Badan :`});
    this.setState({c: `Indeks Massa Tubuh ;`});
    this.setState({d: `Diagnosa :`});

    this.setState({weight: `${m} kg`});
    this.setState({height: `${t} m`});
    this.setState({IMB: imb});
    this.setState({diagnosa : d});

  }

  render() {

    return(

      <Container style ={{backgroundColor : "lightblue"}}>
        <Header>
          <Title style = {{marginTop: 15}}> INDEKS MASA TUBUH </Title>
        </Header>
        
        <Content>
          <Form>
            <Grid>
              <Col>
                <Item floatingLabel>
                  <Label>Massa (kg) </Label>
                  <Input onChangeText={(x)=> {this.setState({massa: x})}} value={this.state.massa}/>
                </Item>
              </Col>

              <Col>
                <Item floatingLabel>
                  <Label>Tinggi(cm) </Label>
                  <Input onChangeText={(x)=> {this.setState({tinggi: x})}} value={this.state.tinggi}/>
                </Item>
              </Col>
            </Grid>

            <Button block style = {{marginHorizontal: 10}} onPress={()=> {this.count()}}>
              <Text> HITUNG IMT </Text>
            </Button>
          </Form>

          <Body style = {{flex: 1}}>
            <Text style ={{marginTop : 25}}>{this.state.a}</Text>
            <Text style = {{fontWeight : "bold", fontSize: 20}}>{this.state.weight}</Text>

            <Text style ={{marginTop : 25}}>{this.state.b}</Text>
            <Text style = {{fontWeight : "bold", fontSize: 20}}>{this.state.height}</Text>

            <Text style ={{marginTop : 25}}>{this.state.c}</Text>
            <Text style = {{fontWeight : "bold", fontSize: 20}}>{this.state.IMB}</Text>

            <Text style ={{marginTop : 25}}>{this.state.d}</Text>
            <Text style = {{fontWeight : "bold", fontSize: 20}}>{this.state.diagnosa}</Text>
          </Body>

        </Content>
      </Container>

    )
  }
}

export default App;
