import React, { useState, useEffect } from 'react';

function OfflineMessage({ showOfflineMessage }) {
  if (showOfflineMessage) {
    return (
      <div id="centerContainer">
        <div id="errorContainer" className="center-bottom">
          <span id="offlineIcon" style={{ display: 'inline' }}></span>
          <h4>No hay conexión a Internet</h4>
        </div>
      </div>
    );
  }

  return null;
}

export default OfflineMessage;
