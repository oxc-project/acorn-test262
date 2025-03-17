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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "QueryKey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 16,
        "end": 38,
        "typeName": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "name": "ReadonlyArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 59,
        "name": "Register",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 62,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 64,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 81,
        "name": "DefaultError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 84,
        "end": 155,
        "checkType": {
          "type": "TSTypeReference",
          "start": 84,
          "end": 92,
          "typeName": {
            "type": "Identifier",
            "start": 84,
            "end": 92,
            "name": "Register",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 105,
                "end": 117,
                "name": "defaultError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "name": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 131,
                      "name": "TError",
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
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 139,
          "end": 145,
          "typeName": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "name": "TError",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 150,
          "end": 155,
          "typeName": {
            "type": "Identifier",
            "start": 150,
            "end": 155,
            "name": "Error",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 158,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 182,
        "name": "ShouldRetryFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 189,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 204,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 204,
                "name": "DefaultError",
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
        "type": "TSFunctionType",
        "start": 208,
        "end": 263,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 212,
            "end": 232,
            "name": "failureCount",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 232,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 226,
                "end": 232
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 236,
            "end": 249,
            "name": "error",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 249,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 249,
                  "name": "TError",
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
          "start": 253,
          "end": 263,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 256,
            "end": 263
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 265,
      "end": 338,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 280,
        "name": "RetryValue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 281,
              "end": 287,
              "name": "TError",
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
            "typeName": {
              "type": "Identifier",
              "start": 310,
              "end": 329,
              "name": "ShouldRetryFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 329,
              "end": 337,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 330,
                  "end": 336,
                  "typeName": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 336,
                    "name": "TError",
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
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 340,
      "end": 570,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 365,
        "name": "QueryFunctionContext",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 369,
              "end": 378,
              "name": "TQueryKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 395,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 398,
              "end": 406,
              "typeName": {
                "type": "Identifier",
                "start": 398,
                "end": 406,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 410,
            "end": 428,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 420,
              "name": "TPageParam",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 423,
              "end": 428
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 435,
                "end": 445,
                "name": "TPageParam",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 467,
          "end": 501,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 475,
              "end": 495,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 475,
                "end": 483,
                "name": "queryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 483,
                "end": 494,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 485,
                  "end": 494,
                  "typeName": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 494,
                    "name": "TQueryKey",
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
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 506,
          "end": 569,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 514,
              "end": 534,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 514,
                "end": 522,
                "name": "queryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 522,
                "end": 533,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 524,
                  "end": 533,
                  "typeName": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 533,
                    "name": "TQueryKey",
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
              "start": 541,
              "end": 563,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 541,
                "end": 550,
                "name": "pageParam",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 550,
                "end": 562,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 552,
                  "end": 562,
                  "typeName": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 562,
                    "name": "TPageParam",
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 572,
      "end": 747,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 590,
        "name": "QueryFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 594,
              "end": 595,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 598,
              "end": 605
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 609,
            "end": 646,
            "name": {
              "type": "Identifier",
              "start": 609,
              "end": 618,
              "name": "TQueryKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 627,
              "end": 635,
              "typeName": {
                "type": "Identifier",
                "start": 627,
                "end": 635,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 638,
              "end": 646,
              "typeName": {
                "type": "Identifier",
                "start": 638,
                "end": 646,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 650,
            "end": 668,
            "name": {
              "type": "Identifier",
              "start": 650,
              "end": 660,
              "name": "TPageParam",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 663,
              "end": 668
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 674,
        "end": 746,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 675,
            "end": 727,
            "name": "context",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 727,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 684,
                "end": 727,
                "typeName": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 704,
                  "name": "QueryFunctionContext",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 704,
                  "end": 727,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 705,
                      "end": 714,
                      "typeName": {
                        "type": "Identifier",
                        "start": 705,
                        "end": 714,
                        "name": "TQueryKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 716,
                      "end": 726,
                      "typeName": {
                        "type": "Identifier",
                        "start": 716,
                        "end": 726,
                        "name": "TPageParam",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 733,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 736,
                "end": 746,
                "typeName": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 743,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 743,
                  "end": 746,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 744,
                      "end": 745,
                      "typeName": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 745,
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
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 749,
      "end": 1119,
      "id": {
        "type": "Identifier",
        "start": 759,
        "end": 771,
        "name": "QueryOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 771,
        "end": 912,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 775,
            "end": 797,
            "name": {
              "type": "Identifier",
              "start": 775,
              "end": 787,
              "name": "TQueryFnData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 790,
              "end": 797
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 801,
            "end": 822,
            "name": {
              "type": "Identifier",
              "start": 801,
              "end": 807,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 810,
              "end": 822,
              "typeName": {
                "type": "Identifier",
                "start": 810,
                "end": 822,
                "name": "DefaultError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 826,
            "end": 846,
            "name": {
              "type": "Identifier",
              "start": 826,
              "end": 831,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 834,
              "end": 846,
              "typeName": {
                "type": "Identifier",
                "start": 834,
                "end": 846,
                "name": "TQueryFnData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 850,
            "end": 887,
            "name": {
              "type": "Identifier",
              "start": 850,
              "end": 859,
              "name": "TQueryKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 868,
              "end": 876,
              "typeName": {
                "type": "Identifier",
                "start": 868,
                "end": 876,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 879,
              "end": 887,
              "typeName": {
                "type": "Identifier",
                "start": 879,
                "end": 887,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 891,
            "end": 909,
            "name": {
              "type": "Identifier",
              "start": 891,
              "end": 901,
              "name": "TPageParam",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 904,
              "end": 909
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 913,
        "end": 1119,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 917,
            "end": 944,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 917,
              "end": 922,
              "name": "retry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 923,
              "end": 943,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 925,
                "end": 943,
                "typeName": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 935,
                  "name": "RetryValue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 935,
                  "end": 943,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 936,
                      "end": 942,
                      "typeName": {
                        "type": "Identifier",
                        "start": 936,
                        "end": 942,
                        "name": "TError",
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
          },
          {
            "type": "TSPropertySignature",
            "start": 947,
            "end": 1008,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 947,
              "end": 954,
              "name": "queryFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 955,
              "end": 1007,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 957,
                "end": 1007,
                "typeName": {
                  "type": "Identifier",
                  "start": 957,
                  "end": 970,
                  "name": "QueryFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 970,
                  "end": 1007,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 971,
                      "end": 983,
                      "typeName": {
                        "type": "Identifier",
                        "start": 971,
                        "end": 983,
                        "name": "TQueryFnData",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 985,
                      "end": 994,
                      "typeName": {
                        "type": "Identifier",
                        "start": 985,
                        "end": 994,
                        "name": "TQueryKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 996,
                      "end": 1006,
                      "typeName": {
                        "type": "Identifier",
                        "start": 996,
                        "end": 1006,
                        "name": "TPageParam",
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
          },
          {
            "type": "TSPropertySignature",
            "start": 1011,
            "end": 1032,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1011,
              "end": 1019,
              "name": "queryKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1020,
              "end": 1031,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1022,
                "end": 1031,
                "typeName": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1031,
                  "name": "TQueryKey",
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
            "start": 1035,
            "end": 1055,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1035,
              "end": 1046,
              "name": "initialData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1047,
              "end": 1054,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1049,
                "end": 1054,
                "typeName": {
                  "type": "Identifier",
                  "start": 1049,
                  "end": 1054,
                  "name": "TData",
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
            "start": 1058,
            "end": 1117,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1058,
              "end": 1078,
              "name": "initialDataUpdatedAt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "typeParameters": null,
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
                    }
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
      "type": "TSInterfaceDeclaration",
      "start": 1121,
      "end": 1516,
      "id": {
        "type": "Identifier",
        "start": 1131,
        "end": 1151,
        "name": "QueryObserverOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1330,
          "end": 1423,
          "expression": {
            "type": "Identifier",
            "start": 1330,
            "end": 1342,
            "name": "QueryOptions",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1360,
                  "name": "TQueryFnData",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1366,
                "end": 1372,
                "typeName": {
                  "type": "Identifier",
                  "start": 1366,
                  "end": 1372,
                  "name": "TError",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1378,
                "end": 1388,
                "typeName": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1388,
                  "name": "TQueryData",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1394,
                "end": 1403,
                "typeName": {
                  "type": "Identifier",
                  "start": 1394,
                  "end": 1403,
                  "name": "TQueryKey",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1409,
                "end": 1419,
                "typeName": {
                  "type": "Identifier",
                  "start": 1409,
                  "end": 1419,
                  "name": "TPageParam",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1151,
        "end": 1321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1155,
            "end": 1177,
            "name": {
              "type": "Identifier",
              "start": 1155,
              "end": 1167,
              "name": "TQueryFnData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1170,
              "end": 1177
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1181,
            "end": 1202,
            "name": {
              "type": "Identifier",
              "start": 1181,
              "end": 1187,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1190,
              "end": 1202,
              "typeName": {
                "type": "Identifier",
                "start": 1190,
                "end": 1202,
                "name": "DefaultError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1206,
            "end": 1226,
            "name": {
              "type": "Identifier",
              "start": 1206,
              "end": 1211,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1214,
              "end": 1226,
              "typeName": {
                "type": "Identifier",
                "start": 1214,
                "end": 1226,
                "name": "TQueryFnData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1230,
            "end": 1255,
            "name": {
              "type": "Identifier",
              "start": 1230,
              "end": 1240,
              "name": "TQueryData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1243,
              "end": 1255,
              "typeName": {
                "type": "Identifier",
                "start": 1243,
                "end": 1255,
                "name": "TQueryFnData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1259,
            "end": 1296,
            "name": {
              "type": "Identifier",
              "start": 1259,
              "end": 1268,
              "name": "TQueryKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1277,
              "end": 1285,
              "typeName": {
                "type": "Identifier",
                "start": 1277,
                "end": 1285,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 1288,
              "end": 1296,
              "typeName": {
                "type": "Identifier",
                "start": 1288,
                "end": 1296,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1300,
            "end": 1318,
            "name": {
              "type": "Identifier",
              "start": 1300,
              "end": 1310,
              "name": "TPageParam",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 1313,
              "end": 1318
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1424,
        "end": 1516,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1428,
            "end": 1446,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1428,
              "end": 1435,
              "name": "enabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1436,
              "end": 1445,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1438,
                "end": 1445
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1449,
            "end": 1474,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1449,
              "end": 1464,
              "name": "refetchInterval",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1465,
              "end": 1473,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1467,
                "end": 1473
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1477,
            "end": 1514,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1477,
              "end": 1483,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1484,
              "end": 1513,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1486,
                "end": 1513,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1487,
                    "end": 1503,
                    "name": "data",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1491,
                      "end": 1503,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1493,
                        "end": 1503,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1493,
                          "end": 1503,
                          "name": "TQueryData",
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
                  "start": 1505,
                  "end": 1513,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1508,
                    "end": 1513,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1508,
                      "end": 1513,
                      "name": "TData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 1518,
      "end": 1921,
      "id": {
        "type": "Identifier",
        "start": 1523,
        "end": 1538,
        "name": "UseQueryOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1542,
              "end": 1554,
              "name": "TQueryFnData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1557,
              "end": 1564
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1568,
            "end": 1589,
            "name": {
              "type": "Identifier",
              "start": 1568,
              "end": 1574,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1577,
              "end": 1589,
              "typeName": {
                "type": "Identifier",
                "start": 1577,
                "end": 1589,
                "name": "DefaultError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1593,
            "end": 1613,
            "name": {
              "type": "Identifier",
              "start": 1593,
              "end": 1598,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1601,
              "end": 1613,
              "typeName": {
                "type": "Identifier",
                "start": 1601,
                "end": 1613,
                "name": "TQueryFnData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1617,
            "end": 1642,
            "name": {
              "type": "Identifier",
              "start": 1617,
              "end": 1627,
              "name": "TQueryData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1630,
              "end": 1642,
              "typeName": {
                "type": "Identifier",
                "start": 1630,
                "end": 1642,
                "name": "TQueryFnData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1646,
            "end": 1683,
            "name": {
              "type": "Identifier",
              "start": 1646,
              "end": 1655,
              "name": "TQueryKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1664,
              "end": 1672,
              "typeName": {
                "type": "Identifier",
                "start": 1664,
                "end": 1672,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 1675,
              "end": 1683,
              "typeName": {
                "type": "Identifier",
                "start": 1675,
                "end": 1683,
                "name": "QueryKey",
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
        "type": "TSMappedType",
        "start": 1689,
        "end": 1920,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1694,
          "end": 1808,
          "name": {
            "type": "Identifier",
            "start": 1694,
            "end": 1702,
            "name": "Property",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1706,
            "end": 1808,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1712,
              "end": 1808,
              "typeName": {
                "type": "Identifier",
                "start": 1712,
                "end": 1732,
                "name": "QueryObserverOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1732,
                "end": 1808,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1738,
                    "end": 1750,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1738,
                      "end": 1750,
                      "name": "TQueryFnData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1756,
                    "end": 1762,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1756,
                      "end": 1762,
                      "name": "TError",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1768,
                    "end": 1773,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1768,
                      "end": 1773,
                      "name": "TData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1779,
                    "end": 1789,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1779,
                      "end": 1789,
                      "name": "TQueryData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1795,
                    "end": 1804,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1795,
                      "end": 1804,
                      "name": "TQueryKey",
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
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1811,
          "end": 1917,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1811,
            "end": 1907,
            "typeName": {
              "type": "Identifier",
              "start": 1811,
              "end": 1831,
              "name": "QueryObserverOptions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1831,
              "end": 1907,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1837,
                  "end": 1849,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1837,
                    "end": 1849,
                    "name": "TQueryFnData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1855,
                  "end": 1861,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1855,
                    "end": 1861,
                    "name": "TError",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1867,
                  "end": 1872,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1867,
                    "end": 1872,
                    "name": "TData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1878,
                  "end": 1888,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1878,
                    "end": 1888,
                    "name": "TQueryData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1894,
                  "end": 1903,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1894,
                    "end": 1903,
                    "name": "TQueryKey",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1908,
            "end": 1916,
            "typeName": {
              "type": "Identifier",
              "start": 1908,
              "end": 1916,
              "name": "Property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1706,
          "end": 1808,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1712,
            "end": 1808,
            "typeName": {
              "type": "Identifier",
              "start": 1712,
              "end": 1732,
              "name": "QueryObserverOptions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1732,
              "end": 1808,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1738,
                  "end": 1750,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1738,
                    "end": 1750,
                    "name": "TQueryFnData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1756,
                  "end": 1762,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1756,
                    "end": 1762,
                    "name": "TError",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1768,
                  "end": 1773,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1768,
                    "end": 1773,
                    "name": "TData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1779,
                  "end": 1789,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1779,
                    "end": 1789,
                    "name": "TQueryData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1795,
                  "end": 1804,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1795,
                    "end": 1804,
                    "name": "TQueryKey",
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
        "key": {
          "type": "Identifier",
          "start": 1694,
          "end": 1702,
          "name": "Property",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1923,
      "end": 2181,
      "id": {
        "type": "Identifier",
        "start": 1928,
        "end": 1956,
        "name": "UndefinedInitialQueryOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1960,
              "end": 1972,
              "name": "TQueryFnData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1975,
              "end": 1982
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1986,
            "end": 2007,
            "name": {
              "type": "Identifier",
              "start": 1986,
              "end": 1992,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1995,
              "end": 2007,
              "typeName": {
                "type": "Identifier",
                "start": 1995,
                "end": 2007,
                "name": "DefaultError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2011,
            "end": 2031,
            "name": {
              "type": "Identifier",
              "start": 2011,
              "end": 2016,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 2019,
              "end": 2031,
              "typeName": {
                "type": "Identifier",
                "start": 2019,
                "end": 2031,
                "name": "TQueryFnData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2035,
            "end": 2072,
            "name": {
              "type": "Identifier",
              "start": 2035,
              "end": 2044,
              "name": "TQueryKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2053,
              "end": 2061,
              "typeName": {
                "type": "Identifier",
                "start": 2053,
                "end": 2061,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 2064,
              "end": 2072,
              "typeName": {
                "type": "Identifier",
                "start": 2064,
                "end": 2072,
                "name": "QueryKey",
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
        "start": 2078,
        "end": 2180,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2078,
            "end": 2147,
            "typeName": {
              "type": "Identifier",
              "start": 2078,
              "end": 2093,
              "name": "UseQueryOptions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2093,
              "end": 2147,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2094,
                  "end": 2106,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2094,
                    "end": 2106,
                    "name": "TQueryFnData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2108,
                  "end": 2114,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2108,
                    "end": 2114,
                    "name": "TError",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2116,
                  "end": 2121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2116,
                    "end": 2121,
                    "name": "TData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2123,
                  "end": 2135,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2123,
                    "end": 2135,
                    "name": "TQueryFnData",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2137,
                  "end": 2146,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2137,
                    "end": 2146,
                    "name": "TQueryKey",
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
            "type": "TSTypeLiteral",
            "start": 2150,
            "end": 2180,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2154,
                "end": 2178,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2154,
                  "end": 2165,
                  "name": "initialData",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2166,
                  "end": 2177,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 2168,
                    "end": 2177
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2183,
      "end": 2788,
      "id": {
        "type": "Identifier",
        "start": 2193,
        "end": 2216,
        "name": "QueryObserverBaseResult",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2216,
        "end": 2256,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2217,
            "end": 2232,
            "name": {
              "type": "Identifier",
              "start": 2217,
              "end": 2222,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2225,
              "end": 2232
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2234,
            "end": 2255,
            "name": {
              "type": "Identifier",
              "start": 2234,
              "end": 2240,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 2243,
              "end": 2255,
              "typeName": {
                "type": "Identifier",
                "start": 2243,
                "end": 2255,
                "name": "DefaultError",
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
        "start": 2257,
        "end": 2788,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2261,
            "end": 2285,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2261,
              "end": 2265,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2267,
                      "end": 2272,
                      "name": "TData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2275,
                    "end": 2284
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2288,
            "end": 2310,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2288,
              "end": 2301,
              "name": "dataUpdatedAt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2301,
              "end": 2309,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2303,
                "end": 2309
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2313,
            "end": 2334,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2313,
              "end": 2318,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2320,
                      "end": 2326,
                      "name": "TError",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2329,
                    "end": 2333
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2337,
            "end": 2360,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2337,
              "end": 2351,
              "name": "errorUpdatedAt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2351,
              "end": 2359,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2353,
                "end": 2359
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2363,
            "end": 2384,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2363,
              "end": 2375,
              "name": "failureCount",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2375,
              "end": 2383,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2377,
                "end": 2383
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2387,
            "end": 2416,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2387,
              "end": 2400,
              "name": "failureReason",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 2402,
                      "end": 2408,
                      "name": "TError",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2411,
                    "end": 2415
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2419,
            "end": 2444,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2419,
              "end": 2435,
              "name": "errorUpdateCount",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2435,
              "end": 2443,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2437,
                "end": 2443
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2447,
            "end": 2464,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2447,
              "end": 2454,
              "name": "isError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2454,
              "end": 2463,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2456,
                "end": 2463
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2467,
            "end": 2486,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2467,
              "end": 2476,
              "name": "isFetched",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2476,
              "end": 2485,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2478,
                "end": 2485
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2489,
            "end": 2518,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2489,
              "end": 2508,
              "name": "isFetchedAfterMount",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2508,
              "end": 2517,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2510,
                "end": 2517
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2521,
            "end": 2541,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2521,
              "end": 2531,
              "name": "isFetching",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2531,
              "end": 2540,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2533,
                "end": 2540
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2544,
            "end": 2563,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2544,
              "end": 2553,
              "name": "isLoading",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2553,
              "end": 2562,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2555,
                "end": 2562
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2566,
            "end": 2585,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2566,
              "end": 2575,
              "name": "isPending",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2575,
              "end": 2584,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2577,
                "end": 2584
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2588,
            "end": 2612,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2588,
              "end": 2602,
              "name": "isLoadingError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2602,
              "end": 2611,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2604,
                "end": 2611
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2615,
            "end": 2641,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2615,
              "end": 2631,
              "name": "isInitialLoading",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2631,
              "end": 2640,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2633,
                "end": 2640
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2644,
            "end": 2662,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2644,
              "end": 2652,
              "name": "isPaused",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2652,
              "end": 2661,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2654,
                "end": 2661
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2665,
            "end": 2692,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2665,
              "end": 2682,
              "name": "isPlaceholderData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2682,
              "end": 2691,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2684,
                "end": 2691
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2695,
            "end": 2719,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2695,
              "end": 2709,
              "name": "isRefetchError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2709,
              "end": 2718,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2711,
                "end": 2718
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2722,
            "end": 2744,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2722,
              "end": 2734,
              "name": "isRefetching",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2734,
              "end": 2743,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2736,
                "end": 2743
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2747,
            "end": 2764,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2747,
              "end": 2754,
              "name": "isStale",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2754,
              "end": 2763,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2756,
                "end": 2763
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2767,
            "end": 2786,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2767,
              "end": 2776,
              "name": "isSuccess",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2776,
              "end": 2785,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2778,
                "end": 2785
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
      "start": 2790,
      "end": 3077,
      "id": {
        "type": "Identifier",
        "start": 2800,
        "end": 2826,
        "name": "QueryObserverSuccessResult",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2877,
          "end": 2915,
          "expression": {
            "type": "Identifier",
            "start": 2877,
            "end": 2900,
            "name": "QueryObserverBaseResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 2901,
                  "end": 2906,
                  "name": "TData",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 2908,
                "end": 2914,
                "typeName": {
                  "type": "Identifier",
                  "start": 2908,
                  "end": 2914,
                  "name": "TError",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2826,
        "end": 2866,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2827,
            "end": 2842,
            "name": {
              "type": "Identifier",
              "start": 2827,
              "end": 2832,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2835,
              "end": 2842
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2844,
            "end": 2865,
            "name": {
              "type": "Identifier",
              "start": 2844,
              "end": 2850,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 2853,
              "end": 2865,
              "typeName": {
                "type": "Identifier",
                "start": 2853,
                "end": 2865,
                "name": "DefaultError",
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
        "start": 2916,
        "end": 3077,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2920,
            "end": 2932,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2920,
              "end": 2924,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2924,
              "end": 2931,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2926,
                "end": 2931,
                "typeName": {
                  "type": "Identifier",
                  "start": 2926,
                  "end": 2931,
                  "name": "TData",
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
            "start": 2935,
            "end": 2947,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2935,
              "end": 2940,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2940,
              "end": 2946,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 2942,
                "end": 2946
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2950,
            "end": 2965,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2950,
              "end": 2957,
              "name": "isError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2968,
            "end": 2985,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2968,
              "end": 2977,
              "name": "isPending",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2988,
            "end": 3010,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2988,
              "end": 3002,
              "name": "isLoadingError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3013,
            "end": 3035,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3013,
              "end": 3027,
              "name": "isRefetchError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3038,
            "end": 3054,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3038,
              "end": 3047,
              "name": "isSuccess",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3057,
            "end": 3075,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3057,
              "end": 3063,
              "name": "status",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "success",
                  "raw": "\"success\""
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
      "start": 3079,
      "end": 3202,
      "id": {
        "type": "Identifier",
        "start": 3084,
        "end": 3110,
        "name": "DefinedQueryObserverResult",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3114,
              "end": 3119,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3122,
              "end": 3129
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3133,
            "end": 3154,
            "name": {
              "type": "Identifier",
              "start": 3133,
              "end": 3139,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3142,
              "end": 3154,
              "typeName": {
                "type": "Identifier",
                "start": 3142,
                "end": 3154,
                "name": "DefaultError",
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
        "type": "TSTypeReference",
        "start": 3160,
        "end": 3201,
        "typeName": {
          "type": "Identifier",
          "start": 3160,
          "end": 3186,
          "name": "QueryObserverSuccessResult",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3186,
          "end": 3201,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3187,
              "end": 3192,
              "typeName": {
                "type": "Identifier",
                "start": 3187,
                "end": 3192,
                "name": "TData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3194,
              "end": 3200,
              "typeName": {
                "type": "Identifier",
                "start": 3194,
                "end": 3200,
                "name": "TError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3203,
      "end": 3319,
      "id": {
        "type": "Identifier",
        "start": 3208,
        "end": 3227,
        "name": "QueryObserverResult",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3231,
              "end": 3236,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3239,
              "end": 3246
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3250,
            "end": 3271,
            "name": {
              "type": "Identifier",
              "start": 3250,
              "end": 3256,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3259,
              "end": 3271,
              "typeName": {
                "type": "Identifier",
                "start": 3259,
                "end": 3271,
                "name": "DefaultError",
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
        "type": "TSTypeReference",
        "start": 3277,
        "end": 3318,
        "typeName": {
          "type": "Identifier",
          "start": 3277,
          "end": 3303,
          "name": "DefinedQueryObserverResult",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3303,
          "end": 3318,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3304,
              "end": 3309,
              "typeName": {
                "type": "Identifier",
                "start": 3304,
                "end": 3309,
                "name": "TData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3311,
              "end": 3317,
              "typeName": {
                "type": "Identifier",
                "start": 3311,
                "end": 3317,
                "name": "TError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3321,
      "end": 3353,
      "id": {
        "type": "Identifier",
        "start": 3326,
        "end": 3331,
        "name": "ToRef",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3332,
              "end": 3333,
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
        "type": "TSTypeLiteral",
        "start": 3337,
        "end": 3352,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3341,
            "end": 3350,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3341,
              "end": 3346,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3346,
              "end": 3349,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3348,
                "end": 3349,
                "typeName": {
                  "type": "Identifier",
                  "start": 3348,
                  "end": 3349,
                  "name": "T",
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
      "start": 3355,
      "end": 3646,
      "id": {
        "type": "Identifier",
        "start": 3360,
        "end": 3382,
        "name": "UseBaseQueryReturnType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3386,
              "end": 3391,
              "name": "TData",
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
            "start": 3395,
            "end": 3401,
            "name": {
              "type": "Identifier",
              "start": 3395,
              "end": 3401,
              "name": "TError",
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
            "start": 3405,
            "end": 3448,
            "name": {
              "type": "Identifier",
              "start": 3405,
              "end": 3411,
              "name": "Result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3414,
              "end": 3448,
              "typeName": {
                "type": "Identifier",
                "start": 3414,
                "end": 3433,
                "name": "QueryObserverResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3433,
                "end": 3448,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3434,
                    "end": 3439,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3434,
                      "end": 3439,
                      "name": "TData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3441,
                    "end": 3447,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3441,
                      "end": 3447,
                      "name": "TError",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3459,
              "end": 3476,
              "name": {
                "type": "Identifier",
                "start": 3459,
                "end": 3460,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 3464,
                "end": 3476,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3470,
                  "end": 3476,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3470,
                    "end": 3476,
                    "name": "Result",
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
              "type": "TSConditionalType",
              "start": 3479,
              "end": 3601,
              "checkType": {
                "type": "TSTypeReference",
                "start": 3479,
                "end": 3480,
                "typeName": {
                  "type": "Identifier",
                  "start": 3479,
                  "end": 3480,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                      "value": "fetchNextPage",
                      "raw": "\"fetchNextPage\""
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
                      "value": "fetchPreviousPage",
                      "raw": "\"fetchPreviousPage\""
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
                      "value": "refetch",
                      "raw": "\"refetch\""
                    }
                  }
                ]
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 3559,
                "end": 3568,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3559,
                  "end": 3565,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3559,
                    "end": 3565,
                    "name": "Result",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3566,
                  "end": 3567,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3566,
                    "end": 3567,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 3575,
                "end": 3601,
                "typeName": {
                  "type": "Identifier",
                  "start": 3575,
                  "end": 3580,
                  "name": "ToRef",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3580,
                  "end": 3601,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 3581,
                      "end": 3600,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 3581,
                        "end": 3597,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3581,
                          "end": 3589,
                          "name": "Readonly",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3589,
                          "end": 3597,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3590,
                              "end": 3596,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3590,
                                "end": 3596,
                                "name": "Result",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 3598,
                        "end": 3599,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3598,
                          "end": 3599,
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
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3464,
              "end": 3476,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3470,
                "end": 3476,
                "typeName": {
                  "type": "Identifier",
                  "start": 3470,
                  "end": 3476,
                  "name": "Result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 3459,
              "end": 3460,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 3611,
                  "end": 3619,
                  "name": "suspense",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3619,
                  "end": 3642,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3621,
                    "end": 3642,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3624,
                      "end": 3642,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3627,
                        "end": 3642,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3627,
                          "end": 3634,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3634,
                          "end": 3642,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3635,
                              "end": 3641,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3635,
                                "end": 3641,
                                "name": "Result",
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
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3648,
      "end": 3727,
      "id": {
        "type": "Identifier",
        "start": 3653,
        "end": 3671,
        "name": "UseQueryReturnType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3672,
              "end": 3677,
              "name": "TData",
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
            "start": 3679,
            "end": 3685,
            "name": {
              "type": "Identifier",
              "start": 3679,
              "end": 3685,
              "name": "TError",
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
        "start": 3689,
        "end": 3726,
        "typeName": {
          "type": "Identifier",
          "start": 3689,
          "end": 3711,
          "name": "UseBaseQueryReturnType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3711,
          "end": 3726,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3712,
              "end": 3717,
              "typeName": {
                "type": "Identifier",
                "start": 3712,
                "end": 3717,
                "name": "TData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3719,
              "end": 3725,
              "typeName": {
                "type": "Identifier",
                "start": 3719,
                "end": 3725,
                "name": "TError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3729,
      "end": 3993,
      "id": {
        "type": "Identifier",
        "start": 3746,
        "end": 3754,
        "name": "useQuery",
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
          "start": 3877,
          "end": 3954,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3884,
            "end": 3954,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3886,
              "end": 3954,
              "typeName": {
                "type": "Identifier",
                "start": 3886,
                "end": 3914,
                "name": "UndefinedInitialQueryOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3914,
                "end": 3954,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3915,
                    "end": 3927,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3915,
                      "end": 3927,
                      "name": "TQueryFnData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3929,
                    "end": 3935,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3929,
                      "end": 3935,
                      "name": "TError",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3937,
                    "end": 3942,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3937,
                      "end": 3942,
                      "name": "TData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3944,
                    "end": 3953,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3944,
                      "end": 3953,
                      "name": "TQueryKey",
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
        "start": 3754,
        "end": 3873,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3758,
            "end": 3780,
            "name": {
              "type": "Identifier",
              "start": 3758,
              "end": 3770,
              "name": "TQueryFnData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3773,
              "end": 3780
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3784,
            "end": 3805,
            "name": {
              "type": "Identifier",
              "start": 3784,
              "end": 3790,
              "name": "TError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3793,
              "end": 3805,
              "typeName": {
                "type": "Identifier",
                "start": 3793,
                "end": 3805,
                "name": "DefaultError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3809,
            "end": 3829,
            "name": {
              "type": "Identifier",
              "start": 3809,
              "end": 3814,
              "name": "TData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 3817,
              "end": 3829,
              "typeName": {
                "type": "Identifier",
                "start": 3817,
                "end": 3829,
                "name": "TQueryFnData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3833,
            "end": 3870,
            "name": {
              "type": "Identifier",
              "start": 3833,
              "end": 3842,
              "name": "TQueryKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3851,
              "end": 3859,
              "typeName": {
                "type": "Identifier",
                "start": 3851,
                "end": 3859,
                "name": "QueryKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 3862,
              "end": 3870,
              "typeName": {
                "type": "Identifier",
                "start": 3862,
                "end": 3870,
                "name": "QueryKey",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3957,
        "end": 3992,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3959,
          "end": 3992,
          "typeName": {
            "type": "Identifier",
            "start": 3959,
            "end": 3977,
            "name": "UseQueryReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3977,
            "end": 3992,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3978,
                "end": 3983,
                "typeName": {
                  "type": "Identifier",
                  "start": 3978,
                  "end": 3983,
                  "name": "TData",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 3985,
                "end": 3991,
                "typeName": {
                  "type": "Identifier",
                  "start": 3985,
                  "end": 3991,
                  "name": "TError",
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
      "type": "ExportNamedDeclaration",
      "start": 3995,
      "end": 4040,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 4004,
          "end": 4027,
          "local": {
            "type": "Identifier",
            "start": 4009,
            "end": 4027,
            "name": "UseQueryReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 4009,
            "end": 4027,
            "name": "UseQueryReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        },
        {
          "type": "ExportSpecifier",
          "start": 4029,
          "end": 4037,
          "local": {
            "type": "Identifier",
            "start": 4029,
            "end": 4037,
            "name": "useQuery",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 4029,
            "end": 4037,
            "name": "useQuery",
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 27,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 27,
            "name": "UseQueryReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 27,
            "name": "UseQueryReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 29,
          "end": 37,
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 37,
            "name": "useQuery",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 29,
            "end": 37,
            "name": "useQuery",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 69,
        "value": "./useQuery-CPqkvEsh.js",
        "raw": "'./useQuery-CPqkvEsh.js'"
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
