__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 21
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 28
              },
              "optional": false,
              "computed": false,
              "start": 17,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-US",
                "raw": "\"en-US\"",
                "start": 29,
                "end": 36
              }
            ],
            "start": 13,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "deDE",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 60
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 67
              },
              "optional": false,
              "computed": false,
              "start": 56,
              "end": 67
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "de-DE",
                "raw": "\"de-DE\"",
                "start": 68,
                "end": 75
              }
            ],
            "start": 52,
            "end": 76
          },
          "definite": false,
          "start": 45,
          "end": 76
        }
      ],
      "declare": false,
      "start": 39,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "jaJP",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 88
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 106
              },
              "optional": false,
              "computed": false,
              "start": 95,
              "end": 106
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "ja-JP",
                "raw": "\"ja-JP\"",
                "start": 107,
                "end": 114
              }
            ],
            "start": 91,
            "end": 115
          },
          "definite": false,
          "start": 84,
          "end": 115
        }
      ],
      "declare": false,
      "start": 78,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 127
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 138
            },
            "typeArguments": null,
            "arguments": [],
            "start": 130,
            "end": 140
          },
          "definite": false,
          "start": 124,
          "end": 140
        }
      ],
      "declare": false,
      "start": 118,
      "end": 141
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 151
          },
          "init": {
            "type": "Literal",
            "value": 1000,
            "raw": "1000",
            "start": 154,
            "end": 158
          },
          "definite": false,
          "start": 148,
          "end": 158
        }
      ],
      "declare": false,
      "start": 142,
      "end": 159
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigint",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 172
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "123456789123456789n",
            "bigint": "123456789123456789",
            "start": 175,
            "end": 194
          },
          "definite": false,
          "start": 166,
          "end": 194
        }
      ],
      "declare": false,
      "start": 160,
      "end": 195
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 205
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 208,
            "end": 210
          },
          "definite": false,
          "start": 202,
          "end": 210
        }
      ],
      "declare": false,
      "start": 196,
      "end": 211
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 244
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 245,
                        "end": 251
                      },
                      "start": 245,
                      "end": 253
                    }
                  ],
                  "start": 244,
                  "end": 254
                },
                "start": 236,
                "end": 254
              },
              "start": 234,
              "end": 254
            },
            "start": 219,
            "end": 254
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "de-DE",
                "raw": "'de-DE'",
                "start": 258,
                "end": 265
              },
              {
                "type": "Literal",
                "value": "ja-JP",
                "raw": "'ja-JP'",
                "start": 267,
                "end": 274
              }
            ],
            "start": 257,
            "end": 275
          },
          "definite": false,
          "start": 219,
          "end": 275
        }
      ],
      "declare": false,
      "start": 213,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 281
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 296
          },
          "optional": false,
          "computed": false,
          "start": 278,
          "end": 296
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 301
          }
        ],
        "optional": false,
        "start": 278,
        "end": 302
      },
      "directive": null,
      "start": 278,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleDateString",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 326
          },
          "optional": false,
          "computed": false,
          "start": 304,
          "end": 326
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 331
          }
        ],
        "optional": false,
        "start": 304,
        "end": 332
      },
      "directive": null,
      "start": 304,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 337
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleTimeString",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 356
          },
          "optional": false,
          "computed": false,
          "start": 334,
          "end": 356
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 361
          }
        ],
        "optional": false,
        "start": 334,
        "end": 362
      },
      "directive": null,
      "start": 334,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 367
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 382
          },
          "optional": false,
          "computed": false,
          "start": 364,
          "end": 382
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 388
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 394
              }
            ],
            "start": 383,
            "end": 395
          }
        ],
        "optional": false,
        "start": 364,
        "end": 396
      },
      "directive": null,
      "start": 364,
      "end": 397
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleDateString",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 420
          },
          "optional": false,
          "computed": false,
          "start": 398,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 426
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 432
              }
            ],
            "start": 421,
            "end": 433
          }
        ],
        "optional": false,
        "start": 398,
        "end": 434
      },
      "directive": null,
      "start": 398,
      "end": 435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 439
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleTimeString",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 458
          },
          "optional": false,
          "computed": false,
          "start": 436,
          "end": 458
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 464
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 470
              }
            ],
            "start": 459,
            "end": 471
          }
        ],
        "optional": false,
        "start": 436,
        "end": 472
      },
      "directive": null,
      "start": 436,
      "end": 473
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 478
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 493
          },
          "optional": false,
          "computed": false,
          "start": 475,
          "end": 493
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 498
          }
        ],
        "optional": false,
        "start": 475,
        "end": 499
      },
      "directive": null,
      "start": 475,
      "end": 500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 504
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 519
          },
          "optional": false,
          "computed": false,
          "start": 501,
          "end": 519
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 525
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 531
              }
            ],
            "start": 520,
            "end": 532
          }
        ],
        "optional": false,
        "start": 501,
        "end": 533
      },
      "directive": null,
      "start": 501,
      "end": 534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigint",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 542
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 557
          },
          "optional": false,
          "computed": false,
          "start": 536,
          "end": 557
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 562
          }
        ],
        "optional": false,
        "start": 536,
        "end": 563
      },
      "directive": null,
      "start": 536,
      "end": 564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigint",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 571
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 586
          },
          "optional": false,
          "computed": false,
          "start": 565,
          "end": 586
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 592
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 598
              }
            ],
            "start": 587,
            "end": 599
          }
        ],
        "optional": false,
        "start": 565,
        "end": 600
      },
      "directive": null,
      "start": 565,
      "end": 601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 606
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleLowerCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 624
          },
          "optional": false,
          "computed": false,
          "start": 603,
          "end": 624
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 629
          }
        ],
        "optional": false,
        "start": 603,
        "end": 630
      },
      "directive": null,
      "start": 603,
      "end": 631
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 632,
            "end": 635
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleLowerCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 653
          },
          "optional": false,
          "computed": false,
          "start": 632,
          "end": 653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 655,
                "end": 659
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 665
              }
            ],
            "start": 654,
            "end": 666
          }
        ],
        "optional": false,
        "start": 632,
        "end": 667
      },
      "directive": null,
      "start": 632,
      "end": 668
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 672
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 673,
            "end": 690
          },
          "optional": false,
          "computed": false,
          "start": 669,
          "end": 690
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 695
          }
        ],
        "optional": false,
        "start": 669,
        "end": 696
      },
      "directive": null,
      "start": 669,
      "end": 697
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 701
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 702,
            "end": 719
          },
          "optional": false,
          "computed": false,
          "start": 698,
          "end": 719
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 725
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 727,
                "end": 731
              }
            ],
            "start": 720,
            "end": 732
          }
        ],
        "optional": false,
        "start": 698,
        "end": 733
      },
      "directive": null,
      "start": 698,
      "end": 734
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 738
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "localeCompare",
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 752
          },
          "optional": false,
          "computed": false,
          "start": 735,
          "end": 752
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 756
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 762
          }
        ],
        "optional": false,
        "start": 735,
        "end": 763
      },
      "directive": null,
      "start": 735,
      "end": 764
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 765,
            "end": 768
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "localeCompare",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 782
          },
          "optional": false,
          "computed": false,
          "start": 765,
          "end": 782
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 786
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 793
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 799
              }
            ],
            "start": 788,
            "end": 800
          }
        ],
        "optional": false,
        "start": 765,
        "end": 801
      },
      "directive": null,
      "start": 765,
      "end": 802
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 812
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "PluralRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 813,
            "end": 824
          },
          "optional": false,
          "computed": false,
          "start": 808,
          "end": 824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 829
          }
        ],
        "start": 804,
        "end": 830
      },
      "directive": null,
      "start": 804,
      "end": 831
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 836,
            "end": 840
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "PluralRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 852
          },
          "optional": false,
          "computed": false,
          "start": 836,
          "end": 852
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 854,
                "end": 858
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 860,
                "end": 864
              }
            ],
            "start": 853,
            "end": 865
          }
        ],
        "start": 832,
        "end": 866
      },
      "directive": null,
      "start": 832,
      "end": 867
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 872,
            "end": 876
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "PluralRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 877,
            "end": 888
          },
          "optional": false,
          "computed": false,
          "start": 872,
          "end": 888
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 889,
            "end": 904
          }
        ],
        "start": 868,
        "end": 905
      },
      "directive": null,
      "start": 868,
      "end": 906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 907,
              "end": 911
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "PluralRules",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 923
            },
            "optional": false,
            "computed": false,
            "start": 907,
            "end": 923
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 924,
            "end": 942
          },
          "optional": false,
          "computed": false,
          "start": 907,
          "end": 942
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 947
          }
        ],
        "optional": false,
        "start": 907,
        "end": 948
      },
      "directive": null,
      "start": 907,
      "end": 949
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 954
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "PluralRules",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 966
            },
            "optional": false,
            "computed": false,
            "start": 950,
            "end": 966
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 967,
            "end": 985
          },
          "optional": false,
          "computed": false,
          "start": 950,
          "end": 985
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 987,
                "end": 991
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 997
              }
            ],
            "start": 986,
            "end": 998
          }
        ],
        "optional": false,
        "start": 950,
        "end": 999
      },
      "directive": null,
      "start": 950,
      "end": 1000
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1005
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "PluralRules",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1017
            },
            "optional": false,
            "computed": false,
            "start": 1001,
            "end": 1017
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1018,
            "end": 1036
          },
          "optional": false,
          "computed": false,
          "start": 1001,
          "end": 1036
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1052
          }
        ],
        "optional": false,
        "start": 1001,
        "end": 1053
      },
      "directive": null,
      "start": 1001,
      "end": 1054
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1060,
            "end": 1064
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "RelativeTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1065,
            "end": 1083
          },
          "optional": false,
          "computed": false,
          "start": 1060,
          "end": 1083
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1084,
            "end": 1088
          }
        ],
        "start": 1056,
        "end": 1089
      },
      "directive": null,
      "start": 1056,
      "end": 1090
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1099
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "RelativeTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1100,
            "end": 1118
          },
          "optional": false,
          "computed": false,
          "start": 1095,
          "end": 1118
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1120,
                "end": 1124
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1126,
                "end": 1130
              }
            ],
            "start": 1119,
            "end": 1131
          }
        ],
        "start": 1091,
        "end": 1132
      },
      "directive": null,
      "start": 1091,
      "end": 1133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1138,
            "end": 1142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "RelativeTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1143,
            "end": 1161
          },
          "optional": false,
          "computed": false,
          "start": 1138,
          "end": 1161
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1162,
            "end": 1177
          }
        ],
        "start": 1134,
        "end": 1178
      },
      "directive": null,
      "start": 1134,
      "end": 1179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1180,
              "end": 1184
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "RelativeTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1203
            },
            "optional": false,
            "computed": false,
            "start": 1180,
            "end": 1203
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1204,
            "end": 1222
          },
          "optional": false,
          "computed": false,
          "start": 1180,
          "end": 1222
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1227
          }
        ],
        "optional": false,
        "start": 1180,
        "end": 1228
      },
      "directive": null,
      "start": 1180,
      "end": 1229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1234
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "RelativeTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1253
            },
            "optional": false,
            "computed": false,
            "start": 1230,
            "end": 1253
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1254,
            "end": 1272
          },
          "optional": false,
          "computed": false,
          "start": 1230,
          "end": 1272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1278
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1284
              }
            ],
            "start": 1273,
            "end": 1285
          }
        ],
        "optional": false,
        "start": 1230,
        "end": 1286
      },
      "directive": null,
      "start": 1230,
      "end": 1287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1288,
              "end": 1292
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "RelativeTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1311
            },
            "optional": false,
            "computed": false,
            "start": 1288,
            "end": 1311
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1312,
            "end": 1330
          },
          "optional": false,
          "computed": false,
          "start": 1288,
          "end": 1330
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1331,
            "end": 1346
          }
        ],
        "optional": false,
        "start": 1288,
        "end": 1347
      },
      "directive": null,
      "start": 1288,
      "end": 1348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1354,
            "end": 1358
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collator",
            "optional": false,
            "typeAnnotation": null,
            "start": 1359,
            "end": 1367
          },
          "optional": false,
          "computed": false,
          "start": 1354,
          "end": 1367
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1368,
            "end": 1372
          }
        ],
        "start": 1350,
        "end": 1373
      },
      "directive": null,
      "start": 1350,
      "end": 1374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1379,
            "end": 1383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collator",
            "optional": false,
            "typeAnnotation": null,
            "start": 1384,
            "end": 1392
          },
          "optional": false,
          "computed": false,
          "start": 1379,
          "end": 1392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1394,
                "end": 1398
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1400,
                "end": 1404
              }
            ],
            "start": 1393,
            "end": 1405
          }
        ],
        "start": 1375,
        "end": 1406
      },
      "directive": null,
      "start": 1375,
      "end": 1407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1416
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collator",
            "optional": false,
            "typeAnnotation": null,
            "start": 1417,
            "end": 1425
          },
          "optional": false,
          "computed": false,
          "start": 1412,
          "end": 1425
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1426,
            "end": 1441
          }
        ],
        "start": 1408,
        "end": 1442
      },
      "directive": null,
      "start": 1408,
      "end": 1443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1448
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1457
            },
            "optional": false,
            "computed": false,
            "start": 1444,
            "end": 1457
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1458,
            "end": 1476
          },
          "optional": false,
          "computed": false,
          "start": 1444,
          "end": 1476
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1481
          }
        ],
        "optional": false,
        "start": 1444,
        "end": 1482
      },
      "directive": null,
      "start": 1444,
      "end": 1483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1488
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1489,
              "end": 1497
            },
            "optional": false,
            "computed": false,
            "start": 1484,
            "end": 1497
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1498,
            "end": 1516
          },
          "optional": false,
          "computed": false,
          "start": 1484,
          "end": 1516
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1518,
                "end": 1522
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1528
              }
            ],
            "start": 1517,
            "end": 1529
          }
        ],
        "optional": false,
        "start": 1484,
        "end": 1530
      },
      "directive": null,
      "start": 1484,
      "end": 1531
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1537,
            "end": 1541
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DateTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1542,
            "end": 1556
          },
          "optional": false,
          "computed": false,
          "start": 1537,
          "end": 1556
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1557,
            "end": 1561
          }
        ],
        "start": 1533,
        "end": 1562
      },
      "directive": null,
      "start": 1533,
      "end": 1563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1568,
            "end": 1572
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DateTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1573,
            "end": 1587
          },
          "optional": false,
          "computed": false,
          "start": 1568,
          "end": 1587
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1589,
                "end": 1593
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1599
              }
            ],
            "start": 1588,
            "end": 1600
          }
        ],
        "start": 1564,
        "end": 1601
      },
      "directive": null,
      "start": 1564,
      "end": 1602
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1607,
            "end": 1611
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DateTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1612,
            "end": 1626
          },
          "optional": false,
          "computed": false,
          "start": 1607,
          "end": 1626
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1642
          }
        ],
        "start": 1603,
        "end": 1643
      },
      "directive": null,
      "start": 1603,
      "end": 1644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1645,
              "end": 1649
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "DateTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1650,
              "end": 1664
            },
            "optional": false,
            "computed": false,
            "start": 1645,
            "end": 1664
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1665,
            "end": 1683
          },
          "optional": false,
          "computed": false,
          "start": 1645,
          "end": 1683
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1684,
            "end": 1688
          }
        ],
        "optional": false,
        "start": 1645,
        "end": 1689
      },
      "directive": null,
      "start": 1645,
      "end": 1690
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1691,
              "end": 1695
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "DateTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1696,
              "end": 1710
            },
            "optional": false,
            "computed": false,
            "start": 1691,
            "end": 1710
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1711,
            "end": 1729
          },
          "optional": false,
          "computed": false,
          "start": 1691,
          "end": 1729
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1731,
                "end": 1735
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1741
              }
            ],
            "start": 1730,
            "end": 1742
          }
        ],
        "optional": false,
        "start": 1691,
        "end": 1743
      },
      "directive": null,
      "start": 1691,
      "end": 1744
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1749
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "DateTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1750,
              "end": 1764
            },
            "optional": false,
            "computed": false,
            "start": 1745,
            "end": 1764
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1765,
            "end": 1783
          },
          "optional": false,
          "computed": false,
          "start": 1745,
          "end": 1783
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1784,
            "end": 1799
          }
        ],
        "optional": false,
        "start": 1745,
        "end": 1800
      },
      "directive": null,
      "start": 1745,
      "end": 1801
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1807,
            "end": 1811
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1812,
            "end": 1824
          },
          "optional": false,
          "computed": false,
          "start": 1807,
          "end": 1824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1829
          }
        ],
        "start": 1803,
        "end": 1830
      },
      "directive": null,
      "start": 1803,
      "end": 1831
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1836,
            "end": 1840
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1841,
            "end": 1853
          },
          "optional": false,
          "computed": false,
          "start": 1836,
          "end": 1853
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1855,
                "end": 1859
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1861,
                "end": 1865
              }
            ],
            "start": 1854,
            "end": 1866
          }
        ],
        "start": 1832,
        "end": 1867
      },
      "directive": null,
      "start": 1832,
      "end": 1868
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1873,
            "end": 1877
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1878,
            "end": 1890
          },
          "optional": false,
          "computed": false,
          "start": 1873,
          "end": 1890
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1906
          }
        ],
        "start": 1869,
        "end": 1907
      },
      "directive": null,
      "start": 1869,
      "end": 1908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1909,
              "end": 1913
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1914,
              "end": 1926
            },
            "optional": false,
            "computed": false,
            "start": 1909,
            "end": 1926
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1927,
            "end": 1945
          },
          "optional": false,
          "computed": false,
          "start": 1909,
          "end": 1945
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1946,
            "end": 1950
          }
        ],
        "optional": false,
        "start": 1909,
        "end": 1951
      },
      "directive": null,
      "start": 1909,
      "end": 1952
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1957
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1958,
              "end": 1970
            },
            "optional": false,
            "computed": false,
            "start": 1953,
            "end": 1970
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1971,
            "end": 1989
          },
          "optional": false,
          "computed": false,
          "start": 1953,
          "end": 1989
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1990,
            "end": 2005
          }
        ],
        "optional": false,
        "start": 1953,
        "end": 2006
      },
      "directive": null,
      "start": 1953,
      "end": 2007
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2007
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13,
    "end": 16,
    "range": [
      13,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 17,
    "end": 21,
    "range": [
      17,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 22,
    "end": 28,
    "range": [
      22,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 29,
    "end": 36,
    "range": [
      29,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44,
    "range": [
      39,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 45,
    "end": 49,
    "range": [
      45,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 52,
    "end": 55,
    "range": [
      52,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "String",
    "value": "\"de-DE\"",
    "start": 68,
    "end": 75,
    "range": [
      68,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83,
    "range": [
      78,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 84,
    "end": 88,
    "range": [
      84,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 95,
    "end": 99,
    "range": [
      95,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "String",
    "value": "\"ja-JP\"",
    "start": 107,
    "end": 114,
    "range": [
      107,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123,
    "range": [
      118,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 124,
    "end": 127,
    "range": [
      124,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 154,
    "end": 158,
    "range": [
      154,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165,
    "range": [
      160,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 166,
    "end": 172,
    "range": [
      166,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Numeric",
    "value": "123456789123456789n",
    "start": 175,
    "end": 194,
    "range": [
      175,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201,
    "range": [
      196,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 202,
    "end": 205,
    "range": [
      202,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 208,
    "end": 210,
    "range": [
      208,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218,
    "range": [
      213,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 219,
    "end": 234,
    "range": [
      219,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 236,
    "end": 244,
    "range": [
      236,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "String",
    "value": "'de-DE'",
    "start": 258,
    "end": 265,
    "range": [
      258,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "String",
    "value": "'ja-JP'",
    "start": 267,
    "end": 274,
    "range": [
      267,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 278,
    "end": 281,
    "range": [
      278,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 282,
    "end": 296,
    "range": [
      282,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 304,
    "end": 307,
    "range": [
      304,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleDateString",
    "start": 308,
    "end": 326,
    "range": [
      308,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 327,
    "end": 331,
    "range": [
      327,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 334,
    "end": 337,
    "range": [
      334,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleTimeString",
    "start": 338,
    "end": 356,
    "range": [
      338,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 357,
    "end": 361,
    "range": [
      357,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 368,
    "end": 382,
    "range": [
      368,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 384,
    "end": 388,
    "range": [
      384,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 390,
    "end": 394,
    "range": [
      390,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 398,
    "end": 401,
    "range": [
      398,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleDateString",
    "start": 402,
    "end": 420,
    "range": [
      402,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 422,
    "end": 426,
    "range": [
      422,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 436,
    "end": 439,
    "range": [
      436,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleTimeString",
    "start": 440,
    "end": 458,
    "range": [
      440,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 460,
    "end": 464,
    "range": [
      460,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 466,
    "end": 470,
    "range": [
      466,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 475,
    "end": 478,
    "range": [
      475,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 479,
    "end": 493,
    "range": [
      479,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 494,
    "end": 498,
    "range": [
      494,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 501,
    "end": 504,
    "range": [
      501,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 505,
    "end": 519,
    "range": [
      505,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 521,
    "end": 525,
    "range": [
      521,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 527,
    "end": 531,
    "range": [
      527,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 536,
    "end": 542,
    "range": [
      536,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 543,
    "end": 557,
    "range": [
      543,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 558,
    "end": 562,
    "range": [
      558,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 565,
    "end": 571,
    "range": [
      565,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 572,
    "end": 586,
    "range": [
      572,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 588,
    "end": 592,
    "range": [
      588,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 594,
    "end": 598,
    "range": [
      594,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 603,
    "end": 606,
    "range": [
      603,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleLowerCase",
    "start": 607,
    "end": 624,
    "range": [
      607,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 625,
    "end": 629,
    "range": [
      625,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 632,
    "end": 635,
    "range": [
      632,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleLowerCase",
    "start": 636,
    "end": 653,
    "range": [
      636,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 655,
    "end": 659,
    "range": [
      655,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 661,
    "end": 665,
    "range": [
      661,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 669,
    "end": 672,
    "range": [
      669,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleUpperCase",
    "start": 673,
    "end": 690,
    "range": [
      673,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 691,
    "end": 695,
    "range": [
      691,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 698,
    "end": 701,
    "range": [
      698,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleUpperCase",
    "start": 702,
    "end": 719,
    "range": [
      702,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 721,
    "end": 725,
    "range": [
      721,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 727,
    "end": 731,
    "range": [
      727,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 735,
    "end": 738,
    "range": [
      735,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "localeCompare",
    "start": 739,
    "end": 752,
    "range": [
      739,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 753,
    "end": 756,
    "range": [
      753,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 758,
    "end": 762,
    "range": [
      758,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 765,
    "end": 768,
    "range": [
      765,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "localeCompare",
    "start": 769,
    "end": 782,
    "range": [
      769,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 783,
    "end": 786,
    "range": [
      783,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 789,
    "end": 793,
    "range": [
      789,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 795,
    "end": 799,
    "range": [
      795,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 804,
    "end": 807,
    "range": [
      804,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 808,
    "end": 812,
    "range": [
      808,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 813,
    "end": 824,
    "range": [
      813,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 825,
    "end": 829,
    "range": [
      825,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 832,
    "end": 835,
    "range": [
      832,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 836,
    "end": 840,
    "range": [
      836,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 841,
    "end": 852,
    "range": [
      841,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 854,
    "end": 858,
    "range": [
      854,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 860,
    "end": 864,
    "range": [
      860,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 868,
    "end": 871,
    "range": [
      868,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 872,
    "end": 876,
    "range": [
      872,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 877,
    "end": 888,
    "range": [
      877,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 889,
    "end": 904,
    "range": [
      889,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 907,
    "end": 911,
    "range": [
      907,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 912,
    "end": 923,
    "range": [
      912,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 924,
    "end": 942,
    "range": [
      924,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 943,
    "end": 947,
    "range": [
      943,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 950,
    "end": 954,
    "range": [
      950,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 955,
    "end": 966,
    "range": [
      955,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 967,
    "end": 985,
    "range": [
      967,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 987,
    "end": 991,
    "range": [
      987,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 993,
    "end": 997,
    "range": [
      993,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 1006,
    "end": 1017,
    "range": [
      1006,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1018,
    "end": 1036,
    "range": [
      1018,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1037,
    "end": 1052,
    "range": [
      1037,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1056,
    "end": 1059,
    "range": [
      1056,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1060,
    "end": 1064,
    "range": [
      1060,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1065,
    "end": 1083,
    "range": [
      1065,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1084,
    "end": 1088,
    "range": [
      1084,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1091,
    "end": 1094,
    "range": [
      1091,
      1094
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1095,
    "end": 1099,
    "range": [
      1095,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1100,
    "end": 1118,
    "range": [
      1100,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1120,
    "end": 1124,
    "range": [
      1120,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1126,
    "end": 1130,
    "range": [
      1126,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1134,
    "end": 1137,
    "range": [
      1134,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1138,
    "end": 1142,
    "range": [
      1138,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1143,
    "end": 1161,
    "range": [
      1143,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1162,
    "end": 1177,
    "range": [
      1162,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1180,
    "end": 1184,
    "range": [
      1180,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1185,
    "end": 1203,
    "range": [
      1185,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1204,
    "end": 1222,
    "range": [
      1204,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1223,
    "end": 1227,
    "range": [
      1223,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1230,
    "end": 1234,
    "range": [
      1230,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1235,
    "end": 1253,
    "range": [
      1235,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1254,
    "end": 1272,
    "range": [
      1254,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1274,
    "end": 1278,
    "range": [
      1274,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1280,
    "end": 1284,
    "range": [
      1280,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1288,
    "end": 1292,
    "range": [
      1288,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1293,
    "end": 1311,
    "range": [
      1293,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1312,
    "end": 1330,
    "range": [
      1312,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1331,
    "end": 1346,
    "range": [
      1331,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1350,
    "end": 1353,
    "range": [
      1350,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1354,
    "end": 1358,
    "range": [
      1354,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1359,
    "end": 1367,
    "range": [
      1359,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1368,
    "end": 1372,
    "range": [
      1368,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1375,
    "end": 1378,
    "range": [
      1375,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1379,
    "end": 1383,
    "range": [
      1379,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1384,
    "end": 1392,
    "range": [
      1384,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1394,
    "end": 1398,
    "range": [
      1394,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1400,
    "end": 1404,
    "range": [
      1400,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1412,
    "end": 1416,
    "range": [
      1412,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1417,
    "end": 1425,
    "range": [
      1417,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1426,
    "end": 1441,
    "range": [
      1426,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1444,
    "end": 1448,
    "range": [
      1444,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1449,
    "end": 1457,
    "range": [
      1449,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1458,
    "end": 1476,
    "range": [
      1458,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1477,
    "end": 1481,
    "range": [
      1477,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1484,
    "end": 1488,
    "range": [
      1484,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1489,
    "end": 1497,
    "range": [
      1489,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1498,
    "end": 1516,
    "range": [
      1498,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1518,
    "end": 1522,
    "range": [
      1518,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1524,
    "end": 1528,
    "range": [
      1524,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1533,
    "end": 1536,
    "range": [
      1533,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1537,
    "end": 1541,
    "range": [
      1537,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1542,
    "end": 1556,
    "range": [
      1542,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1557,
    "end": 1561,
    "range": [
      1557,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1564,
    "end": 1567,
    "range": [
      1564,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1568,
    "end": 1572,
    "range": [
      1568,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1573,
    "end": 1587,
    "range": [
      1573,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1589,
    "end": 1593,
    "range": [
      1589,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1595,
    "end": 1599,
    "range": [
      1595,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1603,
    "end": 1606,
    "range": [
      1603,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1607,
    "end": 1611,
    "range": [
      1607,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1612,
    "end": 1626,
    "range": [
      1612,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1627,
    "end": 1642,
    "range": [
      1627,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1645,
    "end": 1649,
    "range": [
      1645,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1650,
    "end": 1664,
    "range": [
      1650,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1665,
    "end": 1683,
    "range": [
      1665,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1684,
    "end": 1688,
    "range": [
      1684,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1691,
    "end": 1695,
    "range": [
      1691,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1696,
    "end": 1710,
    "range": [
      1696,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1711,
    "end": 1729,
    "range": [
      1711,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1731,
    "end": 1735,
    "range": [
      1731,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1737,
    "end": 1741,
    "range": [
      1737,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1745,
    "end": 1749,
    "range": [
      1745,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1750,
    "end": 1764,
    "range": [
      1750,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1765,
    "end": 1783,
    "range": [
      1765,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1784,
    "end": 1799,
    "range": [
      1784,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1803,
    "end": 1806,
    "range": [
      1803,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1807,
    "end": 1811,
    "range": [
      1807,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1812,
    "end": 1824,
    "range": [
      1812,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1825,
    "end": 1829,
    "range": [
      1825,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1832,
    "end": 1835,
    "range": [
      1832,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1836,
    "end": 1840,
    "range": [
      1836,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1841,
    "end": 1853,
    "range": [
      1841,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1855,
    "end": 1859,
    "range": [
      1855,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1861,
    "end": 1865,
    "range": [
      1861,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1869,
    "end": 1872,
    "range": [
      1869,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1873,
    "end": 1877,
    "range": [
      1873,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1878,
    "end": 1890,
    "range": [
      1878,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1891,
    "end": 1906,
    "range": [
      1891,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1909,
    "end": 1913,
    "range": [
      1909,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1914,
    "end": 1926,
    "range": [
      1914,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1927,
    "end": 1945,
    "range": [
      1927,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1946,
    "end": 1950,
    "range": [
      1946,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1953,
    "end": 1957,
    "range": [
      1953,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1958,
    "end": 1970,
    "range": [
      1958,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1971,
    "end": 1989,
    "range": [
      1971,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1990,
    "end": 2005,
    "range": [
      1990,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  }
]
```
