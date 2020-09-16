import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function Row(props) {
  return (
    <tr className="border">
      <td className="text-lg">{props.item.name}</td>
      <td>{props.item.class}</td>
      <td className="text-center">
        <a
          className="text-blue-400 hover:text-gray-600"
          href={'https://us02web.zoom.us/j/' + props.item.zoom}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faVideo} size={'2x'} />
        </a>
      </td>
      <td className="text-center">
        <a
          className="text-blue-400 hover:text-gray-600"
          href={'https://api.whatsapp.com/send?phone=' + props.item.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size={'2x'} />
        </a>
      </td>
    </tr>
  );
}

Row.propTypes = {};

export default Row;
