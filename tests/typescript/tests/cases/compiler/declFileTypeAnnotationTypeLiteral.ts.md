__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 23,
        "end": 26
      },
      "abstract": false,
      "declare": false,
      "start": 12,
      "end": 26
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 38
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 60,
                "end": 67
              },
              "abstract": false,
              "declare": false,
              "start": 52,
              "end": 67
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 45,
            "end": 67
          }
        ],
        "start": 39,
        "end": 69
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 27,
      "end": 69
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 145,
                            "end": 151
                          },
                          "start": 143,
                          "end": 151
                        },
                        "start": 142,
                        "end": 151
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 155
                        },
                        "typeArguments": null,
                        "start": 154,
                        "end": 155
                      },
                      "start": 152,
                      "end": 155
                    },
                    "start": 141,
                    "end": 156
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 165,
                            "end": 171
                          },
                          "start": 163,
                          "end": 171
                        },
                        "start": 162,
                        "end": 171
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 175
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 176,
                              "end": 182
                            }
                          ],
                          "start": 175,
                          "end": 183
                        },
                        "start": 174,
                        "end": 183
                      },
                      "start": 172,
                      "end": 183
                    },
                    "start": 161,
                    "end": 184
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 226,
                            "end": 232
                          },
                          "start": 224,
                          "end": 232
                        },
                        "start": 223,
                        "end": 232
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 236
                        },
                        "typeArguments": null,
                        "start": 235,
                        "end": 236
                      },
                      "start": 233,
                      "end": 236
                    },
                    "start": 218,
                    "end": 237
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 250,
                            "end": 256
                          },
                          "start": 248,
                          "end": 256
                        },
                        "start": 247,
                        "end": 256
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 259,
                            "end": 260
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 261,
                            "end": 262
                          },
                          "start": 259,
                          "end": 262
                        },
                        "typeArguments": null,
                        "start": 259,
                        "end": 262
                      },
                      "start": 257,
                      "end": 262
                    },
                    "start": 242,
                    "end": 263
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 289,
                            "end": 295
                          },
                          "start": 287,
                          "end": 295
                        },
                        "start": 286,
                        "end": 295
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 298,
                          "end": 299
                        },
                        "typeArguments": null,
                        "start": 298,
                        "end": 299
                      },
                      "start": 296,
                      "end": 299
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 285,
                    "end": 300
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 309,
                            "end": 315
                          },
                          "start": 307,
                          "end": 315
                        },
                        "start": 306,
                        "end": 315
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 318,
                          "end": 319
                        },
                        "typeArguments": null,
                        "start": 318,
                        "end": 319
                      },
                      "start": 316,
                      "end": 319
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 305,
                    "end": 320
                  },
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
                      "start": 344,
                      "end": 345
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
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
                    "accessibility": null,
                    "static": false,
                    "start": 344,
                    "end": 349
                  },
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
                      "start": 354,
                      "end": 355
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 358
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 359,
                              "end": 365
                            }
                          ],
                          "start": 358,
                          "end": 366
                        },
                        "start": 357,
                        "end": 366
                      },
                      "start": 355,
                      "end": 366
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 354,
                    "end": 367
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 390
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 395
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 396,
                              "end": 402
                            }
                          ],
                          "start": 395,
                          "end": 403
                        },
                        "start": 394,
                        "end": 403
                      },
                      "start": 392,
                      "end": 403
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 388,
                    "end": 404
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 411
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 415,
                            "end": 421
                          },
                          "start": 413,
                          "end": 421
                        },
                        "start": 412,
                        "end": 421
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 427,
                            "end": 433
                          },
                          "start": 425,
                          "end": 433
                        },
                        "start": 423,
                        "end": 433
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 438,
                          "end": 439
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
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 441,
                                "end": 442
                              },
                              "typeArguments": null,
                              "start": 441,
                              "end": 442
                            },
                            "start": 441,
                            "end": 444
                          },
                          "start": 439,
                          "end": 444
                        },
                        "value": null,
                        "start": 435,
                        "end": 444
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 447,
                        "end": 453
                      },
                      "start": 445,
                      "end": 453
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 409,
                    "end": 454
                  }
                ],
                "start": 112,
                "end": 456
              },
              "start": 110,
              "end": 456
            },
            "start": 109,
            "end": 456
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 456
        }
      ],
      "declare": false,
      "start": 105,
      "end": 457
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
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 488,
                        "end": 494
                      },
                      "start": 486,
                      "end": 494
                    },
                    "start": 485,
                    "end": 494
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
                  },
                  "start": 496,
                  "end": 505
                },
                "start": 484,
                "end": 505
              },
              "start": 482,
              "end": 505
            },
            "start": 481,
            "end": 505
          },
          "init": null,
          "definite": false,
          "start": 481,
          "end": 505
        }
      ],
      "declare": false,
      "start": 477,
      "end": 506
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
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 543,
                        "end": 549
                      },
                      "start": 541,
                      "end": 549
                    },
                    "start": 540,
                    "end": 549
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 555
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 557
                      },
                      "start": 554,
                      "end": 557
                    },
                    "typeArguments": null,
                    "start": 554,
                    "end": 557
                  },
                  "start": 551,
                  "end": 557
                },
                "start": 535,
                "end": 557
              },
              "start": 533,
              "end": 557
            },
            "start": 532,
            "end": 557
          },
          "init": null,
          "definite": false,
          "start": 532,
          "end": 557
        }
      ],
      "declare": false,
      "start": 528,
      "end": 558
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 558
}
```
