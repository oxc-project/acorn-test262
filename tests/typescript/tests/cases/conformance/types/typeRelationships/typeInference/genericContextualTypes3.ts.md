__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 835,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "LowInfer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSIntersectionType",
        "start": 19,
        "end": 25,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 19,
            "end": 20,
            "typeName": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 23,
            "end": 25,
            "members": []
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 48,
        "decorators": [],
        "name": "PartialAssigner",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 48,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 57,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 57,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "decorators": [],
              "name": "TKey",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 72,
              "end": 86,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 86,
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 90,
        "end": 131,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 94,
            "end": 111,
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 111,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 111,
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 114,
          "end": 131,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 117,
            "end": 131,
            "objectType": {
              "type": "TSTypeReference",
              "start": 117,
              "end": 125,
              "typeName": {
                "type": "Identifier",
                "start": 117,
                "end": 125,
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 130,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 130,
                "decorators": [],
                "name": "TKey",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 134,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 155,
        "decorators": [],
        "name": "PropertyAssigner",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 155,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 156,
            "end": 164,
            "name": {
              "type": "Identifier",
              "start": 156,
              "end": 164,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 168,
        "end": 241,
        "key": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 178,
          "end": 192,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 184,
            "end": 192,
            "typeName": {
              "type": "Identifier",
              "start": 184,
              "end": 192,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 196,
          "end": 238,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 196,
              "end": 224,
              "typeName": {
                "type": "Identifier",
                "start": 196,
                "end": 211,
                "decorators": [],
                "name": "PartialAssigner",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 211,
                "end": 224,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 212,
                    "end": 220,
                    "typeName": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 220,
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 227,
              "end": 238,
              "objectType": {
                "type": "TSTypeReference",
                "start": 227,
                "end": 235,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 235,
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 237,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        },
        "optional": true,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 244,
      "end": 303,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "decorators": [],
        "name": "Meta",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 263,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 262,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 262,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSTypeLiteral",
        "start": 266,
        "end": 303,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 270,
            "end": 301,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 276,
              "decorators": [],
              "name": "action",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 301,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 278,
                "end": 301,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 279,
                    "end": 292,
                    "decorators": [],
                    "name": "ctx",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 292,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 284,
                        "end": 292,
                        "typeName": {
                          "type": "Identifier",
                          "start": 284,
                          "end": 292,
                          "decorators": [],
                          "name": "TContext",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 294,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 297,
                    "end": 301
                  }
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
      "type": "TSInterfaceDeclaration",
      "start": 305,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 327,
        "decorators": [],
        "name": "AssignAction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 327,
        "end": 337,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 328,
            "end": 336,
            "name": {
              "type": "Identifier",
              "start": 328,
              "end": 336,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 338,
        "end": 413,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 342,
            "end": 364,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 346,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 363,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 348,
                "end": 363,
                "literal": {
                  "type": "Literal",
                  "start": 348,
                  "end": 363,
                  "value": "xstate.assign",
                  "raw": "\"xstate.assign\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 367,
            "end": 411,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 368,
                "end": 381,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 371,
                  "end": 381,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 373,
                    "end": 381,
                    "typeName": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 381,
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 383,
                "end": 403,
                "decorators": [],
                "name": "meta",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 387,
                  "end": 403,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 389,
                    "end": 403,
                    "typeName": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 393,
                      "decorators": [],
                      "name": "Meta",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 393,
                      "end": 403,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 394,
                          "end": 402,
                          "typeName": {
                            "type": "Identifier",
                            "start": 394,
                            "end": 402,
                            "decorators": [],
                            "name": "TContext",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 410,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 406,
                "end": 410
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 415,
      "end": 527,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 438,
        "decorators": [],
        "name": "assign",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 438,
        "end": 448,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 439,
            "end": 447,
            "name": {
              "type": "Identifier",
              "start": 439,
              "end": 447,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 452,
          "end": 500,
          "decorators": [],
          "name": "assignment",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 462,
            "end": 500,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 464,
              "end": 500,
              "typeName": {
                "type": "Identifier",
                "start": 464,
                "end": 480,
                "decorators": [],
                "name": "PropertyAssigner",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 480,
                "end": 500,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 481,
                    "end": 499,
                    "typeName": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 489,
                      "decorators": [],
                      "name": "LowInfer",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 489,
                      "end": 499,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 490,
                          "end": 498,
                          "typeName": {
                            "type": "Identifier",
                            "start": 490,
                            "end": 498,
                            "decorators": [],
                            "name": "TContext",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 502,
        "end": 526,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 504,
          "end": 526,
          "typeName": {
            "type": "Identifier",
            "start": 504,
            "end": 516,
            "decorators": [],
            "name": "AssignAction",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 516,
            "end": 526,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 517,
                "end": 525,
                "typeName": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 525,
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 529,
      "end": 612,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 540,
        "decorators": [],
        "name": "Config",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 540,
        "end": 550,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 541,
            "end": 549,
            "name": {
              "type": "Identifier",
              "start": 541,
              "end": 549,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSTypeLiteral",
        "start": 553,
        "end": 611,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 557,
            "end": 575,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 557,
              "end": 564,
              "decorators": [],
              "name": "context",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 564,
              "end": 574,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 566,
                "end": 574,
                "typeName": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 574,
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 578,
            "end": 609,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 578,
              "end": 583,
              "decorators": [],
              "name": "entry",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 584,
              "end": 608,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 586,
                "end": 608,
                "typeName": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 598,
                  "decorators": [],
                  "name": "AssignAction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 598,
                  "end": 608,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 599,
                      "end": 607,
                      "typeName": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 607,
                        "decorators": [],
                        "name": "TContext",
                        "optional": false,
                        "typeAnnotation": null
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
      "type": "TSDeclareFunction",
      "start": 614,
      "end": 687,
      "id": {
        "type": "Identifier",
        "start": 631,
        "end": 644,
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 644,
        "end": 654,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 645,
            "end": 653,
            "name": {
              "type": "Identifier",
              "start": 645,
              "end": 653,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 655,
          "end": 679,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 661,
            "end": 679,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 663,
              "end": 679,
              "typeName": {
                "type": "Identifier",
                "start": 663,
                "end": 669,
                "decorators": [],
                "name": "Config",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 669,
                "end": 679,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 670,
                    "end": 678,
                    "typeName": {
                      "type": "Identifier",
                      "start": 670,
                      "end": 678,
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 680,
        "end": 686,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 682,
          "end": 686
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 689,
      "end": 835,
      "expression": {
        "type": "CallExpression",
        "start": 689,
        "end": 834,
        "callee": {
          "type": "Identifier",
          "start": 689,
          "end": 702,
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 702,
          "end": 721,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 703,
              "end": 720,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 705,
                  "end": 718,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 710,
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 710,
                    "end": 718,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 712,
                      "end": 718
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 722,
            "end": 833,
            "properties": [
              {
                "type": "Property",
                "start": 726,
                "end": 754,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 733,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 735,
                  "end": 754,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 741,
                      "end": 749,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 741,
                        "end": 746,
                        "decorators": [],
                        "name": "count",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 748,
                        "end": 749,
                        "value": 0,
                        "raw": "0"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 758,
                "end": 830,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 758,
                  "end": 763,
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "CallExpression",
                  "start": 765,
                  "end": 830,
                  "callee": {
                    "type": "Identifier",
                    "start": 765,
                    "end": 771,
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 772,
                      "end": 829,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 778,
                          "end": 824,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 778,
                            "end": 783,
                            "decorators": [],
                            "name": "count",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 785,
                            "end": 824,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 786,
                                "end": 808,
                                "decorators": [],
                                "name": "ctx",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 789,
                                  "end": 808,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 791,
                                    "end": 808,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 793,
                                        "end": 806,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 793,
                                          "end": 798,
                                          "decorators": [],
                                          "name": "count",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 798,
                                          "end": 806,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 800,
                                            "end": 806
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "UpdateExpression",
                              "start": 813,
                              "end": 824,
                              "operator": "++",
                              "prefix": true,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 815,
                                "end": 824,
                                "object": {
                                  "type": "Identifier",
                                  "start": 815,
                                  "end": 818,
                                  "decorators": [],
                                  "name": "ctx",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 819,
                                  "end": 824,
                                  "decorators": [],
                                  "name": "count",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "id": null,
                            "generator": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
