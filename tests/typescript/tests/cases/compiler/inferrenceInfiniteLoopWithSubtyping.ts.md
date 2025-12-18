__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjMapReadOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 26
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
                "start": 27,
                "end": 28
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 27,
              "end": 28
            }
          ],
          "start": 26,
          "end": 29
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 40
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
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
                            "start": 49,
                            "end": 55
                          },
                          "start": 47,
                          "end": 55
                        },
                        "start": 44,
                        "end": 55
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 58,
                          "end": 66
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
                                "start": 67,
                                "end": 68
                              },
                              "typeArguments": null,
                              "start": 67,
                              "end": 68
                            }
                          ],
                          "start": 66,
                          "end": 69
                        },
                        "start": 58,
                        "end": 69
                      },
                      "start": 56,
                      "end": 69
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 43,
                    "end": 69
                  }
                ],
                "start": 41,
                "end": 71
              }
            ],
            "start": 40,
            "end": 72
          },
          "start": 32,
          "end": 72
        },
        "declare": false,
        "start": 7,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 73
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thunk",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 91
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
            }
          ],
          "start": 91,
          "end": 94
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                    "start": 104,
                    "end": 105
                  },
                  "typeArguments": null,
                  "start": 104,
                  "end": 105
                },
                "start": 101,
                "end": 105
              },
              "start": 98,
              "end": 105
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "typeArguments": null,
              "start": 109,
              "end": 110
            }
          ],
          "start": 97,
          "end": 110
        },
        "declare": false,
        "start": 81,
        "end": 111
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 74,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComposeOutputTypeDefinition",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 152
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 163
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjectTypeComposer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 182
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 183,
                          "end": 186
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 188,
                          "end": 191
                        }
                      ],
                      "start": 182,
                      "end": 192
                    },
                    "start": 164,
                    "end": 192
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EnumTypeComposer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 211
                    },
                    "typeArguments": null,
                    "start": 195,
                    "end": 211
                  }
                ],
                "start": 164,
                "end": 211
              }
            ],
            "start": 163,
            "end": 212
          },
          "start": 155,
          "end": 212
        },
        "declare": false,
        "start": 120,
        "end": 213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 113,
      "end": 213
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnumTypeComposer",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 244
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
                "name": "setFields",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 265
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
                    "name": "fields",
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
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 283,
                                    "end": 289
                                  },
                                  "start": 281,
                                  "end": 289
                                },
                                "start": 277,
                                "end": 289
                              }
                            ],
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
                                            "start": 300,
                                            "end": 306
                                          },
                                          "start": 298,
                                          "end": 306
                                        },
                                        "start": 295,
                                        "end": 306
                                      }
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 309,
                                        "end": 312
                                      },
                                      "start": 307,
                                      "end": 312
                                    },
                                    "readonly": false,
                                    "static": false,
                                    "accessibility": null,
                                    "start": 294,
                                    "end": 312
                                  }
                                ],
                                "start": 292,
                                "end": 314
                              },
                              "start": 290,
                              "end": 314
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 276,
                            "end": 314
                          }
                        ],
                        "start": 274,
                        "end": 316
                      },
                      "start": 272,
                      "end": 316
                    },
                    "start": 266,
                    "end": 316
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 319,
                    "end": 323
                  },
                  "start": 317,
                  "end": 323
                },
                "body": null,
                "expression": false,
                "start": 265,
                "end": 324
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 249,
              "end": 324
            }
          ],
          "start": 245,
          "end": 326
        },
        "abstract": false,
        "declare": false,
        "start": 222,
        "end": 326
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 215,
      "end": 326
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectTypeComposer",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 359
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TSource",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 367
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 360,
              "end": 367
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 377
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 369,
              "end": 377
            }
          ],
          "start": 359,
          "end": 378
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
                "name": "setFields",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 399
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
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjMapReadOnly",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 408,
                          "end": 422
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Resolver",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 423,
                                "end": 431
                              },
                              "typeArguments": null,
                              "start": 423,
                              "end": 431
                            }
                          ],
                          "start": 422,
                          "end": 432
                        },
                        "start": 408,
                        "end": 432
                      },
                      "start": 406,
                      "end": 432
                    },
                    "start": 400,
                    "end": 432
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 435,
                    "end": 439
                  },
                  "start": 433,
                  "end": 439
                },
                "body": null,
                "expression": false,
                "start": 399,
                "end": 440
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 383,
              "end": 440
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "addResolver",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 462
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
                        "name": "TResolverSource",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 478
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 463,
                      "end": 478
                    }
                  ],
                  "start": 462,
                  "end": 479
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "opts",
                    "optional": false,
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
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 488,
                              "end": 492
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Thunk",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 495,
                                  "end": 500
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ComposeOutputTypeDefinition",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 501,
                                        "end": 528
                                      },
                                      "typeArguments": null,
                                      "start": 501,
                                      "end": 528
                                    }
                                  ],
                                  "start": 500,
                                  "end": 529
                                },
                                "start": 495,
                                "end": 529
                              },
                              "start": 493,
                              "end": 529
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 488,
                            "end": 529
                          }
                        ],
                        "start": 486,
                        "end": 531
                      },
                      "start": 484,
                      "end": 531
                    },
                    "start": 480,
                    "end": 531
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 534,
                    "end": 538
                  },
                  "start": 532,
                  "end": 538
                },
                "body": null,
                "expression": false,
                "start": 462,
                "end": 539
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 444,
              "end": 539
            }
          ],
          "start": 379,
          "end": 541
        },
        "abstract": false,
        "declare": false,
        "start": 335,
        "end": 541
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 328,
      "end": 541
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Resolver",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 564
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
                "name": "wrapArgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 584
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
                        "name": "NewContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 595
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 585,
                      "end": 595
                    }
                  ],
                  "start": 584,
                  "end": 596
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
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
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "argName",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 630,
                                        "end": 636
                                      },
                                      "start": 628,
                                      "end": 636
                                    },
                                    "start": 621,
                                    "end": 636
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Thunk",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 639,
                                      "end": 644
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Readonly",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 645,
                                            "end": 653
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "EnumTypeComposer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 654,
                                                  "end": 670
                                                },
                                                "typeArguments": null,
                                                "start": 654,
                                                "end": 670
                                              }
                                            ],
                                            "start": 653,
                                            "end": 671
                                          },
                                          "start": 645,
                                          "end": 671
                                        }
                                      ],
                                      "start": 644,
                                      "end": 672
                                    },
                                    "start": 639,
                                    "end": 672
                                  },
                                  "start": 637,
                                  "end": 672
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 620,
                                "end": 673
                              }
                            ],
                            "start": 612,
                            "end": 679
                          },
                          "start": 609,
                          "end": 679
                        },
                        "start": 606,
                        "end": 679
                      },
                      "start": 604,
                      "end": 679
                    },
                    "start": 602,
                    "end": 679
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 685,
                    "end": 689
                  },
                  "start": 683,
                  "end": 689
                },
                "body": null,
                "expression": false,
                "start": 584,
                "end": 690
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 569,
              "end": 690
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapType",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 709
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComposeOutputTypeDefinition",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 720,
                              "end": 747
                            },
                            "typeArguments": null,
                            "start": 720,
                            "end": 747
                          },
                          "start": 717,
                          "end": 747
                        },
                        "start": 714,
                        "end": 747
                      },
                      "start": 712,
                      "end": 747
                    },
                    "start": 710,
                    "end": 747
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 750,
                    "end": 754
                  },
                  "start": 748,
                  "end": 754
                },
                "body": null,
                "expression": false,
                "start": 709,
                "end": 755
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 694,
              "end": 755
            }
          ],
          "start": 565,
          "end": 757
        },
        "abstract": false,
        "declare": false,
        "start": 550,
        "end": 757
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 543,
      "end": 757
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 759
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjMapReadOnly",
    "start": 12,
    "end": 26,
    "range": [
      12,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 32,
    "end": 40,
    "range": [
      32,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 44,
    "end": 47,
    "range": [
      44,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 58,
    "end": 66,
    "range": [
      58,
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
    "value": "}",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "Thunk",
    "start": 86,
    "end": 91,
    "range": [
      86,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 101,
    "end": 103,
    "range": [
      101,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 120,
    "end": 124,
    "range": [
      120,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "ComposeOutputTypeDefinition",
    "start": 125,
    "end": 152,
    "range": [
      125,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 155,
    "end": 163,
    "range": [
      155,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjectTypeComposer",
    "start": 164,
    "end": 182,
    "range": [
      164,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 183,
    "end": 186,
    "range": [
      183,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "EnumTypeComposer",
    "start": 195,
    "end": 211,
    "range": [
      195,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 215,
    "end": 221,
    "range": [
      215,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227,
    "range": [
      222,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "EnumTypeComposer",
    "start": 228,
    "end": 244,
    "range": [
      228,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 249,
    "end": 255,
    "range": [
      249,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "setFields",
    "start": 256,
    "end": 265,
    "range": [
      256,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 277,
    "end": 281,
    "range": [
      277,
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
    "type": "Identifier",
    "value": "string",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 295,
    "end": 298,
    "range": [
      295,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 300,
    "end": 306,
    "range": [
      300,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 309,
    "end": 312,
    "range": [
      309,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 319,
    "end": 323,
    "range": [
      319,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 328,
    "end": 334,
    "range": [
      328,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 335,
    "end": 340,
    "range": [
      335,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjectTypeComposer",
    "start": 341,
    "end": 359,
    "range": [
      341,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "TSource",
    "start": 360,
    "end": 367,
    "range": [
      360,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 369,
    "end": 377,
    "range": [
      369,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 383,
    "end": 389,
    "range": [
      383,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "setFields",
    "start": 390,
    "end": 399,
    "range": [
      390,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 400,
    "end": 406,
    "range": [
      400,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjMapReadOnly",
    "start": 408,
    "end": 422,
    "range": [
      408,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "Resolver",
    "start": 423,
    "end": 431,
    "range": [
      423,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 435,
    "end": 439,
    "range": [
      435,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 444,
    "end": 450,
    "range": [
      444,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "addResolver",
    "start": 451,
    "end": 462,
    "range": [
      451,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "TResolverSource",
    "start": 463,
    "end": 478,
    "range": [
      463,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "opts",
    "start": 480,
    "end": 484,
    "range": [
      480,
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
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 488,
    "end": 492,
    "range": [
      488,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "Thunk",
    "start": 495,
    "end": 500,
    "range": [
      495,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "ComposeOutputTypeDefinition",
    "start": 501,
    "end": 528,
    "range": [
      501,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 534,
    "end": 538,
    "range": [
      534,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 550,
    "end": 555,
    "range": [
      550,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "Resolver",
    "start": 556,
    "end": 564,
    "range": [
      556,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 569,
    "end": 575,
    "range": [
      569,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapArgs",
    "start": 576,
    "end": 584,
    "range": [
      576,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "NewContext",
    "start": 585,
    "end": 595,
    "range": [
      585,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 602,
    "end": 604,
    "range": [
      602,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 609,
    "end": 611,
    "range": [
      609,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "argName",
    "start": 621,
    "end": 628,
    "range": [
      621,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 630,
    "end": 636,
    "range": [
      630,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "Thunk",
    "start": 639,
    "end": 644,
    "range": [
      639,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 645,
    "end": 653,
    "range": [
      645,
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
    "value": "EnumTypeComposer",
    "start": 654,
    "end": 670,
    "range": [
      654,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 685,
    "end": 689,
    "range": [
      685,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 694,
    "end": 700,
    "range": [
      694,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapType",
    "start": 701,
    "end": 709,
    "range": [
      701,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 710,
    "end": 712,
    "range": [
      710,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 717,
    "end": 719,
    "range": [
      717,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "ComposeOutputTypeDefinition",
    "start": 720,
    "end": 747,
    "range": [
      720,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 750,
    "end": 754,
    "range": [
      750,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
            "name": "ObjectTypeComposer",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 27
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectTypeComposer",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 27
          },
          "importKind": "value",
          "start": 9,
          "end": 27
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./graphql-compose",
        "raw": "'./graphql-compose'",
        "start": 35,
        "end": 54
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 55
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
            "name": "User",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjectTypeComposer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 95
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 96,
                      "end": 99
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 101,
                      "end": 104
                    }
                  ],
                  "start": 95,
                  "end": 105
                },
                "start": 77,
                "end": 105
              },
              "start": 75,
              "end": 105
            },
            "start": 71,
            "end": 105
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 105
        }
      ],
      "declare": true,
      "start": 57,
      "end": 106
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
            "name": "User",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "addResolver",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 124
          },
          "optional": false,
          "computed": false,
          "start": 108,
          "end": 124
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 133
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "User",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 139
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 129,
                "end": 139
              }
            ],
            "start": 125,
            "end": 175
          }
        ],
        "optional": false,
        "start": 108,
        "end": 176
      },
      "directive": null,
      "start": 108,
      "end": 177
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 177
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjectTypeComposer",
    "start": 9,
    "end": 27,
    "range": [
      9,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 30,
    "end": 34,
    "range": [
      30,
      34
    ]
  },
  {
    "type": "String",
    "value": "'./graphql-compose'",
    "start": 35,
    "end": 54,
    "range": [
      35,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 71,
    "end": 75,
    "range": [
      71,
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
    "value": "ObjectTypeComposer",
    "start": 77,
    "end": 95,
    "range": [
      77,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 96,
    "end": 99,
    "range": [
      96,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 101,
    "end": 104,
    "range": [
      101,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "addResolver",
    "start": 113,
    "end": 124,
    "range": [
      113,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 129,
    "end": 133,
    "range": [
      129,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  }
]
```
