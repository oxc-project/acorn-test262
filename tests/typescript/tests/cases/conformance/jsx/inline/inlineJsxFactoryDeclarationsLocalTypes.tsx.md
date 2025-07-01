__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 40
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IntrinsicElements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 78
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 97,
                                  "end": 103
                                },
                                "start": 95,
                                "end": 103
                              },
                              "start": 94,
                              "end": 103
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 106,
                              "end": 108
                            },
                            "start": 104,
                            "end": 108
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 93,
                          "end": 109
                        }
                      ],
                      "start": 79,
                      "end": 119
                    },
                    "declare": false,
                    "start": 51,
                    "end": 119
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 145
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
                            "name": "__domBrand",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 160,
                            "end": 170
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 172,
                              "end": 176
                            },
                            "start": 170,
                            "end": 176
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 160,
                          "end": 177
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 190,
                            "end": 195
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
                                    "name": "children",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 215,
                                    "end": 223
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Element",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 226,
                                          "end": 233
                                        },
                                        "typeArguments": null,
                                        "start": 226,
                                        "end": 233
                                      },
                                      "start": 226,
                                      "end": 235
                                    },
                                    "start": 224,
                                    "end": 235
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 215,
                                  "end": 236
                                }
                              ],
                              "start": 197,
                              "end": 250
                            },
                            "start": 195,
                            "end": 250
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 190,
                          "end": 251
                        }
                      ],
                      "start": 146,
                      "end": 261
                    },
                    "declare": false,
                    "start": 128,
                    "end": 261
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 292
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 308
                        },
                        "typeArguments": null,
                        "start": 301,
                        "end": 308
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "render",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 323,
                            "end": 329
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
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 333,
                                "end": 340
                              },
                              "typeArguments": null,
                              "start": 333,
                              "end": 340
                            },
                            "start": 331,
                            "end": 340
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 323,
                          "end": 341
                        }
                      ],
                      "start": 309,
                      "end": 351
                    },
                    "declare": false,
                    "start": 270,
                    "end": 351
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementAttributesProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 370,
                      "end": 395
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
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 398,
                            "end": 403
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 405,
                              "end": 408
                            },
                            "start": 403,
                            "end": 408
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 398,
                          "end": 409
                        }
                      ],
                      "start": 396,
                      "end": 411
                    },
                    "declare": false,
                    "start": 360,
                    "end": 411
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementChildrenAttribute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 454
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
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 457,
                            "end": 465
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 467,
                              "end": 470
                            },
                            "start": 465,
                            "end": 470
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 457,
                          "end": 471
                        }
                      ],
                      "start": 455,
                      "end": 473
                    },
                    "declare": false,
                    "start": 420,
                    "end": 473
                  }
                ],
                "start": 41,
                "end": 479
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 27,
              "end": 479
            }
          ],
          "start": 21,
          "end": 481
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 481
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 481
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 498,
          "end": 501
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 508
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 512
                },
                "start": 505,
                "end": 512
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 520
              },
              "start": 505,
              "end": 520
            },
            "typeArguments": null,
            "start": 505,
            "end": 520
          },
          "start": 503,
          "end": 520
        },
        "body": null,
        "expression": false,
        "start": 489,
        "end": 521
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 482,
      "end": 521
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 521
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "predom",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 43
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IntrinsicElements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 81
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 100,
                                  "end": 106
                                },
                                "start": 98,
                                "end": 106
                              },
                              "start": 97,
                              "end": 106
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 109,
                              "end": 111
                            },
                            "start": 107,
                            "end": 111
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 96,
                          "end": 112
                        }
                      ],
                      "start": 82,
                      "end": 122
                    },
                    "declare": false,
                    "start": 54,
                    "end": 122
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 148
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
                            "name": "__predomBrand",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 176
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 178,
                              "end": 182
                            },
                            "start": 176,
                            "end": 182
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 163,
                          "end": 183
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 196,
                            "end": 201
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
                                    "name": "children",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 221,
                                    "end": 229
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Element",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 232,
                                          "end": 239
                                        },
                                        "typeArguments": null,
                                        "start": 232,
                                        "end": 239
                                      },
                                      "start": 232,
                                      "end": 241
                                    },
                                    "start": 230,
                                    "end": 241
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 221,
                                  "end": 242
                                }
                              ],
                              "start": 203,
                              "end": 256
                            },
                            "start": 201,
                            "end": 256
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 196,
                          "end": 257
                        }
                      ],
                      "start": 149,
                      "end": 267
                    },
                    "declare": false,
                    "start": 131,
                    "end": 267
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 298
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 307,
                          "end": 314
                        },
                        "typeArguments": null,
                        "start": 307,
                        "end": 314
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "render",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 335
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
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 339,
                                "end": 346
                              },
                              "typeArguments": null,
                              "start": 339,
                              "end": 346
                            },
                            "start": 337,
                            "end": 346
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 329,
                          "end": 347
                        }
                      ],
                      "start": 315,
                      "end": 357
                    },
                    "declare": false,
                    "start": 276,
                    "end": 357
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementAttributesProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 401
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
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 404,
                            "end": 409
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 411,
                              "end": 414
                            },
                            "start": 409,
                            "end": 414
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 404,
                          "end": 415
                        }
                      ],
                      "start": 402,
                      "end": 417
                    },
                    "declare": false,
                    "start": 366,
                    "end": 417
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementChildrenAttribute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 460
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
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 471
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 473,
                              "end": 476
                            },
                            "start": 471,
                            "end": 476
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 463,
                          "end": 477
                        }
                      ],
                      "start": 461,
                      "end": 479
                    },
                    "declare": false,
                    "start": 426,
                    "end": 479
                  }
                ],
                "start": 44,
                "end": 485
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 30,
              "end": 485
            }
          ],
          "start": 24,
          "end": 487
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 487
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 487
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "predom",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 510
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 520
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 524
                },
                "start": 514,
                "end": 524
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 532
              },
              "start": 514,
              "end": 532
            },
            "typeArguments": null,
            "start": 514,
            "end": 532
          },
          "start": 512,
          "end": 532
        },
        "body": null,
        "expression": false,
        "start": 495,
        "end": 533
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 488,
      "end": 533
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 533
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "predom",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "predom",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 34
          },
          "importKind": "value",
          "start": 28,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer2",
        "raw": "\"./renderer2\"",
        "start": 42,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MySFC",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 75
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
                  "name": "props",
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 87,
                            "end": 88
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 90,
                              "end": 96
                            },
                            "start": 88,
                            "end": 96
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 87,
                          "end": 97
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 99
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 101,
                              "end": 107
                            },
                            "start": 99,
                            "end": 107
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 98,
                          "end": 108
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 117
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "predom",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 120,
                                      "end": 126
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "JSX",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 127,
                                      "end": 130
                                    },
                                    "start": 120,
                                    "end": 130
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Element",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 131,
                                    "end": 138
                                  },
                                  "start": 120,
                                  "end": 138
                                },
                                "typeArguments": null,
                                "start": 120,
                                "end": 138
                              },
                              "start": 120,
                              "end": 140
                            },
                            "start": 118,
                            "end": 140
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 109,
                          "end": 140
                        }
                      ],
                      "start": 86,
                      "end": 141
                    },
                    "start": 84,
                    "end": 141
                  },
                  "start": 79,
                  "end": 141
                }
              ],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 147,
                    "end": 148
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 146,
                  "end": 149
                },
                "children": [
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 155
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 156,
                        "end": 157
                      },
                      "optional": false,
                      "computed": false,
                      "start": 150,
                      "end": 157
                    },
                    "start": 149,
                    "end": 158
                  },
                  {
                    "type": "JSXText",
                    "value": " + ",
                    "raw": " + ",
                    "start": 158,
                    "end": 161
                  },
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 167
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "optional": false,
                      "computed": false,
                      "start": 162,
                      "end": 169
                    },
                    "start": 161,
                    "end": 170
                  },
                  {
                    "type": "JSXText",
                    "value": " = ",
                    "raw": " = ",
                    "start": 170,
                    "end": 173
                  },
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 179
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 181
                        },
                        "optional": false,
                        "computed": false,
                        "start": 174,
                        "end": 181
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 189
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 191
                        },
                        "optional": false,
                        "computed": false,
                        "start": 184,
                        "end": 191
                      },
                      "start": 174,
                      "end": 191
                    },
                    "start": 173,
                    "end": 192
                  },
                  {
                    "type": "JSXSpreadChild",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 196,
                          "end": 200
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 201,
                          "end": 206
                        },
                        "optional": false,
                        "computed": false,
                        "start": 196,
                        "end": 206
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 215
                      },
                      "optional": false,
                      "computed": false,
                      "start": 196,
                      "end": 215
                    },
                    "start": 192,
                    "end": 216
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 218,
                    "end": 219
                  },
                  "start": 216,
                  "end": 220
                },
                "start": 146,
                "end": 220
              },
              "id": null,
              "generator": false,
              "start": 78,
              "end": 220
            },
            "definite": false,
            "start": 70,
            "end": 220
          }
        ],
        "declare": false,
        "start": 64,
        "end": 221
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 243
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 261
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 265
                },
                "optional": false,
                "computed": false,
                "start": 255,
                "end": 265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 255,
              "end": 273
            },
            "typeArguments": null,
            "start": 255,
            "end": 273
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "__predomBrand",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 293
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 296,
                  "end": 300
                },
                "start": 294,
                "end": 300
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": true,
              "readonly": false,
              "accessibility": null,
              "start": 280,
              "end": 301
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 317
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 333,
                                "end": 334
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 336,
                                  "end": 342
                                },
                                "start": 334,
                                "end": 342
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 333,
                              "end": 343
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 345
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 347,
                                  "end": 353
                                },
                                "start": 345,
                                "end": 353
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 344,
                              "end": 354
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 355,
                                "end": 363
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "predom",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 366,
                                          "end": 372
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "JSX",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 373,
                                          "end": 376
                                        },
                                        "start": 366,
                                        "end": 376
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Element",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 377,
                                        "end": 384
                                      },
                                      "start": 366,
                                      "end": 384
                                    },
                                    "typeArguments": null,
                                    "start": 366,
                                    "end": 384
                                  },
                                  "start": 366,
                                  "end": 386
                                },
                                "start": 364,
                                "end": 386
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 355,
                              "end": 386
                            }
                          ],
                          "start": 332,
                          "end": 387
                        },
                        "start": 330,
                        "end": 387
                      },
                      "start": 325,
                      "end": 387
                    },
                    "readonly": false,
                    "static": false,
                    "start": 318,
                    "end": 387
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 389,
                  "end": 391
                },
                "expression": false,
                "start": 317,
                "end": 391
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 306,
              "end": 391
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 402
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "p",
                            "start": 423,
                            "end": 424
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false,
                          "start": 422,
                          "end": 425
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "\n            ",
                            "raw": "\n            ",
                            "start": 425,
                            "end": 438
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 439,
                                  "end": 443
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 444,
                                  "end": 449
                                },
                                "optional": false,
                                "computed": false,
                                "start": 439,
                                "end": 449
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 450,
                                "end": 451
                              },
                              "optional": false,
                              "computed": false,
                              "start": 439,
                              "end": 451
                            },
                            "start": 438,
                            "end": 452
                          },
                          {
                            "type": "JSXText",
                            "value": " + ",
                            "raw": " + ",
                            "start": 452,
                            "end": 455
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 456,
                                  "end": 460
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 461,
                                  "end": 466
                                },
                                "optional": false,
                                "computed": false,
                                "start": 456,
                                "end": 466
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 467,
                                "end": 468
                              },
                              "optional": false,
                              "computed": false,
                              "start": 456,
                              "end": 468
                            },
                            "start": 455,
                            "end": 469
                          },
                          {
                            "type": "JSXText",
                            "value": " = ",
                            "raw": " = ",
                            "start": 469,
                            "end": 472
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 473,
                                    "end": 477
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 478,
                                    "end": 483
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 473,
                                  "end": 483
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 484,
                                  "end": 485
                                },
                                "optional": false,
                                "computed": false,
                                "start": 473,
                                "end": 485
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 488,
                                    "end": 492
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 493,
                                    "end": 498
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 488,
                                  "end": 498
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 499,
                                  "end": 500
                                },
                                "optional": false,
                                "computed": false,
                                "start": 488,
                                "end": 500
                              },
                              "start": 473,
                              "end": 500
                            },
                            "start": 472,
                            "end": 501
                          },
                          {
                            "type": "JSXText",
                            "value": "\n            ",
                            "raw": "\n            ",
                            "start": 501,
                            "end": 514
                          },
                          {
                            "type": "JSXSpreadChild",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 518,
                                  "end": 522
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 523,
                                  "end": 528
                                },
                                "optional": false,
                                "computed": false,
                                "start": 518,
                                "end": 528
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 529,
                                "end": 537
                              },
                              "optional": false,
                              "computed": false,
                              "start": 518,
                              "end": 537
                            },
                            "start": 514,
                            "end": 538
                          },
                          {
                            "type": "JSXText",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "start": 538,
                            "end": 547
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "p",
                            "start": 549,
                            "end": 550
                          },
                          "start": 547,
                          "end": 551
                        },
                        "start": 422,
                        "end": 551
                      },
                      "start": 415,
                      "end": 552
                    }
                  ],
                  "start": 405,
                  "end": 558
                },
                "expression": false,
                "start": 402,
                "end": 558
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 396,
              "end": 558
            }
          ],
          "start": 274,
          "end": 560
        },
        "abstract": false,
        "declare": false,
        "start": 230,
        "end": 560
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 560
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "tree",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 578
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "MySFC",
                  "start": 582,
                  "end": 587
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "x",
                      "start": 588,
                      "end": 589
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 591,
                        "end": 592
                      },
                      "start": 590,
                      "end": 593
                    },
                    "start": 588,
                    "end": 593
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "y",
                      "start": 594,
                      "end": 595
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 597,
                        "end": 598
                      },
                      "start": 596,
                      "end": 599
                    },
                    "start": 594,
                    "end": 599
                  }
                ],
                "selfClosing": false,
                "start": 581,
                "end": 600
              },
              "children": [
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyClass",
                      "start": 601,
                      "end": 608
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "x",
                          "start": 609,
                          "end": 610
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 612,
                            "end": 613
                          },
                          "start": 611,
                          "end": 614
                        },
                        "start": 609,
                        "end": 614
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "y",
                          "start": 615,
                          "end": 616
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 618,
                            "end": 619
                          },
                          "start": 617,
                          "end": 620
                        },
                        "start": 615,
                        "end": 620
                      }
                    ],
                    "selfClosing": true,
                    "start": 600,
                    "end": 623
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 600,
                  "end": 623
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyClass",
                      "start": 624,
                      "end": 631
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "x",
                          "start": 632,
                          "end": 633
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 635,
                            "end": 636
                          },
                          "start": 634,
                          "end": 637
                        },
                        "start": 632,
                        "end": 637
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "y",
                          "start": 638,
                          "end": 639
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 641,
                            "end": 642
                          },
                          "start": 640,
                          "end": 643
                        },
                        "start": 638,
                        "end": 643
                      }
                    ],
                    "selfClosing": true,
                    "start": 623,
                    "end": 646
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 623,
                  "end": 646
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "MySFC",
                  "start": 648,
                  "end": 653
                },
                "start": 646,
                "end": 654
              },
              "start": 581,
              "end": 654
            },
            "definite": false,
            "start": 574,
            "end": 654
          }
        ],
        "declare": false,
        "start": 568,
        "end": 654
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 561,
      "end": 654
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h",
            "start": 672,
            "end": 673
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 671,
          "end": 674
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h",
            "start": 676,
            "end": 677
          },
          "start": 674,
          "end": 678
        },
        "start": 671,
        "end": 678
      },
      "exportKind": "value",
      "start": 656,
      "end": 678
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 679
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "importKind": "value",
          "start": 25,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 36,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 16,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 67
          },
          "start": 56,
          "end": 67
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MySFC",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 75
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MySFC",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 75
          },
          "importKind": "value",
          "start": 70,
          "end": 75
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 84
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 84
          },
          "importKind": "value",
          "start": 77,
          "end": 84
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "tree",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 90
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "tree",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 90
          },
          "importKind": "value",
          "start": 86,
          "end": 90
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component",
        "raw": "\"./component\"",
        "start": 97,
        "end": 110
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 120
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 134
          },
          "definite": false,
          "start": 116,
          "end": 134
        }
      ],
      "declare": false,
      "start": 112,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 140
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "h",
              "start": 144,
              "end": 145
            },
            "typeArguments": null,
            "attributes": [],
            "selfClosing": false,
            "start": 143,
            "end": 146
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "h",
              "start": 148,
              "end": 149
            },
            "start": 146,
            "end": 150
          },
          "start": 143,
          "end": 150
        },
        "start": 136,
        "end": 150
      },
      "directive": null,
      "start": 136,
      "end": 151
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
            "name": "DOMSFC",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 200
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
                "name": "props",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 213
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 215,
                            "end": 221
                          },
                          "start": 213,
                          "end": 221
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 212,
                        "end": 222
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 223,
                          "end": 224
                        },
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
                        "accessibility": null,
                        "static": false,
                        "start": 223,
                        "end": 233
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 242
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dom",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 245,
                                    "end": 248
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 249,
                                    "end": 252
                                  },
                                  "start": 245,
                                  "end": 252
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Element",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 253,
                                  "end": 260
                                },
                                "start": 245,
                                "end": 260
                              },
                              "typeArguments": null,
                              "start": 245,
                              "end": 260
                            },
                            "start": 245,
                            "end": 262
                          },
                          "start": 243,
                          "end": 262
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 234,
                        "end": 262
                      }
                    ],
                    "start": 211,
                    "end": 263
                  },
                  "start": 209,
                  "end": 263
                },
                "start": 204,
                "end": 263
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "p",
                  "start": 269,
                  "end": 270
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 268,
                "end": 271
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 277
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 279
                    },
                    "optional": false,
                    "computed": false,
                    "start": 272,
                    "end": 279
                  },
                  "start": 271,
                  "end": 280
                },
                {
                  "type": "JSXText",
                  "value": " + ",
                  "raw": " + ",
                  "start": 280,
                  "end": 283
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 289
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 291
                    },
                    "optional": false,
                    "computed": false,
                    "start": 284,
                    "end": 291
                  },
                  "start": 283,
                  "end": 292
                },
                {
                  "type": "JSXText",
                  "value": " = ",
                  "raw": " = ",
                  "start": 292,
                  "end": 295
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 301
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 303
                      },
                      "optional": false,
                      "computed": false,
                      "start": 296,
                      "end": 303
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 311
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 313
                      },
                      "optional": false,
                      "computed": false,
                      "start": 306,
                      "end": 313
                    },
                    "start": 296,
                    "end": 313
                  },
                  "start": 295,
                  "end": 314
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 320
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 329
                    },
                    "optional": false,
                    "computed": false,
                    "start": 315,
                    "end": 329
                  },
                  "start": 314,
                  "end": 330
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "p",
                  "start": 332,
                  "end": 333
                },
                "start": 330,
                "end": 334
              },
              "start": 268,
              "end": 334
            },
            "id": null,
            "generator": false,
            "start": 203,
            "end": 334
          },
          "definite": false,
          "start": 194,
          "end": 334
        }
      ],
      "declare": false,
      "start": 188,
      "end": 335
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DOMClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 351
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "dom",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 370
              },
              "optional": false,
              "computed": false,
              "start": 363,
              "end": 370
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 378
            },
            "optional": false,
            "computed": false,
            "start": 363,
            "end": 378
          },
          "typeArguments": null,
          "start": 363,
          "end": 378
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__domBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 395
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 398,
                "end": 402
              },
              "start": 396,
              "end": 402
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 385,
            "end": 403
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 419
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 435,
                              "end": 436
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 438,
                                "end": 444
                              },
                              "start": 436,
                              "end": 444
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 435,
                            "end": 445
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 446,
                              "end": 447
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 449,
                                "end": 455
                              },
                              "start": 447,
                              "end": 455
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 446,
                            "end": 456
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 457,
                              "end": 465
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "dom",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 468,
                                        "end": 471
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "JSX",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 472,
                                        "end": 475
                                      },
                                      "start": 468,
                                      "end": 475
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Element",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 476,
                                      "end": 483
                                    },
                                    "start": 468,
                                    "end": 483
                                  },
                                  "typeArguments": null,
                                  "start": 468,
                                  "end": 483
                                },
                                "start": 468,
                                "end": 485
                              },
                              "start": 466,
                              "end": 485
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 457,
                            "end": 485
                          }
                        ],
                        "start": 434,
                        "end": 486
                      },
                      "start": 432,
                      "end": 486
                    },
                    "start": 427,
                    "end": 486
                  },
                  "readonly": false,
                  "static": false,
                  "start": 420,
                  "end": 486
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 488,
                "end": 490
              },
              "expression": false,
              "start": 419,
              "end": 490
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 408,
            "end": 490
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 501
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "p",
                          "start": 522,
                          "end": 523
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 521,
                        "end": 524
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 525,
                                "end": 529
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 530,
                                "end": 535
                              },
                              "optional": false,
                              "computed": false,
                              "start": 525,
                              "end": 535
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 536,
                              "end": 537
                            },
                            "optional": false,
                            "computed": false,
                            "start": 525,
                            "end": 537
                          },
                          "start": 524,
                          "end": 538
                        },
                        {
                          "type": "JSXText",
                          "value": " + ",
                          "raw": " + ",
                          "start": 538,
                          "end": 541
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 542,
                                "end": 546
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 547,
                                "end": 552
                              },
                              "optional": false,
                              "computed": false,
                              "start": 542,
                              "end": 552
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 553,
                              "end": 554
                            },
                            "optional": false,
                            "computed": false,
                            "start": 542,
                            "end": 554
                          },
                          "start": 541,
                          "end": 555
                        },
                        {
                          "type": "JSXText",
                          "value": " = ",
                          "raw": " = ",
                          "start": 555,
                          "end": 558
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 559,
                                  "end": 563
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 564,
                                  "end": 569
                                },
                                "optional": false,
                                "computed": false,
                                "start": 559,
                                "end": 569
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 570,
                                "end": 571
                              },
                              "optional": false,
                              "computed": false,
                              "start": 559,
                              "end": 571
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 574,
                                  "end": 578
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 579,
                                  "end": 584
                                },
                                "optional": false,
                                "computed": false,
                                "start": 574,
                                "end": 584
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 585,
                                "end": 586
                              },
                              "optional": false,
                              "computed": false,
                              "start": 574,
                              "end": 586
                            },
                            "start": 559,
                            "end": 586
                          },
                          "start": 558,
                          "end": 587
                        },
                        {
                          "type": "JSXSpreadChild",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 591,
                                "end": 595
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 596,
                                "end": 601
                              },
                              "optional": false,
                              "computed": false,
                              "start": 591,
                              "end": 601
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 602,
                              "end": 610
                            },
                            "optional": false,
                            "computed": false,
                            "start": 591,
                            "end": 610
                          },
                          "start": 587,
                          "end": 611
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "p",
                          "start": 613,
                          "end": 614
                        },
                        "start": 611,
                        "end": 615
                      },
                      "start": 521,
                      "end": 615
                    },
                    "start": 514,
                    "end": 616
                  }
                ],
                "start": 504,
                "end": 622
              },
              "expression": false,
              "start": 501,
              "end": 622
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 495,
            "end": 622
          }
        ],
        "start": 379,
        "end": 624
      },
      "abstract": false,
      "declare": false,
      "start": 337,
      "end": 624
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
            "name": "_tree",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 681
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "DOMSFC",
                "start": 685,
                "end": 691
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 692,
                    "end": 693
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 695,
                      "end": 696
                    },
                    "start": 694,
                    "end": 697
                  },
                  "start": 692,
                  "end": 697
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 698,
                    "end": 699
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 701,
                      "end": 702
                    },
                    "start": 700,
                    "end": 703
                  },
                  "start": 698,
                  "end": 703
                }
              ],
              "selfClosing": false,
              "start": 684,
              "end": 704
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "DOMClass",
                    "start": 705,
                    "end": 713
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "x",
                        "start": 714,
                        "end": 715
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 717,
                          "end": 718
                        },
                        "start": 716,
                        "end": 719
                      },
                      "start": 714,
                      "end": 719
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "y",
                        "start": 720,
                        "end": 721
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 723,
                          "end": 724
                        },
                        "start": 722,
                        "end": 725
                      },
                      "start": 720,
                      "end": 725
                    }
                  ],
                  "selfClosing": true,
                  "start": 704,
                  "end": 728
                },
                "children": [],
                "closingElement": null,
                "start": 704,
                "end": 728
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "DOMClass",
                    "start": 729,
                    "end": 737
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "x",
                        "start": 738,
                        "end": 739
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 741,
                          "end": 742
                        },
                        "start": 740,
                        "end": 743
                      },
                      "start": 738,
                      "end": 743
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "y",
                        "start": 744,
                        "end": 745
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 747,
                          "end": 748
                        },
                        "start": 746,
                        "end": 749
                      },
                      "start": 744,
                      "end": 749
                    }
                  ],
                  "selfClosing": true,
                  "start": 728,
                  "end": 752
                },
                "children": [],
                "closingElement": null,
                "start": 728,
                "end": 752
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "DOMSFC",
                "start": 754,
                "end": 760
              },
              "start": 752,
              "end": 761
            },
            "start": 684,
            "end": 761
          },
          "definite": false,
          "start": 676,
          "end": 761
        }
      ],
      "declare": false,
      "start": 670,
      "end": 761
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
            "name": "_brokenTree",
            "optional": false,
            "typeAnnotation": null,
            "start": 801,
            "end": 812
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MySFC",
                "start": 816,
                "end": 821
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 822,
                    "end": 823
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 825,
                      "end": 826
                    },
                    "start": 824,
                    "end": 827
                  },
                  "start": 822,
                  "end": 827
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 828,
                    "end": 829
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 831,
                      "end": 832
                    },
                    "start": 830,
                    "end": 833
                  },
                  "start": 828,
                  "end": 833
                }
              ],
              "selfClosing": false,
              "start": 815,
              "end": 834
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyClass",
                    "start": 835,
                    "end": 842
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "x",
                        "start": 843,
                        "end": 844
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 846,
                          "end": 847
                        },
                        "start": 845,
                        "end": 848
                      },
                      "start": 843,
                      "end": 848
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "y",
                        "start": 849,
                        "end": 850
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 852,
                          "end": 853
                        },
                        "start": 851,
                        "end": 854
                      },
                      "start": 849,
                      "end": 854
                    }
                  ],
                  "selfClosing": true,
                  "start": 834,
                  "end": 857
                },
                "children": [],
                "closingElement": null,
                "start": 834,
                "end": 857
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyClass",
                    "start": 858,
                    "end": 865
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "x",
                        "start": 866,
                        "end": 867
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 869,
                          "end": 870
                        },
                        "start": 868,
                        "end": 871
                      },
                      "start": 866,
                      "end": 871
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "y",
                        "start": 872,
                        "end": 873
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 875,
                          "end": 876
                        },
                        "start": 874,
                        "end": 877
                      },
                      "start": 872,
                      "end": 877
                    }
                  ],
                  "selfClosing": true,
                  "start": 857,
                  "end": 880
                },
                "children": [],
                "closingElement": null,
                "start": 857,
                "end": 880
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MySFC",
                "start": 882,
                "end": 887
              },
              "start": 880,
              "end": 888
            },
            "start": 815,
            "end": 888
          },
          "definite": false,
          "start": 801,
          "end": 888
        }
      ],
      "declare": false,
      "start": 795,
      "end": 888
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
            "name": "_brokenTree2",
            "optional": false,
            "typeAnnotation": null,
            "start": 952,
            "end": 964
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "DOMSFC",
                "start": 968,
                "end": 974
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 975,
                    "end": 976
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 978,
                      "end": 979
                    },
                    "start": 977,
                    "end": 980
                  },
                  "start": 975,
                  "end": 980
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 981,
                    "end": 982
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 984,
                      "end": 985
                    },
                    "start": 983,
                    "end": 986
                  },
                  "start": 981,
                  "end": 986
                }
              ],
              "selfClosing": false,
              "start": 967,
              "end": 987
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 988,
                  "end": 992
                },
                "start": 987,
                "end": 993
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 994,
                  "end": 998
                },
                "start": 993,
                "end": 999
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "DOMSFC",
                "start": 1001,
                "end": 1007
              },
              "start": 999,
              "end": 1008
            },
            "start": 967,
            "end": 1008
          },
          "definite": false,
          "start": 952,
          "end": 1008
        }
      ],
      "declare": false,
      "start": 946,
      "end": 1008
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 1008
}
```
