__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 270,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 129,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 129,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 18,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 27,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "TSEnumMember",
            "start": 31,
            "end": 38,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 35,
              "end": 38,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 64,
            "end": 71,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 68,
              "end": 71,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 97,
            "end": 110,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 101,
              "end": 110,
              "operator": "*",
              "left": {
                "type": "MemberExpression",
                "start": 101,
                "end": 104,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 107,
                "end": 110,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 131,
      "end": 269,
      "body": {
        "type": "TSEnumBody",
        "start": 140,
        "end": 269,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 144,
            "end": 161,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 148,
              "end": 161,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 148,
                "end": 159,
                "computed": false,
                "object": {
                  "type": "Literal",
                  "start": 149,
                  "end": 150,
                  "raw": "1",
                  "value": 1
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 159,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 173,
            "end": 182,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 177,
              "end": 182,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 202,
            "end": 221,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 206,
              "end": 221,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 206,
                "end": 219,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 211,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 209,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 219,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 231,
            "end": 242,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 235,
              "end": 242,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 235,
                "end": 240,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
