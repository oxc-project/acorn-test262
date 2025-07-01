__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataSnapshot",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 44
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 49,
              "end": 51
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 45,
            "end": 51
          }
        ],
        "start": 44,
        "end": 52
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 62
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  "start": 67,
                  "end": 75
                },
                "start": 63,
                "end": 75
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataSnapshot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 90
                },
                "typeArguments": null,
                "start": 78,
                "end": 90
              },
              "start": 76,
              "end": 90
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 57,
            "end": 91
          }
        ],
        "start": 53,
        "end": 93
      },
      "declare": false,
      "start": 22,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Snapshot",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
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
              "name": "T",
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "DataSnapshot",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 137
          },
          "typeArguments": null,
          "start": 125,
          "end": 137
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
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 147
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 148,
                    "end": 149
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 165
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 172,
                              "end": 173
                            },
                            "typeArguments": null,
                            "start": 172,
                            "end": 173
                          },
                          "start": 166,
                          "end": 173
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 175,
                          "end": 181
                        }
                      ],
                      "start": 165,
                      "end": 182
                    },
                    "start": 158,
                    "end": 182
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 148,
                  "end": 182
                }
              ],
              "start": 147,
              "end": 183
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
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
                      "start": 190,
                      "end": 191
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 191
                  },
                  "start": 188,
                  "end": 191
                },
                "start": 184,
                "end": 191
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Snapshot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 202
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 203,
                          "end": 204
                        },
                        "typeArguments": null,
                        "start": 203,
                        "end": 204
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 206
                        },
                        "typeArguments": null,
                        "start": 205,
                        "end": 206
                      },
                      "start": 203,
                      "end": 207
                    }
                  ],
                  "start": 202,
                  "end": 208
                },
                "start": 194,
                "end": 208
              },
              "start": 192,
              "end": 208
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 142,
            "end": 209
          }
        ],
        "start": 138,
        "end": 211
      },
      "declare": false,
      "start": 95,
      "end": 211
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 245
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
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
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 252
                  },
                  "typeArguments": null,
                  "start": 251,
                  "end": 252
                },
                "start": 251,
                "end": 254
              },
              "start": 249,
              "end": 254
            },
            "accessibility": null,
            "static": false,
            "start": 248,
            "end": 254
          }
        ],
        "start": 246,
        "end": 256
      },
      "declare": false,
      "start": 234,
      "end": 256
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 268
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
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
                  "start": 274,
                  "end": 275
                },
                "typeArguments": null,
                "start": 274,
                "end": 275
              },
              "start": 272,
              "end": 275
            },
            "accessibility": null,
            "static": false,
            "start": 271,
            "end": 275
          }
        ],
        "start": 269,
        "end": 277
      },
      "declare": false,
      "start": 257,
      "end": 277
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 289
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
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
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 296
                  },
                  "typeArguments": null,
                  "start": 295,
                  "end": 296
                },
                "start": 295,
                "end": 298
              },
              "start": 293,
              "end": 298
            },
            "accessibility": null,
            "static": false,
            "start": 292,
            "end": 298
          }
        ],
        "start": 290,
        "end": 300
      },
      "declare": false,
      "start": 278,
      "end": 300
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 312
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 316
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
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 319
                  },
                  "typeArguments": null,
                  "start": 318,
                  "end": 319
                },
                "start": 318,
                "end": 321
              },
              "start": 316,
              "end": 321
            },
            "accessibility": null,
            "static": false,
            "start": 315,
            "end": 321
          }
        ],
        "start": 313,
        "end": 323
      },
      "declare": false,
      "start": 301,
      "end": 323
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 335
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
              "start": 338,
              "end": 339
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
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "typeArguments": null,
                  "start": 341,
                  "end": 342
                },
                "start": 341,
                "end": 344
              },
              "start": 339,
              "end": 344
            },
            "accessibility": null,
            "static": false,
            "start": 338,
            "end": 344
          }
        ],
        "start": 336,
        "end": 346
      },
      "declare": false,
      "start": 324,
      "end": 346
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 358
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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "typeArguments": null,
                "start": 364,
                "end": 365
              },
              "start": 362,
              "end": 365
            },
            "accessibility": null,
            "static": false,
            "start": 361,
            "end": 365
          }
        ],
        "start": 359,
        "end": 367
      },
      "declare": false,
      "start": 347,
      "end": 367
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 379
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
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
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
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 386
                  },
                  "typeArguments": null,
                  "start": 385,
                  "end": 386
                },
                "start": 385,
                "end": 388
              },
              "start": 383,
              "end": 388
            },
            "accessibility": null,
            "static": false,
            "start": 382,
            "end": 388
          }
        ],
        "start": 380,
        "end": 390
      },
      "declare": false,
      "start": 368,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 402
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
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 406
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 408,
                "end": 414
              },
              "start": 406,
              "end": 414
            },
            "accessibility": null,
            "static": false,
            "start": 405,
            "end": 414
          }
        ],
        "start": 403,
        "end": 416
      },
      "declare": false,
      "start": 391,
      "end": 416
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
            "name": "x",
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
            "start": 424,
            "end": 428
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 436
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 452,
                            "end": 453
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 465,
                                  "end": 466
                                },
                                "value": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 494,
                                            "end": 495
                                          },
                                          "value": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
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
                                                      "start": 531,
                                                      "end": 532
                                                    },
                                                    "value": {
                                                      "type": "ArrayExpression",
                                                      "elements": [
                                                        {
                                                          "type": "ObjectExpression",
                                                          "properties": [
                                                            {
                                                              "type": "Property",
                                                              "kind": "init",
                                                              "key": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "g",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 576,
                                                                "end": 577
                                                              },
                                                              "value": {
                                                                "type": "ObjectExpression",
                                                                "properties": [
                                                                  {
                                                                    "type": "Property",
                                                                    "kind": "init",
                                                                    "key": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "h",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 603,
                                                                      "end": 604
                                                                    },
                                                                    "value": {
                                                                      "type": "ArrayExpression",
                                                                      "elements": [
                                                                        {
                                                                          "type": "ObjectExpression",
                                                                          "properties": [],
                                                                          "start": 632,
                                                                          "end": 695
                                                                        }
                                                                      ],
                                                                      "start": 606,
                                                                      "end": 720
                                                                    },
                                                                    "method": false,
                                                                    "shorthand": false,
                                                                    "computed": false,
                                                                    "optional": false,
                                                                    "start": 603,
                                                                    "end": 720
                                                                  }
                                                                ],
                                                                "start": 579,
                                                                "end": 743
                                                              },
                                                              "method": false,
                                                              "shorthand": false,
                                                              "computed": false,
                                                              "optional": false,
                                                              "start": 576,
                                                              "end": 743
                                                            }
                                                          ],
                                                          "start": 554,
                                                          "end": 764
                                                        }
                                                      ],
                                                      "start": 534,
                                                      "end": 783
                                                    },
                                                    "method": false,
                                                    "shorthand": false,
                                                    "computed": false,
                                                    "optional": false,
                                                    "start": 531,
                                                    "end": 783
                                                  }
                                                ],
                                                "start": 513,
                                                "end": 800
                                              }
                                            ],
                                            "start": 497,
                                            "end": 815
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 494,
                                          "end": 815
                                        }
                                      ],
                                      "start": 480,
                                      "end": 828
                                    }
                                  ],
                                  "start": 468,
                                  "end": 839
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 465,
                                "end": 839
                              }
                            ],
                            "start": 455,
                            "end": 848
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 452,
                          "end": 848
                        }
                      ],
                      "start": 444,
                      "end": 855
                    }
                  ],
                  "start": 438,
                  "end": 860
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 435,
                "end": 860
              }
            ],
            "start": 431,
            "end": 863
          },
          "definite": false,
          "start": 424,
          "end": 863
        }
      ],
      "declare": false,
      "start": 418,
      "end": 864
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 897,
                          "end": 903
                        },
                        "start": 897,
                        "end": 905
                      },
                      "start": 897,
                      "end": 907
                    },
                    "start": 897,
                    "end": 909
                  },
                  "start": 897,
                  "end": 911
                },
                "start": 897,
                "end": 913
              },
              "start": 895,
              "end": 913
            },
            "start": 893,
            "end": 913
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42",
                                "start": 921,
                                "end": 923
                              }
                            ],
                            "start": 920,
                            "end": 924
                          }
                        ],
                        "start": 919,
                        "end": 925
                      }
                    ],
                    "start": 918,
                    "end": 926
                  }
                ],
                "start": 917,
                "end": 927
              }
            ],
            "start": 916,
            "end": 928
          },
          "definite": false,
          "start": 893,
          "end": 928
        }
      ],
      "declare": false,
      "start": 887,
      "end": 929
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSStringKeyword",
                                    "start": 940,
                                    "end": 946
                                  },
                                  "start": 940,
                                  "end": 948
                                },
                                "start": 940,
                                "end": 950
                              },
                              "start": 940,
                              "end": 952
                            },
                            "start": 940,
                            "end": 954
                          },
                          "start": 940,
                          "end": 956
                        },
                        "start": 940,
                        "end": 958
                      },
                      "start": 940,
                      "end": 960
                    },
                    "start": 940,
                    "end": 962
                  },
                  "start": 940,
                  "end": 964
                },
                "start": 940,
                "end": 966
              },
              "start": 938,
              "end": 966
            },
            "start": 936,
            "end": 966
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "ArrayExpression",
                                                "elements": [
                                                  {
                                                    "type": "Literal",
                                                    "value": 42,
                                                    "raw": "42",
                                                    "start": 979,
                                                    "end": 981
                                                  }
                                                ],
                                                "start": 978,
                                                "end": 982
                                              }
                                            ],
                                            "start": 977,
                                            "end": 983
                                          }
                                        ],
                                        "start": 976,
                                        "end": 984
                                      }
                                    ],
                                    "start": 975,
                                    "end": 985
                                  }
                                ],
                                "start": 974,
                                "end": 986
                              }
                            ],
                            "start": 973,
                            "end": 987
                          }
                        ],
                        "start": 972,
                        "end": 988
                      }
                    ],
                    "start": 971,
                    "end": 989
                  }
                ],
                "start": 970,
                "end": 990
              }
            ],
            "start": 969,
            "end": 991
          },
          "definite": false,
          "start": 936,
          "end": 991
        }
      ],
      "declare": false,
      "start": 930,
      "end": 992
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 992
}
```
