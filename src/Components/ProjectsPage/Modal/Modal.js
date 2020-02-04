import React from 'react';
import Dialog from '@material-ui/core/Dialog';

export default function ResponsiveDialog(props) {
  return (
    <div>
      <Dialog
        style={{ zIndex: '10000' }}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {props.children}
      </Dialog>
    </div>
  );
}