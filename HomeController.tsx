import {Component} from 'react';
import HOME_STRINGS from './config';

interface IProps {}

interface IState {
  openModal: boolean;
  setURL: string
}

export default class HomeController extends Component<IProps, IState> {
  state = {openModal: false, setURL: ''};

  handleAddressModalOpen = () => {
    this.setState({openModal: true});
  };

  handleAddressModalClose = () => {
    this.setState({openModal: false});
  };

  handleGetData = async () => {
    const url = `${HOME_STRINGS.BASE_URL} + users?page=2`;
    const response = await fetch(url);
    console.log('GET', response);
  };

  handlePostData = () => {
    fetch(`${HOME_STRINGS.BASE_URL} + users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Nirmal',
        job: 'Developer',
      }),
    })
      .then(response => response.json())
      .then(res => console.log('POST', res));
  };

  handlePutData = () => {
    fetch(`${HOME_STRINGS.BASE_URL} + users/2`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Nirmal',
        job: 'Developer',
      }),
    })
      .then(response => response.json())
      .then(res => console.log('PUT', res));
  };

  handleDeleteData = () => {
    fetch(`${HOME_STRINGS.BASE_URL} + users/2`, {
      method: 'DELETE',
    })
      .then(response => response.text())
      .then(res => console.log('DATA DELETED'));
  };
}
