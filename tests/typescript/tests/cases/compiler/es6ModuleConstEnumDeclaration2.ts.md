__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 20
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "initializer": null,
              "computed": false,
              "start": 27,
              "end": 28
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "initializer": null,
              "computed": false,
              "start": 34,
              "end": 35
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "initializer": null,
              "computed": false,
              "start": 41,
              "end": 42
            }
          ],
          "start": 21,
          "end": 44
        },
        "const": true,
        "declare": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 44
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 58
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": null,
            "computed": false,
            "start": 65,
            "end": 66
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "initializer": null,
            "computed": false,
            "start": 72,
            "end": 73
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "initializer": null,
            "computed": false,
            "start": 79,
            "end": 80
          }
        ],
        "start": 59,
        "end": 82
      },
      "const": true,
      "declare": false,
      "start": 45,
      "end": 82
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 93
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "optional": false,
            "computed": false,
            "start": 91,
            "end": 95
          },
          "definite": false,
          "start": 87,
          "end": 95
        }
      ],
      "declare": false,
      "start": 83,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 107
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "optional": false,
            "computed": false,
            "start": 105,
            "end": 109
          },
          "definite": false,
          "start": 101,
          "end": 109
        }
      ],
      "declare": false,
      "start": 97,
      "end": 110
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 127
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 154
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 166
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 165,
                      "end": 166
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 177
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 176,
                      "end": 177
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 188
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 187,
                      "end": 188
                    }
                  ],
                  "start": 155,
                  "end": 194
                },
                "const": true,
                "declare": false,
                "start": 141,
                "end": 194
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 134,
              "end": 194
            },
            {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e4",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 212
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 224
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 223,
                    "end": 224
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 235
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 234,
                    "end": 235
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 246
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 245,
                    "end": 246
                  }
                ],
                "start": 213,
                "end": 252
              },
              "const": true,
              "declare": false,
              "start": 199,
              "end": 252
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 263
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 268
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 269,
                      "end": 270
                    },
                    "optional": false,
                    "computed": false,
                    "start": 266,
                    "end": 270
                  },
                  "definite": false,
                  "start": 261,
                  "end": 270
                }
              ],
              "declare": false,
              "start": 257,
              "end": 271
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 282
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 287
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 289
                    },
                    "optional": false,
                    "computed": false,
                    "start": 285,
                    "end": 289
                  },
                  "definite": false,
                  "start": 280,
                  "end": 289
                }
              ],
              "declare": false,
              "start": 276,
              "end": 290
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 301
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 306
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 308
                    },
                    "optional": false,
                    "computed": false,
                    "start": 304,
                    "end": 308
                  },
                  "definite": false,
                  "start": 299,
                  "end": 308
                }
              ],
              "declare": false,
              "start": 295,
              "end": 309
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 320
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 325
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "optional": false,
                    "computed": false,
                    "start": 323,
                    "end": 327
                  },
                  "definite": false,
                  "start": 318,
                  "end": 327
                }
              ],
              "declare": false,
              "start": 314,
              "end": 328
            }
          ],
          "start": 128,
          "end": 330
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 118,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 330
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 340
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e5",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 367
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 378,
                      "end": 379
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 378,
                    "end": 379
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 390
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 389,
                    "end": 390
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 401
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 400,
                    "end": 401
                  }
                ],
                "start": 368,
                "end": 407
              },
              "const": true,
              "declare": false,
              "start": 354,
              "end": 407
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 347,
            "end": 407
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e6",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 425
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 437
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 436,
                  "end": 437
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 448
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 447,
                  "end": 448
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 459
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 458,
                  "end": 459
                }
              ],
              "start": 426,
              "end": 465
            },
            "const": true,
            "declare": false,
            "start": 412,
            "end": 465
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 476
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 481
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 483
                  },
                  "optional": false,
                  "computed": false,
                  "start": 479,
                  "end": 483
                },
                "definite": false,
                "start": 474,
                "end": 483
              }
            ],
            "declare": false,
            "start": 470,
            "end": 484
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 495
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 500
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 501,
                    "end": 502
                  },
                  "optional": false,
                  "computed": false,
                  "start": 498,
                  "end": 502
                },
                "definite": false,
                "start": 493,
                "end": 502
              }
            ],
            "declare": false,
            "start": 489,
            "end": 503
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 514
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 519
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 521
                  },
                  "optional": false,
                  "computed": false,
                  "start": 517,
                  "end": 521
                },
                "definite": false,
                "start": 512,
                "end": 521
              }
            ],
            "declare": false,
            "start": 508,
            "end": 522
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 533
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 536,
                    "end": 538
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 540
                  },
                  "optional": false,
                  "computed": false,
                  "start": 536,
                  "end": 540
                },
                "definite": false,
                "start": 531,
                "end": 540
              }
            ],
            "declare": false,
            "start": 527,
            "end": 541
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 552
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 557
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 558,
                      "end": 560
                    },
                    "optional": false,
                    "computed": false,
                    "start": 555,
                    "end": 560
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "optional": false,
                  "computed": false,
                  "start": 555,
                  "end": 562
                },
                "definite": false,
                "start": 550,
                "end": 562
              }
            ],
            "declare": false,
            "start": 546,
            "end": 563
          }
        ],
        "start": 341,
        "end": 565
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 331,
      "end": 565
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 565
}
```
