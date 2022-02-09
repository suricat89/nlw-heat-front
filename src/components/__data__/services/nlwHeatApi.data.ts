export const nlwHeatApiData = {
  getMessageLast: {
    response: {
      success: {
        meta: {
          self: 'suricat-PC',
          version: '1.0.0',
          count: 5,
        },
        records: [
          {
            id: '536a577c-a8fc-4937-a890-195cbbca1dc3',
            text: 'Message 5',
            created_at: '2022-01-28T03:02:18.159Z',
            user_id: '5b798412-a26c-4115-ae34-ced97245cf15',
            user: {
              id: '5b798412-a26c-4115-ae34-ced97245cf15',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user',
            },
          },
          {
            id: '5f6db370-ff35-432e-b1fa-cd112d7105d5',
            text: 'Message 4',
            created_at: '2022-01-27T04:07:46.391Z',
            user_id: '5b798412-a26c-4115-ae34-ced97245cf15',
            user: {
              id: '5b798412-a26c-4115-ae34-ced97245cf15',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user',
            },
          },
          {
            id: '127759a4-4da9-405b-8426-bb2bafe99076',
            text: 'Message 3',
            created_at: '2022-01-27T04:07:43.581Z',
            user_id: '5b798412-a26c-4115-ae34-ced97245cf15',
            user: {
              id: '5b798412-a26c-4115-ae34-ced97245cf15',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user',
            },
          },
          {
            id: 'af11029b-4959-43f0-8dcb-540b68bd043e',
            text: 'Message 2',
            created_at: '2022-01-27T04:07:36.148Z',
            user_id: '5b798412-a26c-4115-ae34-ced97245cf15',
            user: {
              id: '5b798412-a26c-4115-ae34-ced97245cf15',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user',
            },
          },
          {
            id: '85da4280-720e-4d9a-ad5b-f8695258e96c',
            text: 'Message 1',
            created_at: '2022-01-20T04:21:20.344Z',
            user_id: '5b798412-a26c-4115-ae34-ced97245cf15',
            user: {
              id: '5b798412-a26c-4115-ae34-ced97245cf15',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user',
            },
          },
        ],
      },
    },
  },
  socketReceivedNewMessage: {
    response: {
      success: {
        id: '536a577c-a8fc-4937-a890-195cbbca1dc3',
        text: 'New message from Socket',
        created_at: '2022-01-28T03:02:18.159Z',
        user_id: '5b798412-a26c-4115-ae34-ced97245cf15',
        user: {
          id: '5b798412-a26c-4115-ae34-ced97245cf15',
          name: 'Thiago Monteiro de Paula',
          github_id: 12009887,
          avatar_url: 'https://avatars.githubusercontent.com/u/12009887?v=4',
          login: 'suricat89',
          profile: 'user',
        },
      },
    },
  },
  postMessage: {
    request: {
      message: {
        text: 'Test message',
      },
    },
    response: {
      success: {
        meta: {
          self: 'suricat-PC',
          version: '1.0.0',
          count: 1,
        },
        records: [
          {
            id: '536a577c-a8fc-4937-a890-195cbbca1dc3',
            text: '22',
            created_at: '2022-01-28T03:02:18.159Z',
            user_id: '5b798412-a26c-4115-ae34-ced97245cf15',
            user: {
              id: '5b798412-a26c-4115-ae34-ced97245cf15',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user',
            },
          },
        ],
      },
    },
  },
  postUserAuthenticate: {
    request: {
      code: 'asdfqwerzxcv',
      source: 'web',
    },
    response: {
      success: {
        meta: {
          self: 'suricat-PC',
          version: '1.0.0',
          count: 1,
        },
        records: [
          {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJUaGlhZ28gTW9udGVpcm8gZGUgUGF1bGEiLCJhdmF0YXJVcmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTIwMDk4ODc_dj00IiwiaWQiOiI1Yjc5ODQxMi1hMjZjLTQxMTUtYWUzNC1jZWQ5NzI0NWNmMTUiLCJwZXJtaXNzaW9ucyI6WyJ1c2VyIl19LCJpYXQiOjE2NDMzMzg4MjYsInN1YiI6IjViNzk4NDEyLWEyNmMtNDExNS1hZTM0LWNlZDk3MjQ1Y2YxNSJ9.t72n4MoxtIE-aPM7kytYR6vd0yLTRmuk6-g0CRC-OMI',
            user: {
              id: '5b798412-a26c-4115-ae34-ced97245cf15',
              name: 'Thiago Monteiro de Paula',
              github_id: 12009887,
              avatar_url:
                'https://avatars.githubusercontent.com/u/12009887?v=4',
              login: 'suricat89',
              profile: 'user',
            },
          },
        ],
      },
    },
  },
  getUserProfile: {
    response: {
      success: {
        meta: {
          self: 'suricat-PC',
          version: '1.0.0',
          count: 1,
        },
        records: [
          {
            id: '5b798412-a26c-4115-ae34-ced97245cf15',
            name: 'Thiago Monteiro de Paula',
            github_id: 12009887,
            avatar_url: 'https://avatars.githubusercontent.com/u/12009887?v=4',
            login: 'suricat89',
            profile: 'user',
          },
        ],
      },
    },
  },
};
