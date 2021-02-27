import React, { useCallback, useEffect, useState } from 'react';
import { Row, UserInfo, Users } from '@components/styled-components/UserList';
import { debounce } from '@utils/debounce';

export default function UserList() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState('');

  const fetchUsers = useCallback(async () => {
    fetch(`https://jsonplaceholder.typicode.com/users${filter ? `?username=${encodeURIComponent(filter)}` : ''}`)
      .then(async (response) => {
        const res = await response.json();
        setData(res);
      });
  }, [filter]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, filter]);

  const handleFilter = (e) => {
    setValue(e.target.value);
    const debounceFn = debounce(() => {
      setFilter(e.target.value);
    });

    debounceFn();
  };

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={handleFilter}
          value={value}
          placeholder="Enter username"
        />
      </div>
      <Users>
        {data.map((user) => (
          <Row key={user.id}>
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address?.street}</span>
                <span>{user.address?.suite}</span>
                <span>{user.address?.city}</span>
                <span>{user.address?.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
}
