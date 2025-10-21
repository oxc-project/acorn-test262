__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subType",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 27,
                  "end": 30
                },
                "start": 27,
                "end": 30
              },
              "start": 25,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 31
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 42,
                  "end": 45
                },
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 46
          }
        ],
        "start": 12,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 48
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
            "name": "order1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 78,
                          "end": 82
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "1",
                              "raw": "\"1\"",
                              "start": 84,
                              "end": 87
                            },
                            "start": 84,
                            "end": 87
                          },
                          "start": 82,
                          "end": 87
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 78,
                        "end": 87
                      }
                    ],
                    "start": 76,
                    "end": 89
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 97
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 110
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "2",
                              "raw": "\"2\"",
                              "start": 112,
                              "end": 115
                            },
                            "start": 112,
                            "end": 115
                          },
                          "start": 110,
                          "end": 115
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 106,
                        "end": 115
                      }
                    ],
                    "start": 104,
                    "end": 117
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 130
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "3",
                              "raw": "\"3\"",
                              "start": 132,
                              "end": 135
                            },
                            "start": 132,
                            "end": 135
                          },
                          "start": 130,
                          "end": 135
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 126,
                        "end": 135
                      }
                    ],
                    "start": 124,
                    "end": 137
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 144,
                    "end": 153
                  }
                ],
                "start": 74,
                "end": 153
              },
              "start": 68,
              "end": 153
            },
            "start": 62,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 62,
          "end": 153
        }
      ],
      "declare": true,
      "start": 50,
      "end": 154
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "order1",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 236
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "order1",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 246
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 251
            },
            "optional": false,
            "computed": false,
            "start": 240,
            "end": 251
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 256,
            "end": 259
          },
          "start": 240,
          "end": 259
        },
        "start": 230,
        "end": 259
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "order1",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 278
              },
              "optional": false,
              "computed": false,
              "start": 267,
              "end": 278
            },
            "directive": null,
            "start": 267,
            "end": 279
          }
        ],
        "start": 261,
        "end": 297
      },
      "alternate": null,
      "start": 226,
      "end": 297
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 310
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subType",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 324
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 326,
                  "end": 329
                },
                "start": 326,
                "end": 329
              },
              "start": 324,
              "end": 329
            },
            "accessibility": null,
            "static": false,
            "start": 317,
            "end": 330
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 341,
                  "end": 344
                },
                "start": 341,
                "end": 344
              },
              "start": 339,
              "end": 344
            },
            "accessibility": null,
            "static": false,
            "start": 335,
            "end": 345
          }
        ],
        "start": 311,
        "end": 347
      },
      "declare": false,
      "start": 299,
      "end": 347
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
            "name": "order2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 381
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "1",
                              "raw": "\"1\"",
                              "start": 383,
                              "end": 386
                            },
                            "start": 383,
                            "end": 386
                          },
                          "start": 381,
                          "end": 386
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 377,
                        "end": 386
                      }
                    ],
                    "start": 375,
                    "end": 388
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 397,
                          "end": 401
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "2",
                              "raw": "\"2\"",
                              "start": 403,
                              "end": 406
                            },
                            "start": 403,
                            "end": 406
                          },
                          "start": 401,
                          "end": 406
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 397,
                        "end": 406
                      }
                    ],
                    "start": 395,
                    "end": 408
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 421
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "3",
                              "raw": "\"3\"",
                              "start": 423,
                              "end": 426
                            },
                            "start": 423,
                            "end": 426
                          },
                          "start": 421,
                          "end": 426
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 417,
                        "end": 426
                      }
                    ],
                    "start": 415,
                    "end": 428
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 435,
                      "end": 436
                    },
                    "typeArguments": null,
                    "start": 435,
                    "end": 436
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 443,
                    "end": 452
                  }
                ],
                "start": 373,
                "end": 452
              },
              "start": 367,
              "end": 452
            },
            "start": 361,
            "end": 452
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 452
        }
      ],
      "declare": true,
      "start": 349,
      "end": 453
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "order2",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 535
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "order2",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 545
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 550
            },
            "optional": false,
            "computed": false,
            "start": 539,
            "end": 550
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 555,
            "end": 558
          },
          "start": 539,
          "end": 558
        },
        "start": 529,
        "end": 558
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "order2",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 572
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 577
              },
              "optional": false,
              "computed": false,
              "start": 566,
              "end": 577
            },
            "directive": null,
            "start": 566,
            "end": 578
          }
        ],
        "start": 560,
        "end": 596
      },
      "alternate": null,
      "start": 525,
      "end": 596
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "order1",
          "optional": false,
          "typeAnnotation": null,
          "start": 638,
          "end": 644
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "order1",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 654
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 659
            },
            "optional": false,
            "computed": false,
            "start": 648,
            "end": 659
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 664,
            "end": 667
          },
          "start": 648,
          "end": 667
        },
        "start": 638,
        "end": 667
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "order1",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 686
              },
              "optional": false,
              "computed": false,
              "start": 675,
              "end": 686
            },
            "directive": null,
            "start": 675,
            "end": 687
          }
        ],
        "start": 669,
        "end": 705
      },
      "alternate": null,
      "start": 634,
      "end": 705
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "order2",
          "optional": false,
          "typeAnnotation": null,
          "start": 710,
          "end": 716
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "order2",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 726
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 731
            },
            "optional": false,
            "computed": false,
            "start": 720,
            "end": 731
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 736,
            "end": 739
          },
          "start": 720,
          "end": 739
        },
        "start": 710,
        "end": 739
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "order2",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 753
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 758
              },
              "optional": false,
              "computed": false,
              "start": 747,
              "end": 758
            },
            "directive": null,
            "start": 747,
            "end": 759
          }
        ],
        "start": 741,
        "end": 777
      },
      "alternate": null,
      "start": 706,
      "end": 777
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 777
}
```
