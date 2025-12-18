__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
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
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          }
        ],
        "start": 35,
        "end": 38
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
              "name": "ref",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
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
                  "start": 47,
                  "end": 48
                },
                "typeArguments": null,
                "start": 47,
                "end": 48
              },
              "start": 45,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 49
          }
        ],
        "start": 39,
        "end": 51
      },
      "declare": false,
      "start": 22,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
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
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 68
          }
        ],
        "start": 66,
        "end": 69
      },
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
                      "start": 77,
                      "end": 78
                    },
                    "typeArguments": null,
                    "start": 77,
                    "end": 78
                  },
                  "start": 75,
                  "end": 78
                },
                "start": 74,
                "end": 78
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 81,
                "end": 85
              },
              "start": 79,
              "end": 85
            },
            "start": 73,
            "end": 86
          }
        ],
        "start": 70,
        "end": 88
      },
      "declare": false,
      "start": 52,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 113
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "typeArguments": null,
            "start": 120,
            "end": 121
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 130,
            "end": 133
          },
          "trueType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
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
                      "start": 140,
                      "end": 141
                    },
                    "typeArguments": null,
                    "start": 140,
                    "end": 141
                  },
                  "start": 138,
                  "end": 141
                },
                "start": 137,
                "end": 141
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 146,
                "end": 150
              },
              "start": 143,
              "end": 150
            },
            "start": 136,
            "end": 150
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 153,
            "end": 158
          },
          "start": 120,
          "end": 158
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 180
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 179,
                    "end": 180
                  },
                  "start": 173,
                  "end": 180
                },
                "start": 171,
                "end": 180
              },
              "start": 170,
              "end": 180
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 185,
              "end": 189
            },
            "start": 182,
            "end": 189
          },
          "start": 169,
          "end": 189
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "typeArguments": null,
          "start": 193,
          "end": 194
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 197,
          "end": 202
        },
        "start": 119,
        "end": 202
      },
      "declare": false,
      "start": 89,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CtorOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 215
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
              "start": 216,
              "end": 217
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 217
          }
        ],
        "start": 215,
        "end": 218
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionToIntersection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 246
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 248
                      },
                      "typeArguments": null,
                      "start": 247,
                      "end": 248
                    }
                  ],
                  "start": 246,
                  "end": 249
                },
                "start": 227,
                "end": 249
              },
              "start": 225,
              "end": 249
            },
            "start": 222,
            "end": 249
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
              "start": 254,
              "end": 255
            },
            "typeArguments": null,
            "start": 254,
            "end": 255
          },
          "start": 251,
          "end": 255
        },
        "start": 221,
        "end": 255
      },
      "declare": false,
      "start": 204,
      "end": 256
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Big",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 271
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
              "value": "0",
              "raw": "\"0\"",
              "start": 278,
              "end": 281
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 291
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 294,
                        "end": 300
                      },
                      "start": 292,
                      "end": 300
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 285,
                    "end": 301
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "0",
                      "raw": "\"0\"",
                      "start": 302,
                      "end": 305
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      },
                      "start": 306,
                      "end": 314
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 302,
                    "end": 315
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 319
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 322,
                              "end": 325
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 326,
                                      "end": 329
                                    },
                                    "typeArguments": null,
                                    "start": 326,
                                    "end": 329
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "0",
                                      "raw": "\"0\"",
                                      "start": 330,
                                      "end": 333
                                    },
                                    "start": 330,
                                    "end": 333
                                  },
                                  "start": 326,
                                  "end": 334
                                }
                              ],
                              "start": 325,
                              "end": 335
                            },
                            "start": 322,
                            "end": 335
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 342
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 343,
                                      "end": 346
                                    },
                                    "typeArguments": null,
                                    "start": 343,
                                    "end": 346
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "0",
                                      "raw": "\"0\"",
                                      "start": 347,
                                      "end": 350
                                    },
                                    "start": 347,
                                    "end": 350
                                  },
                                  "start": 343,
                                  "end": 351
                                }
                              ],
                              "start": 342,
                              "end": 352
                            },
                            "start": 338,
                            "end": 352
                          }
                        ],
                        "start": 322,
                        "end": 352
                      },
                      "start": 320,
                      "end": 352
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 316,
                    "end": 353
                  }
                ],
                "start": 283,
                "end": 355
              },
              "start": 281,
              "end": 355
            },
            "accessibility": null,
            "static": false,
            "start": 278,
            "end": 355
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 360,
              "end": 363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 373
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 376,
                        "end": 382
                      },
                      "start": 374,
                      "end": 382
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 367,
                    "end": 383
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 384,
                      "end": 387
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 390,
                        "end": 396
                      },
                      "start": 388,
                      "end": 396
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 384,
                    "end": 397
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 401
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 404,
                              "end": 407
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 408,
                                      "end": 411
                                    },
                                    "typeArguments": null,
                                    "start": 408,
                                    "end": 411
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "1",
                                      "raw": "\"1\"",
                                      "start": 412,
                                      "end": 415
                                    },
                                    "start": 412,
                                    "end": 415
                                  },
                                  "start": 408,
                                  "end": 416
                                }
                              ],
                              "start": 407,
                              "end": 417
                            },
                            "start": 404,
                            "end": 417
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 420,
                              "end": 424
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 425,
                                      "end": 428
                                    },
                                    "typeArguments": null,
                                    "start": 425,
                                    "end": 428
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "1",
                                      "raw": "\"1\"",
                                      "start": 429,
                                      "end": 432
                                    },
                                    "start": 429,
                                    "end": 432
                                  },
                                  "start": 425,
                                  "end": 433
                                }
                              ],
                              "start": 424,
                              "end": 434
                            },
                            "start": 420,
                            "end": 434
                          }
                        ],
                        "start": 404,
                        "end": 434
                      },
                      "start": 402,
                      "end": 434
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 398,
                    "end": 435
                  }
                ],
                "start": 365,
                "end": 437
              },
              "start": 363,
              "end": 437
            },
            "accessibility": null,
            "static": false,
            "start": 360,
            "end": 437
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 442,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 455
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 458,
                        "end": 464
                      },
                      "start": 456,
                      "end": 464
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 449,
                    "end": 465
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 466,
                      "end": 469
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 472,
                        "end": 478
                      },
                      "start": 470,
                      "end": 478
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 466,
                    "end": 479
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 483
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 486,
                              "end": 489
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 490,
                                      "end": 493
                                    },
                                    "typeArguments": null,
                                    "start": 490,
                                    "end": 493
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "2",
                                      "raw": "\"2\"",
                                      "start": 494,
                                      "end": 497
                                    },
                                    "start": 494,
                                    "end": 497
                                  },
                                  "start": 490,
                                  "end": 498
                                }
                              ],
                              "start": 489,
                              "end": 499
                            },
                            "start": 486,
                            "end": 499
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 506
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 507,
                                      "end": 510
                                    },
                                    "typeArguments": null,
                                    "start": 507,
                                    "end": 510
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "2",
                                      "raw": "\"2\"",
                                      "start": 511,
                                      "end": 514
                                    },
                                    "start": 511,
                                    "end": 514
                                  },
                                  "start": 507,
                                  "end": 515
                                }
                              ],
                              "start": 506,
                              "end": 516
                            },
                            "start": 502,
                            "end": 516
                          }
                        ],
                        "start": 486,
                        "end": 516
                      },
                      "start": 484,
                      "end": 516
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 480,
                    "end": 517
                  }
                ],
                "start": 447,
                "end": 519
              },
              "start": 445,
              "end": 519
            },
            "accessibility": null,
            "static": false,
            "start": 442,
            "end": 519
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 524,
              "end": 527
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 537
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 540,
                        "end": 546
                      },
                      "start": 538,
                      "end": 546
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 531,
                    "end": 547
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "3",
                      "raw": "\"3\"",
                      "start": 548,
                      "end": 551
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      },
                      "start": 552,
                      "end": 560
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 548,
                    "end": 561
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 562,
                      "end": 565
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 571
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 572,
                                      "end": 575
                                    },
                                    "typeArguments": null,
                                    "start": 572,
                                    "end": 575
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "3",
                                      "raw": "\"3\"",
                                      "start": 576,
                                      "end": 579
                                    },
                                    "start": 576,
                                    "end": 579
                                  },
                                  "start": 572,
                                  "end": 580
                                }
                              ],
                              "start": 571,
                              "end": 581
                            },
                            "start": 568,
                            "end": 581
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 584,
                              "end": 588
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 589,
                                      "end": 592
                                    },
                                    "typeArguments": null,
                                    "start": 589,
                                    "end": 592
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "3",
                                      "raw": "\"3\"",
                                      "start": 593,
                                      "end": 596
                                    },
                                    "start": 593,
                                    "end": 596
                                  },
                                  "start": 589,
                                  "end": 597
                                }
                              ],
                              "start": 588,
                              "end": 598
                            },
                            "start": 584,
                            "end": 598
                          }
                        ],
                        "start": 568,
                        "end": 598
                      },
                      "start": 566,
                      "end": 598
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 562,
                    "end": 599
                  }
                ],
                "start": 529,
                "end": 601
              },
              "start": 527,
              "end": 601
            },
            "accessibility": null,
            "static": false,
            "start": 524,
            "end": 601
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "4",
              "raw": "\"4\"",
              "start": 606,
              "end": 609
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 613,
                      "end": 619
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 622,
                        "end": 628
                      },
                      "start": 620,
                      "end": 628
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 613,
                    "end": 629
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "4",
                      "raw": "\"4\"",
                      "start": 630,
                      "end": 633
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 636,
                        "end": 642
                      },
                      "start": 634,
                      "end": 642
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 630,
                    "end": 643
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 647
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 650,
                              "end": 653
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 654,
                                      "end": 657
                                    },
                                    "typeArguments": null,
                                    "start": 654,
                                    "end": 657
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "4",
                                      "raw": "\"4\"",
                                      "start": 658,
                                      "end": 661
                                    },
                                    "start": 658,
                                    "end": 661
                                  },
                                  "start": 654,
                                  "end": 662
                                }
                              ],
                              "start": 653,
                              "end": 663
                            },
                            "start": 650,
                            "end": 663
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 666,
                              "end": 670
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 671,
                                      "end": 674
                                    },
                                    "typeArguments": null,
                                    "start": 671,
                                    "end": 674
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "4",
                                      "raw": "\"4\"",
                                      "start": 675,
                                      "end": 678
                                    },
                                    "start": 675,
                                    "end": 678
                                  },
                                  "start": 671,
                                  "end": 679
                                }
                              ],
                              "start": 670,
                              "end": 680
                            },
                            "start": 666,
                            "end": 680
                          }
                        ],
                        "start": 650,
                        "end": 680
                      },
                      "start": 648,
                      "end": 680
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 644,
                    "end": 681
                  }
                ],
                "start": 611,
                "end": 683
              },
              "start": 609,
              "end": 683
            },
            "accessibility": null,
            "static": false,
            "start": 606,
            "end": 683
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "5",
              "raw": "\"5\"",
              "start": 688,
              "end": 691
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 695,
                      "end": 701
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 704,
                        "end": 710
                      },
                      "start": 702,
                      "end": 710
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 695,
                    "end": 711
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "5",
                      "raw": "\"5\"",
                      "start": 712,
                      "end": 715
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 718,
                        "end": 724
                      },
                      "start": 716,
                      "end": 724
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 712,
                    "end": 725
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 726,
                      "end": 729
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 732,
                              "end": 735
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 736,
                                      "end": 739
                                    },
                                    "typeArguments": null,
                                    "start": 736,
                                    "end": 739
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "5",
                                      "raw": "\"5\"",
                                      "start": 740,
                                      "end": 743
                                    },
                                    "start": 740,
                                    "end": 743
                                  },
                                  "start": 736,
                                  "end": 744
                                }
                              ],
                              "start": 735,
                              "end": 745
                            },
                            "start": 732,
                            "end": 745
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 748,
                              "end": 752
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 753,
                                      "end": 756
                                    },
                                    "typeArguments": null,
                                    "start": 753,
                                    "end": 756
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "5",
                                      "raw": "\"5\"",
                                      "start": 757,
                                      "end": 760
                                    },
                                    "start": 757,
                                    "end": 760
                                  },
                                  "start": 753,
                                  "end": 761
                                }
                              ],
                              "start": 752,
                              "end": 762
                            },
                            "start": 748,
                            "end": 762
                          }
                        ],
                        "start": 732,
                        "end": 762
                      },
                      "start": 730,
                      "end": 762
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 726,
                    "end": 763
                  }
                ],
                "start": 693,
                "end": 765
              },
              "start": 691,
              "end": 765
            },
            "accessibility": null,
            "static": false,
            "start": 688,
            "end": 765
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "6",
              "raw": "\"6\"",
              "start": 770,
              "end": 773
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 777,
                      "end": 783
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 786,
                        "end": 792
                      },
                      "start": 784,
                      "end": 792
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 777,
                    "end": 793
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "6",
                      "raw": "\"6\"",
                      "start": 794,
                      "end": 797
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 800,
                        "end": 806
                      },
                      "start": 798,
                      "end": 806
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 794,
                    "end": 807
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 808,
                      "end": 811
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 814,
                              "end": 817
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 818,
                                      "end": 821
                                    },
                                    "typeArguments": null,
                                    "start": 818,
                                    "end": 821
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "6",
                                      "raw": "\"6\"",
                                      "start": 822,
                                      "end": 825
                                    },
                                    "start": 822,
                                    "end": 825
                                  },
                                  "start": 818,
                                  "end": 826
                                }
                              ],
                              "start": 817,
                              "end": 827
                            },
                            "start": 814,
                            "end": 827
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 830,
                              "end": 834
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 835,
                                      "end": 838
                                    },
                                    "typeArguments": null,
                                    "start": 835,
                                    "end": 838
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "6",
                                      "raw": "\"6\"",
                                      "start": 839,
                                      "end": 842
                                    },
                                    "start": 839,
                                    "end": 842
                                  },
                                  "start": 835,
                                  "end": 843
                                }
                              ],
                              "start": 834,
                              "end": 844
                            },
                            "start": 830,
                            "end": 844
                          }
                        ],
                        "start": 814,
                        "end": 844
                      },
                      "start": 812,
                      "end": 844
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 808,
                    "end": 845
                  }
                ],
                "start": 775,
                "end": 847
              },
              "start": 773,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 770,
            "end": 847
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "7",
              "raw": "\"7\"",
              "start": 852,
              "end": 855
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 865
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 868,
                        "end": 874
                      },
                      "start": 866,
                      "end": 874
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 859,
                    "end": 875
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "7",
                      "raw": "\"7\"",
                      "start": 876,
                      "end": 879
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 882,
                        "end": 888
                      },
                      "start": 880,
                      "end": 888
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 876,
                    "end": 889
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 890,
                      "end": 893
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 896,
                              "end": 899
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 900,
                                      "end": 903
                                    },
                                    "typeArguments": null,
                                    "start": 900,
                                    "end": 903
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "7",
                                      "raw": "\"7\"",
                                      "start": 904,
                                      "end": 907
                                    },
                                    "start": 904,
                                    "end": 907
                                  },
                                  "start": 900,
                                  "end": 908
                                }
                              ],
                              "start": 899,
                              "end": 909
                            },
                            "start": 896,
                            "end": 909
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 912,
                              "end": 916
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 917,
                                      "end": 920
                                    },
                                    "typeArguments": null,
                                    "start": 917,
                                    "end": 920
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "7",
                                      "raw": "\"7\"",
                                      "start": 921,
                                      "end": 924
                                    },
                                    "start": 921,
                                    "end": 924
                                  },
                                  "start": 917,
                                  "end": 925
                                }
                              ],
                              "start": 916,
                              "end": 926
                            },
                            "start": 912,
                            "end": 926
                          }
                        ],
                        "start": 896,
                        "end": 926
                      },
                      "start": 894,
                      "end": 926
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 890,
                    "end": 927
                  }
                ],
                "start": 857,
                "end": 929
              },
              "start": 855,
              "end": 929
            },
            "accessibility": null,
            "static": false,
            "start": 852,
            "end": 929
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "8",
              "raw": "\"8\"",
              "start": 934,
              "end": 937
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 941,
                      "end": 947
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 950,
                        "end": 956
                      },
                      "start": 948,
                      "end": 956
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 941,
                    "end": 957
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "8",
                      "raw": "\"8\"",
                      "start": 958,
                      "end": 961
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 964,
                        "end": 970
                      },
                      "start": 962,
                      "end": 970
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 958,
                    "end": 971
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 972,
                      "end": 975
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 978,
                              "end": 981
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 982,
                                      "end": 985
                                    },
                                    "typeArguments": null,
                                    "start": 982,
                                    "end": 985
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "8",
                                      "raw": "\"8\"",
                                      "start": 986,
                                      "end": 989
                                    },
                                    "start": 986,
                                    "end": 989
                                  },
                                  "start": 982,
                                  "end": 990
                                }
                              ],
                              "start": 981,
                              "end": 991
                            },
                            "start": 978,
                            "end": 991
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 994,
                              "end": 998
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 999,
                                      "end": 1002
                                    },
                                    "typeArguments": null,
                                    "start": 999,
                                    "end": 1002
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "8",
                                      "raw": "\"8\"",
                                      "start": 1003,
                                      "end": 1006
                                    },
                                    "start": 1003,
                                    "end": 1006
                                  },
                                  "start": 999,
                                  "end": 1007
                                }
                              ],
                              "start": 998,
                              "end": 1008
                            },
                            "start": 994,
                            "end": 1008
                          }
                        ],
                        "start": 978,
                        "end": 1008
                      },
                      "start": 976,
                      "end": 1008
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 972,
                    "end": 1009
                  }
                ],
                "start": 939,
                "end": 1011
              },
              "start": 937,
              "end": 1011
            },
            "accessibility": null,
            "static": false,
            "start": 934,
            "end": 1011
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "9",
              "raw": "\"9\"",
              "start": 1016,
              "end": 1019
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1023,
                      "end": 1029
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1032,
                        "end": 1038
                      },
                      "start": 1030,
                      "end": 1038
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1023,
                    "end": 1039
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "9",
                      "raw": "\"9\"",
                      "start": 1040,
                      "end": 1043
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1046,
                        "end": 1052
                      },
                      "start": 1044,
                      "end": 1052
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1040,
                    "end": 1053
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1054,
                      "end": 1057
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1060,
                              "end": 1063
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1064,
                                      "end": 1067
                                    },
                                    "typeArguments": null,
                                    "start": 1064,
                                    "end": 1067
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "9",
                                      "raw": "\"9\"",
                                      "start": 1068,
                                      "end": 1071
                                    },
                                    "start": 1068,
                                    "end": 1071
                                  },
                                  "start": 1064,
                                  "end": 1072
                                }
                              ],
                              "start": 1063,
                              "end": 1073
                            },
                            "start": 1060,
                            "end": 1073
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1076,
                              "end": 1080
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1081,
                                      "end": 1084
                                    },
                                    "typeArguments": null,
                                    "start": 1081,
                                    "end": 1084
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "9",
                                      "raw": "\"9\"",
                                      "start": 1085,
                                      "end": 1088
                                    },
                                    "start": 1085,
                                    "end": 1088
                                  },
                                  "start": 1081,
                                  "end": 1089
                                }
                              ],
                              "start": 1080,
                              "end": 1090
                            },
                            "start": 1076,
                            "end": 1090
                          }
                        ],
                        "start": 1060,
                        "end": 1090
                      },
                      "start": 1058,
                      "end": 1090
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1054,
                    "end": 1091
                  }
                ],
                "start": 1021,
                "end": 1093
              },
              "start": 1019,
              "end": 1093
            },
            "accessibility": null,
            "static": false,
            "start": 1016,
            "end": 1093
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "10",
              "raw": "\"10\"",
              "start": 1098,
              "end": 1102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1106,
                      "end": 1112
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1115,
                        "end": 1121
                      },
                      "start": 1113,
                      "end": 1121
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1106,
                    "end": 1122
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "10",
                      "raw": "\"10\"",
                      "start": 1123,
                      "end": 1127
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1130,
                        "end": 1136
                      },
                      "start": 1128,
                      "end": 1136
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1123,
                    "end": 1137
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1138,
                      "end": 1141
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1144,
                              "end": 1147
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1148,
                                      "end": 1151
                                    },
                                    "typeArguments": null,
                                    "start": 1148,
                                    "end": 1151
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "10",
                                      "raw": "\"10\"",
                                      "start": 1152,
                                      "end": 1156
                                    },
                                    "start": 1152,
                                    "end": 1156
                                  },
                                  "start": 1148,
                                  "end": 1157
                                }
                              ],
                              "start": 1147,
                              "end": 1158
                            },
                            "start": 1144,
                            "end": 1158
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1161,
                              "end": 1165
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1166,
                                      "end": 1169
                                    },
                                    "typeArguments": null,
                                    "start": 1166,
                                    "end": 1169
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "10",
                                      "raw": "\"10\"",
                                      "start": 1170,
                                      "end": 1174
                                    },
                                    "start": 1170,
                                    "end": 1174
                                  },
                                  "start": 1166,
                                  "end": 1175
                                }
                              ],
                              "start": 1165,
                              "end": 1176
                            },
                            "start": 1161,
                            "end": 1176
                          }
                        ],
                        "start": 1144,
                        "end": 1176
                      },
                      "start": 1142,
                      "end": 1176
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1138,
                    "end": 1177
                  }
                ],
                "start": 1104,
                "end": 1179
              },
              "start": 1102,
              "end": 1179
            },
            "accessibility": null,
            "static": false,
            "start": 1098,
            "end": 1179
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "11",
              "raw": "\"11\"",
              "start": 1184,
              "end": 1188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1192,
                      "end": 1198
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1201,
                        "end": 1207
                      },
                      "start": 1199,
                      "end": 1207
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1192,
                    "end": 1208
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "11",
                      "raw": "\"11\"",
                      "start": 1209,
                      "end": 1213
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1216,
                        "end": 1222
                      },
                      "start": 1214,
                      "end": 1222
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1209,
                    "end": 1223
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1224,
                      "end": 1227
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1230,
                              "end": 1233
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1234,
                                      "end": 1237
                                    },
                                    "typeArguments": null,
                                    "start": 1234,
                                    "end": 1237
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "11",
                                      "raw": "\"11\"",
                                      "start": 1238,
                                      "end": 1242
                                    },
                                    "start": 1238,
                                    "end": 1242
                                  },
                                  "start": 1234,
                                  "end": 1243
                                }
                              ],
                              "start": 1233,
                              "end": 1244
                            },
                            "start": 1230,
                            "end": 1244
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1247,
                              "end": 1251
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1252,
                                      "end": 1255
                                    },
                                    "typeArguments": null,
                                    "start": 1252,
                                    "end": 1255
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "11",
                                      "raw": "\"11\"",
                                      "start": 1256,
                                      "end": 1260
                                    },
                                    "start": 1256,
                                    "end": 1260
                                  },
                                  "start": 1252,
                                  "end": 1261
                                }
                              ],
                              "start": 1251,
                              "end": 1262
                            },
                            "start": 1247,
                            "end": 1262
                          }
                        ],
                        "start": 1230,
                        "end": 1262
                      },
                      "start": 1228,
                      "end": 1262
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1224,
                    "end": 1263
                  }
                ],
                "start": 1190,
                "end": 1265
              },
              "start": 1188,
              "end": 1265
            },
            "accessibility": null,
            "static": false,
            "start": 1184,
            "end": 1265
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "12",
              "raw": "\"12\"",
              "start": 1270,
              "end": 1274
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1278,
                      "end": 1284
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1287,
                        "end": 1293
                      },
                      "start": 1285,
                      "end": 1293
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1278,
                    "end": 1294
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "12",
                      "raw": "\"12\"",
                      "start": 1295,
                      "end": 1299
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1302,
                        "end": 1308
                      },
                      "start": 1300,
                      "end": 1308
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1295,
                    "end": 1309
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1310,
                      "end": 1313
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1316,
                              "end": 1319
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1320,
                                      "end": 1323
                                    },
                                    "typeArguments": null,
                                    "start": 1320,
                                    "end": 1323
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "12",
                                      "raw": "\"12\"",
                                      "start": 1324,
                                      "end": 1328
                                    },
                                    "start": 1324,
                                    "end": 1328
                                  },
                                  "start": 1320,
                                  "end": 1329
                                }
                              ],
                              "start": 1319,
                              "end": 1330
                            },
                            "start": 1316,
                            "end": 1330
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1333,
                              "end": 1337
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1338,
                                      "end": 1341
                                    },
                                    "typeArguments": null,
                                    "start": 1338,
                                    "end": 1341
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "12",
                                      "raw": "\"12\"",
                                      "start": 1342,
                                      "end": 1346
                                    },
                                    "start": 1342,
                                    "end": 1346
                                  },
                                  "start": 1338,
                                  "end": 1347
                                }
                              ],
                              "start": 1337,
                              "end": 1348
                            },
                            "start": 1333,
                            "end": 1348
                          }
                        ],
                        "start": 1316,
                        "end": 1348
                      },
                      "start": 1314,
                      "end": 1348
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1310,
                    "end": 1349
                  }
                ],
                "start": 1276,
                "end": 1351
              },
              "start": 1274,
              "end": 1351
            },
            "accessibility": null,
            "static": false,
            "start": 1270,
            "end": 1351
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "13",
              "raw": "\"13\"",
              "start": 1356,
              "end": 1360
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1364,
                      "end": 1370
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1373,
                        "end": 1379
                      },
                      "start": 1371,
                      "end": 1379
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1364,
                    "end": 1380
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "13",
                      "raw": "\"13\"",
                      "start": 1381,
                      "end": 1385
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1388,
                        "end": 1394
                      },
                      "start": 1386,
                      "end": 1394
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1381,
                    "end": 1395
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1396,
                      "end": 1399
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1405
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1406,
                                      "end": 1409
                                    },
                                    "typeArguments": null,
                                    "start": 1406,
                                    "end": 1409
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "13",
                                      "raw": "\"13\"",
                                      "start": 1410,
                                      "end": 1414
                                    },
                                    "start": 1410,
                                    "end": 1414
                                  },
                                  "start": 1406,
                                  "end": 1415
                                }
                              ],
                              "start": 1405,
                              "end": 1416
                            },
                            "start": 1402,
                            "end": 1416
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1419,
                              "end": 1423
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1424,
                                      "end": 1427
                                    },
                                    "typeArguments": null,
                                    "start": 1424,
                                    "end": 1427
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "13",
                                      "raw": "\"13\"",
                                      "start": 1428,
                                      "end": 1432
                                    },
                                    "start": 1428,
                                    "end": 1432
                                  },
                                  "start": 1424,
                                  "end": 1433
                                }
                              ],
                              "start": 1423,
                              "end": 1434
                            },
                            "start": 1419,
                            "end": 1434
                          }
                        ],
                        "start": 1402,
                        "end": 1434
                      },
                      "start": 1400,
                      "end": 1434
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1396,
                    "end": 1435
                  }
                ],
                "start": 1362,
                "end": 1437
              },
              "start": 1360,
              "end": 1437
            },
            "accessibility": null,
            "static": false,
            "start": 1356,
            "end": 1437
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "14",
              "raw": "\"14\"",
              "start": 1442,
              "end": 1446
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1450,
                      "end": 1456
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1459,
                        "end": 1465
                      },
                      "start": 1457,
                      "end": 1465
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1450,
                    "end": 1466
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "14",
                      "raw": "\"14\"",
                      "start": 1467,
                      "end": 1471
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1474,
                        "end": 1480
                      },
                      "start": 1472,
                      "end": 1480
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1467,
                    "end": 1481
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1482,
                      "end": 1485
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1488,
                              "end": 1491
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1492,
                                      "end": 1495
                                    },
                                    "typeArguments": null,
                                    "start": 1492,
                                    "end": 1495
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "14",
                                      "raw": "\"14\"",
                                      "start": 1496,
                                      "end": 1500
                                    },
                                    "start": 1496,
                                    "end": 1500
                                  },
                                  "start": 1492,
                                  "end": 1501
                                }
                              ],
                              "start": 1491,
                              "end": 1502
                            },
                            "start": 1488,
                            "end": 1502
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1505,
                              "end": 1509
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1510,
                                      "end": 1513
                                    },
                                    "typeArguments": null,
                                    "start": 1510,
                                    "end": 1513
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "14",
                                      "raw": "\"14\"",
                                      "start": 1514,
                                      "end": 1518
                                    },
                                    "start": 1514,
                                    "end": 1518
                                  },
                                  "start": 1510,
                                  "end": 1519
                                }
                              ],
                              "start": 1509,
                              "end": 1520
                            },
                            "start": 1505,
                            "end": 1520
                          }
                        ],
                        "start": 1488,
                        "end": 1520
                      },
                      "start": 1486,
                      "end": 1520
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1482,
                    "end": 1521
                  }
                ],
                "start": 1448,
                "end": 1523
              },
              "start": 1446,
              "end": 1523
            },
            "accessibility": null,
            "static": false,
            "start": 1442,
            "end": 1523
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "15",
              "raw": "\"15\"",
              "start": 1528,
              "end": 1532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1536,
                      "end": 1542
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1545,
                        "end": 1551
                      },
                      "start": 1543,
                      "end": 1551
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1536,
                    "end": 1552
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "15",
                      "raw": "\"15\"",
                      "start": 1553,
                      "end": 1557
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1560,
                        "end": 1566
                      },
                      "start": 1558,
                      "end": 1566
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1553,
                    "end": 1567
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1568,
                      "end": 1571
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1574,
                              "end": 1577
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1578,
                                      "end": 1581
                                    },
                                    "typeArguments": null,
                                    "start": 1578,
                                    "end": 1581
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "15",
                                      "raw": "\"15\"",
                                      "start": 1582,
                                      "end": 1586
                                    },
                                    "start": 1582,
                                    "end": 1586
                                  },
                                  "start": 1578,
                                  "end": 1587
                                }
                              ],
                              "start": 1577,
                              "end": 1588
                            },
                            "start": 1574,
                            "end": 1588
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1591,
                              "end": 1595
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1596,
                                      "end": 1599
                                    },
                                    "typeArguments": null,
                                    "start": 1596,
                                    "end": 1599
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "15",
                                      "raw": "\"15\"",
                                      "start": 1600,
                                      "end": 1604
                                    },
                                    "start": 1600,
                                    "end": 1604
                                  },
                                  "start": 1596,
                                  "end": 1605
                                }
                              ],
                              "start": 1595,
                              "end": 1606
                            },
                            "start": 1591,
                            "end": 1606
                          }
                        ],
                        "start": 1574,
                        "end": 1606
                      },
                      "start": 1572,
                      "end": 1606
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1568,
                    "end": 1607
                  }
                ],
                "start": 1534,
                "end": 1609
              },
              "start": 1532,
              "end": 1609
            },
            "accessibility": null,
            "static": false,
            "start": 1528,
            "end": 1609
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "16",
              "raw": "\"16\"",
              "start": 1614,
              "end": 1618
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1622,
                      "end": 1628
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1631,
                        "end": 1637
                      },
                      "start": 1629,
                      "end": 1637
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1622,
                    "end": 1638
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "16",
                      "raw": "\"16\"",
                      "start": 1639,
                      "end": 1643
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1646,
                        "end": 1652
                      },
                      "start": 1644,
                      "end": 1652
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1639,
                    "end": 1653
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1654,
                      "end": 1657
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1660,
                              "end": 1663
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1664,
                                      "end": 1667
                                    },
                                    "typeArguments": null,
                                    "start": 1664,
                                    "end": 1667
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "16",
                                      "raw": "\"16\"",
                                      "start": 1668,
                                      "end": 1672
                                    },
                                    "start": 1668,
                                    "end": 1672
                                  },
                                  "start": 1664,
                                  "end": 1673
                                }
                              ],
                              "start": 1663,
                              "end": 1674
                            },
                            "start": 1660,
                            "end": 1674
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1677,
                              "end": 1681
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1682,
                                      "end": 1685
                                    },
                                    "typeArguments": null,
                                    "start": 1682,
                                    "end": 1685
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "16",
                                      "raw": "\"16\"",
                                      "start": 1686,
                                      "end": 1690
                                    },
                                    "start": 1686,
                                    "end": 1690
                                  },
                                  "start": 1682,
                                  "end": 1691
                                }
                              ],
                              "start": 1681,
                              "end": 1692
                            },
                            "start": 1677,
                            "end": 1692
                          }
                        ],
                        "start": 1660,
                        "end": 1692
                      },
                      "start": 1658,
                      "end": 1692
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1654,
                    "end": 1693
                  }
                ],
                "start": 1620,
                "end": 1695
              },
              "start": 1618,
              "end": 1695
            },
            "accessibility": null,
            "static": false,
            "start": 1614,
            "end": 1695
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "17",
              "raw": "\"17\"",
              "start": 1700,
              "end": 1704
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1708,
                      "end": 1714
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1717,
                        "end": 1723
                      },
                      "start": 1715,
                      "end": 1723
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1708,
                    "end": 1724
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "17",
                      "raw": "\"17\"",
                      "start": 1725,
                      "end": 1729
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1732,
                        "end": 1738
                      },
                      "start": 1730,
                      "end": 1738
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1725,
                    "end": 1739
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1740,
                      "end": 1743
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
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1746,
                              "end": 1749
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1750,
                                      "end": 1753
                                    },
                                    "typeArguments": null,
                                    "start": 1750,
                                    "end": 1753
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "17",
                                      "raw": "\"17\"",
                                      "start": 1754,
                                      "end": 1758
                                    },
                                    "start": 1754,
                                    "end": 1758
                                  },
                                  "start": 1750,
                                  "end": 1759
                                }
                              ],
                              "start": 1749,
                              "end": 1760
                            },
                            "start": 1746,
                            "end": 1760
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1763,
                              "end": 1767
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1768,
                                      "end": 1771
                                    },
                                    "typeArguments": null,
                                    "start": 1768,
                                    "end": 1771
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "17",
                                      "raw": "\"17\"",
                                      "start": 1772,
                                      "end": 1776
                                    },
                                    "start": 1772,
                                    "end": 1776
                                  },
                                  "start": 1768,
                                  "end": 1777
                                }
                              ],
                              "start": 1767,
                              "end": 1778
                            },
                            "start": 1763,
                            "end": 1778
                          }
                        ],
                        "start": 1746,
                        "end": 1778
                      },
                      "start": 1744,
                      "end": 1778
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1740,
                    "end": 1779
                  }
                ],
                "start": 1706,
                "end": 1781
              },
              "start": 1704,
              "end": 1781
            },
            "accessibility": null,
            "static": false,
            "start": 1700,
            "end": 1781
          }
        ],
        "start": 272,
        "end": 1783
      },
      "declare": false,
      "start": 258,
      "end": 1783
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getCtor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1801,
        "end": 1808
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
              "start": 1809,
              "end": 1810
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Big",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1825,
                  "end": 1828
                },
                "typeArguments": null,
                "start": 1825,
                "end": 1828
              },
              "start": 1819,
              "end": 1828
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1809,
            "end": 1828
          }
        ],
        "start": 1808,
        "end": 1829
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "comp",
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
                "start": 1836,
                "end": 1837
              },
              "typeArguments": null,
              "start": 1836,
              "end": 1837
            },
            "start": 1834,
            "end": 1837
          },
          "start": 1830,
          "end": 1837
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CtorOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1840,
            "end": 1846
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Big",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1847,
                    "end": 1850
                  },
                  "typeArguments": null,
                  "start": 1847,
                  "end": 1850
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1851,
                    "end": 1852
                  },
                  "typeArguments": null,
                  "start": 1851,
                  "end": 1852
                },
                "start": 1847,
                "end": 1853
              }
            ],
            "start": 1846,
            "end": 1854
          },
          "start": 1840,
          "end": 1854
        },
        "start": 1838,
        "end": 1854
      },
      "body": null,
      "expression": false,
      "start": 1784,
      "end": 1854
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
            "name": "all",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Big",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1879,
                    "end": 1882
                  },
                  "typeArguments": null,
                  "start": 1879,
                  "end": 1882
                },
                "start": 1873,
                "end": 1882
              },
              "start": 1871,
              "end": 1882
            },
            "start": 1868,
            "end": 1882
          },
          "init": null,
          "definite": false,
          "start": 1868,
          "end": 1882
        }
      ],
      "declare": true,
      "start": 1856,
      "end": 1883
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
            "name": "ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1890,
            "end": 1894
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getCtor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1897,
              "end": 1904
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 1905,
                "end": 1908
              }
            ],
            "optional": false,
            "start": 1897,
            "end": 1909
          },
          "definite": false,
          "start": 1890,
          "end": 1909
        }
      ],
      "declare": false,
      "start": 1884,
      "end": 1910
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
            "name": "comp",
            "optional": false,
            "typeAnnotation": null,
            "start": 1917,
            "end": 1921
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1924,
              "end": 1928
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1931,
                      "end": 1937
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ok",
                      "raw": "\"ok\"",
                      "start": 1939,
                      "end": 1943
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1931,
                    "end": 1943
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1945,
                      "end": 1948
                    },
                    "value": {
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
                          "typeAnnotation": null,
                          "start": 1950,
                          "end": 1951
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1955,
                            "end": 1962
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1963,
                            "end": 1966
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1955,
                          "end": 1966
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1967,
                            "end": 1968
                          }
                        ],
                        "optional": false,
                        "start": 1955,
                        "end": 1969
                      },
                      "id": null,
                      "generator": false,
                      "start": 1950,
                      "end": 1969
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1945,
                    "end": 1969
                  }
                ],
                "start": 1929,
                "end": 1971
              }
            ],
            "optional": false,
            "start": 1924,
            "end": 1972
          },
          "definite": false,
          "start": 1917,
          "end": 1972
        }
      ],
      "declare": false,
      "start": 1911,
      "end": 1973
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 1973
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31,
    "range": [
      22,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 32,
    "end": 35,
    "range": [
      32,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 52,
    "end": 61,
    "range": [
      52,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 62,
    "end": 66,
    "range": [
      62,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 89,
    "end": 93,
    "range": [
      89,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 94,
    "end": 113,
    "range": [
      94,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 122,
    "end": 129,
    "range": [
      122,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 143,
    "end": 145,
    "range": [
      143,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 146,
    "end": 150,
    "range": [
      146,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 160,
    "end": 167,
    "range": [
      160,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 173,
    "end": 178,
    "range": [
      173,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 182,
    "end": 184,
    "range": [
      182,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 185,
    "end": 189,
    "range": [
      185,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 197,
    "end": 202,
    "range": [
      197,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 204,
    "end": 208,
    "range": [
      204,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "CtorOf",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 227,
    "end": 246,
    "range": [
      227,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 251,
    "end": 253,
    "range": [
      251,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 258,
    "end": 267,
    "range": [
      258,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 268,
    "end": 271,
    "range": [
      268,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 278,
    "end": 281,
    "range": [
      278,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 285,
    "end": 291,
    "range": [
      285,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 294,
    "end": 300,
    "range": [
      294,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 308,
    "end": 314,
    "range": [
      308,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 316,
    "end": 319,
    "range": [
      316,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 322,
    "end": 325,
    "range": [
      322,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 326,
    "end": 329,
    "range": [
      326,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 330,
    "end": 333,
    "range": [
      330,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 338,
    "end": 342,
    "range": [
      338,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 343,
    "end": 346,
    "range": [
      343,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 347,
    "end": 350,
    "range": [
      347,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 360,
    "end": 363,
    "range": [
      360,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 367,
    "end": 373,
    "range": [
      367,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 376,
    "end": 382,
    "range": [
      376,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 384,
    "end": 387,
    "range": [
      384,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 390,
    "end": 396,
    "range": [
      390,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 398,
    "end": 401,
    "range": [
      398,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 404,
    "end": 407,
    "range": [
      404,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 408,
    "end": 411,
    "range": [
      408,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 412,
    "end": 415,
    "range": [
      412,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 420,
    "end": 424,
    "range": [
      420,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 425,
    "end": 428,
    "range": [
      425,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 429,
    "end": 432,
    "range": [
      429,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 442,
    "end": 445,
    "range": [
      442,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 449,
    "end": 455,
    "range": [
      449,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 458,
    "end": 464,
    "range": [
      458,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 466,
    "end": 469,
    "range": [
      466,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 472,
    "end": 478,
    "range": [
      472,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 480,
    "end": 483,
    "range": [
      480,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 486,
    "end": 489,
    "range": [
      486,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 490,
    "end": 493,
    "range": [
      490,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 502,
    "end": 506,
    "range": [
      502,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 507,
    "end": 510,
    "range": [
      507,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 511,
    "end": 514,
    "range": [
      511,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 524,
    "end": 527,
    "range": [
      524,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 531,
    "end": 537,
    "range": [
      531,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 540,
    "end": 546,
    "range": [
      540,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 548,
    "end": 551,
    "range": [
      548,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 554,
    "end": 560,
    "range": [
      554,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 562,
    "end": 565,
    "range": [
      562,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 568,
    "end": 571,
    "range": [
      568,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 572,
    "end": 575,
    "range": [
      572,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 576,
    "end": 579,
    "range": [
      576,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 589,
    "end": 592,
    "range": [
      589,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 593,
    "end": 596,
    "range": [
      593,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 606,
    "end": 609,
    "range": [
      606,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 622,
    "end": 628,
    "range": [
      622,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 630,
    "end": 633,
    "range": [
      630,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 636,
    "end": 642,
    "range": [
      636,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 644,
    "end": 647,
    "range": [
      644,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 650,
    "end": 653,
    "range": [
      650,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 654,
    "end": 657,
    "range": [
      654,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 658,
    "end": 661,
    "range": [
      658,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 666,
    "end": 670,
    "range": [
      666,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 671,
    "end": 674,
    "range": [
      671,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "String",
    "value": "\"4\"",
    "start": 675,
    "end": 678,
    "range": [
      675,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "String",
    "value": "\"5\"",
    "start": 688,
    "end": 691,
    "range": [
      688,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 695,
    "end": 701,
    "range": [
      695,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 704,
    "end": 710,
    "range": [
      704,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "String",
    "value": "\"5\"",
    "start": 712,
    "end": 715,
    "range": [
      712,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 718,
    "end": 724,
    "range": [
      718,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 726,
    "end": 729,
    "range": [
      726,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 732,
    "end": 735,
    "range": [
      732,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 736,
    "end": 739,
    "range": [
      736,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "String",
    "value": "\"5\"",
    "start": 740,
    "end": 743,
    "range": [
      740,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 748,
    "end": 752,
    "range": [
      748,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 753,
    "end": 756,
    "range": [
      753,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "String",
    "value": "\"5\"",
    "start": 757,
    "end": 760,
    "range": [
      757,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "String",
    "value": "\"6\"",
    "start": 770,
    "end": 773,
    "range": [
      770,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 777,
    "end": 783,
    "range": [
      777,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 786,
    "end": 792,
    "range": [
      786,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "String",
    "value": "\"6\"",
    "start": 794,
    "end": 797,
    "range": [
      794,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 800,
    "end": 806,
    "range": [
      800,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 808,
    "end": 811,
    "range": [
      808,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 814,
    "end": 817,
    "range": [
      814,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 818,
    "end": 821,
    "range": [
      818,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "String",
    "value": "\"6\"",
    "start": 822,
    "end": 825,
    "range": [
      822,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 830,
    "end": 834,
    "range": [
      830,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 835,
    "end": 838,
    "range": [
      835,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "String",
    "value": "\"6\"",
    "start": 839,
    "end": 842,
    "range": [
      839,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "String",
    "value": "\"7\"",
    "start": 852,
    "end": 855,
    "range": [
      852,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 859,
    "end": 865,
    "range": [
      859,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 868,
    "end": 874,
    "range": [
      868,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "String",
    "value": "\"7\"",
    "start": 876,
    "end": 879,
    "range": [
      876,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 882,
    "end": 888,
    "range": [
      882,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 890,
    "end": 893,
    "range": [
      890,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 896,
    "end": 899,
    "range": [
      896,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 900,
    "end": 903,
    "range": [
      900,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "String",
    "value": "\"7\"",
    "start": 904,
    "end": 907,
    "range": [
      904,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 912,
    "end": 916,
    "range": [
      912,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 917,
    "end": 920,
    "range": [
      917,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "String",
    "value": "\"7\"",
    "start": 921,
    "end": 924,
    "range": [
      921,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "String",
    "value": "\"8\"",
    "start": 934,
    "end": 937,
    "range": [
      934,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 941,
    "end": 947,
    "range": [
      941,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 950,
    "end": 956,
    "range": [
      950,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "String",
    "value": "\"8\"",
    "start": 958,
    "end": 961,
    "range": [
      958,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 964,
    "end": 970,
    "range": [
      964,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 972,
    "end": 975,
    "range": [
      972,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 978,
    "end": 981,
    "range": [
      978,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 982,
    "end": 985,
    "range": [
      982,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "String",
    "value": "\"8\"",
    "start": 986,
    "end": 989,
    "range": [
      986,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 994,
    "end": 998,
    "range": [
      994,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 999,
    "end": 1002,
    "range": [
      999,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "String",
    "value": "\"8\"",
    "start": 1003,
    "end": 1006,
    "range": [
      1003,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "String",
    "value": "\"9\"",
    "start": 1016,
    "end": 1019,
    "range": [
      1016,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1023,
    "end": 1029,
    "range": [
      1023,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1032,
    "end": 1038,
    "range": [
      1032,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "String",
    "value": "\"9\"",
    "start": 1040,
    "end": 1043,
    "range": [
      1040,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1046,
    "end": 1052,
    "range": [
      1046,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1054,
    "end": 1057,
    "range": [
      1054,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1060,
    "end": 1063,
    "range": [
      1060,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1064,
    "end": 1067,
    "range": [
      1064,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "String",
    "value": "\"9\"",
    "start": 1068,
    "end": 1071,
    "range": [
      1068,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1076,
    "end": 1080,
    "range": [
      1076,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1081,
    "end": 1084,
    "range": [
      1081,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "String",
    "value": "\"9\"",
    "start": 1085,
    "end": 1088,
    "range": [
      1085,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 1098,
    "end": 1102,
    "range": [
      1098,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1106,
    "end": 1112,
    "range": [
      1106,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1115,
    "end": 1121,
    "range": [
      1115,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 1123,
    "end": 1127,
    "range": [
      1123,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1130,
    "end": 1136,
    "range": [
      1130,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1138,
    "end": 1141,
    "range": [
      1138,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1144,
    "end": 1147,
    "range": [
      1144,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1148,
    "end": 1151,
    "range": [
      1148,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 1152,
    "end": 1156,
    "range": [
      1152,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1161,
    "end": 1165,
    "range": [
      1161,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1166,
    "end": 1169,
    "range": [
      1166,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 1170,
    "end": 1174,
    "range": [
      1170,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "String",
    "value": "\"11\"",
    "start": 1184,
    "end": 1188,
    "range": [
      1184,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1192,
    "end": 1198,
    "range": [
      1192,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1201,
    "end": 1207,
    "range": [
      1201,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "String",
    "value": "\"11\"",
    "start": 1209,
    "end": 1213,
    "range": [
      1209,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1216,
    "end": 1222,
    "range": [
      1216,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1224,
    "end": 1227,
    "range": [
      1224,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1230,
    "end": 1233,
    "range": [
      1230,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1234,
    "end": 1237,
    "range": [
      1234,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "String",
    "value": "\"11\"",
    "start": 1238,
    "end": 1242,
    "range": [
      1238,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1247,
    "end": 1251,
    "range": [
      1247,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1252,
    "end": 1255,
    "range": [
      1252,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "String",
    "value": "\"11\"",
    "start": 1256,
    "end": 1260,
    "range": [
      1256,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "String",
    "value": "\"12\"",
    "start": 1270,
    "end": 1274,
    "range": [
      1270,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1278,
    "end": 1284,
    "range": [
      1278,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1287,
    "end": 1293,
    "range": [
      1287,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "String",
    "value": "\"12\"",
    "start": 1295,
    "end": 1299,
    "range": [
      1295,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1302,
    "end": 1308,
    "range": [
      1302,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1310,
    "end": 1313,
    "range": [
      1310,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1316,
    "end": 1319,
    "range": [
      1316,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1320,
    "end": 1323,
    "range": [
      1320,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "String",
    "value": "\"12\"",
    "start": 1324,
    "end": 1328,
    "range": [
      1324,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1333,
    "end": 1337,
    "range": [
      1333,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1338,
    "end": 1341,
    "range": [
      1338,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "String",
    "value": "\"12\"",
    "start": 1342,
    "end": 1346,
    "range": [
      1342,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "String",
    "value": "\"13\"",
    "start": 1356,
    "end": 1360,
    "range": [
      1356,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1364,
    "end": 1370,
    "range": [
      1364,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1373,
    "end": 1379,
    "range": [
      1373,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "String",
    "value": "\"13\"",
    "start": 1381,
    "end": 1385,
    "range": [
      1381,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1388,
    "end": 1394,
    "range": [
      1388,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1396,
    "end": 1399,
    "range": [
      1396,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1402,
    "end": 1405,
    "range": [
      1402,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1406,
    "end": 1409,
    "range": [
      1406,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "String",
    "value": "\"13\"",
    "start": 1410,
    "end": 1414,
    "range": [
      1410,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1419,
    "end": 1423,
    "range": [
      1419,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1424,
    "end": 1427,
    "range": [
      1424,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "String",
    "value": "\"13\"",
    "start": 1428,
    "end": 1432,
    "range": [
      1428,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "String",
    "value": "\"14\"",
    "start": 1442,
    "end": 1446,
    "range": [
      1442,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1450,
    "end": 1456,
    "range": [
      1450,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1459,
    "end": 1465,
    "range": [
      1459,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "String",
    "value": "\"14\"",
    "start": 1467,
    "end": 1471,
    "range": [
      1467,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1474,
    "end": 1480,
    "range": [
      1474,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1482,
    "end": 1485,
    "range": [
      1482,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1488,
    "end": 1491,
    "range": [
      1488,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1492,
    "end": 1495,
    "range": [
      1492,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "String",
    "value": "\"14\"",
    "start": 1496,
    "end": 1500,
    "range": [
      1496,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1505,
    "end": 1509,
    "range": [
      1505,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1510,
    "end": 1513,
    "range": [
      1510,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "String",
    "value": "\"14\"",
    "start": 1514,
    "end": 1518,
    "range": [
      1514,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "String",
    "value": "\"15\"",
    "start": 1528,
    "end": 1532,
    "range": [
      1528,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1536,
    "end": 1542,
    "range": [
      1536,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1545,
    "end": 1551,
    "range": [
      1545,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "String",
    "value": "\"15\"",
    "start": 1553,
    "end": 1557,
    "range": [
      1553,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1560,
    "end": 1566,
    "range": [
      1560,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1568,
    "end": 1571,
    "range": [
      1568,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1574,
    "end": 1577,
    "range": [
      1574,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1578,
    "end": 1581,
    "range": [
      1578,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "String",
    "value": "\"15\"",
    "start": 1582,
    "end": 1586,
    "range": [
      1582,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1591,
    "end": 1595,
    "range": [
      1591,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1596,
    "end": 1599,
    "range": [
      1596,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "String",
    "value": "\"15\"",
    "start": 1600,
    "end": 1604,
    "range": [
      1600,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "String",
    "value": "\"16\"",
    "start": 1614,
    "end": 1618,
    "range": [
      1614,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1622,
    "end": 1628,
    "range": [
      1622,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1631,
    "end": 1637,
    "range": [
      1631,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "String",
    "value": "\"16\"",
    "start": 1639,
    "end": 1643,
    "range": [
      1639,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1646,
    "end": 1652,
    "range": [
      1646,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1654,
    "end": 1657,
    "range": [
      1654,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1660,
    "end": 1663,
    "range": [
      1660,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1664,
    "end": 1667,
    "range": [
      1664,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "String",
    "value": "\"16\"",
    "start": 1668,
    "end": 1672,
    "range": [
      1668,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1677,
    "end": 1681,
    "range": [
      1677,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1682,
    "end": 1685,
    "range": [
      1682,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "String",
    "value": "\"16\"",
    "start": 1686,
    "end": 1690,
    "range": [
      1686,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "String",
    "value": "\"17\"",
    "start": 1700,
    "end": 1704,
    "range": [
      1700,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1708,
    "end": 1714,
    "range": [
      1708,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1717,
    "end": 1723,
    "range": [
      1717,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "String",
    "value": "\"17\"",
    "start": 1725,
    "end": 1729,
    "range": [
      1725,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1732,
    "end": 1738,
    "range": [
      1732,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1740,
    "end": 1743,
    "range": [
      1740,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1746,
    "end": 1749,
    "range": [
      1746,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1750,
    "end": 1753,
    "range": [
      1750,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "String",
    "value": "\"17\"",
    "start": 1754,
    "end": 1758,
    "range": [
      1754,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1763,
    "end": 1767,
    "range": [
      1763,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1768,
    "end": 1771,
    "range": [
      1768,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "String",
    "value": "\"17\"",
    "start": 1772,
    "end": 1776,
    "range": [
      1772,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1784,
    "end": 1791,
    "range": [
      1784,
      1791
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1792,
    "end": 1800,
    "range": [
      1792,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "getCtor",
    "start": 1801,
    "end": 1808,
    "range": [
      1801,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1811,
    "end": 1818,
    "range": [
      1811,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1819,
    "end": 1824,
    "range": [
      1819,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1825,
    "end": 1828,
    "range": [
      1825,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 1830,
    "end": 1834,
    "range": [
      1830,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "CtorOf",
    "start": 1840,
    "end": 1846,
    "range": [
      1840,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1847,
    "end": 1850,
    "range": [
      1847,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1856,
    "end": 1863,
    "range": [
      1856,
      1863
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1864,
    "end": 1867,
    "range": [
      1864,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 1868,
    "end": 1871,
    "range": [
      1868,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1873,
    "end": 1878,
    "range": [
      1873,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "Big",
    "start": 1879,
    "end": 1882,
    "range": [
      1879,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1884,
    "end": 1889,
    "range": [
      1884,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 1890,
    "end": 1894,
    "range": [
      1890,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Identifier",
    "value": "getCtor",
    "start": 1897,
    "end": 1904,
    "range": [
      1897,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 1905,
    "end": 1908,
    "range": [
      1905,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1911,
    "end": 1916,
    "range": [
      1911,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 1917,
    "end": 1921,
    "range": [
      1917,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 1924,
    "end": 1928,
    "range": [
      1924,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 1931,
    "end": 1937,
    "range": [
      1931,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1939,
    "end": 1943,
    "range": [
      1939,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1945,
    "end": 1948,
    "range": [
      1945,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1952,
    "end": 1954,
    "range": [
      1952,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1955,
    "end": 1962,
    "range": [
      1955,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1963,
    "end": 1966,
    "range": [
      1963,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  }
]
```
