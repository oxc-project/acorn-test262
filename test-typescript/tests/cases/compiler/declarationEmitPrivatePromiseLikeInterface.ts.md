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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "TPromise",
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 51,
              "end": 91,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 72,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 59,
                    "end": 72,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 60,
                        "end": 71,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 71,
                          "decorators": [],
                          "name": "ResolveType",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 59,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
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
                        "raw": "\"then\"",
                        "value": "then",
                        "regex": null,
                        "bigint": null
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
                        "raw": "\"catch\"",
                        "value": "catch",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 179,
                                      "end": 190,
                                      "decorators": [],
                                      "name": "ResolveType",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 195,
                                      "end": 203,
                                      "decorators": [],
                                      "name": "TResult1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 206,
                                    "end": 227,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 217,
                                      "end": 227,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 218,
                                          "end": 226,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 218,
                                            "end": 226,
                                            "decorators": [],
                                            "name": "TResult1",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 206,
                                      "end": 217,
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              }
                            },
                            "typeParameters": null
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 280,
                                      "end": 290,
                                      "decorators": [],
                                      "name": "RejectType",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 295,
                                      "end": 303,
                                      "decorators": [],
                                      "name": "TResult2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 306,
                                    "end": 327,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 317,
                                      "end": 327,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 318,
                                          "end": 326,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 318,
                                            "end": 326,
                                            "decorators": [],
                                            "name": "TResult2",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 306,
                                      "end": 317,
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              }
                            },
                            "typeParameters": null
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
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 354,
                  "end": 397,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 356,
                    "end": 397,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 365,
                                "end": 373,
                                "decorators": [],
                                "name": "TResult1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 376,
                              "end": 384,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 376,
                                "end": 384,
                                "decorators": [],
                                "name": "TResult2",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 386,
                          "end": 396,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 386,
                            "end": 396,
                            "decorators": [],
                            "name": "RejectType",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 364,
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "static": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 104,
                  "end": 146,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 105,
                      "end": 127,
                      "const": false,
                      "constraint": null,
                      "default": {
                        "type": "TSTypeReference",
                        "start": 116,
                        "end": 127,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 127,
                          "decorators": [],
                          "name": "ResolveType",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 113,
                        "decorators": [],
                        "name": "TResult1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 129,
                      "end": 145,
                      "const": false,
                      "constraint": null,
                      "default": {
                        "type": "TSNeverKeyword",
                        "start": 140,
                        "end": 145
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 137,
                        "decorators": [],
                        "name": "TResult2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              },
              {
                "type": "TSMethodSignature",
                "start": 403,
                "end": 576,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 408,
                  "decorators": [],
                  "name": "catch",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 458,
                                      "end": 468,
                                      "decorators": [],
                                      "name": "RejectType",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
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
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 473,
                                      "end": 480,
                                      "decorators": [],
                                      "name": "TResult",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 483,
                                    "end": 503,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 494,
                                      "end": 503,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 495,
                                          "end": 502,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 495,
                                            "end": 502,
                                            "decorators": [],
                                            "name": "TResult",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 483,
                                      "end": 494,
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              }
                            },
                            "typeParameters": null
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
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 530,
                  "end": 575,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 532,
                    "end": 575,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 541,
                                "end": 552,
                                "decorators": [],
                                "name": "ResolveType",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 555,
                              "end": 562,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 555,
                                "end": 562,
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 564,
                          "end": 574,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 564,
                            "end": 574,
                            "decorators": [],
                            "name": "RejectType",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 532,
                      "end": 540,
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "static": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 408,
                  "end": 425,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 409,
                      "end": 424,
                      "const": false,
                      "constraint": null,
                      "default": {
                        "type": "TSNeverKeyword",
                        "start": 419,
                        "end": 424
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 416,
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            ]
          }
        ]
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "ResolveType",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 43,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 40,
              "end": 43
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 37,
              "decorators": [],
              "name": "RejectType",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 581,
      "end": 706,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 588,
        "end": 706,
        "body": {
          "type": "TSInterfaceBody",
          "start": 676,
          "end": 706,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 682,
              "end": 690,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 682,
                "end": 686,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 686,
                "end": 689,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 688,
                  "end": 689,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 688,
                    "end": 689,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 695,
              "end": 704,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 695,
                "end": 700,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 700,
                "end": 703,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 702,
                  "end": 703,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 703,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
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
              "const": false,
              "constraint": {
                "type": "TSUnknownKeyword",
                "start": 621,
                "end": 628
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 630,
              "end": 657,
              "const": false,
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
              "name": {
                "type": "Identifier",
                "start": 630,
                "end": 631,
                "decorators": [],
                "name": "E",
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
      "start": 708,
      "end": 873,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 715,
        "end": 873,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 760,
          "end": 873,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 766,
              "end": 871,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 773,
                "end": 780,
                "decorators": [],
                "name": "request",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 783,
                "end": 870,
                "async": false,
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
                          "raw": "''",
                          "value": "",
                          "regex": null,
                          "bigint": null
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
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 803,
                  "end": 833,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 805,
                    "end": 833,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 813,
                      "end": 833,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 814,
                          "end": 832,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 826,
                            "end": 832,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 827,
                                "end": 828,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 827,
                                  "end": 828,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 830,
                                "end": 831,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 830,
                                  "end": 831,
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 814,
                            "end": 826,
                            "decorators": [],
                            "name": "HttpResponse",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 813,
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 783,
                  "end": 801,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 784,
                      "end": 791,
                      "const": false,
                      "constraint": null,
                      "default": {
                        "type": "TSAnyKeyword",
                        "start": 788,
                        "end": 791
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 784,
                        "end": 785,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 793,
                      "end": 800,
                      "const": false,
                      "constraint": null,
                      "default": {
                        "type": "TSAnyKeyword",
                        "start": 797,
                        "end": 800
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 793,
                        "end": 794,
                        "decorators": [],
                        "name": "E",
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
          "start": 721,
          "end": 731,
          "decorators": [],
          "name": "HttpClient",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 731,
          "end": 759,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 732,
              "end": 758,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 751,
                "end": 758
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 732,
                "end": 748,
                "decorators": [],
                "name": "SecurityDataType",
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 42,
        "raw": "\"./http-client\"",
        "value": "./http-client",
        "regex": null,
        "bigint": null
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "HttpClient",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 272,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 52,
        "end": 272,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 90,
          "end": 272,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 96,
              "end": 155,
              "accessibility": null,
              "computed": false,
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
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 107,
                "end": 155,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 152,
                  "end": 155,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 132,
                            "end": 150,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 133,
                                "end": 149,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 133,
                                  "end": 149,
                                  "decorators": [],
                                  "name": "SecurityDataType",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 132,
                            "decorators": [],
                            "name": "HttpClient",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 161,
              "end": 194,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 161,
                "end": 165,
                "decorators": [],
                "name": "abc1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 168,
                "end": 193,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 174,
                  "end": 193,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 174,
                    "end": 191,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 174,
                      "end": 183,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 174,
                        "end": 178
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 183,
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 191,
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 199,
              "end": 232,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 199,
                "end": 203,
                "decorators": [],
                "name": "abc2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 206,
                "end": 231,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 212,
                  "end": 231,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 212,
                    "end": 229,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 212,
                      "end": 221,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 212,
                        "end": 216
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 221,
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 229,
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 237,
              "end": 270,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 237,
                "end": 241,
                "decorators": [],
                "name": "abc3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 244,
                "end": 269,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 250,
                  "end": 269,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 250,
                    "end": 267,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 250,
                      "end": 259,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 250,
                        "end": 254
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 259,
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 267,
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 61,
          "end": 89,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 62,
              "end": 88,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 81,
                "end": 88
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 62,
                "end": 78,
                "decorators": [],
                "name": "SecurityDataType",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
