import { createApiUri } from 'helpers/create-api-uri';
import { useEffect, useState } from 'react';
import { ResponseDto } from '@/common/models/dto/response.dto';

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const response: ResponseDto<string> = await fetch(
        createApiUri('/api/greet'),
      ).then((res) => res.json());

      console.log(response);

      const { body: greetText } = response;

      setText(greetText);
    })();
  });

  return <>{text}</>;
};
