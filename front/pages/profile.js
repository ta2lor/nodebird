import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "임효석" },
    { nickname: "김개똥" },
    { nickname: "호랑이" },
  ];
  const followingList = [
    { nickname: "김군" },
    { nickname: "최군" },
    { nickname: "양군" },
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
