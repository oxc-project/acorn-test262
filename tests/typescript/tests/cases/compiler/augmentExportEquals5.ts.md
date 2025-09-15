__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Express",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Request",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 56
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 57,
                "end": 60
              },
              "declare": false,
              "start": 39,
              "end": 60
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 32,
            "end": 60
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Response",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 90
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 91,
                "end": 94
              },
              "declare": false,
              "start": 72,
              "end": 94
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 65,
            "end": 94
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Application",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 127
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 128,
                "end": 131
              },
              "declare": false,
              "start": 106,
              "end": 131
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 99,
            "end": 131
          }
        ],
        "start": 26,
        "end": 133
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 133
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 150,
        "end": 159
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 181
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Express",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 189
                  },
                  "start": 180,
                  "end": 189
                },
                "typeArguments": null,
                "start": 180,
                "end": 189
              },
              "start": 178,
              "end": 189
            },
            "body": null,
            "expression": false,
            "start": 166,
            "end": 190
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRoute",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 233
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "all",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 251
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handler",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 255,
                              "end": 262
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RequestHandler",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 264,
                                    "end": 278
                                  },
                                  "typeArguments": null,
                                  "start": 264,
                                  "end": 278
                                },
                                "start": 264,
                                "end": 280
                              },
                              "start": 262,
                              "end": 280
                            },
                            "value": null,
                            "start": 252,
                            "end": 280
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IRoute",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 283,
                              "end": 289
                            },
                            "typeArguments": null,
                            "start": 283,
                            "end": 289
                          },
                          "start": 281,
                          "end": 289
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 248,
                        "end": 290
                      }
                    ],
                    "start": 234,
                    "end": 300
                  },
                  "declare": false,
                  "start": 217,
                  "end": 300
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRouterMatcher",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 334
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
                          "start": 335,
                          "end": 336
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 335,
                        "end": 336
                      }
                    ],
                    "start": 334,
                    "end": 337
                  },
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 359,
                                    "end": 365
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RegExp",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 366,
                                      "end": 372
                                    },
                                    "typeArguments": null,
                                    "start": 366,
                                    "end": 372
                                  }
                                ],
                                "start": 359,
                                "end": 372
                              },
                              "start": 357,
                              "end": 372
                            },
                            "start": 353,
                            "end": 372
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handlers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 377,
                              "end": 385
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RequestHandler",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 387,
                                    "end": 401
                                  },
                                  "typeArguments": null,
                                  "start": 387,
                                  "end": 401
                                },
                                "start": 387,
                                "end": 403
                              },
                              "start": 385,
                              "end": 403
                            },
                            "value": null,
                            "start": 374,
                            "end": 403
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 406,
                              "end": 407
                            },
                            "typeArguments": null,
                            "start": 406,
                            "end": 407
                          },
                          "start": 404,
                          "end": 407
                        },
                        "start": 352,
                        "end": 408
                      }
                    ],
                    "start": 338,
                    "end": 418
                  },
                  "declare": false,
                  "start": 310,
                  "end": 418
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRouter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 445
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
                          "start": 446,
                          "end": 447
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 446,
                        "end": 447
                      }
                    ],
                    "start": 445,
                    "end": 448
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 471
                      },
                      "typeArguments": null,
                      "start": 457,
                      "end": 471
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "route",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 486,
                          "end": 491
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "path",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 498,
                                "end": 504
                              },
                              "start": 496,
                              "end": 504
                            },
                            "start": 492,
                            "end": 504
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IRoute",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 507,
                              "end": 513
                            },
                            "typeArguments": null,
                            "start": 507,
                            "end": 513
                          },
                          "start": 505,
                          "end": 513
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 486,
                        "end": 514
                      }
                    ],
                    "start": 472,
                    "end": 524
                  },
                  "declare": false,
                  "start": 428,
                  "end": 524
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Router",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 556
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 567,
                            "end": 570
                          },
                          "start": 565,
                          "end": 570
                        },
                        "start": 557,
                        "end": 570
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Router",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 573,
                          "end": 579
                        },
                        "typeArguments": null,
                        "start": 573,
                        "end": 579
                      },
                      "start": 571,
                      "end": 579
                    },
                    "body": null,
                    "expression": false,
                    "start": 541,
                    "end": 580
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 534,
                  "end": 580
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Router",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 607,
                      "end": 613
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IRouter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 622,
                          "end": 629
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Router",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 630,
                                "end": 636
                              },
                              "typeArguments": null,
                              "start": 630,
                              "end": 636
                            }
                          ],
                          "start": 629,
                          "end": 637
                        },
                        "start": 622,
                        "end": 637
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 638,
                      "end": 640
                    },
                    "declare": false,
                    "start": 597,
                    "end": 640
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 590,
                  "end": 640
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Errback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 667
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 676,
                                  "end": 681
                                },
                                "typeArguments": null,
                                "start": 676,
                                "end": 681
                              },
                              "start": 674,
                              "end": 681
                            },
                            "start": 671,
                            "end": 681
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 684,
                            "end": 688
                          },
                          "start": 682,
                          "end": 688
                        },
                        "start": 670,
                        "end": 689
                      }
                    ],
                    "start": 668,
                    "end": 691
                  },
                  "declare": false,
                  "start": 650,
                  "end": 691
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Request",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 711,
                    "end": 718
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 734
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 735,
                          "end": 742
                        },
                        "optional": false,
                        "computed": false,
                        "start": 727,
                        "end": 742
                      },
                      "typeArguments": null,
                      "start": 727,
                      "end": 742
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 758,
                          "end": 761
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 769,
                                "end": 775
                              },
                              "start": 767,
                              "end": 775
                            },
                            "start": 763,
                            "end": 775
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 778,
                            "end": 784
                          },
                          "start": 776,
                          "end": 784
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 758,
                        "end": 785
                      }
                    ],
                    "start": 743,
                    "end": 795
                  },
                  "declare": false,
                  "start": 701,
                  "end": 795
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Response",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 823
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 832,
                          "end": 839
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Response",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 840,
                          "end": 848
                        },
                        "optional": false,
                        "computed": false,
                        "start": 832,
                        "end": 848
                      },
                      "typeArguments": null,
                      "start": 832,
                      "end": 848
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
                          "name": "charset",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 863,
                          "end": 870
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 872,
                            "end": 878
                          },
                          "start": 870,
                          "end": 878
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 863,
                        "end": 879
                      }
                    ],
                    "start": 849,
                    "end": 889
                  },
                  "declare": false,
                  "start": 805,
                  "end": 889
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ErrorRequestHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 909,
                    "end": 928
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 949,
                                "end": 952
                              },
                              "start": 947,
                              "end": 952
                            },
                            "start": 944,
                            "end": 952
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 959,
                                  "end": 966
                                },
                                "typeArguments": null,
                                "start": 959,
                                "end": 966
                              },
                              "start": 957,
                              "end": 966
                            },
                            "start": 954,
                            "end": 966
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 973,
                                  "end": 981
                                },
                                "typeArguments": null,
                                "start": 973,
                                "end": 981
                              },
                              "start": 971,
                              "end": 981
                            },
                            "start": 968,
                            "end": 981
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 989,
                                  "end": 997
                                },
                                "typeArguments": null,
                                "start": 989,
                                "end": 997
                              },
                              "start": 987,
                              "end": 997
                            },
                            "start": 983,
                            "end": 997
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1000,
                            "end": 1003
                          },
                          "start": 998,
                          "end": 1003
                        },
                        "start": 943,
                        "end": 1004
                      }
                    ],
                    "start": 929,
                    "end": 1014
                  },
                  "declare": false,
                  "start": 899,
                  "end": 1014
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequestHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1034,
                    "end": 1048
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1069,
                                  "end": 1076
                                },
                                "typeArguments": null,
                                "start": 1069,
                                "end": 1076
                              },
                              "start": 1067,
                              "end": 1076
                            },
                            "start": 1064,
                            "end": 1076
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1083,
                                  "end": 1091
                                },
                                "typeArguments": null,
                                "start": 1083,
                                "end": 1091
                              },
                              "start": 1081,
                              "end": 1091
                            },
                            "start": 1078,
                            "end": 1091
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1099,
                                  "end": 1107
                                },
                                "typeArguments": null,
                                "start": 1099,
                                "end": 1107
                              },
                              "start": 1097,
                              "end": 1107
                            },
                            "start": 1093,
                            "end": 1107
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1110,
                            "end": 1113
                          },
                          "start": 1108,
                          "end": 1113
                        },
                        "start": 1063,
                        "end": 1114
                      }
                    ],
                    "start": 1049,
                    "end": 1124
                  },
                  "declare": false,
                  "start": 1024,
                  "end": 1124
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Handler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1144,
                    "end": 1151
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1160,
                        "end": 1174
                      },
                      "typeArguments": null,
                      "start": 1160,
                      "end": 1174
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 1175,
                    "end": 1177
                  },
                  "declare": false,
                  "start": 1134,
                  "end": 1177
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequestParamHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1197,
                    "end": 1216
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1237,
                                  "end": 1244
                                },
                                "typeArguments": null,
                                "start": 1237,
                                "end": 1244
                              },
                              "start": 1235,
                              "end": 1244
                            },
                            "start": 1232,
                            "end": 1244
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1251,
                                  "end": 1259
                                },
                                "typeArguments": null,
                                "start": 1251,
                                "end": 1259
                              },
                              "start": 1249,
                              "end": 1259
                            },
                            "start": 1246,
                            "end": 1259
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1267,
                                  "end": 1275
                                },
                                "typeArguments": null,
                                "start": 1267,
                                "end": 1275
                              },
                              "start": 1265,
                              "end": 1275
                            },
                            "start": 1261,
                            "end": 1275
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 1284,
                                "end": 1287
                              },
                              "start": 1282,
                              "end": 1287
                            },
                            "start": 1277,
                            "end": 1287
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1290,
                            "end": 1293
                          },
                          "start": 1288,
                          "end": 1293
                        },
                        "start": 1231,
                        "end": 1294
                      }
                    ],
                    "start": 1217,
                    "end": 1304
                  },
                  "declare": false,
                  "start": 1187,
                  "end": 1304
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1324,
                    "end": 1335
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IRouter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1344,
                        "end": 1351
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Application",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1352,
                              "end": 1363
                            },
                            "typeArguments": null,
                            "start": 1352,
                            "end": 1363
                          }
                        ],
                        "start": 1351,
                        "end": 1364
                      },
                      "start": 1344,
                      "end": 1364
                    },
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1366,
                          "end": 1373
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Application",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1374,
                          "end": 1385
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1366,
                        "end": 1385
                      },
                      "typeArguments": null,
                      "start": 1366,
                      "end": 1385
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
                          "name": "routes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1400,
                          "end": 1406
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1408,
                            "end": 1411
                          },
                          "start": 1406,
                          "end": 1411
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1400,
                        "end": 1412
                      }
                    ],
                    "start": 1386,
                    "end": 1422
                  },
                  "declare": false,
                  "start": 1314,
                  "end": 1422
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Express",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1442,
                    "end": 1449
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1458,
                        "end": 1469
                      },
                      "typeArguments": null,
                      "start": 1458,
                      "end": 1469
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createApplication",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1484,
                          "end": 1501
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Application",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1505,
                              "end": 1516
                            },
                            "typeArguments": null,
                            "start": 1505,
                            "end": 1516
                          },
                          "start": 1503,
                          "end": 1516
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 1484,
                        "end": 1517
                      }
                    ],
                    "start": 1470,
                    "end": 1527
                  },
                  "declare": false,
                  "start": 1432,
                  "end": 1527
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "static",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1549,
                            "end": 1552
                          },
                          "start": 1547,
                          "end": 1552
                        },
                        "start": 1541,
                        "end": 1552
                      },
                      "init": null,
                      "definite": false,
                      "start": 1541,
                      "end": 1552
                    }
                  ],
                  "declare": false,
                  "start": 1537,
                  "end": 1553
                }
              ],
              "start": 207,
              "end": 1559
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 195,
            "end": 1559
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1574,
              "end": 1575
            },
            "start": 1565,
            "end": 1576
          }
        ],
        "start": 160,
        "end": 1578
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 135,
      "end": 1578
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1579
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "start": 44,
          "end": 50
        }
      ],
      "source": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 56,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 37,
      "end": 66
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 82,
        "end": 91
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Request",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 128
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
                    },
                    "start": 128,
                    "end": 136
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 126,
                  "end": 137
                }
              ],
              "start": 116,
              "end": 143
            },
            "declare": false,
            "start": 98,
            "end": 143
          }
        ],
        "start": 92,
        "end": 145
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 67,
      "end": 145
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 146
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
            "name": "Request",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Request",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "importKind": "value",
          "start": 9,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 24,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./augmentation",
        "raw": "\"./augmentation\"",
        "start": 42,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 59
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Request",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 74
                },
                "typeArguments": null,
                "start": 67,
                "end": 74
              },
              "start": 65,
              "end": 74
            },
            "start": 64,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 74
        }
      ],
      "declare": false,
      "start": 60,
      "end": 75
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 90
            },
            "optional": false,
            "computed": false,
            "start": 86,
            "end": 90
          },
          "definite": false,
          "start": 82,
          "end": 90
        }
      ],
      "declare": false,
      "start": 76,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
