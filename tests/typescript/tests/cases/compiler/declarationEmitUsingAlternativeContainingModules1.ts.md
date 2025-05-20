__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4041,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 39,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "QueryKey",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 16,
        "end": 38,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 29,
          "end": 38,
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 30,
              "end": 37
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 62,
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 62,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 59,
        "decorators": [],
        "name": "Register",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 64,
      "end": 156,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 81,
        "decorators": [],
        "name": "DefaultError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 84,
        "end": 155,
        "checkType": {
          "type": "TSTypeReference",
          "start": 84,
          "end": 92,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 84,
            "end": 92,
            "decorators": [],
            "name": "Register",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 101,
          "end": 134,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 105,
              "end": 132,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 105,
                "end": 117,
                "decorators": [],
                "name": "defaultError",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 131,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 119,
                  "end": 131,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 125,
                    "end": 131,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 131,
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 150,
          "end": 155,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 150,
            "end": 155,
            "decorators": [],
            "name": "Error",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 139,
          "end": 145,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "decorators": [],
            "name": "TError",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 158,
      "end": 264,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 182,
        "decorators": [],
        "name": "ShouldRetryFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 208,
        "end": 263,
        "params": [
          {
            "type": "Identifier",
            "start": 212,
            "end": 232,
            "decorators": [],
            "name": "failureCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 232,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 226,
                "end": 232
              }
            }
          },
          {
            "type": "Identifier",
            "start": 236,
            "end": 249,
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 249,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 249,
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 253,
          "end": 263,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 256,
            "end": 263
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 182,
        "end": 205,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 183,
            "end": 204,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 204,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 204,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 189,
              "decorators": [],
              "name": "TError",
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
      "start": 265,
      "end": 338,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 280,
        "decorators": [],
        "name": "RetryValue",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 291,
        "end": 337,
        "types": [
          {
            "type": "TSBooleanKeyword",
            "start": 291,
            "end": 298
          },
          {
            "type": "TSNumberKeyword",
            "start": 301,
            "end": 307
          },
          {
            "type": "TSTypeReference",
            "start": 310,
            "end": 337,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 329,
              "end": 337,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 330,
                  "end": 336,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 336,
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 310,
              "end": 329,
              "decorators": [],
              "name": "ShouldRetryFunction",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 280,
        "end": 288,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 281,
            "end": 287,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 281,
              "end": 287,
              "decorators": [],
              "name": "TError",
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
      "start": 340,
      "end": 570,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 365,
        "decorators": [],
        "name": "QueryFunctionContext",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 434,
        "end": 569,
        "checkType": {
          "type": "TSTupleType",
          "start": 434,
          "end": 446,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 435,
              "end": 445,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 435,
                "end": 445,
                "decorators": [],
                "name": "TPageParam",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 455,
          "end": 462,
          "elementTypes": [
            {
              "type": "TSNeverKeyword",
              "start": 456,
              "end": 461
            }
          ]
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 506,
          "end": 569,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 514,
              "end": 534,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 514,
                "end": 522,
                "decorators": [],
                "name": "queryKey",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 522,
                "end": 533,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 524,
                  "end": 533,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 533,
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 541,
              "end": 563,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 541,
                "end": 550,
                "decorators": [],
                "name": "pageParam",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 550,
                "end": 562,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 552,
                  "end": 562,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 562,
                    "decorators": [],
                    "name": "TPageParam",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 467,
          "end": 501,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 475,
              "end": 495,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 475,
                "end": 483,
                "decorators": [],
                "name": "queryKey",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 483,
                "end": 494,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 485,
                  "end": 494,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 494,
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 365,
        "end": 431,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 369,
            "end": 406,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 395,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 395,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 398,
              "end": 406,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 398,
                "end": 406,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 369,
              "end": 378,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 410,
            "end": 428,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 423,
              "end": 428
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 420,
              "decorators": [],
              "name": "TPageParam",
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
      "start": 572,
      "end": 747,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 590,
        "decorators": [],
        "name": "QueryFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 674,
        "end": 746,
        "params": [
          {
            "type": "Identifier",
            "start": 675,
            "end": 727,
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 727,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 684,
                "end": 727,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 704,
                  "end": 727,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 705,
                      "end": 714,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 705,
                        "end": 714,
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 716,
                      "end": 726,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 716,
                        "end": 726,
                        "decorators": [],
                        "name": "TPageParam",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 704,
                  "decorators": [],
                  "name": "QueryFunctionContext",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 729,
          "end": 746,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 732,
            "end": 746,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 732,
                "end": 733,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 733,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 736,
                "end": 746,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 743,
                  "end": 746,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 744,
                      "end": 745,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 745,
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
                  "start": 736,
                  "end": 743,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 590,
        "end": 671,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 594,
            "end": 605,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 598,
              "end": 605
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 594,
              "end": 595,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 609,
            "end": 646,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 627,
              "end": 635,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 627,
                "end": 635,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 638,
              "end": 646,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 638,
                "end": 646,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 609,
              "end": 618,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 650,
            "end": 668,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 663,
              "end": 668
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 650,
              "end": 660,
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 749,
      "end": 1119,
      "body": {
        "type": "TSInterfaceBody",
        "start": 913,
        "end": 1119,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 917,
            "end": 944,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 917,
              "end": 922,
              "decorators": [],
              "name": "retry",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 923,
              "end": 943,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 925,
                "end": 943,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 935,
                  "end": 943,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 936,
                      "end": 942,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 936,
                        "end": 942,
                        "decorators": [],
                        "name": "TError",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 935,
                  "decorators": [],
                  "name": "RetryValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 947,
            "end": 1008,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 947,
              "end": 954,
              "decorators": [],
              "name": "queryFn",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 955,
              "end": 1007,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 957,
                "end": 1007,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 970,
                  "end": 1007,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 971,
                      "end": 983,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 971,
                        "end": 983,
                        "decorators": [],
                        "name": "TQueryFnData",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 985,
                      "end": 994,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 985,
                        "end": 994,
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 996,
                      "end": 1006,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 996,
                        "end": 1006,
                        "decorators": [],
                        "name": "TPageParam",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 957,
                  "end": 970,
                  "decorators": [],
                  "name": "QueryFunction",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1011,
            "end": 1032,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1011,
              "end": 1019,
              "decorators": [],
              "name": "queryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1020,
              "end": 1031,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1022,
                "end": 1031,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1031,
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1035,
            "end": 1055,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1035,
              "end": 1046,
              "decorators": [],
              "name": "initialData",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1047,
              "end": 1054,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1049,
                "end": 1054,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1049,
                  "end": 1054,
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1058,
            "end": 1117,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1058,
              "end": 1078,
              "decorators": [],
              "name": "initialDataUpdatedAt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1079,
              "end": 1116,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1081,
                "end": 1116,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1081,
                    "end": 1087
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1091,
                    "end": 1115,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1094,
                      "end": 1115,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1097,
                        "end": 1115,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1097,
                            "end": 1103
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1106,
                            "end": 1115
                          }
                        ]
                      }
                    },
                    "typeParameters": null
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
        "start": 759,
        "end": 771,
        "decorators": [],
        "name": "QueryOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 771,
        "end": 912,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 775,
            "end": 797,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 790,
              "end": 797
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 775,
              "end": 787,
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 801,
            "end": 822,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 810,
              "end": 822,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 810,
                "end": 822,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 801,
              "end": 807,
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 826,
            "end": 846,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 834,
              "end": 846,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 834,
                "end": 846,
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 826,
              "end": 831,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 850,
            "end": 887,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 868,
              "end": 876,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 868,
                "end": 876,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 879,
              "end": 887,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 879,
                "end": 887,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 850,
              "end": 859,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 891,
            "end": 909,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 904,
              "end": 909
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 891,
              "end": 901,
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1121,
      "end": 1516,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1424,
        "end": 1516,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1428,
            "end": 1446,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1428,
              "end": 1435,
              "decorators": [],
              "name": "enabled",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1436,
              "end": 1445,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1438,
                "end": 1445
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1449,
            "end": 1474,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1449,
              "end": 1464,
              "decorators": [],
              "name": "refetchInterval",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1465,
              "end": 1473,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1467,
                "end": 1473
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1477,
            "end": 1514,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1477,
              "end": 1483,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1484,
              "end": 1513,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1486,
                "end": 1513,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1487,
                    "end": 1503,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1491,
                      "end": 1503,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1493,
                        "end": 1503,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1493,
                          "end": 1503,
                          "decorators": [],
                          "name": "TQueryData",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1505,
                  "end": 1513,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1508,
                    "end": 1513,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1508,
                      "end": 1513,
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1330,
          "end": 1423,
          "expression": {
            "type": "Identifier",
            "start": 1330,
            "end": 1342,
            "decorators": [],
            "name": "QueryOptions",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1342,
            "end": 1423,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1348,
                "end": 1360,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1360,
                  "decorators": [],
                  "name": "TQueryFnData",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1366,
                "end": 1372,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1366,
                  "end": 1372,
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1378,
                "end": 1388,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1388,
                  "decorators": [],
                  "name": "TQueryData",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1394,
                "end": 1403,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1394,
                  "end": 1403,
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1409,
                "end": 1419,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1409,
                  "end": 1419,
                  "decorators": [],
                  "name": "TPageParam",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1131,
        "end": 1151,
        "decorators": [],
        "name": "QueryObserverOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1151,
        "end": 1321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1155,
            "end": 1177,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1170,
              "end": 1177
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1155,
              "end": 1167,
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1181,
            "end": 1202,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1190,
              "end": 1202,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1190,
                "end": 1202,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1181,
              "end": 1187,
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1206,
            "end": 1226,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1214,
              "end": 1226,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1214,
                "end": 1226,
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1206,
              "end": 1211,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1230,
            "end": 1255,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1243,
              "end": 1255,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1243,
                "end": 1255,
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1230,
              "end": 1240,
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1259,
            "end": 1296,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1277,
              "end": 1285,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1277,
                "end": 1285,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 1288,
              "end": 1296,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1288,
                "end": 1296,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1259,
              "end": 1268,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1300,
            "end": 1318,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 1313,
              "end": 1318
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1300,
              "end": 1310,
              "decorators": [],
              "name": "TPageParam",
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
      "start": 1518,
      "end": 1921,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1523,
        "end": 1538,
        "decorators": [],
        "name": "UseQueryOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1689,
        "end": 1920,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1706,
          "end": 1808,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1712,
            "end": 1808,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1732,
              "end": 1808,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1738,
                  "end": 1750,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1738,
                    "end": 1750,
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1756,
                  "end": 1762,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1756,
                    "end": 1762,
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1768,
                  "end": 1773,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1768,
                    "end": 1773,
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1779,
                  "end": 1789,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1779,
                    "end": 1789,
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1795,
                  "end": 1804,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1795,
                    "end": 1804,
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1712,
              "end": 1732,
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1694,
          "end": 1702,
          "decorators": [],
          "name": "Property",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1811,
          "end": 1917,
          "indexType": {
            "type": "TSTypeReference",
            "start": 1908,
            "end": 1916,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1908,
              "end": 1916,
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 1811,
            "end": 1907,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1831,
              "end": 1907,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1837,
                  "end": 1849,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1837,
                    "end": 1849,
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1855,
                  "end": 1861,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1855,
                    "end": 1861,
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1867,
                  "end": 1872,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1867,
                    "end": 1872,
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1878,
                  "end": 1888,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1878,
                    "end": 1888,
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1894,
                  "end": 1903,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1894,
                    "end": 1903,
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1811,
              "end": 1831,
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1538,
        "end": 1686,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1542,
            "end": 1564,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1557,
              "end": 1564
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1542,
              "end": 1554,
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1568,
            "end": 1589,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1577,
              "end": 1589,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1577,
                "end": 1589,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1568,
              "end": 1574,
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1593,
            "end": 1613,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1601,
              "end": 1613,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1601,
                "end": 1613,
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1593,
              "end": 1598,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1617,
            "end": 1642,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1630,
              "end": 1642,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1630,
                "end": 1642,
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1617,
              "end": 1627,
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1646,
            "end": 1683,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1664,
              "end": 1672,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1664,
                "end": 1672,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 1675,
              "end": 1683,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1675,
                "end": 1683,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1646,
              "end": 1655,
              "decorators": [],
              "name": "TQueryKey",
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
      "start": 1923,
      "end": 2181,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1928,
        "end": 1956,
        "decorators": [],
        "name": "UndefinedInitialQueryOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2078,
        "end": 2180,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2078,
            "end": 2147,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2093,
              "end": 2147,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2094,
                  "end": 2106,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2094,
                    "end": 2106,
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2108,
                  "end": 2114,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2108,
                    "end": 2114,
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2116,
                  "end": 2121,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2116,
                    "end": 2121,
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2123,
                  "end": 2135,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2123,
                    "end": 2135,
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2137,
                  "end": 2146,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2137,
                    "end": 2146,
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2078,
              "end": 2093,
              "decorators": [],
              "name": "UseQueryOptions",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 2150,
            "end": 2180,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2154,
                "end": 2178,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2154,
                  "end": 2165,
                  "decorators": [],
                  "name": "initialData",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2166,
                  "end": 2177,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 2168,
                    "end": 2177
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1956,
        "end": 2075,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1960,
            "end": 1982,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1975,
              "end": 1982
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1960,
              "end": 1972,
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1986,
            "end": 2007,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1995,
              "end": 2007,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1995,
                "end": 2007,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1986,
              "end": 1992,
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2011,
            "end": 2031,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 2019,
              "end": 2031,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2019,
                "end": 2031,
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2011,
              "end": 2016,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2035,
            "end": 2072,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2053,
              "end": 2061,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2053,
                "end": 2061,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 2064,
              "end": 2072,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2064,
                "end": 2072,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2035,
              "end": 2044,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2183,
      "end": 2788,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2257,
        "end": 2788,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2261,
            "end": 2285,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2261,
              "end": 2265,
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
              "start": 2265,
              "end": 2284,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2267,
                "end": 2284,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2267,
                    "end": 2272,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2267,
                      "end": 2272,
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2275,
                    "end": 2284
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2288,
            "end": 2310,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2288,
              "end": 2301,
              "decorators": [],
              "name": "dataUpdatedAt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2301,
              "end": 2309,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2303,
                "end": 2309
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2313,
            "end": 2334,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2313,
              "end": 2318,
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
              "start": 2318,
              "end": 2333,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2320,
                "end": 2333,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2320,
                    "end": 2326,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2320,
                      "end": 2326,
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2329,
                    "end": 2333
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2337,
            "end": 2360,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2337,
              "end": 2351,
              "decorators": [],
              "name": "errorUpdatedAt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2351,
              "end": 2359,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2353,
                "end": 2359
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2363,
            "end": 2384,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2363,
              "end": 2375,
              "decorators": [],
              "name": "failureCount",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2375,
              "end": 2383,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2377,
                "end": 2383
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2387,
            "end": 2416,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2387,
              "end": 2400,
              "decorators": [],
              "name": "failureReason",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2400,
              "end": 2415,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2402,
                "end": 2415,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2402,
                    "end": 2408,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2402,
                      "end": 2408,
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2411,
                    "end": 2415
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2419,
            "end": 2444,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2419,
              "end": 2435,
              "decorators": [],
              "name": "errorUpdateCount",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2435,
              "end": 2443,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2437,
                "end": 2443
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2447,
            "end": 2464,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2447,
              "end": 2454,
              "decorators": [],
              "name": "isError",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2454,
              "end": 2463,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2456,
                "end": 2463
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2467,
            "end": 2486,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2467,
              "end": 2476,
              "decorators": [],
              "name": "isFetched",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2476,
              "end": 2485,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2478,
                "end": 2485
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2489,
            "end": 2518,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2489,
              "end": 2508,
              "decorators": [],
              "name": "isFetchedAfterMount",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2508,
              "end": 2517,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2510,
                "end": 2517
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2521,
            "end": 2541,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2521,
              "end": 2531,
              "decorators": [],
              "name": "isFetching",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2531,
              "end": 2540,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2533,
                "end": 2540
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2544,
            "end": 2563,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2544,
              "end": 2553,
              "decorators": [],
              "name": "isLoading",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2553,
              "end": 2562,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2555,
                "end": 2562
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2566,
            "end": 2585,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2566,
              "end": 2575,
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2575,
              "end": 2584,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2577,
                "end": 2584
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2588,
            "end": 2612,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2588,
              "end": 2602,
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2602,
              "end": 2611,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2604,
                "end": 2611
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2615,
            "end": 2641,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2615,
              "end": 2631,
              "decorators": [],
              "name": "isInitialLoading",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2631,
              "end": 2640,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2633,
                "end": 2640
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2644,
            "end": 2662,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2644,
              "end": 2652,
              "decorators": [],
              "name": "isPaused",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2652,
              "end": 2661,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2654,
                "end": 2661
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2665,
            "end": 2692,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2665,
              "end": 2682,
              "decorators": [],
              "name": "isPlaceholderData",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2682,
              "end": 2691,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2684,
                "end": 2691
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2695,
            "end": 2719,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2695,
              "end": 2709,
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2709,
              "end": 2718,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2711,
                "end": 2718
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2722,
            "end": 2744,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2722,
              "end": 2734,
              "decorators": [],
              "name": "isRefetching",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2734,
              "end": 2743,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2736,
                "end": 2743
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2747,
            "end": 2764,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2747,
              "end": 2754,
              "decorators": [],
              "name": "isStale",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2754,
              "end": 2763,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2756,
                "end": 2763
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2767,
            "end": 2786,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2767,
              "end": 2776,
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2776,
              "end": 2785,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2778,
                "end": 2785
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2193,
        "end": 2216,
        "decorators": [],
        "name": "QueryObserverBaseResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2216,
        "end": 2256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2217,
            "end": 2232,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2225,
              "end": 2232
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2217,
              "end": 2222,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2234,
            "end": 2255,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 2243,
              "end": 2255,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2243,
                "end": 2255,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2234,
              "end": 2240,
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2790,
      "end": 3077,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2916,
        "end": 3077,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2920,
            "end": 2932,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2920,
              "end": 2924,
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
              "start": 2924,
              "end": 2931,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2926,
                "end": 2931,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2926,
                  "end": 2931,
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2935,
            "end": 2947,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2935,
              "end": 2940,
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
              "start": 2940,
              "end": 2946,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 2942,
                "end": 2946
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2950,
            "end": 2965,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2950,
              "end": 2957,
              "decorators": [],
              "name": "isError",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2957,
              "end": 2964,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2959,
                "end": 2964,
                "literal": {
                  "type": "Literal",
                  "start": 2959,
                  "end": 2964,
                  "raw": "false",
                  "value": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2968,
            "end": 2985,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2968,
              "end": 2977,
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2977,
              "end": 2984,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2979,
                "end": 2984,
                "literal": {
                  "type": "Literal",
                  "start": 2979,
                  "end": 2984,
                  "raw": "false",
                  "value": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2988,
            "end": 3010,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2988,
              "end": 3002,
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3002,
              "end": 3009,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3004,
                "end": 3009,
                "literal": {
                  "type": "Literal",
                  "start": 3004,
                  "end": 3009,
                  "raw": "false",
                  "value": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3013,
            "end": 3035,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3013,
              "end": 3027,
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3027,
              "end": 3034,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3029,
                "end": 3034,
                "literal": {
                  "type": "Literal",
                  "start": 3029,
                  "end": 3034,
                  "raw": "false",
                  "value": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3038,
            "end": 3054,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3038,
              "end": 3047,
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3047,
              "end": 3053,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3049,
                "end": 3053,
                "literal": {
                  "type": "Literal",
                  "start": 3049,
                  "end": 3053,
                  "raw": "true",
                  "value": true
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3057,
            "end": 3075,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3057,
              "end": 3063,
              "decorators": [],
              "name": "status",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3063,
              "end": 3074,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3065,
                "end": 3074,
                "literal": {
                  "type": "Literal",
                  "start": 3065,
                  "end": 3074,
                  "raw": "\"success\"",
                  "value": "success"
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
          "start": 2877,
          "end": 2915,
          "expression": {
            "type": "Identifier",
            "start": 2877,
            "end": 2900,
            "decorators": [],
            "name": "QueryObserverBaseResult",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2900,
            "end": 2915,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2901,
                "end": 2906,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2901,
                  "end": 2906,
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 2908,
                "end": 2914,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2908,
                  "end": 2914,
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2800,
        "end": 2826,
        "decorators": [],
        "name": "QueryObserverSuccessResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2826,
        "end": 2866,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2827,
            "end": 2842,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2835,
              "end": 2842
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2827,
              "end": 2832,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2844,
            "end": 2865,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 2853,
              "end": 2865,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2853,
                "end": 2865,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2844,
              "end": 2850,
              "decorators": [],
              "name": "TError",
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
      "start": 3079,
      "end": 3202,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3084,
        "end": 3110,
        "decorators": [],
        "name": "DefinedQueryObserverResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3160,
        "end": 3201,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3186,
          "end": 3201,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3187,
              "end": 3192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3187,
                "end": 3192,
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3194,
              "end": 3200,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3194,
                "end": 3200,
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3160,
          "end": 3186,
          "decorators": [],
          "name": "QueryObserverSuccessResult",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3110,
        "end": 3157,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3114,
            "end": 3129,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3122,
              "end": 3129
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3114,
              "end": 3119,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3133,
            "end": 3154,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3142,
              "end": 3154,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3142,
                "end": 3154,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3133,
              "end": 3139,
              "decorators": [],
              "name": "TError",
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
      "start": 3203,
      "end": 3319,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3208,
        "end": 3227,
        "decorators": [],
        "name": "QueryObserverResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3277,
        "end": 3318,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3303,
          "end": 3318,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3304,
              "end": 3309,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3304,
                "end": 3309,
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3311,
              "end": 3317,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3311,
                "end": 3317,
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3277,
          "end": 3303,
          "decorators": [],
          "name": "DefinedQueryObserverResult",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3227,
        "end": 3274,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3231,
            "end": 3246,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3239,
              "end": 3246
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3231,
              "end": 3236,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3250,
            "end": 3271,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3259,
              "end": 3271,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3259,
                "end": 3271,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3250,
              "end": 3256,
              "decorators": [],
              "name": "TError",
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
      "start": 3321,
      "end": 3353,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3326,
        "end": 3331,
        "decorators": [],
        "name": "ToRef",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3337,
        "end": 3352,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3341,
            "end": 3350,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3341,
              "end": 3346,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3346,
              "end": 3349,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3348,
                "end": 3349,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3348,
                  "end": 3349,
                  "decorators": [],
                  "name": "T",
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
        "start": 3331,
        "end": 3334,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3332,
            "end": 3333,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3332,
              "end": 3333,
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3355,
      "end": 3646,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3360,
        "end": 3382,
        "decorators": [],
        "name": "UseBaseQueryReturnType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 3454,
        "end": 3645,
        "types": [
          {
            "type": "TSMappedType",
            "start": 3454,
            "end": 3604,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3464,
              "end": 3476,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3470,
                "end": 3476,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3470,
                  "end": 3476,
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 3459,
              "end": 3460,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": false,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 3479,
              "end": 3601,
              "checkType": {
                "type": "TSTypeReference",
                "start": 3479,
                "end": 3480,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3479,
                  "end": 3480,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSUnionType",
                "start": 3493,
                "end": 3552,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 3495,
                    "end": 3510,
                    "literal": {
                      "type": "Literal",
                      "start": 3495,
                      "end": 3510,
                      "raw": "\"fetchNextPage\"",
                      "value": "fetchNextPage"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3517,
                    "end": 3536,
                    "literal": {
                      "type": "Literal",
                      "start": 3517,
                      "end": 3536,
                      "raw": "\"fetchPreviousPage\"",
                      "value": "fetchPreviousPage"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3543,
                    "end": 3552,
                    "literal": {
                      "type": "Literal",
                      "start": 3543,
                      "end": 3552,
                      "raw": "\"refetch\"",
                      "value": "refetch"
                    }
                  }
                ]
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 3575,
                "end": 3601,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3580,
                  "end": 3601,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 3581,
                      "end": 3600,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 3598,
                        "end": 3599,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3598,
                          "end": 3599,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 3581,
                        "end": 3597,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3589,
                          "end": 3597,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3590,
                              "end": 3596,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3590,
                                "end": 3596,
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3581,
                          "end": 3589,
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3575,
                  "end": 3580,
                  "decorators": [],
                  "name": "ToRef",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 3559,
                "end": 3568,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3566,
                  "end": 3567,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3566,
                    "end": 3567,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3559,
                  "end": 3565,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3559,
                    "end": 3565,
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 3607,
            "end": 3645,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 3611,
                "end": 3643,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3611,
                  "end": 3619,
                  "decorators": [],
                  "name": "suspense",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3619,
                  "end": 3642,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3621,
                    "end": 3642,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3624,
                      "end": 3642,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3627,
                        "end": 3642,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3634,
                          "end": 3642,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3635,
                              "end": 3641,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3635,
                                "end": 3641,
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3627,
                          "end": 3634,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3382,
        "end": 3451,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3386,
            "end": 3391,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3386,
              "end": 3391,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3395,
            "end": 3401,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3395,
              "end": 3401,
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3405,
            "end": 3448,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3414,
              "end": 3448,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3433,
                "end": 3448,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3434,
                    "end": 3439,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3434,
                      "end": 3439,
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3441,
                    "end": 3447,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3441,
                      "end": 3447,
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3414,
                "end": 3433,
                "decorators": [],
                "name": "QueryObserverResult",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3405,
              "end": 3411,
              "decorators": [],
              "name": "Result",
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
      "start": 3648,
      "end": 3727,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3653,
        "end": 3671,
        "decorators": [],
        "name": "UseQueryReturnType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3689,
        "end": 3726,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3711,
          "end": 3726,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3712,
              "end": 3717,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3712,
                "end": 3717,
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3719,
              "end": 3725,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3719,
                "end": 3725,
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3689,
          "end": 3711,
          "decorators": [],
          "name": "UseBaseQueryReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3671,
        "end": 3686,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3672,
            "end": 3677,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3672,
              "end": 3677,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3679,
            "end": 3685,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3679,
              "end": 3685,
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3729,
      "end": 3993,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3746,
        "end": 3754,
        "decorators": [],
        "name": "useQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3877,
          "end": 3954,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3884,
            "end": 3954,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3886,
              "end": 3954,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3914,
                "end": 3954,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3915,
                    "end": 3927,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3915,
                      "end": 3927,
                      "decorators": [],
                      "name": "TQueryFnData",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3929,
                    "end": 3935,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3929,
                      "end": 3935,
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3937,
                    "end": 3942,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3937,
                      "end": 3942,
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3944,
                    "end": 3953,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3944,
                      "end": 3953,
                      "decorators": [],
                      "name": "TQueryKey",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3886,
                "end": 3914,
                "decorators": [],
                "name": "UndefinedInitialQueryOptions",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3957,
        "end": 3992,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3959,
          "end": 3992,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3977,
            "end": 3992,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3978,
                "end": 3983,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3978,
                  "end": 3983,
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 3985,
                "end": 3991,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3985,
                  "end": 3991,
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3959,
            "end": 3977,
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3754,
        "end": 3873,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3758,
            "end": 3780,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3773,
              "end": 3780
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3758,
              "end": 3770,
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3784,
            "end": 3805,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3793,
              "end": 3805,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3793,
                "end": 3805,
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3784,
              "end": 3790,
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3809,
            "end": 3829,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3817,
              "end": 3829,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3817,
                "end": 3829,
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3809,
              "end": 3814,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3833,
            "end": 3870,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3851,
              "end": 3859,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3851,
                "end": 3859,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 3862,
              "end": 3870,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3862,
                "end": 3870,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3833,
              "end": 3842,
              "decorators": [],
              "name": "TQueryKey",
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
      "start": 3995,
      "end": 4040,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 4004,
          "end": 4027,
          "exported": {
            "type": "Identifier",
            "start": 4009,
            "end": 4027,
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 4009,
            "end": 4027,
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 4029,
          "end": 4037,
          "exported": {
            "type": "Identifier",
            "start": 4029,
            "end": 4037,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 4029,
            "end": 4037,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 71,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 70,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 69,
        "raw": "'./useQuery-CPqkvEsh.js'",
        "value": "./useQuery-CPqkvEsh.js"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 27,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 27,
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 27,
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 29,
          "end": 37,
          "exported": {
            "type": "Identifier",
            "start": 29,
            "end": 37,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 37,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 714,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 46,
        "raw": "'@tanstack/vue-query'",
        "value": "@tanstack/vue-query"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 61,
            "decorators": [],
            "name": "baseUrl",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 64,
            "end": 93,
            "raw": "'https://api.publicapis.org/'",
            "value": "https://api.publicapis.org/"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 95,
      "end": 232,
      "body": {
        "type": "TSInterfaceBody",
        "start": 112,
        "end": 232,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 116,
            "end": 127,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "API",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 127,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 141,
              "decorators": [],
              "name": "Description",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 164,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 156,
              "decorators": [],
              "name": "Auth",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 167,
            "end": 181,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "decorators": [],
              "name": "HTTPS",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 181,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 174,
                "end": 181
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 184,
            "end": 196,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 188,
              "decorators": [],
              "name": "Cors",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 199,
            "end": 211,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 203,
              "decorators": [],
              "name": "Link",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 211,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 214,
            "end": 230,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 222,
              "decorators": [],
              "name": "Category",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 111,
        "decorators": [],
        "name": "IEntry",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 445,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 247,
            "decorators": [],
            "name": "testApi",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 250,
            "end": 445,
            "properties": [
              {
                "type": "Property",
                "start": 254,
                "end": 443,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 264,
                  "decorators": [],
                  "name": "getEntries",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 266,
                  "end": 443,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 291,
                    "end": 443,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 297,
                        "end": 439,
                        "argument": {
                          "type": "CallExpression",
                          "start": 304,
                          "end": 439,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 413,
                              "end": 438,
                              "async": false,
                              "body": {
                                "type": "CallExpression",
                                "start": 422,
                                "end": 438,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 434,
                                    "end": 437,
                                    "decorators": [],
                                    "name": "err",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 422,
                                  "end": 433,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 422,
                                    "end": 429,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 430,
                                    "end": 433,
                                    "decorators": [],
                                    "name": "log",
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
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 414,
                                  "end": 417,
                                  "decorators": [],
                                  "name": "err",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "typeParameters": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 304,
                            "end": 412,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 304,
                              "end": 399,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 376,
                                  "end": 398,
                                  "async": false,
                                  "body": {
                                    "type": "MemberExpression",
                                    "start": 386,
                                    "end": 398,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 386,
                                      "end": 390,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 391,
                                      "end": 398,
                                      "decorators": [],
                                      "name": "entries",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 377,
                                      "end": 381,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 304,
                                "end": 375,
                                "computed": false,
                                "object": {
                                  "type": "CallExpression",
                                  "start": 304,
                                  "end": 363,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 343,
                                      "end": 362,
                                      "async": false,
                                      "body": {
                                        "type": "CallExpression",
                                        "start": 352,
                                        "end": 362,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 352,
                                          "end": 360,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 352,
                                            "end": 355,
                                            "decorators": [],
                                            "name": "res",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 356,
                                            "end": 360,
                                            "decorators": [],
                                            "name": "json",
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
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 344,
                                          "end": 347,
                                          "decorators": [],
                                          "name": "res",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "returnType": null,
                                      "typeParameters": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 304,
                                    "end": 342,
                                    "computed": false,
                                    "object": {
                                      "type": "CallExpression",
                                      "start": 304,
                                      "end": 330,
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "start": 310,
                                          "end": 329,
                                          "operator": "+",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 310,
                                            "end": 317,
                                            "decorators": [],
                                            "name": "baseUrl",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 320,
                                            "end": 329,
                                            "raw": "'entries'",
                                            "value": "entries"
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 304,
                                        "end": 309,
                                        "decorators": [],
                                        "name": "fetch",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 338,
                                      "end": 342,
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 371,
                                  "end": 375,
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 407,
                              "end": 412,
                              "decorators": [],
                              "name": "catch",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
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
                    "start": 268,
                    "end": 287,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 270,
                      "end": 287,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 277,
                        "end": 287,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 278,
                            "end": 286,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 278,
                              "end": 284,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 278,
                                "end": 284,
                                "decorators": [],
                                "name": "IEntry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 277,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 547,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 547,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 462,
            "decorators": [],
            "name": "entryKeys",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 465,
            "end": 547,
            "properties": [
              {
                "type": "Property",
                "start": 469,
                "end": 494,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 472,
                  "decorators": [],
                  "name": "all",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 474,
                  "end": 494,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 474,
                    "end": 485,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 475,
                        "end": 484,
                        "raw": "'entries'",
                        "value": "entries"
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 489,
                    "end": 494,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 489,
                      "end": 494,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 498,
                "end": 545,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 502,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 504,
                  "end": 545,
                  "async": false,
                  "body": {
                    "type": "TSAsExpression",
                    "start": 510,
                    "end": 545,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 510,
                      "end": 536,
                      "elements": [
                        {
                          "type": "SpreadElement",
                          "start": 511,
                          "end": 527,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 514,
                            "end": 527,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 514,
                              "end": 523,
                              "decorators": [],
                              "name": "entryKeys",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 524,
                              "end": 527,
                              "decorators": [],
                              "name": "all",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 529,
                          "end": 535,
                          "raw": "'list'",
                          "value": "list"
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 540,
                      "end": 545,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 540,
                        "end": 545,
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 549,
      "end": 714,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 556,
        "end": 714,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 562,
            "end": 714,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 562,
              "end": 572,
              "decorators": [],
              "name": "useEntries",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 575,
              "end": 714,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 581,
                "end": 714,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 585,
                    "end": 712,
                    "argument": {
                      "type": "CallExpression",
                      "start": 592,
                      "end": 712,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 601,
                          "end": 711,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 607,
                              "end": 633,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 607,
                                "end": 615,
                                "decorators": [],
                                "name": "queryKey",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "CallExpression",
                                "start": 617,
                                "end": 633,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 617,
                                  "end": 631,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 617,
                                    "end": 626,
                                    "decorators": [],
                                    "name": "entryKeys",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 627,
                                    "end": 631,
                                    "decorators": [],
                                    "name": "list",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 639,
                              "end": 666,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 639,
                                "end": 646,
                                "decorators": [],
                                "name": "queryFn",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "start": 648,
                                "end": 666,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 648,
                                  "end": 655,
                                  "decorators": [],
                                  "name": "testApi",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 656,
                                  "end": 666,
                                  "decorators": [],
                                  "name": "getEntries",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "start": 672,
                              "end": 707,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 672,
                                "end": 678,
                                "decorators": [],
                                "name": "select",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 680,
                                "end": 707,
                                "async": false,
                                "body": {
                                  "type": "CallExpression",
                                  "start": 690,
                                  "end": 707,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 701,
                                      "end": 702,
                                      "raw": "0",
                                      "value": 0
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 704,
                                      "end": 706,
                                      "raw": "10",
                                      "value": 10
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 690,
                                    "end": 700,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 690,
                                      "end": 694,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 695,
                                      "end": 700,
                                      "decorators": [],
                                      "name": "slice",
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
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 681,
                                    "end": 685,
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 600,
                        "decorators": [],
                        "name": "useQuery",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
