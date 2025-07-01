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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "start": 11,
          "end": 20
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 22,
          "end": 31
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 39,
              "end": 47
            },
            "start": 37,
            "end": 47
          },
          "value": null,
          "start": 33,
          "end": 47
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 49,
        "end": 52
      },
      "expression": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 65
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 70
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              },
              "start": 72,
              "end": 80
            },
            "start": 70,
            "end": 80
          },
          "value": null,
          "start": 66,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "expression": false,
      "start": 54,
      "end": 85
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 98
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 126,
                            "end": 132
                          },
                          "start": 124,
                          "end": 132
                        },
                        "start": 123,
                        "end": 132
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 137,
                            "end": 143
                          },
                          "start": 135,
                          "end": 143
                        },
                        "start": 134,
                        "end": 143
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 149
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 151,
                              "end": 157
                            },
                            "start": 151,
                            "end": 159
                          },
                          "start": 149,
                          "end": 159
                        },
                        "value": null,
                        "start": 145,
                        "end": 159
                      }
                    ],
                    "returnType": null,
                    "start": 118,
                    "end": 161
                  }
                ],
                "start": 108,
                "end": 167
              },
              "start": 106,
              "end": 167
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 167
          }
        ],
        "start": 99,
        "end": 169
      },
      "declare": false,
      "start": 87,
      "end": 169
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 178
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 196
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    },
                    "start": 198,
                    "end": 206
                  },
                  "start": 197,
                  "end": 206
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 211,
                      "end": 217
                    },
                    "start": 209,
                    "end": 217
                  },
                  "start": 208,
                  "end": 217
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 223
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 225,
                        "end": 231
                      },
                      "start": 225,
                      "end": 233
                    },
                    "start": 223,
                    "end": 233
                  },
                  "value": null,
                  "start": 219,
                  "end": 233
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 235,
                "end": 237
              },
              "expression": false,
              "start": 196,
              "end": 237
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 185,
            "end": 237
          }
        ],
        "start": 179,
        "end": 239
      },
      "abstract": false,
      "declare": false,
      "start": 171,
      "end": 239
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 252
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
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 259,
              "end": 264
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "typeArguments": null,
                "start": 266,
                "end": 274
              },
              "start": 264,
              "end": 274
            },
            "accessibility": null,
            "static": false,
            "start": 259,
            "end": 275
          }
        ],
        "start": 253,
        "end": 277
      },
      "declare": false,
      "start": 241,
      "end": 277
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 290
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 297,
              "end": 298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "typeArguments": null,
                "start": 300,
                "end": 308
              },
              "start": 298,
              "end": 308
            },
            "accessibility": null,
            "static": false,
            "start": 297,
            "end": 309
          }
        ],
        "start": 291,
        "end": 311
      },
      "declare": false,
      "start": 279,
      "end": 311
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 320,
                  "end": 326
                },
                "start": 320,
                "end": 328
              },
              "start": 318,
              "end": 328
            },
            "start": 317,
            "end": 328
          },
          "init": null,
          "definite": false,
          "start": 317,
          "end": 328
        }
      ],
      "declare": false,
      "start": 313,
      "end": 329
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
                  "start": 337,
                  "end": 338
                },
                "typeArguments": null,
                "start": 337,
                "end": 338
              },
              "start": 335,
              "end": 338
            },
            "start": 334,
            "end": 338
          },
          "init": null,
          "definite": false,
          "start": 334,
          "end": 338
        }
      ],
      "declare": false,
      "start": 330,
      "end": 339
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 348
                },
                "typeArguments": null,
                "start": 347,
                "end": 348
              },
              "start": 345,
              "end": 348
            },
            "start": 344,
            "end": 348
          },
          "init": null,
          "definite": false,
          "start": 344,
          "end": 348
        }
      ],
      "declare": false,
      "start": 340,
      "end": 349
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
            "name": "d",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 358
                  },
                  "typeArguments": null,
                  "start": 357,
                  "end": 358
                },
                "start": 357,
                "end": 360
              },
              "start": 355,
              "end": 360
            },
            "start": 354,
            "end": 360
          },
          "init": null,
          "definite": false,
          "start": 354,
          "end": 360
        }
      ],
      "declare": false,
      "start": 350,
      "end": 361
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 377,
                            "end": 383
                          },
                          "start": 375,
                          "end": 383
                        },
                        "start": 372,
                        "end": 383
                      }
                    ],
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
                          "start": 386,
                          "end": 387
                        },
                        "typeArguments": null,
                        "start": 386,
                        "end": 387
                      },
                      "start": 384,
                      "end": 387
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 371,
                    "end": 387
                  }
                ],
                "start": 369,
                "end": 389
              },
              "start": 367,
              "end": 389
            },
            "start": 366,
            "end": 389
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 389
        }
      ],
      "declare": false,
      "start": 362,
      "end": 390
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
            "name": "g",
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "typeArguments": null,
                  "start": 398,
                  "end": 399
                },
                "start": 398,
                "end": 401
              },
              "start": 396,
              "end": 401
            },
            "start": 395,
            "end": 401
          },
          "init": null,
          "definite": false,
          "start": 395,
          "end": 401
        }
      ],
      "declare": false,
      "start": 391,
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 418,
                            "end": 424
                          },
                          "start": 416,
                          "end": 424
                        },
                        "start": 413,
                        "end": 424
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 427,
                          "end": 428
                        },
                        "typeArguments": null,
                        "start": 427,
                        "end": 428
                      },
                      "start": 425,
                      "end": 428
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 412,
                    "end": 428
                  }
                ],
                "start": 410,
                "end": 430
              },
              "start": 408,
              "end": 430
            },
            "start": 407,
            "end": 430
          },
          "init": null,
          "definite": false,
          "start": 407,
          "end": 430
        }
      ],
      "declare": false,
      "start": 403,
      "end": 431
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 440
                    },
                    "typeArguments": null,
                    "start": 439,
                    "end": 440
                  },
                  "start": 439,
                  "end": 442
                },
                "start": 439,
                "end": 444
              },
              "start": 437,
              "end": 444
            },
            "start": 436,
            "end": 444
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 444
        }
      ],
      "declare": false,
      "start": 432,
      "end": 445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 471,
          "end": 472
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 473,
            "end": 474
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 476,
            "end": 477
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 479,
            "end": 487
          }
        ],
        "start": 467,
        "end": 488
      },
      "directive": null,
      "start": 467,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 494,
          "end": 495
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 496,
            "end": 497
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 499,
            "end": 500
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 506
            },
            "start": 502,
            "end": 506
          }
        ],
        "start": 490,
        "end": 507
      },
      "directive": null,
      "start": 490,
      "end": 508
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 515,
            "end": 516
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 518,
            "end": 519
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 525
            },
            "start": 521,
            "end": 525
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 527,
            "end": 535
          }
        ],
        "start": 509,
        "end": 536
      },
      "directive": null,
      "start": 509,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 573,
          "end": 575
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 580
            },
            "start": 576,
            "end": 580
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 586
            },
            "start": 582,
            "end": 586
          }
        ],
        "start": 569,
        "end": 587
      },
      "directive": null,
      "start": 569,
      "end": 588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 593,
          "end": 594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 595,
            "end": 596
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 598,
            "end": 599
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
            },
            "start": 601,
            "end": 605
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 611
            },
            "start": 607,
            "end": 611
          }
        ],
        "start": 589,
        "end": 612
      },
      "directive": null,
      "start": 589,
      "end": 613
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 639
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 640,
              "end": 641
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 643,
              "end": 644
            },
            {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 646,
              "end": 654
            }
          ],
          "start": 634,
          "end": 655
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 634,
        "end": 657
      },
      "directive": null,
      "start": 634,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 664
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 665,
              "end": 666
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 668,
              "end": 669
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 675
              },
              "start": 671,
              "end": 675
            }
          ],
          "start": 659,
          "end": 676
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 659,
        "end": 678
      },
      "directive": null,
      "start": 659,
      "end": 679
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 685
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 686,
              "end": 687
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 689,
              "end": 690
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 696
              },
              "start": 692,
              "end": 696
            },
            {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 698,
              "end": 706
            }
          ],
          "start": 680,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 680,
        "end": 709
      },
      "directive": null,
      "start": 680,
      "end": 710
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 747
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 749
          },
          "optional": false,
          "computed": false,
          "start": 746,
          "end": 749
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 750,
            "end": 751
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 753,
            "end": 754
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 756,
            "end": 764
          }
        ],
        "start": 742,
        "end": 765
      },
      "directive": null,
      "start": 742,
      "end": 766
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 772
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 774
          },
          "optional": false,
          "computed": false,
          "start": 771,
          "end": 774
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 775,
            "end": 776
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 778,
            "end": 779
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 785
            },
            "start": 781,
            "end": 785
          }
        ],
        "start": 767,
        "end": 786
      },
      "directive": null,
      "start": 767,
      "end": 787
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 793
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 794,
            "end": 795
          },
          "optional": false,
          "computed": false,
          "start": 792,
          "end": 795
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 796,
            "end": 797
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 799,
            "end": 800
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 806
            },
            "start": 802,
            "end": 806
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 808,
            "end": 816
          }
        ],
        "start": 788,
        "end": 817
      },
      "directive": null,
      "start": 788,
      "end": 818
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 855
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 857
          },
          "optional": false,
          "computed": false,
          "start": 854,
          "end": 857
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 859,
            "end": 860
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 862,
            "end": 863
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 865,
            "end": 873
          }
        ],
        "start": 849,
        "end": 874
      },
      "directive": null,
      "start": 849,
      "end": 875
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 882
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 883,
            "end": 884
          },
          "optional": false,
          "computed": false,
          "start": 881,
          "end": 884
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 886,
            "end": 887
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 889,
            "end": 890
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 896
            },
            "start": 892,
            "end": 896
          }
        ],
        "start": 876,
        "end": 897
      },
      "directive": null,
      "start": 876,
      "end": 898
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 905
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 906,
            "end": 907
          },
          "optional": false,
          "computed": false,
          "start": 904,
          "end": 907
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 909,
            "end": 910
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 912,
            "end": 913
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 919
            },
            "start": 915,
            "end": 919
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 921,
            "end": 929
          }
        ],
        "start": 899,
        "end": 930
      },
      "directive": null,
      "start": 899,
      "end": 931
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 968
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 969,
              "end": 970
            },
            "optional": false,
            "computed": true,
            "start": 967,
            "end": 971
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 972,
            "end": 973
          },
          "optional": false,
          "computed": false,
          "start": 967,
          "end": 973
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 974,
            "end": 975
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 977,
            "end": 978
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 980,
            "end": 988
          }
        ],
        "start": 963,
        "end": 989
      },
      "directive": null,
      "start": 963,
      "end": 990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 996
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 997,
              "end": 998
            },
            "optional": false,
            "computed": true,
            "start": 995,
            "end": 999
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1000,
            "end": 1001
          },
          "optional": false,
          "computed": false,
          "start": 995,
          "end": 1001
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1002,
            "end": 1003
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1005,
            "end": 1006
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1012
            },
            "start": 1008,
            "end": 1012
          }
        ],
        "start": 991,
        "end": 1013
      },
      "directive": null,
      "start": 991,
      "end": 1014
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1020
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1021,
              "end": 1022
            },
            "optional": false,
            "computed": true,
            "start": 1019,
            "end": 1023
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1025
          },
          "optional": false,
          "computed": false,
          "start": 1019,
          "end": 1025
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1026,
            "end": 1027
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1029,
            "end": 1030
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1036
            },
            "start": 1032,
            "end": 1036
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1038,
            "end": 1046
          }
        ],
        "start": 1015,
        "end": 1047
      },
      "directive": null,
      "start": 1015,
      "end": 1048
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1105,
              "end": 1106
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1107,
              "end": 1112
            },
            "optional": false,
            "computed": true,
            "start": 1105,
            "end": 1113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1114,
            "end": 1115
          },
          "optional": false,
          "computed": false,
          "start": 1105,
          "end": 1115
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1116,
            "end": 1117
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1119,
            "end": 1120
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1122,
            "end": 1130
          }
        ],
        "start": 1101,
        "end": 1131
      },
      "directive": null,
      "start": 1101,
      "end": 1132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1138
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1139,
              "end": 1144
            },
            "optional": false,
            "computed": true,
            "start": 1137,
            "end": 1145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1146,
            "end": 1147
          },
          "optional": false,
          "computed": false,
          "start": 1137,
          "end": 1147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1148,
            "end": 1149
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1151,
            "end": 1152
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1157,
              "end": 1158
            },
            "start": 1154,
            "end": 1158
          }
        ],
        "start": 1133,
        "end": 1159
      },
      "directive": null,
      "start": 1133,
      "end": 1160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1166
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1167,
              "end": 1172
            },
            "optional": false,
            "computed": true,
            "start": 1165,
            "end": 1173
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1174,
            "end": 1175
          },
          "optional": false,
          "computed": false,
          "start": 1165,
          "end": 1175
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1176,
            "end": 1177
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1179,
            "end": 1180
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1186
            },
            "start": 1182,
            "end": 1186
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1188,
            "end": 1196
          }
        ],
        "start": 1161,
        "end": 1197
      },
      "directive": null,
      "start": 1161,
      "end": 1198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1224,
          "end": 1225
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1226,
            "end": 1227
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1229,
            "end": 1230
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1232,
            "end": 1240
          }
        ],
        "start": 1220,
        "end": 1241
      },
      "directive": null,
      "start": 1220,
      "end": 1242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1247,
          "end": 1248
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1249,
            "end": 1250
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1252,
            "end": 1253
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1259
            },
            "start": 1255,
            "end": 1259
          }
        ],
        "start": 1243,
        "end": 1260
      },
      "directive": null,
      "start": 1243,
      "end": 1261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1266,
          "end": 1267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1268,
            "end": 1269
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1271,
            "end": 1272
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1277,
              "end": 1278
            },
            "start": 1274,
            "end": 1278
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1280,
            "end": 1288
          }
        ],
        "start": 1262,
        "end": 1289
      },
      "directive": null,
      "start": 1262,
      "end": 1290
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1326,
            "end": 1327
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1328,
            "end": 1333
          },
          "optional": false,
          "computed": true,
          "start": 1326,
          "end": 1334
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1335,
            "end": 1336
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1338,
            "end": 1339
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1341,
            "end": 1349
          }
        ],
        "start": 1322,
        "end": 1350
      },
      "directive": null,
      "start": 1322,
      "end": 1351
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1357
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1358,
            "end": 1363
          },
          "optional": false,
          "computed": true,
          "start": 1356,
          "end": 1364
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1365,
            "end": 1366
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1368,
            "end": 1369
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1374,
              "end": 1375
            },
            "start": 1371,
            "end": 1375
          }
        ],
        "start": 1352,
        "end": 1376
      },
      "directive": null,
      "start": 1352,
      "end": 1377
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1382,
            "end": 1383
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1384,
            "end": 1389
          },
          "optional": false,
          "computed": true,
          "start": 1382,
          "end": 1390
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1391,
            "end": 1392
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1394,
            "end": 1395
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1401
            },
            "start": 1397,
            "end": 1401
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1403,
            "end": 1411
          }
        ],
        "start": 1378,
        "end": 1412
      },
      "directive": null,
      "start": 1378,
      "end": 1413
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1448,
            "end": 1449
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1450,
            "end": 1455
          },
          "optional": false,
          "computed": true,
          "start": 1448,
          "end": 1456
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1458,
            "end": 1459
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1461,
            "end": 1462
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1464,
            "end": 1472
          }
        ],
        "start": 1443,
        "end": 1473
      },
      "directive": null,
      "start": 1443,
      "end": 1474
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1480,
            "end": 1481
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1482,
            "end": 1487
          },
          "optional": false,
          "computed": true,
          "start": 1480,
          "end": 1488
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1490,
            "end": 1491
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1493,
            "end": 1494
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1499,
              "end": 1500
            },
            "start": 1496,
            "end": 1500
          }
        ],
        "start": 1475,
        "end": 1501
      },
      "directive": null,
      "start": 1475,
      "end": 1502
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1508,
            "end": 1509
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1510,
            "end": 1515
          },
          "optional": false,
          "computed": true,
          "start": 1508,
          "end": 1516
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1518,
            "end": 1519
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1521,
            "end": 1522
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1527,
              "end": 1528
            },
            "start": 1524,
            "end": 1528
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1530,
            "end": 1538
          }
        ],
        "start": 1503,
        "end": 1539
      },
      "directive": null,
      "start": 1503,
      "end": 1540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1575,
              "end": 1576
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1577,
              "end": 1578
            },
            "optional": false,
            "computed": true,
            "start": 1575,
            "end": 1579
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1580,
            "end": 1585
          },
          "optional": false,
          "computed": true,
          "start": 1575,
          "end": 1586
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1587,
            "end": 1588
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1590,
            "end": 1591
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1593,
            "end": 1601
          }
        ],
        "start": 1571,
        "end": 1602
      },
      "directive": null,
      "start": 1571,
      "end": 1603
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1608,
              "end": 1609
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1610,
              "end": 1611
            },
            "optional": false,
            "computed": true,
            "start": 1608,
            "end": 1612
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1613,
            "end": 1618
          },
          "optional": false,
          "computed": true,
          "start": 1608,
          "end": 1619
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1620,
            "end": 1621
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1623,
            "end": 1624
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1630
            },
            "start": 1626,
            "end": 1630
          }
        ],
        "start": 1604,
        "end": 1631
      },
      "directive": null,
      "start": 1604,
      "end": 1632
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1637,
              "end": 1638
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1639,
              "end": 1640
            },
            "optional": false,
            "computed": true,
            "start": 1637,
            "end": 1641
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1642,
            "end": 1647
          },
          "optional": false,
          "computed": true,
          "start": 1637,
          "end": 1648
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1649,
            "end": 1650
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1652,
            "end": 1653
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1658,
              "end": 1659
            },
            "start": 1655,
            "end": 1659
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1661,
            "end": 1669
          }
        ],
        "start": 1633,
        "end": 1670
      },
      "directive": null,
      "start": 1633,
      "end": 1671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1728,
              "end": 1729
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1730,
              "end": 1735
            },
            "optional": false,
            "computed": true,
            "start": 1728,
            "end": 1736
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1737,
            "end": 1742
          },
          "optional": false,
          "computed": true,
          "start": 1728,
          "end": 1743
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1744,
            "end": 1745
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1747,
            "end": 1748
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1750,
            "end": 1758
          }
        ],
        "start": 1724,
        "end": 1759
      },
      "directive": null,
      "start": 1724,
      "end": 1760
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1765,
              "end": 1766
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1767,
              "end": 1772
            },
            "optional": false,
            "computed": true,
            "start": 1765,
            "end": 1773
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1774,
            "end": 1779
          },
          "optional": false,
          "computed": true,
          "start": 1765,
          "end": 1780
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1781,
            "end": 1782
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1784,
            "end": 1785
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1790,
              "end": 1791
            },
            "start": 1787,
            "end": 1791
          }
        ],
        "start": 1761,
        "end": 1792
      },
      "directive": null,
      "start": 1761,
      "end": 1793
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1798,
              "end": 1799
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1800,
              "end": 1805
            },
            "optional": false,
            "computed": true,
            "start": 1798,
            "end": 1806
          },
          "property": {
            "type": "Literal",
            "value": "a-b",
            "raw": "\"a-b\"",
            "start": 1807,
            "end": 1812
          },
          "optional": false,
          "computed": true,
          "start": 1798,
          "end": 1813
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1814,
            "end": 1815
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1817,
            "end": 1818
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1824
            },
            "start": 1820,
            "end": 1824
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1826,
            "end": 1834
          }
        ],
        "start": 1794,
        "end": 1835
      },
      "directive": null,
      "start": 1794,
      "end": 1836
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1885,
              "end": 1886
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1887,
              "end": 1892
            },
            "optional": false,
            "computed": true,
            "start": 1885,
            "end": 1893
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1894,
            "end": 1895
          },
          "optional": false,
          "computed": true,
          "start": 1885,
          "end": 1896
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1897,
            "end": 1898
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1900,
            "end": 1901
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1903,
            "end": 1911
          }
        ],
        "start": 1881,
        "end": 1912
      },
      "directive": null,
      "start": 1881,
      "end": 1913
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1918,
              "end": 1919
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1920,
              "end": 1925
            },
            "optional": false,
            "computed": true,
            "start": 1918,
            "end": 1926
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1927,
            "end": 1928
          },
          "optional": false,
          "computed": true,
          "start": 1918,
          "end": 1929
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1930,
            "end": 1931
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1933,
            "end": 1934
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1939,
              "end": 1940
            },
            "start": 1936,
            "end": 1940
          }
        ],
        "start": 1914,
        "end": 1941
      },
      "directive": null,
      "start": 1914,
      "end": 1942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1947,
              "end": 1948
            },
            "property": {
              "type": "Literal",
              "value": "a-b",
              "raw": "\"a-b\"",
              "start": 1949,
              "end": 1954
            },
            "optional": false,
            "computed": true,
            "start": 1947,
            "end": 1955
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1956,
            "end": 1957
          },
          "optional": false,
          "computed": true,
          "start": 1947,
          "end": 1958
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1959,
            "end": 1960
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1962,
            "end": 1963
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1968,
              "end": 1969
            },
            "start": 1965,
            "end": 1969
          },
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1971,
            "end": 1979
          }
        ],
        "start": 1943,
        "end": 1980
      },
      "directive": null,
      "start": 1943,
      "end": 1981
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1981
}
```
