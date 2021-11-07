import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // ��û�� ���� �� ������ error �� users �� �ʱ�ȭ�ϰ�
        setError(null);
        setUsers(null);
        // loading ���¸� true �� �ٲߴϴ�.
        setLoading(true);
        const response = await axios.get(
			'/info'
        );
        setUsers(response.data); // �����ʹ� response.data �ȿ� ����ֽ��ϴ�.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();

  }, []);

  if (loading) return <div>�ε���..</div>;
  if (error) return <div>������ �߻��߽��ϴ�</div>;
  if (!users) return null;
  return (

    <ul>
	{console.log(users)}
      {users.projectName}
    </ul>
  );
}

export default Users;
