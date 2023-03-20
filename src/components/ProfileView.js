import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ProfileView() {
    const { userid }= useParams()
    const host= window.location.hostname;
    axios({
        method: 'post',
        url: `http://${host}:80/php/userProfileData.php`,
        data: { user: sessionStorage.getItem('validatedUser'), count: 10, lastid: 0 }
    })
    .then(result => {
        console.log(result.data);
        this.setState({ contentData: result.data.data })
    })
    .catch(
        // error => this.setState({ error: error.message })
        () => {
        alert('error')
        }
    );
  return (
    <div>Hey there! I am {userid}</div>
  )
}
