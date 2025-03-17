__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 759,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 73,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 73,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 26,
          "name": "ObjMapReadOnly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 26,
          "end": 29,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 28,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 32,
          "end": 72,
          "typeName": {
            "type": "Identifier",
            "start": 32,
            "end": 40,
            "name": "Readonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 40,
            "end": 72,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 41,
                "end": 71,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 43,
                    "end": 69,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 44,
                        "end": 55,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 47,
                          "end": 55,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 49,
                            "end": 55
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 58,
                        "end": 69,
                        "typeName": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 66,
                          "name": "Readonly",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 66,
                          "end": 69,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 67,
                              "end": 68,
                              "typeName": {
                                "type": "Identifier",
                                "start": 67,
                                "end": 68,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 111,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 81,
        "end": 111,
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 91,
          "name": "Thunk",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 91,
          "end": 94,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 92,
              "end": 93,
              "name": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 97,
          "end": 110,
          "types": [
            {
              "type": "TSFunctionType",
              "start": 98,
              "end": 105,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 105,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSTypeReference",
              "start": 109,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 113,
      "end": 213,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 120,
        "end": 213,
        "id": {
          "type": "Identifier",
          "start": 125,
          "end": 152,
          "name": "ComposeOutputTypeDefinition",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 155,
          "end": 212,
          "typeName": {
            "type": "Identifier",
            "start": 155,
            "end": 163,
            "name": "Readonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 163,
            "end": 212,
            "params": [
              {
                "type": "TSUnionType",
                "start": 164,
                "end": 211,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 164,
                    "end": 192,
                    "typeName": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 182,
                      "name": "ObjectTypeComposer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 182,
                      "end": 192,
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
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 211,
                      "name": "EnumTypeComposer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 215,
      "end": 326,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 222,
        "end": 326,
        "id": {
          "type": "Identifier",
          "start": 228,
          "end": 244,
          "name": "EnumTypeComposer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 245,
          "end": 326,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 249,
              "end": 324,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 256,
                "end": 265,
                "name": "setFields",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 265,
                "end": 324,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 266,
                    "end": 316,
                    "name": "fields",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 272,
                      "end": 316,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 274,
                        "end": 316,
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "start": 276,
                            "end": 314,
                            "parameters": [
                              {
                                "type": "Identifier",
                                "start": 277,
                                "end": 289,
                                "name": "name",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 281,
                                  "end": 289,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 283,
                                    "end": 289
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 290,
                              "end": 314,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 292,
                                "end": 314,
                                "members": [
                                  {
                                    "type": "TSIndexSignature",
                                    "start": 294,
                                    "end": 312,
                                    "parameters": [
                                      {
                                        "type": "Identifier",
                                        "start": 295,
                                        "end": 306,
                                        "name": "key",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 298,
                                          "end": 306,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 300,
                                            "end": 306
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 307,
                                      "end": 312,
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 309,
                                        "end": 312
                                      }
                                    },
                                    "readonly": false,
                                    "static": false,
                                    "accessibility": null
                                  }
                                ]
                              }
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 317,
                  "end": 323,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 319,
                    "end": 323
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 328,
      "end": 541,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 335,
        "end": 541,
        "id": {
          "type": "Identifier",
          "start": 341,
          "end": 359,
          "name": "ObjectTypeComposer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 379,
          "end": 541,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 383,
              "end": 440,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 390,
                "end": 399,
                "name": "setFields",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 399,
                "end": 440,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 400,
                    "end": 432,
                    "name": "fields",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 406,
                      "end": 432,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 408,
                        "end": 432,
                        "typeName": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 422,
                          "name": "ObjMapReadOnly",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 422,
                          "end": 432,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 423,
                              "end": 431,
                              "typeName": {
                                "type": "Identifier",
                                "start": 423,
                                "end": 431,
                                "name": "Resolver",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 433,
                  "end": 439,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 435,
                    "end": 439
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 444,
              "end": 539,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 451,
                "end": 462,
                "name": "addResolver",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 462,
                "end": 539,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 480,
                    "end": 531,
                    "name": "opts",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 484,
                      "end": 531,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 486,
                        "end": 531,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 488,
                            "end": 529,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 488,
                              "end": 492,
                              "name": "type",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 493,
                              "end": 529,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 495,
                                "end": 529,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 495,
                                  "end": 500,
                                  "name": "Thunk",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 500,
                                  "end": 529,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 501,
                                      "end": 528,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 501,
                                        "end": 528,
                                        "name": "ComposeOutputTypeDefinition",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 462,
                  "end": 479,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 463,
                      "end": 478,
                      "name": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 478,
                        "name": "TResolverSource",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 532,
                  "end": 538,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 534,
                    "end": 538
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 359,
          "end": 378,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 360,
              "end": 367,
              "name": {
                "type": "Identifier",
                "start": 360,
                "end": 367,
                "name": "TSource",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 369,
              "end": 377,
              "name": {
                "type": "Identifier",
                "start": 369,
                "end": 377,
                "name": "TContext",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 543,
      "end": 757,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 550,
        "end": 757,
        "id": {
          "type": "Identifier",
          "start": 556,
          "end": 564,
          "name": "Resolver",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 565,
          "end": 757,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 569,
              "end": 690,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 576,
                "end": 584,
                "name": "wrapArgs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 584,
                "end": 690,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 602,
                    "end": 679,
                    "name": "cb",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 604,
                      "end": 679,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 606,
                        "end": 679,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 609,
                          "end": 679,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 612,
                            "end": 679,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 620,
                                "end": 673,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 621,
                                    "end": 636,
                                    "name": "argName",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 628,
                                      "end": 636,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 630,
                                        "end": 636
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 637,
                                  "end": 672,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 639,
                                    "end": 672,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 639,
                                      "end": 644,
                                      "name": "Thunk",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 644,
                                      "end": 672,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 645,
                                          "end": 671,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 645,
                                            "end": 653,
                                            "name": "Readonly",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 653,
                                            "end": 671,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 654,
                                                "end": 670,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 654,
                                                  "end": 670,
                                                  "name": "EnumTypeComposer",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": null
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 584,
                  "end": 596,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 585,
                      "end": 595,
                      "name": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 595,
                        "name": "NewContext",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 683,
                  "end": 689,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 685,
                    "end": 689
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 694,
              "end": 755,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 701,
                "end": 709,
                "name": "wrapType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 709,
                "end": 755,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 710,
                    "end": 747,
                    "name": "cb",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 712,
                      "end": 747,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 714,
                        "end": 747,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 717,
                          "end": 747,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 720,
                            "end": 747,
                            "typeName": {
                              "type": "Identifier",
                              "start": 720,
                              "end": 747,
                              "name": "ComposeOutputTypeDefinition",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 748,
                  "end": 754,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 750,
                    "end": 754
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 27,
            "name": "ObjectTypeComposer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 27,
            "name": "ObjectTypeComposer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 54,
        "value": "./graphql-compose",
        "raw": "'./graphql-compose'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 105,
            "name": "User",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 105,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 95,
                  "name": "ObjectTypeComposer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 95,
                  "end": 105,
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
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 177,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 176,
        "callee": {
          "type": "MemberExpression",
          "start": 108,
          "end": 124,
          "object": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "name": "User",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 124,
            "name": "addResolver",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 125,
            "end": 175,
            "properties": [
              {
                "type": "Property",
                "start": 129,
                "end": 139,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 133,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 139,
                  "name": "User",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
