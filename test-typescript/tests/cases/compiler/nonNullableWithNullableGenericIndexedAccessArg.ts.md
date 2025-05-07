__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 659,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 97,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 48,
            "end": 95,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 54,
              "decorators": [],
              "name": "states",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 57,
                "end": 94,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 63,
                    "end": 90,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 64,
                        "end": 75,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 67,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 69,
                            "end": 75
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 76,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 78,
                        "end": 89,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 89,
                          "decorators": [],
                          "name": "StateSchema",
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
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 43,
        "decorators": [],
        "name": "StateSchema",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 161,
            "end": 182,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 167,
              "decorators": [],
              "name": "schema",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 181,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 181,
                  "decorators": [],
                  "name": "TStateSchema",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 122,
        "decorators": [],
        "name": "StateNode",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 122,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 123,
            "end": 155,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 144,
              "end": 155,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 144,
                "end": 155,
                "decorators": [],
                "name": "StateSchema",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 123,
              "end": 135,
              "decorators": [],
              "name": "TStateSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 186,
      "end": 338,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 207,
        "decorators": [],
        "name": "StateNodesConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 244,
        "end": 337,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 254,
          "end": 282,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 260,
            "end": 282,
            "indexType": {
              "type": "TSLiteralType",
              "start": 273,
              "end": 281,
              "literal": {
                "type": "Literal",
                "start": 273,
                "end": 281,
                "raw": "\"states\"",
                "value": "states",
                "regex": null,
                "bigint": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 272,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 272,
                "decorators": [],
                "name": "TStateSchema",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 249,
          "end": 250,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 285,
          "end": 334,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 294,
            "end": 334,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 295,
                "end": 333,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 331,
                  "end": 332,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 332,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 295,
                  "end": 330,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 306,
                    "end": 330,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 307,
                        "end": 329,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 320,
                          "end": 328,
                          "literal": {
                            "type": "Literal",
                            "start": 320,
                            "end": 328,
                            "raw": "\"states\"",
                            "value": "states",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 307,
                          "end": 319,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 307,
                            "end": 319,
                            "decorators": [],
                            "name": "TStateSchema",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 306,
                    "decorators": [],
                    "name": "NonNullable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 285,
            "end": 294,
            "decorators": [],
            "name": "StateNode",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 241,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 240,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 240,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 240,
                "decorators": [],
                "name": "StateSchema",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 220,
              "decorators": [],
              "name": "TStateSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 386,
      "end": 452,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 399,
        "decorators": [],
        "name": "Ordering",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 427,
        "end": 452,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 433,
            "end": 450,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 433,
              "end": 440,
              "decorators": [],
              "name": "orderBy",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 450,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 442,
                "end": 450,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 450,
                  "decorators": [],
                  "name": "TOrderBy",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 399,
        "end": 424,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 423,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 417,
              "end": 423
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 408,
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 454,
      "end": 526,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 464,
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 492,
        "end": 526,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 498,
            "end": 524,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 498,
              "end": 503,
              "decorators": [],
              "name": "order",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 506,
                "end": 524,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 514,
                  "end": 524,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 515,
                      "end": 523,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 523,
                        "decorators": [],
                        "name": "TOrderBy",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 514,
                  "decorators": [],
                  "name": "Ordering",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 464,
        "end": 489,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 465,
            "end": 488,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 482,
              "end": 488
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 465,
              "end": 473,
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 528,
      "end": 659,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 545,
        "decorators": [],
        "name": "QueryHandler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 657,
        "end": 659,
        "members": []
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 545,
        "end": 654,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 551,
            "end": 581,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 566,
              "end": 581,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 571,
                "end": 581,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 572,
                    "end": 580,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 580,
                      "decorators": [],
                      "name": "TOrderBy",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 566,
                "end": 571,
                "decorators": [],
                "name": "Query",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 551,
              "end": 557,
              "decorators": [],
              "name": "TQuery",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 587,
            "end": 652,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 604,
              "end": 610
            },
            "default": {
              "type": "TSIndexedAccessType",
              "start": 613,
              "end": 652,
              "indexType": {
                "type": "TSLiteralType",
                "start": 642,
                "end": 651,
                "literal": {
                  "type": "Literal",
                  "start": 642,
                  "end": 651,
                  "raw": "\"orderBy\"",
                  "value": "orderBy",
                  "regex": null,
                  "bigint": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 613,
                "end": 641,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 624,
                  "end": 641,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 625,
                      "end": 640,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 632,
                        "end": 639,
                        "literal": {
                          "type": "Literal",
                          "start": 632,
                          "end": 639,
                          "raw": "\"order\"",
                          "value": "order",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 625,
                        "end": 631,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 625,
                          "end": 631,
                          "decorators": [],
                          "name": "TQuery",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 624,
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 587,
              "end": 595,
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
