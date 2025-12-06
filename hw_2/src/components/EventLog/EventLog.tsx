import React from 'react';
import {Paper, Button, Divider} from '@mui/material';
import {useEventLog} from '../../hooks/useEventLog';

const EventLog: React.FC = () => {
  const { events, clearEvents } = useEventLog();

  return (
    <Paper
      style={{
        width: 280,
        padding: 16,
        height: '100vh',
        overflowY: 'auto',
        position: 'fixed',
        right: 0,
        top: 0
      }}
    >
      <h3>Лог событий</h3>
      <Button variant="outlined" onClick={clearEvents}>
        Очистить
      </Button>

      <Divider style={{margin: '12px 0'}} />

      {events.length === 0 ? (
        <p>Пока нет событий…</p>
      ) : (
        events.map((e, i) => (
          <div key={i} style={{marginBottom: 8}}>
            • {e}
          </div>
        ))
      )}
    </Paper>
  );
};

export default EventLog;