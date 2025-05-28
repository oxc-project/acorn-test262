__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 565,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 20,
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 21,
          "end": 44,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 27,
              "end": 28,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 34,
              "end": 35,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 41,
              "end": 42,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": true,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSEnumDeclaration",
      "start": 45,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 58,
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 59,
        "end": 82,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 65,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 72,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 79,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 96,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 91,
            "end": 95,
            "object": {
              "type": "Identifier",
              "start": 91,
              "end": 93,
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 110,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 105,
            "end": 109,
            "object": {
              "type": "Identifier",
              "start": 105,
              "end": 107,
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 330,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 118,
        "end": 330,
        "id": {
          "type": "Identifier",
          "start": 125,
          "end": 127,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 128,
          "end": 330,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 134,
              "end": 194,
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 141,
                "end": 194,
                "id": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 154,
                  "decorators": [],
                  "name": "e3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSEnumBody",
                  "start": 155,
                  "end": 194,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 165,
                      "end": 166,
                      "id": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 176,
                      "end": 177,
                      "id": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null,
                      "computed": false
                    },
                    {
                      "type": "TSEnumMember",
                      "start": 187,
                      "end": 188,
                      "id": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "initializer": null,
                      "computed": false
                    }
                  ]
                },
                "const": true,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "TSEnumDeclaration",
              "start": 199,
              "end": 252,
              "id": {
                "type": "Identifier",
                "start": 210,
                "end": 212,
                "decorators": [],
                "name": "e4",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 213,
                "end": 252,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 223,
                    "end": 224,
                    "id": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 234,
                    "end": 235,
                    "id": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 245,
                    "end": 246,
                    "id": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": true,
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 257,
              "end": 271,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 261,
                  "end": 270,
                  "id": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 263,
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 266,
                    "end": 270,
                    "object": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 268,
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 270,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 276,
              "end": 290,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 280,
                  "end": 289,
                  "id": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 282,
                    "decorators": [],
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 285,
                    "end": 289,
                    "object": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 287,
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 289,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 295,
              "end": 309,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 299,
                  "end": 308,
                  "id": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 301,
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 304,
                    "end": 308,
                    "object": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 306,
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 308,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 314,
              "end": 328,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 318,
                  "end": 327,
                  "id": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 320,
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 323,
                    "end": 327,
                    "object": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 325,
                      "decorators": [],
                      "name": "e4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 331,
      "end": 565,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 340,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 341,
        "end": 565,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 347,
            "end": 407,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 354,
              "end": 407,
              "id": {
                "type": "Identifier",
                "start": 365,
                "end": 367,
                "decorators": [],
                "name": "e5",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 368,
                "end": 407,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 378,
                    "end": 379,
                    "id": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 379,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 389,
                    "end": 390,
                    "id": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 390,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 400,
                    "end": 401,
                    "id": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 401,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": true,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSEnumDeclaration",
            "start": 412,
            "end": 465,
            "id": {
              "type": "Identifier",
              "start": 423,
              "end": 425,
              "decorators": [],
              "name": "e6",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 426,
              "end": 465,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 436,
                  "end": 437,
                  "id": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 447,
                  "end": 448,
                  "id": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 448,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 458,
                  "end": 459,
                  "id": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 459,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": true,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 470,
            "end": 484,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 474,
                "end": 483,
                "id": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 476,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 479,
                  "end": 483,
                  "object": {
                    "type": "Identifier",
                    "start": 479,
                    "end": 481,
                    "decorators": [],
                    "name": "e1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 483,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 489,
            "end": 503,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 493,
                "end": 502,
                "id": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 495,
                  "decorators": [],
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 498,
                  "end": 502,
                  "object": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 500,
                    "decorators": [],
                    "name": "e2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 501,
                    "end": 502,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 508,
            "end": 522,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 512,
                "end": 521,
                "id": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 514,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 517,
                  "end": 521,
                  "object": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 519,
                    "decorators": [],
                    "name": "e5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 521,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 527,
            "end": 541,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 531,
                "end": 540,
                "id": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 533,
                  "decorators": [],
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 536,
                  "end": 540,
                  "object": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 538,
                    "decorators": [],
                    "name": "e6",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 540,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 546,
            "end": 563,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 550,
                "end": 562,
                "id": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 552,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 555,
                  "end": 562,
                  "object": {
                    "type": "MemberExpression",
                    "start": 555,
                    "end": 560,
                    "object": {
                      "type": "Identifier",
                      "start": 555,
                      "end": 557,
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 558,
                      "end": 560,
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
