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
          "name": "TypeScript",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 35
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 56
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 57,
                "end": 60
              },
              "abstract": false,
              "declare": false,
              "start": 40,
              "end": 60
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSignatureSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 88
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 91
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 90,
                    "end": 91
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 93
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 92,
                    "end": 93
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 95
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 94,
                    "end": 95
                  }
                ],
                "start": 89,
                "end": 96
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 115
              },
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
                      "name": "addSpecialization",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 144
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 146
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 145,
                            "end": 146
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 147,
                              "end": 148
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 147,
                            "end": 148
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 149,
                              "end": 150
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 149,
                            "end": 150
                          }
                        ],
                        "start": 144,
                        "end": 151
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "signature",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PullSignatureSymbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 163,
                                "end": 182
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 183,
                                      "end": 184
                                    },
                                    "typeArguments": null,
                                    "start": 183,
                                    "end": 184
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 185,
                                      "end": 186
                                    },
                                    "typeArguments": null,
                                    "start": 185,
                                    "end": 186
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 187,
                                      "end": 188
                                    },
                                    "typeArguments": null,
                                    "start": 187,
                                    "end": 188
                                  }
                                ],
                                "start": 182,
                                "end": 189
                              },
                              "start": 163,
                              "end": 189
                            },
                            "start": 161,
                            "end": 189
                          },
                          "start": 152,
                          "end": 189
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "typeArguments",
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
                                  "name": "PullTypeSymbol",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 220
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSAnyKeyword",
                                      "start": 221,
                                      "end": 224
                                    },
                                    {
                                      "type": "TSAnyKeyword",
                                      "start": 225,
                                      "end": 228
                                    },
                                    {
                                      "type": "TSAnyKeyword",
                                      "start": 229,
                                      "end": 232
                                    }
                                  ],
                                  "start": 220,
                                  "end": 233
                                },
                                "start": 206,
                                "end": 233
                              },
                              "start": 206,
                              "end": 235
                            },
                            "start": 204,
                            "end": 235
                          },
                          "start": 191,
                          "end": 235
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 238,
                          "end": 242
                        },
                        "start": 236,
                        "end": 242
                      },
                      "body": null,
                      "expression": false,
                      "start": 144,
                      "end": 243
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 120,
                    "end": 243
                  }
                ],
                "start": 116,
                "end": 247
              },
              "abstract": false,
              "declare": false,
              "start": 63,
              "end": 247
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 270
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 275
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 274,
                    "end": 275
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 276,
                      "end": 277
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 276,
                    "end": 277
                  }
                ],
                "start": 271,
                "end": 278
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 297
              },
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
                      "name": "findTypeParameter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 328
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 329,
                              "end": 330
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 329,
                            "end": 330
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 332
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 331,
                            "end": 332
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 333,
                              "end": 334
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 333,
                            "end": 334
                          }
                        ],
                        "start": 328,
                        "end": 335
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 342,
                              "end": 348
                            },
                            "start": 340,
                            "end": 348
                          },
                          "start": 336,
                          "end": 348
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PullTypeParameterSymbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 351,
                            "end": 374
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 375,
                                  "end": 376
                                },
                                "typeArguments": null,
                                "start": 375,
                                "end": 376
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 377,
                                  "end": 378
                                },
                                "typeArguments": null,
                                "start": 377,
                                "end": 378
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 379,
                                  "end": 380
                                },
                                "typeArguments": null,
                                "start": 379,
                                "end": 380
                              }
                            ],
                            "start": 374,
                            "end": 381
                          },
                          "start": 351,
                          "end": 381
                        },
                        "start": 349,
                        "end": 381
                      },
                      "body": null,
                      "expression": false,
                      "start": 328,
                      "end": 382
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 304,
                    "end": 382
                  }
                ],
                "start": 298,
                "end": 386
              },
              "abstract": false,
              "declare": false,
              "start": 250,
              "end": 386
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullTypeParameterSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 418
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 421
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 420,
                    "end": 421
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 423
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 422,
                    "end": 423
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 424,
                      "end": 425
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 424,
                    "end": 425
                  }
                ],
                "start": 419,
                "end": 426
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 449
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 450,
                "end": 455
              },
              "abstract": false,
              "declare": false,
              "start": 389,
              "end": 455
            }
          ],
          "start": 36,
          "end": 457
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 7,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 457
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 459
}
```
