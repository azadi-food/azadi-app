import React from 'react';

import { useStyles } from './styles.js';

export const Footer =  (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <h4 className={classes.contact}>Contact Us </h4>
      <div className={classes.social}>
        <a className="facebook"><i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
        <a className="linkedin"><i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
        <a className="github"><i className="fab fa-github fa-lg white-text fa-2x"></i></a>
      </div>
      <div className={classes.copyright}> All Copyright Reserved © 2020 : <a href="" target="_blank"> Jadwaleh.com </a>
      </div>
    </footer>
  );
};


