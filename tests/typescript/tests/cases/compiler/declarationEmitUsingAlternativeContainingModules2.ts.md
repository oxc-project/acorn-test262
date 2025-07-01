__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 29
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 30,
              "end": 37
            }
          ],
          "start": 29,
          "end": 38
        },
        "start": 16,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Register",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 59
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 60,
        "end": 62
      },
      "declare": false,
      "start": 41,
      "end": 62
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefaultError",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Register",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 92
          },
          "typeArguments": null,
          "start": 84,
          "end": 92
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 117
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 131
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 125,
                    "end": 131
                  },
                  "start": 119,
                  "end": 131
                },
                "start": 117,
                "end": 131
              },
              "accessibility": null,
              "static": false,
              "start": 105,
              "end": 132
            }
          ],
          "start": 101,
          "end": 134
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TError",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 145
          },
          "typeArguments": null,
          "start": 139,
          "end": 145
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Error",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 155
          },
          "typeArguments": null,
          "start": 150,
          "end": 155
        },
        "start": 84,
        "end": 155
      },
      "declare": false,
      "start": 64,
      "end": 156
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ShouldRetryFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 182
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 189
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 204
              },
              "typeArguments": null,
              "start": 192,
              "end": 204
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 183,
            "end": 204
          }
        ],
        "start": 182,
        "end": 205
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "failureCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 226,
                "end": 232
              },
              "start": 224,
              "end": 232
            },
            "start": 212,
            "end": 232
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 249
                },
                "typeArguments": null,
                "start": 243,
                "end": 249
              },
              "start": 241,
              "end": 249
            },
            "start": 236,
            "end": 249
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 256,
            "end": 263
          },
          "start": 253,
          "end": 263
        },
        "start": 208,
        "end": 263
      },
      "declare": false,
      "start": 158,
      "end": 264
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RetryValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 280
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 287
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 281,
            "end": 287
          }
        ],
        "start": 280,
        "end": 288
      },
      "typeAnnotation": {
        "type": "TSUnionType",
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
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ShouldRetryFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 329
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 336
                  },
                  "typeArguments": null,
                  "start": 330,
                  "end": 336
                }
              ],
              "start": 329,
              "end": 337
            },
            "start": 310,
            "end": 337
          }
        ],
        "start": 291,
        "end": 337
      },
      "declare": false,
      "start": 265,
      "end": 338
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryFunctionContext",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 365
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 378
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 395
              },
              "typeArguments": null,
              "start": 387,
              "end": 395
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 406
              },
              "typeArguments": null,
              "start": 398,
              "end": 406
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 369,
            "end": 406
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 420
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 423,
              "end": 428
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 428
          }
        ],
        "start": 365,
        "end": 431
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPageParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 445
              },
              "typeArguments": null,
              "start": 435,
              "end": 445
            }
          ],
          "start": 434,
          "end": 446
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNeverKeyword",
              "start": 456,
              "end": 461
            }
          ],
          "start": 455,
          "end": 462
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "queryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 483
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 494
                  },
                  "typeArguments": null,
                  "start": 485,
                  "end": 494
                },
                "start": 483,
                "end": 494
              },
              "accessibility": null,
              "static": false,
              "start": 475,
              "end": 495
            }
          ],
          "start": 467,
          "end": 501
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "queryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 522
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 533
                  },
                  "typeArguments": null,
                  "start": 524,
                  "end": 533
                },
                "start": 522,
                "end": 533
              },
              "accessibility": null,
              "static": false,
              "start": 514,
              "end": 534
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pageParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 550
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TPageParam",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 562
                  },
                  "typeArguments": null,
                  "start": 552,
                  "end": 562
                },
                "start": 550,
                "end": 562
              },
              "accessibility": null,
              "static": false,
              "start": 541,
              "end": 563
            }
          ],
          "start": 506,
          "end": 569
        },
        "start": 434,
        "end": 569
      },
      "declare": false,
      "start": 340,
      "end": 570
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 590
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 595
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 598,
              "end": 605
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 594,
            "end": 605
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 618
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 635
              },
              "typeArguments": null,
              "start": 627,
              "end": 635
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 646
              },
              "typeArguments": null,
              "start": 638,
              "end": 646
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 609,
            "end": 646
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 660
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 663,
              "end": 668
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 650,
            "end": 668
          }
        ],
        "start": 590,
        "end": 671
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryFunctionContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 704
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 705,
                        "end": 714
                      },
                      "typeArguments": null,
                      "start": 705,
                      "end": 714
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TPageParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 716,
                        "end": 726
                      },
                      "typeArguments": null,
                      "start": 716,
                      "end": 726
                    }
                  ],
                  "start": 704,
                  "end": 727
                },
                "start": 684,
                "end": 727
              },
              "start": 682,
              "end": 727
            },
            "start": 675,
            "end": 727
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 733
                },
                "typeArguments": null,
                "start": 732,
                "end": 733
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 743
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 744,
                        "end": 745
                      },
                      "typeArguments": null,
                      "start": 744,
                      "end": 745
                    }
                  ],
                  "start": 743,
                  "end": 746
                },
                "start": 736,
                "end": 746
              }
            ],
            "start": 732,
            "end": 746
          },
          "start": 729,
          "end": 746
        },
        "start": 674,
        "end": 746
      },
      "declare": false,
      "start": 572,
      "end": 747
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 759,
        "end": 771
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 787
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 790,
              "end": 797
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 775,
            "end": 797
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 807
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 822
              },
              "typeArguments": null,
              "start": 810,
              "end": 822
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 801,
            "end": 822
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 831
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 834,
                "end": 846
              },
              "typeArguments": null,
              "start": 834,
              "end": 846
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 826,
            "end": 846
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 859
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 868,
                "end": 876
              },
              "typeArguments": null,
              "start": 868,
              "end": 876
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 887
              },
              "typeArguments": null,
              "start": 879,
              "end": 887
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 850,
            "end": 887
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 891,
              "end": 901
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 904,
              "end": 909
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 891,
            "end": 909
          }
        ],
        "start": 771,
        "end": 912
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "retry",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 922
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RetryValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 925,
                  "end": 935
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 936,
                        "end": 942
                      },
                      "typeArguments": null,
                      "start": 936,
                      "end": 942
                    }
                  ],
                  "start": 935,
                  "end": 943
                },
                "start": 925,
                "end": 943
              },
              "start": 923,
              "end": 943
            },
            "accessibility": null,
            "static": false,
            "start": 917,
            "end": 944
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "queryFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 954
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 957,
                  "end": 970
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryFnData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 983
                      },
                      "typeArguments": null,
                      "start": 971,
                      "end": 983
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 985,
                        "end": 994
                      },
                      "typeArguments": null,
                      "start": 985,
                      "end": 994
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TPageParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 996,
                        "end": 1006
                      },
                      "typeArguments": null,
                      "start": 996,
                      "end": 1006
                    }
                  ],
                  "start": 970,
                  "end": 1007
                },
                "start": 957,
                "end": 1007
              },
              "start": 955,
              "end": 1007
            },
            "accessibility": null,
            "static": false,
            "start": 947,
            "end": 1008
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "queryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1019
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1031
                },
                "typeArguments": null,
                "start": 1022,
                "end": 1031
              },
              "start": 1020,
              "end": 1031
            },
            "accessibility": null,
            "static": false,
            "start": 1011,
            "end": 1032
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1046
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1049,
                  "end": 1054
                },
                "typeArguments": null,
                "start": 1049,
                "end": 1054
              },
              "start": 1047,
              "end": 1054
            },
            "accessibility": null,
            "static": false,
            "start": 1035,
            "end": 1055
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialDataUpdatedAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1078
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1081,
                    "end": 1087
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
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
                        ],
                        "start": 1097,
                        "end": 1115
                      },
                      "start": 1094,
                      "end": 1115
                    },
                    "start": 1091,
                    "end": 1115
                  }
                ],
                "start": 1081,
                "end": 1116
              },
              "start": 1079,
              "end": 1116
            },
            "accessibility": null,
            "static": false,
            "start": 1058,
            "end": 1117
          }
        ],
        "start": 913,
        "end": 1119
      },
      "declare": false,
      "start": 749,
      "end": 1119
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1131,
        "end": 1151
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1167
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1170,
              "end": 1177
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1155,
            "end": 1177
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1187
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 1190,
                "end": 1202
              },
              "typeArguments": null,
              "start": 1190,
              "end": 1202
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1181,
            "end": 1202
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1206,
              "end": 1211
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1226
              },
              "typeArguments": null,
              "start": 1214,
              "end": 1226
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1206,
            "end": 1226
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1240
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1243,
                "end": 1255
              },
              "typeArguments": null,
              "start": 1243,
              "end": 1255
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1230,
            "end": 1255
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1259,
              "end": 1268
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1277,
                "end": 1285
              },
              "typeArguments": null,
              "start": 1277,
              "end": 1285
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1296
              },
              "typeArguments": null,
              "start": 1288,
              "end": 1296
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1259,
            "end": 1296
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 1300,
              "end": 1310
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 1313,
              "end": 1318
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1300,
            "end": 1318
          }
        ],
        "start": 1151,
        "end": 1321
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "QueryOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 1330,
            "end": 1342
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryFnData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1348,
                  "end": 1360
                },
                "typeArguments": null,
                "start": 1348,
                "end": 1360
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1366,
                  "end": 1372
                },
                "typeArguments": null,
                "start": 1366,
                "end": 1372
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1388
                },
                "typeArguments": null,
                "start": 1378,
                "end": 1388
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1394,
                  "end": 1403
                },
                "typeArguments": null,
                "start": 1394,
                "end": 1403
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPageParam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1419
                },
                "typeArguments": null,
                "start": 1409,
                "end": 1419
              }
            ],
            "start": 1342,
            "end": 1423
          },
          "start": 1330,
          "end": 1423
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 1428,
              "end": 1435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1438,
                "end": 1445
              },
              "start": 1436,
              "end": 1445
            },
            "accessibility": null,
            "static": false,
            "start": 1428,
            "end": 1446
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "refetchInterval",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1464
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1467,
                "end": 1473
              },
              "start": 1465,
              "end": 1473
            },
            "accessibility": null,
            "static": false,
            "start": 1449,
            "end": 1474
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 1477,
              "end": 1483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TQueryData",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1493,
                          "end": 1503
                        },
                        "typeArguments": null,
                        "start": 1493,
                        "end": 1503
                      },
                      "start": 1491,
                      "end": 1503
                    },
                    "start": 1487,
                    "end": 1503
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1513
                    },
                    "typeArguments": null,
                    "start": 1508,
                    "end": 1513
                  },
                  "start": 1505,
                  "end": 1513
                },
                "start": 1486,
                "end": 1513
              },
              "start": 1484,
              "end": 1513
            },
            "accessibility": null,
            "static": false,
            "start": 1477,
            "end": 1514
          }
        ],
        "start": 1424,
        "end": 1516
      },
      "declare": false,
      "start": 1121,
      "end": 1516
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1523,
        "end": 1538
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1554
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1557,
              "end": 1564
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1542,
            "end": 1564
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1574
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 1577,
                "end": 1589
              },
              "typeArguments": null,
              "start": 1577,
              "end": 1589
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1568,
            "end": 1589
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1593,
              "end": 1598
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1601,
                "end": 1613
              },
              "typeArguments": null,
              "start": 1601,
              "end": 1613
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1593,
            "end": 1613
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1617,
              "end": 1627
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1630,
                "end": 1642
              },
              "typeArguments": null,
              "start": 1630,
              "end": 1642
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1617,
            "end": 1642
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1646,
              "end": 1655
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1664,
                "end": 1672
              },
              "typeArguments": null,
              "start": 1664,
              "end": 1672
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1675,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1675,
              "end": 1683
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1646,
            "end": 1683
          }
        ],
        "start": 1538,
        "end": 1686
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Property",
          "optional": false,
          "typeAnnotation": null,
          "start": 1694,
          "end": 1702
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1712,
              "end": 1732
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1738,
                    "end": 1750
                  },
                  "typeArguments": null,
                  "start": 1738,
                  "end": 1750
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1756,
                    "end": 1762
                  },
                  "typeArguments": null,
                  "start": 1756,
                  "end": 1762
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1768,
                    "end": 1773
                  },
                  "typeArguments": null,
                  "start": 1768,
                  "end": 1773
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1779,
                    "end": 1789
                  },
                  "typeArguments": null,
                  "start": 1779,
                  "end": 1789
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1795,
                    "end": 1804
                  },
                  "typeArguments": null,
                  "start": 1795,
                  "end": 1804
                }
              ],
              "start": 1732,
              "end": 1808
            },
            "start": 1712,
            "end": 1808
          },
          "start": 1706,
          "end": 1808
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1811,
              "end": 1831
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1837,
                    "end": 1849
                  },
                  "typeArguments": null,
                  "start": 1837,
                  "end": 1849
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1855,
                    "end": 1861
                  },
                  "typeArguments": null,
                  "start": 1855,
                  "end": 1861
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1867,
                    "end": 1872
                  },
                  "typeArguments": null,
                  "start": 1867,
                  "end": 1872
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1878,
                    "end": 1888
                  },
                  "typeArguments": null,
                  "start": 1878,
                  "end": 1888
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1894,
                    "end": 1903
                  },
                  "typeArguments": null,
                  "start": 1894,
                  "end": 1903
                }
              ],
              "start": 1831,
              "end": 1907
            },
            "start": 1811,
            "end": 1907
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null,
              "start": 1908,
              "end": 1916
            },
            "typeArguments": null,
            "start": 1908,
            "end": 1916
          },
          "start": 1811,
          "end": 1917
        },
        "optional": false,
        "readonly": null,
        "start": 1689,
        "end": 1920
      },
      "declare": false,
      "start": 1518,
      "end": 1921
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UndefinedInitialQueryOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1928,
        "end": 1956
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1960,
              "end": 1972
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1975,
              "end": 1982
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1960,
            "end": 1982
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1986,
              "end": 1992
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 2007
              },
              "typeArguments": null,
              "start": 1995,
              "end": 2007
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1986,
            "end": 2007
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2011,
              "end": 2016
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 2019,
                "end": 2031
              },
              "typeArguments": null,
              "start": 2019,
              "end": 2031
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2011,
            "end": 2031
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 2035,
              "end": 2044
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2061
              },
              "typeArguments": null,
              "start": 2053,
              "end": 2061
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 2064,
                "end": 2072
              },
              "typeArguments": null,
              "start": 2064,
              "end": 2072
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2035,
            "end": 2072
          }
        ],
        "start": 1956,
        "end": 2075
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UseQueryOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 2078,
              "end": 2093
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2094,
                    "end": 2106
                  },
                  "typeArguments": null,
                  "start": 2094,
                  "end": 2106
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2108,
                    "end": 2114
                  },
                  "typeArguments": null,
                  "start": 2108,
                  "end": 2114
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2116,
                    "end": 2121
                  },
                  "typeArguments": null,
                  "start": 2116,
                  "end": 2121
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2123,
                    "end": 2135
                  },
                  "typeArguments": null,
                  "start": 2123,
                  "end": 2135
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2137,
                    "end": 2146
                  },
                  "typeArguments": null,
                  "start": 2137,
                  "end": 2146
                }
              ],
              "start": 2093,
              "end": 2147
            },
            "start": 2078,
            "end": 2147
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2154,
                  "end": 2165
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 2168,
                    "end": 2177
                  },
                  "start": 2166,
                  "end": 2177
                },
                "accessibility": null,
                "static": false,
                "start": 2154,
                "end": 2178
              }
            ],
            "start": 2150,
            "end": 2180
          }
        ],
        "start": 2078,
        "end": 2180
      },
      "declare": false,
      "start": 1923,
      "end": 2181
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverBaseResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 2193,
        "end": 2216
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2217,
              "end": 2222
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2225,
              "end": 2232
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2217,
            "end": 2232
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2234,
              "end": 2240
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 2243,
                "end": 2255
              },
              "typeArguments": null,
              "start": 2243,
              "end": 2255
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2234,
            "end": 2255
          }
        ],
        "start": 2216,
        "end": 2256
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 2261,
              "end": 2265
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2267,
                      "end": 2272
                    },
                    "typeArguments": null,
                    "start": 2267,
                    "end": 2272
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2275,
                    "end": 2284
                  }
                ],
                "start": 2267,
                "end": 2284
              },
              "start": 2265,
              "end": 2284
            },
            "accessibility": null,
            "static": false,
            "start": 2261,
            "end": 2285
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataUpdatedAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 2288,
              "end": 2301
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2303,
                "end": 2309
              },
              "start": 2301,
              "end": 2309
            },
            "accessibility": null,
            "static": false,
            "start": 2288,
            "end": 2310
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 2313,
              "end": 2318
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2320,
                      "end": 2326
                    },
                    "typeArguments": null,
                    "start": 2320,
                    "end": 2326
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2329,
                    "end": 2333
                  }
                ],
                "start": 2320,
                "end": 2333
              },
              "start": 2318,
              "end": 2333
            },
            "accessibility": null,
            "static": false,
            "start": 2313,
            "end": 2334
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "errorUpdatedAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 2337,
              "end": 2351
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2353,
                "end": 2359
              },
              "start": 2351,
              "end": 2359
            },
            "accessibility": null,
            "static": false,
            "start": 2337,
            "end": 2360
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "failureCount",
              "optional": false,
              "typeAnnotation": null,
              "start": 2363,
              "end": 2375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2377,
                "end": 2383
              },
              "start": 2375,
              "end": 2383
            },
            "accessibility": null,
            "static": false,
            "start": 2363,
            "end": 2384
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "failureReason",
              "optional": false,
              "typeAnnotation": null,
              "start": 2387,
              "end": 2400
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2402,
                      "end": 2408
                    },
                    "typeArguments": null,
                    "start": 2402,
                    "end": 2408
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2411,
                    "end": 2415
                  }
                ],
                "start": 2402,
                "end": 2415
              },
              "start": 2400,
              "end": 2415
            },
            "accessibility": null,
            "static": false,
            "start": 2387,
            "end": 2416
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "errorUpdateCount",
              "optional": false,
              "typeAnnotation": null,
              "start": 2419,
              "end": 2435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2437,
                "end": 2443
              },
              "start": 2435,
              "end": 2443
            },
            "accessibility": null,
            "static": false,
            "start": 2419,
            "end": 2444
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2447,
              "end": 2454
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2456,
                "end": 2463
              },
              "start": 2454,
              "end": 2463
            },
            "accessibility": null,
            "static": false,
            "start": 2447,
            "end": 2464
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetched",
              "optional": false,
              "typeAnnotation": null,
              "start": 2467,
              "end": 2476
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2478,
                "end": 2485
              },
              "start": 2476,
              "end": 2485
            },
            "accessibility": null,
            "static": false,
            "start": 2467,
            "end": 2486
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetchedAfterMount",
              "optional": false,
              "typeAnnotation": null,
              "start": 2489,
              "end": 2508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2510,
                "end": 2517
              },
              "start": 2508,
              "end": 2517
            },
            "accessibility": null,
            "static": false,
            "start": 2489,
            "end": 2518
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetching",
              "optional": false,
              "typeAnnotation": null,
              "start": 2521,
              "end": 2531
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2533,
                "end": 2540
              },
              "start": 2531,
              "end": 2540
            },
            "accessibility": null,
            "static": false,
            "start": 2521,
            "end": 2541
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoading",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2553
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2555,
                "end": 2562
              },
              "start": 2553,
              "end": 2562
            },
            "accessibility": null,
            "static": false,
            "start": 2544,
            "end": 2563
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "typeAnnotation": null,
              "start": 2566,
              "end": 2575
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2577,
                "end": 2584
              },
              "start": 2575,
              "end": 2584
            },
            "accessibility": null,
            "static": false,
            "start": 2566,
            "end": 2585
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2588,
              "end": 2602
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2604,
                "end": 2611
              },
              "start": 2602,
              "end": 2611
            },
            "accessibility": null,
            "static": false,
            "start": 2588,
            "end": 2612
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isInitialLoading",
              "optional": false,
              "typeAnnotation": null,
              "start": 2615,
              "end": 2631
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2633,
                "end": 2640
              },
              "start": 2631,
              "end": 2640
            },
            "accessibility": null,
            "static": false,
            "start": 2615,
            "end": 2641
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPaused",
              "optional": false,
              "typeAnnotation": null,
              "start": 2644,
              "end": 2652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2654,
                "end": 2661
              },
              "start": 2652,
              "end": 2661
            },
            "accessibility": null,
            "static": false,
            "start": 2644,
            "end": 2662
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPlaceholderData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2665,
              "end": 2682
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2684,
                "end": 2691
              },
              "start": 2682,
              "end": 2691
            },
            "accessibility": null,
            "static": false,
            "start": 2665,
            "end": 2692
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2695,
              "end": 2709
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2711,
                "end": 2718
              },
              "start": 2709,
              "end": 2718
            },
            "accessibility": null,
            "static": false,
            "start": 2695,
            "end": 2719
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetching",
              "optional": false,
              "typeAnnotation": null,
              "start": 2722,
              "end": 2734
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2736,
                "end": 2743
              },
              "start": 2734,
              "end": 2743
            },
            "accessibility": null,
            "static": false,
            "start": 2722,
            "end": 2744
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isStale",
              "optional": false,
              "typeAnnotation": null,
              "start": 2747,
              "end": 2754
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2756,
                "end": 2763
              },
              "start": 2754,
              "end": 2763
            },
            "accessibility": null,
            "static": false,
            "start": 2747,
            "end": 2764
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 2767,
              "end": 2776
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2778,
                "end": 2785
              },
              "start": 2776,
              "end": 2785
            },
            "accessibility": null,
            "static": false,
            "start": 2767,
            "end": 2786
          }
        ],
        "start": 2257,
        "end": 2788
      },
      "declare": false,
      "start": 2183,
      "end": 2788
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverSuccessResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 2800,
        "end": 2826
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2827,
              "end": 2832
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2835,
              "end": 2842
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2827,
            "end": 2842
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2844,
              "end": 2850
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 2853,
                "end": 2865
              },
              "typeArguments": null,
              "start": 2853,
              "end": 2865
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2844,
            "end": 2865
          }
        ],
        "start": 2826,
        "end": 2866
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "QueryObserverBaseResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 2877,
            "end": 2900
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2901,
                  "end": 2906
                },
                "typeArguments": null,
                "start": 2901,
                "end": 2906
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2908,
                  "end": 2914
                },
                "typeArguments": null,
                "start": 2908,
                "end": 2914
              }
            ],
            "start": 2900,
            "end": 2915
          },
          "start": 2877,
          "end": 2915
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 2920,
              "end": 2924
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2926,
                  "end": 2931
                },
                "typeArguments": null,
                "start": 2926,
                "end": 2931
              },
              "start": 2924,
              "end": 2931
            },
            "accessibility": null,
            "static": false,
            "start": 2920,
            "end": 2932
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 2935,
              "end": 2940
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 2942,
                "end": 2946
              },
              "start": 2940,
              "end": 2946
            },
            "accessibility": null,
            "static": false,
            "start": 2935,
            "end": 2947
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2950,
              "end": 2957
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 2959,
                  "end": 2964
                },
                "start": 2959,
                "end": 2964
              },
              "start": 2957,
              "end": 2964
            },
            "accessibility": null,
            "static": false,
            "start": 2950,
            "end": 2965
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "typeAnnotation": null,
              "start": 2968,
              "end": 2977
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 2979,
                  "end": 2984
                },
                "start": 2979,
                "end": 2984
              },
              "start": 2977,
              "end": 2984
            },
            "accessibility": null,
            "static": false,
            "start": 2968,
            "end": 2985
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2988,
              "end": 3002
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3004,
                  "end": 3009
                },
                "start": 3004,
                "end": 3009
              },
              "start": 3002,
              "end": 3009
            },
            "accessibility": null,
            "static": false,
            "start": 2988,
            "end": 3010
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3013,
              "end": 3027
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3029,
                  "end": 3034
                },
                "start": 3029,
                "end": 3034
              },
              "start": 3027,
              "end": 3034
            },
            "accessibility": null,
            "static": false,
            "start": 3013,
            "end": 3035
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 3038,
              "end": 3047
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3049,
                  "end": 3053
                },
                "start": 3049,
                "end": 3053
              },
              "start": 3047,
              "end": 3053
            },
            "accessibility": null,
            "static": false,
            "start": 3038,
            "end": 3054
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "status",
              "optional": false,
              "typeAnnotation": null,
              "start": 3057,
              "end": 3063
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "success",
                  "raw": "\"success\"",
                  "start": 3065,
                  "end": 3074
                },
                "start": 3065,
                "end": 3074
              },
              "start": 3063,
              "end": 3074
            },
            "accessibility": null,
            "static": false,
            "start": 3057,
            "end": 3075
          }
        ],
        "start": 2916,
        "end": 3077
      },
      "declare": false,
      "start": 2790,
      "end": 3077
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefinedQueryObserverResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 3084,
        "end": 3110
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3114,
              "end": 3119
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3122,
              "end": 3129
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3114,
            "end": 3129
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3133,
              "end": 3139
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3142,
                "end": 3154
              },
              "typeArguments": null,
              "start": 3142,
              "end": 3154
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3133,
            "end": 3154
          }
        ],
        "start": 3110,
        "end": 3157
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "QueryObserverSuccessResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 3160,
          "end": 3186
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3187,
                "end": 3192
              },
              "typeArguments": null,
              "start": 3187,
              "end": 3192
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3194,
                "end": 3200
              },
              "typeArguments": null,
              "start": 3194,
              "end": 3200
            }
          ],
          "start": 3186,
          "end": 3201
        },
        "start": 3160,
        "end": 3201
      },
      "declare": false,
      "start": 3079,
      "end": 3202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 3208,
        "end": 3227
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3231,
              "end": 3236
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3239,
              "end": 3246
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3231,
            "end": 3246
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3250,
              "end": 3256
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3259,
                "end": 3271
              },
              "typeArguments": null,
              "start": 3259,
              "end": 3271
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3250,
            "end": 3271
          }
        ],
        "start": 3227,
        "end": 3274
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "DefinedQueryObserverResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 3277,
          "end": 3303
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3304,
                "end": 3309
              },
              "typeArguments": null,
              "start": 3304,
              "end": 3309
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3311,
                "end": 3317
              },
              "typeArguments": null,
              "start": 3311,
              "end": 3317
            }
          ],
          "start": 3303,
          "end": 3318
        },
        "start": 3277,
        "end": 3318
      },
      "declare": false,
      "start": 3203,
      "end": 3319
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 3326,
        "end": 3331
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3332,
              "end": 3333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3332,
            "end": 3333
          }
        ],
        "start": 3331,
        "end": 3334
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 3341,
              "end": 3346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3348,
                  "end": 3349
                },
                "typeArguments": null,
                "start": 3348,
                "end": 3349
              },
              "start": 3346,
              "end": 3349
            },
            "accessibility": null,
            "static": false,
            "start": 3341,
            "end": 3350
          }
        ],
        "start": 3337,
        "end": 3352
      },
      "declare": false,
      "start": 3321,
      "end": 3353
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseBaseQueryReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3360,
        "end": 3382
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3386,
              "end": 3391
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3386,
            "end": 3391
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3395,
              "end": 3401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3395,
            "end": 3401
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 3405,
              "end": 3411
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryObserverResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 3414,
                "end": 3433
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3434,
                      "end": 3439
                    },
                    "typeArguments": null,
                    "start": 3434,
                    "end": 3439
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3441,
                      "end": 3447
                    },
                    "typeArguments": null,
                    "start": 3441,
                    "end": 3447
                  }
                ],
                "start": 3433,
                "end": 3448
              },
              "start": 3414,
              "end": 3448
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3405,
            "end": 3448
          }
        ],
        "start": 3382,
        "end": 3451
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3459,
              "end": 3460
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3470,
                  "end": 3476
                },
                "typeArguments": null,
                "start": 3470,
                "end": 3476
              },
              "start": 3464,
              "end": 3476
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3479,
                  "end": 3480
                },
                "typeArguments": null,
                "start": 3479,
                "end": 3480
              },
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "fetchNextPage",
                      "raw": "\"fetchNextPage\"",
                      "start": 3495,
                      "end": 3510
                    },
                    "start": 3495,
                    "end": 3510
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "fetchPreviousPage",
                      "raw": "\"fetchPreviousPage\"",
                      "start": 3517,
                      "end": 3536
                    },
                    "start": 3517,
                    "end": 3536
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "refetch",
                      "raw": "\"refetch\"",
                      "start": 3543,
                      "end": 3552
                    },
                    "start": 3543,
                    "end": 3552
                  }
                ],
                "start": 3493,
                "end": 3552
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3559,
                    "end": 3565
                  },
                  "typeArguments": null,
                  "start": 3559,
                  "end": 3565
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3566,
                    "end": 3567
                  },
                  "typeArguments": null,
                  "start": 3566,
                  "end": 3567
                },
                "start": 3559,
                "end": 3568
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToRef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3575,
                  "end": 3580
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3581,
                          "end": 3589
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3590,
                                "end": 3596
                              },
                              "typeArguments": null,
                              "start": 3590,
                              "end": 3596
                            }
                          ],
                          "start": 3589,
                          "end": 3597
                        },
                        "start": 3581,
                        "end": 3597
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3598,
                          "end": 3599
                        },
                        "typeArguments": null,
                        "start": 3598,
                        "end": 3599
                      },
                      "start": 3581,
                      "end": 3600
                    }
                  ],
                  "start": 3580,
                  "end": 3601
                },
                "start": 3575,
                "end": 3601
              },
              "start": 3479,
              "end": 3601
            },
            "optional": false,
            "readonly": null,
            "start": 3454,
            "end": 3604
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "suspense",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3611,
                  "end": 3619
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3627,
                          "end": 3634
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3635,
                                "end": 3641
                              },
                              "typeArguments": null,
                              "start": 3635,
                              "end": 3641
                            }
                          ],
                          "start": 3634,
                          "end": 3642
                        },
                        "start": 3627,
                        "end": 3642
                      },
                      "start": 3624,
                      "end": 3642
                    },
                    "start": 3621,
                    "end": 3642
                  },
                  "start": 3619,
                  "end": 3642
                },
                "accessibility": null,
                "static": false,
                "start": 3611,
                "end": 3643
              }
            ],
            "start": 3607,
            "end": 3645
          }
        ],
        "start": 3454,
        "end": 3645
      },
      "declare": false,
      "start": 3355,
      "end": 3646
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3653,
        "end": 3671
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3672,
              "end": 3677
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3672,
            "end": 3677
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3679,
              "end": 3685
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3679,
            "end": 3685
          }
        ],
        "start": 3671,
        "end": 3686
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UseBaseQueryReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 3689,
          "end": 3711
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3717
              },
              "typeArguments": null,
              "start": 3712,
              "end": 3717
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3719,
                "end": 3725
              },
              "typeArguments": null,
              "start": 3719,
              "end": 3725
            }
          ],
          "start": 3711,
          "end": 3726
        },
        "start": 3689,
        "end": 3726
      },
      "declare": false,
      "start": 3648,
      "end": 3727
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 3746,
        "end": 3754
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3758,
              "end": 3770
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3773,
              "end": 3780
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3758,
            "end": 3780
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3784,
              "end": 3790
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3793,
                "end": 3805
              },
              "typeArguments": null,
              "start": 3793,
              "end": 3805
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3784,
            "end": 3805
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3809,
              "end": 3814
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3817,
                "end": 3829
              },
              "typeArguments": null,
              "start": 3817,
              "end": 3829
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3809,
            "end": 3829
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 3833,
              "end": 3842
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 3851,
                "end": 3859
              },
              "typeArguments": null,
              "start": 3851,
              "end": 3859
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 3862,
                "end": 3870
              },
              "typeArguments": null,
              "start": 3862,
              "end": 3870
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3833,
            "end": 3870
          }
        ],
        "start": 3754,
        "end": 3873
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UndefinedInitialQueryOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 3886,
                "end": 3914
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TQueryFnData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3915,
                      "end": 3927
                    },
                    "typeArguments": null,
                    "start": 3915,
                    "end": 3927
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3929,
                      "end": 3935
                    },
                    "typeArguments": null,
                    "start": 3929,
                    "end": 3935
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3937,
                      "end": 3942
                    },
                    "typeArguments": null,
                    "start": 3937,
                    "end": 3942
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TQueryKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3944,
                      "end": 3953
                    },
                    "typeArguments": null,
                    "start": 3944,
                    "end": 3953
                  }
                ],
                "start": 3914,
                "end": 3954
              },
              "start": 3886,
              "end": 3954
            },
            "start": 3884,
            "end": 3954
          },
          "start": 3877,
          "end": 3954
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 3959,
            "end": 3977
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3978,
                  "end": 3983
                },
                "typeArguments": null,
                "start": 3978,
                "end": 3983
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3985,
                  "end": 3991
                },
                "typeArguments": null,
                "start": 3985,
                "end": 3991
              }
            ],
            "start": 3977,
            "end": 3992
          },
          "start": 3959,
          "end": 3992
        },
        "start": 3957,
        "end": 3992
      },
      "body": null,
      "expression": false,
      "start": 3729,
      "end": 3993
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4009,
            "end": 4027
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4031,
            "end": 4032
          },
          "exportKind": "type",
          "start": 4004,
          "end": 4032
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 4034,
            "end": 4042
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 4046,
            "end": 4047
          },
          "exportKind": "value",
          "start": 4034,
          "end": 4047
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3995,
      "end": 4050
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4051
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 32
          },
          "exportKind": "value",
          "start": 9,
          "end": 32
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 47
          },
          "exportKind": "value",
          "start": 34,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./useQuery-CPqkvEsh.js",
        "raw": "'./useQuery-CPqkvEsh.js'",
        "start": 55,
        "end": 79
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@tanstack/vue-query",
        "raw": "'@tanstack/vue-query'",
        "start": 25,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "baseUrl",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 61
          },
          "init": {
            "type": "Literal",
            "value": "https://api.publicapis.org/",
            "raw": "'https://api.publicapis.org/'",
            "start": 64,
            "end": 93
          },
          "definite": false,
          "start": 54,
          "end": 93
        }
      ],
      "declare": false,
      "start": 48,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IEntry",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 111
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "API",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              },
              "start": 119,
              "end": 127
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 127
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Description",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 149
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Auth",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 152,
            "end": 164
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTTPS",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 172
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 174,
                "end": 181
              },
              "start": 172,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 167,
            "end": 181
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cors",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              },
              "start": 188,
              "end": 196
            },
            "accessibility": null,
            "static": false,
            "start": 184,
            "end": 196
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Link",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
              },
              "start": 203,
              "end": 211
            },
            "accessibility": null,
            "static": false,
            "start": 199,
            "end": 211
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Category",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              },
              "start": 222,
              "end": 230
            },
            "accessibility": null,
            "static": false,
            "start": 214,
            "end": 230
          }
        ],
        "start": 112,
        "end": 232
      },
      "declare": false,
      "start": 95,
      "end": 232
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testApi",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 247
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getEntries",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 264
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 270,
                        "end": 277
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IEntry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 278,
                                "end": 284
                              },
                              "typeArguments": null,
                              "start": 278,
                              "end": 284
                            },
                            "start": 278,
                            "end": 286
                          }
                        ],
                        "start": 277,
                        "end": 287
                      },
                      "start": 270,
                      "end": 287
                    },
                    "start": 268,
                    "end": 287
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "fetch",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 304,
                                        "end": 309
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "baseUrl",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 310,
                                            "end": 317
                                          },
                                          "operator": "+",
                                          "right": {
                                            "type": "Literal",
                                            "value": "entries",
                                            "raw": "'entries'",
                                            "start": 320,
                                            "end": 329
                                          },
                                          "start": 310,
                                          "end": 329
                                        }
                                      ],
                                      "optional": false,
                                      "start": 304,
                                      "end": 330
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 338,
                                      "end": 342
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 304,
                                    "end": 342
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "res",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 344,
                                          "end": 347
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "res",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 352,
                                            "end": 355
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "json",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 356,
                                            "end": 360
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 352,
                                          "end": 360
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 352,
                                        "end": 362
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 343,
                                      "end": 362
                                    }
                                  ],
                                  "optional": false,
                                  "start": 304,
                                  "end": 363
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 371,
                                  "end": 375
                                },
                                "optional": false,
                                "computed": false,
                                "start": 304,
                                "end": 375
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 377,
                                      "end": 381
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 386,
                                      "end": 390
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "entries",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 391,
                                      "end": 398
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 386,
                                    "end": 398
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 376,
                                  "end": 398
                                }
                              ],
                              "optional": false,
                              "start": 304,
                              "end": 399
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "catch",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 407,
                              "end": 412
                            },
                            "optional": false,
                            "computed": false,
                            "start": 304,
                            "end": 412
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "err",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 414,
                                  "end": 417
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 422,
                                    "end": 429
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 430,
                                    "end": 433
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 422,
                                  "end": 433
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "err",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 434,
                                    "end": 437
                                  }
                                ],
                                "optional": false,
                                "start": 422,
                                "end": 438
                              },
                              "id": null,
                              "generator": false,
                              "start": 413,
                              "end": 438
                            }
                          ],
                          "optional": false,
                          "start": 304,
                          "end": 439
                        },
                        "start": 297,
                        "end": 439
                      }
                    ],
                    "start": 291,
                    "end": 443
                  },
                  "id": null,
                  "generator": false,
                  "start": 266,
                  "end": 443
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 254,
                "end": 443
              }
            ],
            "start": 250,
            "end": 445
          },
          "definite": false,
          "start": 240,
          "end": 445
        }
      ],
      "declare": false,
      "start": 234,
      "end": 445
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entryKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 462
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "all",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 472
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "entries",
                        "raw": "'entries'",
                        "start": 475,
                        "end": 484
                      }
                    ],
                    "start": 474,
                    "end": 485
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 489,
                      "end": 494
                    },
                    "typeArguments": null,
                    "start": 489,
                    "end": 494
                  },
                  "start": 474,
                  "end": 494
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 469,
                "end": 494
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 502
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entryKeys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 514,
                              "end": 523
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "all",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 524,
                              "end": 527
                            },
                            "optional": false,
                            "computed": false,
                            "start": 514,
                            "end": 527
                          },
                          "start": 511,
                          "end": 527
                        },
                        {
                          "type": "Literal",
                          "value": "list",
                          "raw": "'list'",
                          "start": 529,
                          "end": 535
                        }
                      ],
                      "start": 510,
                      "end": 536
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 540,
                        "end": 545
                      },
                      "typeArguments": null,
                      "start": 540,
                      "end": 545
                    },
                    "start": 510,
                    "end": 545
                  },
                  "id": null,
                  "generator": false,
                  "start": 504,
                  "end": 545
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 498,
                "end": 545
              }
            ],
            "start": 465,
            "end": 547
          },
          "definite": false,
          "start": 453,
          "end": 547
        }
      ],
      "declare": false,
      "start": 447,
      "end": 547
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useEntries",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 572
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "useQuery",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 600
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "queryKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 607,
                                "end": 615
                              },
                              "value": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "entryKeys",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 617,
                                    "end": 626
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "list",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 627,
                                    "end": 631
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 617,
                                  "end": 631
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 617,
                                "end": 633
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 607,
                              "end": 633
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "queryFn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 639,
                                "end": 646
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "testApi",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 648,
                                  "end": 655
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getEntries",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 656,
                                  "end": 666
                                },
                                "optional": false,
                                "computed": false,
                                "start": 648,
                                "end": 666
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 639,
                              "end": 666
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "select",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 672,
                                "end": 678
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 681,
                                    "end": 685
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 690,
                                      "end": 694
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "slice",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 695,
                                      "end": 700
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 690,
                                    "end": 700
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 701,
                                      "end": 702
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 704,
                                      "end": 706
                                    }
                                  ],
                                  "optional": false,
                                  "start": 690,
                                  "end": 707
                                },
                                "id": null,
                                "generator": false,
                                "start": 680,
                                "end": 707
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 672,
                              "end": 707
                            }
                          ],
                          "start": 601,
                          "end": 711
                        }
                      ],
                      "optional": false,
                      "start": 592,
                      "end": 712
                    },
                    "start": 585,
                    "end": 712
                  }
                ],
                "start": 581,
                "end": 714
              },
              "id": null,
              "generator": false,
              "start": 575,
              "end": 714
            },
            "definite": false,
            "start": 562,
            "end": 714
          }
        ],
        "declare": false,
        "start": 556,
        "end": 714
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 549,
      "end": 714
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 714
}
```
