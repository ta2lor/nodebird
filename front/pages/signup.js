import React, { useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Button, Input, Checkbox } from "antd";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChangeid] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangepassword] = useInput("");
  const [passwordcheck, setPasswordcheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangepasswordCheck = useCallback(
    (e) => {
      setPasswordcheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordcheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(password, passwordcheck, term);
  }, [password, passwordcheck, term]);
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeid} />
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />

          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            value={password}
            required
            type="password"
            onChange={onChangepassword}
          />
          <label htmlFor="user-passwordcheck">비밀번호 확인</label>
          <br />
          <Input
            name="user-passwordcheck"
            value={passwordcheck}
            required
            type="password"
            onChange={onChangepasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지않습니다.</ErrorMessage>
          )}
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              이용약관에 동의합니다.
            </Checkbox>
            {termError && (
              <ErrorMessage>이용약관에 동의해야합니다.</ErrorMessage>
            )}
          </div>
          <div style={{ marignTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
