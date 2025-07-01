__ESTREE_TEST__:PASS:
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
