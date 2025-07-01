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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 11,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 17,
                  "end": 20
                },
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 20
          }
        ],
        "start": 9,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 35,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 41,
                  "end": 44
                },
                "start": 41,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 44
          }
        ],
        "start": 33,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 59,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "C",
                  "raw": "\"C\"",
                  "start": 65,
                  "end": 68
                },
                "start": 65,
                "end": 68
              },
              "start": 63,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 68
          }
        ],
        "start": 57,
        "end": 70
      },
      "declare": false,
      "start": 48,
      "end": 71
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 84
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "typeArguments": null,
            "start": 87,
            "end": 88
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "typeArguments": null,
            "start": 91,
            "end": 92
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "typeArguments": null,
            "start": 95,
            "end": 96
          }
        ],
        "start": 87,
        "end": 96
      },
      "declare": false,
      "start": 72,
      "end": 97
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
            "name": "isA",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 108
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                      "name": "MyUnion",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 122
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 122
                  },
                  "start": 113,
                  "end": 122
                },
                "start": 112,
                "end": 122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
                    },
                    "typeArguments": null,
                    "start": 130,
                    "end": 131
                  },
                  "start": 130,
                  "end": 131
                },
                "start": 125,
                "end": 131
              },
              "start": 123,
              "end": 131
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 141
                },
                "optional": false,
                "computed": false,
                "start": 135,
                "end": 141
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 146,
                "end": 149
              },
              "start": 135,
              "end": 149
            },
            "id": null,
            "generator": false,
            "start": 111,
            "end": 149
          },
          "definite": false,
          "start": 105,
          "end": 149
        }
      ],
      "declare": false,
      "start": 99,
      "end": 150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 166
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
                "name": "MyUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 177
              },
              "typeArguments": null,
              "start": 170,
              "end": 177
            },
            "start": 168,
            "end": 177
          },
          "start": 167,
          "end": 177
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 192
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  }
                ],
                "optional": false,
                "start": 189,
                "end": 195
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 200,
                "end": 204
              },
              "start": 189,
              "end": 204
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
                    "start": 216,
                    "end": 217
                  },
                  "directive": null,
                  "start": 216,
                  "end": 218
                }
              ],
              "start": 206,
              "end": 224
            },
            "alternate": null,
            "start": 185,
            "end": 224
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 237
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  }
                ],
                "optional": false,
                "start": 234,
                "end": 240
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 245,
                "end": 250
              },
              "start": 234,
              "end": 250
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
                    "start": 262,
                    "end": 263
                  },
                  "directive": null,
                  "start": 262,
                  "end": 264
                }
              ],
              "start": 252,
              "end": 270
            },
            "alternate": null,
            "start": 230,
            "end": 270
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 283
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 285
                  }
                ],
                "optional": false,
                "start": 280,
                "end": 286
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 291,
                "end": 296
              },
              "start": 280,
              "end": 296
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
                    "start": 308,
                    "end": 309
                  },
                  "directive": null,
                  "start": 308,
                  "end": 310
                }
              ],
              "start": 298,
              "end": 316
            },
            "alternate": null,
            "start": 276,
            "end": 316
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 329
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 331
                  }
                ],
                "optional": false,
                "start": 326,
                "end": 332
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 337,
                "end": 341
              },
              "start": 326,
              "end": 341
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
                    "start": 353,
                    "end": 354
                  },
                  "directive": null,
                  "start": 353,
                  "end": 355
                }
              ],
              "start": 343,
              "end": 361
            },
            "alternate": null,
            "start": 322,
            "end": 361
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 374
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 376
                  }
                ],
                "optional": false,
                "start": 371,
                "end": 377
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 381,
                "end": 385
              },
              "start": 371,
              "end": 385
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
                    "start": 397,
                    "end": 398
                  },
                  "directive": null,
                  "start": 397,
                  "end": 399
                }
              ],
              "start": 387,
              "end": 405
            },
            "alternate": null,
            "start": 367,
            "end": 405
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 418
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
                  }
                ],
                "optional": false,
                "start": 415,
                "end": 421
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 425,
                "end": 429
              },
              "start": 415,
              "end": 429
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
                    "start": 441,
                    "end": 442
                  },
                  "directive": null,
                  "start": 441,
                  "end": 443
                }
              ],
              "start": 431,
              "end": 449
            },
            "alternate": null,
            "start": 411,
            "end": 449
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 459,
                "end": 463
              },
              "operator": "!==",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 471
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 472,
                    "end": 473
                  }
                ],
                "optional": false,
                "start": 468,
                "end": 474
              },
              "start": 459,
              "end": 474
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
                    "start": 486,
                    "end": 487
                  },
                  "directive": null,
                  "start": 486,
                  "end": 488
                }
              ],
              "start": 476,
              "end": 494
            },
            "alternate": null,
            "start": 455,
            "end": 494
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 504,
                "end": 508
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 516
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 518
                  }
                ],
                "optional": false,
                "start": 513,
                "end": 519
              },
              "start": 504,
              "end": 519
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
                    "start": 531,
                    "end": 532
                  },
                  "directive": null,
                  "start": 531,
                  "end": 533
                }
              ],
              "start": 521,
              "end": 539
            },
            "alternate": null,
            "start": 500,
            "end": 539
          }
        ],
        "start": 179,
        "end": 541
      },
      "expression": false,
      "start": 152,
      "end": 541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 613
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
              "type": "TSUnknownKeyword",
              "start": 617,
              "end": 624
            },
            "start": 615,
            "end": 624
          },
          "start": 614,
          "end": 624
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
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 637
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 654
                },
                "start": 636,
                "end": 654
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 659,
                "end": 664
              },
              "start": 636,
              "end": 664
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 676,
                  "end": 683
                }
              ],
              "start": 666,
              "end": 689
            },
            "alternate": null,
            "start": 632,
            "end": 689
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 694,
              "end": 695
            },
            "directive": null,
            "start": 694,
            "end": 696
          }
        ],
        "start": 626,
        "end": 698
      },
      "expression": false,
      "start": 599,
      "end": 698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 765,
        "end": 770
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 776,
              "end": 783
            },
            "start": 774,
            "end": 783
          },
          "start": 771,
          "end": 783
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 802,
                    "end": 805
                  },
                  "prefix": true,
                  "start": 795,
                  "end": 805
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 810,
                  "end": 818
                },
                "start": 795,
                "end": 818
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 822,
                      "end": 827
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 828,
                      "end": 835
                    },
                    "optional": false,
                    "computed": false,
                    "start": 822,
                    "end": 835
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 836,
                      "end": 839
                    }
                  ],
                  "optional": false,
                  "start": 822,
                  "end": 840
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 845,
                  "end": 850
                },
                "start": 822,
                "end": 850
              },
              "start": 795,
              "end": 850
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
                      "start": 872,
                      "end": 877
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Not a string or an array",
                        "raw": "'Not a string or an array'",
                        "start": 878,
                        "end": 904
                      }
                    ],
                    "start": 868,
                    "end": 905
                  },
                  "start": 862,
                  "end": 906
                }
              ],
              "start": 852,
              "end": 912
            },
            "alternate": null,
            "start": 791,
            "end": 912
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 920
            },
            "directive": null,
            "start": 917,
            "end": 921
          }
        ],
        "start": 785,
        "end": 923
      },
      "expression": false,
      "start": 756,
      "end": 923
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WebError",
        "optional": false,
        "typeAnnotation": null,
        "start": 987,
        "end": 995
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "URIError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1004,
        "end": 1012
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "status",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1025
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1028,
                "end": 1034
              },
              "start": 1026,
              "end": 1034
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1019,
            "end": 1035
          }
        ],
        "start": 1013,
        "end": 1037
      },
      "abstract": false,
      "declare": false,
      "start": 981,
      "end": 1037
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1047,
        "end": 1052
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1065,
              "end": 1098
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1109
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1125,
                            "end": 1128
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WebError",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1140,
                            "end": 1148
                          },
                          "start": 1125,
                          "end": 1148
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 1153,
                          "end": 1158
                        },
                        "start": 1125,
                        "end": 1158
                      },
                      "operator": "||",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1162,
                            "end": 1165
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "status",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1166,
                            "end": 1172
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1162,
                          "end": 1172
                        },
                        "operator": "!=",
                        "right": {
                          "type": "Literal",
                          "value": 401,
                          "raw": "401",
                          "start": 1176,
                          "end": 1179
                        },
                        "start": 1162,
                        "end": 1179
                      },
                      "start": 1125,
                      "end": 1179
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1195,
                                "end": 1202
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1203,
                                "end": 1208
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1195,
                              "end": 1208
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1209,
                                "end": 1212
                              }
                            ],
                            "optional": false,
                            "start": 1195,
                            "end": 1213
                          },
                          "directive": null,
                          "start": 1195,
                          "end": 1214
                        }
                      ],
                      "start": 1181,
                      "end": 1224
                    },
                    "alternate": null,
                    "start": 1121,
                    "end": 1224
                  }
                ],
                "start": 1111,
                "end": 1230
              },
              "start": 1099,
              "end": 1230
            },
            "finalizer": null,
            "start": 1061,
            "end": 1230
          }
        ],
        "start": 1055,
        "end": 1232
      },
      "expression": false,
      "start": 1038,
      "end": 1232
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 1300,
        "end": 1306
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1313,
              "end": 1317
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1319,
                "end": 1325
              },
              "start": 1317,
              "end": 1325
            },
            "accessibility": null,
            "static": false,
            "start": 1313,
            "end": 1326
          }
        ],
        "start": 1307,
        "end": 1328
      },
      "declare": false,
      "start": 1290,
      "end": 1328
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
            "name": "ACTOR_TYPE",
            "optional": false,
            "typeAnnotation": null,
            "start": 1335,
            "end": 1345
          },
          "init": {
            "type": "Literal",
            "value": "actor",
            "raw": "\"actor\"",
            "start": 1348,
            "end": 1355
          },
          "definite": false,
          "start": 1335,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1329,
      "end": 1356
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Actor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1367,
        "end": 1372
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 1381,
            "end": 1387
          },
          "typeArguments": null,
          "start": 1381,
          "end": 1387
        }
      ],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1398
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ACTOR_TYPE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1417
                },
                "typeArguments": null,
                "start": 1400,
                "end": 1417
              },
              "start": 1398,
              "end": 1417
            },
            "accessibility": null,
            "static": false,
            "start": 1394,
            "end": 1418
          }
        ],
        "start": 1388,
        "end": 1420
      },
      "declare": false,
      "start": 1357,
      "end": 1420
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isActor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1430,
        "end": 1437
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1446,
                "end": 1452
              },
              "typeArguments": null,
              "start": 1446,
              "end": 1452
            },
            "start": 1444,
            "end": 1452
          },
          "start": 1438,
          "end": 1452
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 1455,
            "end": 1461
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Actor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1465,
                "end": 1470
              },
              "typeArguments": null,
              "start": 1465,
              "end": 1470
            },
            "start": 1465,
            "end": 1470
          },
          "start": 1455,
          "end": 1470
        },
        "start": 1453,
        "end": 1470
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1484,
                  "end": 1490
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1491,
                  "end": 1495
                },
                "optional": false,
                "computed": false,
                "start": 1484,
                "end": 1495
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ACTOR_TYPE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1500,
                "end": 1510
              },
              "start": 1484,
              "end": 1510
            },
            "start": 1477,
            "end": 1511
          }
        ],
        "start": 1471,
        "end": 1513
      },
      "expression": false,
      "start": 1421,
      "end": 1513
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1523,
        "end": 1528
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1540
              },
              "typeArguments": null,
              "start": 1534,
              "end": 1540
            },
            "start": 1532,
            "end": 1540
          },
          "start": 1529,
          "end": 1540
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1552,
                  "end": 1559
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1560,
                    "end": 1563
                  }
                ],
                "optional": false,
                "start": 1552,
                "end": 1564
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1569,
                "end": 1574
              },
              "start": 1552,
              "end": 1574
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1586,
                    "end": 1589
                  },
                  "directive": null,
                  "start": 1586,
                  "end": 1590
                }
              ],
              "start": 1576,
              "end": 1596
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1612,
                    "end": 1615
                  },
                  "directive": null,
                  "start": 1612,
                  "end": 1616
                }
              ],
              "start": 1602,
              "end": 1622
            },
            "start": 1548,
            "end": 1622
          }
        ],
        "start": 1542,
        "end": 1624
      },
      "expression": false,
      "start": 1514,
      "end": 1624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1634,
        "end": 1639
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1645,
                "end": 1651
              },
              "typeArguments": null,
              "start": 1645,
              "end": 1651
            },
            "start": 1643,
            "end": 1651
          },
          "start": 1640,
          "end": 1651
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1663,
                  "end": 1670
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1671,
                    "end": 1674
                  }
                ],
                "optional": false,
                "start": 1663,
                "end": 1675
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1679,
                "end": 1684
              },
              "start": 1663,
              "end": 1684
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1696,
                    "end": 1699
                  },
                  "directive": null,
                  "start": 1696,
                  "end": 1700
                }
              ],
              "start": 1686,
              "end": 1706
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1722,
                    "end": 1725
                  },
                  "directive": null,
                  "start": 1722,
                  "end": 1726
                }
              ],
              "start": 1712,
              "end": 1732
            },
            "start": 1659,
            "end": 1732
          }
        ],
        "start": 1653,
        "end": 1734
      },
      "expression": false,
      "start": 1625,
      "end": 1734
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1801,
        "end": 1811
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
              "type": "TSUnknownKeyword",
              "start": 1815,
              "end": 1822
            },
            "start": 1813,
            "end": 1822
          },
          "start": 1812,
          "end": 1822
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1826
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1830,
                "end": 1838
              },
              "typeArguments": null,
              "start": 1830,
              "end": 1838
            },
            "start": 1830,
            "end": 1838
          },
          "start": 1825,
          "end": 1838
        },
        "start": 1823,
        "end": 1838
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1859,
                  "end": 1860
                },
                "prefix": true,
                "start": 1852,
                "end": 1860
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 1865,
                "end": 1875
              },
              "start": 1852,
              "end": 1875
            },
            "start": 1845,
            "end": 1876
          }
        ],
        "start": 1839,
        "end": 1878
      },
      "expression": false,
      "start": 1792,
      "end": 1878
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1889,
        "end": 1894
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
              "type": "TSUnknownKeyword",
              "start": 1898,
              "end": 1905
            },
            "start": 1896,
            "end": 1905
          },
          "start": 1895,
          "end": 1905
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1917,
                  "end": 1927
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1928,
                    "end": 1929
                  }
                ],
                "optional": false,
                "start": 1917,
                "end": 1930
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1935,
                "end": 1940
              },
              "start": 1917,
              "end": 1940
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
                    "start": 1952,
                    "end": 1953
                  },
                  "directive": null,
                  "start": 1952,
                  "end": 1954
                }
              ],
              "start": 1942,
              "end": 1960
            },
            "alternate": null,
            "start": 1913,
            "end": 1960
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1969,
                  "end": 1979
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1980,
                    "end": 1981
                  }
                ],
                "optional": false,
                "start": 1969,
                "end": 1982
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1987,
                "end": 1991
              },
              "start": 1969,
              "end": 1991
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
                    "start": 2003,
                    "end": 2004
                  },
                  "directive": null,
                  "start": 2003,
                  "end": 2005
                }
              ],
              "start": 1993,
              "end": 2011
            },
            "alternate": null,
            "start": 1965,
            "end": 2011
          }
        ],
        "start": 1907,
        "end": 2013
      },
      "expression": false,
      "start": 1880,
      "end": 2013
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2013
}
```
