__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeakTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 33
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 36,
                      "end": 40
                    },
                    "start": 36,
                    "end": 40
                  },
                  "start": 34,
                  "end": 40
                },
                "accessibility": null,
                "static": false,
                "start": 25,
                "end": 41
              }
            ],
            "start": 23,
            "end": 43
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 63
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  },
                  "start": 66,
                  "end": 74
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 52,
                "end": 74
              }
            ],
            "start": 50,
            "end": 76
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 96
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 101,
                    "end": 107
                  },
                  "start": 99,
                  "end": 107
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 85,
                "end": 108
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 126
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 129,
                    "end": 135
                  },
                  "start": 127,
                  "end": 135
                },
                "accessibility": null,
                "static": false,
                "start": 109,
                "end": 135
              }
            ],
            "start": 83,
            "end": 137
          }
        ],
        "start": 21,
        "end": 137
      },
      "declare": false,
      "start": 0,
      "end": 138
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralsOrWeakTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 164
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 173,
              "end": 176
            },
            "start": 173,
            "end": 176
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 183,
              "end": 186
            },
            "start": 183,
            "end": 186
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 202
            },
            "typeArguments": null,
            "start": 193,
            "end": 202
          }
        ],
        "start": 171,
        "end": 202
      },
      "declare": false,
      "start": 140,
      "end": 203
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
            "name": "aOrB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 223,
                      "end": 226
                    },
                    "start": 223,
                    "end": 226
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 229,
                      "end": 232
                    },
                    "start": 229,
                    "end": 232
                  }
                ],
                "start": 223,
                "end": 232
              },
              "start": 221,
              "end": 232
            },
            "start": 217,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 232
        }
      ],
      "declare": true,
      "start": 205,
      "end": 233
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LiteralsOrWeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 270
                  },
                  "start": 249,
                  "end": 270
                },
                "start": 246,
                "end": 270
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 288
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 293,
                      "end": 296
                    },
                    "start": 285,
                    "end": 296
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 318
                        },
                        "start": 308,
                        "end": 319
                      }
                    ],
                    "start": 298,
                    "end": 325
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 355
                        },
                        "start": 345,
                        "end": 356
                      }
                    ],
                    "start": 335,
                    "end": 362
                  },
                  "start": 281,
                  "end": 362
                }
              ],
              "start": 275,
              "end": 364
            },
            "id": null,
            "generator": false,
            "start": 245,
            "end": 364
          },
          "definite": false,
          "start": 241,
          "end": 364
        }
      ],
      "declare": false,
      "start": 235,
      "end": 364
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 373
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 382,
                      "end": 391
                    },
                    "typeArguments": null,
                    "start": 382,
                    "end": 391
                  },
                  "start": 380,
                  "end": 391
                },
                "start": 377,
                "end": 391
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 409
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 414,
                      "end": 417
                    },
                    "start": 406,
                    "end": 417
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 436,
                          "end": 439
                        },
                        "start": 429,
                        "end": 440
                      }
                    ],
                    "start": 419,
                    "end": 446
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 476
                        },
                        "start": 466,
                        "end": 477
                      }
                    ],
                    "start": 456,
                    "end": 483
                  },
                  "start": 402,
                  "end": 483
                }
              ],
              "start": 396,
              "end": 485
            },
            "id": null,
            "generator": false,
            "start": 376,
            "end": 485
          },
          "definite": false,
          "start": 372,
          "end": 485
        }
      ],
      "declare": false,
      "start": 366,
      "end": 485
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 494
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LiteralsOrWeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 522
                    },
                    "typeArguments": null,
                    "start": 503,
                    "end": 522
                  },
                  "start": 501,
                  "end": 522
                },
                "start": 498,
                "end": 522
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 537,
                      "end": 540
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aOrB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 549
                    },
                    "start": 537,
                    "end": 549
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 568,
                          "end": 571
                        },
                        "start": 561,
                        "end": 572
                      }
                    ],
                    "start": 551,
                    "end": 578
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 605,
                          "end": 608
                        },
                        "start": 598,
                        "end": 609
                      }
                    ],
                    "start": 588,
                    "end": 615
                  },
                  "start": 533,
                  "end": 615
                }
              ],
              "start": 527,
              "end": 617
            },
            "id": null,
            "generator": false,
            "start": 497,
            "end": 617
          },
          "definite": false,
          "start": 493,
          "end": 617
        }
      ],
      "declare": false,
      "start": 487,
      "end": 617
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 626
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WeakTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 635,
                      "end": 644
                    },
                    "typeArguments": null,
                    "start": 635,
                    "end": 644
                  },
                  "start": 633,
                  "end": 644
                },
                "start": 630,
                "end": 644
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 662
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aOrB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 667,
                      "end": 671
                    },
                    "start": 659,
                    "end": 671
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 690,
                          "end": 693
                        },
                        "start": 683,
                        "end": 694
                      }
                    ],
                    "start": 673,
                    "end": 700
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 730
                        },
                        "start": 720,
                        "end": 731
                      }
                    ],
                    "start": 710,
                    "end": 737
                  },
                  "start": 655,
                  "end": 737
                }
              ],
              "start": 649,
              "end": 739
            },
            "id": null,
            "generator": false,
            "start": 629,
            "end": 739
          },
          "definite": false,
          "start": 625,
          "end": 739
        }
      ],
      "declare": false,
      "start": 619,
      "end": 739
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 739
}
```
