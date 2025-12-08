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
        "name": "useCallback1",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 87,
              "end": 88
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 105
              },
              "typeArguments": null,
              "start": 97,
              "end": 105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 87,
            "end": 105
          }
        ],
        "start": 86,
        "end": 106
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
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
                "start": 111,
                "end": 112
              },
              "typeArguments": null,
              "start": 111,
              "end": 112
            },
            "start": 109,
            "end": 112
          },
          "start": 107,
          "end": 112
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
            "start": 115,
            "end": 116
          },
          "typeArguments": null,
          "start": 115,
          "end": 116
        },
        "start": 113,
        "end": 116
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 117
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ex2",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 139
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": true,
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
                      "type": "TSNumberKeyword",
                      "start": 155,
                      "end": 161
                    },
                    "start": 153,
                    "end": 161
                  },
                  "start": 152,
                  "end": 161
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 166,
                  "end": 170
                },
                "start": 163,
                "end": 170
              },
              "start": 151,
              "end": 170
            },
            "start": 149,
            "end": 170
          },
          "start": 140,
          "end": 170
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 173,
          "end": 177
        },
        "start": 171,
        "end": 177
      },
      "body": null,
      "expression": false,
      "start": 119,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ex2",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 182
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useCallback1",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 195
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 203,
                  "end": 205
                },
                "id": null,
                "generator": false,
                "start": 196,
                "end": 205
              }
            ],
            "optional": false,
            "start": 183,
            "end": 206
          }
        ],
        "optional": false,
        "start": 179,
        "end": 207
      },
      "directive": null,
      "start": 179,
      "end": 208
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ex3",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 230
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
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
                          "type": "TSNumberKeyword",
                          "start": 246,
                          "end": 252
                        },
                        "start": 244,
                        "end": 252
                      },
                      "start": 243,
                      "end": 252
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 257,
                      "end": 261
                    },
                    "start": 254,
                    "end": 261
                  },
                  "start": 242,
                  "end": 261
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 265,
                    "end": 266
                  },
                  "start": 265,
                  "end": 266
                }
              ],
              "start": 241,
              "end": 266
            },
            "start": 239,
            "end": 266
          },
          "start": 231,
          "end": 266
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 269,
          "end": 273
        },
        "start": 267,
        "end": 273
      },
      "body": null,
      "expression": false,
      "start": 210,
      "end": 274
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ex3",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 278
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useCallback1",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 291
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 299,
                  "end": 301
                },
                "id": null,
                "generator": false,
                "start": 292,
                "end": 301
              }
            ],
            "optional": false,
            "start": 279,
            "end": 302
          }
        ],
        "optional": false,
        "start": 275,
        "end": 303
      },
      "directive": null,
      "start": 275,
      "end": 304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useCallback2",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 392
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 393,
              "end": 394
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
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
                    "start": 407,
                    "end": 411
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 413,
                        "end": 416
                      },
                      "start": 413,
                      "end": 418
                    },
                    "start": 411,
                    "end": 418
                  },
                  "value": null,
                  "start": 404,
                  "end": 418
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 423,
                  "end": 426
                },
                "start": 420,
                "end": 426
              },
              "start": 403,
              "end": 426
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 393,
            "end": 426
          }
        ],
        "start": 392,
        "end": 427
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
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
                "start": 441,
                "end": 442
              },
              "typeArguments": null,
              "start": 441,
              "end": 442
            },
            "start": 439,
            "end": 442
          },
          "start": 431,
          "end": 442
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
            "start": 447,
            "end": 448
          },
          "typeArguments": null,
          "start": 447,
          "end": 448
        },
        "start": 445,
        "end": 448
      },
      "body": null,
      "expression": false,
      "start": 363,
      "end": 449
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                            "type": "TSStringKeyword",
                            "start": 467,
                            "end": 473
                          },
                          "start": 465,
                          "end": 473
                        },
                        "start": 464,
                        "end": 473
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 478,
                        "end": 482
                      },
                      "start": 475,
                      "end": 482
                    },
                    "start": 463,
                    "end": 482
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 486,
                    "end": 495
                  }
                ],
                "start": 462,
                "end": 495
              },
              "start": 460,
              "end": 495
            },
            "start": 456,
            "end": 495
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useCallback2",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 510
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 512,
                    "end": 513
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 518,
                  "end": 520
                },
                "id": null,
                "generator": false,
                "start": 511,
                "end": 520
              }
            ],
            "optional": false,
            "start": 498,
            "end": 521
          },
          "definite": false,
          "start": 456,
          "end": 521
        }
      ],
      "declare": false,
      "start": 450,
      "end": 522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 522
}
```
