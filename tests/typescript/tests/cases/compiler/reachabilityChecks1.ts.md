__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 7,
        "end": 11
      },
      "body": {
        "type": "EmptyStatement",
        "start": 12,
        "end": 13
      },
      "start": 0,
      "end": 13
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
            "start": 18,
            "end": 19
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 22,
            "end": 23
          },
          "definite": false,
          "start": 18,
          "end": 23
        }
      ],
      "declare": false,
      "start": 14,
      "end": 24
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 34
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 48,
              "end": 52
            },
            "body": {
              "type": "EmptyStatement",
              "start": 53,
              "end": 54
            },
            "start": 41,
            "end": 54
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "init": null,
                "definite": false,
                "start": 63,
                "end": 64
              }
            ],
            "declare": false,
            "start": 59,
            "end": 65
          }
        ],
        "start": 35,
        "end": 67
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 26,
      "end": 67
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 78
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 88,
              "end": 90
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 97,
              "end": 101
            },
            "start": 85,
            "end": 103
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 138
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 139,
                    "end": 141
                  },
                  "declare": false,
                  "start": 127,
                  "end": 141
                }
              ],
              "start": 117,
              "end": 147
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 108,
            "end": 147
          }
        ],
        "start": 79,
        "end": 149
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 69,
      "end": 149
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 174,
              "end": 178
            },
            "body": {
              "type": "EmptyStatement",
              "start": 179,
              "end": 180
            },
            "start": 167,
            "end": 180
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                        "start": 208,
                        "end": 209
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 212,
                        "end": 213
                      },
                      "definite": false,
                      "start": 208,
                      "end": 213
                    }
                  ],
                  "declare": false,
                  "start": 204,
                  "end": 214
                }
              ],
              "start": 194,
              "end": 220
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 185,
            "end": 220
          }
        ],
        "start": 161,
        "end": 222
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 151,
      "end": 222
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 233
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 247,
              "end": 251
            },
            "body": {
              "type": "EmptyStatement",
              "start": 252,
              "end": 253
            },
            "start": 240,
            "end": 253
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 267,
              "end": 273
            },
            "declare": false,
            "start": 258,
            "end": 274
          }
        ],
        "start": 234,
        "end": 276
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 224,
      "end": 276
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 287
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 301,
              "end": 305
            },
            "body": {
              "type": "EmptyStatement",
              "start": 306,
              "end": 307
            },
            "start": 294,
            "end": 307
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 320
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
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
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 347
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 346,
                        "end": 347
                      }
                    ],
                    "start": 344,
                    "end": 349
                  },
                  "const": true,
                  "declare": false,
                  "start": 331,
                  "end": 349
                }
              ],
              "start": 321,
              "end": 355
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 312,
            "end": 355
          }
        ],
        "start": 288,
        "end": 357
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 278,
      "end": 357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 370
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 372
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 385
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 397,
                  "end": 404
                }
              ],
              "start": 387,
              "end": 410
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 445
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "123",
                        "raw": "\"123\"",
                        "start": 446,
                        "end": 451
                      }
                    ],
                    "start": 436,
                    "end": 452
                  },
                  "start": 430,
                  "end": 453
                }
              ],
              "start": 420,
              "end": 459
            },
            "start": 380,
            "end": 459
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
                  "start": 468,
                  "end": 469
                },
                "init": null,
                "definite": false,
                "start": 468,
                "end": 469
              }
            ],
            "declare": false,
            "start": 464,
            "end": 470
          }
        ],
        "start": 374,
        "end": 472
      },
      "expression": false,
      "start": 359,
      "end": 472
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 485
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 494,
            "end": 501
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 513
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 514,
              "end": 521
            },
            "abstract": false,
            "declare": false,
            "start": 506,
            "end": 521
          }
        ],
        "start": 488,
        "end": 523
      },
      "expression": false,
      "start": 474,
      "end": 523
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 532,
        "end": 533
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ForStatement",
            "init": null,
            "test": null,
            "update": null,
            "body": {
              "type": "EmptyStatement",
              "start": 549,
              "end": 550
            },
            "start": 540,
            "end": 550
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 563
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 564,
              "end": 571
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 555,
            "end": 571
          }
        ],
        "start": 534,
        "end": 573
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 525,
      "end": 573
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 584,
        "end": 586
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 598,
              "end": 605
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 613,
              "end": 617
            },
            "start": 595,
            "end": 619
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 630
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 642
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 645,
                    "end": 646
                  },
                  "computed": false,
                  "start": 641,
                  "end": 646
                }
              ],
              "start": 631,
              "end": 652
            },
            "const": false,
            "declare": false,
            "start": 624,
            "end": 652
          }
        ],
        "start": 589,
        "end": 654
      },
      "expression": false,
      "start": 575,
      "end": 654
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 667
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 680,
              "end": 684
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 706,
                      "end": 711
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 702,
                    "end": 713
                  },
                  "start": 696,
                  "end": 714
                }
              ],
              "start": 686,
              "end": 720
            },
            "alternate": null,
            "start": 676,
            "end": 720
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 748,
                    "end": 749
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 752,
                    "end": 753
                  },
                  "computed": false,
                  "start": 748,
                  "end": 753
                }
              ],
              "start": 738,
              "end": 759
            },
            "const": true,
            "declare": false,
            "start": 725,
            "end": 759
          }
        ],
        "start": 670,
        "end": 761
      },
      "expression": false,
      "start": 656,
      "end": 761
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 762
}
```
