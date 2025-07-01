__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "start": 23,
                "end": 24
              },
              "typeArguments": null,
              "start": 23,
              "end": 24
            },
            "start": 21,
            "end": 24
          },
          "start": 20,
          "end": 24
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 39,
                      "end": 45
                    },
                    "start": 37,
                    "end": 45
                  },
                  "start": 36,
                  "end": 45
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "definite": false,
                "start": 36,
                "end": 49
              }
            ],
            "declare": false,
            "start": 32,
            "end": 50
          }
        ],
        "start": 26,
        "end": 68
      },
      "expression": false,
      "start": 0,
      "end": 68
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 77,
            "end": 79
          },
          "definite": false,
          "start": 73,
          "end": 79
        }
      ],
      "declare": false,
      "start": 69,
      "end": 80
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "init": {
            "type": "Literal",
            "value": "42",
            "raw": "\"42\"",
            "start": 89,
            "end": 93
          },
          "definite": false,
          "start": 85,
          "end": 93
        }
      ],
      "declare": false,
      "start": 81,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 103
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 104,
              "end": 110
            }
          ],
          "start": 103,
          "end": 111
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 112,
            "end": 114
          }
        ],
        "optional": false,
        "start": 96,
        "end": 115
      },
      "directive": null,
      "start": 96,
      "end": 116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 124
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 125,
              "end": 131
            }
          ],
          "start": 124,
          "end": 132
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          }
        ],
        "optional": false,
        "start": 117,
        "end": 135
      },
      "directive": null,
      "start": 117,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 144
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 145,
              "end": 151
            }
          ],
          "start": 144,
          "end": 152
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 153,
            "end": 156
          }
        ],
        "optional": false,
        "start": 137,
        "end": 157
      },
      "directive": null,
      "start": 137,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 182
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 183,
              "end": 189
            }
          ],
          "start": 182,
          "end": 190
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 192
          }
        ],
        "optional": false,
        "start": 175,
        "end": 193
      },
      "directive": null,
      "start": 175,
      "end": 194
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bound",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 226
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
              "start": 227,
              "end": 228
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 237,
              "end": 243
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 243
          }
        ],
        "start": 226,
        "end": 244
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "start": 248,
                "end": 249
              },
              "typeArguments": null,
              "start": 248,
              "end": 249
            },
            "start": 246,
            "end": 249
          },
          "start": 245,
          "end": 249
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 264,
                      "end": 270
                    },
                    "start": 262,
                    "end": 270
                  },
                  "start": 261,
                  "end": 270
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "definite": false,
                "start": 261,
                "end": 274
              }
            ],
            "declare": false,
            "start": 257,
            "end": 275
          }
        ],
        "start": 251,
        "end": 283
      },
      "expression": false,
      "start": 212,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 290
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 291,
            "end": 293
          }
        ],
        "optional": false,
        "start": 285,
        "end": 294
      },
      "directive": null,
      "start": 285,
      "end": 295
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 301
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          }
        ],
        "optional": false,
        "start": 296,
        "end": 304
      },
      "directive": null,
      "start": 296,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 311
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 312,
            "end": 315
          }
        ],
        "optional": false,
        "start": 306,
        "end": 316
      },
      "directive": null,
      "start": 306,
      "end": 317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 339
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 341
          }
        ],
        "optional": false,
        "start": 334,
        "end": 342
      },
      "directive": null,
      "start": 334,
      "end": 343
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bound2",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 376
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
              "start": 377,
              "end": 378
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 393
          }
        ],
        "start": 376,
        "end": 394
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 397,
        "end": 399
      },
      "expression": false,
      "start": 361,
      "end": 399
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 407
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 408,
              "end": 410
            }
          ],
          "start": 407,
          "end": 411
        },
        "arguments": [],
        "optional": false,
        "start": 401,
        "end": 413
      },
      "directive": null,
      "start": 401,
      "end": 414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 421
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 428
              },
              "typeArguments": null,
              "start": 422,
              "end": 428
            }
          ],
          "start": 421,
          "end": 429
        },
        "arguments": [],
        "optional": false,
        "start": 415,
        "end": 431
      },
      "directive": null,
      "start": 415,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 439
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 440,
              "end": 446
            }
          ],
          "start": 439,
          "end": 447
        },
        "arguments": [],
        "optional": false,
        "start": 433,
        "end": 449
      },
      "directive": null,
      "start": 433,
      "end": 450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null,
          "start": 467,
          "end": 473
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 474,
              "end": 480
            }
          ],
          "start": 473,
          "end": 481
        },
        "arguments": [],
        "optional": false,
        "start": 467,
        "end": 483
      },
      "directive": null,
      "start": 467,
      "end": 484
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bound3",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 517
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
              "start": 518,
              "end": 519
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 528,
              "end": 530
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 518,
            "end": 530
          }
        ],
        "start": 517,
        "end": 531
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "start": 535,
                "end": 536
              },
              "typeArguments": null,
              "start": 535,
              "end": 536
            },
            "start": 533,
            "end": 536
          },
          "start": 532,
          "end": 536
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 551,
                      "end": 557
                    },
                    "start": 549,
                    "end": 557
                  },
                  "start": 548,
                  "end": 557
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 561
                },
                "definite": false,
                "start": 548,
                "end": 561
              }
            ],
            "declare": false,
            "start": 544,
            "end": 562
          }
        ],
        "start": 538,
        "end": 570
      },
      "expression": false,
      "start": 502,
      "end": 570
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Proxy",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 587
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
              "start": 588,
              "end": 589
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 598,
              "end": 604
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 588,
            "end": 604
          }
        ],
        "start": 587,
        "end": 605
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 606,
        "end": 608
      },
      "declare": false,
      "start": 572,
      "end": 608
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 622
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 623,
                      "end": 629
                    }
                  ],
                  "start": 622,
                  "end": 630
                },
                "start": 617,
                "end": 630
              },
              "start": 615,
              "end": 630
            },
            "start": 614,
            "end": 630
          },
          "init": null,
          "definite": false,
          "start": 614,
          "end": 630
        }
      ],
      "declare": false,
      "start": 610,
      "end": 631
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 653
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNullKeyword",
                      "start": 654,
                      "end": 658
                    }
                  ],
                  "start": 653,
                  "end": 659
                },
                "start": 648,
                "end": 659
              },
              "start": 646,
              "end": 659
            },
            "start": 645,
            "end": 659
          },
          "init": null,
          "definite": false,
          "start": 645,
          "end": 659
        }
      ],
      "declare": false,
      "start": 641,
      "end": 660
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 679
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 680,
                      "end": 689
                    }
                  ],
                  "start": 679,
                  "end": 690
                },
                "start": 674,
                "end": 690
              },
              "start": 672,
              "end": 690
            },
            "start": 671,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 671,
          "end": 690
        }
      ],
      "declare": false,
      "start": 667,
      "end": 692
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
        "end": 715
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 725
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 727,
                "end": 733
              },
              "start": 725,
              "end": 733
            },
            "accessibility": null,
            "static": false,
            "start": 722,
            "end": 734
          }
        ],
        "start": 716,
        "end": 736
      },
      "declare": false,
      "start": 701,
      "end": 736
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 745,
                  "end": 750
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Blah",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 751,
                        "end": 755
                      },
                      "typeArguments": null,
                      "start": 751,
                      "end": 755
                    }
                  ],
                  "start": 750,
                  "end": 756
                },
                "start": 745,
                "end": 756
              },
              "start": 743,
              "end": 756
            },
            "start": 742,
            "end": 756
          },
          "init": null,
          "definite": false,
          "start": 742,
          "end": 756
        }
      ],
      "declare": false,
      "start": 738,
      "end": 757
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 763
}
```
