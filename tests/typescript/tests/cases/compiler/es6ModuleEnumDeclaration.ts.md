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
          "start": 12,
          "end": 14
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
                "start": 21,
                "end": 22
              },
              "initializer": null,
              "computed": false,
              "start": 21,
              "end": 22
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "initializer": null,
              "computed": false,
              "start": 28,
              "end": 29
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              "initializer": null,
              "computed": false,
              "start": 35,
              "end": 36
            }
          ],
          "start": 15,
          "end": 38
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 38
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 38
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 46
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
              "start": 53,
              "end": 54
            },
            "initializer": null,
            "computed": false,
            "start": 53,
            "end": 54
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "initializer": null,
            "computed": false,
            "start": 60,
            "end": 61
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "initializer": null,
            "computed": false,
            "start": 67,
            "end": 68
          }
        ],
        "start": 47,
        "end": 70
      },
      "const": false,
      "declare": false,
      "start": 39,
      "end": 70
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
            "start": 75,
            "end": 76
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 81
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "optional": false,
            "computed": false,
            "start": 79,
            "end": 83
          },
          "definite": false,
          "start": 75,
          "end": 83
        }
      ],
      "declare": false,
      "start": 71,
      "end": 84
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
            "start": 89,
            "end": 90
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "optional": false,
            "computed": false,
            "start": 93,
            "end": 97
          },
          "definite": false,
          "start": 89,
          "end": 97
        }
      ],
      "declare": false,
      "start": 85,
      "end": 98
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
          "start": 116,
          "end": 118
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
                  "start": 137,
                  "end": 139
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
                        "start": 150,
                        "end": 151
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 150,
                      "end": 151
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 162
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 161,
                      "end": 162
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 173
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 172,
                      "end": 173
                    }
                  ],
                  "start": 140,
                  "end": 179
                },
                "const": false,
                "declare": false,
                "start": 132,
                "end": 179
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 125,
              "end": 179
            },
            {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e4",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 191
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
                      "start": 202,
                      "end": 203
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 202,
                    "end": 203
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 213,
                    "end": 214
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 225
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 224,
                    "end": 225
                  }
                ],
                "start": 192,
                "end": 231
              },
              "const": false,
              "declare": false,
              "start": 184,
              "end": 231
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
                    "start": 240,
                    "end": 242
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 247
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "optional": false,
                    "computed": false,
                    "start": 245,
                    "end": 249
                  },
                  "definite": false,
                  "start": 240,
                  "end": 249
                }
              ],
              "declare": false,
              "start": 236,
              "end": 250
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
                    "start": 259,
                    "end": 261
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 266
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 268
                    },
                    "optional": false,
                    "computed": false,
                    "start": 264,
                    "end": 268
                  },
                  "definite": false,
                  "start": 259,
                  "end": 268
                }
              ],
              "declare": false,
              "start": 255,
              "end": 269
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
                    "start": 278,
                    "end": 280
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 283,
                      "end": 285
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 287
                    },
                    "optional": false,
                    "computed": false,
                    "start": 283,
                    "end": 287
                  },
                  "definite": false,
                  "start": 278,
                  "end": 287
                }
              ],
              "declare": false,
              "start": 274,
              "end": 288
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
                    "start": 297,
                    "end": 299
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 304
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    },
                    "optional": false,
                    "computed": false,
                    "start": 302,
                    "end": 306
                  },
                  "definite": false,
                  "start": 297,
                  "end": 306
                }
              ],
              "declare": false,
              "start": 293,
              "end": 307
            }
          ],
          "start": 119,
          "end": 309
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 106,
        "end": 309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 99,
      "end": 309
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 322
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
                "start": 341,
                "end": 343
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
                      "start": 354,
                      "end": 355
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 354,
                    "end": 355
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 366
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 365,
                    "end": 366
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 377
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 376,
                    "end": 377
                  }
                ],
                "start": 344,
                "end": 383
              },
              "const": false,
              "declare": false,
              "start": 336,
              "end": 383
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 329,
            "end": 383
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e6",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 395
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
                    "start": 406,
                    "end": 407
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 406,
                  "end": 407
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 417,
                  "end": 418
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 428,
                  "end": 429
                }
              ],
              "start": 396,
              "end": 435
            },
            "const": false,
            "declare": false,
            "start": 388,
            "end": 435
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
                  "start": 444,
                  "end": 446
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 451
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 449,
                  "end": 453
                },
                "definite": false,
                "start": 444,
                "end": 453
              }
            ],
            "declare": false,
            "start": 440,
            "end": 454
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
                  "start": 463,
                  "end": 465
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 468,
                    "end": 470
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 472
                  },
                  "optional": false,
                  "computed": false,
                  "start": 468,
                  "end": 472
                },
                "definite": false,
                "start": 463,
                "end": 472
              }
            ],
            "declare": false,
            "start": 459,
            "end": 473
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
                  "start": 482,
                  "end": 484
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 489
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "optional": false,
                  "computed": false,
                  "start": 487,
                  "end": 491
                },
                "definite": false,
                "start": 482,
                "end": 491
              }
            ],
            "declare": false,
            "start": 478,
            "end": 492
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
                  "start": 501,
                  "end": 503
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 508
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 509,
                    "end": 510
                  },
                  "optional": false,
                  "computed": false,
                  "start": 506,
                  "end": 510
                },
                "definite": false,
                "start": 501,
                "end": 510
              }
            ],
            "declare": false,
            "start": 497,
            "end": 511
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
                  "start": 520,
                  "end": 522
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
                      "start": 525,
                      "end": 527
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 530
                    },
                    "optional": false,
                    "computed": false,
                    "start": 525,
                    "end": 530
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 532
                  },
                  "optional": false,
                  "computed": false,
                  "start": 525,
                  "end": 532
                },
                "definite": false,
                "start": 520,
                "end": 532
              }
            ],
            "declare": false,
            "start": 516,
            "end": 533
          }
        ],
        "start": 323,
        "end": 535
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 310,
      "end": 535
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 535
}
```
