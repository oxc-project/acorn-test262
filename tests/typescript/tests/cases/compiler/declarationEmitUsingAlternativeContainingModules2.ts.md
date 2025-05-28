__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4051,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "QueryKey",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "Register",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
        "decorators": [],
        "name": "DefaultError",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "Register",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "defaultError",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
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
            "decorators": [],
            "name": "TError",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "Error",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "ShouldRetryFunction",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 249,
                  "decorators": [],
                  "name": "TError",
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
        "decorators": [],
        "name": "RetryValue",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
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
              "decorators": [],
              "name": "ShouldRetryFunction",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "QueryFunctionContext",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 395,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "QueryKey",
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
            "start": 410,
            "end": 428,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 420,
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "TPageParam",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "queryKey",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryKey",
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
                "decorators": [],
                "name": "queryKey",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryKey",
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
              "start": 541,
              "end": 563,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 541,
                "end": 550,
                "decorators": [],
                "name": "pageParam",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TPageParam",
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
        "decorators": [],
        "name": "QueryFunction",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 627,
              "end": 635,
              "typeName": {
                "type": "Identifier",
                "start": 627,
                "end": 635,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "QueryKey",
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
            "start": 650,
            "end": 668,
            "name": {
              "type": "Identifier",
              "start": 650,
              "end": 660,
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 704,
                  "decorators": [],
                  "name": "QueryFunctionContext",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "TPageParam",
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
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
            "name": {
              "type": "Identifier",
              "start": 775,
              "end": 787,
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
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
            "start": 826,
            "end": 846,
            "name": {
              "type": "Identifier",
              "start": 826,
              "end": 831,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "TQueryFnData",
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
            "start": 850,
            "end": 887,
            "name": {
              "type": "Identifier",
              "start": 850,
              "end": 859,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 868,
              "end": 876,
              "typeName": {
                "type": "Identifier",
                "start": 868,
                "end": 876,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "QueryKey",
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
            "start": 891,
            "end": 909,
            "name": {
              "type": "Identifier",
              "start": 891,
              "end": 901,
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null
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
      "extends": [],
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
              "decorators": [],
              "name": "retry",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "RetryValue",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "TError",
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
              "decorators": [],
              "name": "queryFn",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "QueryFunction",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "TQueryFnData",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "TPageParam",
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
              "decorators": [],
              "name": "queryKey",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TQueryKey",
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
            "start": 1035,
            "end": 1055,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1035,
              "end": 1046,
              "decorators": [],
              "name": "initialData",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TData",
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
            "start": 1058,
            "end": 1117,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1058,
              "end": 1078,
              "decorators": [],
              "name": "initialDataUpdatedAt",
              "optional": false,
              "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 1155,
              "end": 1167,
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
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
            "start": 1206,
            "end": 1226,
            "name": {
              "type": "Identifier",
              "start": 1206,
              "end": 1211,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "TQueryFnData",
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
            "start": 1230,
            "end": 1255,
            "name": {
              "type": "Identifier",
              "start": 1230,
              "end": 1240,
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "TQueryFnData",
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
            "start": 1259,
            "end": 1296,
            "name": {
              "type": "Identifier",
              "start": 1259,
              "end": 1268,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1277,
              "end": 1285,
              "typeName": {
                "type": "Identifier",
                "start": 1277,
                "end": 1285,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "QueryKey",
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
            "start": 1300,
            "end": 1318,
            "name": {
              "type": "Identifier",
              "start": 1300,
              "end": 1310,
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1360,
                  "decorators": [],
                  "name": "TQueryFnData",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TQueryData",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TPageParam",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
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
              "decorators": [],
              "name": "enabled",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "refetchInterval",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 1493,
                          "end": 1503,
                          "decorators": [],
                          "name": "TQueryData",
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
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "UseQueryOptions",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
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
            "start": 1593,
            "end": 1613,
            "name": {
              "type": "Identifier",
              "start": 1593,
              "end": 1598,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "TQueryFnData",
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
            "start": 1617,
            "end": 1642,
            "name": {
              "type": "Identifier",
              "start": 1617,
              "end": 1627,
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "TQueryFnData",
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
            "start": 1646,
            "end": 1683,
            "name": {
              "type": "Identifier",
              "start": 1646,
              "end": 1655,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1664,
              "end": 1672,
              "typeName": {
                "type": "Identifier",
                "start": 1664,
                "end": 1672,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
        "key": {
          "type": "Identifier",
          "start": 1694,
          "end": 1702,
          "decorators": [],
          "name": "Property",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
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
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
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
        "decorators": [],
        "name": "UndefinedInitialQueryOptions",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
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
            "start": 2011,
            "end": 2031,
            "name": {
              "type": "Identifier",
              "start": 2011,
              "end": 2016,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "TQueryFnData",
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
            "start": 2035,
            "end": 2072,
            "name": {
              "type": "Identifier",
              "start": 2035,
              "end": 2044,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2053,
              "end": 2061,
              "typeName": {
                "type": "Identifier",
                "start": 2053,
                "end": 2061,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "UseQueryOptions",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null
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
                  "decorators": [],
                  "name": "initialData",
                  "optional": false,
                  "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 2217,
              "end": 2222,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "dataUpdatedAt",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "errorUpdatedAt",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "failureCount",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "failureReason",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "errorUpdateCount",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isError",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isFetched",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isFetchedAfterMount",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isFetching",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isLoading",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isInitialLoading",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isPaused",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isPlaceholderData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isRefetching",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isStale",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 2827,
              "end": 2832,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 2901,
                  "end": 2906,
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
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
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TData",
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
            "start": 2935,
            "end": 2947,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2935,
              "end": 2940,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isError",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "status",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "DefinedQueryObserverResult",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
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
          "decorators": [],
          "name": "QueryObserverSuccessResult",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "QueryObserverResult",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null
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
          "decorators": [],
          "name": "DefinedQueryObserverResult",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "ToRef",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3355,
      "end": 3646,
      "id": {
        "type": "Identifier",
        "start": 3360,
        "end": 3382,
        "decorators": [],
        "name": "UseBaseQueryReturnType",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TData",
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
            "start": 3395,
            "end": 3401,
            "name": {
              "type": "Identifier",
              "start": 3395,
              "end": 3401,
              "decorators": [],
              "name": "TError",
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
            "start": 3405,
            "end": 3448,
            "name": {
              "type": "Identifier",
              "start": 3405,
              "end": 3411,
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "QueryObserverResult",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
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
            "key": {
              "type": "Identifier",
              "start": 3459,
              "end": 3460,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
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
                  "decorators": [],
                  "name": "ToRef",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            },
            "optional": false,
            "readonly": null
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
                  "decorators": [],
                  "name": "suspense",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "Result",
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
        "decorators": [],
        "name": "UseQueryReturnType",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TData",
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
            "start": 3679,
            "end": 3685,
            "name": {
              "type": "Identifier",
              "start": 3679,
              "end": 3685,
              "decorators": [],
              "name": "TError",
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
        "type": "TSTypeReference",
        "start": 3689,
        "end": 3726,
        "typeName": {
          "type": "Identifier",
          "start": 3689,
          "end": 3711,
          "decorators": [],
          "name": "UseBaseQueryReturnType",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "useQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "DefaultError",
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
            "start": 3809,
            "end": 3829,
            "name": {
              "type": "Identifier",
              "start": 3809,
              "end": 3814,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "TQueryFnData",
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
            "start": 3833,
            "end": 3870,
            "name": {
              "type": "Identifier",
              "start": 3833,
              "end": 3842,
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3851,
              "end": 3859,
              "typeName": {
                "type": "Identifier",
                "start": 3851,
                "end": 3859,
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 3886,
                "end": 3914,
                "decorators": [],
                "name": "UndefinedInitialQueryOptions",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TQueryFnData",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TQueryKey",
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
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TError",
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
      "type": "ExportNamedDeclaration",
      "start": 3995,
      "end": 4050,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 4004,
          "end": 4032,
          "local": {
            "type": "Identifier",
            "start": 4009,
            "end": 4027,
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 4031,
            "end": 4032,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "type"
        },
        {
          "type": "ExportSpecifier",
          "start": 4034,
          "end": 4047,
          "local": {
            "type": "Identifier",
            "start": 4034,
            "end": 4042,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 4046,
            "end": 4047,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
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
  "end": 81,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 32,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 14,
            "end": 32,
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 34,
          "end": 47,
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 39,
            "end": 47,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 55,
        "end": 79,
        "value": "./useQuery-CPqkvEsh.js",
        "raw": "'./useQuery-CPqkvEsh.js'"
      },
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
  "end": 714,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 46,
        "value": "@tanstack/vue-query",
        "raw": "'@tanstack/vue-query'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 93,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 93,
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
            "value": "https://api.publicapis.org/",
            "raw": "'https://api.publicapis.org/'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 95,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 111,
        "decorators": [],
        "name": "IEntry",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 112,
        "end": 232,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 116,
            "end": 127,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "API",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 127,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 149,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 141,
              "decorators": [],
              "name": "Description",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 164,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 156,
              "decorators": [],
              "name": "Auth",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 167,
            "end": 181,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "decorators": [],
              "name": "HTTPS",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 181,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 174,
                "end": 181
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 184,
            "end": 196,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 188,
              "decorators": [],
              "name": "Cors",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 199,
            "end": 211,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 203,
              "decorators": [],
              "name": "Link",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 211,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 214,
            "end": 230,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 222,
              "decorators": [],
              "name": "Category",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
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
      "type": "VariableDeclaration",
      "start": 234,
      "end": 445,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 445,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 264,
                  "decorators": [],
                  "name": "getEntries",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 266,
                  "end": 443,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 268,
                    "end": 287,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 270,
                      "end": 287,
                      "typeName": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 277,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 278,
                                "end": 284,
                                "decorators": [],
                                "name": "IEntry",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      }
                    }
                  },
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 304,
                            "end": 412,
                            "object": {
                              "type": "CallExpression",
                              "start": 304,
                              "end": 399,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 304,
                                "end": 375,
                                "object": {
                                  "type": "CallExpression",
                                  "start": 304,
                                  "end": 363,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 304,
                                    "end": 342,
                                    "object": {
                                      "type": "CallExpression",
                                      "start": 304,
                                      "end": 330,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 304,
                                        "end": 309,
                                        "decorators": [],
                                        "name": "fetch",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "start": 310,
                                          "end": 329,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 310,
                                            "end": 317,
                                            "decorators": [],
                                            "name": "baseUrl",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "operator": "+",
                                          "right": {
                                            "type": "Literal",
                                            "start": 320,
                                            "end": 329,
                                            "value": "entries",
                                            "raw": "'entries'"
                                          }
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 338,
                                      "end": 342,
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 343,
                                      "end": 362,
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
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
                                      "body": {
                                        "type": "CallExpression",
                                        "start": 352,
                                        "end": 362,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 352,
                                          "end": 360,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 352,
                                            "end": 355,
                                            "decorators": [],
                                            "name": "res",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 356,
                                            "end": 360,
                                            "decorators": [],
                                            "name": "json",
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
                                    }
                                  ],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 371,
                                  "end": 375,
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 376,
                                  "end": 398,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
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
                                  "body": {
                                    "type": "MemberExpression",
                                    "start": 386,
                                    "end": 398,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 386,
                                      "end": 390,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 391,
                                      "end": 398,
                                      "decorators": [],
                                      "name": "entries",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              ],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 407,
                              "end": 412,
                              "decorators": [],
                              "name": "catch",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 413,
                              "end": 438,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
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
                              "body": {
                                "type": "CallExpression",
                                "start": 422,
                                "end": 438,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 422,
                                  "end": 433,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 422,
                                    "end": 429,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 430,
                                    "end": 433,
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
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
                                "optional": false
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        }
                      }
                    ]
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 547,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 547,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 472,
                  "decorators": [],
                  "name": "all",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "value": "entries",
                        "raw": "'entries'"
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 489,
                    "end": 494,
                    "typeName": {
                      "type": "Identifier",
                      "start": 489,
                      "end": 494,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 498,
                "end": 545,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 502,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 504,
                  "end": 545,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                            "object": {
                              "type": "Identifier",
                              "start": 514,
                              "end": 523,
                              "decorators": [],
                              "name": "entryKeys",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 524,
                              "end": 527,
                              "decorators": [],
                              "name": "all",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 529,
                          "end": 535,
                          "value": "list",
                          "raw": "'list'"
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 540,
                      "end": 545,
                      "typeName": {
                        "type": "Identifier",
                        "start": 540,
                        "end": 545,
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 549,
      "end": 714,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 556,
        "end": 714,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 562,
            "end": 714,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 600,
                        "decorators": [],
                        "name": "useQuery",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 607,
                                "end": 615,
                                "decorators": [],
                                "name": "queryKey",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "CallExpression",
                                "start": 617,
                                "end": 633,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 617,
                                  "end": 631,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 617,
                                    "end": 626,
                                    "decorators": [],
                                    "name": "entryKeys",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 627,
                                    "end": 631,
                                    "decorators": [],
                                    "name": "list",
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 639,
                              "end": 666,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 639,
                                "end": 646,
                                "decorators": [],
                                "name": "queryFn",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "MemberExpression",
                                "start": 648,
                                "end": 666,
                                "object": {
                                  "type": "Identifier",
                                  "start": 648,
                                  "end": 655,
                                  "decorators": [],
                                  "name": "testApi",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 656,
                                  "end": 666,
                                  "decorators": [],
                                  "name": "getEntries",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 672,
                              "end": 707,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 672,
                                "end": 678,
                                "decorators": [],
                                "name": "select",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 680,
                                "end": 707,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
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
                                "body": {
                                  "type": "CallExpression",
                                  "start": 690,
                                  "end": 707,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 690,
                                    "end": 700,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 690,
                                      "end": 694,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 695,
                                      "end": 700,
                                      "decorators": [],
                                      "name": "slice",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 701,
                                      "end": 702,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 704,
                                      "end": 706,
                                      "value": 10,
                                      "raw": "10"
                                    }
                                  ],
                                  "optional": false
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
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
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
