__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 529,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 38,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 14,
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 15,
          "end": 38,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 21,
              "end": 22,
              "id": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
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
              "start": 28,
              "end": 29,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
              "start": 35,
              "end": 36,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
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
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSEnumDeclaration",
      "start": 39,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 47,
        "end": 70,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 53,
            "end": 54,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
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
            "start": 60,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
            "start": 67,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
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
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 84,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 79,
            "end": 83,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 81,
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
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
      "start": 85,
      "end": 98,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 93,
            "end": 97,
            "object": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
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
      "start": 99,
      "end": 306,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 106,
        "end": 306,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 115,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 116,
          "end": 306,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 122,
              "end": 176,
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 129,
                "end": 176,
                "id": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 136,
                  "decorators": [],
                  "name": "e3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSEnumBody",
                  "start": 137,
                  "end": 176,
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "start": 147,
                      "end": 148,
                      "id": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
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
                      "start": 158,
                      "end": 159,
                      "id": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
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
                      "start": 169,
                      "end": 170,
                      "id": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
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
                "const": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "TSEnumDeclaration",
              "start": 181,
              "end": 228,
              "id": {
                "type": "Identifier",
                "start": 186,
                "end": 188,
                "decorators": [],
                "name": "e4",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 189,
                "end": 228,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 199,
                    "end": 200,
                    "id": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
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
                    "start": 210,
                    "end": 211,
                    "id": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
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
                    "start": 221,
                    "end": 222,
                    "id": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
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
              "const": false,
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 233,
              "end": 247,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 237,
                  "end": 246,
                  "id": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 239,
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 242,
                    "end": 246,
                    "object": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 244,
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
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
              "start": 252,
              "end": 266,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 256,
                  "end": 265,
                  "id": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 258,
                    "decorators": [],
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 261,
                    "end": 265,
                    "object": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 263,
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 264,
                      "end": 265,
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
              "start": 271,
              "end": 285,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 275,
                  "end": 284,
                  "id": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 277,
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 280,
                    "end": 284,
                    "object": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 282,
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 284,
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
              "start": 290,
              "end": 304,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 294,
                  "end": 303,
                  "id": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 296,
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 299,
                    "end": 303,
                    "object": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 301,
                      "decorators": [],
                      "name": "e4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 303,
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
      "start": 307,
      "end": 529,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 316,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 317,
        "end": 529,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 323,
            "end": 377,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 330,
              "end": 377,
              "id": {
                "type": "Identifier",
                "start": 335,
                "end": 337,
                "decorators": [],
                "name": "e5",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 338,
                "end": 377,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 348,
                    "end": 349,
                    "id": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 349,
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
                    "start": 359,
                    "end": 360,
                    "id": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
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
                    "start": 370,
                    "end": 371,
                    "id": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 371,
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
              "const": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSEnumDeclaration",
            "start": 382,
            "end": 429,
            "id": {
              "type": "Identifier",
              "start": 387,
              "end": 389,
              "decorators": [],
              "name": "e6",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 390,
              "end": 429,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 400,
                  "end": 401,
                  "id": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 401,
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
                  "start": 411,
                  "end": 412,
                  "id": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 412,
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
                  "start": 422,
                  "end": 423,
                  "id": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
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
            "const": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 434,
            "end": 448,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 438,
                "end": 447,
                "id": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 440,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 443,
                  "end": 447,
                  "object": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 445,
                    "decorators": [],
                    "name": "e1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 447,
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
            "start": 453,
            "end": 467,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 457,
                "end": 466,
                "id": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 459,
                  "decorators": [],
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 462,
                  "end": 466,
                  "object": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 464,
                    "decorators": [],
                    "name": "e2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 466,
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
            "start": 472,
            "end": 486,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 476,
                "end": 485,
                "id": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 478,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 481,
                  "end": 485,
                  "object": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 483,
                    "decorators": [],
                    "name": "e5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 485,
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
            "start": 491,
            "end": 505,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 495,
                "end": 504,
                "id": {
                  "type": "Identifier",
                  "start": 495,
                  "end": 497,
                  "decorators": [],
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 500,
                  "end": 504,
                  "object": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 502,
                    "decorators": [],
                    "name": "e6",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
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
            "start": 510,
            "end": 527,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 514,
                "end": 526,
                "id": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 516,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 519,
                  "end": 526,
                  "object": {
                    "type": "MemberExpression",
                    "start": 519,
                    "end": 524,
                    "object": {
                      "type": "Identifier",
                      "start": 519,
                      "end": 521,
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 522,
                      "end": 524,
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
                    "start": 525,
                    "end": 526,
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
