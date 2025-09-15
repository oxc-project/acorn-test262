__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 48
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 49,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 31,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateParmeterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 110
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 141
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 141
                    },
                    "start": 127,
                    "end": 141
                  },
                  "start": 122,
                  "end": 141
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 155
                  },
                  "typeArguments": null,
                  "start": 144,
                  "end": 155
                },
                "start": 142,
                "end": 155
              },
              "start": 117,
              "end": 156
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 190
                      },
                      "typeArguments": null,
                      "start": 178,
                      "end": 190
                    },
                    "start": 176,
                    "end": 190
                  },
                  "start": 171,
                  "end": 190
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 204
                  },
                  "typeArguments": null,
                  "start": 193,
                  "end": 204
                },
                "start": 191,
                "end": 204
              },
              "start": 170,
              "end": 205
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 227
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 247
                      },
                      "typeArguments": null,
                      "start": 235,
                      "end": 247
                    },
                    "start": 233,
                    "end": 247
                  },
                  "start": 228,
                  "end": 247
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 250,
                  "end": 254
                },
                "start": 248,
                "end": 254
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 219,
              "end": 255
            }
          ],
          "start": 111,
          "end": 266
        },
        "declare": false,
        "start": 61,
        "end": 266
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 266
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicParmeterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 323
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 342,
                        "end": 353
                      },
                      "typeArguments": null,
                      "start": 342,
                      "end": 353
                    },
                    "start": 340,
                    "end": 353
                  },
                  "start": 335,
                  "end": 353
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 367
                  },
                  "typeArguments": null,
                  "start": 356,
                  "end": 367
                },
                "start": 354,
                "end": 367
              },
              "start": 330,
              "end": 368
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 381,
                      "end": 392
                    },
                    "start": 379,
                    "end": 392
                  },
                  "start": 374,
                  "end": 392
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 406
                  },
                  "typeArguments": null,
                  "start": 395,
                  "end": 406
                },
                "start": 393,
                "end": 406
              },
              "start": 373,
              "end": 407
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 420
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 428,
                        "end": 439
                      },
                      "typeArguments": null,
                      "start": 428,
                      "end": 439
                    },
                    "start": 426,
                    "end": 439
                  },
                  "start": 421,
                  "end": 439
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 442,
                  "end": 446
                },
                "start": 440,
                "end": 446
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 412,
              "end": 447
            }
          ],
          "start": 324,
          "end": 449
        },
        "declare": false,
        "start": 275,
        "end": 449
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 268,
      "end": 449
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateParmeterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 501
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 520,
                      "end": 532
                    },
                    "typeArguments": null,
                    "start": 520,
                    "end": 532
                  },
                  "start": 518,
                  "end": 532
                },
                "start": 513,
                "end": 532
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 547
                },
                "typeArguments": null,
                "start": 535,
                "end": 547
              },
              "start": 533,
              "end": 547
            },
            "start": 508,
            "end": 548
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 573
                    },
                    "typeArguments": null,
                    "start": 561,
                    "end": 573
                  },
                  "start": 559,
                  "end": 573
                },
                "start": 554,
                "end": 573
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 576,
                  "end": 588
                },
                "typeArguments": null,
                "start": 576,
                "end": 588
              },
              "start": 574,
              "end": 588
            },
            "start": 553,
            "end": 589
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 602
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 622
                    },
                    "typeArguments": null,
                    "start": 610,
                    "end": 622
                  },
                  "start": 608,
                  "end": 622
                },
                "start": 603,
                "end": 622
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 625,
                "end": 629
              },
              "start": 623,
              "end": 629
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 594,
            "end": 630
          }
        ],
        "start": 502,
        "end": 632
      },
      "declare": false,
      "start": 451,
      "end": 632
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicParmeterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 683
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 702,
                      "end": 713
                    },
                    "typeArguments": null,
                    "start": 702,
                    "end": 713
                  },
                  "start": 700,
                  "end": 713
                },
                "start": 695,
                "end": 713
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 727
                },
                "typeArguments": null,
                "start": 716,
                "end": 727
              },
              "start": 714,
              "end": 727
            },
            "start": 690,
            "end": 728
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 741,
                      "end": 752
                    },
                    "typeArguments": null,
                    "start": 741,
                    "end": 752
                  },
                  "start": 739,
                  "end": 752
                },
                "start": 734,
                "end": 752
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 766
                },
                "typeArguments": null,
                "start": 755,
                "end": 766
              },
              "start": 753,
              "end": 766
            },
            "start": 733,
            "end": 767
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 780
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 788,
                      "end": 799
                    },
                    "typeArguments": null,
                    "start": 788,
                    "end": 799
                  },
                  "start": 786,
                  "end": 799
                },
                "start": 781,
                "end": 799
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 802,
                "end": 806
              },
              "start": 800,
              "end": 806
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 772,
            "end": 807
          }
        ],
        "start": 684,
        "end": 809
      },
      "declare": false,
      "start": 634,
      "end": 809
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateParmeterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 824,
          "end": 863
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 897
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 905,
                          "end": 917
                        },
                        "typeArguments": null,
                        "start": 905,
                        "end": 917
                      },
                      "start": 903,
                      "end": 917
                    },
                    "start": 898,
                    "end": 917
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 919,
                  "end": 935
                },
                "expression": false,
                "start": 897,
                "end": 935
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 870,
              "end": 935
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 955,
                "end": 976
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 984,
                          "end": 996
                        },
                        "typeArguments": null,
                        "start": 984,
                        "end": 996
                      },
                      "start": 982,
                      "end": 996
                    },
                    "start": 977,
                    "end": 996
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 998,
                  "end": 1005
                },
                "expression": false,
                "start": 976,
                "end": 1005
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 940,
              "end": 1005
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1010,
                "end": 1024
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1032,
                          "end": 1044
                        },
                        "typeArguments": null,
                        "start": 1032,
                        "end": 1044
                      },
                      "start": 1030,
                      "end": 1044
                    },
                    "start": 1025,
                    "end": 1044
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1046,
                  "end": 1062
                },
                "expression": false,
                "start": 1024,
                "end": 1062
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1010,
              "end": 1062
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1075,
                "end": 1090
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1098,
                          "end": 1110
                        },
                        "typeArguments": null,
                        "start": 1098,
                        "end": 1110
                      },
                      "start": 1096,
                      "end": 1110
                    },
                    "start": 1091,
                    "end": 1110
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1112,
                  "end": 1119
                },
                "expression": false,
                "start": 1090,
                "end": 1119
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1067,
              "end": 1119
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1124,
                "end": 1135
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1143,
                          "end": 1155
                        },
                        "typeArguments": null,
                        "start": 1143,
                        "end": 1155
                      },
                      "start": 1141,
                      "end": 1155
                    },
                    "start": 1136,
                    "end": 1155
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1173,
                            "end": 1185
                          },
                          "typeArguments": null,
                          "start": 1173,
                          "end": 1185
                        },
                        "start": 1171,
                        "end": 1185
                      },
                      "start": 1165,
                      "end": 1185
                    },
                    "readonly": false,
                    "static": false,
                    "start": 1157,
                    "end": 1185
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1202,
                            "end": 1214
                          },
                          "typeArguments": null,
                          "start": 1202,
                          "end": 1214
                        },
                        "start": 1200,
                        "end": 1214
                      },
                      "start": 1194,
                      "end": 1214
                    },
                    "readonly": false,
                    "static": false,
                    "start": 1187,
                    "end": 1214
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1216,
                  "end": 1232
                },
                "expression": false,
                "start": 1135,
                "end": 1232
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1124,
              "end": 1232
            }
          ],
          "start": 864,
          "end": 1234
        },
        "abstract": false,
        "declare": false,
        "start": 818,
        "end": 1234
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 811,
      "end": 1234
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicParmeterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1249,
          "end": 1287
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1321
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1329,
                          "end": 1340
                        },
                        "typeArguments": null,
                        "start": 1329,
                        "end": 1340
                      },
                      "start": 1327,
                      "end": 1340
                    },
                    "start": 1322,
                    "end": 1340
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1342,
                  "end": 1349
                },
                "expression": false,
                "start": 1321,
                "end": 1349
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1294,
              "end": 1349
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1369,
                "end": 1390
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1398,
                          "end": 1409
                        },
                        "typeArguments": null,
                        "start": 1398,
                        "end": 1409
                      },
                      "start": 1396,
                      "end": 1409
                    },
                    "start": 1391,
                    "end": 1409
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1411,
                  "end": 1418
                },
                "expression": false,
                "start": 1390,
                "end": 1418
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1354,
              "end": 1418
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1423,
                "end": 1437
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1445,
                          "end": 1456
                        },
                        "typeArguments": null,
                        "start": 1445,
                        "end": 1456
                      },
                      "start": 1443,
                      "end": 1456
                    },
                    "start": 1438,
                    "end": 1456
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1458,
                  "end": 1465
                },
                "expression": false,
                "start": 1437,
                "end": 1465
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1423,
              "end": 1465
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1493
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1501,
                          "end": 1512
                        },
                        "typeArguments": null,
                        "start": 1501,
                        "end": 1512
                      },
                      "start": 1499,
                      "end": 1512
                    },
                    "start": 1494,
                    "end": 1512
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1514,
                  "end": 1521
                },
                "expression": false,
                "start": 1493,
                "end": 1521
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1470,
              "end": 1521
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1526,
                "end": 1537
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1545,
                          "end": 1556
                        },
                        "typeArguments": null,
                        "start": 1545,
                        "end": 1556
                      },
                      "start": 1543,
                      "end": 1556
                    },
                    "start": 1538,
                    "end": 1556
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1574,
                            "end": 1585
                          },
                          "typeArguments": null,
                          "start": 1574,
                          "end": 1585
                        },
                        "start": 1572,
                        "end": 1585
                      },
                      "start": 1566,
                      "end": 1585
                    },
                    "readonly": false,
                    "static": false,
                    "start": 1558,
                    "end": 1585
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1602,
                            "end": 1613
                          },
                          "typeArguments": null,
                          "start": 1602,
                          "end": 1613
                        },
                        "start": 1600,
                        "end": 1613
                      },
                      "start": 1594,
                      "end": 1613
                    },
                    "readonly": false,
                    "static": false,
                    "start": 1587,
                    "end": 1613
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1615,
                  "end": 1622
                },
                "expression": false,
                "start": 1537,
                "end": 1622
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1526,
              "end": 1622
            }
          ],
          "start": 1288,
          "end": 1624
        },
        "abstract": false,
        "declare": false,
        "start": 1243,
        "end": 1624
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1236,
      "end": 1624
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivateParmeterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1632,
        "end": 1672
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1706
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1714,
                        "end": 1726
                      },
                      "typeArguments": null,
                      "start": 1714,
                      "end": 1726
                    },
                    "start": 1712,
                    "end": 1726
                  },
                  "start": 1707,
                  "end": 1726
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1728,
                "end": 1735
              },
              "expression": false,
              "start": 1706,
              "end": 1735
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1679,
            "end": 1735
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1755,
              "end": 1776
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1784,
                        "end": 1796
                      },
                      "typeArguments": null,
                      "start": 1784,
                      "end": 1796
                    },
                    "start": 1782,
                    "end": 1796
                  },
                  "start": 1777,
                  "end": 1796
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1798,
                "end": 1805
              },
              "expression": false,
              "start": 1776,
              "end": 1805
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1740,
            "end": 1805
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1810,
              "end": 1824
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1832,
                        "end": 1844
                      },
                      "typeArguments": null,
                      "start": 1832,
                      "end": 1844
                    },
                    "start": 1830,
                    "end": 1844
                  },
                  "start": 1825,
                  "end": 1844
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1846,
                "end": 1854
              },
              "expression": false,
              "start": 1824,
              "end": 1854
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1810,
            "end": 1854
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1867,
              "end": 1882
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1890,
                        "end": 1902
                      },
                      "typeArguments": null,
                      "start": 1890,
                      "end": 1902
                    },
                    "start": 1888,
                    "end": 1902
                  },
                  "start": 1883,
                  "end": 1902
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1904,
                "end": 1911
              },
              "expression": false,
              "start": 1882,
              "end": 1911
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1859,
            "end": 1911
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1916,
              "end": 1927
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1935,
                        "end": 1947
                      },
                      "typeArguments": null,
                      "start": 1935,
                      "end": 1947
                    },
                    "start": 1933,
                    "end": 1947
                  },
                  "start": 1928,
                  "end": 1947
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1965,
                          "end": 1977
                        },
                        "typeArguments": null,
                        "start": 1965,
                        "end": 1977
                      },
                      "start": 1963,
                      "end": 1977
                    },
                    "start": 1957,
                    "end": 1977
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1949,
                  "end": 1977
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1994,
                          "end": 2006
                        },
                        "typeArguments": null,
                        "start": 1994,
                        "end": 2006
                      },
                      "start": 1992,
                      "end": 2006
                    },
                    "start": 1986,
                    "end": 2006
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1979,
                  "end": 2006
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2008,
                "end": 2015
              },
              "expression": false,
              "start": 1927,
              "end": 2015
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1916,
            "end": 2015
          }
        ],
        "start": 1673,
        "end": 2017
      },
      "abstract": false,
      "declare": false,
      "start": 1626,
      "end": 2017
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicParmeterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2025,
        "end": 2064
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2078,
              "end": 2098
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2106,
                        "end": 2117
                      },
                      "typeArguments": null,
                      "start": 2106,
                      "end": 2117
                    },
                    "start": 2104,
                    "end": 2117
                  },
                  "start": 2099,
                  "end": 2117
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2119,
                "end": 2126
              },
              "expression": false,
              "start": 2098,
              "end": 2126
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2071,
            "end": 2126
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2146,
              "end": 2167
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2175,
                        "end": 2186
                      },
                      "typeArguments": null,
                      "start": 2175,
                      "end": 2186
                    },
                    "start": 2173,
                    "end": 2186
                  },
                  "start": 2168,
                  "end": 2186
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2188,
                "end": 2195
              },
              "expression": false,
              "start": 2167,
              "end": 2195
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2131,
            "end": 2195
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2200,
              "end": 2214
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2222,
                        "end": 2233
                      },
                      "typeArguments": null,
                      "start": 2222,
                      "end": 2233
                    },
                    "start": 2220,
                    "end": 2233
                  },
                  "start": 2215,
                  "end": 2233
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2235,
                "end": 2242
              },
              "expression": false,
              "start": 2214,
              "end": 2242
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2200,
            "end": 2242
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2255,
              "end": 2270
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2278,
                        "end": 2289
                      },
                      "typeArguments": null,
                      "start": 2278,
                      "end": 2289
                    },
                    "start": 2276,
                    "end": 2289
                  },
                  "start": 2271,
                  "end": 2289
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2291,
                "end": 2298
              },
              "expression": false,
              "start": 2270,
              "end": 2298
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2247,
            "end": 2298
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2303,
              "end": 2314
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2322,
                        "end": 2333
                      },
                      "typeArguments": null,
                      "start": 2322,
                      "end": 2333
                    },
                    "start": 2320,
                    "end": 2333
                  },
                  "start": 2315,
                  "end": 2333
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2351,
                          "end": 2362
                        },
                        "typeArguments": null,
                        "start": 2351,
                        "end": 2362
                      },
                      "start": 2349,
                      "end": 2362
                    },
                    "start": 2343,
                    "end": 2362
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2335,
                  "end": 2362
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2379,
                          "end": 2390
                        },
                        "typeArguments": null,
                        "start": 2379,
                        "end": 2390
                      },
                      "start": 2377,
                      "end": 2390
                    },
                    "start": 2371,
                    "end": 2390
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2364,
                  "end": 2390
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2392,
                "end": 2399
              },
              "expression": false,
              "start": 2314,
              "end": 2399
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2303,
            "end": 2399
          }
        ],
        "start": 2065,
        "end": 2401
      },
      "abstract": false,
      "declare": false,
      "start": 2019,
      "end": 2401
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPrivateParmeterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 2419,
          "end": 2457
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2465,
                  "end": 2477
                },
                "typeArguments": null,
                "start": 2465,
                "end": 2477
              },
              "start": 2463,
              "end": 2477
            },
            "start": 2458,
            "end": 2477
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 2479,
          "end": 2491
        },
        "expression": false,
        "start": 2410,
        "end": 2491
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2403,
      "end": 2491
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPublicParmeterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 2508,
          "end": 2545
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2553,
                  "end": 2564
                },
                "typeArguments": null,
                "start": 2553,
                "end": 2564
              },
              "start": 2551,
              "end": 2564
            },
            "start": 2546,
            "end": 2564
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 2566,
          "end": 2569
        },
        "expression": false,
        "start": 2499,
        "end": 2569
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2492,
      "end": 2569
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPrivateParmeterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2579,
        "end": 2618
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2626,
                "end": 2638
              },
              "typeArguments": null,
              "start": 2626,
              "end": 2638
            },
            "start": 2624,
            "end": 2638
          },
          "start": 2619,
          "end": 2638
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2640,
        "end": 2643
      },
      "expression": false,
      "start": 2570,
      "end": 2643
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicParmeterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2653,
        "end": 2691
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2699,
                "end": 2710
              },
              "typeArguments": null,
              "start": 2699,
              "end": 2710
            },
            "start": 2697,
            "end": 2710
          },
          "start": 2692,
          "end": 2710
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2712,
        "end": 2715
      },
      "expression": false,
      "start": 2644,
      "end": 2715
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicAmbientFunctionWithPrivateParmeterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 2741,
          "end": 2786
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2794,
                  "end": 2806
                },
                "typeArguments": null,
                "start": 2794,
                "end": 2806
              },
              "start": 2792,
              "end": 2806
            },
            "start": 2787,
            "end": 2806
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2809,
            "end": 2813
          },
          "start": 2807,
          "end": 2813
        },
        "body": null,
        "expression": false,
        "start": 2724,
        "end": 2814
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2717,
      "end": 2814
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicAmbientFunctionWithPublicParmeterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 2848,
          "end": 2892
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2900,
                  "end": 2911
                },
                "typeArguments": null,
                "start": 2900,
                "end": 2911
              },
              "start": 2898,
              "end": 2911
            },
            "start": 2893,
            "end": 2911
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2914,
            "end": 2918
          },
          "start": 2912,
          "end": 2918
        },
        "body": null,
        "expression": false,
        "start": 2831,
        "end": 2919
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2824,
      "end": 2919
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateAmbientFunctionWithPrivateParmeterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2937,
        "end": 2983
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2991,
                "end": 3003
              },
              "typeArguments": null,
              "start": 2991,
              "end": 3003
            },
            "start": 2989,
            "end": 3003
          },
          "start": 2984,
          "end": 3003
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3006,
          "end": 3010
        },
        "start": 3004,
        "end": 3010
      },
      "body": null,
      "expression": false,
      "start": 2920,
      "end": 3011
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateAmbientFunctionWithPublicParmeterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 3029,
        "end": 3074
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 3082,
                "end": 3093
              },
              "typeArguments": null,
              "start": 3082,
              "end": 3093
            },
            "start": 3080,
            "end": 3093
          },
          "start": 3075,
          "end": 3093
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3096,
          "end": 3100
        },
        "start": 3094,
        "end": 3100
      },
      "body": null,
      "expression": false,
      "start": 3012,
      "end": 3101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateModuleParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 3120,
          "end": 3166
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3185,
                          "end": 3198
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3199,
                          "end": 3210
                        },
                        "start": 3185,
                        "end": 3210
                      },
                      "typeArguments": null,
                      "start": 3185,
                      "end": 3210
                    },
                    "start": 3183,
                    "end": 3210
                  },
                  "start": 3178,
                  "end": 3210
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3213,
                    "end": 3224
                  },
                  "typeArguments": null,
                  "start": 3213,
                  "end": 3224
                },
                "start": 3211,
                "end": 3224
              },
              "start": 3173,
              "end": 3225
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3247,
                          "end": 3260
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3261,
                          "end": 3272
                        },
                        "start": 3247,
                        "end": 3272
                      },
                      "typeArguments": null,
                      "start": 3247,
                      "end": 3272
                    },
                    "start": 3245,
                    "end": 3272
                  },
                  "start": 3240,
                  "end": 3272
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3275,
                    "end": 3286
                  },
                  "typeArguments": null,
                  "start": 3275,
                  "end": 3286
                },
                "start": 3273,
                "end": 3286
              },
              "start": 3239,
              "end": 3287
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3301,
                "end": 3309
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3317,
                          "end": 3330
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3331,
                          "end": 3342
                        },
                        "start": 3317,
                        "end": 3342
                      },
                      "typeArguments": null,
                      "start": 3317,
                      "end": 3342
                    },
                    "start": 3315,
                    "end": 3342
                  },
                  "start": 3310,
                  "end": 3342
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3345,
                  "end": 3349
                },
                "start": 3343,
                "end": 3349
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3301,
              "end": 3350
            }
          ],
          "start": 3167,
          "end": 3361
        },
        "declare": false,
        "start": 3110,
        "end": 3361
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3103,
      "end": 3361
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateModuleParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 3375,
          "end": 3417
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3431,
                "end": 3451
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3459,
                            "end": 3472
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3473,
                            "end": 3484
                          },
                          "start": 3459,
                          "end": 3484
                        },
                        "typeArguments": null,
                        "start": 3459,
                        "end": 3484
                      },
                      "start": 3457,
                      "end": 3484
                    },
                    "start": 3452,
                    "end": 3484
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3486,
                  "end": 3502
                },
                "expression": false,
                "start": 3451,
                "end": 3502
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3424,
              "end": 3502
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3507,
                "end": 3521
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3529,
                            "end": 3542
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3543,
                            "end": 3554
                          },
                          "start": 3529,
                          "end": 3554
                        },
                        "typeArguments": null,
                        "start": 3529,
                        "end": 3554
                      },
                      "start": 3527,
                      "end": 3554
                    },
                    "start": 3522,
                    "end": 3554
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3556,
                  "end": 3572
                },
                "expression": false,
                "start": 3521,
                "end": 3572
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3507,
              "end": 3572
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 3577,
                "end": 3588
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3596,
                            "end": 3609
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3610,
                            "end": 3621
                          },
                          "start": 3596,
                          "end": 3621
                        },
                        "typeArguments": null,
                        "start": 3596,
                        "end": 3621
                      },
                      "start": 3594,
                      "end": 3621
                    },
                    "start": 3589,
                    "end": 3621
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3639,
                              "end": 3652
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3653,
                              "end": 3664
                            },
                            "start": 3639,
                            "end": 3664
                          },
                          "typeArguments": null,
                          "start": 3639,
                          "end": 3664
                        },
                        "start": 3637,
                        "end": 3664
                      },
                      "start": 3631,
                      "end": 3664
                    },
                    "readonly": false,
                    "static": false,
                    "start": 3623,
                    "end": 3664
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3681,
                              "end": 3694
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3695,
                              "end": 3706
                            },
                            "start": 3681,
                            "end": 3706
                          },
                          "typeArguments": null,
                          "start": 3681,
                          "end": 3706
                        },
                        "start": 3679,
                        "end": 3706
                      },
                      "start": 3673,
                      "end": 3706
                    },
                    "readonly": false,
                    "static": false,
                    "start": 3666,
                    "end": 3706
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3708,
                  "end": 3724
                },
                "expression": false,
                "start": 3588,
                "end": 3724
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3577,
              "end": 3724
            }
          ],
          "start": 3418,
          "end": 3726
        },
        "abstract": false,
        "declare": false,
        "start": 3369,
        "end": 3726
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3362,
      "end": 3726
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPrivateModuleParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 3743,
          "end": 3788
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3796,
                    "end": 3809
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3810,
                    "end": 3821
                  },
                  "start": 3796,
                  "end": 3821
                },
                "typeArguments": null,
                "start": 3796,
                "end": 3821
              },
              "start": 3794,
              "end": 3821
            },
            "start": 3789,
            "end": 3821
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3823,
          "end": 3835
        },
        "expression": false,
        "start": 3734,
        "end": 3835
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3727,
      "end": 3835
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 3860,
          "end": 3912
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3920,
                    "end": 3933
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3934,
                    "end": 3945
                  },
                  "start": 3920,
                  "end": 3945
                },
                "typeArguments": null,
                "start": 3920,
                "end": 3945
              },
              "start": 3918,
              "end": 3945
            },
            "start": 3913,
            "end": 3945
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3948,
            "end": 3952
          },
          "start": 3946,
          "end": 3952
        },
        "body": null,
        "expression": false,
        "start": 3843,
        "end": 3953
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3836,
      "end": 3953
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateModuleParameterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 3974,
        "end": 4021
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4040,
                        "end": 4053
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4054,
                        "end": 4065
                      },
                      "start": 4040,
                      "end": 4065
                    },
                    "typeArguments": null,
                    "start": 4040,
                    "end": 4065
                  },
                  "start": 4038,
                  "end": 4065
                },
                "start": 4033,
                "end": 4065
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4068,
                  "end": 4079
                },
                "typeArguments": null,
                "start": 4068,
                "end": 4079
              },
              "start": 4066,
              "end": 4079
            },
            "start": 4028,
            "end": 4080
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4093,
                        "end": 4106
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4107,
                        "end": 4118
                      },
                      "start": 4093,
                      "end": 4118
                    },
                    "typeArguments": null,
                    "start": 4093,
                    "end": 4118
                  },
                  "start": 4091,
                  "end": 4118
                },
                "start": 4086,
                "end": 4118
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4121,
                  "end": 4132
                },
                "typeArguments": null,
                "start": 4121,
                "end": 4132
              },
              "start": 4119,
              "end": 4132
            },
            "start": 4085,
            "end": 4133
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4138,
              "end": 4146
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4154,
                        "end": 4167
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4168,
                        "end": 4179
                      },
                      "start": 4154,
                      "end": 4179
                    },
                    "typeArguments": null,
                    "start": 4154,
                    "end": 4179
                  },
                  "start": 4152,
                  "end": 4179
                },
                "start": 4147,
                "end": 4179
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 4182,
                "end": 4186
              },
              "start": 4180,
              "end": 4186
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4138,
            "end": 4187
          }
        ],
        "start": 4022,
        "end": 4189
      },
      "declare": false,
      "start": 3964,
      "end": 4189
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateModuleParameterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 4196,
        "end": 4239
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4253,
              "end": 4273
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4281,
                          "end": 4294
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4295,
                          "end": 4306
                        },
                        "start": 4281,
                        "end": 4306
                      },
                      "typeArguments": null,
                      "start": 4281,
                      "end": 4306
                    },
                    "start": 4279,
                    "end": 4306
                  },
                  "start": 4274,
                  "end": 4306
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4308,
                "end": 4315
              },
              "expression": false,
              "start": 4273,
              "end": 4315
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4246,
            "end": 4315
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4320,
              "end": 4334
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4342,
                          "end": 4355
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4356,
                          "end": 4367
                        },
                        "start": 4342,
                        "end": 4367
                      },
                      "typeArguments": null,
                      "start": 4342,
                      "end": 4367
                    },
                    "start": 4340,
                    "end": 4367
                  },
                  "start": 4335,
                  "end": 4367
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4369,
                "end": 4376
              },
              "expression": false,
              "start": 4334,
              "end": 4376
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4320,
            "end": 4376
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4381,
              "end": 4392
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4400,
                          "end": 4413
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4414,
                          "end": 4425
                        },
                        "start": 4400,
                        "end": 4425
                      },
                      "typeArguments": null,
                      "start": 4400,
                      "end": 4425
                    },
                    "start": 4398,
                    "end": 4425
                  },
                  "start": 4393,
                  "end": 4425
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4443,
                            "end": 4456
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4457,
                            "end": 4468
                          },
                          "start": 4443,
                          "end": 4468
                        },
                        "typeArguments": null,
                        "start": 4443,
                        "end": 4468
                      },
                      "start": 4441,
                      "end": 4468
                    },
                    "start": 4435,
                    "end": 4468
                  },
                  "readonly": false,
                  "static": false,
                  "start": 4427,
                  "end": 4468
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4485,
                            "end": 4498
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4499,
                            "end": 4510
                          },
                          "start": 4485,
                          "end": 4510
                        },
                        "typeArguments": null,
                        "start": 4485,
                        "end": 4510
                      },
                      "start": 4483,
                      "end": 4510
                    },
                    "start": 4477,
                    "end": 4510
                  },
                  "readonly": false,
                  "static": false,
                  "start": 4470,
                  "end": 4510
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4512,
                "end": 4519
              },
              "expression": false,
              "start": 4392,
              "end": 4519
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4381,
            "end": 4519
          }
        ],
        "start": 4240,
        "end": 4521
      },
      "abstract": false,
      "declare": false,
      "start": 4190,
      "end": 4521
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPrivateModuleParameterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 4531,
        "end": 4577
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4585,
                  "end": 4598
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4599,
                  "end": 4610
                },
                "start": 4585,
                "end": 4610
              },
              "typeArguments": null,
              "start": 4585,
              "end": 4610
            },
            "start": 4583,
            "end": 4610
          },
          "start": 4578,
          "end": 4610
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4612,
        "end": 4615
      },
      "expression": false,
      "start": 4522,
      "end": 4615
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 4633,
        "end": 4686
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4694,
                  "end": 4707
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4708,
                  "end": 4719
                },
                "start": 4694,
                "end": 4719
              },
              "typeArguments": null,
              "start": 4694,
              "end": 4719
            },
            "start": 4692,
            "end": 4719
          },
          "start": 4687,
          "end": 4719
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4722,
          "end": 4726
        },
        "start": 4720,
        "end": 4726
      },
      "body": null,
      "expression": false,
      "start": 4616,
      "end": 4727
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 4746,
          "end": 4758
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 4771,
                "end": 4783
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4784,
                "end": 4791
              },
              "abstract": false,
              "declare": false,
              "start": 4765,
              "end": 4791
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4810,
                  "end": 4821
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 4822,
                  "end": 4829
                },
                "abstract": false,
                "declare": false,
                "start": 4804,
                "end": 4829
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 4797,
              "end": 4829
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateParmeterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4853,
                  "end": 4892
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4915,
                                "end": 4927
                              },
                              "typeArguments": null,
                              "start": 4915,
                              "end": 4927
                            },
                            "start": 4913,
                            "end": 4927
                          },
                          "start": 4908,
                          "end": 4927
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4930,
                            "end": 4941
                          },
                          "typeArguments": null,
                          "start": 4930,
                          "end": 4941
                        },
                        "start": 4928,
                        "end": 4941
                      },
                      "start": 4903,
                      "end": 4942
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4968,
                                "end": 4980
                              },
                              "typeArguments": null,
                              "start": 4968,
                              "end": 4980
                            },
                            "start": 4966,
                            "end": 4980
                          },
                          "start": 4961,
                          "end": 4980
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4983,
                            "end": 4994
                          },
                          "typeArguments": null,
                          "start": 4983,
                          "end": 4994
                        },
                        "start": 4981,
                        "end": 4994
                      },
                      "start": 4960,
                      "end": 4995
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5013,
                        "end": 5021
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5029,
                                "end": 5041
                              },
                              "typeArguments": null,
                              "start": 5029,
                              "end": 5041
                            },
                            "start": 5027,
                            "end": 5041
                          },
                          "start": 5022,
                          "end": 5041
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 5044,
                          "end": 5048
                        },
                        "start": 5042,
                        "end": 5048
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5013,
                      "end": 5049
                    }
                  ],
                  "start": 4893,
                  "end": 5064
                },
                "declare": false,
                "start": 4843,
                "end": 5064
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4836,
              "end": 5064
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPublicParmeterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5087,
                  "end": 5125
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5148,
                                "end": 5159
                              },
                              "typeArguments": null,
                              "start": 5148,
                              "end": 5159
                            },
                            "start": 5146,
                            "end": 5159
                          },
                          "start": 5141,
                          "end": 5159
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5162,
                            "end": 5173
                          },
                          "typeArguments": null,
                          "start": 5162,
                          "end": 5173
                        },
                        "start": 5160,
                        "end": 5173
                      },
                      "start": 5136,
                      "end": 5174
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5191,
                                "end": 5202
                              },
                              "typeArguments": null,
                              "start": 5191,
                              "end": 5202
                            },
                            "start": 5189,
                            "end": 5202
                          },
                          "start": 5184,
                          "end": 5202
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5205,
                            "end": 5216
                          },
                          "typeArguments": null,
                          "start": 5205,
                          "end": 5216
                        },
                        "start": 5203,
                        "end": 5216
                      },
                      "start": 5183,
                      "end": 5217
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5226,
                        "end": 5234
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5242,
                                "end": 5253
                              },
                              "typeArguments": null,
                              "start": 5242,
                              "end": 5253
                            },
                            "start": 5240,
                            "end": 5253
                          },
                          "start": 5235,
                          "end": 5253
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 5256,
                          "end": 5260
                        },
                        "start": 5254,
                        "end": 5260
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5226,
                      "end": 5261
                    }
                  ],
                  "start": 5126,
                  "end": 5267
                },
                "declare": false,
                "start": 5077,
                "end": 5267
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 5070,
              "end": 5267
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5283,
                "end": 5323
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5346,
                              "end": 5358
                            },
                            "typeArguments": null,
                            "start": 5346,
                            "end": 5358
                          },
                          "start": 5344,
                          "end": 5358
                        },
                        "start": 5339,
                        "end": 5358
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5361,
                          "end": 5373
                        },
                        "typeArguments": null,
                        "start": 5361,
                        "end": 5373
                      },
                      "start": 5359,
                      "end": 5373
                    },
                    "start": 5334,
                    "end": 5374
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5391,
                              "end": 5403
                            },
                            "typeArguments": null,
                            "start": 5391,
                            "end": 5403
                          },
                          "start": 5389,
                          "end": 5403
                        },
                        "start": 5384,
                        "end": 5403
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5406,
                          "end": 5418
                        },
                        "typeArguments": null,
                        "start": 5406,
                        "end": 5418
                      },
                      "start": 5404,
                      "end": 5418
                    },
                    "start": 5383,
                    "end": 5419
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5428,
                      "end": 5436
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5444,
                              "end": 5456
                            },
                            "typeArguments": null,
                            "start": 5444,
                            "end": 5456
                          },
                          "start": 5442,
                          "end": 5456
                        },
                        "start": 5437,
                        "end": 5456
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5459,
                        "end": 5463
                      },
                      "start": 5457,
                      "end": 5463
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5428,
                    "end": 5464
                  }
                ],
                "start": 5324,
                "end": 5470
              },
              "declare": false,
              "start": 5273,
              "end": 5470
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5486,
                "end": 5525
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5548,
                              "end": 5559
                            },
                            "typeArguments": null,
                            "start": 5548,
                            "end": 5559
                          },
                          "start": 5546,
                          "end": 5559
                        },
                        "start": 5541,
                        "end": 5559
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5562,
                          "end": 5573
                        },
                        "typeArguments": null,
                        "start": 5562,
                        "end": 5573
                      },
                      "start": 5560,
                      "end": 5573
                    },
                    "start": 5536,
                    "end": 5574
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5591,
                              "end": 5602
                            },
                            "typeArguments": null,
                            "start": 5591,
                            "end": 5602
                          },
                          "start": 5589,
                          "end": 5602
                        },
                        "start": 5584,
                        "end": 5602
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5605,
                          "end": 5616
                        },
                        "typeArguments": null,
                        "start": 5605,
                        "end": 5616
                      },
                      "start": 5603,
                      "end": 5616
                    },
                    "start": 5583,
                    "end": 5617
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5626,
                      "end": 5634
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5642,
                              "end": 5653
                            },
                            "typeArguments": null,
                            "start": 5642,
                            "end": 5653
                          },
                          "start": 5640,
                          "end": 5653
                        },
                        "start": 5635,
                        "end": 5653
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5656,
                        "end": 5660
                      },
                      "start": 5654,
                      "end": 5660
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5626,
                    "end": 5661
                  }
                ],
                "start": 5526,
                "end": 5667
              },
              "declare": false,
              "start": 5476,
              "end": 5667
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivateParmeterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5686,
                  "end": 5725
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5743,
                        "end": 5763
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5771,
                                  "end": 5783
                                },
                                "typeArguments": null,
                                "start": 5771,
                                "end": 5783
                              },
                              "start": 5769,
                              "end": 5783
                            },
                            "start": 5764,
                            "end": 5783
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5785,
                          "end": 5805
                        },
                        "expression": false,
                        "start": 5763,
                        "end": 5805
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5736,
                      "end": 5805
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5829,
                        "end": 5850
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5858,
                                  "end": 5870
                                },
                                "typeArguments": null,
                                "start": 5858,
                                "end": 5870
                              },
                              "start": 5856,
                              "end": 5870
                            },
                            "start": 5851,
                            "end": 5870
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5872,
                          "end": 5883
                        },
                        "expression": false,
                        "start": 5850,
                        "end": 5883
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5814,
                      "end": 5883
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5892,
                        "end": 5906
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5914,
                                  "end": 5926
                                },
                                "typeArguments": null,
                                "start": 5914,
                                "end": 5926
                              },
                              "start": 5912,
                              "end": 5926
                            },
                            "start": 5907,
                            "end": 5926
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5928,
                          "end": 5948
                        },
                        "expression": false,
                        "start": 5906,
                        "end": 5948
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5892,
                      "end": 5948
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5965,
                        "end": 5980
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5988,
                                  "end": 6000
                                },
                                "typeArguments": null,
                                "start": 5988,
                                "end": 6000
                              },
                              "start": 5986,
                              "end": 6000
                            },
                            "start": 5981,
                            "end": 6000
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6002,
                          "end": 6013
                        },
                        "expression": false,
                        "start": 5980,
                        "end": 6013
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5957,
                      "end": 6013
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6022,
                        "end": 6033
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6041,
                                  "end": 6053
                                },
                                "typeArguments": null,
                                "start": 6041,
                                "end": 6053
                              },
                              "start": 6039,
                              "end": 6053
                            },
                            "start": 6034,
                            "end": 6053
                          },
                          {
                            "type": "TSParameterProperty",
                            "accessibility": "private",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6071,
                                    "end": 6083
                                  },
                                  "typeArguments": null,
                                  "start": 6071,
                                  "end": 6083
                                },
                                "start": 6069,
                                "end": 6083
                              },
                              "start": 6063,
                              "end": 6083
                            },
                            "readonly": false,
                            "static": false,
                            "start": 6055,
                            "end": 6083
                          },
                          {
                            "type": "TSParameterProperty",
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6100,
                                    "end": 6112
                                  },
                                  "typeArguments": null,
                                  "start": 6100,
                                  "end": 6112
                                },
                                "start": 6098,
                                "end": 6112
                              },
                              "start": 6092,
                              "end": 6112
                            },
                            "readonly": false,
                            "static": false,
                            "start": 6085,
                            "end": 6112
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6114,
                          "end": 6134
                        },
                        "expression": false,
                        "start": 6033,
                        "end": 6134
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6022,
                      "end": 6134
                    }
                  ],
                  "start": 5726,
                  "end": 6140
                },
                "abstract": false,
                "declare": false,
                "start": 5680,
                "end": 6140
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5673,
              "end": 6140
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicParmeterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6159,
                  "end": 6197
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6215,
                        "end": 6235
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6243,
                                  "end": 6254
                                },
                                "typeArguments": null,
                                "start": 6243,
                                "end": 6254
                              },
                              "start": 6241,
                              "end": 6254
                            },
                            "start": 6236,
                            "end": 6254
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6256,
                          "end": 6267
                        },
                        "expression": false,
                        "start": 6235,
                        "end": 6267
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6208,
                      "end": 6267
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6291,
                        "end": 6312
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6320,
                                  "end": 6331
                                },
                                "typeArguments": null,
                                "start": 6320,
                                "end": 6331
                              },
                              "start": 6318,
                              "end": 6331
                            },
                            "start": 6313,
                            "end": 6331
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6333,
                          "end": 6344
                        },
                        "expression": false,
                        "start": 6312,
                        "end": 6344
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6276,
                      "end": 6344
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6353,
                        "end": 6367
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6375,
                                  "end": 6386
                                },
                                "typeArguments": null,
                                "start": 6375,
                                "end": 6386
                              },
                              "start": 6373,
                              "end": 6386
                            },
                            "start": 6368,
                            "end": 6386
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6388,
                          "end": 6399
                        },
                        "expression": false,
                        "start": 6367,
                        "end": 6399
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6353,
                      "end": 6399
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6416,
                        "end": 6431
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6439,
                                  "end": 6450
                                },
                                "typeArguments": null,
                                "start": 6439,
                                "end": 6450
                              },
                              "start": 6437,
                              "end": 6450
                            },
                            "start": 6432,
                            "end": 6450
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6452,
                          "end": 6463
                        },
                        "expression": false,
                        "start": 6431,
                        "end": 6463
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6408,
                      "end": 6463
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6472,
                        "end": 6483
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6491,
                                  "end": 6502
                                },
                                "typeArguments": null,
                                "start": 6491,
                                "end": 6502
                              },
                              "start": 6489,
                              "end": 6502
                            },
                            "start": 6484,
                            "end": 6502
                          },
                          {
                            "type": "TSParameterProperty",
                            "accessibility": "private",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6520,
                                    "end": 6531
                                  },
                                  "typeArguments": null,
                                  "start": 6520,
                                  "end": 6531
                                },
                                "start": 6518,
                                "end": 6531
                              },
                              "start": 6512,
                              "end": 6531
                            },
                            "readonly": false,
                            "static": false,
                            "start": 6504,
                            "end": 6531
                          },
                          {
                            "type": "TSParameterProperty",
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6548,
                                    "end": 6559
                                  },
                                  "typeArguments": null,
                                  "start": 6548,
                                  "end": 6559
                                },
                                "start": 6546,
                                "end": 6559
                              },
                              "start": 6540,
                              "end": 6559
                            },
                            "readonly": false,
                            "static": false,
                            "start": 6533,
                            "end": 6559
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6561,
                          "end": 6572
                        },
                        "expression": false,
                        "start": 6483,
                        "end": 6572
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6472,
                      "end": 6572
                    }
                  ],
                  "start": 6198,
                  "end": 6578
                },
                "abstract": false,
                "declare": false,
                "start": 6153,
                "end": 6578
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6146,
              "end": 6578
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6590,
                "end": 6630
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6648,
                      "end": 6668
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6676,
                                "end": 6688
                              },
                              "typeArguments": null,
                              "start": 6676,
                              "end": 6688
                            },
                            "start": 6674,
                            "end": 6688
                          },
                          "start": 6669,
                          "end": 6688
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6690,
                        "end": 6701
                      },
                      "expression": false,
                      "start": 6668,
                      "end": 6701
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6641,
                    "end": 6701
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6725,
                      "end": 6746
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6754,
                                "end": 6766
                              },
                              "typeArguments": null,
                              "start": 6754,
                              "end": 6766
                            },
                            "start": 6752,
                            "end": 6766
                          },
                          "start": 6747,
                          "end": 6766
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6768,
                        "end": 6779
                      },
                      "expression": false,
                      "start": 6746,
                      "end": 6779
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6710,
                    "end": 6779
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6788,
                      "end": 6802
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6810,
                                "end": 6822
                              },
                              "typeArguments": null,
                              "start": 6810,
                              "end": 6822
                            },
                            "start": 6808,
                            "end": 6822
                          },
                          "start": 6803,
                          "end": 6822
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6824,
                        "end": 6835
                      },
                      "expression": false,
                      "start": 6802,
                      "end": 6835
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6788,
                    "end": 6835
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6852,
                      "end": 6867
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6875,
                                "end": 6887
                              },
                              "typeArguments": null,
                              "start": 6875,
                              "end": 6887
                            },
                            "start": 6873,
                            "end": 6887
                          },
                          "start": 6868,
                          "end": 6887
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6889,
                        "end": 6900
                      },
                      "expression": false,
                      "start": 6867,
                      "end": 6900
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6844,
                    "end": 6900
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6909,
                      "end": 6920
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6928,
                                "end": 6940
                              },
                              "typeArguments": null,
                              "start": 6928,
                              "end": 6940
                            },
                            "start": 6926,
                            "end": 6940
                          },
                          "start": 6921,
                          "end": 6940
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6958,
                                  "end": 6970
                                },
                                "typeArguments": null,
                                "start": 6958,
                                "end": 6970
                              },
                              "start": 6956,
                              "end": 6970
                            },
                            "start": 6950,
                            "end": 6970
                          },
                          "readonly": false,
                          "static": false,
                          "start": 6942,
                          "end": 6970
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6987,
                                  "end": 6999
                                },
                                "typeArguments": null,
                                "start": 6987,
                                "end": 6999
                              },
                              "start": 6985,
                              "end": 6999
                            },
                            "start": 6979,
                            "end": 6999
                          },
                          "readonly": false,
                          "static": false,
                          "start": 6972,
                          "end": 6999
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7001,
                        "end": 7012
                      },
                      "expression": false,
                      "start": 6920,
                      "end": 7012
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6909,
                    "end": 7012
                  }
                ],
                "start": 6631,
                "end": 7018
              },
              "abstract": false,
              "declare": false,
              "start": 6584,
              "end": 7018
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7030,
                "end": 7069
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7087,
                      "end": 7107
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7115,
                                "end": 7126
                              },
                              "typeArguments": null,
                              "start": 7115,
                              "end": 7126
                            },
                            "start": 7113,
                            "end": 7126
                          },
                          "start": 7108,
                          "end": 7126
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7128,
                        "end": 7139
                      },
                      "expression": false,
                      "start": 7107,
                      "end": 7139
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7080,
                    "end": 7139
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7163,
                      "end": 7184
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7192,
                                "end": 7203
                              },
                              "typeArguments": null,
                              "start": 7192,
                              "end": 7203
                            },
                            "start": 7190,
                            "end": 7203
                          },
                          "start": 7185,
                          "end": 7203
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7205,
                        "end": 7216
                      },
                      "expression": false,
                      "start": 7184,
                      "end": 7216
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7148,
                    "end": 7216
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7225,
                      "end": 7239
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7247,
                                "end": 7258
                              },
                              "typeArguments": null,
                              "start": 7247,
                              "end": 7258
                            },
                            "start": 7245,
                            "end": 7258
                          },
                          "start": 7240,
                          "end": 7258
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7260,
                        "end": 7271
                      },
                      "expression": false,
                      "start": 7239,
                      "end": 7271
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7225,
                    "end": 7271
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7288,
                      "end": 7303
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7311,
                                "end": 7322
                              },
                              "typeArguments": null,
                              "start": 7311,
                              "end": 7322
                            },
                            "start": 7309,
                            "end": 7322
                          },
                          "start": 7304,
                          "end": 7322
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7324,
                        "end": 7335
                      },
                      "expression": false,
                      "start": 7303,
                      "end": 7335
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7280,
                    "end": 7335
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7344,
                      "end": 7355
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7363,
                                "end": 7374
                              },
                              "typeArguments": null,
                              "start": 7363,
                              "end": 7374
                            },
                            "start": 7361,
                            "end": 7374
                          },
                          "start": 7356,
                          "end": 7374
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7392,
                                  "end": 7403
                                },
                                "typeArguments": null,
                                "start": 7392,
                                "end": 7403
                              },
                              "start": 7390,
                              "end": 7403
                            },
                            "start": 7384,
                            "end": 7403
                          },
                          "readonly": false,
                          "static": false,
                          "start": 7376,
                          "end": 7403
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7420,
                                  "end": 7431
                                },
                                "typeArguments": null,
                                "start": 7420,
                                "end": 7431
                              },
                              "start": 7418,
                              "end": 7431
                            },
                            "start": 7412,
                            "end": 7431
                          },
                          "readonly": false,
                          "static": false,
                          "start": 7405,
                          "end": 7431
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7433,
                        "end": 7444
                      },
                      "expression": false,
                      "start": 7355,
                      "end": 7444
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7344,
                    "end": 7444
                  }
                ],
                "start": 7070,
                "end": 7450
              },
              "abstract": false,
              "declare": false,
              "start": 7024,
              "end": 7450
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPrivateParmeterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7472,
                  "end": 7510
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7518,
                          "end": 7530
                        },
                        "typeArguments": null,
                        "start": 7518,
                        "end": 7530
                      },
                      "start": 7516,
                      "end": 7530
                    },
                    "start": 7511,
                    "end": 7530
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7532,
                  "end": 7548
                },
                "expression": false,
                "start": 7463,
                "end": 7548
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7456,
              "end": 7548
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPublicParmeterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7569,
                  "end": 7606
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7614,
                          "end": 7625
                        },
                        "typeArguments": null,
                        "start": 7614,
                        "end": 7625
                      },
                      "start": 7612,
                      "end": 7625
                    },
                    "start": 7607,
                    "end": 7625
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7627,
                  "end": 7634
                },
                "expression": false,
                "start": 7560,
                "end": 7634
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7553,
              "end": 7634
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7648,
                "end": 7687
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7695,
                        "end": 7707
                      },
                      "typeArguments": null,
                      "start": 7695,
                      "end": 7707
                    },
                    "start": 7693,
                    "end": 7707
                  },
                  "start": 7688,
                  "end": 7707
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 7709,
                "end": 7716
              },
              "expression": false,
              "start": 7639,
              "end": 7716
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7730,
                "end": 7768
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7776,
                        "end": 7787
                      },
                      "typeArguments": null,
                      "start": 7776,
                      "end": 7787
                    },
                    "start": 7774,
                    "end": 7787
                  },
                  "start": 7769,
                  "end": 7787
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 7789,
                "end": 7796
              },
              "expression": false,
              "start": 7721,
              "end": 7796
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSDeclareFunction",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicAmbientFunctionWithPrivateParmeterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7826,
                  "end": 7871
                },
                "generator": false,
                "async": false,
                "declare": true,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7879,
                          "end": 7891
                        },
                        "typeArguments": null,
                        "start": 7879,
                        "end": 7891
                      },
                      "start": 7877,
                      "end": 7891
                    },
                    "start": 7872,
                    "end": 7891
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 7894,
                    "end": 7898
                  },
                  "start": 7892,
                  "end": 7898
                },
                "body": null,
                "expression": false,
                "start": 7809,
                "end": 7899
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 7802,
              "end": 7899
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSDeclareFunction",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicAmbientFunctionWithPublicParmeterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7937,
                  "end": 7981
                },
                "generator": false,
                "async": false,
                "declare": true,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7989,
                          "end": 8000
                        },
                        "typeArguments": null,
                        "start": 7989,
                        "end": 8000
                      },
                      "start": 7987,
                      "end": 8000
                    },
                    "start": 7982,
                    "end": 8000
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 8003,
                    "end": 8007
                  },
                  "start": 8001,
                  "end": 8007
                },
                "body": null,
                "expression": false,
                "start": 7920,
                "end": 8008
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 7913,
              "end": 8008
            },
            {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateAmbientFunctionWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8030,
                "end": 8076
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8084,
                        "end": 8096
                      },
                      "typeArguments": null,
                      "start": 8084,
                      "end": 8096
                    },
                    "start": 8082,
                    "end": 8096
                  },
                  "start": 8077,
                  "end": 8096
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 8099,
                  "end": 8103
                },
                "start": 8097,
                "end": 8103
              },
              "body": null,
              "expression": false,
              "start": 8013,
              "end": 8104
            },
            {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateAmbientFunctionWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8126,
                "end": 8171
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8179,
                        "end": 8190
                      },
                      "typeArguments": null,
                      "start": 8179,
                      "end": 8190
                    },
                    "start": 8177,
                    "end": 8190
                  },
                  "start": 8172,
                  "end": 8190
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 8193,
                  "end": 8197
                },
                "start": 8191,
                "end": 8197
              },
              "body": null,
              "expression": false,
              "start": 8109,
              "end": 8198
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateModuleParameterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8221,
                  "end": 8267
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8290,
                                  "end": 8303
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8304,
                                  "end": 8315
                                },
                                "start": 8290,
                                "end": 8315
                              },
                              "typeArguments": null,
                              "start": 8290,
                              "end": 8315
                            },
                            "start": 8288,
                            "end": 8315
                          },
                          "start": 8283,
                          "end": 8315
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8318,
                            "end": 8329
                          },
                          "typeArguments": null,
                          "start": 8318,
                          "end": 8329
                        },
                        "start": 8316,
                        "end": 8329
                      },
                      "start": 8278,
                      "end": 8330
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8356,
                                  "end": 8369
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8370,
                                  "end": 8381
                                },
                                "start": 8356,
                                "end": 8381
                              },
                              "typeArguments": null,
                              "start": 8356,
                              "end": 8381
                            },
                            "start": 8354,
                            "end": 8381
                          },
                          "start": 8349,
                          "end": 8381
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8384,
                            "end": 8395
                          },
                          "typeArguments": null,
                          "start": 8384,
                          "end": 8395
                        },
                        "start": 8382,
                        "end": 8395
                      },
                      "start": 8348,
                      "end": 8396
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8414,
                        "end": 8422
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8430,
                                  "end": 8443
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8444,
                                  "end": 8455
                                },
                                "start": 8430,
                                "end": 8455
                              },
                              "typeArguments": null,
                              "start": 8430,
                              "end": 8455
                            },
                            "start": 8428,
                            "end": 8455
                          },
                          "start": 8423,
                          "end": 8455
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8458,
                          "end": 8462
                        },
                        "start": 8456,
                        "end": 8462
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8414,
                      "end": 8463
                    }
                  ],
                  "start": 8268,
                  "end": 8478
                },
                "declare": false,
                "start": 8211,
                "end": 8478
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 8204,
              "end": 8478
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPrivateModuleParameterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8496,
                  "end": 8538
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8556,
                        "end": 8576
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8584,
                                    "end": 8597
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8598,
                                    "end": 8609
                                  },
                                  "start": 8584,
                                  "end": 8609
                                },
                                "typeArguments": null,
                                "start": 8584,
                                "end": 8609
                              },
                              "start": 8582,
                              "end": 8609
                            },
                            "start": 8577,
                            "end": 8609
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8611,
                          "end": 8631
                        },
                        "expression": false,
                        "start": 8576,
                        "end": 8631
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8549,
                      "end": 8631
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8640,
                        "end": 8654
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8662,
                                    "end": 8675
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8676,
                                    "end": 8687
                                  },
                                  "start": 8662,
                                  "end": 8687
                                },
                                "typeArguments": null,
                                "start": 8662,
                                "end": 8687
                              },
                              "start": 8660,
                              "end": 8687
                            },
                            "start": 8655,
                            "end": 8687
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8689,
                          "end": 8709
                        },
                        "expression": false,
                        "start": 8654,
                        "end": 8709
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8640,
                      "end": 8709
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8718,
                        "end": 8729
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8737,
                                    "end": 8750
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8751,
                                    "end": 8762
                                  },
                                  "start": 8737,
                                  "end": 8762
                                },
                                "typeArguments": null,
                                "start": 8737,
                                "end": 8762
                              },
                              "start": 8735,
                              "end": 8762
                            },
                            "start": 8730,
                            "end": 8762
                          },
                          {
                            "type": "TSParameterProperty",
                            "accessibility": "private",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8780,
                                      "end": 8793
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8794,
                                      "end": 8805
                                    },
                                    "start": 8780,
                                    "end": 8805
                                  },
                                  "typeArguments": null,
                                  "start": 8780,
                                  "end": 8805
                                },
                                "start": 8778,
                                "end": 8805
                              },
                              "start": 8772,
                              "end": 8805
                            },
                            "readonly": false,
                            "static": false,
                            "start": 8764,
                            "end": 8805
                          },
                          {
                            "type": "TSParameterProperty",
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8822,
                                      "end": 8835
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8836,
                                      "end": 8847
                                    },
                                    "start": 8822,
                                    "end": 8847
                                  },
                                  "typeArguments": null,
                                  "start": 8822,
                                  "end": 8847
                                },
                                "start": 8820,
                                "end": 8847
                              },
                              "start": 8814,
                              "end": 8847
                            },
                            "readonly": false,
                            "static": false,
                            "start": 8807,
                            "end": 8847
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8849,
                          "end": 8869
                        },
                        "expression": false,
                        "start": 8729,
                        "end": 8869
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8718,
                      "end": 8869
                    }
                  ],
                  "start": 8539,
                  "end": 8875
                },
                "abstract": false,
                "declare": false,
                "start": 8490,
                "end": 8875
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8483,
              "end": 8875
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPrivateModuleParameterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8896,
                  "end": 8941
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8949,
                            "end": 8962
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8963,
                            "end": 8974
                          },
                          "start": 8949,
                          "end": 8974
                        },
                        "typeArguments": null,
                        "start": 8949,
                        "end": 8974
                      },
                      "start": 8947,
                      "end": 8974
                    },
                    "start": 8942,
                    "end": 8974
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 8976,
                  "end": 8992
                },
                "expression": false,
                "start": 8887,
                "end": 8992
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8880,
              "end": 8992
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSDeclareFunction",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9021,
                  "end": 9073
                },
                "generator": false,
                "async": false,
                "declare": true,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9081,
                            "end": 9094
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9095,
                            "end": 9106
                          },
                          "start": 9081,
                          "end": 9106
                        },
                        "typeArguments": null,
                        "start": 9081,
                        "end": 9106
                      },
                      "start": 9079,
                      "end": 9106
                    },
                    "start": 9074,
                    "end": 9106
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 9109,
                    "end": 9113
                  },
                  "start": 9107,
                  "end": 9113
                },
                "body": null,
                "expression": false,
                "start": 9004,
                "end": 9114
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 8997,
              "end": 9114
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9139,
                "end": 9186
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9209,
                                "end": 9222
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9223,
                                "end": 9234
                              },
                              "start": 9209,
                              "end": 9234
                            },
                            "typeArguments": null,
                            "start": 9209,
                            "end": 9234
                          },
                          "start": 9207,
                          "end": 9234
                        },
                        "start": 9202,
                        "end": 9234
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9237,
                          "end": 9248
                        },
                        "typeArguments": null,
                        "start": 9237,
                        "end": 9248
                      },
                      "start": 9235,
                      "end": 9248
                    },
                    "start": 9197,
                    "end": 9249
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9266,
                                "end": 9279
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9280,
                                "end": 9291
                              },
                              "start": 9266,
                              "end": 9291
                            },
                            "typeArguments": null,
                            "start": 9266,
                            "end": 9291
                          },
                          "start": 9264,
                          "end": 9291
                        },
                        "start": 9259,
                        "end": 9291
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9294,
                          "end": 9305
                        },
                        "typeArguments": null,
                        "start": 9294,
                        "end": 9305
                      },
                      "start": 9292,
                      "end": 9305
                    },
                    "start": 9258,
                    "end": 9306
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9315,
                      "end": 9323
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9331,
                                "end": 9344
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9345,
                                "end": 9356
                              },
                              "start": 9331,
                              "end": 9356
                            },
                            "typeArguments": null,
                            "start": 9331,
                            "end": 9356
                          },
                          "start": 9329,
                          "end": 9356
                        },
                        "start": 9324,
                        "end": 9356
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 9359,
                        "end": 9363
                      },
                      "start": 9357,
                      "end": 9363
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 9315,
                    "end": 9364
                  }
                ],
                "start": 9187,
                "end": 9370
              },
              "declare": false,
              "start": 9129,
              "end": 9370
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9381,
                "end": 9424
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9442,
                      "end": 9462
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9470,
                                  "end": 9483
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9484,
                                  "end": 9495
                                },
                                "start": 9470,
                                "end": 9495
                              },
                              "typeArguments": null,
                              "start": 9470,
                              "end": 9495
                            },
                            "start": 9468,
                            "end": 9495
                          },
                          "start": 9463,
                          "end": 9495
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9497,
                        "end": 9508
                      },
                      "expression": false,
                      "start": 9462,
                      "end": 9508
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9435,
                    "end": 9508
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9517,
                      "end": 9531
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9539,
                                  "end": 9552
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9553,
                                  "end": 9564
                                },
                                "start": 9539,
                                "end": 9564
                              },
                              "typeArguments": null,
                              "start": 9539,
                              "end": 9564
                            },
                            "start": 9537,
                            "end": 9564
                          },
                          "start": 9532,
                          "end": 9564
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9566,
                        "end": 9577
                      },
                      "expression": false,
                      "start": 9531,
                      "end": 9577
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9517,
                    "end": 9577
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9586,
                      "end": 9597
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9605,
                                  "end": 9618
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9619,
                                  "end": 9630
                                },
                                "start": 9605,
                                "end": 9630
                              },
                              "typeArguments": null,
                              "start": 9605,
                              "end": 9630
                            },
                            "start": 9603,
                            "end": 9630
                          },
                          "start": 9598,
                          "end": 9630
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9648,
                                    "end": 9661
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9662,
                                    "end": 9673
                                  },
                                  "start": 9648,
                                  "end": 9673
                                },
                                "typeArguments": null,
                                "start": 9648,
                                "end": 9673
                              },
                              "start": 9646,
                              "end": 9673
                            },
                            "start": 9640,
                            "end": 9673
                          },
                          "readonly": false,
                          "static": false,
                          "start": 9632,
                          "end": 9673
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9690,
                                    "end": 9703
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9704,
                                    "end": 9715
                                  },
                                  "start": 9690,
                                  "end": 9715
                                },
                                "typeArguments": null,
                                "start": 9690,
                                "end": 9715
                              },
                              "start": 9688,
                              "end": 9715
                            },
                            "start": 9682,
                            "end": 9715
                          },
                          "readonly": false,
                          "static": false,
                          "start": 9675,
                          "end": 9715
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9717,
                        "end": 9728
                      },
                      "expression": false,
                      "start": 9597,
                      "end": 9728
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9586,
                    "end": 9728
                  }
                ],
                "start": 9425,
                "end": 9734
              },
              "abstract": false,
              "declare": false,
              "start": 9375,
              "end": 9734
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9748,
                "end": 9794
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9802,
                          "end": 9815
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9816,
                          "end": 9827
                        },
                        "start": 9802,
                        "end": 9827
                      },
                      "typeArguments": null,
                      "start": 9802,
                      "end": 9827
                    },
                    "start": 9800,
                    "end": 9827
                  },
                  "start": 9795,
                  "end": 9827
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9829,
                "end": 9836
              },
              "expression": false,
              "start": 9739,
              "end": 9836
            },
            {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9858,
                "end": 9911
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9919,
                          "end": 9932
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9933,
                          "end": 9944
                        },
                        "start": 9919,
                        "end": 9944
                      },
                      "typeArguments": null,
                      "start": 9919,
                      "end": 9944
                    },
                    "start": 9917,
                    "end": 9944
                  },
                  "start": 9912,
                  "end": 9944
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9947,
                  "end": 9951
                },
                "start": 9945,
                "end": 9951
              },
              "body": null,
              "expression": false,
              "start": 9841,
              "end": 9952
            }
          ],
          "start": 4759,
          "end": 9955
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 4736,
        "end": 9955
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4729,
      "end": 9955
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 9967,
        "end": 9980
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 9993,
              "end": 10005
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 10006,
              "end": 10013
            },
            "abstract": false,
            "declare": false,
            "start": 9987,
            "end": 10013
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 10032,
                "end": 10043
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 10044,
                "end": 10051
              },
              "abstract": false,
              "declare": false,
              "start": 10026,
              "end": 10051
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10019,
            "end": 10051
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 10074,
                "end": 10113
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10136,
                              "end": 10148
                            },
                            "typeArguments": null,
                            "start": 10136,
                            "end": 10148
                          },
                          "start": 10134,
                          "end": 10148
                        },
                        "start": 10129,
                        "end": 10148
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10151,
                          "end": 10162
                        },
                        "typeArguments": null,
                        "start": 10151,
                        "end": 10162
                      },
                      "start": 10149,
                      "end": 10162
                    },
                    "start": 10124,
                    "end": 10163
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10180,
                              "end": 10192
                            },
                            "typeArguments": null,
                            "start": 10180,
                            "end": 10192
                          },
                          "start": 10178,
                          "end": 10192
                        },
                        "start": 10173,
                        "end": 10192
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10195,
                          "end": 10206
                        },
                        "typeArguments": null,
                        "start": 10195,
                        "end": 10206
                      },
                      "start": 10193,
                      "end": 10206
                    },
                    "start": 10172,
                    "end": 10207
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10216,
                      "end": 10224
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10232,
                              "end": 10244
                            },
                            "typeArguments": null,
                            "start": 10232,
                            "end": 10244
                          },
                          "start": 10230,
                          "end": 10244
                        },
                        "start": 10225,
                        "end": 10244
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10247,
                        "end": 10251
                      },
                      "start": 10245,
                      "end": 10251
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10216,
                    "end": 10252
                  }
                ],
                "start": 10114,
                "end": 10258
              },
              "declare": false,
              "start": 10064,
              "end": 10258
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10057,
            "end": 10258
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 10281,
                "end": 10319
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10342,
                              "end": 10353
                            },
                            "typeArguments": null,
                            "start": 10342,
                            "end": 10353
                          },
                          "start": 10340,
                          "end": 10353
                        },
                        "start": 10335,
                        "end": 10353
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10356,
                          "end": 10367
                        },
                        "typeArguments": null,
                        "start": 10356,
                        "end": 10367
                      },
                      "start": 10354,
                      "end": 10367
                    },
                    "start": 10330,
                    "end": 10368
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10385,
                              "end": 10396
                            },
                            "typeArguments": null,
                            "start": 10385,
                            "end": 10396
                          },
                          "start": 10383,
                          "end": 10396
                        },
                        "start": 10378,
                        "end": 10396
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10399,
                          "end": 10410
                        },
                        "typeArguments": null,
                        "start": 10399,
                        "end": 10410
                      },
                      "start": 10397,
                      "end": 10410
                    },
                    "start": 10377,
                    "end": 10411
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10420,
                      "end": 10428
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10436,
                              "end": 10447
                            },
                            "typeArguments": null,
                            "start": 10436,
                            "end": 10447
                          },
                          "start": 10434,
                          "end": 10447
                        },
                        "start": 10429,
                        "end": 10447
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10450,
                        "end": 10454
                      },
                      "start": 10448,
                      "end": 10454
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10420,
                    "end": 10455
                  }
                ],
                "start": 10320,
                "end": 10461
              },
              "declare": false,
              "start": 10271,
              "end": 10461
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10264,
            "end": 10461
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 10477,
              "end": 10517
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10540,
                            "end": 10552
                          },
                          "typeArguments": null,
                          "start": 10540,
                          "end": 10552
                        },
                        "start": 10538,
                        "end": 10552
                      },
                      "start": 10533,
                      "end": 10552
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10555,
                        "end": 10567
                      },
                      "typeArguments": null,
                      "start": 10555,
                      "end": 10567
                    },
                    "start": 10553,
                    "end": 10567
                  },
                  "start": 10528,
                  "end": 10568
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10585,
                            "end": 10597
                          },
                          "typeArguments": null,
                          "start": 10585,
                          "end": 10597
                        },
                        "start": 10583,
                        "end": 10597
                      },
                      "start": 10578,
                      "end": 10597
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10600,
                        "end": 10612
                      },
                      "typeArguments": null,
                      "start": 10600,
                      "end": 10612
                    },
                    "start": 10598,
                    "end": 10612
                  },
                  "start": 10577,
                  "end": 10613
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10622,
                    "end": 10630
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10638,
                            "end": 10650
                          },
                          "typeArguments": null,
                          "start": 10638,
                          "end": 10650
                        },
                        "start": 10636,
                        "end": 10650
                      },
                      "start": 10631,
                      "end": 10650
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 10653,
                      "end": 10657
                    },
                    "start": 10651,
                    "end": 10657
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 10622,
                  "end": 10658
                }
              ],
              "start": 10518,
              "end": 10664
            },
            "declare": false,
            "start": 10467,
            "end": 10664
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 10680,
              "end": 10719
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10742,
                            "end": 10753
                          },
                          "typeArguments": null,
                          "start": 10742,
                          "end": 10753
                        },
                        "start": 10740,
                        "end": 10753
                      },
                      "start": 10735,
                      "end": 10753
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10756,
                        "end": 10767
                      },
                      "typeArguments": null,
                      "start": 10756,
                      "end": 10767
                    },
                    "start": 10754,
                    "end": 10767
                  },
                  "start": 10730,
                  "end": 10768
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10785,
                            "end": 10796
                          },
                          "typeArguments": null,
                          "start": 10785,
                          "end": 10796
                        },
                        "start": 10783,
                        "end": 10796
                      },
                      "start": 10778,
                      "end": 10796
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10799,
                        "end": 10810
                      },
                      "typeArguments": null,
                      "start": 10799,
                      "end": 10810
                    },
                    "start": 10797,
                    "end": 10810
                  },
                  "start": 10777,
                  "end": 10811
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10820,
                    "end": 10828
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10836,
                            "end": 10847
                          },
                          "typeArguments": null,
                          "start": 10836,
                          "end": 10847
                        },
                        "start": 10834,
                        "end": 10847
                      },
                      "start": 10829,
                      "end": 10847
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 10850,
                      "end": 10854
                    },
                    "start": 10848,
                    "end": 10854
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 10820,
                  "end": 10855
                }
              ],
              "start": 10720,
              "end": 10861
            },
            "declare": false,
            "start": 10670,
            "end": 10861
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 10880,
                "end": 10919
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10937,
                      "end": 10957
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10965,
                                "end": 10977
                              },
                              "typeArguments": null,
                              "start": 10965,
                              "end": 10977
                            },
                            "start": 10963,
                            "end": 10977
                          },
                          "start": 10958,
                          "end": 10977
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10979,
                        "end": 10990
                      },
                      "expression": false,
                      "start": 10957,
                      "end": 10990
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10930,
                    "end": 10990
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11014,
                      "end": 11035
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11043,
                                "end": 11055
                              },
                              "typeArguments": null,
                              "start": 11043,
                              "end": 11055
                            },
                            "start": 11041,
                            "end": 11055
                          },
                          "start": 11036,
                          "end": 11055
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11057,
                        "end": 11068
                      },
                      "expression": false,
                      "start": 11035,
                      "end": 11068
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 10999,
                    "end": 11068
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11077,
                      "end": 11091
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11099,
                                "end": 11111
                              },
                              "typeArguments": null,
                              "start": 11099,
                              "end": 11111
                            },
                            "start": 11097,
                            "end": 11111
                          },
                          "start": 11092,
                          "end": 11111
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11113,
                        "end": 11124
                      },
                      "expression": false,
                      "start": 11091,
                      "end": 11124
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11077,
                    "end": 11124
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11141,
                      "end": 11156
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11164,
                                "end": 11176
                              },
                              "typeArguments": null,
                              "start": 11164,
                              "end": 11176
                            },
                            "start": 11162,
                            "end": 11176
                          },
                          "start": 11157,
                          "end": 11176
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11178,
                        "end": 11189
                      },
                      "expression": false,
                      "start": 11156,
                      "end": 11189
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11133,
                    "end": 11189
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11198,
                      "end": 11209
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11217,
                                "end": 11229
                              },
                              "typeArguments": null,
                              "start": 11217,
                              "end": 11229
                            },
                            "start": 11215,
                            "end": 11229
                          },
                          "start": 11210,
                          "end": 11229
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11247,
                                  "end": 11259
                                },
                                "typeArguments": null,
                                "start": 11247,
                                "end": 11259
                              },
                              "start": 11245,
                              "end": 11259
                            },
                            "start": 11239,
                            "end": 11259
                          },
                          "readonly": false,
                          "static": false,
                          "start": 11231,
                          "end": 11259
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11276,
                                  "end": 11288
                                },
                                "typeArguments": null,
                                "start": 11276,
                                "end": 11288
                              },
                              "start": 11274,
                              "end": 11288
                            },
                            "start": 11268,
                            "end": 11288
                          },
                          "readonly": false,
                          "static": false,
                          "start": 11261,
                          "end": 11288
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11290,
                        "end": 11301
                      },
                      "expression": false,
                      "start": 11209,
                      "end": 11301
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11198,
                    "end": 11301
                  }
                ],
                "start": 10920,
                "end": 11307
              },
              "abstract": false,
              "declare": false,
              "start": 10874,
              "end": 11307
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10867,
            "end": 11307
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 11326,
                "end": 11364
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11382,
                      "end": 11402
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11410,
                                "end": 11421
                              },
                              "typeArguments": null,
                              "start": 11410,
                              "end": 11421
                            },
                            "start": 11408,
                            "end": 11421
                          },
                          "start": 11403,
                          "end": 11421
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11423,
                        "end": 11434
                      },
                      "expression": false,
                      "start": 11402,
                      "end": 11434
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11375,
                    "end": 11434
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11458,
                      "end": 11479
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11487,
                                "end": 11498
                              },
                              "typeArguments": null,
                              "start": 11487,
                              "end": 11498
                            },
                            "start": 11485,
                            "end": 11498
                          },
                          "start": 11480,
                          "end": 11498
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11500,
                        "end": 11511
                      },
                      "expression": false,
                      "start": 11479,
                      "end": 11511
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11443,
                    "end": 11511
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11520,
                      "end": 11534
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11542,
                                "end": 11553
                              },
                              "typeArguments": null,
                              "start": 11542,
                              "end": 11553
                            },
                            "start": 11540,
                            "end": 11553
                          },
                          "start": 11535,
                          "end": 11553
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11555,
                        "end": 11566
                      },
                      "expression": false,
                      "start": 11534,
                      "end": 11566
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11520,
                    "end": 11566
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11583,
                      "end": 11598
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11606,
                                "end": 11617
                              },
                              "typeArguments": null,
                              "start": 11606,
                              "end": 11617
                            },
                            "start": 11604,
                            "end": 11617
                          },
                          "start": 11599,
                          "end": 11617
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11619,
                        "end": 11630
                      },
                      "expression": false,
                      "start": 11598,
                      "end": 11630
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11575,
                    "end": 11630
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11639,
                      "end": 11650
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11658,
                                "end": 11669
                              },
                              "typeArguments": null,
                              "start": 11658,
                              "end": 11669
                            },
                            "start": 11656,
                            "end": 11669
                          },
                          "start": 11651,
                          "end": 11669
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11687,
                                  "end": 11698
                                },
                                "typeArguments": null,
                                "start": 11687,
                                "end": 11698
                              },
                              "start": 11685,
                              "end": 11698
                            },
                            "start": 11679,
                            "end": 11698
                          },
                          "readonly": false,
                          "static": false,
                          "start": 11671,
                          "end": 11698
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11715,
                                  "end": 11726
                                },
                                "typeArguments": null,
                                "start": 11715,
                                "end": 11726
                              },
                              "start": 11713,
                              "end": 11726
                            },
                            "start": 11707,
                            "end": 11726
                          },
                          "readonly": false,
                          "static": false,
                          "start": 11700,
                          "end": 11726
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11728,
                        "end": 11739
                      },
                      "expression": false,
                      "start": 11650,
                      "end": 11739
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11639,
                    "end": 11739
                  }
                ],
                "start": 11365,
                "end": 11745
              },
              "abstract": false,
              "declare": false,
              "start": 11320,
              "end": 11745
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11313,
            "end": 11745
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 11757,
              "end": 11797
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11815,
                    "end": 11835
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11843,
                              "end": 11855
                            },
                            "typeArguments": null,
                            "start": 11843,
                            "end": 11855
                          },
                          "start": 11841,
                          "end": 11855
                        },
                        "start": 11836,
                        "end": 11855
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11857,
                      "end": 11868
                    },
                    "expression": false,
                    "start": 11835,
                    "end": 11868
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11808,
                  "end": 11868
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11892,
                    "end": 11913
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11921,
                              "end": 11933
                            },
                            "typeArguments": null,
                            "start": 11921,
                            "end": 11933
                          },
                          "start": 11919,
                          "end": 11933
                        },
                        "start": 11914,
                        "end": 11933
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11935,
                      "end": 11946
                    },
                    "expression": false,
                    "start": 11913,
                    "end": 11946
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 11877,
                  "end": 11946
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11955,
                    "end": 11969
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11977,
                              "end": 11989
                            },
                            "typeArguments": null,
                            "start": 11977,
                            "end": 11989
                          },
                          "start": 11975,
                          "end": 11989
                        },
                        "start": 11970,
                        "end": 11989
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11991,
                      "end": 12002
                    },
                    "expression": false,
                    "start": 11969,
                    "end": 12002
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11955,
                  "end": 12002
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12019,
                    "end": 12034
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12042,
                              "end": 12054
                            },
                            "typeArguments": null,
                            "start": 12042,
                            "end": 12054
                          },
                          "start": 12040,
                          "end": 12054
                        },
                        "start": 12035,
                        "end": 12054
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12056,
                      "end": 12067
                    },
                    "expression": false,
                    "start": 12034,
                    "end": 12067
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12011,
                  "end": 12067
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12076,
                    "end": 12087
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12095,
                              "end": 12107
                            },
                            "typeArguments": null,
                            "start": 12095,
                            "end": 12107
                          },
                          "start": 12093,
                          "end": 12107
                        },
                        "start": 12088,
                        "end": 12107
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12125,
                                "end": 12137
                              },
                              "typeArguments": null,
                              "start": 12125,
                              "end": 12137
                            },
                            "start": 12123,
                            "end": 12137
                          },
                          "start": 12117,
                          "end": 12137
                        },
                        "readonly": false,
                        "static": false,
                        "start": 12109,
                        "end": 12137
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12154,
                                "end": 12166
                              },
                              "typeArguments": null,
                              "start": 12154,
                              "end": 12166
                            },
                            "start": 12152,
                            "end": 12166
                          },
                          "start": 12146,
                          "end": 12166
                        },
                        "readonly": false,
                        "static": false,
                        "start": 12139,
                        "end": 12166
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12168,
                      "end": 12179
                    },
                    "expression": false,
                    "start": 12087,
                    "end": 12179
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12076,
                  "end": 12179
                }
              ],
              "start": 11798,
              "end": 12185
            },
            "abstract": false,
            "declare": false,
            "start": 11751,
            "end": 12185
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 12197,
              "end": 12236
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12254,
                    "end": 12274
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12282,
                              "end": 12293
                            },
                            "typeArguments": null,
                            "start": 12282,
                            "end": 12293
                          },
                          "start": 12280,
                          "end": 12293
                        },
                        "start": 12275,
                        "end": 12293
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12295,
                      "end": 12306
                    },
                    "expression": false,
                    "start": 12274,
                    "end": 12306
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12247,
                  "end": 12306
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12330,
                    "end": 12351
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12359,
                              "end": 12370
                            },
                            "typeArguments": null,
                            "start": 12359,
                            "end": 12370
                          },
                          "start": 12357,
                          "end": 12370
                        },
                        "start": 12352,
                        "end": 12370
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12372,
                      "end": 12383
                    },
                    "expression": false,
                    "start": 12351,
                    "end": 12383
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12315,
                  "end": 12383
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12392,
                    "end": 12406
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12414,
                              "end": 12425
                            },
                            "typeArguments": null,
                            "start": 12414,
                            "end": 12425
                          },
                          "start": 12412,
                          "end": 12425
                        },
                        "start": 12407,
                        "end": 12425
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12427,
                      "end": 12438
                    },
                    "expression": false,
                    "start": 12406,
                    "end": 12438
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12392,
                  "end": 12438
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12455,
                    "end": 12470
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12478,
                              "end": 12489
                            },
                            "typeArguments": null,
                            "start": 12478,
                            "end": 12489
                          },
                          "start": 12476,
                          "end": 12489
                        },
                        "start": 12471,
                        "end": 12489
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12491,
                      "end": 12502
                    },
                    "expression": false,
                    "start": 12470,
                    "end": 12502
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12447,
                  "end": 12502
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12511,
                    "end": 12522
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12530,
                              "end": 12541
                            },
                            "typeArguments": null,
                            "start": 12530,
                            "end": 12541
                          },
                          "start": 12528,
                          "end": 12541
                        },
                        "start": 12523,
                        "end": 12541
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12559,
                                "end": 12570
                              },
                              "typeArguments": null,
                              "start": 12559,
                              "end": 12570
                            },
                            "start": 12557,
                            "end": 12570
                          },
                          "start": 12551,
                          "end": 12570
                        },
                        "readonly": false,
                        "static": false,
                        "start": 12543,
                        "end": 12570
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12587,
                                "end": 12598
                              },
                              "typeArguments": null,
                              "start": 12587,
                              "end": 12598
                            },
                            "start": 12585,
                            "end": 12598
                          },
                          "start": 12579,
                          "end": 12598
                        },
                        "readonly": false,
                        "static": false,
                        "start": 12572,
                        "end": 12598
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12600,
                      "end": 12611
                    },
                    "expression": false,
                    "start": 12522,
                    "end": 12611
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12511,
                  "end": 12611
                }
              ],
              "start": 12237,
              "end": 12617
            },
            "abstract": false,
            "declare": false,
            "start": 12191,
            "end": 12617
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 12639,
                "end": 12677
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12685,
                        "end": 12697
                      },
                      "typeArguments": null,
                      "start": 12685,
                      "end": 12697
                    },
                    "start": 12683,
                    "end": 12697
                  },
                  "start": 12678,
                  "end": 12697
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 12699,
                "end": 12706
              },
              "expression": false,
              "start": 12630,
              "end": 12706
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12623,
            "end": 12706
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 12727,
                "end": 12764
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12772,
                        "end": 12783
                      },
                      "typeArguments": null,
                      "start": 12772,
                      "end": 12783
                    },
                    "start": 12770,
                    "end": 12783
                  },
                  "start": 12765,
                  "end": 12783
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 12785,
                "end": 12792
              },
              "expression": false,
              "start": 12718,
              "end": 12792
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12711,
            "end": 12792
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 12806,
              "end": 12845
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12853,
                      "end": 12865
                    },
                    "typeArguments": null,
                    "start": 12853,
                    "end": 12865
                  },
                  "start": 12851,
                  "end": 12865
                },
                "start": 12846,
                "end": 12865
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 12867,
              "end": 12874
            },
            "expression": false,
            "start": 12797,
            "end": 12874
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 12888,
              "end": 12926
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12934,
                      "end": 12945
                    },
                    "typeArguments": null,
                    "start": 12934,
                    "end": 12945
                  },
                  "start": 12932,
                  "end": 12945
                },
                "start": 12927,
                "end": 12945
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 12947,
              "end": 12954
            },
            "expression": false,
            "start": 12879,
            "end": 12954
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicAmbientFunctionWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 12984,
                "end": 13029
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 13037,
                        "end": 13049
                      },
                      "typeArguments": null,
                      "start": 13037,
                      "end": 13049
                    },
                    "start": 13035,
                    "end": 13049
                  },
                  "start": 13030,
                  "end": 13049
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 13052,
                  "end": 13056
                },
                "start": 13050,
                "end": 13056
              },
              "body": null,
              "expression": false,
              "start": 12967,
              "end": 13057
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 12960,
            "end": 13057
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicAmbientFunctionWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 13086,
                "end": 13130
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 13138,
                        "end": 13149
                      },
                      "typeArguments": null,
                      "start": 13138,
                      "end": 13149
                    },
                    "start": 13136,
                    "end": 13149
                  },
                  "start": 13131,
                  "end": 13149
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 13152,
                  "end": 13156
                },
                "start": 13150,
                "end": 13156
              },
              "body": null,
              "expression": false,
              "start": 13069,
              "end": 13157
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 13062,
            "end": 13157
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 13179,
              "end": 13225
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13233,
                      "end": 13245
                    },
                    "typeArguments": null,
                    "start": 13233,
                    "end": 13245
                  },
                  "start": 13231,
                  "end": 13245
                },
                "start": 13226,
                "end": 13245
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 13248,
                "end": 13252
              },
              "start": 13246,
              "end": 13252
            },
            "body": null,
            "expression": false,
            "start": 13162,
            "end": 13253
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 13275,
              "end": 13320
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13328,
                      "end": 13339
                    },
                    "typeArguments": null,
                    "start": 13328,
                    "end": 13339
                  },
                  "start": 13326,
                  "end": 13339
                },
                "start": 13321,
                "end": 13339
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 13342,
                "end": 13346
              },
              "start": 13340,
              "end": 13346
            },
            "body": null,
            "expression": false,
            "start": 13258,
            "end": 13347
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 13370,
                "end": 13416
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13439,
                                "end": 13452
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13453,
                                "end": 13464
                              },
                              "start": 13439,
                              "end": 13464
                            },
                            "typeArguments": null,
                            "start": 13439,
                            "end": 13464
                          },
                          "start": 13437,
                          "end": 13464
                        },
                        "start": 13432,
                        "end": 13464
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13467,
                          "end": 13478
                        },
                        "typeArguments": null,
                        "start": 13467,
                        "end": 13478
                      },
                      "start": 13465,
                      "end": 13478
                    },
                    "start": 13427,
                    "end": 13479
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13496,
                                "end": 13509
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13510,
                                "end": 13521
                              },
                              "start": 13496,
                              "end": 13521
                            },
                            "typeArguments": null,
                            "start": 13496,
                            "end": 13521
                          },
                          "start": 13494,
                          "end": 13521
                        },
                        "start": 13489,
                        "end": 13521
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13524,
                          "end": 13535
                        },
                        "typeArguments": null,
                        "start": 13524,
                        "end": 13535
                      },
                      "start": 13522,
                      "end": 13535
                    },
                    "start": 13488,
                    "end": 13536
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13545,
                      "end": 13553
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13561,
                                "end": 13574
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13575,
                                "end": 13586
                              },
                              "start": 13561,
                              "end": 13586
                            },
                            "typeArguments": null,
                            "start": 13561,
                            "end": 13586
                          },
                          "start": 13559,
                          "end": 13586
                        },
                        "start": 13554,
                        "end": 13586
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 13589,
                        "end": 13593
                      },
                      "start": 13587,
                      "end": 13593
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 13545,
                    "end": 13594
                  }
                ],
                "start": 13417,
                "end": 13600
              },
              "declare": false,
              "start": 13360,
              "end": 13600
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 13353,
            "end": 13600
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 13618,
                "end": 13660
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13678,
                      "end": 13698
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13706,
                                  "end": 13719
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13720,
                                  "end": 13731
                                },
                                "start": 13706,
                                "end": 13731
                              },
                              "typeArguments": null,
                              "start": 13706,
                              "end": 13731
                            },
                            "start": 13704,
                            "end": 13731
                          },
                          "start": 13699,
                          "end": 13731
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13733,
                        "end": 13744
                      },
                      "expression": false,
                      "start": 13698,
                      "end": 13744
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13671,
                    "end": 13744
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13753,
                      "end": 13767
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13775,
                                  "end": 13788
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13789,
                                  "end": 13800
                                },
                                "start": 13775,
                                "end": 13800
                              },
                              "typeArguments": null,
                              "start": 13775,
                              "end": 13800
                            },
                            "start": 13773,
                            "end": 13800
                          },
                          "start": 13768,
                          "end": 13800
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13802,
                        "end": 13813
                      },
                      "expression": false,
                      "start": 13767,
                      "end": 13813
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13753,
                    "end": 13813
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13822,
                      "end": 13833
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13841,
                                  "end": 13854
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13855,
                                  "end": 13866
                                },
                                "start": 13841,
                                "end": 13866
                              },
                              "typeArguments": null,
                              "start": 13841,
                              "end": 13866
                            },
                            "start": 13839,
                            "end": 13866
                          },
                          "start": 13834,
                          "end": 13866
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13884,
                                    "end": 13897
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13898,
                                    "end": 13909
                                  },
                                  "start": 13884,
                                  "end": 13909
                                },
                                "typeArguments": null,
                                "start": 13884,
                                "end": 13909
                              },
                              "start": 13882,
                              "end": 13909
                            },
                            "start": 13876,
                            "end": 13909
                          },
                          "readonly": false,
                          "static": false,
                          "start": 13868,
                          "end": 13909
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13926,
                                    "end": 13939
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13940,
                                    "end": 13951
                                  },
                                  "start": 13926,
                                  "end": 13951
                                },
                                "typeArguments": null,
                                "start": 13926,
                                "end": 13951
                              },
                              "start": 13924,
                              "end": 13951
                            },
                            "start": 13918,
                            "end": 13951
                          },
                          "readonly": false,
                          "static": false,
                          "start": 13911,
                          "end": 13951
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13953,
                        "end": 13964
                      },
                      "expression": false,
                      "start": 13833,
                      "end": 13964
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13822,
                    "end": 13964
                  }
                ],
                "start": 13661,
                "end": 13970
              },
              "abstract": false,
              "declare": false,
              "start": 13612,
              "end": 13970
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13605,
            "end": 13970
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 13991,
                "end": 14036
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14044,
                          "end": 14057
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14058,
                          "end": 14069
                        },
                        "start": 14044,
                        "end": 14069
                      },
                      "typeArguments": null,
                      "start": 14044,
                      "end": 14069
                    },
                    "start": 14042,
                    "end": 14069
                  },
                  "start": 14037,
                  "end": 14069
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 14071,
                "end": 14078
              },
              "expression": false,
              "start": 13982,
              "end": 14078
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13975,
            "end": 14078
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 14107,
                "end": 14159
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14167,
                          "end": 14180
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14181,
                          "end": 14192
                        },
                        "start": 14167,
                        "end": 14192
                      },
                      "typeArguments": null,
                      "start": 14167,
                      "end": 14192
                    },
                    "start": 14165,
                    "end": 14192
                  },
                  "start": 14160,
                  "end": 14192
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 14195,
                  "end": 14199
                },
                "start": 14193,
                "end": 14199
              },
              "body": null,
              "expression": false,
              "start": 14090,
              "end": 14200
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 14083,
            "end": 14200
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 14216,
              "end": 14263
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14286,
                              "end": 14299
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14300,
                              "end": 14311
                            },
                            "start": 14286,
                            "end": 14311
                          },
                          "typeArguments": null,
                          "start": 14286,
                          "end": 14311
                        },
                        "start": 14284,
                        "end": 14311
                      },
                      "start": 14279,
                      "end": 14311
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14314,
                        "end": 14325
                      },
                      "typeArguments": null,
                      "start": 14314,
                      "end": 14325
                    },
                    "start": 14312,
                    "end": 14325
                  },
                  "start": 14274,
                  "end": 14326
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14343,
                              "end": 14356
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14357,
                              "end": 14368
                            },
                            "start": 14343,
                            "end": 14368
                          },
                          "typeArguments": null,
                          "start": 14343,
                          "end": 14368
                        },
                        "start": 14341,
                        "end": 14368
                      },
                      "start": 14336,
                      "end": 14368
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14371,
                        "end": 14382
                      },
                      "typeArguments": null,
                      "start": 14371,
                      "end": 14382
                    },
                    "start": 14369,
                    "end": 14382
                  },
                  "start": 14335,
                  "end": 14383
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14392,
                    "end": 14400
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14408,
                              "end": 14421
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14422,
                              "end": 14433
                            },
                            "start": 14408,
                            "end": 14433
                          },
                          "typeArguments": null,
                          "start": 14408,
                          "end": 14433
                        },
                        "start": 14406,
                        "end": 14433
                      },
                      "start": 14401,
                      "end": 14433
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 14436,
                      "end": 14440
                    },
                    "start": 14434,
                    "end": 14440
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 14392,
                  "end": 14441
                }
              ],
              "start": 14264,
              "end": 14447
            },
            "declare": false,
            "start": 14206,
            "end": 14447
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 14458,
              "end": 14501
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14519,
                    "end": 14539
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14547,
                                "end": 14560
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14561,
                                "end": 14572
                              },
                              "start": 14547,
                              "end": 14572
                            },
                            "typeArguments": null,
                            "start": 14547,
                            "end": 14572
                          },
                          "start": 14545,
                          "end": 14572
                        },
                        "start": 14540,
                        "end": 14572
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14574,
                      "end": 14585
                    },
                    "expression": false,
                    "start": 14539,
                    "end": 14585
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14512,
                  "end": 14585
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14594,
                    "end": 14608
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14616,
                                "end": 14629
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14630,
                                "end": 14641
                              },
                              "start": 14616,
                              "end": 14641
                            },
                            "typeArguments": null,
                            "start": 14616,
                            "end": 14641
                          },
                          "start": 14614,
                          "end": 14641
                        },
                        "start": 14609,
                        "end": 14641
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14643,
                      "end": 14654
                    },
                    "expression": false,
                    "start": 14608,
                    "end": 14654
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14594,
                  "end": 14654
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14663,
                    "end": 14674
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14682,
                                "end": 14695
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14696,
                                "end": 14707
                              },
                              "start": 14682,
                              "end": 14707
                            },
                            "typeArguments": null,
                            "start": 14682,
                            "end": 14707
                          },
                          "start": 14680,
                          "end": 14707
                        },
                        "start": 14675,
                        "end": 14707
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14725,
                                  "end": 14738
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14739,
                                  "end": 14750
                                },
                                "start": 14725,
                                "end": 14750
                              },
                              "typeArguments": null,
                              "start": 14725,
                              "end": 14750
                            },
                            "start": 14723,
                            "end": 14750
                          },
                          "start": 14717,
                          "end": 14750
                        },
                        "readonly": false,
                        "static": false,
                        "start": 14709,
                        "end": 14750
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14767,
                                  "end": 14780
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14781,
                                  "end": 14792
                                },
                                "start": 14767,
                                "end": 14792
                              },
                              "typeArguments": null,
                              "start": 14767,
                              "end": 14792
                            },
                            "start": 14765,
                            "end": 14792
                          },
                          "start": 14759,
                          "end": 14792
                        },
                        "readonly": false,
                        "static": false,
                        "start": 14752,
                        "end": 14792
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14794,
                      "end": 14805
                    },
                    "expression": false,
                    "start": 14674,
                    "end": 14805
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14663,
                  "end": 14805
                }
              ],
              "start": 14502,
              "end": 14811
            },
            "abstract": false,
            "declare": false,
            "start": 14452,
            "end": 14811
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 14825,
              "end": 14871
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14879,
                        "end": 14892
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14893,
                        "end": 14904
                      },
                      "start": 14879,
                      "end": 14904
                    },
                    "typeArguments": null,
                    "start": 14879,
                    "end": 14904
                  },
                  "start": 14877,
                  "end": 14904
                },
                "start": 14872,
                "end": 14904
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 14906,
              "end": 14913
            },
            "expression": false,
            "start": 14816,
            "end": 14913
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 14935,
              "end": 14988
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14996,
                        "end": 15009
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 15010,
                        "end": 15021
                      },
                      "start": 14996,
                      "end": 15021
                    },
                    "typeArguments": null,
                    "start": 14996,
                    "end": 15021
                  },
                  "start": 14994,
                  "end": 15021
                },
                "start": 14989,
                "end": 15021
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 15024,
                "end": 15028
              },
              "start": 15022,
              "end": 15028
            },
            "body": null,
            "expression": false,
            "start": 14918,
            "end": 15029
          }
        ],
        "start": 9981,
        "end": 15031
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 9957,
      "end": 15031
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 15032
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 25
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 26,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceWithPublicParmeterTypesInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 86
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassInGlobal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 124
                    },
                    "typeArguments": null,
                    "start": 105,
                    "end": 124
                  },
                  "start": 103,
                  "end": 124
                },
                "start": 98,
                "end": 124
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 146
                },
                "typeArguments": null,
                "start": 127,
                "end": 146
              },
              "start": 125,
              "end": 146
            },
            "start": 93,
            "end": 147
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassInGlobal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 179
                    },
                    "typeArguments": null,
                    "start": 160,
                    "end": 179
                  },
                  "start": 158,
                  "end": 179
                },
                "start": 153,
                "end": 179
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInGlobal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 201
                },
                "typeArguments": null,
                "start": 182,
                "end": 201
              },
              "start": 180,
              "end": 201
            },
            "start": 152,
            "end": 202
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 215
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassInGlobal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 242
                    },
                    "typeArguments": null,
                    "start": 223,
                    "end": 242
                  },
                  "start": 221,
                  "end": 242
                },
                "start": 216,
                "end": 242
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 245,
                "end": 249
              },
              "start": 243,
              "end": 249
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 207,
            "end": 250
          }
        ],
        "start": 87,
        "end": 252
      },
      "declare": false,
      "start": 30,
      "end": 252
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassWithWithPublicParmeterTypesInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 305
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 339
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 366
                      },
                      "typeArguments": null,
                      "start": 347,
                      "end": 366
                    },
                    "start": 345,
                    "end": 366
                  },
                  "start": 340,
                  "end": 366
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 368,
                "end": 375
              },
              "expression": false,
              "start": 339,
              "end": 375
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 312,
            "end": 375
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 416
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 443
                      },
                      "typeArguments": null,
                      "start": 424,
                      "end": 443
                    },
                    "start": 422,
                    "end": 443
                  },
                  "start": 417,
                  "end": 443
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 445,
                "end": 452
              },
              "expression": false,
              "start": 416,
              "end": 452
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 380,
            "end": 452
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 471
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 479,
                        "end": 498
                      },
                      "typeArguments": null,
                      "start": 479,
                      "end": 498
                    },
                    "start": 477,
                    "end": 498
                  },
                  "start": 472,
                  "end": 498
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 500,
                "end": 507
              },
              "expression": false,
              "start": 471,
              "end": 507
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 457,
            "end": 507
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 535
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 562
                      },
                      "typeArguments": null,
                      "start": 543,
                      "end": 562
                    },
                    "start": 541,
                    "end": 562
                  },
                  "start": 536,
                  "end": 562
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 564,
                "end": 571
              },
              "expression": false,
              "start": 535,
              "end": 571
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 512,
            "end": 571
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 587
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 595,
                        "end": 614
                      },
                      "typeArguments": null,
                      "start": 595,
                      "end": 614
                    },
                    "start": 593,
                    "end": 614
                  },
                  "start": 588,
                  "end": 614
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInGlobal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 632,
                          "end": 651
                        },
                        "typeArguments": null,
                        "start": 632,
                        "end": 651
                      },
                      "start": 630,
                      "end": 651
                    },
                    "start": 624,
                    "end": 651
                  },
                  "readonly": false,
                  "static": false,
                  "start": 616,
                  "end": 651
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInGlobal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 668,
                          "end": 687
                        },
                        "typeArguments": null,
                        "start": 668,
                        "end": 687
                      },
                      "start": 666,
                      "end": 687
                    },
                    "start": 660,
                    "end": 687
                  },
                  "readonly": false,
                  "static": false,
                  "start": 653,
                  "end": 687
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 689,
                "end": 696
              },
              "expression": false,
              "start": 587,
              "end": 696
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 576,
            "end": 696
          }
        ],
        "start": 306,
        "end": 698
      },
      "abstract": false,
      "declare": false,
      "start": 253,
      "end": 698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicFunctionWithPublicParmeterTypesInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 708,
        "end": 753
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInGlobal",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 780
              },
              "typeArguments": null,
              "start": 761,
              "end": 780
            },
            "start": 759,
            "end": 780
          },
          "start": 754,
          "end": 780
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 782,
        "end": 785
      },
      "expression": false,
      "start": 699,
      "end": 785
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicAmbientFunctionWithPublicParmeterTypesInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 803,
        "end": 855
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInGlobal",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 882
              },
              "typeArguments": null,
              "start": 863,
              "end": 882
            },
            "start": 861,
            "end": 882
          },
          "start": 856,
          "end": 882
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 885,
          "end": 889
        },
        "start": 883,
        "end": 889
      },
      "body": null,
      "expression": false,
      "start": 786,
      "end": 890
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 922
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 935,
              "end": 947
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 948,
              "end": 955
            },
            "abstract": false,
            "declare": false,
            "start": 929,
            "end": 955
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 985
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 986,
                "end": 993
              },
              "abstract": false,
              "declare": false,
              "start": 968,
              "end": 993
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 961,
            "end": 993
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1009,
              "end": 1022
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1039,
                    "end": 1051
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 1052,
                    "end": 1063
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 1033,
                  "end": 1063
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1086,
                      "end": 1097
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 1098,
                      "end": 1109
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1080,
                    "end": 1109
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1073,
                  "end": 1109
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPrivateParmeterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1136,
                      "end": 1175
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1202,
                                    "end": 1214
                                  },
                                  "typeArguments": null,
                                  "start": 1202,
                                  "end": 1214
                                },
                                "start": 1200,
                                "end": 1214
                              },
                              "start": 1195,
                              "end": 1214
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1217,
                                "end": 1228
                              },
                              "typeArguments": null,
                              "start": 1217,
                              "end": 1228
                            },
                            "start": 1215,
                            "end": 1228
                          },
                          "start": 1190,
                          "end": 1229
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1250,
                                    "end": 1262
                                  },
                                  "typeArguments": null,
                                  "start": 1250,
                                  "end": 1262
                                },
                                "start": 1248,
                                "end": 1262
                              },
                              "start": 1243,
                              "end": 1262
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1265,
                                "end": 1276
                              },
                              "typeArguments": null,
                              "start": 1265,
                              "end": 1276
                            },
                            "start": 1263,
                            "end": 1276
                          },
                          "start": 1242,
                          "end": 1277
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1290,
                            "end": 1298
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1306,
                                    "end": 1318
                                  },
                                  "typeArguments": null,
                                  "start": 1306,
                                  "end": 1318
                                },
                                "start": 1304,
                                "end": 1318
                              },
                              "start": 1299,
                              "end": 1318
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1321,
                              "end": 1325
                            },
                            "start": 1319,
                            "end": 1325
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 1290,
                          "end": 1326
                        }
                      ],
                      "start": 1176,
                      "end": 1336
                    },
                    "declare": false,
                    "start": 1126,
                    "end": 1336
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 1119,
                  "end": 1336
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPublicParmeterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1363,
                      "end": 1401
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1428,
                                    "end": 1439
                                  },
                                  "typeArguments": null,
                                  "start": 1428,
                                  "end": 1439
                                },
                                "start": 1426,
                                "end": 1439
                              },
                              "start": 1421,
                              "end": 1439
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1442,
                                "end": 1453
                              },
                              "typeArguments": null,
                              "start": 1442,
                              "end": 1453
                            },
                            "start": 1440,
                            "end": 1453
                          },
                          "start": 1416,
                          "end": 1454
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1475,
                                    "end": 1486
                                  },
                                  "typeArguments": null,
                                  "start": 1475,
                                  "end": 1486
                                },
                                "start": 1473,
                                "end": 1486
                              },
                              "start": 1468,
                              "end": 1486
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1489,
                                "end": 1500
                              },
                              "typeArguments": null,
                              "start": 1489,
                              "end": 1500
                            },
                            "start": 1487,
                            "end": 1500
                          },
                          "start": 1467,
                          "end": 1501
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1514,
                            "end": 1522
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1530,
                                    "end": 1541
                                  },
                                  "typeArguments": null,
                                  "start": 1530,
                                  "end": 1541
                                },
                                "start": 1528,
                                "end": 1541
                              },
                              "start": 1523,
                              "end": 1541
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1544,
                              "end": 1548
                            },
                            "start": 1542,
                            "end": 1548
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 1514,
                          "end": 1549
                        }
                      ],
                      "start": 1402,
                      "end": 1559
                    },
                    "declare": false,
                    "start": 1353,
                    "end": 1559
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 1346,
                  "end": 1559
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivateParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1579,
                    "end": 1619
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1646,
                                  "end": 1658
                                },
                                "typeArguments": null,
                                "start": 1646,
                                "end": 1658
                              },
                              "start": 1644,
                              "end": 1658
                            },
                            "start": 1639,
                            "end": 1658
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1661,
                              "end": 1673
                            },
                            "typeArguments": null,
                            "start": 1661,
                            "end": 1673
                          },
                          "start": 1659,
                          "end": 1673
                        },
                        "start": 1634,
                        "end": 1674
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1695,
                                  "end": 1707
                                },
                                "typeArguments": null,
                                "start": 1695,
                                "end": 1707
                              },
                              "start": 1693,
                              "end": 1707
                            },
                            "start": 1688,
                            "end": 1707
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1710,
                              "end": 1722
                            },
                            "typeArguments": null,
                            "start": 1710,
                            "end": 1722
                          },
                          "start": 1708,
                          "end": 1722
                        },
                        "start": 1687,
                        "end": 1723
                      },
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1736,
                          "end": 1744
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1752,
                                  "end": 1764
                                },
                                "typeArguments": null,
                                "start": 1752,
                                "end": 1764
                              },
                              "start": 1750,
                              "end": 1764
                            },
                            "start": 1745,
                            "end": 1764
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1767,
                            "end": 1771
                          },
                          "start": 1765,
                          "end": 1771
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 1736,
                        "end": 1772
                      }
                    ],
                    "start": 1620,
                    "end": 1782
                  },
                  "declare": false,
                  "start": 1569,
                  "end": 1782
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPublicParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1802,
                    "end": 1841
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1868,
                                  "end": 1879
                                },
                                "typeArguments": null,
                                "start": 1868,
                                "end": 1879
                              },
                              "start": 1866,
                              "end": 1879
                            },
                            "start": 1861,
                            "end": 1879
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1882,
                              "end": 1893
                            },
                            "typeArguments": null,
                            "start": 1882,
                            "end": 1893
                          },
                          "start": 1880,
                          "end": 1893
                        },
                        "start": 1856,
                        "end": 1894
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1915,
                                  "end": 1926
                                },
                                "typeArguments": null,
                                "start": 1915,
                                "end": 1926
                              },
                              "start": 1913,
                              "end": 1926
                            },
                            "start": 1908,
                            "end": 1926
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1929,
                              "end": 1940
                            },
                            "typeArguments": null,
                            "start": 1929,
                            "end": 1940
                          },
                          "start": 1927,
                          "end": 1940
                        },
                        "start": 1907,
                        "end": 1941
                      },
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1954,
                          "end": 1962
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1970,
                                  "end": 1981
                                },
                                "typeArguments": null,
                                "start": 1970,
                                "end": 1981
                              },
                              "start": 1968,
                              "end": 1981
                            },
                            "start": 1963,
                            "end": 1981
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1984,
                            "end": 1988
                          },
                          "start": 1982,
                          "end": 1988
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 1954,
                        "end": 1989
                      }
                    ],
                    "start": 1842,
                    "end": 1999
                  },
                  "declare": false,
                  "start": 1792,
                  "end": 1999
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPrivateParmeterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2022,
                      "end": 2061
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2083,
                            "end": 2103
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2111,
                                      "end": 2123
                                    },
                                    "typeArguments": null,
                                    "start": 2111,
                                    "end": 2123
                                  },
                                  "start": 2109,
                                  "end": 2123
                                },
                                "start": 2104,
                                "end": 2123
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2125,
                              "end": 2140
                            },
                            "expression": false,
                            "start": 2103,
                            "end": 2140
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2076,
                          "end": 2140
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2168,
                            "end": 2189
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2197,
                                      "end": 2209
                                    },
                                    "typeArguments": null,
                                    "start": 2197,
                                    "end": 2209
                                  },
                                  "start": 2195,
                                  "end": 2209
                                },
                                "start": 2190,
                                "end": 2209
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2211,
                              "end": 2226
                            },
                            "expression": false,
                            "start": 2189,
                            "end": 2226
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2153,
                          "end": 2226
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2239,
                            "end": 2253
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2261,
                                      "end": 2273
                                    },
                                    "typeArguments": null,
                                    "start": 2261,
                                    "end": 2273
                                  },
                                  "start": 2259,
                                  "end": 2273
                                },
                                "start": 2254,
                                "end": 2273
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2275,
                              "end": 2290
                            },
                            "expression": false,
                            "start": 2253,
                            "end": 2290
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2239,
                          "end": 2290
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2311,
                            "end": 2326
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2334,
                                      "end": 2346
                                    },
                                    "typeArguments": null,
                                    "start": 2334,
                                    "end": 2346
                                  },
                                  "start": 2332,
                                  "end": 2346
                                },
                                "start": 2327,
                                "end": 2346
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2348,
                              "end": 2363
                            },
                            "expression": false,
                            "start": 2326,
                            "end": 2363
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2303,
                          "end": 2363
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "constructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2376,
                            "end": 2387
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2395,
                                      "end": 2407
                                    },
                                    "typeArguments": null,
                                    "start": 2395,
                                    "end": 2407
                                  },
                                  "start": 2393,
                                  "end": 2407
                                },
                                "start": 2388,
                                "end": 2407
                              },
                              {
                                "type": "TSParameterProperty",
                                "accessibility": "private",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2425,
                                        "end": 2437
                                      },
                                      "typeArguments": null,
                                      "start": 2425,
                                      "end": 2437
                                    },
                                    "start": 2423,
                                    "end": 2437
                                  },
                                  "start": 2417,
                                  "end": 2437
                                },
                                "readonly": false,
                                "static": false,
                                "start": 2409,
                                "end": 2437
                              },
                              {
                                "type": "TSParameterProperty",
                                "accessibility": "public",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2454,
                                        "end": 2466
                                      },
                                      "typeArguments": null,
                                      "start": 2454,
                                      "end": 2466
                                    },
                                    "start": 2452,
                                    "end": 2466
                                  },
                                  "start": 2446,
                                  "end": 2466
                                },
                                "readonly": false,
                                "static": false,
                                "start": 2439,
                                "end": 2466
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2468,
                              "end": 2483
                            },
                            "expression": false,
                            "start": 2387,
                            "end": 2483
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2376,
                          "end": 2483
                        }
                      ],
                      "start": 2062,
                      "end": 2493
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 2016,
                    "end": 2493
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2009,
                  "end": 2493
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPublicParmeterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2516,
                      "end": 2554
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2576,
                            "end": 2596
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2604,
                                      "end": 2615
                                    },
                                    "typeArguments": null,
                                    "start": 2604,
                                    "end": 2615
                                  },
                                  "start": 2602,
                                  "end": 2615
                                },
                                "start": 2597,
                                "end": 2615
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2617,
                              "end": 2632
                            },
                            "expression": false,
                            "start": 2596,
                            "end": 2632
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2569,
                          "end": 2632
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2660,
                            "end": 2681
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2689,
                                      "end": 2700
                                    },
                                    "typeArguments": null,
                                    "start": 2689,
                                    "end": 2700
                                  },
                                  "start": 2687,
                                  "end": 2700
                                },
                                "start": 2682,
                                "end": 2700
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2702,
                              "end": 2717
                            },
                            "expression": false,
                            "start": 2681,
                            "end": 2717
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2645,
                          "end": 2717
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2730,
                            "end": 2744
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2752,
                                      "end": 2763
                                    },
                                    "typeArguments": null,
                                    "start": 2752,
                                    "end": 2763
                                  },
                                  "start": 2750,
                                  "end": 2763
                                },
                                "start": 2745,
                                "end": 2763
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2765,
                              "end": 2780
                            },
                            "expression": false,
                            "start": 2744,
                            "end": 2780
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2730,
                          "end": 2780
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2801,
                            "end": 2816
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2824,
                                      "end": 2835
                                    },
                                    "typeArguments": null,
                                    "start": 2824,
                                    "end": 2835
                                  },
                                  "start": 2822,
                                  "end": 2835
                                },
                                "start": 2817,
                                "end": 2835
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2837,
                              "end": 2852
                            },
                            "expression": false,
                            "start": 2816,
                            "end": 2852
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2793,
                          "end": 2852
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "constructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2865,
                            "end": 2876
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2884,
                                      "end": 2895
                                    },
                                    "typeArguments": null,
                                    "start": 2884,
                                    "end": 2895
                                  },
                                  "start": 2882,
                                  "end": 2895
                                },
                                "start": 2877,
                                "end": 2895
                              },
                              {
                                "type": "TSParameterProperty",
                                "accessibility": "private",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2913,
                                        "end": 2924
                                      },
                                      "typeArguments": null,
                                      "start": 2913,
                                      "end": 2924
                                    },
                                    "start": 2911,
                                    "end": 2924
                                  },
                                  "start": 2905,
                                  "end": 2924
                                },
                                "readonly": false,
                                "static": false,
                                "start": 2897,
                                "end": 2924
                              },
                              {
                                "type": "TSParameterProperty",
                                "accessibility": "public",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2941,
                                        "end": 2952
                                      },
                                      "typeArguments": null,
                                      "start": 2941,
                                      "end": 2952
                                    },
                                    "start": 2939,
                                    "end": 2952
                                  },
                                  "start": 2933,
                                  "end": 2952
                                },
                                "readonly": false,
                                "static": false,
                                "start": 2926,
                                "end": 2952
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2954,
                              "end": 2969
                            },
                            "expression": false,
                            "start": 2876,
                            "end": 2969
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2865,
                          "end": 2969
                        }
                      ],
                      "start": 2555,
                      "end": 2979
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 2510,
                    "end": 2979
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2503,
                  "end": 2979
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPrivateParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2995,
                    "end": 3035
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3057,
                          "end": 3077
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3085,
                                    "end": 3097
                                  },
                                  "typeArguments": null,
                                  "start": 3085,
                                  "end": 3097
                                },
                                "start": 3083,
                                "end": 3097
                              },
                              "start": 3078,
                              "end": 3097
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3099,
                            "end": 3114
                          },
                          "expression": false,
                          "start": 3077,
                          "end": 3114
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3050,
                        "end": 3114
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3142,
                          "end": 3163
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3171,
                                    "end": 3183
                                  },
                                  "typeArguments": null,
                                  "start": 3171,
                                  "end": 3183
                                },
                                "start": 3169,
                                "end": 3183
                              },
                              "start": 3164,
                              "end": 3183
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3185,
                            "end": 3200
                          },
                          "expression": false,
                          "start": 3163,
                          "end": 3200
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3127,
                        "end": 3200
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3213,
                          "end": 3227
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3235,
                                    "end": 3247
                                  },
                                  "typeArguments": null,
                                  "start": 3235,
                                  "end": 3247
                                },
                                "start": 3233,
                                "end": 3247
                              },
                              "start": 3228,
                              "end": 3247
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3249,
                            "end": 3264
                          },
                          "expression": false,
                          "start": 3227,
                          "end": 3264
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3213,
                        "end": 3264
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3285,
                          "end": 3300
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3308,
                                    "end": 3320
                                  },
                                  "typeArguments": null,
                                  "start": 3308,
                                  "end": 3320
                                },
                                "start": 3306,
                                "end": 3320
                              },
                              "start": 3301,
                              "end": 3320
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3322,
                            "end": 3337
                          },
                          "expression": false,
                          "start": 3300,
                          "end": 3337
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3277,
                        "end": 3337
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3350,
                          "end": 3361
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3369,
                                    "end": 3381
                                  },
                                  "typeArguments": null,
                                  "start": 3369,
                                  "end": 3381
                                },
                                "start": 3367,
                                "end": 3381
                              },
                              "start": 3362,
                              "end": 3381
                            },
                            {
                              "type": "TSParameterProperty",
                              "accessibility": "private",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3399,
                                      "end": 3411
                                    },
                                    "typeArguments": null,
                                    "start": 3399,
                                    "end": 3411
                                  },
                                  "start": 3397,
                                  "end": 3411
                                },
                                "start": 3391,
                                "end": 3411
                              },
                              "readonly": false,
                              "static": false,
                              "start": 3383,
                              "end": 3411
                            },
                            {
                              "type": "TSParameterProperty",
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3428,
                                      "end": 3440
                                    },
                                    "typeArguments": null,
                                    "start": 3428,
                                    "end": 3440
                                  },
                                  "start": 3426,
                                  "end": 3440
                                },
                                "start": 3420,
                                "end": 3440
                              },
                              "readonly": false,
                              "static": false,
                              "start": 3413,
                              "end": 3440
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3442,
                            "end": 3457
                          },
                          "expression": false,
                          "start": 3361,
                          "end": 3457
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3350,
                        "end": 3457
                      }
                    ],
                    "start": 3036,
                    "end": 3467
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 2989,
                  "end": 3467
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPublicParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3483,
                    "end": 3522
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3544,
                          "end": 3564
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3572,
                                    "end": 3583
                                  },
                                  "typeArguments": null,
                                  "start": 3572,
                                  "end": 3583
                                },
                                "start": 3570,
                                "end": 3583
                              },
                              "start": 3565,
                              "end": 3583
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3585,
                            "end": 3600
                          },
                          "expression": false,
                          "start": 3564,
                          "end": 3600
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3537,
                        "end": 3600
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3628,
                          "end": 3649
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3657,
                                    "end": 3668
                                  },
                                  "typeArguments": null,
                                  "start": 3657,
                                  "end": 3668
                                },
                                "start": 3655,
                                "end": 3668
                              },
                              "start": 3650,
                              "end": 3668
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3670,
                            "end": 3685
                          },
                          "expression": false,
                          "start": 3649,
                          "end": 3685
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3613,
                        "end": 3685
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3698,
                          "end": 3712
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3720,
                                    "end": 3731
                                  },
                                  "typeArguments": null,
                                  "start": 3720,
                                  "end": 3731
                                },
                                "start": 3718,
                                "end": 3731
                              },
                              "start": 3713,
                              "end": 3731
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3733,
                            "end": 3748
                          },
                          "expression": false,
                          "start": 3712,
                          "end": 3748
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3698,
                        "end": 3748
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3769,
                          "end": 3784
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3792,
                                    "end": 3803
                                  },
                                  "typeArguments": null,
                                  "start": 3792,
                                  "end": 3803
                                },
                                "start": 3790,
                                "end": 3803
                              },
                              "start": 3785,
                              "end": 3803
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3805,
                            "end": 3820
                          },
                          "expression": false,
                          "start": 3784,
                          "end": 3820
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3761,
                        "end": 3820
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3833,
                          "end": 3844
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3852,
                                    "end": 3863
                                  },
                                  "typeArguments": null,
                                  "start": 3852,
                                  "end": 3863
                                },
                                "start": 3850,
                                "end": 3863
                              },
                              "start": 3845,
                              "end": 3863
                            },
                            {
                              "type": "TSParameterProperty",
                              "accessibility": "private",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3881,
                                      "end": 3892
                                    },
                                    "typeArguments": null,
                                    "start": 3881,
                                    "end": 3892
                                  },
                                  "start": 3879,
                                  "end": 3892
                                },
                                "start": 3873,
                                "end": 3892
                              },
                              "readonly": false,
                              "static": false,
                              "start": 3865,
                              "end": 3892
                            },
                            {
                              "type": "TSParameterProperty",
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3909,
                                      "end": 3920
                                    },
                                    "typeArguments": null,
                                    "start": 3909,
                                    "end": 3920
                                  },
                                  "start": 3907,
                                  "end": 3920
                                },
                                "start": 3901,
                                "end": 3920
                              },
                              "readonly": false,
                              "static": false,
                              "start": 3894,
                              "end": 3920
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3922,
                            "end": 3937
                          },
                          "expression": false,
                          "start": 3844,
                          "end": 3937
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3833,
                        "end": 3937
                      }
                    ],
                    "start": 3523,
                    "end": 3947
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3477,
                  "end": 3947
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicFunctionWithPrivateParmeterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3973,
                      "end": 4011
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4019,
                              "end": 4031
                            },
                            "typeArguments": null,
                            "start": 4019,
                            "end": 4031
                          },
                          "start": 4017,
                          "end": 4031
                        },
                        "start": 4012,
                        "end": 4031
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4033,
                      "end": 4044
                    },
                    "expression": false,
                    "start": 3964,
                    "end": 4044
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3957,
                  "end": 4044
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicFunctionWithPublicParmeterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4069,
                      "end": 4106
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4114,
                              "end": 4125
                            },
                            "typeArguments": null,
                            "start": 4114,
                            "end": 4125
                          },
                          "start": 4112,
                          "end": 4125
                        },
                        "start": 4107,
                        "end": 4125
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4127,
                      "end": 4138
                    },
                    "expression": false,
                    "start": 4060,
                    "end": 4138
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 4053,
                  "end": 4138
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateFunctionWithPrivateParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4156,
                    "end": 4195
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4203,
                            "end": 4215
                          },
                          "typeArguments": null,
                          "start": 4203,
                          "end": 4215
                        },
                        "start": 4201,
                        "end": 4215
                      },
                      "start": 4196,
                      "end": 4215
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 4217,
                    "end": 4228
                  },
                  "expression": false,
                  "start": 4147,
                  "end": 4228
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateFunctionWithPublicParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4246,
                    "end": 4284
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4292,
                            "end": 4303
                          },
                          "typeArguments": null,
                          "start": 4292,
                          "end": 4303
                        },
                        "start": 4290,
                        "end": 4303
                      },
                      "start": 4285,
                      "end": 4303
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 4305,
                    "end": 4316
                  },
                  "expression": false,
                  "start": 4237,
                  "end": 4316
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicAmbientFunctionWithPrivateParmeterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4350,
                      "end": 4395
                    },
                    "generator": false,
                    "async": false,
                    "declare": true,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4403,
                              "end": 4415
                            },
                            "typeArguments": null,
                            "start": 4403,
                            "end": 4415
                          },
                          "start": 4401,
                          "end": 4415
                        },
                        "start": 4396,
                        "end": 4415
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 4418,
                        "end": 4422
                      },
                      "start": 4416,
                      "end": 4422
                    },
                    "body": null,
                    "expression": false,
                    "start": 4333,
                    "end": 4423
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 4326,
                  "end": 4423
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicAmbientFunctionWithPublicParmeterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4456,
                      "end": 4500
                    },
                    "generator": false,
                    "async": false,
                    "declare": true,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4508,
                              "end": 4519
                            },
                            "typeArguments": null,
                            "start": 4508,
                            "end": 4519
                          },
                          "start": 4506,
                          "end": 4519
                        },
                        "start": 4501,
                        "end": 4519
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 4522,
                        "end": 4526
                      },
                      "start": 4520,
                      "end": 4526
                    },
                    "body": null,
                    "expression": false,
                    "start": 4439,
                    "end": 4527
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 4432,
                  "end": 4527
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateAmbientFunctionWithPrivateParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4553,
                    "end": 4599
                  },
                  "generator": false,
                  "async": false,
                  "declare": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4607,
                            "end": 4619
                          },
                          "typeArguments": null,
                          "start": 4607,
                          "end": 4619
                        },
                        "start": 4605,
                        "end": 4619
                      },
                      "start": 4600,
                      "end": 4619
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 4622,
                      "end": 4626
                    },
                    "start": 4620,
                    "end": 4626
                  },
                  "body": null,
                  "expression": false,
                  "start": 4536,
                  "end": 4627
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateAmbientFunctionWithPublicParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4653,
                    "end": 4698
                  },
                  "generator": false,
                  "async": false,
                  "declare": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4706,
                            "end": 4717
                          },
                          "typeArguments": null,
                          "start": 4706,
                          "end": 4717
                        },
                        "start": 4704,
                        "end": 4717
                      },
                      "start": 4699,
                      "end": 4717
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 4720,
                      "end": 4724
                    },
                    "start": 4718,
                    "end": 4724
                  },
                  "body": null,
                  "expression": false,
                  "start": 4636,
                  "end": 4725
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPrivateModuleParameterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4752,
                      "end": 4798
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4825,
                                      "end": 4838
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4839,
                                      "end": 4850
                                    },
                                    "start": 4825,
                                    "end": 4850
                                  },
                                  "typeArguments": null,
                                  "start": 4825,
                                  "end": 4850
                                },
                                "start": 4823,
                                "end": 4850
                              },
                              "start": 4818,
                              "end": 4850
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4853,
                                "end": 4864
                              },
                              "typeArguments": null,
                              "start": 4853,
                              "end": 4864
                            },
                            "start": 4851,
                            "end": 4864
                          },
                          "start": 4813,
                          "end": 4865
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4886,
                                      "end": 4899
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4900,
                                      "end": 4911
                                    },
                                    "start": 4886,
                                    "end": 4911
                                  },
                                  "typeArguments": null,
                                  "start": 4886,
                                  "end": 4911
                                },
                                "start": 4884,
                                "end": 4911
                              },
                              "start": 4879,
                              "end": 4911
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4914,
                                "end": 4925
                              },
                              "typeArguments": null,
                              "start": 4914,
                              "end": 4925
                            },
                            "start": 4912,
                            "end": 4925
                          },
                          "start": 4878,
                          "end": 4926
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4939,
                            "end": 4947
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4955,
                                      "end": 4968
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4969,
                                      "end": 4980
                                    },
                                    "start": 4955,
                                    "end": 4980
                                  },
                                  "typeArguments": null,
                                  "start": 4955,
                                  "end": 4980
                                },
                                "start": 4953,
                                "end": 4980
                              },
                              "start": 4948,
                              "end": 4980
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 4983,
                              "end": 4987
                            },
                            "start": 4981,
                            "end": 4987
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 4939,
                          "end": 4988
                        }
                      ],
                      "start": 4799,
                      "end": 4998
                    },
                    "declare": false,
                    "start": 4742,
                    "end": 4998
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 4735,
                  "end": 4998
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithPrivateModuleParameterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5020,
                      "end": 5062
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5084,
                            "end": 5104
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5112,
                                        "end": 5125
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5126,
                                        "end": 5137
                                      },
                                      "start": 5112,
                                      "end": 5137
                                    },
                                    "typeArguments": null,
                                    "start": 5112,
                                    "end": 5137
                                  },
                                  "start": 5110,
                                  "end": 5137
                                },
                                "start": 5105,
                                "end": 5137
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5139,
                              "end": 5154
                            },
                            "expression": false,
                            "start": 5104,
                            "end": 5154
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5077,
                          "end": 5154
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5167,
                            "end": 5181
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5189,
                                        "end": 5202
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5203,
                                        "end": 5214
                                      },
                                      "start": 5189,
                                      "end": 5214
                                    },
                                    "typeArguments": null,
                                    "start": 5189,
                                    "end": 5214
                                  },
                                  "start": 5187,
                                  "end": 5214
                                },
                                "start": 5182,
                                "end": 5214
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5216,
                              "end": 5231
                            },
                            "expression": false,
                            "start": 5181,
                            "end": 5231
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5167,
                          "end": 5231
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "constructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5244,
                            "end": 5255
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5263,
                                        "end": 5276
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5277,
                                        "end": 5288
                                      },
                                      "start": 5263,
                                      "end": 5288
                                    },
                                    "typeArguments": null,
                                    "start": 5263,
                                    "end": 5288
                                  },
                                  "start": 5261,
                                  "end": 5288
                                },
                                "start": 5256,
                                "end": 5288
                              },
                              {
                                "type": "TSParameterProperty",
                                "accessibility": "private",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "privateModule",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5306,
                                          "end": 5319
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "publicClass",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5320,
                                          "end": 5331
                                        },
                                        "start": 5306,
                                        "end": 5331
                                      },
                                      "typeArguments": null,
                                      "start": 5306,
                                      "end": 5331
                                    },
                                    "start": 5304,
                                    "end": 5331
                                  },
                                  "start": 5298,
                                  "end": 5331
                                },
                                "readonly": false,
                                "static": false,
                                "start": 5290,
                                "end": 5331
                              },
                              {
                                "type": "TSParameterProperty",
                                "accessibility": "public",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "privateModule",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5348,
                                          "end": 5361
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "publicClass",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5362,
                                          "end": 5373
                                        },
                                        "start": 5348,
                                        "end": 5373
                                      },
                                      "typeArguments": null,
                                      "start": 5348,
                                      "end": 5373
                                    },
                                    "start": 5346,
                                    "end": 5373
                                  },
                                  "start": 5340,
                                  "end": 5373
                                },
                                "readonly": false,
                                "static": false,
                                "start": 5333,
                                "end": 5373
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5375,
                              "end": 5390
                            },
                            "expression": false,
                            "start": 5255,
                            "end": 5390
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5244,
                          "end": 5390
                        }
                      ],
                      "start": 5063,
                      "end": 5400
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 5014,
                    "end": 5400
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 5007,
                  "end": 5400
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicFunctionWithPrivateModuleParameterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5425,
                      "end": 5470
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5478,
                                "end": 5491
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5492,
                                "end": 5503
                              },
                              "start": 5478,
                              "end": 5503
                            },
                            "typeArguments": null,
                            "start": 5478,
                            "end": 5503
                          },
                          "start": 5476,
                          "end": 5503
                        },
                        "start": 5471,
                        "end": 5503
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5505,
                      "end": 5516
                    },
                    "expression": false,
                    "start": 5416,
                    "end": 5516
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 5409,
                  "end": 5516
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5549,
                      "end": 5601
                    },
                    "generator": false,
                    "async": false,
                    "declare": true,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5609,
                                "end": 5622
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5623,
                                "end": 5634
                              },
                              "start": 5609,
                              "end": 5634
                            },
                            "typeArguments": null,
                            "start": 5609,
                            "end": 5634
                          },
                          "start": 5607,
                          "end": 5634
                        },
                        "start": 5602,
                        "end": 5634
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5637,
                        "end": 5641
                      },
                      "start": 5635,
                      "end": 5641
                    },
                    "body": null,
                    "expression": false,
                    "start": 5532,
                    "end": 5642
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 5525,
                  "end": 5642
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivateModuleParameterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5662,
                    "end": 5709
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5736,
                                    "end": 5749
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5750,
                                    "end": 5761
                                  },
                                  "start": 5736,
                                  "end": 5761
                                },
                                "typeArguments": null,
                                "start": 5736,
                                "end": 5761
                              },
                              "start": 5734,
                              "end": 5761
                            },
                            "start": 5729,
                            "end": 5761
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5764,
                              "end": 5775
                            },
                            "typeArguments": null,
                            "start": 5764,
                            "end": 5775
                          },
                          "start": 5762,
                          "end": 5775
                        },
                        "start": 5724,
                        "end": 5776
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5797,
                                    "end": 5810
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5811,
                                    "end": 5822
                                  },
                                  "start": 5797,
                                  "end": 5822
                                },
                                "typeArguments": null,
                                "start": 5797,
                                "end": 5822
                              },
                              "start": 5795,
                              "end": 5822
                            },
                            "start": 5790,
                            "end": 5822
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5825,
                              "end": 5836
                            },
                            "typeArguments": null,
                            "start": 5825,
                            "end": 5836
                          },
                          "start": 5823,
                          "end": 5836
                        },
                        "start": 5789,
                        "end": 5837
                      },
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5850,
                          "end": 5858
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5866,
                                    "end": 5879
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5880,
                                    "end": 5891
                                  },
                                  "start": 5866,
                                  "end": 5891
                                },
                                "typeArguments": null,
                                "start": 5866,
                                "end": 5891
                              },
                              "start": 5864,
                              "end": 5891
                            },
                            "start": 5859,
                            "end": 5891
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 5894,
                            "end": 5898
                          },
                          "start": 5892,
                          "end": 5898
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 5850,
                        "end": 5899
                      }
                    ],
                    "start": 5710,
                    "end": 5909
                  },
                  "declare": false,
                  "start": 5652,
                  "end": 5909
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithPrivateModuleParameterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5924,
                    "end": 5967
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5989,
                          "end": 6009
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6017,
                                      "end": 6030
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6031,
                                      "end": 6042
                                    },
                                    "start": 6017,
                                    "end": 6042
                                  },
                                  "typeArguments": null,
                                  "start": 6017,
                                  "end": 6042
                                },
                                "start": 6015,
                                "end": 6042
                              },
                              "start": 6010,
                              "end": 6042
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6044,
                            "end": 6059
                          },
                          "expression": false,
                          "start": 6009,
                          "end": 6059
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 5982,
                        "end": 6059
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6072,
                          "end": 6086
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6094,
                                      "end": 6107
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6108,
                                      "end": 6119
                                    },
                                    "start": 6094,
                                    "end": 6119
                                  },
                                  "typeArguments": null,
                                  "start": 6094,
                                  "end": 6119
                                },
                                "start": 6092,
                                "end": 6119
                              },
                              "start": 6087,
                              "end": 6119
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6121,
                            "end": 6136
                          },
                          "expression": false,
                          "start": 6086,
                          "end": 6136
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 6072,
                        "end": 6136
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6149,
                          "end": 6160
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6168,
                                      "end": 6181
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6182,
                                      "end": 6193
                                    },
                                    "start": 6168,
                                    "end": 6193
                                  },
                                  "typeArguments": null,
                                  "start": 6168,
                                  "end": 6193
                                },
                                "start": 6166,
                                "end": 6193
                              },
                              "start": 6161,
                              "end": 6193
                            },
                            {
                              "type": "TSParameterProperty",
                              "accessibility": "private",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param1",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6211,
                                        "end": 6224
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6225,
                                        "end": 6236
                                      },
                                      "start": 6211,
                                      "end": 6236
                                    },
                                    "typeArguments": null,
                                    "start": 6211,
                                    "end": 6236
                                  },
                                  "start": 6209,
                                  "end": 6236
                                },
                                "start": 6203,
                                "end": 6236
                              },
                              "readonly": false,
                              "static": false,
                              "start": 6195,
                              "end": 6236
                            },
                            {
                              "type": "TSParameterProperty",
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param2",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6253,
                                        "end": 6266
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6267,
                                        "end": 6278
                                      },
                                      "start": 6253,
                                      "end": 6278
                                    },
                                    "typeArguments": null,
                                    "start": 6253,
                                    "end": 6278
                                  },
                                  "start": 6251,
                                  "end": 6278
                                },
                                "start": 6245,
                                "end": 6278
                              },
                              "readonly": false,
                              "static": false,
                              "start": 6238,
                              "end": 6278
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6280,
                            "end": 6295
                          },
                          "expression": false,
                          "start": 6160,
                          "end": 6295
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 6149,
                        "end": 6295
                      }
                    ],
                    "start": 5968,
                    "end": 6305
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 5918,
                  "end": 6305
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateFunctionWithPrivateModuleParameterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6323,
                    "end": 6369
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6377,
                              "end": 6390
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6391,
                              "end": 6402
                            },
                            "start": 6377,
                            "end": 6402
                          },
                          "typeArguments": null,
                          "start": 6377,
                          "end": 6402
                        },
                        "start": 6375,
                        "end": 6402
                      },
                      "start": 6370,
                      "end": 6402
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 6404,
                    "end": 6415
                  },
                  "expression": false,
                  "start": 6314,
                  "end": 6415
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6441,
                    "end": 6494
                  },
                  "generator": false,
                  "async": false,
                  "declare": true,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6502,
                              "end": 6515
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6516,
                              "end": 6527
                            },
                            "start": 6502,
                            "end": 6527
                          },
                          "typeArguments": null,
                          "start": 6502,
                          "end": 6527
                        },
                        "start": 6500,
                        "end": 6527
                      },
                      "start": 6495,
                      "end": 6527
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 6530,
                      "end": 6534
                    },
                    "start": 6528,
                    "end": 6534
                  },
                  "body": null,
                  "expression": false,
                  "start": 6424,
                  "end": 6535
                }
              ],
              "start": 1023,
              "end": 6541
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 999,
            "end": 6541
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6564,
                "end": 6603
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6626,
                              "end": 6638
                            },
                            "typeArguments": null,
                            "start": 6626,
                            "end": 6638
                          },
                          "start": 6624,
                          "end": 6638
                        },
                        "start": 6619,
                        "end": 6638
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6641,
                          "end": 6652
                        },
                        "typeArguments": null,
                        "start": 6641,
                        "end": 6652
                      },
                      "start": 6639,
                      "end": 6652
                    },
                    "start": 6614,
                    "end": 6653
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6679,
                              "end": 6691
                            },
                            "typeArguments": null,
                            "start": 6679,
                            "end": 6691
                          },
                          "start": 6677,
                          "end": 6691
                        },
                        "start": 6672,
                        "end": 6691
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6694,
                          "end": 6705
                        },
                        "typeArguments": null,
                        "start": 6694,
                        "end": 6705
                      },
                      "start": 6692,
                      "end": 6705
                    },
                    "start": 6671,
                    "end": 6706
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6724,
                      "end": 6732
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6740,
                              "end": 6752
                            },
                            "typeArguments": null,
                            "start": 6740,
                            "end": 6752
                          },
                          "start": 6738,
                          "end": 6752
                        },
                        "start": 6733,
                        "end": 6752
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 6755,
                        "end": 6759
                      },
                      "start": 6753,
                      "end": 6759
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 6724,
                    "end": 6760
                  }
                ],
                "start": 6604,
                "end": 6775
              },
              "declare": false,
              "start": 6554,
              "end": 6775
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6547,
            "end": 6775
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6798,
                "end": 6836
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6859,
                              "end": 6870
                            },
                            "typeArguments": null,
                            "start": 6859,
                            "end": 6870
                          },
                          "start": 6857,
                          "end": 6870
                        },
                        "start": 6852,
                        "end": 6870
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6873,
                          "end": 6884
                        },
                        "typeArguments": null,
                        "start": 6873,
                        "end": 6884
                      },
                      "start": 6871,
                      "end": 6884
                    },
                    "start": 6847,
                    "end": 6885
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6902,
                              "end": 6913
                            },
                            "typeArguments": null,
                            "start": 6902,
                            "end": 6913
                          },
                          "start": 6900,
                          "end": 6913
                        },
                        "start": 6895,
                        "end": 6913
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6916,
                          "end": 6927
                        },
                        "typeArguments": null,
                        "start": 6916,
                        "end": 6927
                      },
                      "start": 6914,
                      "end": 6927
                    },
                    "start": 6894,
                    "end": 6928
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6937,
                      "end": 6945
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6953,
                              "end": 6964
                            },
                            "typeArguments": null,
                            "start": 6953,
                            "end": 6964
                          },
                          "start": 6951,
                          "end": 6964
                        },
                        "start": 6946,
                        "end": 6964
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 6967,
                        "end": 6971
                      },
                      "start": 6965,
                      "end": 6971
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 6937,
                    "end": 6972
                  }
                ],
                "start": 6837,
                "end": 6978
              },
              "declare": false,
              "start": 6788,
              "end": 6978
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6781,
            "end": 6978
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6994,
              "end": 7034
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7057,
                            "end": 7069
                          },
                          "typeArguments": null,
                          "start": 7057,
                          "end": 7069
                        },
                        "start": 7055,
                        "end": 7069
                      },
                      "start": 7050,
                      "end": 7069
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7072,
                        "end": 7084
                      },
                      "typeArguments": null,
                      "start": 7072,
                      "end": 7084
                    },
                    "start": 7070,
                    "end": 7084
                  },
                  "start": 7045,
                  "end": 7085
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7102,
                            "end": 7114
                          },
                          "typeArguments": null,
                          "start": 7102,
                          "end": 7114
                        },
                        "start": 7100,
                        "end": 7114
                      },
                      "start": 7095,
                      "end": 7114
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7117,
                        "end": 7129
                      },
                      "typeArguments": null,
                      "start": 7117,
                      "end": 7129
                    },
                    "start": 7115,
                    "end": 7129
                  },
                  "start": 7094,
                  "end": 7130
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7139,
                    "end": 7147
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7155,
                            "end": 7167
                          },
                          "typeArguments": null,
                          "start": 7155,
                          "end": 7167
                        },
                        "start": 7153,
                        "end": 7167
                      },
                      "start": 7148,
                      "end": 7167
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7170,
                      "end": 7174
                    },
                    "start": 7168,
                    "end": 7174
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7139,
                  "end": 7175
                }
              ],
              "start": 7035,
              "end": 7181
            },
            "declare": false,
            "start": 6984,
            "end": 7181
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 7197,
              "end": 7236
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7259,
                            "end": 7270
                          },
                          "typeArguments": null,
                          "start": 7259,
                          "end": 7270
                        },
                        "start": 7257,
                        "end": 7270
                      },
                      "start": 7252,
                      "end": 7270
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7273,
                        "end": 7284
                      },
                      "typeArguments": null,
                      "start": 7273,
                      "end": 7284
                    },
                    "start": 7271,
                    "end": 7284
                  },
                  "start": 7247,
                  "end": 7285
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7302,
                            "end": 7313
                          },
                          "typeArguments": null,
                          "start": 7302,
                          "end": 7313
                        },
                        "start": 7300,
                        "end": 7313
                      },
                      "start": 7295,
                      "end": 7313
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7316,
                        "end": 7327
                      },
                      "typeArguments": null,
                      "start": 7316,
                      "end": 7327
                    },
                    "start": 7314,
                    "end": 7327
                  },
                  "start": 7294,
                  "end": 7328
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7337,
                    "end": 7345
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7353,
                            "end": 7364
                          },
                          "typeArguments": null,
                          "start": 7353,
                          "end": 7364
                        },
                        "start": 7351,
                        "end": 7364
                      },
                      "start": 7346,
                      "end": 7364
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7367,
                      "end": 7371
                    },
                    "start": 7365,
                    "end": 7371
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7337,
                  "end": 7372
                }
              ],
              "start": 7237,
              "end": 7378
            },
            "declare": false,
            "start": 7187,
            "end": 7378
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7397,
                "end": 7436
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7454,
                      "end": 7474
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7482,
                                "end": 7494
                              },
                              "typeArguments": null,
                              "start": 7482,
                              "end": 7494
                            },
                            "start": 7480,
                            "end": 7494
                          },
                          "start": 7475,
                          "end": 7494
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7496,
                        "end": 7516
                      },
                      "expression": false,
                      "start": 7474,
                      "end": 7516
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7447,
                    "end": 7516
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7540,
                      "end": 7561
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7569,
                                "end": 7581
                              },
                              "typeArguments": null,
                              "start": 7569,
                              "end": 7581
                            },
                            "start": 7567,
                            "end": 7581
                          },
                          "start": 7562,
                          "end": 7581
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7583,
                        "end": 7594
                      },
                      "expression": false,
                      "start": 7561,
                      "end": 7594
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7525,
                    "end": 7594
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7603,
                      "end": 7617
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7625,
                                "end": 7637
                              },
                              "typeArguments": null,
                              "start": 7625,
                              "end": 7637
                            },
                            "start": 7623,
                            "end": 7637
                          },
                          "start": 7618,
                          "end": 7637
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7639,
                        "end": 7659
                      },
                      "expression": false,
                      "start": 7617,
                      "end": 7659
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7603,
                    "end": 7659
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7676,
                      "end": 7691
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7699,
                                "end": 7711
                              },
                              "typeArguments": null,
                              "start": 7699,
                              "end": 7711
                            },
                            "start": 7697,
                            "end": 7711
                          },
                          "start": 7692,
                          "end": 7711
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7713,
                        "end": 7724
                      },
                      "expression": false,
                      "start": 7691,
                      "end": 7724
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7668,
                    "end": 7724
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7733,
                      "end": 7744
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7752,
                                "end": 7764
                              },
                              "typeArguments": null,
                              "start": 7752,
                              "end": 7764
                            },
                            "start": 7750,
                            "end": 7764
                          },
                          "start": 7745,
                          "end": 7764
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7782,
                                  "end": 7794
                                },
                                "typeArguments": null,
                                "start": 7782,
                                "end": 7794
                              },
                              "start": 7780,
                              "end": 7794
                            },
                            "start": 7774,
                            "end": 7794
                          },
                          "readonly": false,
                          "static": false,
                          "start": 7766,
                          "end": 7794
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7811,
                                  "end": 7823
                                },
                                "typeArguments": null,
                                "start": 7811,
                                "end": 7823
                              },
                              "start": 7809,
                              "end": 7823
                            },
                            "start": 7803,
                            "end": 7823
                          },
                          "readonly": false,
                          "static": false,
                          "start": 7796,
                          "end": 7823
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7825,
                        "end": 7845
                      },
                      "expression": false,
                      "start": 7744,
                      "end": 7845
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7733,
                    "end": 7845
                  }
                ],
                "start": 7437,
                "end": 7851
              },
              "abstract": false,
              "declare": false,
              "start": 7391,
              "end": 7851
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7384,
            "end": 7851
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7870,
                "end": 7908
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7926,
                      "end": 7946
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7954,
                                "end": 7965
                              },
                              "typeArguments": null,
                              "start": 7954,
                              "end": 7965
                            },
                            "start": 7952,
                            "end": 7965
                          },
                          "start": 7947,
                          "end": 7965
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7967,
                        "end": 7978
                      },
                      "expression": false,
                      "start": 7946,
                      "end": 7978
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7919,
                    "end": 7978
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8002,
                      "end": 8023
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8031,
                                "end": 8042
                              },
                              "typeArguments": null,
                              "start": 8031,
                              "end": 8042
                            },
                            "start": 8029,
                            "end": 8042
                          },
                          "start": 8024,
                          "end": 8042
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8044,
                        "end": 8055
                      },
                      "expression": false,
                      "start": 8023,
                      "end": 8055
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7987,
                    "end": 8055
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8064,
                      "end": 8078
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8086,
                                "end": 8097
                              },
                              "typeArguments": null,
                              "start": 8086,
                              "end": 8097
                            },
                            "start": 8084,
                            "end": 8097
                          },
                          "start": 8079,
                          "end": 8097
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8099,
                        "end": 8110
                      },
                      "expression": false,
                      "start": 8078,
                      "end": 8110
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8064,
                    "end": 8110
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8127,
                      "end": 8142
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8150,
                                "end": 8161
                              },
                              "typeArguments": null,
                              "start": 8150,
                              "end": 8161
                            },
                            "start": 8148,
                            "end": 8161
                          },
                          "start": 8143,
                          "end": 8161
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8163,
                        "end": 8174
                      },
                      "expression": false,
                      "start": 8142,
                      "end": 8174
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8119,
                    "end": 8174
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8183,
                      "end": 8194
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8202,
                                "end": 8213
                              },
                              "typeArguments": null,
                              "start": 8202,
                              "end": 8213
                            },
                            "start": 8200,
                            "end": 8213
                          },
                          "start": 8195,
                          "end": 8213
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8231,
                                  "end": 8242
                                },
                                "typeArguments": null,
                                "start": 8231,
                                "end": 8242
                              },
                              "start": 8229,
                              "end": 8242
                            },
                            "start": 8223,
                            "end": 8242
                          },
                          "readonly": false,
                          "static": false,
                          "start": 8215,
                          "end": 8242
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8259,
                                  "end": 8270
                                },
                                "typeArguments": null,
                                "start": 8259,
                                "end": 8270
                              },
                              "start": 8257,
                              "end": 8270
                            },
                            "start": 8251,
                            "end": 8270
                          },
                          "readonly": false,
                          "static": false,
                          "start": 8244,
                          "end": 8270
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8272,
                        "end": 8283
                      },
                      "expression": false,
                      "start": 8194,
                      "end": 8283
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8183,
                    "end": 8283
                  }
                ],
                "start": 7909,
                "end": 8289
              },
              "abstract": false,
              "declare": false,
              "start": 7864,
              "end": 8289
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7857,
            "end": 8289
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 8301,
              "end": 8341
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8359,
                    "end": 8379
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8387,
                              "end": 8399
                            },
                            "typeArguments": null,
                            "start": 8387,
                            "end": 8399
                          },
                          "start": 8385,
                          "end": 8399
                        },
                        "start": 8380,
                        "end": 8399
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8401,
                      "end": 8412
                    },
                    "expression": false,
                    "start": 8379,
                    "end": 8412
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8352,
                  "end": 8412
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8436,
                    "end": 8457
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8465,
                              "end": 8477
                            },
                            "typeArguments": null,
                            "start": 8465,
                            "end": 8477
                          },
                          "start": 8463,
                          "end": 8477
                        },
                        "start": 8458,
                        "end": 8477
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8479,
                      "end": 8490
                    },
                    "expression": false,
                    "start": 8457,
                    "end": 8490
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 8421,
                  "end": 8490
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8499,
                    "end": 8513
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8521,
                              "end": 8533
                            },
                            "typeArguments": null,
                            "start": 8521,
                            "end": 8533
                          },
                          "start": 8519,
                          "end": 8533
                        },
                        "start": 8514,
                        "end": 8533
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8535,
                      "end": 8546
                    },
                    "expression": false,
                    "start": 8513,
                    "end": 8546
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8499,
                  "end": 8546
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8563,
                    "end": 8578
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8586,
                              "end": 8598
                            },
                            "typeArguments": null,
                            "start": 8586,
                            "end": 8598
                          },
                          "start": 8584,
                          "end": 8598
                        },
                        "start": 8579,
                        "end": 8598
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8600,
                      "end": 8611
                    },
                    "expression": false,
                    "start": 8578,
                    "end": 8611
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 8555,
                  "end": 8611
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8620,
                    "end": 8631
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8639,
                              "end": 8651
                            },
                            "typeArguments": null,
                            "start": 8639,
                            "end": 8651
                          },
                          "start": 8637,
                          "end": 8651
                        },
                        "start": 8632,
                        "end": 8651
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8669,
                                "end": 8681
                              },
                              "typeArguments": null,
                              "start": 8669,
                              "end": 8681
                            },
                            "start": 8667,
                            "end": 8681
                          },
                          "start": 8661,
                          "end": 8681
                        },
                        "readonly": false,
                        "static": false,
                        "start": 8653,
                        "end": 8681
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8698,
                                "end": 8710
                              },
                              "typeArguments": null,
                              "start": 8698,
                              "end": 8710
                            },
                            "start": 8696,
                            "end": 8710
                          },
                          "start": 8690,
                          "end": 8710
                        },
                        "readonly": false,
                        "static": false,
                        "start": 8683,
                        "end": 8710
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8712,
                      "end": 8723
                    },
                    "expression": false,
                    "start": 8631,
                    "end": 8723
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8620,
                  "end": 8723
                }
              ],
              "start": 8342,
              "end": 8729
            },
            "abstract": false,
            "declare": false,
            "start": 8295,
            "end": 8729
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 8741,
              "end": 8780
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8798,
                    "end": 8818
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8826,
                              "end": 8837
                            },
                            "typeArguments": null,
                            "start": 8826,
                            "end": 8837
                          },
                          "start": 8824,
                          "end": 8837
                        },
                        "start": 8819,
                        "end": 8837
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8839,
                      "end": 8850
                    },
                    "expression": false,
                    "start": 8818,
                    "end": 8850
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8791,
                  "end": 8850
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8874,
                    "end": 8895
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8903,
                              "end": 8914
                            },
                            "typeArguments": null,
                            "start": 8903,
                            "end": 8914
                          },
                          "start": 8901,
                          "end": 8914
                        },
                        "start": 8896,
                        "end": 8914
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8916,
                      "end": 8927
                    },
                    "expression": false,
                    "start": 8895,
                    "end": 8927
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 8859,
                  "end": 8927
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8936,
                    "end": 8950
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8958,
                              "end": 8969
                            },
                            "typeArguments": null,
                            "start": 8958,
                            "end": 8969
                          },
                          "start": 8956,
                          "end": 8969
                        },
                        "start": 8951,
                        "end": 8969
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8971,
                      "end": 8982
                    },
                    "expression": false,
                    "start": 8950,
                    "end": 8982
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8936,
                  "end": 8982
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8999,
                    "end": 9014
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9022,
                              "end": 9033
                            },
                            "typeArguments": null,
                            "start": 9022,
                            "end": 9033
                          },
                          "start": 9020,
                          "end": 9033
                        },
                        "start": 9015,
                        "end": 9033
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 9035,
                      "end": 9046
                    },
                    "expression": false,
                    "start": 9014,
                    "end": 9046
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 8991,
                  "end": 9046
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9055,
                    "end": 9066
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9074,
                              "end": 9085
                            },
                            "typeArguments": null,
                            "start": 9074,
                            "end": 9085
                          },
                          "start": 9072,
                          "end": 9085
                        },
                        "start": 9067,
                        "end": 9085
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9103,
                                "end": 9114
                              },
                              "typeArguments": null,
                              "start": 9103,
                              "end": 9114
                            },
                            "start": 9101,
                            "end": 9114
                          },
                          "start": 9095,
                          "end": 9114
                        },
                        "readonly": false,
                        "static": false,
                        "start": 9087,
                        "end": 9114
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9131,
                                "end": 9142
                              },
                              "typeArguments": null,
                              "start": 9131,
                              "end": 9142
                            },
                            "start": 9129,
                            "end": 9142
                          },
                          "start": 9123,
                          "end": 9142
                        },
                        "readonly": false,
                        "static": false,
                        "start": 9116,
                        "end": 9142
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 9144,
                      "end": 9155
                    },
                    "expression": false,
                    "start": 9066,
                    "end": 9155
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 9055,
                  "end": 9155
                }
              ],
              "start": 8781,
              "end": 9161
            },
            "abstract": false,
            "declare": false,
            "start": 8735,
            "end": 9161
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9183,
                "end": 9221
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9229,
                        "end": 9241
                      },
                      "typeArguments": null,
                      "start": 9229,
                      "end": 9241
                    },
                    "start": 9227,
                    "end": 9241
                  },
                  "start": 9222,
                  "end": 9241
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9243,
                "end": 9259
              },
              "expression": false,
              "start": 9174,
              "end": 9259
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 9167,
            "end": 9259
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9280,
                "end": 9317
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9325,
                        "end": 9336
                      },
                      "typeArguments": null,
                      "start": 9325,
                      "end": 9336
                    },
                    "start": 9323,
                    "end": 9336
                  },
                  "start": 9318,
                  "end": 9336
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9338,
                "end": 9345
              },
              "expression": false,
              "start": 9271,
              "end": 9345
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 9264,
            "end": 9345
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9359,
              "end": 9398
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9406,
                      "end": 9418
                    },
                    "typeArguments": null,
                    "start": 9406,
                    "end": 9418
                  },
                  "start": 9404,
                  "end": 9418
                },
                "start": 9399,
                "end": 9418
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 9420,
              "end": 9427
            },
            "expression": false,
            "start": 9350,
            "end": 9427
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9441,
              "end": 9479
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9487,
                      "end": 9498
                    },
                    "typeArguments": null,
                    "start": 9487,
                    "end": 9498
                  },
                  "start": 9485,
                  "end": 9498
                },
                "start": 9480,
                "end": 9498
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 9500,
              "end": 9507
            },
            "expression": false,
            "start": 9432,
            "end": 9507
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicAmbientFunctionWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9537,
                "end": 9582
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9590,
                        "end": 9602
                      },
                      "typeArguments": null,
                      "start": 9590,
                      "end": 9602
                    },
                    "start": 9588,
                    "end": 9602
                  },
                  "start": 9583,
                  "end": 9602
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9605,
                  "end": 9609
                },
                "start": 9603,
                "end": 9609
              },
              "body": null,
              "expression": false,
              "start": 9520,
              "end": 9610
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 9513,
            "end": 9610
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicAmbientFunctionWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9648,
                "end": 9692
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9700,
                        "end": 9711
                      },
                      "typeArguments": null,
                      "start": 9700,
                      "end": 9711
                    },
                    "start": 9698,
                    "end": 9711
                  },
                  "start": 9693,
                  "end": 9711
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9714,
                  "end": 9718
                },
                "start": 9712,
                "end": 9718
              },
              "body": null,
              "expression": false,
              "start": 9631,
              "end": 9719
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 9624,
            "end": 9719
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9741,
              "end": 9787
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9795,
                      "end": 9807
                    },
                    "typeArguments": null,
                    "start": 9795,
                    "end": 9807
                  },
                  "start": 9793,
                  "end": 9807
                },
                "start": 9788,
                "end": 9807
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 9810,
                "end": 9814
              },
              "start": 9808,
              "end": 9814
            },
            "body": null,
            "expression": false,
            "start": 9724,
            "end": 9815
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9837,
              "end": 9882
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9890,
                      "end": 9901
                    },
                    "typeArguments": null,
                    "start": 9890,
                    "end": 9901
                  },
                  "start": 9888,
                  "end": 9901
                },
                "start": 9883,
                "end": 9901
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 9904,
                "end": 9908
              },
              "start": 9902,
              "end": 9908
            },
            "body": null,
            "expression": false,
            "start": 9820,
            "end": 9909
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9932,
                "end": 9978
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10001,
                                "end": 10014
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10015,
                                "end": 10026
                              },
                              "start": 10001,
                              "end": 10026
                            },
                            "typeArguments": null,
                            "start": 10001,
                            "end": 10026
                          },
                          "start": 9999,
                          "end": 10026
                        },
                        "start": 9994,
                        "end": 10026
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10029,
                          "end": 10040
                        },
                        "typeArguments": null,
                        "start": 10029,
                        "end": 10040
                      },
                      "start": 10027,
                      "end": 10040
                    },
                    "start": 9989,
                    "end": 10041
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10067,
                                "end": 10080
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10081,
                                "end": 10092
                              },
                              "start": 10067,
                              "end": 10092
                            },
                            "typeArguments": null,
                            "start": 10067,
                            "end": 10092
                          },
                          "start": 10065,
                          "end": 10092
                        },
                        "start": 10060,
                        "end": 10092
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10095,
                          "end": 10106
                        },
                        "typeArguments": null,
                        "start": 10095,
                        "end": 10106
                      },
                      "start": 10093,
                      "end": 10106
                    },
                    "start": 10059,
                    "end": 10107
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10125,
                      "end": 10133
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10141,
                                "end": 10154
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10155,
                                "end": 10166
                              },
                              "start": 10141,
                              "end": 10166
                            },
                            "typeArguments": null,
                            "start": 10141,
                            "end": 10166
                          },
                          "start": 10139,
                          "end": 10166
                        },
                        "start": 10134,
                        "end": 10166
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10169,
                        "end": 10173
                      },
                      "start": 10167,
                      "end": 10173
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10125,
                    "end": 10174
                  }
                ],
                "start": 9979,
                "end": 10189
              },
              "declare": false,
              "start": 9922,
              "end": 10189
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 9915,
            "end": 10189
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 10207,
                "end": 10249
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10267,
                      "end": 10287
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10295,
                                  "end": 10308
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10309,
                                  "end": 10320
                                },
                                "start": 10295,
                                "end": 10320
                              },
                              "typeArguments": null,
                              "start": 10295,
                              "end": 10320
                            },
                            "start": 10293,
                            "end": 10320
                          },
                          "start": 10288,
                          "end": 10320
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10322,
                        "end": 10342
                      },
                      "expression": false,
                      "start": 10287,
                      "end": 10342
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10260,
                    "end": 10342
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10351,
                      "end": 10365
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10373,
                                  "end": 10386
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10387,
                                  "end": 10398
                                },
                                "start": 10373,
                                "end": 10398
                              },
                              "typeArguments": null,
                              "start": 10373,
                              "end": 10398
                            },
                            "start": 10371,
                            "end": 10398
                          },
                          "start": 10366,
                          "end": 10398
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10400,
                        "end": 10420
                      },
                      "expression": false,
                      "start": 10365,
                      "end": 10420
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10351,
                    "end": 10420
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10429,
                      "end": 10440
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10448,
                                  "end": 10461
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10462,
                                  "end": 10473
                                },
                                "start": 10448,
                                "end": 10473
                              },
                              "typeArguments": null,
                              "start": 10448,
                              "end": 10473
                            },
                            "start": 10446,
                            "end": 10473
                          },
                          "start": 10441,
                          "end": 10473
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10491,
                                    "end": 10504
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10505,
                                    "end": 10516
                                  },
                                  "start": 10491,
                                  "end": 10516
                                },
                                "typeArguments": null,
                                "start": 10491,
                                "end": 10516
                              },
                              "start": 10489,
                              "end": 10516
                            },
                            "start": 10483,
                            "end": 10516
                          },
                          "readonly": false,
                          "static": false,
                          "start": 10475,
                          "end": 10516
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10533,
                                    "end": 10546
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10547,
                                    "end": 10558
                                  },
                                  "start": 10533,
                                  "end": 10558
                                },
                                "typeArguments": null,
                                "start": 10533,
                                "end": 10558
                              },
                              "start": 10531,
                              "end": 10558
                            },
                            "start": 10525,
                            "end": 10558
                          },
                          "readonly": false,
                          "static": false,
                          "start": 10518,
                          "end": 10558
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10560,
                        "end": 10580
                      },
                      "expression": false,
                      "start": 10440,
                      "end": 10580
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10429,
                    "end": 10580
                  }
                ],
                "start": 10250,
                "end": 10586
              },
              "abstract": false,
              "declare": false,
              "start": 10201,
              "end": 10586
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10194,
            "end": 10586
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 10607,
                "end": 10652
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10660,
                          "end": 10673
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10674,
                          "end": 10685
                        },
                        "start": 10660,
                        "end": 10685
                      },
                      "typeArguments": null,
                      "start": 10660,
                      "end": 10685
                    },
                    "start": 10658,
                    "end": 10685
                  },
                  "start": 10653,
                  "end": 10685
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 10687,
                "end": 10703
              },
              "expression": false,
              "start": 10598,
              "end": 10703
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10591,
            "end": 10703
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 10732,
                "end": 10784
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10792,
                          "end": 10805
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10806,
                          "end": 10817
                        },
                        "start": 10792,
                        "end": 10817
                      },
                      "typeArguments": null,
                      "start": 10792,
                      "end": 10817
                    },
                    "start": 10790,
                    "end": 10817
                  },
                  "start": 10785,
                  "end": 10817
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 10820,
                  "end": 10824
                },
                "start": 10818,
                "end": 10824
              },
              "body": null,
              "expression": false,
              "start": 10715,
              "end": 10825
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10708,
            "end": 10825
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 10850,
              "end": 10897
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10920,
                              "end": 10933
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10934,
                              "end": 10945
                            },
                            "start": 10920,
                            "end": 10945
                          },
                          "typeArguments": null,
                          "start": 10920,
                          "end": 10945
                        },
                        "start": 10918,
                        "end": 10945
                      },
                      "start": 10913,
                      "end": 10945
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10948,
                        "end": 10959
                      },
                      "typeArguments": null,
                      "start": 10948,
                      "end": 10959
                    },
                    "start": 10946,
                    "end": 10959
                  },
                  "start": 10908,
                  "end": 10960
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10977,
                              "end": 10990
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10991,
                              "end": 11002
                            },
                            "start": 10977,
                            "end": 11002
                          },
                          "typeArguments": null,
                          "start": 10977,
                          "end": 11002
                        },
                        "start": 10975,
                        "end": 11002
                      },
                      "start": 10970,
                      "end": 11002
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11005,
                        "end": 11016
                      },
                      "typeArguments": null,
                      "start": 11005,
                      "end": 11016
                    },
                    "start": 11003,
                    "end": 11016
                  },
                  "start": 10969,
                  "end": 11017
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11026,
                    "end": 11034
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11042,
                              "end": 11055
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11056,
                              "end": 11067
                            },
                            "start": 11042,
                            "end": 11067
                          },
                          "typeArguments": null,
                          "start": 11042,
                          "end": 11067
                        },
                        "start": 11040,
                        "end": 11067
                      },
                      "start": 11035,
                      "end": 11067
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 11070,
                      "end": 11074
                    },
                    "start": 11068,
                    "end": 11074
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 11026,
                  "end": 11075
                }
              ],
              "start": 10898,
              "end": 11081
            },
            "declare": false,
            "start": 10840,
            "end": 11081
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 11092,
              "end": 11135
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11153,
                    "end": 11173
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11181,
                                "end": 11194
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11195,
                                "end": 11206
                              },
                              "start": 11181,
                              "end": 11206
                            },
                            "typeArguments": null,
                            "start": 11181,
                            "end": 11206
                          },
                          "start": 11179,
                          "end": 11206
                        },
                        "start": 11174,
                        "end": 11206
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11208,
                      "end": 11219
                    },
                    "expression": false,
                    "start": 11173,
                    "end": 11219
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11146,
                  "end": 11219
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11228,
                    "end": 11242
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11250,
                                "end": 11263
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11264,
                                "end": 11275
                              },
                              "start": 11250,
                              "end": 11275
                            },
                            "typeArguments": null,
                            "start": 11250,
                            "end": 11275
                          },
                          "start": 11248,
                          "end": 11275
                        },
                        "start": 11243,
                        "end": 11275
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11277,
                      "end": 11288
                    },
                    "expression": false,
                    "start": 11242,
                    "end": 11288
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11228,
                  "end": 11288
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11297,
                    "end": 11308
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11316,
                                "end": 11329
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11330,
                                "end": 11341
                              },
                              "start": 11316,
                              "end": 11341
                            },
                            "typeArguments": null,
                            "start": 11316,
                            "end": 11341
                          },
                          "start": 11314,
                          "end": 11341
                        },
                        "start": 11309,
                        "end": 11341
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11359,
                                  "end": 11372
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11373,
                                  "end": 11384
                                },
                                "start": 11359,
                                "end": 11384
                              },
                              "typeArguments": null,
                              "start": 11359,
                              "end": 11384
                            },
                            "start": 11357,
                            "end": 11384
                          },
                          "start": 11351,
                          "end": 11384
                        },
                        "readonly": false,
                        "static": false,
                        "start": 11343,
                        "end": 11384
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11401,
                                  "end": 11414
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11415,
                                  "end": 11426
                                },
                                "start": 11401,
                                "end": 11426
                              },
                              "typeArguments": null,
                              "start": 11401,
                              "end": 11426
                            },
                            "start": 11399,
                            "end": 11426
                          },
                          "start": 11393,
                          "end": 11426
                        },
                        "readonly": false,
                        "static": false,
                        "start": 11386,
                        "end": 11426
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11428,
                      "end": 11439
                    },
                    "expression": false,
                    "start": 11308,
                    "end": 11439
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11297,
                  "end": 11439
                }
              ],
              "start": 11136,
              "end": 11445
            },
            "abstract": false,
            "declare": false,
            "start": 11086,
            "end": 11445
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 11459,
              "end": 11505
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11513,
                        "end": 11526
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11527,
                        "end": 11538
                      },
                      "start": 11513,
                      "end": 11538
                    },
                    "typeArguments": null,
                    "start": 11513,
                    "end": 11538
                  },
                  "start": 11511,
                  "end": 11538
                },
                "start": 11506,
                "end": 11538
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 11540,
              "end": 11547
            },
            "expression": false,
            "start": 11450,
            "end": 11547
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 11569,
              "end": 11622
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11630,
                        "end": 11643
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11644,
                        "end": 11655
                      },
                      "start": 11630,
                      "end": 11655
                    },
                    "typeArguments": null,
                    "start": 11630,
                    "end": 11655
                  },
                  "start": 11628,
                  "end": 11655
                },
                "start": 11623,
                "end": 11655
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 11658,
                "end": 11662
              },
              "start": 11656,
              "end": 11662
            },
            "body": null,
            "expression": false,
            "start": 11552,
            "end": 11663
          }
        ],
        "start": 923,
        "end": 11665
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 892,
      "end": 11665
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 11665
}
```
