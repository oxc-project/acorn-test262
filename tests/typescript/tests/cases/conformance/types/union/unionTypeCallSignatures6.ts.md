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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "start": 60,
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
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 83,
            "end": 92
          }
        ],
        "start": 81,
        "end": 94
      },
      "declare": false,
      "start": 72,
      "end": 95
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F0",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 103
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 112,
            "end": 116
          },
          "start": 109,
          "end": 116
        },
        "start": 106,
        "end": 116
      },
      "declare": false,
      "start": 96,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 136
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
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
                  "start": 146,
                  "end": 147
                },
                "typeArguments": null,
                "start": 146,
                "end": 147
              },
              "start": 144,
              "end": 147
            },
            "start": 140,
            "end": 147
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 152,
            "end": 156
          },
          "start": 149,
          "end": 156
        },
        "start": 139,
        "end": 156
      },
      "declare": false,
      "start": 129,
      "end": 157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 165
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "typeArguments": null,
                "start": 175,
                "end": 176
              },
              "start": 173,
              "end": 176
            },
            "start": 169,
            "end": 176
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 181,
            "end": 185
          },
          "start": 178,
          "end": 185
        },
        "start": 168,
        "end": 185
      },
      "declare": false,
      "start": 158,
      "end": 186
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 205
                    },
                    "typeArguments": null,
                    "start": 203,
                    "end": 205
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 210
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 210
                  }
                ],
                "start": 203,
                "end": 210
              },
              "start": 201,
              "end": 210
            },
            "start": 199,
            "end": 210
          },
          "init": null,
          "definite": false,
          "start": 199,
          "end": 210
        }
      ],
      "declare": true,
      "start": 187,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 212,
        "end": 216
      },
      "directive": null,
      "start": 212,
      "end": 217
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 245
                    },
                    "typeArguments": null,
                    "start": 243,
                    "end": 245
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 250
                    },
                    "typeArguments": null,
                    "start": 248,
                    "end": 250
                  }
                ],
                "start": 243,
                "end": 250
              },
              "start": 241,
              "end": 250
            },
            "start": 239,
            "end": 250
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 250
        }
      ],
      "declare": true,
      "start": 227,
      "end": 251
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 254
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 252,
        "end": 256
      },
      "directive": null,
      "start": 252,
      "end": 257
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F3",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 280
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
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
                      "start": 292,
                      "end": 293
                    },
                    "typeArguments": null,
                    "start": 292,
                    "end": 293
                  },
                  "start": 290,
                  "end": 293
                },
                "start": 286,
                "end": 293
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 296,
                "end": 300
              },
              "start": 294,
              "end": 300
            },
            "start": 285,
            "end": 301
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 312
                    },
                    "typeArguments": null,
                    "start": 311,
                    "end": 312
                  },
                  "start": 309,
                  "end": 312
                },
                "start": 305,
                "end": 312
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 315,
                "end": 319
              },
              "start": 313,
              "end": 319
            },
            "start": 304,
            "end": 320
          }
        ],
        "start": 281,
        "end": 322
      },
      "declare": false,
      "start": 268,
      "end": 322
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F4",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 335
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
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
                "start": 341,
                "end": 348
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 351,
                "end": 355
              },
              "start": 349,
              "end": 355
            },
            "start": 340,
            "end": 356
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 367
                    },
                    "typeArguments": null,
                    "start": 366,
                    "end": 367
                  },
                  "start": 364,
                  "end": 367
                },
                "start": 360,
                "end": 367
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 370,
                "end": 374
              },
              "start": 368,
              "end": 374
            },
            "start": 359,
            "end": 375
          }
        ],
        "start": 336,
        "end": 377
      },
      "declare": false,
      "start": 323,
      "end": 377
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F5",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 390
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
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
                      "start": 402,
                      "end": 403
                    },
                    "typeArguments": null,
                    "start": 402,
                    "end": 403
                  },
                  "start": 400,
                  "end": 403
                },
                "start": 396,
                "end": 403
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 406,
                "end": 410
              },
              "start": 404,
              "end": 410
            },
            "start": 395,
            "end": 411
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 422
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 422
                  },
                  "start": 419,
                  "end": 422
                },
                "start": 415,
                "end": 422
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 425,
                "end": 429
              },
              "start": 423,
              "end": 429
            },
            "start": 414,
            "end": 430
          }
        ],
        "start": 391,
        "end": 432
      },
      "declare": false,
      "start": 378,
      "end": 432
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 450,
                      "end": 451
                    },
                    "typeArguments": null,
                    "start": 450,
                    "end": 451
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 455
                    },
                    "typeArguments": null,
                    "start": 454,
                    "end": 455
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
                          "name": "f0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 462,
                          "end": 464
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F0",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 466,
                                  "end": 468
                                },
                                "typeArguments": null,
                                "start": 466,
                                "end": 468
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 471,
                                  "end": 473
                                },
                                "typeArguments": null,
                                "start": 471,
                                "end": 473
                              }
                            ],
                            "start": 466,
                            "end": 473
                          },
                          "start": 464,
                          "end": 473
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 462,
                        "end": 474
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 479
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 481,
                                  "end": 483
                                },
                                "typeArguments": null,
                                "start": 481,
                                "end": 483
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 486,
                                  "end": 488
                                },
                                "typeArguments": null,
                                "start": 486,
                                "end": 488
                              }
                            ],
                            "start": 481,
                            "end": 488
                          },
                          "start": 479,
                          "end": 488
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 477,
                        "end": 489
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 492,
                          "end": 494
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 496,
                                  "end": 498
                                },
                                "typeArguments": null,
                                "start": 496,
                                "end": 498
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F4",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 501,
                                  "end": 503
                                },
                                "typeArguments": null,
                                "start": 501,
                                "end": 503
                              }
                            ],
                            "start": 496,
                            "end": 503
                          },
                          "start": 494,
                          "end": 503
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 492,
                        "end": 504
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 509
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 511,
                                  "end": 513
                                },
                                "typeArguments": null,
                                "start": 511,
                                "end": 513
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F4",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 516,
                                  "end": 518
                                },
                                "typeArguments": null,
                                "start": 516,
                                "end": 518
                              }
                            ],
                            "start": 511,
                            "end": 518
                          },
                          "start": 509,
                          "end": 518
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 507,
                        "end": 519
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 522,
                          "end": 524
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 526,
                                  "end": 528
                                },
                                "typeArguments": null,
                                "start": 526,
                                "end": 528
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F5",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 531,
                                  "end": 533
                                },
                                "typeArguments": null,
                                "start": 531,
                                "end": 533
                              }
                            ],
                            "start": 526,
                            "end": 533
                          },
                          "start": 524,
                          "end": 533
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 522,
                        "end": 534
                      }
                    ],
                    "start": 458,
                    "end": 536
                  }
                ],
                "start": 450,
                "end": 536
              },
              "start": 448,
              "end": 536
            },
            "start": 446,
            "end": 536
          },
          "init": null,
          "definite": false,
          "start": 446,
          "end": 536
        }
      ],
      "declare": true,
      "start": 434,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 539
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f0",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 542
          },
          "optional": false,
          "computed": false,
          "start": 537,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 537,
        "end": 544
      },
      "directive": null,
      "start": 537,
      "end": 545
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 548
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 551
          },
          "optional": false,
          "computed": false,
          "start": 546,
          "end": 551
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 546,
        "end": 553
      },
      "directive": null,
      "start": 546,
      "end": 554
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 557
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 560
          },
          "optional": false,
          "computed": false,
          "start": 555,
          "end": 560
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 555,
        "end": 562
      },
      "directive": null,
      "start": 555,
      "end": 563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 564,
            "end": 566
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 569
          },
          "optional": false,
          "computed": false,
          "start": 564,
          "end": 569
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 564,
        "end": 571
      },
      "directive": null,
      "start": 564,
      "end": 572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 584
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 587
          },
          "optional": false,
          "computed": false,
          "start": 582,
          "end": 587
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 582,
        "end": 589
      },
      "directive": null,
      "start": 582,
      "end": 590
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 617,
                      "end": 618
                    },
                    "typeArguments": null,
                    "start": 617,
                    "end": 618
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 622
                    },
                    "typeArguments": null,
                    "start": 621,
                    "end": 622
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
                          "name": "f4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 631
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 633,
                                  "end": 635
                                },
                                "typeArguments": null,
                                "start": 633,
                                "end": 635
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F5",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 638,
                                  "end": 640
                                },
                                "typeArguments": null,
                                "start": 638,
                                "end": 640
                              }
                            ],
                            "start": 633,
                            "end": 640
                          },
                          "start": 631,
                          "end": 640
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 629,
                        "end": 641
                      }
                    ],
                    "start": 625,
                    "end": 643
                  }
                ],
                "start": 617,
                "end": 643
              },
              "start": 615,
              "end": 643
            },
            "start": 613,
            "end": 643
          },
          "init": null,
          "definite": false,
          "start": 613,
          "end": 643
        }
      ],
      "declare": true,
      "start": 601,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 646
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 649
          },
          "optional": false,
          "computed": false,
          "start": 644,
          "end": 649
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 644,
        "end": 651
      },
      "directive": null,
      "start": 644,
      "end": 652
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F6",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 672
                    },
                    "typeArguments": null,
                    "start": 671,
                    "end": 672
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 676
                    },
                    "typeArguments": null,
                    "start": 675,
                    "end": 676
                  }
                ],
                "start": 671,
                "end": 676
              },
              "start": 669,
              "end": 676
            },
            "start": 665,
            "end": 676
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 681,
            "end": 685
          },
          "start": 678,
          "end": 685
        },
        "start": 664,
        "end": 685
      },
      "declare": false,
      "start": 654,
      "end": 686
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 705
                    },
                    "typeArguments": null,
                    "start": 703,
                    "end": 705
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 708,
                      "end": 710
                    },
                    "typeArguments": null,
                    "start": 708,
                    "end": 710
                  }
                ],
                "start": 703,
                "end": 710
              },
              "start": 701,
              "end": 710
            },
            "start": 699,
            "end": 710
          },
          "init": null,
          "definite": false,
          "start": 699,
          "end": 710
        }
      ],
      "declare": true,
      "start": 687,
      "end": 711
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 712,
          "end": 714
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 712,
        "end": 716
      },
      "directive": null,
      "start": 712,
      "end": 717
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F7",
        "optional": false,
        "typeAnnotation": null,
        "start": 738,
        "end": 740
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 752,
                          "end": 753
                        },
                        "typeArguments": null,
                        "start": 752,
                        "end": 753
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 756,
                          "end": 757
                        },
                        "typeArguments": null,
                        "start": 756,
                        "end": 757
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 761
                        },
                        "typeArguments": null,
                        "start": 760,
                        "end": 761
                      }
                    ],
                    "start": 752,
                    "end": 761
                  },
                  "start": 750,
                  "end": 761
                },
                "start": 746,
                "end": 761
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 764,
                "end": 768
              },
              "start": 762,
              "end": 768
            },
            "start": 745,
            "end": 769
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 779,
                          "end": 780
                        },
                        "typeArguments": null,
                        "start": 779,
                        "end": 780
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 783,
                          "end": 784
                        },
                        "typeArguments": null,
                        "start": 783,
                        "end": 784
                      }
                    ],
                    "start": 779,
                    "end": 784
                  },
                  "start": 777,
                  "end": 784
                },
                "start": 773,
                "end": 784
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 787,
                "end": 791
              },
              "start": 785,
              "end": 791
            },
            "start": 772,
            "end": 792
          }
        ],
        "start": 741,
        "end": 794
      },
      "declare": false,
      "start": 728,
      "end": 794
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 813
                    },
                    "typeArguments": null,
                    "start": 811,
                    "end": 813
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 818
                    },
                    "typeArguments": null,
                    "start": 816,
                    "end": 818
                  }
                ],
                "start": 811,
                "end": 818
              },
              "start": 809,
              "end": 818
            },
            "start": 807,
            "end": 818
          },
          "init": null,
          "definite": false,
          "start": 807,
          "end": 818
        }
      ],
      "declare": true,
      "start": 795,
      "end": 819
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 820,
          "end": 822
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 820,
        "end": 824
      },
      "directive": null,
      "start": 820,
      "end": 825
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 834
}
```
