import ReactBnbGallery from 'react-bnb-gallery';
import { useState } from 'react';
import { PHOTOS } from './photo';
import { password as P } from './const';
import { Grid, TextField, Button } from '@material-ui/core';
import { useQuery } from './utils';

function App() {
  const query = useQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState(query.get('p'));

  const handleChange = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (P === password) setIsOpen(true);
    else alert('비번이 틀렸습니다.');
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundImage: 'url("assets/background.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <Grid container direction="column" style={{ padding: 10, maxWidth: 300 }}>
        <TextField
          variant="filled"
          value={password}
          size="medium"
          onChange={handleChange}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
          label="비밀번호"
          type="password"
          color="secondary"
          style={{
            color: 'white',
            backgroundColor: 'white',
            marginBottom: 10,
            borderRadius: 5,
            opacity: '0.5',
          }}
        />
        <Button
          variant="outlined"
          size="large"
          onClick={handleSubmit}
          style={{ color: 'white', borderColor: 'white' }}>
          Open gallery
        </Button>
      </Grid>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default App;
