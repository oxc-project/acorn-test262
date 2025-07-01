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
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 12,
        "end": 18
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
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
                  "start": 26,
                  "end": 27
                },
                "typeArguments": null,
                "start": 26,
                "end": 27
              },
              "start": 26,
              "end": 29
            },
            "start": 24,
            "end": 29
          },
          "start": 19,
          "end": 29
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 38,
                        "end": 39
                      },
                      "typeArguments": null,
                      "start": 38,
                      "end": 39
                    },
                    "start": 36,
                    "end": 39
                  },
                  "start": 35,
                  "end": 39
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 45
                  },
                  "typeArguments": null,
                  "start": 44,
                  "end": 45
                },
                "start": 41,
                "end": 45
              },
              "start": 34,
              "end": 45
            },
            "start": 32,
            "end": 45
          },
          "start": 31,
          "end": 45
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "typeArguments": null,
            "start": 48,
            "end": 49
          },
          "start": 48,
          "end": 51
        },
        "start": 46,
        "end": 51
      },
      "body": {
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 69
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 73
                },
                "optional": false,
                "computed": false,
                "start": 64,
                "end": 73
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                }
              ],
              "optional": false,
              "start": 64,
              "end": 76
            },
            "start": 57,
            "end": 77
          }
        ],
        "start": 51,
        "end": 79
      },
      "expression": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 98
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
              "start": 99,
              "end": 100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 100
          }
        ],
        "start": 98,
        "end": 101
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
                "start": 105,
                "end": 106
              },
              "typeArguments": null,
              "start": 105,
              "end": 106
            },
            "start": 103,
            "end": 106
          },
          "start": 102,
          "end": 106
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "start": 114,
            "end": 123
          }
        ],
        "start": 108,
        "end": 125
      },
      "expression": false,
      "start": 81,
      "end": 125
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "singleton",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 145
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
              "start": 146,
              "end": 147
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 147
          }
        ],
        "start": 145,
        "end": 148
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
                "start": 152,
                "end": 153
              },
              "typeArguments": null,
              "start": 152,
              "end": 153
            },
            "start": 150,
            "end": 153
          },
          "start": 149,
          "end": 153
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 170
                }
              ],
              "start": 168,
              "end": 171
            },
            "start": 161,
            "end": 172
          }
        ],
        "start": 155,
        "end": 174
      },
      "expression": false,
      "start": 127,
      "end": 174
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
            "name": "xs",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 182
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 186,
                "end": 187
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 189,
                "end": 190
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 192,
                "end": 193
              }
            ],
            "start": 185,
            "end": 194
          },
          "definite": false,
          "start": 180,
          "end": 194
        }
      ],
      "declare": false,
      "start": 176,
      "end": 195
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 258,
                  "end": 264
                },
                "start": 258,
                "end": 266
              },
              "start": 256,
              "end": 266
            },
            "start": 254,
            "end": 266
          },
          "init": null,
          "definite": false,
          "start": 254,
          "end": 266
        }
      ],
      "declare": false,
      "start": 250,
      "end": 267
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 274
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "xs",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 279
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 283
              },
              "optional": false,
              "computed": false,
              "start": 277,
              "end": 283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 292
              }
            ],
            "optional": false,
            "start": 277,
            "end": 293
          },
          "definite": false,
          "start": 272,
          "end": 293
        }
      ],
      "declare": false,
      "start": 268,
      "end": 294
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 331
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 337
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "xs",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 340
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 350
              }
            ],
            "optional": false,
            "start": 334,
            "end": 351
          },
          "definite": false,
          "start": 329,
          "end": 351
        }
      ],
      "declare": false,
      "start": 325,
      "end": 352
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 391,
                    "end": 397
                  },
                  "start": 391,
                  "end": 399
                },
                "start": 391,
                "end": 401
              },
              "start": 389,
              "end": 401
            },
            "start": 387,
            "end": 401
          },
          "init": null,
          "definite": false,
          "start": 387,
          "end": 401
        }
      ],
      "declare": false,
      "start": 383,
      "end": 402
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 418
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "xs",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 423
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 427
              },
              "optional": false,
              "computed": false,
              "start": 421,
              "end": 427
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "singleton",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 437
              }
            ],
            "optional": false,
            "start": 421,
            "end": 438
          },
          "definite": false,
          "start": 416,
          "end": 438
        }
      ],
      "declare": false,
      "start": 412,
      "end": 439
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 477
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 483
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "xs",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 486
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "singleton",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 497
              }
            ],
            "optional": false,
            "start": 480,
            "end": 498
          },
          "definite": false,
          "start": 475,
          "end": 498
        }
      ],
      "declare": false,
      "start": 471,
      "end": 499
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 529
}
```
