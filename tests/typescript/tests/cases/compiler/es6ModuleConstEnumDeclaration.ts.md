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
          "start": 128,
          "end": 130
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
                  "start": 155,
                  "end": 157
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
                        "start": 168,
                        "end": 169
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 168,
                      "end": 169
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 180
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 179,
                      "end": 180
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 191
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 190,
                      "end": 191
                    }
                  ],
                  "start": 158,
                  "end": 197
                },
                "const": true,
                "declare": false,
                "start": 144,
                "end": 197
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 137,
              "end": 197
            },
            {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e4",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 215
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
                      "start": 226,
                      "end": 227
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 226,
                    "end": 227
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 238
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 237,
                    "end": 238
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 248,
                    "end": 249
                  }
                ],
                "start": 216,
                "end": 255
              },
              "const": true,
              "declare": false,
              "start": 202,
              "end": 255
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
                    "start": 264,
                    "end": 266
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 269,
                      "end": 271
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "optional": false,
                    "computed": false,
                    "start": 269,
                    "end": 273
                  },
                  "definite": false,
                  "start": 264,
                  "end": 273
                }
              ],
              "declare": false,
              "start": 260,
              "end": 274
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
                    "start": 283,
                    "end": 285
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 290
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "optional": false,
                    "computed": false,
                    "start": 288,
                    "end": 292
                  },
                  "definite": false,
                  "start": 283,
                  "end": 292
                }
              ],
              "declare": false,
              "start": 279,
              "end": 293
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
                    "start": 302,
                    "end": 304
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 309
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 311
                    },
                    "optional": false,
                    "computed": false,
                    "start": 307,
                    "end": 311
                  },
                  "definite": false,
                  "start": 302,
                  "end": 311
                }
              ],
              "declare": false,
              "start": 298,
              "end": 312
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
                    "start": 321,
                    "end": 323
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 328
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 330
                    },
                    "optional": false,
                    "computed": false,
                    "start": 326,
                    "end": 330
                  },
                  "definite": false,
                  "start": 321,
                  "end": 330
                }
              ],
              "declare": false,
              "start": 317,
              "end": 331
            }
          ],
          "start": 131,
          "end": 333
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 118,
        "end": 333
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 333
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 346
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
                "start": 371,
                "end": 373
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
                      "start": 384,
                      "end": 385
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 384,
                    "end": 385
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 396
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 395,
                    "end": 396
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 407
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 406,
                    "end": 407
                  }
                ],
                "start": 374,
                "end": 413
              },
              "const": true,
              "declare": false,
              "start": 360,
              "end": 413
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 353,
            "end": 413
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e6",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 431
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
                    "start": 442,
                    "end": 443
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 442,
                  "end": 443
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 454
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 453,
                  "end": 454
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 465
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 464,
                  "end": 465
                }
              ],
              "start": 432,
              "end": 471
            },
            "const": true,
            "declare": false,
            "start": 418,
            "end": 471
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
                  "start": 480,
                  "end": 482
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 487
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 488,
                    "end": 489
                  },
                  "optional": false,
                  "computed": false,
                  "start": 485,
                  "end": 489
                },
                "definite": false,
                "start": 480,
                "end": 489
              }
            ],
            "declare": false,
            "start": 476,
            "end": 490
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
                  "start": 499,
                  "end": 501
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 506
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 507,
                    "end": 508
                  },
                  "optional": false,
                  "computed": false,
                  "start": 504,
                  "end": 508
                },
                "definite": false,
                "start": 499,
                "end": 508
              }
            ],
            "declare": false,
            "start": 495,
            "end": 509
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
                  "start": 518,
                  "end": 520
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 523,
                    "end": 525
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "optional": false,
                  "computed": false,
                  "start": 523,
                  "end": 527
                },
                "definite": false,
                "start": 518,
                "end": 527
              }
            ],
            "declare": false,
            "start": 514,
            "end": 528
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
                  "start": 537,
                  "end": 539
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 544
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 546
                  },
                  "optional": false,
                  "computed": false,
                  "start": 542,
                  "end": 546
                },
                "definite": false,
                "start": 537,
                "end": 546
              }
            ],
            "declare": false,
            "start": 533,
            "end": 547
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
                  "start": 556,
                  "end": 558
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
                      "start": 561,
                      "end": 563
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 566
                    },
                    "optional": false,
                    "computed": false,
                    "start": 561,
                    "end": 566
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 567,
                    "end": 568
                  },
                  "optional": false,
                  "computed": false,
                  "start": 561,
                  "end": 568
                },
                "definite": false,
                "start": 556,
                "end": 568
              }
            ],
            "declare": false,
            "start": 552,
            "end": 569
          }
        ],
        "start": 347,
        "end": 571
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 334,
      "end": 571
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 571
}
```
