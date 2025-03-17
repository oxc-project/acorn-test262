__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 660,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 43,
        "name": "StateSchema",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 48,
            "end": 95,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 54,
              "name": "states",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 64,
                        "end": 75,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 67,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 69,
                            "end": 75
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 76,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 78,
                        "end": 89,
                        "typeName": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 89,
                          "name": "StateSchema",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 99,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 122,
        "name": "StateNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 161,
            "end": 182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 167,
              "name": "schema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 181,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 181,
                  "name": "TStateSchema",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 122,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 123,
            "end": 155,
            "name": {
              "type": "Identifier",
              "start": 123,
              "end": 135,
              "name": "TStateSchema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 144,
              "end": 155,
              "typeName": {
                "type": "Identifier",
                "start": 144,
                "end": 155,
                "name": "StateSchema",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 186,
      "end": 338,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 207,
        "name": "StateNodesConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 220,
              "name": "TStateSchema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 240,
                "name": "StateSchema",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 244,
        "end": 337,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 249,
          "end": 282,
          "name": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 254,
            "end": 282,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 260,
              "end": 282,
              "objectType": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 272,
                  "name": "TStateSchema",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 273,
                "end": 281,
                "literal": {
                  "type": "Literal",
                  "start": 273,
                  "end": 281,
                  "value": "states",
                  "raw": "\"states\""
                }
              }
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 285,
          "end": 334,
          "typeName": {
            "type": "Identifier",
            "start": 285,
            "end": 294,
            "name": "StateNode",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 294,
            "end": 334,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 295,
                "end": 333,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 295,
                  "end": 330,
                  "typeName": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 306,
                    "name": "NonNullable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 306,
                    "end": 330,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 307,
                        "end": 329,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 307,
                          "end": 319,
                          "typeName": {
                            "type": "Identifier",
                            "start": 307,
                            "end": 319,
                            "name": "TStateSchema",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 320,
                          "end": 328,
                          "literal": {
                            "type": "Literal",
                            "start": 320,
                            "end": 328,
                            "value": "states",
                            "raw": "\"states\""
                          }
                        }
                      }
                    ]
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 331,
                  "end": 332,
                  "typeName": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 332,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 254,
          "end": 282,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 260,
            "end": 282,
            "objectType": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 272,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 272,
                "name": "TStateSchema",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 273,
              "end": 281,
              "literal": {
                "type": "Literal",
                "start": 273,
                "end": 281,
                "value": "states",
                "raw": "\"states\""
              }
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 249,
          "end": 250,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 386,
      "end": 452,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 399,
        "name": "Ordering",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 408,
              "name": "TOrderBy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 417,
              "end": 423
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 433,
              "end": 440,
              "name": "orderBy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 450,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 442,
                "end": 450,
                "typeName": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 450,
                  "name": "TOrderBy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 454,
      "end": 526,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 464,
        "name": "Query",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 465,
              "end": 473,
              "name": "TOrderBy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 482,
              "end": 488
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 498,
              "end": 503,
              "name": "order",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 506,
                "end": 524,
                "typeName": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 514,
                  "name": "Ordering",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 514,
                  "end": 524,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 515,
                      "end": 523,
                      "typeName": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 523,
                        "name": "TOrderBy",
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
      "type": "TSTypeAliasDeclaration",
      "start": 528,
      "end": 659,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 545,
        "name": "QueryHandler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 551,
              "end": 557,
              "name": "TQuery",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 566,
              "end": 581,
              "typeName": {
                "type": "Identifier",
                "start": 566,
                "end": 571,
                "name": "Query",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 571,
                "end": 581,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 572,
                    "end": 580,
                    "typeName": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 580,
                      "name": "TOrderBy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 587,
            "end": 652,
            "name": {
              "type": "Identifier",
              "start": 587,
              "end": 595,
              "name": "TOrderBy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 604,
              "end": 610
            },
            "default": {
              "type": "TSIndexedAccessType",
              "start": 613,
              "end": 652,
              "objectType": {
                "type": "TSTypeReference",
                "start": 613,
                "end": 641,
                "typeName": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 624,
                  "name": "NonNullable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 624,
                  "end": 641,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 625,
                      "end": 640,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 625,
                        "end": 631,
                        "typeName": {
                          "type": "Identifier",
                          "start": 625,
                          "end": 631,
                          "name": "TQuery",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 632,
                        "end": 639,
                        "literal": {
                          "type": "Literal",
                          "start": 632,
                          "end": 639,
                          "value": "order",
                          "raw": "\"order\""
                        }
                      }
                    }
                  ]
                }
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 642,
                "end": 651,
                "literal": {
                  "type": "Literal",
                  "start": 642,
                  "end": 651,
                  "value": "orderBy",
                  "raw": "\"orderBy\""
                }
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 657,
        "end": 659,
        "members": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
