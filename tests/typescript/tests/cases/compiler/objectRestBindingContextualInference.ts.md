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
        "name": "ImageHolder",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 51
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 62,
              "end": 68
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 52,
            "end": 68
          }
        ],
        "start": 51,
        "end": 69
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 78
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "typeArguments": null,
          "start": 82,
          "end": 83
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 86,
          "end": 92
        },
        "optional": false,
        "readonly": null,
        "start": 72,
        "end": 95
      },
      "declare": false,
      "start": 35,
      "end": 96
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetupImageRefs",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 117
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 119
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 128,
              "end": 134
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 118,
            "end": 134
          }
        ],
        "start": 117,
        "end": 135
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 144
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "typeArguments": null,
          "start": 148,
          "end": 149
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "File",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 156
          },
          "typeArguments": null,
          "start": 152,
          "end": 156
        },
        "optional": false,
        "readonly": null,
        "start": 138,
        "end": 159
      },
      "declare": false,
      "start": 98,
      "end": 160
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetupImages",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 178
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 179,
            "end": 195
          }
        ],
        "start": 178,
        "end": 196
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SetupImageRefs",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 213
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 215
                  },
                  "typeArguments": null,
                  "start": 214,
                  "end": 215
                }
              ],
              "start": 213,
              "end": 216
            },
            "start": 199,
            "end": 216
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
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 230
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 240,
                              "end": 244
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 246,
                                  "end": 247
                                },
                                "typeArguments": null,
                                "start": 246,
                                "end": 247
                              },
                              "start": 244,
                              "end": 247
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 240,
                            "end": 247
                          }
                        ],
                        "start": 238,
                        "end": 249
                      },
                      "start": 235,
                      "end": 249
                    },
                    "start": 232,
                    "end": 249
                  },
                  "start": 230,
                  "end": 249
                },
                "accessibility": null,
                "static": false,
                "start": 223,
                "end": 250
              }
            ],
            "start": 219,
            "end": 252
          }
        ],
        "start": 199,
        "end": 252
      },
      "declare": false,
      "start": 162,
      "end": 253
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 278
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
              },
              "start": 287,
              "end": 295
            },
            "accessibility": null,
            "static": false,
            "start": 283,
            "end": 296
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "image",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 304
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              },
              "start": 304,
              "end": 312
            },
            "accessibility": null,
            "static": false,
            "start": 299,
            "end": 313
          }
        ],
        "start": 279,
        "end": 315
      },
      "declare": false,
      "start": 255,
      "end": 315
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setupImages",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 345
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
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 347
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImageHolder",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 367
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 368,
                      "end": 369
                    },
                    "typeArguments": null,
                    "start": 368,
                    "end": 369
                  }
                ],
                "start": 367,
                "end": 370
              },
              "start": 356,
              "end": 370
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 346,
            "end": 370
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 373
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 382,
              "end": 388
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 372,
            "end": 388
          }
        ],
        "start": 345,
        "end": 389
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
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
          "start": 393,
          "end": 400
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "keys",
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
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 411
                },
                "typeArguments": null,
                "start": 410,
                "end": 411
              },
              "start": 410,
              "end": 413
            },
            "start": 408,
            "end": 413
          },
          "start": 404,
          "end": 413
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SetupImages",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 428
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 430
                },
                "typeArguments": null,
                "start": 429,
                "end": 430
              }
            ],
            "start": 428,
            "end": 431
          },
          "start": 417,
          "end": 431
        },
        "start": 415,
        "end": 431
      },
      "body": null,
      "expression": false,
      "start": 317,
      "end": 432
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 467
                },
                "typeArguments": null,
                "start": 454,
                "end": 467
              },
              "start": 452,
              "end": 467
            },
            "start": 448,
            "end": 467
          },
          "init": null,
          "definite": false,
          "start": 448,
          "end": 467
        }
      ],
      "declare": true,
      "start": 434,
      "end": 468
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 485
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prepare",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 485
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 478,
                "end": 485
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 494
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 487,
                "end": 494
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 496
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "setupImages",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 510
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 515
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "image",
                    "raw": "\"image\"",
                    "start": 518,
                    "end": 525
                  }
                ],
                "start": 517,
                "end": 526
              }
            ],
            "optional": false,
            "start": 499,
            "end": 527
          },
          "definite": false,
          "start": 476,
          "end": 527
        }
      ],
      "declare": false,
      "start": 470,
      "end": 528
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 528
}
```
