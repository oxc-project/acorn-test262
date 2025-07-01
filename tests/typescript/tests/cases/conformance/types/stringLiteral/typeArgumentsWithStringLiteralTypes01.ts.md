__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 29,
          "end": 36
        },
        "start": 27,
        "end": 36
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeReturnString",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 77,
              "end": 83
            },
            "start": 75,
            "end": 83
          },
          "start": 72,
          "end": 83
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 86,
          "end": 92
        },
        "start": 84,
        "end": 92
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 93
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeReturnHello",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 126
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "Hello",
                "raw": "\"Hello\"",
                "start": 132,
                "end": 139
              },
              "start": 132,
              "end": 139
            },
            "start": 130,
            "end": 139
          },
          "start": 127,
          "end": 139
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Hello",
            "raw": "\"Hello\"",
            "start": 142,
            "end": 149
          },
          "start": 142,
          "end": 149
        },
        "start": 140,
        "end": 149
      },
      "body": null,
      "expression": false,
      "start": 94,
      "end": 150
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeReturnHelloWorld",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 188
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
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
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 194,
                    "end": 201
                  },
                  "start": 194,
                  "end": 201
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "World",
                    "raw": "\"World\"",
                    "start": 204,
                    "end": 211
                  },
                  "start": 204,
                  "end": 211
                }
              ],
              "start": 194,
              "end": 211
            },
            "start": 192,
            "end": 211
          },
          "start": 189,
          "end": 211
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "Hello",
                "raw": "\"Hello\"",
                "start": 214,
                "end": 221
              },
              "start": 214,
              "end": 221
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "World",
                "raw": "\"World\"",
                "start": 224,
                "end": 231
              },
              "start": 224,
              "end": 231
            }
          ],
          "start": 214,
          "end": 231
        },
        "start": 212,
        "end": 231
      },
      "body": null,
      "expression": false,
      "start": 151,
      "end": 232
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun1",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 247
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
              "start": 248,
              "end": 249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 248,
            "end": 249
          }
        ],
        "start": 247,
        "end": 250
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "typeArguments": null,
              "start": 254,
              "end": 255
            },
            "start": 252,
            "end": 255
          },
          "start": 251,
          "end": 255
        },
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "typeArguments": null,
              "start": 260,
              "end": 261
            },
            "start": 258,
            "end": 261
          },
          "start": 257,
          "end": 261
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "randBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 284
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 276,
                "end": 286
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 290
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "start": 276,
              "end": 294
            },
            "start": 269,
            "end": 295
          }
        ],
        "start": 263,
        "end": 297
      },
      "expression": false,
      "start": 234,
      "end": 297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun2",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 312
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
              "start": 313,
              "end": 314
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 314
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 317
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 316,
            "end": 317
          }
        ],
        "start": 312,
        "end": 318
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "typeArguments": null,
              "start": 322,
              "end": 323
            },
            "start": 320,
            "end": 323
          },
          "start": 319,
          "end": 323
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 329
              },
              "typeArguments": null,
              "start": 328,
              "end": 329
            },
            "start": 326,
            "end": 329
          },
          "start": 325,
          "end": 329
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "randBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 352
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 344,
                "end": 354
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 358
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 362
              },
              "start": 344,
              "end": 362
            },
            "start": 337,
            "end": 363
          }
        ],
        "start": 331,
        "end": 365
      },
      "expression": false,
      "start": 299,
      "end": 365
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun3",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 380
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
              "start": 381,
              "end": 382
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 382
          }
        ],
        "start": 380,
        "end": 383
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 391
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                },
                "typeArguments": null,
                "start": 393,
                "end": 394
              },
              "start": 393,
              "end": 396
            },
            "start": 391,
            "end": 396
          },
          "value": null,
          "start": 384,
          "end": 396
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
            "start": 399,
            "end": 400
          },
          "typeArguments": null,
          "start": 399,
          "end": 400
        },
        "start": 397,
        "end": 400
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 418
              },
              "property": {
                "type": "UnaryExpression",
                "operator": "+",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 428
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 420,
                  "end": 430
                },
                "prefix": true,
                "start": 419,
                "end": 430
              },
              "optional": false,
              "computed": true,
              "start": 414,
              "end": 431
            },
            "start": 407,
            "end": 432
          }
        ],
        "start": 401,
        "end": 434
      },
      "expression": false,
      "start": 367,
      "end": 434
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n1",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 448
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 659
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 662,
                      "end": 666
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 667,
                        "end": 674
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 676,
                        "end": 683
                      }
                    ],
                    "optional": false,
                    "start": 662,
                    "end": 684
                  },
                  "definite": false,
                  "start": 658,
                  "end": 684
                }
              ],
              "declare": false,
              "start": 654,
              "end": 685
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 647,
            "end": 685
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 702
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 705,
                      "end": 709
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 710,
                        "end": 717
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 719,
                        "end": 726
                      }
                    ],
                    "optional": false,
                    "start": 705,
                    "end": 727
                  },
                  "definite": false,
                  "start": 701,
                  "end": 727
                }
              ],
              "declare": false,
              "start": 697,
              "end": 728
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 690,
            "end": 728
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 745
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 752
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 753,
                        "end": 760
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 762,
                        "end": 769
                      }
                    ],
                    "optional": false,
                    "start": 748,
                    "end": 770
                  },
                  "definite": false,
                  "start": 744,
                  "end": 770
                }
              ],
              "declare": false,
              "start": 740,
              "end": 771
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 733,
            "end": 771
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 788
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 791,
                      "end": 795
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 796,
                        "end": 803
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 805,
                        "end": 812
                      }
                    ],
                    "optional": false,
                    "start": 791,
                    "end": 813
                  },
                  "definite": false,
                  "start": 787,
                  "end": 813
                }
              ],
              "declare": false,
              "start": 783,
              "end": 814
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 776,
            "end": 814
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 831
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 838
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 839,
                        "end": 846
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 848,
                        "end": 855
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 857,
                        "end": 864
                      },
                      {
                        "type": "Literal",
                        "value": "Foo",
                        "raw": "\"Foo\"",
                        "start": 866,
                        "end": 871
                      }
                    ],
                    "optional": false,
                    "start": 834,
                    "end": 872
                  },
                  "definite": false,
                  "start": 830,
                  "end": 872
                }
              ],
              "declare": false,
              "start": 826,
              "end": 873
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 819,
            "end": 873
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 903
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 906,
                  "end": 922
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 924
                  }
                ],
                "optional": false,
                "start": 906,
                "end": 925
              },
              "start": 902,
              "end": 925
            },
            "directive": null,
            "start": 902,
            "end": 926
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 932
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 935,
                  "end": 951
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 952,
                    "end": 953
                  }
                ],
                "optional": false,
                "start": 935,
                "end": 954
              },
              "start": 931,
              "end": 954
            },
            "directive": null,
            "start": 931,
            "end": 955
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 961
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 964,
                  "end": 980
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 982
                  }
                ],
                "optional": false,
                "start": 964,
                "end": 983
              },
              "start": 960,
              "end": 983
            },
            "directive": null,
            "start": 960,
            "end": 984
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 990
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 1009
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1011
                  }
                ],
                "optional": false,
                "start": 993,
                "end": 1012
              },
              "start": 989,
              "end": 1012
            },
            "directive": null,
            "start": 989,
            "end": 1013
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1019
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1038
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1039,
                    "end": 1040
                  }
                ],
                "optional": false,
                "start": 1022,
                "end": 1041
              },
              "start": 1018,
              "end": 1041
            },
            "directive": null,
            "start": 1018,
            "end": 1042
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1110
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1113,
                  "end": 1128
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1129,
                    "end": 1130
                  }
                ],
                "optional": false,
                "start": 1113,
                "end": 1131
              },
              "start": 1109,
              "end": 1131
            },
            "directive": null,
            "start": 1109,
            "end": 1132
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1138
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1141,
                  "end": 1156
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1157,
                    "end": 1158
                  }
                ],
                "optional": false,
                "start": 1141,
                "end": 1159
              },
              "start": 1137,
              "end": 1159
            },
            "directive": null,
            "start": 1137,
            "end": 1160
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1166
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1169,
                  "end": 1184
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1186
                  }
                ],
                "optional": false,
                "start": 1169,
                "end": 1187
              },
              "start": 1165,
              "end": 1187
            },
            "directive": null,
            "start": 1165,
            "end": 1188
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1193,
                "end": 1194
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1197,
                  "end": 1212
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1214
                  }
                ],
                "optional": false,
                "start": 1197,
                "end": 1215
              },
              "start": 1193,
              "end": 1215
            },
            "directive": null,
            "start": 1193,
            "end": 1216
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1221,
                "end": 1222
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1225,
                  "end": 1240
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1242
                  }
                ],
                "optional": false,
                "start": 1225,
                "end": 1243
              },
              "start": 1221,
              "end": 1243
            },
            "directive": null,
            "start": 1221,
            "end": 1244
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1307,
                "end": 1308
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1331
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1332,
                    "end": 1333
                  }
                ],
                "optional": false,
                "start": 1311,
                "end": 1334
              },
              "start": 1307,
              "end": 1334
            },
            "directive": null,
            "start": 1307,
            "end": 1335
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1364
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1365,
                    "end": 1366
                  }
                ],
                "optional": false,
                "start": 1344,
                "end": 1367
              },
              "start": 1340,
              "end": 1367
            },
            "directive": null,
            "start": 1340,
            "end": 1368
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1373,
                "end": 1374
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1377,
                  "end": 1397
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1398,
                    "end": 1399
                  }
                ],
                "optional": false,
                "start": 1377,
                "end": 1400
              },
              "start": 1373,
              "end": 1400
            },
            "directive": null,
            "start": 1373,
            "end": 1401
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1406,
                "end": 1407
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1430
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1431,
                    "end": 1432
                  }
                ],
                "optional": false,
                "start": 1410,
                "end": 1433
              },
              "start": 1406,
              "end": 1433
            },
            "directive": null,
            "start": 1406,
            "end": 1434
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1440
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1443,
                  "end": 1463
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1464,
                    "end": 1465
                  }
                ],
                "optional": false,
                "start": 1443,
                "end": 1466
              },
              "start": 1439,
              "end": 1466
            },
            "directive": null,
            "start": 1439,
            "end": 1467
          }
        ],
        "start": 449,
        "end": 1469
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 436,
      "end": 1469
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1483
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 1610,
                    "end": 1611
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1614,
                      "end": 1618
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1619,
                            "end": 1626
                          },
                          "start": 1619,
                          "end": 1626
                        }
                      ],
                      "start": 1618,
                      "end": 1627
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1628,
                        "end": 1635
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1637,
                        "end": 1644
                      }
                    ],
                    "optional": false,
                    "start": 1614,
                    "end": 1645
                  },
                  "definite": false,
                  "start": 1610,
                  "end": 1645
                }
              ],
              "declare": false,
              "start": 1606,
              "end": 1646
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1599,
            "end": 1646
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1662,
                    "end": 1663
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1666,
                      "end": 1670
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1671,
                            "end": 1678
                          },
                          "start": 1671,
                          "end": 1678
                        }
                      ],
                      "start": 1670,
                      "end": 1679
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1680,
                        "end": 1687
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 1689,
                        "end": 1696
                      }
                    ],
                    "optional": false,
                    "start": 1666,
                    "end": 1697
                  },
                  "definite": false,
                  "start": 1662,
                  "end": 1697
                }
              ],
              "declare": false,
              "start": 1658,
              "end": 1698
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1651,
            "end": 1698
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1714,
                    "end": 1715
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1718,
                      "end": 1722
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1723,
                            "end": 1730
                          },
                          "start": 1723,
                          "end": 1730
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1732,
                            "end": 1739
                          },
                          "start": 1732,
                          "end": 1739
                        }
                      ],
                      "start": 1722,
                      "end": 1740
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1741,
                        "end": 1748
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1750,
                        "end": 1757
                      }
                    ],
                    "optional": false,
                    "start": 1718,
                    "end": 1758
                  },
                  "definite": false,
                  "start": 1714,
                  "end": 1758
                }
              ],
              "declare": false,
              "start": 1710,
              "end": 1759
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1703,
            "end": 1759
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1775,
                    "end": 1776
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1779,
                      "end": 1783
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1784,
                            "end": 1791
                          },
                          "start": 1784,
                          "end": 1791
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1793,
                            "end": 1800
                          },
                          "start": 1793,
                          "end": 1800
                        }
                      ],
                      "start": 1783,
                      "end": 1801
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1802,
                        "end": 1809
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 1811,
                        "end": 1818
                      }
                    ],
                    "optional": false,
                    "start": 1779,
                    "end": 1819
                  },
                  "definite": false,
                  "start": 1775,
                  "end": 1819
                }
              ],
              "declare": false,
              "start": 1771,
              "end": 1820
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1764,
            "end": 1820
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1836,
                    "end": 1837
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1840,
                      "end": 1844
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1845,
                            "end": 1852
                          },
                          "start": 1845,
                          "end": 1852
                        }
                      ],
                      "start": 1844,
                      "end": 1853
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1854,
                        "end": 1861
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 1863,
                        "end": 1870
                      }
                    ],
                    "optional": false,
                    "start": 1840,
                    "end": 1871
                  },
                  "definite": false,
                  "start": 1836,
                  "end": 1871
                }
              ],
              "declare": false,
              "start": 1832,
              "end": 1872
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1825,
            "end": 1872
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1943,
                "end": 1944
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1963
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1964,
                    "end": 1965
                  }
                ],
                "optional": false,
                "start": 1947,
                "end": 1966
              },
              "start": 1943,
              "end": 1966
            },
            "directive": null,
            "start": 1943,
            "end": 1967
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1972,
                "end": 1973
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1976,
                  "end": 1992
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1993,
                    "end": 1994
                  }
                ],
                "optional": false,
                "start": 1976,
                "end": 1995
              },
              "start": 1972,
              "end": 1995
            },
            "directive": null,
            "start": 1972,
            "end": 1996
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2001,
                "end": 2002
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2005,
                  "end": 2021
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2022,
                    "end": 2023
                  }
                ],
                "optional": false,
                "start": 2005,
                "end": 2024
              },
              "start": 2001,
              "end": 2024
            },
            "directive": null,
            "start": 2001,
            "end": 2025
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 2030,
                "end": 2031
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2034,
                  "end": 2050
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2051,
                    "end": 2052
                  }
                ],
                "optional": false,
                "start": 2034,
                "end": 2053
              },
              "start": 2030,
              "end": 2053
            },
            "directive": null,
            "start": 2030,
            "end": 2054
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 2059,
                "end": 2060
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2063,
                  "end": 2079
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2080,
                    "end": 2081
                  }
                ],
                "optional": false,
                "start": 2063,
                "end": 2082
              },
              "start": 2059,
              "end": 2082
            },
            "directive": null,
            "start": 2059,
            "end": 2083
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2112,
                "end": 2113
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2116,
                  "end": 2131
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2132,
                    "end": 2133
                  }
                ],
                "optional": false,
                "start": 2116,
                "end": 2134
              },
              "start": 2112,
              "end": 2134
            },
            "directive": null,
            "start": 2112,
            "end": 2135
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2140,
                "end": 2141
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2144,
                  "end": 2159
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2160,
                    "end": 2161
                  }
                ],
                "optional": false,
                "start": 2144,
                "end": 2162
              },
              "start": 2140,
              "end": 2162
            },
            "directive": null,
            "start": 2140,
            "end": 2163
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2168,
                "end": 2169
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2172,
                  "end": 2187
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2188,
                    "end": 2189
                  }
                ],
                "optional": false,
                "start": 2172,
                "end": 2190
              },
              "start": 2168,
              "end": 2190
            },
            "directive": null,
            "start": 2168,
            "end": 2191
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 2196,
                "end": 2197
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2200,
                  "end": 2215
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2216,
                    "end": 2217
                  }
                ],
                "optional": false,
                "start": 2200,
                "end": 2218
              },
              "start": 2196,
              "end": 2218
            },
            "directive": null,
            "start": 2196,
            "end": 2219
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 2224,
                "end": 2225
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2228,
                  "end": 2243
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2244,
                    "end": 2245
                  }
                ],
                "optional": false,
                "start": 2228,
                "end": 2246
              },
              "start": 2224,
              "end": 2246
            },
            "directive": null,
            "start": 2224,
            "end": 2247
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2318,
                "end": 2319
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2322,
                  "end": 2342
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2343,
                    "end": 2344
                  }
                ],
                "optional": false,
                "start": 2322,
                "end": 2345
              },
              "start": 2318,
              "end": 2345
            },
            "directive": null,
            "start": 2318,
            "end": 2346
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2351,
                "end": 2352
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2355,
                  "end": 2375
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2376,
                    "end": 2377
                  }
                ],
                "optional": false,
                "start": 2355,
                "end": 2378
              },
              "start": 2351,
              "end": 2378
            },
            "directive": null,
            "start": 2351,
            "end": 2379
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2384,
                "end": 2385
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2388,
                  "end": 2408
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2409,
                    "end": 2410
                  }
                ],
                "optional": false,
                "start": 2388,
                "end": 2411
              },
              "start": 2384,
              "end": 2411
            },
            "directive": null,
            "start": 2384,
            "end": 2412
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 2417,
                "end": 2418
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2421,
                  "end": 2441
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2442,
                    "end": 2443
                  }
                ],
                "optional": false,
                "start": 2421,
                "end": 2444
              },
              "start": 2417,
              "end": 2444
            },
            "directive": null,
            "start": 2417,
            "end": 2445
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 2450,
                "end": 2451
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2454,
                  "end": 2474
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2475,
                    "end": 2476
                  }
                ],
                "optional": false,
                "start": 2454,
                "end": 2477
              },
              "start": 2450,
              "end": 2477
            },
            "directive": null,
            "start": 2450,
            "end": 2478
          }
        ],
        "start": 1484,
        "end": 2480
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1471,
      "end": 2480
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2493,
        "end": 2495
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 2632,
                    "end": 2633
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2636,
                      "end": 2640
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 2641,
                            "end": 2648
                          },
                          "start": 2641,
                          "end": 2648
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\"",
                            "start": 2650,
                            "end": 2657
                          },
                          "start": 2650,
                          "end": 2657
                        }
                      ],
                      "start": 2640,
                      "end": 2658
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2659,
                        "end": 2666
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2668,
                        "end": 2675
                      }
                    ],
                    "optional": false,
                    "start": 2636,
                    "end": 2676
                  },
                  "definite": false,
                  "start": 2632,
                  "end": 2676
                }
              ],
              "declare": false,
              "start": 2628,
              "end": 2677
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2621,
            "end": 2677
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2693,
                    "end": 2694
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2697,
                      "end": 2701
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 2702,
                            "end": 2709
                          },
                          "start": 2702,
                          "end": 2709
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\"",
                            "start": 2711,
                            "end": 2718
                          },
                          "start": 2711,
                          "end": 2718
                        }
                      ],
                      "start": 2701,
                      "end": 2719
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2720,
                        "end": 2727
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2729,
                        "end": 2736
                      }
                    ],
                    "optional": false,
                    "start": 2697,
                    "end": 2737
                  },
                  "definite": false,
                  "start": 2693,
                  "end": 2737
                }
              ],
              "declare": false,
              "start": 2689,
              "end": 2738
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2682,
            "end": 2738
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2754,
                    "end": 2755
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2758,
                      "end": 2762
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\"",
                            "start": 2763,
                            "end": 2770
                          },
                          "start": 2763,
                          "end": 2770
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 2772,
                            "end": 2779
                          },
                          "start": 2772,
                          "end": 2779
                        }
                      ],
                      "start": 2762,
                      "end": 2780
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2781,
                        "end": 2788
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2790,
                        "end": 2797
                      }
                    ],
                    "optional": false,
                    "start": 2758,
                    "end": 2798
                  },
                  "definite": false,
                  "start": 2754,
                  "end": 2798
                }
              ],
              "declare": false,
              "start": 2750,
              "end": 2799
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2743,
            "end": 2799
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2815,
                    "end": 2816
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2819,
                      "end": 2823
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\"",
                            "start": 2824,
                            "end": 2831
                          },
                          "start": 2824,
                          "end": 2831
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 2833,
                            "end": 2840
                          },
                          "start": 2833,
                          "end": 2840
                        }
                      ],
                      "start": 2823,
                      "end": 2841
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2842,
                        "end": 2849
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2851,
                        "end": 2858
                      }
                    ],
                    "optional": false,
                    "start": 2819,
                    "end": 2859
                  },
                  "definite": false,
                  "start": 2815,
                  "end": 2859
                }
              ],
              "declare": false,
              "start": 2811,
              "end": 2860
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2804,
            "end": 2860
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2876,
                    "end": 2877
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2880,
                      "end": 2884
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
                                "value": "Hello",
                                "raw": "\"Hello\"",
                                "start": 2885,
                                "end": 2892
                              },
                              "start": 2885,
                              "end": 2892
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "World",
                                "raw": "\"World\"",
                                "start": 2895,
                                "end": 2902
                              },
                              "start": 2895,
                              "end": 2902
                            }
                          ],
                          "start": 2885,
                          "end": 2902
                        }
                      ],
                      "start": 2884,
                      "end": 2903
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2904,
                        "end": 2911
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2913,
                        "end": 2920
                      }
                    ],
                    "optional": false,
                    "start": 2880,
                    "end": 2921
                  },
                  "definite": false,
                  "start": 2876,
                  "end": 2921
                }
              ],
              "declare": false,
              "start": 2872,
              "end": 2922
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2865,
            "end": 2922
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2993,
                "end": 2994
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2997,
                  "end": 3013
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3014,
                    "end": 3015
                  }
                ],
                "optional": false,
                "start": 2997,
                "end": 3016
              },
              "start": 2993,
              "end": 3016
            },
            "directive": null,
            "start": 2993,
            "end": 3017
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 3022,
                "end": 3023
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3026,
                  "end": 3042
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3043,
                    "end": 3044
                  }
                ],
                "optional": false,
                "start": 3026,
                "end": 3045
              },
              "start": 3022,
              "end": 3045
            },
            "directive": null,
            "start": 3022,
            "end": 3046
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3051,
                "end": 3052
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3055,
                  "end": 3071
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3072,
                    "end": 3073
                  }
                ],
                "optional": false,
                "start": 3055,
                "end": 3074
              },
              "start": 3051,
              "end": 3074
            },
            "directive": null,
            "start": 3051,
            "end": 3075
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 3080,
                "end": 3081
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3084,
                  "end": 3100
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3101,
                    "end": 3102
                  }
                ],
                "optional": false,
                "start": 3084,
                "end": 3103
              },
              "start": 3080,
              "end": 3103
            },
            "directive": null,
            "start": 3080,
            "end": 3104
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 3109,
                "end": 3110
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3113,
                  "end": 3129
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3130,
                    "end": 3131
                  }
                ],
                "optional": false,
                "start": 3113,
                "end": 3132
              },
              "start": 3109,
              "end": 3132
            },
            "directive": null,
            "start": 3109,
            "end": 3133
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 3196,
                "end": 3197
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3200,
                  "end": 3215
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3216,
                    "end": 3217
                  }
                ],
                "optional": false,
                "start": 3200,
                "end": 3218
              },
              "start": 3196,
              "end": 3218
            },
            "directive": null,
            "start": 3196,
            "end": 3219
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 3224,
                "end": 3225
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3228,
                  "end": 3243
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3244,
                    "end": 3245
                  }
                ],
                "optional": false,
                "start": 3228,
                "end": 3246
              },
              "start": 3224,
              "end": 3246
            },
            "directive": null,
            "start": 3224,
            "end": 3247
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3252,
                "end": 3253
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3256,
                  "end": 3271
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3272,
                    "end": 3273
                  }
                ],
                "optional": false,
                "start": 3256,
                "end": 3274
              },
              "start": 3252,
              "end": 3274
            },
            "directive": null,
            "start": 3252,
            "end": 3275
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 3280,
                "end": 3281
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3284,
                  "end": 3299
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3300,
                    "end": 3301
                  }
                ],
                "optional": false,
                "start": 3284,
                "end": 3302
              },
              "start": 3280,
              "end": 3302
            },
            "directive": null,
            "start": 3280,
            "end": 3303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 3308,
                "end": 3309
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3312,
                  "end": 3327
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3328,
                    "end": 3329
                  }
                ],
                "optional": false,
                "start": 3312,
                "end": 3330
              },
              "start": 3308,
              "end": 3330
            },
            "directive": null,
            "start": 3308,
            "end": 3331
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 3366,
                "end": 3367
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3370,
                  "end": 3390
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3391,
                    "end": 3392
                  }
                ],
                "optional": false,
                "start": 3370,
                "end": 3393
              },
              "start": 3366,
              "end": 3393
            },
            "directive": null,
            "start": 3366,
            "end": 3394
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 3399,
                "end": 3400
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3403,
                  "end": 3423
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3424,
                    "end": 3425
                  }
                ],
                "optional": false,
                "start": 3403,
                "end": 3426
              },
              "start": 3399,
              "end": 3426
            },
            "directive": null,
            "start": 3399,
            "end": 3427
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3432,
                "end": 3433
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3436,
                  "end": 3456
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3457,
                    "end": 3458
                  }
                ],
                "optional": false,
                "start": 3436,
                "end": 3459
              },
              "start": 3432,
              "end": 3459
            },
            "directive": null,
            "start": 3432,
            "end": 3460
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 3465,
                "end": 3466
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3469,
                  "end": 3489
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3490,
                    "end": 3491
                  }
                ],
                "optional": false,
                "start": 3469,
                "end": 3492
              },
              "start": 3465,
              "end": 3492
            },
            "directive": null,
            "start": 3465,
            "end": 3493
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 3498,
                "end": 3499
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3502,
                  "end": 3522
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3523,
                    "end": 3524
                  }
                ],
                "optional": false,
                "start": 3502,
                "end": 3525
              },
              "start": 3498,
              "end": 3525
            },
            "directive": null,
            "start": 3498,
            "end": 3526
          }
        ],
        "start": 2496,
        "end": 3528
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2483,
      "end": 3528
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3528
}
```
