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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 82,
                      "end": 83
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 82,
                    "end": 83
                  }
                ],
                "start": 81,
                "end": 84
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
                        "start": 88,
                        "end": 89
                      },
                      "typeArguments": null,
                      "start": 88,
                      "end": 89
                    },
                    "start": 86,
                    "end": 89
                  },
                  "start": 85,
                  "end": 89
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 94,
                  "end": 98
                },
                "start": 91,
                "end": 98
              },
              "start": 81,
              "end": 98
            },
            "start": 79,
            "end": 98
          },
          "start": 76,
          "end": 98
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 101,
          "end": 105
        },
        "start": 99,
        "end": 105
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 108
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 132
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 144
                        },
                        "typeArguments": null,
                        "start": 136,
                        "end": 144
                      },
                      "start": 135,
                      "end": 147
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 156,
                        "end": 162
                      },
                      "start": 156,
                      "end": 164
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 167,
                        "end": 171
                      },
                      "start": 167,
                      "end": 171
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 174,
                        "end": 179
                      },
                      "start": 174,
                      "end": 179
                    },
                    "start": 135,
                    "end": 179
                  },
                  "declare": false,
                  "start": 120,
                  "end": 180
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 198
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 203,
                            "end": 204
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 213,
                                "end": 214
                              },
                              "typeArguments": null,
                              "start": 206,
                              "end": 214
                            },
                            "start": 204,
                            "end": 214
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 203,
                          "end": 214
                        }
                      ],
                      "start": 201,
                      "end": 216
                    },
                    "extendsType": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 227,
                            "end": 228
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 230,
                              "end": 236
                            },
                            "start": 228,
                            "end": 236
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 227,
                          "end": 236
                        }
                      ],
                      "start": 225,
                      "end": 238
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 241,
                        "end": 245
                      },
                      "start": 241,
                      "end": 245
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 248,
                        "end": 253
                      },
                      "start": 248,
                      "end": 253
                    },
                    "start": 201,
                    "end": 253
                  },
                  "declare": false,
                  "start": 185,
                  "end": 254
                }
              ],
              "start": 114,
              "end": 256
            },
            "id": null,
            "generator": false,
            "start": 109,
            "end": 256
          }
        ],
        "optional": false,
        "start": 107,
        "end": 257
      },
      "directive": null,
      "start": 107,
      "end": 258
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 272,
                        "end": 273
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 272,
                      "end": 273
                    }
                  ],
                  "start": 271,
                  "end": 274
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
                          "start": 278,
                          "end": 279
                        },
                        "typeArguments": null,
                        "start": 278,
                        "end": 279
                      },
                      "start": 276,
                      "end": 279
                    },
                    "start": 275,
                    "end": 279
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 284,
                    "end": 288
                  },
                  "start": 281,
                  "end": 288
                },
                "start": 271,
                "end": 288
              },
              "start": 269,
              "end": 288
            },
            "start": 266,
            "end": 288
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 292
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 314
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 326
                        },
                        "typeArguments": null,
                        "start": 318,
                        "end": 326
                      },
                      "start": 317,
                      "end": 329
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 338,
                        "end": 344
                      },
                      "start": 338,
                      "end": 346
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 349,
                        "end": 353
                      },
                      "start": 349,
                      "end": 353
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 356,
                        "end": 361
                      },
                      "start": 356,
                      "end": 361
                    },
                    "start": 317,
                    "end": 361
                  },
                  "declare": false,
                  "start": 302,
                  "end": 362
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 380
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 385,
                            "end": 386
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 395,
                                "end": 396
                              },
                              "typeArguments": null,
                              "start": 388,
                              "end": 396
                            },
                            "start": 386,
                            "end": 396
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 385,
                          "end": 396
                        }
                      ],
                      "start": 383,
                      "end": 398
                    },
                    "extendsType": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 410
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 412,
                              "end": 418
                            },
                            "start": 410,
                            "end": 418
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 409,
                          "end": 418
                        }
                      ],
                      "start": 407,
                      "end": 420
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 423,
                        "end": 427
                      },
                      "start": 423,
                      "end": 427
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 430,
                        "end": 435
                      },
                      "start": 430,
                      "end": 435
                    },
                    "start": 383,
                    "end": 435
                  },
                  "declare": false,
                  "start": 367,
                  "end": 436
                }
              ],
              "start": 296,
              "end": 438
            },
            "id": null,
            "generator": false,
            "start": 291,
            "end": 438
          },
          "definite": false,
          "start": 266,
          "end": 438
        }
      ],
      "declare": false,
      "start": 260,
      "end": 439
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 453,
                        "end": 454
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 453,
                      "end": 454
                    }
                  ],
                  "start": 452,
                  "end": 455
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
                          "start": 459,
                          "end": 460
                        },
                        "typeArguments": null,
                        "start": 459,
                        "end": 460
                      },
                      "start": 457,
                      "end": 460
                    },
                    "start": 456,
                    "end": 460
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 465,
                    "end": 469
                  },
                  "start": 462,
                  "end": 469
                },
                "start": 452,
                "end": 469
              },
              "start": 450,
              "end": 469
            },
            "start": 447,
            "end": 469
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 485
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 487
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 507
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 519
                        },
                        "typeArguments": null,
                        "start": 511,
                        "end": 519
                      },
                      "start": 510,
                      "end": 522
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 531,
                        "end": 537
                      },
                      "start": 531,
                      "end": 539
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 542,
                        "end": 546
                      },
                      "start": 542,
                      "end": 546
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 549,
                        "end": 554
                      },
                      "start": 549,
                      "end": 554
                    },
                    "start": 510,
                    "end": 554
                  },
                  "declare": false,
                  "start": 495,
                  "end": 555
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 565,
                    "end": 573
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 578,
                            "end": 579
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 588,
                                "end": 589
                              },
                              "typeArguments": null,
                              "start": 581,
                              "end": 589
                            },
                            "start": 579,
                            "end": 589
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 578,
                          "end": 589
                        }
                      ],
                      "start": 576,
                      "end": 591
                    },
                    "extendsType": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 602,
                            "end": 603
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 605,
                              "end": 611
                            },
                            "start": 603,
                            "end": 611
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 602,
                          "end": 611
                        }
                      ],
                      "start": 600,
                      "end": 613
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 616,
                        "end": 620
                      },
                      "start": 616,
                      "end": 620
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 623,
                        "end": 628
                      },
                      "start": 623,
                      "end": 628
                    },
                    "start": 576,
                    "end": 628
                  },
                  "declare": false,
                  "start": 560,
                  "end": 629
                }
              ],
              "start": 489,
              "end": 631
            },
            "expression": false,
            "start": 472,
            "end": 631
          },
          "definite": false,
          "start": 447,
          "end": 631
        }
      ],
      "declare": false,
      "start": 441,
      "end": 632
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 648
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 651,
                                "end": 652
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 651,
                              "end": 652
                            }
                          ],
                          "start": 650,
                          "end": 653
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
                                  "start": 657,
                                  "end": 658
                                },
                                "typeArguments": null,
                                "start": 657,
                                "end": 658
                              },
                              "start": 655,
                              "end": 658
                            },
                            "start": 654,
                            "end": 658
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 663,
                            "end": 667
                          },
                          "start": 660,
                          "end": 667
                        },
                        "start": 650,
                        "end": 667
                      },
                      "start": 648,
                      "end": 667
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 647,
                    "end": 667
                  }
                ],
                "start": 645,
                "end": 669
              },
              "start": 643,
              "end": 669
            },
            "start": 640,
            "end": 669
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 679
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
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 681
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 698,
                          "end": 705
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 716,
                                "end": 717
                              },
                              "typeArguments": null,
                              "start": 709,
                              "end": 717
                            },
                            "start": 708,
                            "end": 720
                          },
                          "extendsType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 729,
                              "end": 735
                            },
                            "start": 729,
                            "end": 737
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 740,
                              "end": 744
                            },
                            "start": 740,
                            "end": 744
                          },
                          "falseType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 747,
                              "end": 752
                            },
                            "start": 747,
                            "end": 752
                          },
                          "start": 708,
                          "end": 752
                        },
                        "declare": false,
                        "start": 693,
                        "end": 753
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IsObject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 775
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "checkType": {
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 780,
                                  "end": 781
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 790,
                                      "end": 791
                                    },
                                    "typeArguments": null,
                                    "start": 783,
                                    "end": 791
                                  },
                                  "start": 781,
                                  "end": 791
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 780,
                                "end": 791
                              }
                            ],
                            "start": 778,
                            "end": 793
                          },
                          "extendsType": {
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 804,
                                  "end": 805
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 807,
                                    "end": 813
                                  },
                                  "start": 805,
                                  "end": 813
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 804,
                                "end": 813
                              }
                            ],
                            "start": 802,
                            "end": 815
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 818,
                              "end": 822
                            },
                            "start": 818,
                            "end": 822
                          },
                          "falseType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 825,
                              "end": 830
                            },
                            "start": 825,
                            "end": 830
                          },
                          "start": 778,
                          "end": 830
                        },
                        "declare": false,
                        "start": 762,
                        "end": 831
                      }
                    ],
                    "start": 683,
                    "end": 837
                  },
                  "expression": false,
                  "start": 679,
                  "end": 837
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 678,
                "end": 837
              }
            ],
            "start": 672,
            "end": 839
          },
          "definite": false,
          "start": 640,
          "end": 839
        }
      ],
      "declare": false,
      "start": 634,
      "end": 840
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 840
}
```
