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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 13,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 17,
            "end": 18,
            "value": 2,
            "raw": "2"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 22,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 26,
            "end": 27,
            "value": 3,
            "raw": "3"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 31,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 35,
            "end": 38,
            "object": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 64,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 68,
            "end": 71,
            "object": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 97,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 101,
            "end": 110,
            "left": {
              "type": "MemberExpression",
              "start": 101,
              "end": 104,
              "object": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "*",
            "right": {
              "type": "MemberExpression",
              "start": 107,
              "end": 110,
              "object": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 129,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 27,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 3,
              "raw": "3"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 31,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 35,
              "end": 38,
              "object": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 64,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 68,
              "end": 71,
              "object": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 97,
            "end": 110,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 101,
              "end": 110,
              "left": {
                "type": "MemberExpression",
                "start": 101,
                "end": 104,
                "object": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "start": 107,
                "end": 110,
                "object": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 131,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 144,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 148,
            "end": 161,
            "callee": {
              "type": "MemberExpression",
              "start": 148,
              "end": 159,
              "object": {
                "type": "Literal",
                "start": 149,
                "end": 150,
                "value": 1,
                "raw": "1"
              },
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 159,
                "name": "valueOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 173,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 177,
            "end": 182,
            "object": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 202,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 206,
            "end": 221,
            "callee": {
              "type": "MemberExpression",
              "start": 206,
              "end": 219,
              "object": {
                "type": "MemberExpression",
                "start": 206,
                "end": 211,
                "object": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 209,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 212,
                "end": 219,
                "name": "valueOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 231,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 235,
            "end": 242,
            "object": {
              "type": "MemberExpression",
              "start": 235,
              "end": 240,
              "object": {
                "type": "Identifier",
                "start": 235,
                "end": 238,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 140,
        "end": 269,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 144,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 148,
              "end": 161,
              "callee": {
                "type": "MemberExpression",
                "start": 148,
                "end": 159,
                "object": {
                  "type": "Literal",
                  "start": 149,
                  "end": 150,
                  "value": 1,
                  "raw": "1"
                },
                "property": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 159,
                  "name": "valueOf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 173,
            "end": 182,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 177,
              "end": 182,
              "object": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 202,
            "end": 221,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 206,
              "end": 221,
              "callee": {
                "type": "MemberExpression",
                "start": 206,
                "end": 219,
                "object": {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 211,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 209,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 219,
                  "name": "valueOf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 231,
            "end": 242,
            "id": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 235,
              "end": 242,
              "object": {
                "type": "MemberExpression",
                "start": 235,
                "end": 240,
                "object": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
