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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 73,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 26,
          "decorators": [],
          "name": "ObjMapReadOnly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 32,
          "end": 72,
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
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 44,
                        "end": 55,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 47,
                          "end": 55,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 49,
                            "end": 55
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 58,
                        "end": 69,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 66,
                          "end": 69,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 67,
                              "end": 68,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 67,
                                "end": 68,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 66,
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 32,
            "end": 40,
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null
          }
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 111,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 81,
        "end": 111,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 91,
          "decorators": [],
          "name": "Thunk",
          "optional": false,
          "typeAnnotation": null
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 105,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSTypeReference",
              "start": 109,
              "end": 110,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 113,
      "end": 213,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 120,
        "end": 213,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 125,
          "end": 152,
          "decorators": [],
          "name": "ComposeOutputTypeDefinition",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 155,
          "end": 212,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 182,
                      "decorators": [],
                      "name": "ObjectTypeComposer",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 211,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 211,
                      "decorators": [],
                      "name": "EnumTypeComposer",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 155,
            "end": 163,
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 215,
      "end": 326,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 222,
        "end": 326,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 245,
          "end": 326,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 249,
              "end": 324,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 256,
                "end": 265,
                "decorators": [],
                "name": "setFields",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 265,
                "end": 324,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 266,
                    "end": 316,
                    "decorators": [],
                    "name": "fields",
                    "optional": false,
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
                            "accessibility": null,
                            "parameters": [
                              {
                                "type": "Identifier",
                                "start": 277,
                                "end": 289,
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 281,
                                  "end": 289,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 283,
                                    "end": 289
                                  }
                                }
                              }
                            ],
                            "readonly": false,
                            "static": false,
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
                                    "accessibility": null,
                                    "parameters": [
                                      {
                                        "type": "Identifier",
                                        "start": 295,
                                        "end": 306,
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 298,
                                          "end": 306,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 300,
                                            "end": 306
                                          }
                                        }
                                      }
                                    ],
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 307,
                                      "end": 312,
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 309,
                                        "end": 312
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 317,
                  "end": 323,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 319,
                    "end": 323
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 228,
          "end": 244,
          "decorators": [],
          "name": "EnumTypeComposer",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 328,
      "end": 541,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 335,
        "end": 541,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 379,
          "end": 541,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 383,
              "end": 440,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 390,
                "end": 399,
                "decorators": [],
                "name": "setFields",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 399,
                "end": 440,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 400,
                    "end": 432,
                    "decorators": [],
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 406,
                      "end": 432,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 408,
                        "end": 432,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 422,
                          "end": 432,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 423,
                              "end": 431,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 423,
                                "end": 431,
                                "decorators": [],
                                "name": "Resolver",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 422,
                          "decorators": [],
                          "name": "ObjMapReadOnly",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 433,
                  "end": 439,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 435,
                    "end": 439
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 444,
              "end": 539,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 451,
                "end": 462,
                "decorators": [],
                "name": "addResolver",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 462,
                "end": 539,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 480,
                    "end": 531,
                    "decorators": [],
                    "name": "opts",
                    "optional": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 488,
                              "end": 492,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 493,
                              "end": 529,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 495,
                                "end": 529,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 500,
                                  "end": 529,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 501,
                                      "end": 528,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 501,
                                        "end": 528,
                                        "decorators": [],
                                        "name": "ComposeOutputTypeDefinition",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 495,
                                  "end": 500,
                                  "decorators": [],
                                  "name": "Thunk",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 532,
                  "end": 538,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 534,
                    "end": 538
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 462,
                  "end": 479,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 463,
                      "end": 478,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 478,
                        "decorators": [],
                        "name": "TResolverSource",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 341,
          "end": 359,
          "decorators": [],
          "name": "ObjectTypeComposer",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 359,
          "end": 378,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 360,
              "end": 367,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 360,
                "end": 367,
                "decorators": [],
                "name": "TSource",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 369,
              "end": 377,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 369,
                "end": 377,
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 543,
      "end": 757,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 550,
        "end": 757,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 565,
          "end": 757,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 569,
              "end": 690,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 576,
                "end": 584,
                "decorators": [],
                "name": "wrapArgs",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 584,
                "end": 690,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 602,
                    "end": 679,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 604,
                      "end": 679,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 606,
                        "end": 679,
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
                                "accessibility": null,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 621,
                                    "end": 636,
                                    "decorators": [],
                                    "name": "argName",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 628,
                                      "end": 636,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 630,
                                        "end": 636
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 637,
                                  "end": 672,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 639,
                                    "end": 672,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 644,
                                      "end": 672,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 645,
                                          "end": 671,
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 653,
                                            "end": 671,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 654,
                                                "end": 670,
                                                "typeArguments": null,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 654,
                                                  "end": 670,
                                                  "decorators": [],
                                                  "name": "EnumTypeComposer",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            ]
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 645,
                                            "end": 653,
                                            "decorators": [],
                                            "name": "Readonly",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 639,
                                      "end": 644,
                                      "decorators": [],
                                      "name": "Thunk",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 683,
                  "end": 689,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 685,
                    "end": 689
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 584,
                  "end": 596,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 585,
                      "end": 595,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 595,
                        "decorators": [],
                        "name": "NewContext",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 694,
              "end": 755,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 701,
                "end": 709,
                "decorators": [],
                "name": "wrapType",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 709,
                "end": 755,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 710,
                    "end": 747,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 712,
                      "end": 747,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 714,
                        "end": 747,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 717,
                          "end": 747,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 720,
                            "end": 747,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 720,
                              "end": 747,
                              "decorators": [],
                              "name": "ComposeOutputTypeDefinition",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 748,
                  "end": 754,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 750,
                    "end": 754
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 556,
          "end": 564,
          "decorators": [],
          "name": "Resolver",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 177,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 54,
        "raw": "'./graphql-compose'",
        "value": "./graphql-compose"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 27,
            "decorators": [],
            "name": "ObjectTypeComposer",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 27,
            "decorators": [],
            "name": "ObjectTypeComposer",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 105,
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 105,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 95,
                  "decorators": [],
                  "name": "ObjectTypeComposer",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 177,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 176,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 133,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 139,
                  "decorators": [],
                  "name": "User",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 108,
          "end": 124,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 124,
            "decorators": [],
            "name": "addResolver",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
