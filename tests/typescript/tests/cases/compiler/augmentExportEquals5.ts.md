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
        "start": 15,
        "end": 22
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
                "start": 46,
                "end": 53
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 54,
                "end": 57
              },
              "declare": false,
              "start": 36,
              "end": 57
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 29,
            "end": 57
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
                "start": 79,
                "end": 87
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 88,
                "end": 91
              },
              "declare": false,
              "start": 69,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 62,
            "end": 91
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
                "start": 113,
                "end": 124
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 125,
                "end": 128
              },
              "declare": false,
              "start": 103,
              "end": 128
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 96,
            "end": 128
          }
        ],
        "start": 23,
        "end": 130
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 130
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 147,
        "end": 156
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
              "start": 172,
              "end": 173
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
                    "start": 177,
                    "end": 178
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Express",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 186
                  },
                  "start": 177,
                  "end": 186
                },
                "typeArguments": null,
                "start": 177,
                "end": 186
              },
              "start": 175,
              "end": 186
            },
            "body": null,
            "expression": false,
            "start": 163,
            "end": 187
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
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
                    "start": 224,
                    "end": 230
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
                          "start": 245,
                          "end": 248
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
                              "start": 252,
                              "end": 259
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
                                    "start": 261,
                                    "end": 275
                                  },
                                  "typeArguments": null,
                                  "start": 261,
                                  "end": 275
                                },
                                "start": 261,
                                "end": 277
                              },
                              "start": 259,
                              "end": 277
                            },
                            "value": null,
                            "start": 249,
                            "end": 277
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
                              "start": 280,
                              "end": 286
                            },
                            "typeArguments": null,
                            "start": 280,
                            "end": 286
                          },
                          "start": 278,
                          "end": 286
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 245,
                        "end": 287
                      }
                    ],
                    "start": 231,
                    "end": 297
                  },
                  "declare": false,
                  "start": 214,
                  "end": 297
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRouterMatcher",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 331
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
                          "start": 332,
                          "end": 333
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 332,
                        "end": 333
                      }
                    ],
                    "start": 331,
                    "end": 334
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
                                    "start": 356,
                                    "end": 362
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RegExp",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 363,
                                      "end": 369
                                    },
                                    "typeArguments": null,
                                    "start": 363,
                                    "end": 369
                                  }
                                ],
                                "start": 356,
                                "end": 369
                              },
                              "start": 354,
                              "end": 369
                            },
                            "start": 350,
                            "end": 369
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
                              "start": 374,
                              "end": 382
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
                                    "start": 384,
                                    "end": 398
                                  },
                                  "typeArguments": null,
                                  "start": 384,
                                  "end": 398
                                },
                                "start": 384,
                                "end": 400
                              },
                              "start": 382,
                              "end": 400
                            },
                            "value": null,
                            "start": 371,
                            "end": 400
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
                              "start": 403,
                              "end": 404
                            },
                            "typeArguments": null,
                            "start": 403,
                            "end": 404
                          },
                          "start": 401,
                          "end": 404
                        },
                        "start": 349,
                        "end": 405
                      }
                    ],
                    "start": 335,
                    "end": 415
                  },
                  "declare": false,
                  "start": 307,
                  "end": 415
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRouter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 442
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
                          "start": 443,
                          "end": 444
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 443,
                        "end": 444
                      }
                    ],
                    "start": 442,
                    "end": 445
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
                        "start": 454,
                        "end": 468
                      },
                      "typeArguments": null,
                      "start": 454,
                      "end": 468
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
                          "start": 483,
                          "end": 488
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
                                "start": 495,
                                "end": 501
                              },
                              "start": 493,
                              "end": 501
                            },
                            "start": 489,
                            "end": 501
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
                              "start": 504,
                              "end": 510
                            },
                            "typeArguments": null,
                            "start": 504,
                            "end": 510
                          },
                          "start": 502,
                          "end": 510
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 483,
                        "end": 511
                      }
                    ],
                    "start": 469,
                    "end": 521
                  },
                  "declare": false,
                  "start": 425,
                  "end": 521
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
                      "start": 547,
                      "end": 553
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
                            "start": 564,
                            "end": 567
                          },
                          "start": 562,
                          "end": 567
                        },
                        "start": 554,
                        "end": 567
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
                          "start": 570,
                          "end": 576
                        },
                        "typeArguments": null,
                        "start": 570,
                        "end": 576
                      },
                      "start": 568,
                      "end": 576
                    },
                    "body": null,
                    "expression": false,
                    "start": 538,
                    "end": 577
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 531,
                  "end": 577
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
                      "start": 604,
                      "end": 610
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
                          "start": 619,
                          "end": 626
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
                                "start": 627,
                                "end": 633
                              },
                              "typeArguments": null,
                              "start": 627,
                              "end": 633
                            }
                          ],
                          "start": 626,
                          "end": 634
                        },
                        "start": 619,
                        "end": 634
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 635,
                      "end": 637
                    },
                    "declare": false,
                    "start": 594,
                    "end": 637
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 587,
                  "end": 637
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Errback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 657,
                    "end": 664
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
                                  "start": 673,
                                  "end": 678
                                },
                                "typeArguments": null,
                                "start": 673,
                                "end": 678
                              },
                              "start": 671,
                              "end": 678
                            },
                            "start": 668,
                            "end": 678
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 681,
                            "end": 685
                          },
                          "start": 679,
                          "end": 685
                        },
                        "start": 667,
                        "end": 686
                      }
                    ],
                    "start": 665,
                    "end": 688
                  },
                  "declare": false,
                  "start": 647,
                  "end": 688
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Request",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 715
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
                          "start": 724,
                          "end": 731
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 732,
                          "end": 739
                        },
                        "optional": false,
                        "computed": false,
                        "start": 724,
                        "end": 739
                      },
                      "typeArguments": null,
                      "start": 724,
                      "end": 739
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
                          "start": 755,
                          "end": 758
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
                                "start": 766,
                                "end": 772
                              },
                              "start": 764,
                              "end": 772
                            },
                            "start": 760,
                            "end": 772
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 775,
                            "end": 781
                          },
                          "start": 773,
                          "end": 781
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 755,
                        "end": 782
                      }
                    ],
                    "start": 740,
                    "end": 792
                  },
                  "declare": false,
                  "start": 698,
                  "end": 792
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Response",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 812,
                    "end": 820
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
                          "start": 829,
                          "end": 836
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Response",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 837,
                          "end": 845
                        },
                        "optional": false,
                        "computed": false,
                        "start": 829,
                        "end": 845
                      },
                      "typeArguments": null,
                      "start": 829,
                      "end": 845
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
                          "start": 860,
                          "end": 867
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 869,
                            "end": 875
                          },
                          "start": 867,
                          "end": 875
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 860,
                        "end": 876
                      }
                    ],
                    "start": 846,
                    "end": 886
                  },
                  "declare": false,
                  "start": 802,
                  "end": 886
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ErrorRequestHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 925
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
                                "start": 946,
                                "end": 949
                              },
                              "start": 944,
                              "end": 949
                            },
                            "start": 941,
                            "end": 949
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
                                  "start": 956,
                                  "end": 963
                                },
                                "typeArguments": null,
                                "start": 956,
                                "end": 963
                              },
                              "start": 954,
                              "end": 963
                            },
                            "start": 951,
                            "end": 963
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
                                  "start": 970,
                                  "end": 978
                                },
                                "typeArguments": null,
                                "start": 970,
                                "end": 978
                              },
                              "start": 968,
                              "end": 978
                            },
                            "start": 965,
                            "end": 978
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
                                  "start": 986,
                                  "end": 994
                                },
                                "typeArguments": null,
                                "start": 986,
                                "end": 994
                              },
                              "start": 984,
                              "end": 994
                            },
                            "start": 980,
                            "end": 994
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 997,
                            "end": 1000
                          },
                          "start": 995,
                          "end": 1000
                        },
                        "start": 940,
                        "end": 1001
                      }
                    ],
                    "start": 926,
                    "end": 1011
                  },
                  "declare": false,
                  "start": 896,
                  "end": 1011
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequestHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1031,
                    "end": 1045
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
                                  "start": 1066,
                                  "end": 1073
                                },
                                "typeArguments": null,
                                "start": 1066,
                                "end": 1073
                              },
                              "start": 1064,
                              "end": 1073
                            },
                            "start": 1061,
                            "end": 1073
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
                                  "start": 1080,
                                  "end": 1088
                                },
                                "typeArguments": null,
                                "start": 1080,
                                "end": 1088
                              },
                              "start": 1078,
                              "end": 1088
                            },
                            "start": 1075,
                            "end": 1088
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
                                  "start": 1096,
                                  "end": 1104
                                },
                                "typeArguments": null,
                                "start": 1096,
                                "end": 1104
                              },
                              "start": 1094,
                              "end": 1104
                            },
                            "start": 1090,
                            "end": 1104
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1107,
                            "end": 1110
                          },
                          "start": 1105,
                          "end": 1110
                        },
                        "start": 1060,
                        "end": 1111
                      }
                    ],
                    "start": 1046,
                    "end": 1121
                  },
                  "declare": false,
                  "start": 1021,
                  "end": 1121
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Handler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1141,
                    "end": 1148
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
                        "start": 1157,
                        "end": 1171
                      },
                      "typeArguments": null,
                      "start": 1157,
                      "end": 1171
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 1172,
                    "end": 1174
                  },
                  "declare": false,
                  "start": 1131,
                  "end": 1174
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequestParamHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1194,
                    "end": 1213
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
                                  "start": 1234,
                                  "end": 1241
                                },
                                "typeArguments": null,
                                "start": 1234,
                                "end": 1241
                              },
                              "start": 1232,
                              "end": 1241
                            },
                            "start": 1229,
                            "end": 1241
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
                                  "start": 1248,
                                  "end": 1256
                                },
                                "typeArguments": null,
                                "start": 1248,
                                "end": 1256
                              },
                              "start": 1246,
                              "end": 1256
                            },
                            "start": 1243,
                            "end": 1256
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
                                  "start": 1264,
                                  "end": 1272
                                },
                                "typeArguments": null,
                                "start": 1264,
                                "end": 1272
                              },
                              "start": 1262,
                              "end": 1272
                            },
                            "start": 1258,
                            "end": 1272
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
                                "start": 1281,
                                "end": 1284
                              },
                              "start": 1279,
                              "end": 1284
                            },
                            "start": 1274,
                            "end": 1284
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1287,
                            "end": 1290
                          },
                          "start": 1285,
                          "end": 1290
                        },
                        "start": 1228,
                        "end": 1291
                      }
                    ],
                    "start": 1214,
                    "end": 1301
                  },
                  "declare": false,
                  "start": 1184,
                  "end": 1301
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1321,
                    "end": 1332
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
                        "start": 1341,
                        "end": 1348
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
                              "start": 1349,
                              "end": 1360
                            },
                            "typeArguments": null,
                            "start": 1349,
                            "end": 1360
                          }
                        ],
                        "start": 1348,
                        "end": 1361
                      },
                      "start": 1341,
                      "end": 1361
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
                          "start": 1363,
                          "end": 1370
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Application",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1371,
                          "end": 1382
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1363,
                        "end": 1382
                      },
                      "typeArguments": null,
                      "start": 1363,
                      "end": 1382
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
                          "start": 1397,
                          "end": 1403
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1405,
                            "end": 1408
                          },
                          "start": 1403,
                          "end": 1408
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1397,
                        "end": 1409
                      }
                    ],
                    "start": 1383,
                    "end": 1419
                  },
                  "declare": false,
                  "start": 1311,
                  "end": 1419
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Express",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1439,
                    "end": 1446
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
                        "start": 1455,
                        "end": 1466
                      },
                      "typeArguments": null,
                      "start": 1455,
                      "end": 1466
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
                          "start": 1481,
                          "end": 1498
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
                              "start": 1502,
                              "end": 1513
                            },
                            "typeArguments": null,
                            "start": 1502,
                            "end": 1513
                          },
                          "start": 1500,
                          "end": 1513
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 1481,
                        "end": 1514
                      }
                    ],
                    "start": 1467,
                    "end": 1524
                  },
                  "declare": false,
                  "start": 1429,
                  "end": 1524
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
                            "start": 1546,
                            "end": 1549
                          },
                          "start": 1544,
                          "end": 1549
                        },
                        "start": 1538,
                        "end": 1549
                      },
                      "init": null,
                      "definite": false,
                      "start": 1538,
                      "end": 1549
                    }
                  ],
                  "declare": false,
                  "start": 1534,
                  "end": 1550
                }
              ],
              "start": 204,
              "end": 1556
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 192,
            "end": 1556
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1571,
              "end": 1572
            },
            "start": 1562,
            "end": 1573
          }
        ],
        "start": 157,
        "end": 1575
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 132,
      "end": 1575
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1576
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
