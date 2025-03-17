__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 611,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 557,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 557,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 44,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 40,
              "name": "JQueryXHR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 44,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 49,
            "end": 220,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "name": "Model",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 220,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 88,
                  "end": 173,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 98,
                    "name": "initialize",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 98,
                    "end": 173,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 99,
                        "end": 113,
                        "name": "attributes",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 110,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 112,
                            "end": 113,
                            "typeName": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 113,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      {
                        "type": "Identifier",
                        "start": 115,
                        "end": 165,
                        "name": "options",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 123,
                          "end": 165,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 125,
                            "end": 165,
                            "typeName": {
                              "type": "Identifier",
                              "start": 125,
                              "end": 156,
                              "name": "CombinedModelConstructorOptions",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 156,
                              "end": 165,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 157,
                                  "end": 158,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 157,
                                    "end": 158,
                                    "name": "E",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSThisType",
                                  "start": 160,
                                  "end": 164
                                }
                              ]
                            }
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 166,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 168,
                        "end": 172
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 182,
                  "end": 214,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 187,
                    "name": "fetch",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 187,
                    "end": 214,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 188,
                        "end": 201,
                        "name": "options",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 196,
                          "end": 201,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 198,
                            "end": 201
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 202,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 204,
                        "end": 213,
                        "typeName": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 213,
                          "name": "JQueryXHR",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 60,
              "end": 77,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 61,
                  "end": 68,
                  "name": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSAnyKeyword",
                    "start": 65,
                    "end": 68
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 70,
                  "end": 76,
                  "name": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "start": 74,
                    "end": 76,
                    "members": []
                  },
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
          {
            "type": "TSInterfaceDeclaration",
            "start": 225,
            "end": 337,
            "id": {
              "type": "Identifier",
              "start": 235,
              "end": 258,
              "name": "ModelConstructorOptions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 258,
              "end": 288,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 259,
                  "end": 287,
                  "name": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 265,
                    "name": "TModel",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 274,
                    "end": 279,
                    "typeName": {
                      "type": "Identifier",
                      "start": 274,
                      "end": 279,
                      "name": "Model",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": {
                    "type": "TSTypeReference",
                    "start": 282,
                    "end": 287,
                    "typeName": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 287,
                      "name": "Model",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 289,
              "end": 337,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 299,
                  "end": 331,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 309,
                    "name": "collection",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 310,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 312,
                      "end": 330,
                      "typeName": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 322,
                        "name": "Collection",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 322,
                        "end": 330,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 323,
                            "end": 329,
                            "typeName": {
                              "type": "Identifier",
                              "start": 323,
                              "end": 329,
                              "name": "TModel",
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
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 342,
            "end": 444,
            "id": {
              "type": "Identifier",
              "start": 348,
              "end": 358,
              "name": "Collection",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 389,
              "end": 444,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 399,
                  "end": 438,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 406,
                    "name": "without",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 406,
                    "end": 438,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 407,
                        "end": 426,
                        "argument": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 416,
                          "name": "values",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 416,
                          "end": 426,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 418,
                            "end": 426,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 418,
                              "end": 424,
                              "typeName": {
                                "type": "Identifier",
                                "start": 418,
                                "end": 424,
                                "name": "TModel",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 427,
                      "end": 437,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 429,
                        "end": 437,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 429,
                          "end": 435,
                          "typeName": {
                            "type": "Identifier",
                            "start": 429,
                            "end": 435,
                            "name": "TModel",
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
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 358,
              "end": 388,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 359,
                  "end": 387,
                  "name": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 365,
                    "name": "TModel",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 374,
                    "end": 379,
                    "typeName": {
                      "type": "Identifier",
                      "start": 374,
                      "end": 379,
                      "name": "Model",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": {
                    "type": "TSTypeReference",
                    "start": 382,
                    "end": 387,
                    "typeName": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 387,
                      "name": "Model",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
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
          {
            "type": "TSTypeAliasDeclaration",
            "start": 449,
            "end": 555,
            "id": {
              "type": "Identifier",
              "start": 454,
              "end": 485,
              "name": "CombinedModelConstructorOptions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 485,
              "end": 521,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 486,
                  "end": 487,
                  "name": {
                    "type": "Identifier",
                    "start": 486,
                    "end": 487,
                    "name": "E",
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
                  "start": 489,
                  "end": 520,
                  "name": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 490,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 499,
                    "end": 512,
                    "typeName": {
                      "type": "Identifier",
                      "start": 499,
                      "end": 504,
                      "name": "Model",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 504,
                      "end": 512,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 505,
                          "end": 508
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 510,
                          "end": 511,
                          "typeName": {
                            "type": "Identifier",
                            "start": 510,
                            "end": 511,
                            "name": "E",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "default": {
                    "type": "TSTypeReference",
                    "start": 515,
                    "end": 520,
                    "typeName": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 520,
                      "name": "Model",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 524,
              "end": 554,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 524,
                  "end": 550,
                  "typeName": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 547,
                    "name": "ModelConstructorOptions",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 547,
                    "end": 550,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 548,
                        "end": 549,
                        "typeName": {
                          "type": "Identifier",
                          "start": 548,
                          "end": 549,
                          "name": "M",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 553,
                  "end": 554,
                  "typeName": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 554,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 559,
      "end": 580,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 572,
          "end": 577,
          "local": {
            "type": "Identifier",
            "start": 572,
            "end": 577,
            "name": "Model",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 572,
            "end": 577,
            "name": "Model",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 581,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 601,
        "end": 609,
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "end": 211,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 20,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 36,
        "value": "backbone",
        "raw": "\"backbone\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 38,
      "end": 159,
      "id": {
        "type": "Literal",
        "start": 53,
        "end": 63,
        "value": "backbone",
        "raw": "\"backbone\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 159,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 70,
            "end": 157,
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 94,
              "name": "ModelWithCache",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 103,
                "end": 108,
                "expression": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 108,
                  "name": "Model",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 109,
              "end": 157,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 119,
                  "end": 151,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 124,
                    "name": "fetch",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 125,
                      "end": 138,
                      "name": "options",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 133,
                        "end": 138,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 135,
                          "end": 138
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 141,
                      "end": 150,
                      "typeName": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 150,
                        "name": "JQueryXHR",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 160,
      "end": 170,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 171,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 209,
        "name": "BackboneFetchCache",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "end": 186,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 20,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 36,
        "value": "backbone",
        "raw": "\"backbone\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 38,
      "end": 97,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 45,
          "end": 68,
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 68,
            "name": "BackboneFetchCache",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 96,
        "value": "backbone-fetch-cache",
        "raw": "\"backbone-fetch-cache\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 110,
            "name": "hoge",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 113,
            "end": 160,
            "expression": {
              "type": "NewExpression",
              "start": 113,
              "end": 133,
              "callee": {
                "type": "MemberExpression",
                "start": 117,
                "end": 131,
                "object": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 125,
                  "name": "Backbone",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 131,
                  "name": "Model",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 137,
              "end": 160,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 137,
                "end": 160,
                "left": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 145,
                  "name": "Backbone",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 160,
                  "name": "ModelWithCache",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 186,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 185,
        "callee": {
          "type": "MemberExpression",
          "start": 162,
          "end": 172,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 166,
            "name": "hoge",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 172,
            "name": "fetch",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 173,
            "end": 184,
            "expression": {
              "type": "Literal",
              "start": 173,
              "end": 177,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 181,
              "end": 184
            }
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
