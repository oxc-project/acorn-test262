__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 41
                    },
                    "typeArguments": null,
                    "start": 35,
                    "end": 41
                  }
                ],
                "start": 7,
                "end": 41
              },
              "start": 5,
              "end": 41
            },
            "start": 4,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              },
              "start": 51,
              "end": 60
            },
            "start": 47,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 60
        }
      ],
      "declare": false,
      "start": 43,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 64
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "/a/",
          "regex": {
            "pattern": "a",
            "flags": ""
          },
          "start": 67,
          "end": 70
        },
        "start": 63,
        "end": 70
      },
      "directive": null,
      "start": 63,
      "end": 71
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 97,
              "end": 101
            },
            "start": 93,
            "end": 101
          }
        ],
        "start": 76,
        "end": 102
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "directive": null,
            "start": 110,
            "end": 112
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 129
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 132,
                "end": 134
              },
              "start": 128,
              "end": 134
            },
            "directive": null,
            "start": 128,
            "end": 135
          }
        ],
        "start": 104,
        "end": 137
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "directive": null,
            "start": 149,
            "end": 151
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 168
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 171,
                "end": 173
              },
              "start": 167,
              "end": 173
            },
            "directive": null,
            "start": 167,
            "end": 174
          }
        ],
        "start": 143,
        "end": 176
      },
      "start": 72,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 178
      },
      "directive": null,
      "start": 177,
      "end": 179
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 210
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 226,
                          "end": 232
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 235,
                          "end": 241
                        }
                      ],
                      "start": 226,
                      "end": 241
                    },
                    "start": 224,
                    "end": 241
                  },
                  "start": 223,
                  "end": 241
                },
                "init": null,
                "definite": false,
                "start": 223,
                "end": 241
              }
            ],
            "declare": false,
            "start": 219,
            "end": 242
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 255
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 268
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 271,
                      "end": 273
                    },
                    "start": 267,
                    "end": 273
                  },
                  "directive": null,
                  "start": 267,
                  "end": 274
                }
              ],
              "start": 257,
              "end": 280
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 301
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 304,
                      "end": 306
                    },
                    "start": 300,
                    "end": 306
                  },
                  "directive": null,
                  "start": 300,
                  "end": 307
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 316,
                  "end": 323
                }
              ],
              "start": 290,
              "end": 329
            },
            "start": 247,
            "end": 329
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "directive": null,
            "start": 334,
            "end": 336
          }
        ],
        "start": 213,
        "end": 348
      },
      "expression": false,
      "start": 200,
      "end": 348
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 359
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 375,
                          "end": 381
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 384,
                          "end": 390
                        }
                      ],
                      "start": 375,
                      "end": 390
                    },
                    "start": 373,
                    "end": 390
                  },
                  "start": 372,
                  "end": 390
                },
                "init": null,
                "definite": false,
                "start": 372,
                "end": 390
              }
            ],
            "declare": false,
            "start": 368,
            "end": 391
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 404
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 417
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 420,
                      "end": 422
                    },
                    "start": 416,
                    "end": 422
                  },
                  "directive": null,
                  "start": 416,
                  "end": 423
                },
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 438,
                    "end": 440
                  },
                  "start": 432,
                  "end": 441
                }
              ],
              "start": 406,
              "end": 447
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 468
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 471,
                      "end": 473
                    },
                    "start": 467,
                    "end": 473
                  },
                  "directive": null,
                  "start": 467,
                  "end": 474
                }
              ],
              "start": 457,
              "end": 480
            },
            "start": 396,
            "end": 480
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "directive": null,
            "start": 485,
            "end": 487
          }
        ],
        "start": 362,
        "end": 499
      },
      "expression": false,
      "start": 349,
      "end": 499
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 510
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 512
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 511,
            "end": 512
          }
        ],
        "start": 510,
        "end": 513
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 520,
                  "end": 526
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 530
                  },
                  "typeArguments": null,
                  "start": 529,
                  "end": 530
                }
              ],
              "start": 520,
              "end": 530
            },
            "start": 518,
            "end": 530
          },
          "start": 514,
          "end": 530
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 534
          },
          "typeArguments": null,
          "start": 533,
          "end": 534
        },
        "start": 531,
        "end": 534
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 556
                },
                "prefix": true,
                "start": 545,
                "end": 556
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 561,
                "end": 569
              },
              "start": 545,
              "end": 569
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSON",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 588,
                        "end": 592
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parse",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 593,
                        "end": 598
                      },
                      "optional": false,
                      "computed": false,
                      "start": 588,
                      "end": 598
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 603
                      }
                    ],
                    "optional": false,
                    "start": 588,
                    "end": 604
                  },
                  "start": 581,
                  "end": 605
                }
              ],
              "start": 571,
              "end": 611
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 638,
                    "end": 642
                  },
                  "start": 631,
                  "end": 643
                }
              ],
              "start": 621,
              "end": 649
            },
            "start": 541,
            "end": 649
          }
        ],
        "start": 535,
        "end": 651
      },
      "expression": false,
      "start": 500,
      "end": 651
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 661,
        "end": 662
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 664
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 673,
              "end": 679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 663,
            "end": 679
          }
        ],
        "start": 662,
        "end": 680
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 687,
                  "end": 693
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 697
                  },
                  "typeArguments": null,
                  "start": 696,
                  "end": 697
                }
              ],
              "start": 687,
              "end": 697
            },
            "start": 685,
            "end": 697
          },
          "start": 681,
          "end": 697
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 700,
          "end": 705
        },
        "start": 698,
        "end": 705
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 727
                },
                "prefix": true,
                "start": 716,
                "end": 727
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 732,
                "end": 740
              },
              "start": 716,
              "end": 740
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
                      "start": 762,
                      "end": 767
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "will always happen",
                        "raw": "'will always happen'",
                        "start": 768,
                        "end": 788
                      }
                    ],
                    "start": 758,
                    "end": 789
                  },
                  "start": 752,
                  "end": 790
                }
              ],
              "start": 742,
              "end": 796
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 823,
                    "end": 827
                  },
                  "start": 816,
                  "end": 828
                }
              ],
              "start": 806,
              "end": 834
            },
            "start": 712,
            "end": 834
          }
        ],
        "start": 706,
        "end": 836
      },
      "expression": false,
      "start": 652,
      "end": 836
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 849
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 851
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 850,
            "end": 851
          }
        ],
        "start": 849,
        "end": 852
      },
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 857,
              "end": 858
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 861
                },
                "typeArguments": null,
                "start": 860,
                "end": 861
              },
              "start": 858,
              "end": 861
            },
            "accessibility": null,
            "static": false,
            "start": 857,
            "end": 862
          }
        ],
        "start": 853,
        "end": 864
      },
      "declare": false,
      "start": 838,
      "end": 864
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 874,
        "end": 875
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 880
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "A",
                          "raw": "\"A\"",
                          "start": 881,
                          "end": 884
                        },
                        "start": 881,
                        "end": 884
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "B",
                          "raw": "\"B\"",
                          "start": 887,
                          "end": 890
                        },
                        "start": 887,
                        "end": 890
                      }
                    ],
                    "start": 881,
                    "end": 890
                  }
                ],
                "start": 880,
                "end": 891
              },
              "start": 879,
              "end": 891
            },
            "start": 877,
            "end": 891
          },
          "start": 876,
          "end": 891
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 903,
                  "end": 904
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 906
                },
                "optional": false,
                "computed": false,
                "start": 903,
                "end": 906
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 911,
                "end": 914
              },
              "start": 903,
              "end": 914
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "A",
                              "raw": "\"A\"",
                              "start": 933,
                              "end": 936
                            },
                            "start": 933,
                            "end": 936
                          },
                          "start": 931,
                          "end": 936
                        },
                        "start": 930,
                        "end": 936
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 940,
                            "end": 944
                          },
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 948,
                            "end": 955
                          },
                          "start": 940,
                          "end": 955
                        },
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 966,
                              "end": 967
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 968,
                              "end": 969
                            },
                            "start": 966,
                            "end": 969
                          },
                          "typeArguments": null,
                          "start": 959,
                          "end": 969
                        },
                        "start": 940,
                        "end": 969
                      },
                      "definite": false,
                      "start": 930,
                      "end": 970
                    }
                  ],
                  "declare": false,
                  "start": 926,
                  "end": 970
                }
              ],
              "start": 916,
              "end": 976
            },
            "alternate": null,
            "start": 899,
            "end": 976
          }
        ],
        "start": 893,
        "end": 978
      },
      "expression": false,
      "start": 865,
      "end": 978
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 978
}
```
