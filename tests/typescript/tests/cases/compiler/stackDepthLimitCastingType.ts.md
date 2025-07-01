__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JQueryXHR",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 40
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 41,
              "end": 44
            },
            "declare": false,
            "start": 21,
            "end": 44
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Model",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 60
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
                    "start": 61,
                    "end": 62
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSAnyKeyword",
                    "start": 65,
                    "end": 68
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 61,
                  "end": 68
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 71
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 74,
                    "end": 76
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 70,
                  "end": 76
                }
              ],
              "start": 60,
              "end": 77
            },
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
                    "name": "initialize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 98
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "attributes",
                        "optional": true,
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
                              "start": 112,
                              "end": 113
                            },
                            "typeArguments": null,
                            "start": 112,
                            "end": 113
                          },
                          "start": 110,
                          "end": 113
                        },
                        "start": 99,
                        "end": 113
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CombinedModelConstructorOptions",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 125,
                              "end": 156
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 157,
                                    "end": 158
                                  },
                                  "typeArguments": null,
                                  "start": 157,
                                  "end": 158
                                },
                                {
                                  "type": "TSThisType",
                                  "start": 160,
                                  "end": 164
                                }
                              ],
                              "start": 156,
                              "end": 165
                            },
                            "start": 125,
                            "end": 165
                          },
                          "start": 123,
                          "end": 165
                        },
                        "start": 115,
                        "end": 165
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 168,
                        "end": 172
                      },
                      "start": 166,
                      "end": 172
                    },
                    "body": null,
                    "expression": false,
                    "start": 98,
                    "end": 173
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 88,
                  "end": 173
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fetch",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 187
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 198,
                            "end": 201
                          },
                          "start": 196,
                          "end": 201
                        },
                        "start": 188,
                        "end": 201
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JQueryXHR",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 213
                        },
                        "typeArguments": null,
                        "start": 204,
                        "end": 213
                      },
                      "start": 202,
                      "end": 213
                    },
                    "body": null,
                    "expression": false,
                    "start": 187,
                    "end": 214
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 182,
                  "end": 214
                }
              ],
              "start": 78,
              "end": 220
            },
            "abstract": false,
            "declare": false,
            "start": 49,
            "end": 220
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ModelConstructorOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 258
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TModel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 265
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 279
                    },
                    "typeArguments": null,
                    "start": 274,
                    "end": 279
                  },
                  "default": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 287
                    },
                    "typeArguments": null,
                    "start": 282,
                    "end": 287
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 259,
                  "end": 287
                }
              ],
              "start": 258,
              "end": 288
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "collection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 309
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Collection",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 322
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TModel",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 323,
                              "end": 329
                            },
                            "typeArguments": null,
                            "start": 323,
                            "end": 329
                          }
                        ],
                        "start": 322,
                        "end": 330
                      },
                      "start": 312,
                      "end": 330
                    },
                    "start": 310,
                    "end": 330
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 299,
                  "end": 331
                }
              ],
              "start": 289,
              "end": 337
            },
            "declare": false,
            "start": 225,
            "end": 337
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 358
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TModel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 365
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 374,
                      "end": 379
                    },
                    "typeArguments": null,
                    "start": 374,
                    "end": 379
                  },
                  "default": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 382,
                      "end": 387
                    },
                    "typeArguments": null,
                    "start": 382,
                    "end": 387
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 359,
                  "end": 387
                }
              ],
              "start": 358,
              "end": 388
            },
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
                    "name": "without",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 406
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
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
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 416
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
                                "name": "TModel",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 418,
                                "end": 424
                              },
                              "typeArguments": null,
                              "start": 418,
                              "end": 424
                            },
                            "start": 418,
                            "end": 426
                          },
                          "start": 416,
                          "end": 426
                        },
                        "value": null,
                        "start": 407,
                        "end": 426
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TModel",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 429,
                            "end": 435
                          },
                          "typeArguments": null,
                          "start": 429,
                          "end": 435
                        },
                        "start": 429,
                        "end": 437
                      },
                      "start": 427,
                      "end": 437
                    },
                    "body": null,
                    "expression": false,
                    "start": 406,
                    "end": 438
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 399,
                  "end": 438
                }
              ],
              "start": 389,
              "end": 444
            },
            "abstract": false,
            "declare": false,
            "start": 342,
            "end": 444
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CombinedModelConstructorOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 485
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 486,
                    "end": 487
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 486,
                  "end": 487
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 490
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 499,
                      "end": 504
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 505,
                          "end": 508
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 510,
                            "end": 511
                          },
                          "typeArguments": null,
                          "start": 510,
                          "end": 511
                        }
                      ],
                      "start": 504,
                      "end": 512
                    },
                    "start": 499,
                    "end": 512
                  },
                  "default": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 520
                    },
                    "typeArguments": null,
                    "start": 515,
                    "end": 520
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 489,
                  "end": 520
                }
              ],
              "start": 485,
              "end": 521
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ModelConstructorOptions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 547
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 548,
                          "end": 549
                        },
                        "typeArguments": null,
                        "start": 548,
                        "end": 549
                      }
                    ],
                    "start": 547,
                    "end": 550
                  },
                  "start": 524,
                  "end": 550
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 554
                  },
                  "typeArguments": null,
                  "start": 553,
                  "end": 554
                }
              ],
              "start": 524,
              "end": 554
            },
            "declare": false,
            "start": 449,
            "end": 555
          }
        ],
        "start": 15,
        "end": 557
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 557
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 577
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 577
          },
          "exportKind": "value",
          "start": 572,
          "end": 577
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 559,
      "end": 580
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 601,
        "end": 609
      },
      "start": 581,
      "end": 610
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 611
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 20
          },
          "start": 7,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "backbone",
        "raw": "\"backbone\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "backbone",
        "raw": "\"backbone\"",
        "start": 53,
        "end": 63
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ModelWithCache",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 94
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Model",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 108
                },
                "typeArguments": null,
                "start": 103,
                "end": 108
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
                    "name": "fetch",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 124
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 135,
                          "end": 138
                        },
                        "start": 133,
                        "end": 138
                      },
                      "start": 125,
                      "end": 138
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JQueryXHR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 150
                      },
                      "typeArguments": null,
                      "start": 141,
                      "end": 150
                    },
                    "start": 139,
                    "end": 150
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 119,
                  "end": 151
                }
              ],
              "start": 109,
              "end": 157
            },
            "declare": false,
            "start": 70,
            "end": 157
          }
        ],
        "start": 64,
        "end": 159
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 38,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 160,
      "end": 170
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BackboneFetchCache",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 209
      },
      "start": 171,
      "end": 210
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 211
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 20
          },
          "start": 7,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "backbone",
        "raw": "\"backbone\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "BackboneFetchCache",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 68
          },
          "start": 45,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "backbone-fetch-cache",
        "raw": "\"backbone-fetch-cache\"",
        "start": 74,
        "end": 96
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 97
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
            "name": "hoge",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 110
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Backbone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 125
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Model",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 131
                },
                "optional": false,
                "computed": false,
                "start": 117,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [],
              "start": 113,
              "end": 133
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Backbone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 145
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ModelWithCache",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 160
                },
                "start": 137,
                "end": 160
              },
              "typeArguments": null,
              "start": 137,
              "end": 160
            },
            "start": 113,
            "end": 160
          },
          "definite": false,
          "start": 106,
          "end": 160
        }
      ],
      "declare": false,
      "start": 100,
      "end": 161
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
            "name": "hoge",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 166
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fetch",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 172
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 172
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 173,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 181,
              "end": 184
            },
            "start": 173,
            "end": 184
          }
        ],
        "optional": false,
        "start": 162,
        "end": 185
      },
      "directive": null,
      "start": 162,
      "end": 186
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 186
}
```
