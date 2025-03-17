__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 844,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "LowInfer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "PartialAssigner",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          },
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "name": "TKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "TContext",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "name": "context",
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
                  "name": "TContext",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "TContext",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "TKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "name": "PropertyAssigner",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 168,
        "end": 241,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 173,
          "end": 192,
          "name": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "TContext",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
                "name": "PartialAssigner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "TContext",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "K",
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
                  "name": "TContext",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          ]
        },
        "optional": true,
        "readonly": null,
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
              "name": "TContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
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
      "start": 244,
      "end": 303,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "name": "Meta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "action",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "ctx",
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
                          "name": "TContext",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 327,
        "name": "AssignAction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 338,
        "end": 421,
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
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "type": "TSPropertySignature",
            "start": 367,
            "end": 419,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 371,
              "name": "exec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 418,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 373,
                "end": 418,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 374,
                    "end": 387,
                    "name": "arg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 377,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 379,
                        "end": 387,
                        "typeName": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 387,
                          "name": "TContext",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 389,
                    "end": 409,
                    "name": "meta",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 393,
                      "end": 409,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 395,
                        "end": 409,
                        "typeName": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 399,
                          "name": "Meta",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 399,
                          "end": 409,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 400,
                              "end": 408,
                              "typeName": {
                                "type": "Identifier",
                                "start": 400,
                                "end": 408,
                                "name": "TContext",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 418,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 414,
                    "end": 418
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
      "type": "TSDeclareFunction",
      "start": 423,
      "end": 535,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 446,
        "name": "assign",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 460,
          "end": 508,
          "name": "assignment",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 470,
            "end": 508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 472,
              "end": 508,
              "typeName": {
                "type": "Identifier",
                "start": 472,
                "end": 488,
                "name": "PropertyAssigner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 488,
                "end": 508,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 489,
                    "end": 507,
                    "typeName": {
                      "type": "Identifier",
                      "start": 489,
                      "end": 497,
                      "name": "LowInfer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 497,
                      "end": 507,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 498,
                          "end": 506,
                          "typeName": {
                            "type": "Identifier",
                            "start": 498,
                            "end": 506,
                            "name": "TContext",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 446,
        "end": 456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 447,
            "end": 455,
            "name": {
              "type": "Identifier",
              "start": 447,
              "end": 455,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 510,
        "end": 534,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 512,
          "end": 534,
          "typeName": {
            "type": "Identifier",
            "start": 512,
            "end": 524,
            "name": "AssignAction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 524,
            "end": 534,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 525,
                "end": 533,
                "typeName": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 533,
                  "name": "TContext",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 537,
      "end": 620,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 548,
        "name": "Config",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 548,
        "end": 558,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 549,
            "end": 557,
            "name": {
              "type": "Identifier",
              "start": 549,
              "end": 557,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 561,
        "end": 619,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 565,
            "end": 583,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 565,
              "end": 572,
              "name": "context",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 572,
              "end": 582,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 574,
                "end": 582,
                "typeName": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 582,
                  "name": "TContext",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 586,
            "end": 617,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 591,
              "name": "entry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 594,
                "end": 616,
                "typeName": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 606,
                  "name": "AssignAction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 606,
                  "end": 616,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 607,
                      "end": 615,
                      "typeName": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 615,
                        "name": "TContext",
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
      "type": "TSDeclareFunction",
      "start": 622,
      "end": 695,
      "id": {
        "type": "Identifier",
        "start": 639,
        "end": 652,
        "name": "createMachine",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 663,
          "end": 687,
          "name": "config",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 669,
            "end": 687,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 671,
              "end": 687,
              "typeName": {
                "type": "Identifier",
                "start": 671,
                "end": 677,
                "name": "Config",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 677,
                "end": 687,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 678,
                    "end": 686,
                    "typeName": {
                      "type": "Identifier",
                      "start": 678,
                      "end": 686,
                      "name": "TContext",
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 652,
        "end": 662,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 653,
            "end": 661,
            "name": {
              "type": "Identifier",
              "start": 653,
              "end": 661,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 688,
        "end": 694,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 690,
          "end": 694
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 697,
      "end": 843,
      "expression": {
        "type": "CallExpression",
        "start": 697,
        "end": 842,
        "callee": {
          "type": "Identifier",
          "start": 697,
          "end": 710,
          "name": "createMachine",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 730,
            "end": 841,
            "properties": [
              {
                "type": "Property",
                "start": 734,
                "end": 762,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 741,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 743,
                  "end": 762,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 749,
                      "end": 757,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 754,
                        "name": "count",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 756,
                        "end": 757,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 766,
                "end": 838,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 766,
                  "end": 771,
                  "name": "entry",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "start": 773,
                  "end": 838,
                  "callee": {
                    "type": "Identifier",
                    "start": 773,
                    "end": 779,
                    "name": "assign",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 780,
                      "end": 837,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 786,
                          "end": 832,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 786,
                            "end": 791,
                            "name": "count",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 793,
                            "end": 832,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 794,
                                "end": 816,
                                "name": "ctx",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 797,
                                  "end": 816,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 799,
                                    "end": 816,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 801,
                                        "end": 814,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 801,
                                          "end": 806,
                                          "name": "count",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 806,
                                          "end": 814,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 808,
                                            "end": 814
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
                            "body": {
                              "type": "UpdateExpression",
                              "start": 821,
                              "end": 832,
                              "operator": "++",
                              "prefix": true,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 823,
                                "end": 832,
                                "object": {
                                  "type": "Identifier",
                                  "start": 823,
                                  "end": 826,
                                  "name": "ctx",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 827,
                                  "end": 832,
                                  "name": "count",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            },
                            "typeParameters": null,
                            "returnType": null
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
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 710,
          "end": 729,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 711,
              "end": 728,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 713,
                  "end": 726,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 718,
                    "name": "count",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 718,
                    "end": 726,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 720,
                      "end": 726
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
