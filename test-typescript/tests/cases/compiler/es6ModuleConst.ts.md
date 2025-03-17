__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 366,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 24,
              "value": "hello",
              "raw": "\"hello\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 60,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 60,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 48,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 40,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 54,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 93,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 89,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 237,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 109,
        "end": 237,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 118,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 119,
          "end": 237,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 125,
              "end": 144,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 132,
                "end": 144,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 138,
                    "end": 143,
                    "id": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "k",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 149,
              "end": 183,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 156,
                "end": 183,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 162,
                    "end": 175,
                    "id": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 171,
                      "name": "l",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 163,
                        "end": 171,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 165,
                          "end": 171
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "definite": false
                  },
                  {
                    "type": "VariableDeclarator",
                    "start": 177,
                    "end": 182,
                    "id": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "name": "k",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "VariableDeclaration",
              "start": 188,
              "end": 203,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 194,
                  "end": 202,
                  "id": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 198,
                    "end": 202,
                    "object": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 200,
                      "name": "m1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 202,
                      "name": "k",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 208,
              "end": 235,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 214,
                  "end": 227,
                  "id": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 223,
                    "name": "o",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 223,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 217,
                        "end": 223
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 229,
                  "end": 234,
                  "id": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 238,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 247,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 248,
        "end": 366,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 254,
            "end": 273,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 261,
              "end": 273,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 267,
                  "end": 272,
                  "id": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 278,
            "end": 312,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 285,
              "end": 312,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 291,
                  "end": 304,
                  "id": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 300,
                    "name": "l",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 292,
                      "end": 300,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 294,
                        "end": 300
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 304,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 306,
                  "end": 311,
                  "id": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 307,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 311,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 317,
            "end": 332,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 323,
                "end": 331,
                "id": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 324,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 327,
                  "end": 331,
                  "object": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 329,
                    "name": "m1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 337,
            "end": 364,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 343,
                "end": 356,
                "id": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 352,
                  "name": "o",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 344,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 346,
                      "end": 352
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 358,
                "end": 363,
                "id": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 363,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
