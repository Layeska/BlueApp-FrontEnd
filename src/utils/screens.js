const auth = {
  authStartScreen: "AuthStartScreen",
  loginScreen: "LoginScreen",
  registerScreen: "RegisterScreen",
};

const global = {
  userProfileScreen: "UserProfileScreen",
  chatScreen: "ChatScreen",
  imageFullScreen: "ImageFullScreen",
  camaraScreen: "CamaraScreen",
  groupScreen: "GroupScreen",
  groupProfileScreen: "GroupProfileScreen",
  addUserGroupScreen: "AddUserGroupScreen",
  changeNameGroupScreen: "ChangeNameGroupScreen",
};
const chats = {
  root: "ChatsRoot",
  chatsScreen: "ChatsScreen",
  createChatScreen: "CreateChatScreen",
};

const groups = {
  root: "GroupRoot",
  groupsScreen: "GroupsScreen",
  createGroupScreen: "CreateGroupScreen",
};

const settings = {
  root: "SettingRoot",
  settingsScreen: "SettingsScreen",
  changeFirstnameScreen: "ChangeFistnameScreen",
  changeLastnameScreen: "ChangeLastnameScreen"
};

export const screens = {
    auth,
    global,
    tab : {
        root: "BottomTabRoot",
        chats,
        groups,
        settings
    }
};
