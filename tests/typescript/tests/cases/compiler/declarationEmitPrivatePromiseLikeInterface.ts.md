__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 873,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 579,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "TPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "ResolveType",
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
            "start": 27,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 37,
              "decorators": [],
              "name": "RejectType",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 40,
              "end": 43
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 47,
        "end": 578,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 47,
            "end": 91,
            "typeName": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 51,
              "end": 91,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 72,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 59,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 59,
                    "end": 72,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 60,
                        "end": 71,
                        "typeName": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 71,
                          "decorators": [],
                          "name": "ResolveType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 74,
                  "end": 90,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 74,
                      "end": 80,
                      "literal": {
                        "type": "Literal",
                        "start": 74,
                        "end": 80,
                        "value": "then",
                        "raw": "\"then\""
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 83,
                      "end": 90,
                      "literal": {
                        "type": "Literal",
                        "start": 83,
                        "end": 90,
                        "value": "catch",
                        "raw": "\"catch\""
                      }
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 94,
            "end": 578,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 100,
                "end": 398,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "computed": false,
                "optional": false,
                "kind": "method",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 104,
                  "end": 146,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 105,
                      "end": 127,
                      "name": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 113,
                        "decorators": [],
                        "name": "TResult1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSTypeReference",
                        "start": 116,
                        "end": 127,
                        "typeName": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 127,
                          "decorators": [],
                          "name": "ResolveType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 129,
                      "end": 145,
                      "name": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 137,
                        "decorators": [],
                        "name": "TResult2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSNeverKeyword",
                        "start": 140,
                        "end": 145
                      },
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 156,
                    "end": 247,
                    "decorators": [],
                    "name": "onfulfilled",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 168,
                      "end": 247,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 170,
                        "end": 247,
                        "types": [
                          {
                            "type": "TSFunctionType",
                            "start": 171,
                            "end": 227,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 172,
                                "end": 190,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 177,
                                  "end": 190,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 179,
                                    "end": 190,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 179,
                                      "end": 190,
                                      "decorators": [],
                                      "name": "ResolveType",
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
                              "start": 192,
                              "end": 227,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 195,
                                "end": 227,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 195,
                                    "end": 203,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 195,
                                      "end": 203,
                                      "decorators": [],
                                      "name": "TResult1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 206,
                                    "end": 227,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 206,
                                      "end": 217,
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 217,
                                      "end": 227,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 218,
                                          "end": 226,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 218,
                                            "end": 226,
                                            "decorators": [],
                                            "name": "TResult1",
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
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 231,
                            "end": 240
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 243,
                            "end": 247
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 257,
                    "end": 347,
                    "decorators": [],
                    "name": "onrejected",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 268,
                      "end": 347,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 270,
                        "end": 347,
                        "types": [
                          {
                            "type": "TSFunctionType",
                            "start": 271,
                            "end": 327,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 272,
                                "end": 290,
                                "decorators": [],
                                "name": "reason",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 278,
                                  "end": 290,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 280,
                                    "end": 290,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 280,
                                      "end": 290,
                                      "decorators": [],
                                      "name": "RejectType",
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
                              "start": 292,
                              "end": 327,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 295,
                                "end": 327,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 295,
                                    "end": 303,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 295,
                                      "end": 303,
                                      "decorators": [],
                                      "name": "TResult2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 306,
                                    "end": 327,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 306,
                                      "end": 317,
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 317,
                                      "end": 327,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 318,
                                          "end": 326,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 318,
                                            "end": 326,
                                            "decorators": [],
                                            "name": "TResult2",
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
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 331,
                            "end": 340
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 343,
                            "end": 347
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 354,
                  "end": 397,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 356,
                    "end": 397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 364,
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 364,
                      "end": 397,
                      "params": [
                        {
                          "type": "TSUnionType",
                          "start": 365,
                          "end": 384,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 365,
                              "end": 373,
                              "typeName": {
                                "type": "Identifier",
                                "start": 365,
                                "end": 373,
                                "decorators": [],
                                "name": "TResult1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 376,
                              "end": 384,
                              "typeName": {
                                "type": "Identifier",
                                "start": 376,
                                "end": 384,
                                "decorators": [],
                                "name": "TResult2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 386,
                          "end": 396,
                          "typeName": {
                            "type": "Identifier",
                            "start": 386,
                            "end": 396,
                            "decorators": [],
                            "name": "RejectType",
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
                "readonly": false,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 403,
                "end": 576,
                "key": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 408,
                  "decorators": [],
                  "name": "catch",
                  "optional": false,
                  "typeAnnotation": null
                },
                "computed": false,
                "optional": false,
                "kind": "method",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 408,
                  "end": 425,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 409,
                      "end": 424,
                      "name": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 416,
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSNeverKeyword",
                        "start": 419,
                        "end": 424
                      },
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 435,
                    "end": 523,
                    "decorators": [],
                    "name": "onrejected",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 523,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 448,
                        "end": 523,
                        "types": [
                          {
                            "type": "TSFunctionType",
                            "start": 449,
                            "end": 503,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 450,
                                "end": 468,
                                "decorators": [],
                                "name": "reason",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 456,
                                  "end": 468,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 458,
                                    "end": 468,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 458,
                                      "end": 468,
                                      "decorators": [],
                                      "name": "RejectType",
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
                              "start": 470,
                              "end": 503,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 473,
                                "end": 503,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 473,
                                    "end": 480,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 473,
                                      "end": 480,
                                      "decorators": [],
                                      "name": "TResult",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 483,
                                    "end": 503,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 483,
                                      "end": 494,
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 494,
                                      "end": 503,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 495,
                                          "end": 502,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 495,
                                            "end": 502,
                                            "decorators": [],
                                            "name": "TResult",
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
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 507,
                            "end": 516
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 519,
                            "end": 523
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 530,
                  "end": 575,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 532,
                    "end": 575,
                    "typeName": {
                      "type": "Identifier",
                      "start": 532,
                      "end": 540,
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 540,
                      "end": 575,
                      "params": [
                        {
                          "type": "TSUnionType",
                          "start": 541,
                          "end": 562,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 541,
                              "end": 552,
                              "typeName": {
                                "type": "Identifier",
                                "start": 541,
                                "end": 552,
                                "decorators": [],
                                "name": "ResolveType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 555,
                              "end": 562,
                              "typeName": {
                                "type": "Identifier",
                                "start": 555,
                                "end": 562,
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 564,
                          "end": 574,
                          "typeName": {
                            "type": "Identifier",
                            "start": 564,
                            "end": 574,
                            "decorators": [],
                            "name": "RejectType",
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
                "readonly": false,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 581,
      "end": 706,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 588,
        "end": 706,
        "id": {
          "type": "Identifier",
          "start": 598,
          "end": 610,
          "decorators": [],
          "name": "HttpResponse",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 610,
          "end": 658,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 611,
              "end": 628,
              "name": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSUnknownKeyword",
                "start": 621,
                "end": 628
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 630,
              "end": 657,
              "name": {
                "type": "Identifier",
                "start": 630,
                "end": 631,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSUnknownKeyword",
                "start": 640,
                "end": 647
              },
              "default": {
                "type": "TSUnknownKeyword",
                "start": 650,
                "end": 657
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 667,
            "end": 675,
            "expression": {
              "type": "Identifier",
              "start": 667,
              "end": 675,
              "decorators": [],
              "name": "Response",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 676,
          "end": 706,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 682,
              "end": 690,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 682,
                "end": 686,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 686,
                "end": 689,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 688,
                  "end": 689,
                  "typeName": {
                    "type": "Identifier",
                    "start": 688,
                    "end": 689,
                    "decorators": [],
                    "name": "D",
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
              "start": 695,
              "end": 704,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 695,
                "end": 700,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 700,
                "end": 703,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 702,
                  "end": 703,
                  "typeName": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 703,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 708,
      "end": 873,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 715,
        "end": 873,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 721,
          "end": 731,
          "decorators": [],
          "name": "HttpClient",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 731,
          "end": 759,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 732,
              "end": 758,
              "name": {
                "type": "Identifier",
                "start": 732,
                "end": 748,
                "decorators": [],
                "name": "SecurityDataType",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 751,
                "end": 758
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 760,
          "end": 873,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 766,
              "end": 871,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 773,
                "end": 780,
                "decorators": [],
                "name": "request",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 783,
                "end": 870,
                "expression": false,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 783,
                  "end": 801,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 784,
                      "end": 791,
                      "name": {
                        "type": "Identifier",
                        "start": 784,
                        "end": 785,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSAnyKeyword",
                        "start": 788,
                        "end": 791
                      },
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 793,
                      "end": 800,
                      "name": {
                        "type": "Identifier",
                        "start": 793,
                        "end": 794,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSAnyKeyword",
                        "start": 797,
                        "end": 800
                      },
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 803,
                  "end": 833,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 805,
                    "end": 833,
                    "typeName": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 813,
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 813,
                      "end": 833,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 814,
                          "end": 832,
                          "typeName": {
                            "type": "Identifier",
                            "start": 814,
                            "end": 826,
                            "decorators": [],
                            "name": "HttpResponse",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 826,
                            "end": 832,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 827,
                                "end": 828,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 827,
                                  "end": 828,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 830,
                                "end": 831,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 830,
                                  "end": 831,
                                  "decorators": [],
                                  "name": "E",
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
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 837,
                  "end": 870,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 847,
                      "end": 864,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 854,
                        "end": 863,
                        "expression": {
                          "type": "Literal",
                          "start": 854,
                          "end": 856,
                          "value": "",
                          "raw": "''"
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 860,
                          "end": 863
                        }
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 272,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "HttpClient",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "HttpClient",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 42,
        "value": "./http-client",
        "raw": "\"./http-client\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 272,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 52,
        "end": 272,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 61,
          "decorators": [],
          "name": "Api",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 61,
          "end": 89,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 62,
              "end": 88,
              "name": {
                "type": "Identifier",
                "start": 62,
                "end": 78,
                "decorators": [],
                "name": "SecurityDataType",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 81,
                "end": 88
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 90,
          "end": 272,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 96,
              "end": 155,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 96,
                "end": 107,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 107,
                "end": 155,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 108,
                    "end": 150,
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 150,
                      "decorators": [],
                      "name": "http",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 120,
                        "end": 150,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 122,
                          "end": 150,
                          "typeName": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 132,
                            "decorators": [],
                            "name": "HttpClient",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 132,
                            "end": 150,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 133,
                                "end": 149,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 133,
                                  "end": 149,
                                  "decorators": [],
                                  "name": "SecurityDataType",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 152,
                  "end": 155,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 161,
              "end": 194,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 161,
                "end": 165,
                "decorators": [],
                "name": "abc1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 168,
                "end": 193,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 174,
                  "end": 193,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 174,
                    "end": 191,
                    "object": {
                      "type": "MemberExpression",
                      "start": 174,
                      "end": 183,
                      "object": {
                        "type": "ThisExpression",
                        "start": 174,
                        "end": 178
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 183,
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 191,
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 199,
              "end": 232,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 199,
                "end": 203,
                "decorators": [],
                "name": "abc2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 206,
                "end": 231,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 212,
                  "end": 231,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 212,
                    "end": 229,
                    "object": {
                      "type": "MemberExpression",
                      "start": 212,
                      "end": 221,
                      "object": {
                        "type": "ThisExpression",
                        "start": 212,
                        "end": 216
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 221,
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 229,
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 237,
              "end": 270,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 237,
                "end": 241,
                "decorators": [],
                "name": "abc3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 244,
                "end": 269,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 250,
                  "end": 269,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 250,
                    "end": 267,
                    "object": {
                      "type": "MemberExpression",
                      "start": 250,
                      "end": 259,
                      "object": {
                        "type": "ThisExpression",
                        "start": 250,
                        "end": 254
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 259,
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 267,
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
