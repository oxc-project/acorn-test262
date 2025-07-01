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
          "start": 4743,
          "end": 4755
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
                "start": 4768,
                "end": 4780
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4781,
                "end": 4788
              },
              "abstract": false,
              "declare": false,
              "start": 4762,
              "end": 4788
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
                  "start": 4807,
                  "end": 4818
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 4819,
                  "end": 4826
                },
                "abstract": false,
                "declare": false,
                "start": 4801,
                "end": 4826
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 4794,
              "end": 4826
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
                  "start": 4850,
                  "end": 4889
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
                                "start": 4912,
                                "end": 4924
                              },
                              "typeArguments": null,
                              "start": 4912,
                              "end": 4924
                            },
                            "start": 4910,
                            "end": 4924
                          },
                          "start": 4905,
                          "end": 4924
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
                            "start": 4927,
                            "end": 4938
                          },
                          "typeArguments": null,
                          "start": 4927,
                          "end": 4938
                        },
                        "start": 4925,
                        "end": 4938
                      },
                      "start": 4900,
                      "end": 4939
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
                                "start": 4965,
                                "end": 4977
                              },
                              "typeArguments": null,
                              "start": 4965,
                              "end": 4977
                            },
                            "start": 4963,
                            "end": 4977
                          },
                          "start": 4958,
                          "end": 4977
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
                            "start": 4980,
                            "end": 4991
                          },
                          "typeArguments": null,
                          "start": 4980,
                          "end": 4991
                        },
                        "start": 4978,
                        "end": 4991
                      },
                      "start": 4957,
                      "end": 4992
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5010,
                        "end": 5018
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
                                "start": 5026,
                                "end": 5038
                              },
                              "typeArguments": null,
                              "start": 5026,
                              "end": 5038
                            },
                            "start": 5024,
                            "end": 5038
                          },
                          "start": 5019,
                          "end": 5038
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 5041,
                          "end": 5045
                        },
                        "start": 5039,
                        "end": 5045
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5010,
                      "end": 5046
                    }
                  ],
                  "start": 4890,
                  "end": 5061
                },
                "declare": false,
                "start": 4840,
                "end": 5061
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4833,
              "end": 5061
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
                  "start": 5084,
                  "end": 5122
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
                                "start": 5145,
                                "end": 5156
                              },
                              "typeArguments": null,
                              "start": 5145,
                              "end": 5156
                            },
                            "start": 5143,
                            "end": 5156
                          },
                          "start": 5138,
                          "end": 5156
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
                            "start": 5159,
                            "end": 5170
                          },
                          "typeArguments": null,
                          "start": 5159,
                          "end": 5170
                        },
                        "start": 5157,
                        "end": 5170
                      },
                      "start": 5133,
                      "end": 5171
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
                                "start": 5188,
                                "end": 5199
                              },
                              "typeArguments": null,
                              "start": 5188,
                              "end": 5199
                            },
                            "start": 5186,
                            "end": 5199
                          },
                          "start": 5181,
                          "end": 5199
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
                            "start": 5202,
                            "end": 5213
                          },
                          "typeArguments": null,
                          "start": 5202,
                          "end": 5213
                        },
                        "start": 5200,
                        "end": 5213
                      },
                      "start": 5180,
                      "end": 5214
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5223,
                        "end": 5231
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
                                "start": 5239,
                                "end": 5250
                              },
                              "typeArguments": null,
                              "start": 5239,
                              "end": 5250
                            },
                            "start": 5237,
                            "end": 5250
                          },
                          "start": 5232,
                          "end": 5250
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 5253,
                          "end": 5257
                        },
                        "start": 5251,
                        "end": 5257
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5223,
                      "end": 5258
                    }
                  ],
                  "start": 5123,
                  "end": 5264
                },
                "declare": false,
                "start": 5074,
                "end": 5264
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 5067,
              "end": 5264
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5280,
                "end": 5320
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
                              "start": 5343,
                              "end": 5355
                            },
                            "typeArguments": null,
                            "start": 5343,
                            "end": 5355
                          },
                          "start": 5341,
                          "end": 5355
                        },
                        "start": 5336,
                        "end": 5355
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
                          "start": 5358,
                          "end": 5370
                        },
                        "typeArguments": null,
                        "start": 5358,
                        "end": 5370
                      },
                      "start": 5356,
                      "end": 5370
                    },
                    "start": 5331,
                    "end": 5371
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
                              "start": 5388,
                              "end": 5400
                            },
                            "typeArguments": null,
                            "start": 5388,
                            "end": 5400
                          },
                          "start": 5386,
                          "end": 5400
                        },
                        "start": 5381,
                        "end": 5400
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
                          "start": 5403,
                          "end": 5415
                        },
                        "typeArguments": null,
                        "start": 5403,
                        "end": 5415
                      },
                      "start": 5401,
                      "end": 5415
                    },
                    "start": 5380,
                    "end": 5416
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5425,
                      "end": 5433
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
                              "start": 5441,
                              "end": 5453
                            },
                            "typeArguments": null,
                            "start": 5441,
                            "end": 5453
                          },
                          "start": 5439,
                          "end": 5453
                        },
                        "start": 5434,
                        "end": 5453
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5456,
                        "end": 5460
                      },
                      "start": 5454,
                      "end": 5460
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5425,
                    "end": 5461
                  }
                ],
                "start": 5321,
                "end": 5467
              },
              "declare": false,
              "start": 5270,
              "end": 5467
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5483,
                "end": 5522
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
                              "start": 5545,
                              "end": 5556
                            },
                            "typeArguments": null,
                            "start": 5545,
                            "end": 5556
                          },
                          "start": 5543,
                          "end": 5556
                        },
                        "start": 5538,
                        "end": 5556
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
                          "start": 5559,
                          "end": 5570
                        },
                        "typeArguments": null,
                        "start": 5559,
                        "end": 5570
                      },
                      "start": 5557,
                      "end": 5570
                    },
                    "start": 5533,
                    "end": 5571
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
                              "start": 5588,
                              "end": 5599
                            },
                            "typeArguments": null,
                            "start": 5588,
                            "end": 5599
                          },
                          "start": 5586,
                          "end": 5599
                        },
                        "start": 5581,
                        "end": 5599
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
                          "start": 5602,
                          "end": 5613
                        },
                        "typeArguments": null,
                        "start": 5602,
                        "end": 5613
                      },
                      "start": 5600,
                      "end": 5613
                    },
                    "start": 5580,
                    "end": 5614
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5623,
                      "end": 5631
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
                              "start": 5639,
                              "end": 5650
                            },
                            "typeArguments": null,
                            "start": 5639,
                            "end": 5650
                          },
                          "start": 5637,
                          "end": 5650
                        },
                        "start": 5632,
                        "end": 5650
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5653,
                        "end": 5657
                      },
                      "start": 5651,
                      "end": 5657
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5623,
                    "end": 5658
                  }
                ],
                "start": 5523,
                "end": 5664
              },
              "declare": false,
              "start": 5473,
              "end": 5664
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
                  "start": 5683,
                  "end": 5722
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
                        "start": 5740,
                        "end": 5760
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
                                  "start": 5768,
                                  "end": 5780
                                },
                                "typeArguments": null,
                                "start": 5768,
                                "end": 5780
                              },
                              "start": 5766,
                              "end": 5780
                            },
                            "start": 5761,
                            "end": 5780
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5782,
                          "end": 5802
                        },
                        "expression": false,
                        "start": 5760,
                        "end": 5802
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5733,
                      "end": 5802
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
                        "start": 5826,
                        "end": 5847
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
                                  "start": 5855,
                                  "end": 5867
                                },
                                "typeArguments": null,
                                "start": 5855,
                                "end": 5867
                              },
                              "start": 5853,
                              "end": 5867
                            },
                            "start": 5848,
                            "end": 5867
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5869,
                          "end": 5880
                        },
                        "expression": false,
                        "start": 5847,
                        "end": 5880
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5811,
                      "end": 5880
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
                        "start": 5889,
                        "end": 5903
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
                                  "start": 5911,
                                  "end": 5923
                                },
                                "typeArguments": null,
                                "start": 5911,
                                "end": 5923
                              },
                              "start": 5909,
                              "end": 5923
                            },
                            "start": 5904,
                            "end": 5923
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5925,
                          "end": 5945
                        },
                        "expression": false,
                        "start": 5903,
                        "end": 5945
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5889,
                      "end": 5945
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
                        "start": 5962,
                        "end": 5977
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
                                  "start": 5985,
                                  "end": 5997
                                },
                                "typeArguments": null,
                                "start": 5985,
                                "end": 5997
                              },
                              "start": 5983,
                              "end": 5997
                            },
                            "start": 5978,
                            "end": 5997
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5999,
                          "end": 6010
                        },
                        "expression": false,
                        "start": 5977,
                        "end": 6010
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5954,
                      "end": 6010
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
                        "start": 6019,
                        "end": 6030
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
                                  "start": 6038,
                                  "end": 6050
                                },
                                "typeArguments": null,
                                "start": 6038,
                                "end": 6050
                              },
                              "start": 6036,
                              "end": 6050
                            },
                            "start": 6031,
                            "end": 6050
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
                                    "start": 6068,
                                    "end": 6080
                                  },
                                  "typeArguments": null,
                                  "start": 6068,
                                  "end": 6080
                                },
                                "start": 6066,
                                "end": 6080
                              },
                              "start": 6060,
                              "end": 6080
                            },
                            "readonly": false,
                            "static": false,
                            "start": 6052,
                            "end": 6080
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
                                    "start": 6097,
                                    "end": 6109
                                  },
                                  "typeArguments": null,
                                  "start": 6097,
                                  "end": 6109
                                },
                                "start": 6095,
                                "end": 6109
                              },
                              "start": 6089,
                              "end": 6109
                            },
                            "readonly": false,
                            "static": false,
                            "start": 6082,
                            "end": 6109
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6111,
                          "end": 6131
                        },
                        "expression": false,
                        "start": 6030,
                        "end": 6131
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6019,
                      "end": 6131
                    }
                  ],
                  "start": 5723,
                  "end": 6137
                },
                "abstract": false,
                "declare": false,
                "start": 5677,
                "end": 6137
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5670,
              "end": 6137
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
                  "start": 6156,
                  "end": 6194
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
                        "start": 6212,
                        "end": 6232
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
                                  "start": 6240,
                                  "end": 6251
                                },
                                "typeArguments": null,
                                "start": 6240,
                                "end": 6251
                              },
                              "start": 6238,
                              "end": 6251
                            },
                            "start": 6233,
                            "end": 6251
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6253,
                          "end": 6264
                        },
                        "expression": false,
                        "start": 6232,
                        "end": 6264
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6205,
                      "end": 6264
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
                        "start": 6288,
                        "end": 6309
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
                                  "start": 6317,
                                  "end": 6328
                                },
                                "typeArguments": null,
                                "start": 6317,
                                "end": 6328
                              },
                              "start": 6315,
                              "end": 6328
                            },
                            "start": 6310,
                            "end": 6328
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6330,
                          "end": 6341
                        },
                        "expression": false,
                        "start": 6309,
                        "end": 6341
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6273,
                      "end": 6341
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
                        "start": 6350,
                        "end": 6364
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
                                  "start": 6372,
                                  "end": 6383
                                },
                                "typeArguments": null,
                                "start": 6372,
                                "end": 6383
                              },
                              "start": 6370,
                              "end": 6383
                            },
                            "start": 6365,
                            "end": 6383
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6385,
                          "end": 6396
                        },
                        "expression": false,
                        "start": 6364,
                        "end": 6396
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6350,
                      "end": 6396
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
                        "start": 6413,
                        "end": 6428
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
                                  "start": 6436,
                                  "end": 6447
                                },
                                "typeArguments": null,
                                "start": 6436,
                                "end": 6447
                              },
                              "start": 6434,
                              "end": 6447
                            },
                            "start": 6429,
                            "end": 6447
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6449,
                          "end": 6460
                        },
                        "expression": false,
                        "start": 6428,
                        "end": 6460
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6405,
                      "end": 6460
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
                        "start": 6469,
                        "end": 6480
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
                                  "start": 6488,
                                  "end": 6499
                                },
                                "typeArguments": null,
                                "start": 6488,
                                "end": 6499
                              },
                              "start": 6486,
                              "end": 6499
                            },
                            "start": 6481,
                            "end": 6499
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
                                    "start": 6517,
                                    "end": 6528
                                  },
                                  "typeArguments": null,
                                  "start": 6517,
                                  "end": 6528
                                },
                                "start": 6515,
                                "end": 6528
                              },
                              "start": 6509,
                              "end": 6528
                            },
                            "readonly": false,
                            "static": false,
                            "start": 6501,
                            "end": 6528
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
                                    "start": 6545,
                                    "end": 6556
                                  },
                                  "typeArguments": null,
                                  "start": 6545,
                                  "end": 6556
                                },
                                "start": 6543,
                                "end": 6556
                              },
                              "start": 6537,
                              "end": 6556
                            },
                            "readonly": false,
                            "static": false,
                            "start": 6530,
                            "end": 6556
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6558,
                          "end": 6569
                        },
                        "expression": false,
                        "start": 6480,
                        "end": 6569
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6469,
                      "end": 6569
                    }
                  ],
                  "start": 6195,
                  "end": 6575
                },
                "abstract": false,
                "declare": false,
                "start": 6150,
                "end": 6575
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6143,
              "end": 6575
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
                "start": 6587,
                "end": 6627
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
                      "start": 6645,
                      "end": 6665
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
                                "start": 6673,
                                "end": 6685
                              },
                              "typeArguments": null,
                              "start": 6673,
                              "end": 6685
                            },
                            "start": 6671,
                            "end": 6685
                          },
                          "start": 6666,
                          "end": 6685
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6687,
                        "end": 6698
                      },
                      "expression": false,
                      "start": 6665,
                      "end": 6698
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6638,
                    "end": 6698
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
                      "start": 6722,
                      "end": 6743
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
                                "start": 6751,
                                "end": 6763
                              },
                              "typeArguments": null,
                              "start": 6751,
                              "end": 6763
                            },
                            "start": 6749,
                            "end": 6763
                          },
                          "start": 6744,
                          "end": 6763
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6765,
                        "end": 6776
                      },
                      "expression": false,
                      "start": 6743,
                      "end": 6776
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6707,
                    "end": 6776
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
                      "start": 6785,
                      "end": 6799
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
                                "start": 6807,
                                "end": 6819
                              },
                              "typeArguments": null,
                              "start": 6807,
                              "end": 6819
                            },
                            "start": 6805,
                            "end": 6819
                          },
                          "start": 6800,
                          "end": 6819
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6821,
                        "end": 6832
                      },
                      "expression": false,
                      "start": 6799,
                      "end": 6832
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6785,
                    "end": 6832
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
                      "start": 6849,
                      "end": 6864
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
                                "start": 6872,
                                "end": 6884
                              },
                              "typeArguments": null,
                              "start": 6872,
                              "end": 6884
                            },
                            "start": 6870,
                            "end": 6884
                          },
                          "start": 6865,
                          "end": 6884
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6886,
                        "end": 6897
                      },
                      "expression": false,
                      "start": 6864,
                      "end": 6897
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6841,
                    "end": 6897
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
                      "start": 6906,
                      "end": 6917
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
                                "start": 6925,
                                "end": 6937
                              },
                              "typeArguments": null,
                              "start": 6925,
                              "end": 6937
                            },
                            "start": 6923,
                            "end": 6937
                          },
                          "start": 6918,
                          "end": 6937
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
                                  "start": 6955,
                                  "end": 6967
                                },
                                "typeArguments": null,
                                "start": 6955,
                                "end": 6967
                              },
                              "start": 6953,
                              "end": 6967
                            },
                            "start": 6947,
                            "end": 6967
                          },
                          "readonly": false,
                          "static": false,
                          "start": 6939,
                          "end": 6967
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
                                  "start": 6984,
                                  "end": 6996
                                },
                                "typeArguments": null,
                                "start": 6984,
                                "end": 6996
                              },
                              "start": 6982,
                              "end": 6996
                            },
                            "start": 6976,
                            "end": 6996
                          },
                          "readonly": false,
                          "static": false,
                          "start": 6969,
                          "end": 6996
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6998,
                        "end": 7009
                      },
                      "expression": false,
                      "start": 6917,
                      "end": 7009
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6906,
                    "end": 7009
                  }
                ],
                "start": 6628,
                "end": 7015
              },
              "abstract": false,
              "declare": false,
              "start": 6581,
              "end": 7015
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
                "start": 7027,
                "end": 7066
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
                      "start": 7084,
                      "end": 7104
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
                                "start": 7112,
                                "end": 7123
                              },
                              "typeArguments": null,
                              "start": 7112,
                              "end": 7123
                            },
                            "start": 7110,
                            "end": 7123
                          },
                          "start": 7105,
                          "end": 7123
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7125,
                        "end": 7136
                      },
                      "expression": false,
                      "start": 7104,
                      "end": 7136
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7077,
                    "end": 7136
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
                      "start": 7160,
                      "end": 7181
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
                                "start": 7189,
                                "end": 7200
                              },
                              "typeArguments": null,
                              "start": 7189,
                              "end": 7200
                            },
                            "start": 7187,
                            "end": 7200
                          },
                          "start": 7182,
                          "end": 7200
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7202,
                        "end": 7213
                      },
                      "expression": false,
                      "start": 7181,
                      "end": 7213
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7145,
                    "end": 7213
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
                      "start": 7222,
                      "end": 7236
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
                                "start": 7244,
                                "end": 7255
                              },
                              "typeArguments": null,
                              "start": 7244,
                              "end": 7255
                            },
                            "start": 7242,
                            "end": 7255
                          },
                          "start": 7237,
                          "end": 7255
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7257,
                        "end": 7268
                      },
                      "expression": false,
                      "start": 7236,
                      "end": 7268
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7222,
                    "end": 7268
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
                      "start": 7285,
                      "end": 7300
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
                                "start": 7308,
                                "end": 7319
                              },
                              "typeArguments": null,
                              "start": 7308,
                              "end": 7319
                            },
                            "start": 7306,
                            "end": 7319
                          },
                          "start": 7301,
                          "end": 7319
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7321,
                        "end": 7332
                      },
                      "expression": false,
                      "start": 7300,
                      "end": 7332
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7277,
                    "end": 7332
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
                      "start": 7341,
                      "end": 7352
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
                                "start": 7360,
                                "end": 7371
                              },
                              "typeArguments": null,
                              "start": 7360,
                              "end": 7371
                            },
                            "start": 7358,
                            "end": 7371
                          },
                          "start": 7353,
                          "end": 7371
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
                                  "start": 7389,
                                  "end": 7400
                                },
                                "typeArguments": null,
                                "start": 7389,
                                "end": 7400
                              },
                              "start": 7387,
                              "end": 7400
                            },
                            "start": 7381,
                            "end": 7400
                          },
                          "readonly": false,
                          "static": false,
                          "start": 7373,
                          "end": 7400
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
                                  "start": 7417,
                                  "end": 7428
                                },
                                "typeArguments": null,
                                "start": 7417,
                                "end": 7428
                              },
                              "start": 7415,
                              "end": 7428
                            },
                            "start": 7409,
                            "end": 7428
                          },
                          "readonly": false,
                          "static": false,
                          "start": 7402,
                          "end": 7428
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7430,
                        "end": 7441
                      },
                      "expression": false,
                      "start": 7352,
                      "end": 7441
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7341,
                    "end": 7441
                  }
                ],
                "start": 7067,
                "end": 7447
              },
              "abstract": false,
              "declare": false,
              "start": 7021,
              "end": 7447
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
                  "start": 7469,
                  "end": 7507
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
                          "start": 7515,
                          "end": 7527
                        },
                        "typeArguments": null,
                        "start": 7515,
                        "end": 7527
                      },
                      "start": 7513,
                      "end": 7527
                    },
                    "start": 7508,
                    "end": 7527
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7529,
                  "end": 7545
                },
                "expression": false,
                "start": 7460,
                "end": 7545
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7453,
              "end": 7545
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
                  "start": 7566,
                  "end": 7603
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
                          "start": 7611,
                          "end": 7622
                        },
                        "typeArguments": null,
                        "start": 7611,
                        "end": 7622
                      },
                      "start": 7609,
                      "end": 7622
                    },
                    "start": 7604,
                    "end": 7622
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7624,
                  "end": 7631
                },
                "expression": false,
                "start": 7557,
                "end": 7631
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7550,
              "end": 7631
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7645,
                "end": 7684
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
                        "start": 7692,
                        "end": 7704
                      },
                      "typeArguments": null,
                      "start": 7692,
                      "end": 7704
                    },
                    "start": 7690,
                    "end": 7704
                  },
                  "start": 7685,
                  "end": 7704
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 7706,
                "end": 7713
              },
              "expression": false,
              "start": 7636,
              "end": 7713
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7727,
                "end": 7765
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
                        "start": 7773,
                        "end": 7784
                      },
                      "typeArguments": null,
                      "start": 7773,
                      "end": 7784
                    },
                    "start": 7771,
                    "end": 7784
                  },
                  "start": 7766,
                  "end": 7784
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 7786,
                "end": 7793
              },
              "expression": false,
              "start": 7718,
              "end": 7793
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
                  "start": 7823,
                  "end": 7868
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
                          "start": 7876,
                          "end": 7888
                        },
                        "typeArguments": null,
                        "start": 7876,
                        "end": 7888
                      },
                      "start": 7874,
                      "end": 7888
                    },
                    "start": 7869,
                    "end": 7888
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 7891,
                    "end": 7895
                  },
                  "start": 7889,
                  "end": 7895
                },
                "body": null,
                "expression": false,
                "start": 7806,
                "end": 7896
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 7799,
              "end": 7896
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
                  "start": 7934,
                  "end": 7978
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
                          "start": 7986,
                          "end": 7997
                        },
                        "typeArguments": null,
                        "start": 7986,
                        "end": 7997
                      },
                      "start": 7984,
                      "end": 7997
                    },
                    "start": 7979,
                    "end": 7997
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 8000,
                    "end": 8004
                  },
                  "start": 7998,
                  "end": 8004
                },
                "body": null,
                "expression": false,
                "start": 7917,
                "end": 8005
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 7910,
              "end": 8005
            },
            {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateAmbientFunctionWithPrivateParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8027,
                "end": 8073
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
                        "start": 8081,
                        "end": 8093
                      },
                      "typeArguments": null,
                      "start": 8081,
                      "end": 8093
                    },
                    "start": 8079,
                    "end": 8093
                  },
                  "start": 8074,
                  "end": 8093
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 8096,
                  "end": 8100
                },
                "start": 8094,
                "end": 8100
              },
              "body": null,
              "expression": false,
              "start": 8010,
              "end": 8101
            },
            {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateAmbientFunctionWithPublicParmeterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8123,
                "end": 8168
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
                        "start": 8176,
                        "end": 8187
                      },
                      "typeArguments": null,
                      "start": 8176,
                      "end": 8187
                    },
                    "start": 8174,
                    "end": 8187
                  },
                  "start": 8169,
                  "end": 8187
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 8190,
                  "end": 8194
                },
                "start": 8188,
                "end": 8194
              },
              "body": null,
              "expression": false,
              "start": 8106,
              "end": 8195
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
                  "start": 8218,
                  "end": 8264
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
                                  "start": 8287,
                                  "end": 8300
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8301,
                                  "end": 8312
                                },
                                "start": 8287,
                                "end": 8312
                              },
                              "typeArguments": null,
                              "start": 8287,
                              "end": 8312
                            },
                            "start": 8285,
                            "end": 8312
                          },
                          "start": 8280,
                          "end": 8312
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
                            "start": 8315,
                            "end": 8326
                          },
                          "typeArguments": null,
                          "start": 8315,
                          "end": 8326
                        },
                        "start": 8313,
                        "end": 8326
                      },
                      "start": 8275,
                      "end": 8327
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
                                  "start": 8353,
                                  "end": 8366
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8367,
                                  "end": 8378
                                },
                                "start": 8353,
                                "end": 8378
                              },
                              "typeArguments": null,
                              "start": 8353,
                              "end": 8378
                            },
                            "start": 8351,
                            "end": 8378
                          },
                          "start": 8346,
                          "end": 8378
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
                            "start": 8381,
                            "end": 8392
                          },
                          "typeArguments": null,
                          "start": 8381,
                          "end": 8392
                        },
                        "start": 8379,
                        "end": 8392
                      },
                      "start": 8345,
                      "end": 8393
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8411,
                        "end": 8419
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
                                  "start": 8427,
                                  "end": 8440
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8441,
                                  "end": 8452
                                },
                                "start": 8427,
                                "end": 8452
                              },
                              "typeArguments": null,
                              "start": 8427,
                              "end": 8452
                            },
                            "start": 8425,
                            "end": 8452
                          },
                          "start": 8420,
                          "end": 8452
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8455,
                          "end": 8459
                        },
                        "start": 8453,
                        "end": 8459
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8411,
                      "end": 8460
                    }
                  ],
                  "start": 8265,
                  "end": 8475
                },
                "declare": false,
                "start": 8208,
                "end": 8475
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 8201,
              "end": 8475
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
                  "start": 8493,
                  "end": 8535
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
                        "start": 8553,
                        "end": 8573
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
                                    "start": 8581,
                                    "end": 8594
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8595,
                                    "end": 8606
                                  },
                                  "start": 8581,
                                  "end": 8606
                                },
                                "typeArguments": null,
                                "start": 8581,
                                "end": 8606
                              },
                              "start": 8579,
                              "end": 8606
                            },
                            "start": 8574,
                            "end": 8606
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8608,
                          "end": 8628
                        },
                        "expression": false,
                        "start": 8573,
                        "end": 8628
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8546,
                      "end": 8628
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
                        "start": 8637,
                        "end": 8651
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
                                    "start": 8659,
                                    "end": 8672
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8673,
                                    "end": 8684
                                  },
                                  "start": 8659,
                                  "end": 8684
                                },
                                "typeArguments": null,
                                "start": 8659,
                                "end": 8684
                              },
                              "start": 8657,
                              "end": 8684
                            },
                            "start": 8652,
                            "end": 8684
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8686,
                          "end": 8706
                        },
                        "expression": false,
                        "start": 8651,
                        "end": 8706
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8637,
                      "end": 8706
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
                        "start": 8715,
                        "end": 8726
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
                                    "start": 8734,
                                    "end": 8747
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8748,
                                    "end": 8759
                                  },
                                  "start": 8734,
                                  "end": 8759
                                },
                                "typeArguments": null,
                                "start": 8734,
                                "end": 8759
                              },
                              "start": 8732,
                              "end": 8759
                            },
                            "start": 8727,
                            "end": 8759
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
                                      "start": 8777,
                                      "end": 8790
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8791,
                                      "end": 8802
                                    },
                                    "start": 8777,
                                    "end": 8802
                                  },
                                  "typeArguments": null,
                                  "start": 8777,
                                  "end": 8802
                                },
                                "start": 8775,
                                "end": 8802
                              },
                              "start": 8769,
                              "end": 8802
                            },
                            "readonly": false,
                            "static": false,
                            "start": 8761,
                            "end": 8802
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
                                      "start": 8819,
                                      "end": 8832
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 8833,
                                      "end": 8844
                                    },
                                    "start": 8819,
                                    "end": 8844
                                  },
                                  "typeArguments": null,
                                  "start": 8819,
                                  "end": 8844
                                },
                                "start": 8817,
                                "end": 8844
                              },
                              "start": 8811,
                              "end": 8844
                            },
                            "readonly": false,
                            "static": false,
                            "start": 8804,
                            "end": 8844
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8846,
                          "end": 8866
                        },
                        "expression": false,
                        "start": 8726,
                        "end": 8866
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8715,
                      "end": 8866
                    }
                  ],
                  "start": 8536,
                  "end": 8872
                },
                "abstract": false,
                "declare": false,
                "start": 8487,
                "end": 8872
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8480,
              "end": 8872
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
                  "start": 8893,
                  "end": 8938
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
                            "start": 8946,
                            "end": 8959
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8960,
                            "end": 8971
                          },
                          "start": 8946,
                          "end": 8971
                        },
                        "typeArguments": null,
                        "start": 8946,
                        "end": 8971
                      },
                      "start": 8944,
                      "end": 8971
                    },
                    "start": 8939,
                    "end": 8971
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 8973,
                  "end": 8989
                },
                "expression": false,
                "start": 8884,
                "end": 8989
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8877,
              "end": 8989
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
                  "start": 9018,
                  "end": 9070
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
                            "start": 9078,
                            "end": 9091
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9092,
                            "end": 9103
                          },
                          "start": 9078,
                          "end": 9103
                        },
                        "typeArguments": null,
                        "start": 9078,
                        "end": 9103
                      },
                      "start": 9076,
                      "end": 9103
                    },
                    "start": 9071,
                    "end": 9103
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 9106,
                    "end": 9110
                  },
                  "start": 9104,
                  "end": 9110
                },
                "body": null,
                "expression": false,
                "start": 9001,
                "end": 9111
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 8994,
              "end": 9111
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9136,
                "end": 9183
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
                                "start": 9206,
                                "end": 9219
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9220,
                                "end": 9231
                              },
                              "start": 9206,
                              "end": 9231
                            },
                            "typeArguments": null,
                            "start": 9206,
                            "end": 9231
                          },
                          "start": 9204,
                          "end": 9231
                        },
                        "start": 9199,
                        "end": 9231
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
                          "start": 9234,
                          "end": 9245
                        },
                        "typeArguments": null,
                        "start": 9234,
                        "end": 9245
                      },
                      "start": 9232,
                      "end": 9245
                    },
                    "start": 9194,
                    "end": 9246
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
                                "start": 9263,
                                "end": 9276
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9277,
                                "end": 9288
                              },
                              "start": 9263,
                              "end": 9288
                            },
                            "typeArguments": null,
                            "start": 9263,
                            "end": 9288
                          },
                          "start": 9261,
                          "end": 9288
                        },
                        "start": 9256,
                        "end": 9288
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
                          "start": 9291,
                          "end": 9302
                        },
                        "typeArguments": null,
                        "start": 9291,
                        "end": 9302
                      },
                      "start": 9289,
                      "end": 9302
                    },
                    "start": 9255,
                    "end": 9303
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9312,
                      "end": 9320
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
                                "start": 9328,
                                "end": 9341
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9342,
                                "end": 9353
                              },
                              "start": 9328,
                              "end": 9353
                            },
                            "typeArguments": null,
                            "start": 9328,
                            "end": 9353
                          },
                          "start": 9326,
                          "end": 9353
                        },
                        "start": 9321,
                        "end": 9353
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 9356,
                        "end": 9360
                      },
                      "start": 9354,
                      "end": 9360
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 9312,
                    "end": 9361
                  }
                ],
                "start": 9184,
                "end": 9367
              },
              "declare": false,
              "start": 9126,
              "end": 9367
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
                "start": 9378,
                "end": 9421
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
                      "start": 9439,
                      "end": 9459
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
                                  "start": 9467,
                                  "end": 9480
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9481,
                                  "end": 9492
                                },
                                "start": 9467,
                                "end": 9492
                              },
                              "typeArguments": null,
                              "start": 9467,
                              "end": 9492
                            },
                            "start": 9465,
                            "end": 9492
                          },
                          "start": 9460,
                          "end": 9492
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9494,
                        "end": 9505
                      },
                      "expression": false,
                      "start": 9459,
                      "end": 9505
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9432,
                    "end": 9505
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
                      "start": 9514,
                      "end": 9528
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
                                  "start": 9536,
                                  "end": 9549
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9550,
                                  "end": 9561
                                },
                                "start": 9536,
                                "end": 9561
                              },
                              "typeArguments": null,
                              "start": 9536,
                              "end": 9561
                            },
                            "start": 9534,
                            "end": 9561
                          },
                          "start": 9529,
                          "end": 9561
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9563,
                        "end": 9574
                      },
                      "expression": false,
                      "start": 9528,
                      "end": 9574
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9514,
                    "end": 9574
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
                      "start": 9583,
                      "end": 9594
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
                                  "start": 9602,
                                  "end": 9615
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9616,
                                  "end": 9627
                                },
                                "start": 9602,
                                "end": 9627
                              },
                              "typeArguments": null,
                              "start": 9602,
                              "end": 9627
                            },
                            "start": 9600,
                            "end": 9627
                          },
                          "start": 9595,
                          "end": 9627
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
                                    "start": 9645,
                                    "end": 9658
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9659,
                                    "end": 9670
                                  },
                                  "start": 9645,
                                  "end": 9670
                                },
                                "typeArguments": null,
                                "start": 9645,
                                "end": 9670
                              },
                              "start": 9643,
                              "end": 9670
                            },
                            "start": 9637,
                            "end": 9670
                          },
                          "readonly": false,
                          "static": false,
                          "start": 9629,
                          "end": 9670
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
                                    "start": 9687,
                                    "end": 9700
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9701,
                                    "end": 9712
                                  },
                                  "start": 9687,
                                  "end": 9712
                                },
                                "typeArguments": null,
                                "start": 9687,
                                "end": 9712
                              },
                              "start": 9685,
                              "end": 9712
                            },
                            "start": 9679,
                            "end": 9712
                          },
                          "readonly": false,
                          "static": false,
                          "start": 9672,
                          "end": 9712
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9714,
                        "end": 9725
                      },
                      "expression": false,
                      "start": 9594,
                      "end": 9725
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9583,
                    "end": 9725
                  }
                ],
                "start": 9422,
                "end": 9731
              },
              "abstract": false,
              "declare": false,
              "start": 9372,
              "end": 9731
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9745,
                "end": 9791
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
                          "start": 9799,
                          "end": 9812
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9813,
                          "end": 9824
                        },
                        "start": 9799,
                        "end": 9824
                      },
                      "typeArguments": null,
                      "start": 9799,
                      "end": 9824
                    },
                    "start": 9797,
                    "end": 9824
                  },
                  "start": 9792,
                  "end": 9824
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9826,
                "end": 9833
              },
              "expression": false,
              "start": 9736,
              "end": 9833
            },
            {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9855,
                "end": 9908
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
                          "start": 9916,
                          "end": 9929
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9930,
                          "end": 9941
                        },
                        "start": 9916,
                        "end": 9941
                      },
                      "typeArguments": null,
                      "start": 9916,
                      "end": 9941
                    },
                    "start": 9914,
                    "end": 9941
                  },
                  "start": 9909,
                  "end": 9941
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9944,
                  "end": 9948
                },
                "start": 9942,
                "end": 9948
              },
              "body": null,
              "expression": false,
              "start": 9838,
              "end": 9949
            }
          ],
          "start": 4756,
          "end": 9952
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 4736,
        "end": 9952
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4729,
      "end": 9952
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 9961,
        "end": 9974
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
              "start": 9987,
              "end": 9999
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 10000,
              "end": 10007
            },
            "abstract": false,
            "declare": false,
            "start": 9981,
            "end": 10007
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
                "start": 10026,
                "end": 10037
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 10038,
                "end": 10045
              },
              "abstract": false,
              "declare": false,
              "start": 10020,
              "end": 10045
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10013,
            "end": 10045
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
                "start": 10068,
                "end": 10107
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
                              "start": 10130,
                              "end": 10142
                            },
                            "typeArguments": null,
                            "start": 10130,
                            "end": 10142
                          },
                          "start": 10128,
                          "end": 10142
                        },
                        "start": 10123,
                        "end": 10142
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
                          "start": 10145,
                          "end": 10156
                        },
                        "typeArguments": null,
                        "start": 10145,
                        "end": 10156
                      },
                      "start": 10143,
                      "end": 10156
                    },
                    "start": 10118,
                    "end": 10157
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
                              "start": 10174,
                              "end": 10186
                            },
                            "typeArguments": null,
                            "start": 10174,
                            "end": 10186
                          },
                          "start": 10172,
                          "end": 10186
                        },
                        "start": 10167,
                        "end": 10186
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
                          "start": 10189,
                          "end": 10200
                        },
                        "typeArguments": null,
                        "start": 10189,
                        "end": 10200
                      },
                      "start": 10187,
                      "end": 10200
                    },
                    "start": 10166,
                    "end": 10201
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10210,
                      "end": 10218
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
                              "start": 10226,
                              "end": 10238
                            },
                            "typeArguments": null,
                            "start": 10226,
                            "end": 10238
                          },
                          "start": 10224,
                          "end": 10238
                        },
                        "start": 10219,
                        "end": 10238
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10241,
                        "end": 10245
                      },
                      "start": 10239,
                      "end": 10245
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10210,
                    "end": 10246
                  }
                ],
                "start": 10108,
                "end": 10252
              },
              "declare": false,
              "start": 10058,
              "end": 10252
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10051,
            "end": 10252
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
                "start": 10275,
                "end": 10313
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
                              "start": 10336,
                              "end": 10347
                            },
                            "typeArguments": null,
                            "start": 10336,
                            "end": 10347
                          },
                          "start": 10334,
                          "end": 10347
                        },
                        "start": 10329,
                        "end": 10347
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
                          "start": 10350,
                          "end": 10361
                        },
                        "typeArguments": null,
                        "start": 10350,
                        "end": 10361
                      },
                      "start": 10348,
                      "end": 10361
                    },
                    "start": 10324,
                    "end": 10362
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
                              "start": 10379,
                              "end": 10390
                            },
                            "typeArguments": null,
                            "start": 10379,
                            "end": 10390
                          },
                          "start": 10377,
                          "end": 10390
                        },
                        "start": 10372,
                        "end": 10390
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
                          "start": 10393,
                          "end": 10404
                        },
                        "typeArguments": null,
                        "start": 10393,
                        "end": 10404
                      },
                      "start": 10391,
                      "end": 10404
                    },
                    "start": 10371,
                    "end": 10405
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10414,
                      "end": 10422
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
                              "start": 10430,
                              "end": 10441
                            },
                            "typeArguments": null,
                            "start": 10430,
                            "end": 10441
                          },
                          "start": 10428,
                          "end": 10441
                        },
                        "start": 10423,
                        "end": 10441
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10444,
                        "end": 10448
                      },
                      "start": 10442,
                      "end": 10448
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10414,
                    "end": 10449
                  }
                ],
                "start": 10314,
                "end": 10455
              },
              "declare": false,
              "start": 10265,
              "end": 10455
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10258,
            "end": 10455
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 10471,
              "end": 10511
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
                            "start": 10534,
                            "end": 10546
                          },
                          "typeArguments": null,
                          "start": 10534,
                          "end": 10546
                        },
                        "start": 10532,
                        "end": 10546
                      },
                      "start": 10527,
                      "end": 10546
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
                        "start": 10549,
                        "end": 10561
                      },
                      "typeArguments": null,
                      "start": 10549,
                      "end": 10561
                    },
                    "start": 10547,
                    "end": 10561
                  },
                  "start": 10522,
                  "end": 10562
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
                            "start": 10579,
                            "end": 10591
                          },
                          "typeArguments": null,
                          "start": 10579,
                          "end": 10591
                        },
                        "start": 10577,
                        "end": 10591
                      },
                      "start": 10572,
                      "end": 10591
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
                        "start": 10594,
                        "end": 10606
                      },
                      "typeArguments": null,
                      "start": 10594,
                      "end": 10606
                    },
                    "start": 10592,
                    "end": 10606
                  },
                  "start": 10571,
                  "end": 10607
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10616,
                    "end": 10624
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
                            "start": 10632,
                            "end": 10644
                          },
                          "typeArguments": null,
                          "start": 10632,
                          "end": 10644
                        },
                        "start": 10630,
                        "end": 10644
                      },
                      "start": 10625,
                      "end": 10644
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 10647,
                      "end": 10651
                    },
                    "start": 10645,
                    "end": 10651
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 10616,
                  "end": 10652
                }
              ],
              "start": 10512,
              "end": 10658
            },
            "declare": false,
            "start": 10461,
            "end": 10658
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 10674,
              "end": 10713
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
                            "start": 10736,
                            "end": 10747
                          },
                          "typeArguments": null,
                          "start": 10736,
                          "end": 10747
                        },
                        "start": 10734,
                        "end": 10747
                      },
                      "start": 10729,
                      "end": 10747
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
                        "start": 10750,
                        "end": 10761
                      },
                      "typeArguments": null,
                      "start": 10750,
                      "end": 10761
                    },
                    "start": 10748,
                    "end": 10761
                  },
                  "start": 10724,
                  "end": 10762
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
                            "start": 10779,
                            "end": 10790
                          },
                          "typeArguments": null,
                          "start": 10779,
                          "end": 10790
                        },
                        "start": 10777,
                        "end": 10790
                      },
                      "start": 10772,
                      "end": 10790
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
                        "start": 10793,
                        "end": 10804
                      },
                      "typeArguments": null,
                      "start": 10793,
                      "end": 10804
                    },
                    "start": 10791,
                    "end": 10804
                  },
                  "start": 10771,
                  "end": 10805
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10814,
                    "end": 10822
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
                            "start": 10830,
                            "end": 10841
                          },
                          "typeArguments": null,
                          "start": 10830,
                          "end": 10841
                        },
                        "start": 10828,
                        "end": 10841
                      },
                      "start": 10823,
                      "end": 10841
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 10844,
                      "end": 10848
                    },
                    "start": 10842,
                    "end": 10848
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 10814,
                  "end": 10849
                }
              ],
              "start": 10714,
              "end": 10855
            },
            "declare": false,
            "start": 10664,
            "end": 10855
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
                "start": 10874,
                "end": 10913
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
                      "start": 10931,
                      "end": 10951
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
                                "start": 10959,
                                "end": 10971
                              },
                              "typeArguments": null,
                              "start": 10959,
                              "end": 10971
                            },
                            "start": 10957,
                            "end": 10971
                          },
                          "start": 10952,
                          "end": 10971
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10973,
                        "end": 10984
                      },
                      "expression": false,
                      "start": 10951,
                      "end": 10984
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10924,
                    "end": 10984
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
                      "start": 11008,
                      "end": 11029
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
                                "start": 11037,
                                "end": 11049
                              },
                              "typeArguments": null,
                              "start": 11037,
                              "end": 11049
                            },
                            "start": 11035,
                            "end": 11049
                          },
                          "start": 11030,
                          "end": 11049
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11051,
                        "end": 11062
                      },
                      "expression": false,
                      "start": 11029,
                      "end": 11062
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 10993,
                    "end": 11062
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
                      "start": 11071,
                      "end": 11085
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
                                "start": 11093,
                                "end": 11105
                              },
                              "typeArguments": null,
                              "start": 11093,
                              "end": 11105
                            },
                            "start": 11091,
                            "end": 11105
                          },
                          "start": 11086,
                          "end": 11105
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11107,
                        "end": 11118
                      },
                      "expression": false,
                      "start": 11085,
                      "end": 11118
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11071,
                    "end": 11118
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
                      "start": 11135,
                      "end": 11150
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
                                "start": 11158,
                                "end": 11170
                              },
                              "typeArguments": null,
                              "start": 11158,
                              "end": 11170
                            },
                            "start": 11156,
                            "end": 11170
                          },
                          "start": 11151,
                          "end": 11170
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11172,
                        "end": 11183
                      },
                      "expression": false,
                      "start": 11150,
                      "end": 11183
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11127,
                    "end": 11183
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
                      "start": 11192,
                      "end": 11203
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
                                "start": 11211,
                                "end": 11223
                              },
                              "typeArguments": null,
                              "start": 11211,
                              "end": 11223
                            },
                            "start": 11209,
                            "end": 11223
                          },
                          "start": 11204,
                          "end": 11223
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
                                  "start": 11241,
                                  "end": 11253
                                },
                                "typeArguments": null,
                                "start": 11241,
                                "end": 11253
                              },
                              "start": 11239,
                              "end": 11253
                            },
                            "start": 11233,
                            "end": 11253
                          },
                          "readonly": false,
                          "static": false,
                          "start": 11225,
                          "end": 11253
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
                                  "start": 11270,
                                  "end": 11282
                                },
                                "typeArguments": null,
                                "start": 11270,
                                "end": 11282
                              },
                              "start": 11268,
                              "end": 11282
                            },
                            "start": 11262,
                            "end": 11282
                          },
                          "readonly": false,
                          "static": false,
                          "start": 11255,
                          "end": 11282
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11284,
                        "end": 11295
                      },
                      "expression": false,
                      "start": 11203,
                      "end": 11295
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11192,
                    "end": 11295
                  }
                ],
                "start": 10914,
                "end": 11301
              },
              "abstract": false,
              "declare": false,
              "start": 10868,
              "end": 11301
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10861,
            "end": 11301
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
                "start": 11320,
                "end": 11358
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
                      "start": 11376,
                      "end": 11396
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
                                "start": 11404,
                                "end": 11415
                              },
                              "typeArguments": null,
                              "start": 11404,
                              "end": 11415
                            },
                            "start": 11402,
                            "end": 11415
                          },
                          "start": 11397,
                          "end": 11415
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11417,
                        "end": 11428
                      },
                      "expression": false,
                      "start": 11396,
                      "end": 11428
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11369,
                    "end": 11428
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
                      "start": 11452,
                      "end": 11473
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
                                "start": 11481,
                                "end": 11492
                              },
                              "typeArguments": null,
                              "start": 11481,
                              "end": 11492
                            },
                            "start": 11479,
                            "end": 11492
                          },
                          "start": 11474,
                          "end": 11492
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11494,
                        "end": 11505
                      },
                      "expression": false,
                      "start": 11473,
                      "end": 11505
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11437,
                    "end": 11505
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
                      "start": 11514,
                      "end": 11528
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
                                "start": 11536,
                                "end": 11547
                              },
                              "typeArguments": null,
                              "start": 11536,
                              "end": 11547
                            },
                            "start": 11534,
                            "end": 11547
                          },
                          "start": 11529,
                          "end": 11547
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11549,
                        "end": 11560
                      },
                      "expression": false,
                      "start": 11528,
                      "end": 11560
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11514,
                    "end": 11560
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
                      "start": 11577,
                      "end": 11592
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
                                "start": 11600,
                                "end": 11611
                              },
                              "typeArguments": null,
                              "start": 11600,
                              "end": 11611
                            },
                            "start": 11598,
                            "end": 11611
                          },
                          "start": 11593,
                          "end": 11611
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11613,
                        "end": 11624
                      },
                      "expression": false,
                      "start": 11592,
                      "end": 11624
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11569,
                    "end": 11624
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
                      "start": 11633,
                      "end": 11644
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
                                "start": 11652,
                                "end": 11663
                              },
                              "typeArguments": null,
                              "start": 11652,
                              "end": 11663
                            },
                            "start": 11650,
                            "end": 11663
                          },
                          "start": 11645,
                          "end": 11663
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
                                  "start": 11681,
                                  "end": 11692
                                },
                                "typeArguments": null,
                                "start": 11681,
                                "end": 11692
                              },
                              "start": 11679,
                              "end": 11692
                            },
                            "start": 11673,
                            "end": 11692
                          },
                          "readonly": false,
                          "static": false,
                          "start": 11665,
                          "end": 11692
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
                                  "start": 11709,
                                  "end": 11720
                                },
                                "typeArguments": null,
                                "start": 11709,
                                "end": 11720
                              },
                              "start": 11707,
                              "end": 11720
                            },
                            "start": 11701,
                            "end": 11720
                          },
                          "readonly": false,
                          "static": false,
                          "start": 11694,
                          "end": 11720
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11722,
                        "end": 11733
                      },
                      "expression": false,
                      "start": 11644,
                      "end": 11733
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11633,
                    "end": 11733
                  }
                ],
                "start": 11359,
                "end": 11739
              },
              "abstract": false,
              "declare": false,
              "start": 11314,
              "end": 11739
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11307,
            "end": 11739
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
              "start": 11751,
              "end": 11791
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
                    "start": 11809,
                    "end": 11829
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
                              "start": 11837,
                              "end": 11849
                            },
                            "typeArguments": null,
                            "start": 11837,
                            "end": 11849
                          },
                          "start": 11835,
                          "end": 11849
                        },
                        "start": 11830,
                        "end": 11849
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11851,
                      "end": 11862
                    },
                    "expression": false,
                    "start": 11829,
                    "end": 11862
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11802,
                  "end": 11862
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
                    "start": 11886,
                    "end": 11907
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
                              "start": 11915,
                              "end": 11927
                            },
                            "typeArguments": null,
                            "start": 11915,
                            "end": 11927
                          },
                          "start": 11913,
                          "end": 11927
                        },
                        "start": 11908,
                        "end": 11927
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11929,
                      "end": 11940
                    },
                    "expression": false,
                    "start": 11907,
                    "end": 11940
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 11871,
                  "end": 11940
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
                    "start": 11949,
                    "end": 11963
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
                              "start": 11971,
                              "end": 11983
                            },
                            "typeArguments": null,
                            "start": 11971,
                            "end": 11983
                          },
                          "start": 11969,
                          "end": 11983
                        },
                        "start": 11964,
                        "end": 11983
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11985,
                      "end": 11996
                    },
                    "expression": false,
                    "start": 11963,
                    "end": 11996
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11949,
                  "end": 11996
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
                    "start": 12013,
                    "end": 12028
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
                              "start": 12036,
                              "end": 12048
                            },
                            "typeArguments": null,
                            "start": 12036,
                            "end": 12048
                          },
                          "start": 12034,
                          "end": 12048
                        },
                        "start": 12029,
                        "end": 12048
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12050,
                      "end": 12061
                    },
                    "expression": false,
                    "start": 12028,
                    "end": 12061
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12005,
                  "end": 12061
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
                    "start": 12070,
                    "end": 12081
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
                              "start": 12089,
                              "end": 12101
                            },
                            "typeArguments": null,
                            "start": 12089,
                            "end": 12101
                          },
                          "start": 12087,
                          "end": 12101
                        },
                        "start": 12082,
                        "end": 12101
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
                                "start": 12119,
                                "end": 12131
                              },
                              "typeArguments": null,
                              "start": 12119,
                              "end": 12131
                            },
                            "start": 12117,
                            "end": 12131
                          },
                          "start": 12111,
                          "end": 12131
                        },
                        "readonly": false,
                        "static": false,
                        "start": 12103,
                        "end": 12131
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
                                "start": 12148,
                                "end": 12160
                              },
                              "typeArguments": null,
                              "start": 12148,
                              "end": 12160
                            },
                            "start": 12146,
                            "end": 12160
                          },
                          "start": 12140,
                          "end": 12160
                        },
                        "readonly": false,
                        "static": false,
                        "start": 12133,
                        "end": 12160
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12162,
                      "end": 12173
                    },
                    "expression": false,
                    "start": 12081,
                    "end": 12173
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12070,
                  "end": 12173
                }
              ],
              "start": 11792,
              "end": 12179
            },
            "abstract": false,
            "declare": false,
            "start": 11745,
            "end": 12179
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
              "start": 12191,
              "end": 12230
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
                    "start": 12248,
                    "end": 12268
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
                              "start": 12276,
                              "end": 12287
                            },
                            "typeArguments": null,
                            "start": 12276,
                            "end": 12287
                          },
                          "start": 12274,
                          "end": 12287
                        },
                        "start": 12269,
                        "end": 12287
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12289,
                      "end": 12300
                    },
                    "expression": false,
                    "start": 12268,
                    "end": 12300
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12241,
                  "end": 12300
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
                    "start": 12324,
                    "end": 12345
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
                              "start": 12353,
                              "end": 12364
                            },
                            "typeArguments": null,
                            "start": 12353,
                            "end": 12364
                          },
                          "start": 12351,
                          "end": 12364
                        },
                        "start": 12346,
                        "end": 12364
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12366,
                      "end": 12377
                    },
                    "expression": false,
                    "start": 12345,
                    "end": 12377
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12309,
                  "end": 12377
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
                    "start": 12386,
                    "end": 12400
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
                              "start": 12408,
                              "end": 12419
                            },
                            "typeArguments": null,
                            "start": 12408,
                            "end": 12419
                          },
                          "start": 12406,
                          "end": 12419
                        },
                        "start": 12401,
                        "end": 12419
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12421,
                      "end": 12432
                    },
                    "expression": false,
                    "start": 12400,
                    "end": 12432
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12386,
                  "end": 12432
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
                    "start": 12449,
                    "end": 12464
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
                              "start": 12472,
                              "end": 12483
                            },
                            "typeArguments": null,
                            "start": 12472,
                            "end": 12483
                          },
                          "start": 12470,
                          "end": 12483
                        },
                        "start": 12465,
                        "end": 12483
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12485,
                      "end": 12496
                    },
                    "expression": false,
                    "start": 12464,
                    "end": 12496
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12441,
                  "end": 12496
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
                    "start": 12505,
                    "end": 12516
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
                              "start": 12524,
                              "end": 12535
                            },
                            "typeArguments": null,
                            "start": 12524,
                            "end": 12535
                          },
                          "start": 12522,
                          "end": 12535
                        },
                        "start": 12517,
                        "end": 12535
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
                                "start": 12553,
                                "end": 12564
                              },
                              "typeArguments": null,
                              "start": 12553,
                              "end": 12564
                            },
                            "start": 12551,
                            "end": 12564
                          },
                          "start": 12545,
                          "end": 12564
                        },
                        "readonly": false,
                        "static": false,
                        "start": 12537,
                        "end": 12564
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
                                "start": 12581,
                                "end": 12592
                              },
                              "typeArguments": null,
                              "start": 12581,
                              "end": 12592
                            },
                            "start": 12579,
                            "end": 12592
                          },
                          "start": 12573,
                          "end": 12592
                        },
                        "readonly": false,
                        "static": false,
                        "start": 12566,
                        "end": 12592
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12594,
                      "end": 12605
                    },
                    "expression": false,
                    "start": 12516,
                    "end": 12605
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12505,
                  "end": 12605
                }
              ],
              "start": 12231,
              "end": 12611
            },
            "abstract": false,
            "declare": false,
            "start": 12185,
            "end": 12611
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
                "start": 12633,
                "end": 12671
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
                        "start": 12679,
                        "end": 12691
                      },
                      "typeArguments": null,
                      "start": 12679,
                      "end": 12691
                    },
                    "start": 12677,
                    "end": 12691
                  },
                  "start": 12672,
                  "end": 12691
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 12693,
                "end": 12700
              },
              "expression": false,
              "start": 12624,
              "end": 12700
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12617,
            "end": 12700
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
                "start": 12721,
                "end": 12758
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
                        "start": 12766,
                        "end": 12777
                      },
                      "typeArguments": null,
                      "start": 12766,
                      "end": 12777
                    },
                    "start": 12764,
                    "end": 12777
                  },
                  "start": 12759,
                  "end": 12777
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 12779,
                "end": 12786
              },
              "expression": false,
              "start": 12712,
              "end": 12786
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12705,
            "end": 12786
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 12800,
              "end": 12839
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
                      "start": 12847,
                      "end": 12859
                    },
                    "typeArguments": null,
                    "start": 12847,
                    "end": 12859
                  },
                  "start": 12845,
                  "end": 12859
                },
                "start": 12840,
                "end": 12859
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 12861,
              "end": 12868
            },
            "expression": false,
            "start": 12791,
            "end": 12868
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 12882,
              "end": 12920
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
                      "start": 12928,
                      "end": 12939
                    },
                    "typeArguments": null,
                    "start": 12928,
                    "end": 12939
                  },
                  "start": 12926,
                  "end": 12939
                },
                "start": 12921,
                "end": 12939
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 12941,
              "end": 12948
            },
            "expression": false,
            "start": 12873,
            "end": 12948
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
                "start": 12978,
                "end": 13023
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
                        "start": 13031,
                        "end": 13043
                      },
                      "typeArguments": null,
                      "start": 13031,
                      "end": 13043
                    },
                    "start": 13029,
                    "end": 13043
                  },
                  "start": 13024,
                  "end": 13043
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 13046,
                  "end": 13050
                },
                "start": 13044,
                "end": 13050
              },
              "body": null,
              "expression": false,
              "start": 12961,
              "end": 13051
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 12954,
            "end": 13051
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
                "start": 13080,
                "end": 13124
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
                        "start": 13132,
                        "end": 13143
                      },
                      "typeArguments": null,
                      "start": 13132,
                      "end": 13143
                    },
                    "start": 13130,
                    "end": 13143
                  },
                  "start": 13125,
                  "end": 13143
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 13146,
                  "end": 13150
                },
                "start": 13144,
                "end": 13150
              },
              "body": null,
              "expression": false,
              "start": 13063,
              "end": 13151
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 13056,
            "end": 13151
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 13173,
              "end": 13219
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
                      "start": 13227,
                      "end": 13239
                    },
                    "typeArguments": null,
                    "start": 13227,
                    "end": 13239
                  },
                  "start": 13225,
                  "end": 13239
                },
                "start": 13220,
                "end": 13239
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 13242,
                "end": 13246
              },
              "start": 13240,
              "end": 13246
            },
            "body": null,
            "expression": false,
            "start": 13156,
            "end": 13247
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 13269,
              "end": 13314
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
                      "start": 13322,
                      "end": 13333
                    },
                    "typeArguments": null,
                    "start": 13322,
                    "end": 13333
                  },
                  "start": 13320,
                  "end": 13333
                },
                "start": 13315,
                "end": 13333
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 13336,
                "end": 13340
              },
              "start": 13334,
              "end": 13340
            },
            "body": null,
            "expression": false,
            "start": 13252,
            "end": 13341
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
                "start": 13364,
                "end": 13410
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
                                "start": 13433,
                                "end": 13446
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13447,
                                "end": 13458
                              },
                              "start": 13433,
                              "end": 13458
                            },
                            "typeArguments": null,
                            "start": 13433,
                            "end": 13458
                          },
                          "start": 13431,
                          "end": 13458
                        },
                        "start": 13426,
                        "end": 13458
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
                          "start": 13461,
                          "end": 13472
                        },
                        "typeArguments": null,
                        "start": 13461,
                        "end": 13472
                      },
                      "start": 13459,
                      "end": 13472
                    },
                    "start": 13421,
                    "end": 13473
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
                                "start": 13490,
                                "end": 13503
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13504,
                                "end": 13515
                              },
                              "start": 13490,
                              "end": 13515
                            },
                            "typeArguments": null,
                            "start": 13490,
                            "end": 13515
                          },
                          "start": 13488,
                          "end": 13515
                        },
                        "start": 13483,
                        "end": 13515
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
                          "start": 13518,
                          "end": 13529
                        },
                        "typeArguments": null,
                        "start": 13518,
                        "end": 13529
                      },
                      "start": 13516,
                      "end": 13529
                    },
                    "start": 13482,
                    "end": 13530
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13539,
                      "end": 13547
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
                                "start": 13555,
                                "end": 13568
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13569,
                                "end": 13580
                              },
                              "start": 13555,
                              "end": 13580
                            },
                            "typeArguments": null,
                            "start": 13555,
                            "end": 13580
                          },
                          "start": 13553,
                          "end": 13580
                        },
                        "start": 13548,
                        "end": 13580
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 13583,
                        "end": 13587
                      },
                      "start": 13581,
                      "end": 13587
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 13539,
                    "end": 13588
                  }
                ],
                "start": 13411,
                "end": 13594
              },
              "declare": false,
              "start": 13354,
              "end": 13594
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 13347,
            "end": 13594
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
                "start": 13612,
                "end": 13654
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
                      "start": 13672,
                      "end": 13692
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
                                  "start": 13700,
                                  "end": 13713
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13714,
                                  "end": 13725
                                },
                                "start": 13700,
                                "end": 13725
                              },
                              "typeArguments": null,
                              "start": 13700,
                              "end": 13725
                            },
                            "start": 13698,
                            "end": 13725
                          },
                          "start": 13693,
                          "end": 13725
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13727,
                        "end": 13738
                      },
                      "expression": false,
                      "start": 13692,
                      "end": 13738
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13665,
                    "end": 13738
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
                      "start": 13747,
                      "end": 13761
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
                                  "start": 13769,
                                  "end": 13782
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13783,
                                  "end": 13794
                                },
                                "start": 13769,
                                "end": 13794
                              },
                              "typeArguments": null,
                              "start": 13769,
                              "end": 13794
                            },
                            "start": 13767,
                            "end": 13794
                          },
                          "start": 13762,
                          "end": 13794
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13796,
                        "end": 13807
                      },
                      "expression": false,
                      "start": 13761,
                      "end": 13807
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13747,
                    "end": 13807
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
                      "start": 13816,
                      "end": 13827
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
                                  "start": 13835,
                                  "end": 13848
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13849,
                                  "end": 13860
                                },
                                "start": 13835,
                                "end": 13860
                              },
                              "typeArguments": null,
                              "start": 13835,
                              "end": 13860
                            },
                            "start": 13833,
                            "end": 13860
                          },
                          "start": 13828,
                          "end": 13860
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
                                    "start": 13878,
                                    "end": 13891
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13892,
                                    "end": 13903
                                  },
                                  "start": 13878,
                                  "end": 13903
                                },
                                "typeArguments": null,
                                "start": 13878,
                                "end": 13903
                              },
                              "start": 13876,
                              "end": 13903
                            },
                            "start": 13870,
                            "end": 13903
                          },
                          "readonly": false,
                          "static": false,
                          "start": 13862,
                          "end": 13903
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
                                    "start": 13920,
                                    "end": 13933
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 13934,
                                    "end": 13945
                                  },
                                  "start": 13920,
                                  "end": 13945
                                },
                                "typeArguments": null,
                                "start": 13920,
                                "end": 13945
                              },
                              "start": 13918,
                              "end": 13945
                            },
                            "start": 13912,
                            "end": 13945
                          },
                          "readonly": false,
                          "static": false,
                          "start": 13905,
                          "end": 13945
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13947,
                        "end": 13958
                      },
                      "expression": false,
                      "start": 13827,
                      "end": 13958
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13816,
                    "end": 13958
                  }
                ],
                "start": 13655,
                "end": 13964
              },
              "abstract": false,
              "declare": false,
              "start": 13606,
              "end": 13964
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13599,
            "end": 13964
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
                "start": 13985,
                "end": 14030
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
                          "start": 14038,
                          "end": 14051
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14052,
                          "end": 14063
                        },
                        "start": 14038,
                        "end": 14063
                      },
                      "typeArguments": null,
                      "start": 14038,
                      "end": 14063
                    },
                    "start": 14036,
                    "end": 14063
                  },
                  "start": 14031,
                  "end": 14063
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 14065,
                "end": 14072
              },
              "expression": false,
              "start": 13976,
              "end": 14072
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13969,
            "end": 14072
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
                "start": 14101,
                "end": 14153
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
                          "start": 14161,
                          "end": 14174
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14175,
                          "end": 14186
                        },
                        "start": 14161,
                        "end": 14186
                      },
                      "typeArguments": null,
                      "start": 14161,
                      "end": 14186
                    },
                    "start": 14159,
                    "end": 14186
                  },
                  "start": 14154,
                  "end": 14186
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 14189,
                  "end": 14193
                },
                "start": 14187,
                "end": 14193
              },
              "body": null,
              "expression": false,
              "start": 14084,
              "end": 14194
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 14077,
            "end": 14194
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 14210,
              "end": 14257
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
                              "start": 14280,
                              "end": 14293
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14294,
                              "end": 14305
                            },
                            "start": 14280,
                            "end": 14305
                          },
                          "typeArguments": null,
                          "start": 14280,
                          "end": 14305
                        },
                        "start": 14278,
                        "end": 14305
                      },
                      "start": 14273,
                      "end": 14305
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
                        "start": 14308,
                        "end": 14319
                      },
                      "typeArguments": null,
                      "start": 14308,
                      "end": 14319
                    },
                    "start": 14306,
                    "end": 14319
                  },
                  "start": 14268,
                  "end": 14320
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
                              "start": 14337,
                              "end": 14350
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14351,
                              "end": 14362
                            },
                            "start": 14337,
                            "end": 14362
                          },
                          "typeArguments": null,
                          "start": 14337,
                          "end": 14362
                        },
                        "start": 14335,
                        "end": 14362
                      },
                      "start": 14330,
                      "end": 14362
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
                        "start": 14365,
                        "end": 14376
                      },
                      "typeArguments": null,
                      "start": 14365,
                      "end": 14376
                    },
                    "start": 14363,
                    "end": 14376
                  },
                  "start": 14329,
                  "end": 14377
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14386,
                    "end": 14394
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
                              "start": 14402,
                              "end": 14415
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14416,
                              "end": 14427
                            },
                            "start": 14402,
                            "end": 14427
                          },
                          "typeArguments": null,
                          "start": 14402,
                          "end": 14427
                        },
                        "start": 14400,
                        "end": 14427
                      },
                      "start": 14395,
                      "end": 14427
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 14430,
                      "end": 14434
                    },
                    "start": 14428,
                    "end": 14434
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 14386,
                  "end": 14435
                }
              ],
              "start": 14258,
              "end": 14441
            },
            "declare": false,
            "start": 14200,
            "end": 14441
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
              "start": 14452,
              "end": 14495
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
                    "start": 14513,
                    "end": 14533
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
                                "start": 14541,
                                "end": 14554
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14555,
                                "end": 14566
                              },
                              "start": 14541,
                              "end": 14566
                            },
                            "typeArguments": null,
                            "start": 14541,
                            "end": 14566
                          },
                          "start": 14539,
                          "end": 14566
                        },
                        "start": 14534,
                        "end": 14566
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14568,
                      "end": 14579
                    },
                    "expression": false,
                    "start": 14533,
                    "end": 14579
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14506,
                  "end": 14579
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
                    "start": 14588,
                    "end": 14602
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
                                "start": 14610,
                                "end": 14623
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14624,
                                "end": 14635
                              },
                              "start": 14610,
                              "end": 14635
                            },
                            "typeArguments": null,
                            "start": 14610,
                            "end": 14635
                          },
                          "start": 14608,
                          "end": 14635
                        },
                        "start": 14603,
                        "end": 14635
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14637,
                      "end": 14648
                    },
                    "expression": false,
                    "start": 14602,
                    "end": 14648
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14588,
                  "end": 14648
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
                    "start": 14657,
                    "end": 14668
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
                                "start": 14676,
                                "end": 14689
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14690,
                                "end": 14701
                              },
                              "start": 14676,
                              "end": 14701
                            },
                            "typeArguments": null,
                            "start": 14676,
                            "end": 14701
                          },
                          "start": 14674,
                          "end": 14701
                        },
                        "start": 14669,
                        "end": 14701
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
                                  "start": 14719,
                                  "end": 14732
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14733,
                                  "end": 14744
                                },
                                "start": 14719,
                                "end": 14744
                              },
                              "typeArguments": null,
                              "start": 14719,
                              "end": 14744
                            },
                            "start": 14717,
                            "end": 14744
                          },
                          "start": 14711,
                          "end": 14744
                        },
                        "readonly": false,
                        "static": false,
                        "start": 14703,
                        "end": 14744
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
                                  "start": 14761,
                                  "end": 14774
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14775,
                                  "end": 14786
                                },
                                "start": 14761,
                                "end": 14786
                              },
                              "typeArguments": null,
                              "start": 14761,
                              "end": 14786
                            },
                            "start": 14759,
                            "end": 14786
                          },
                          "start": 14753,
                          "end": 14786
                        },
                        "readonly": false,
                        "static": false,
                        "start": 14746,
                        "end": 14786
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14788,
                      "end": 14799
                    },
                    "expression": false,
                    "start": 14668,
                    "end": 14799
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14657,
                  "end": 14799
                }
              ],
              "start": 14496,
              "end": 14805
            },
            "abstract": false,
            "declare": false,
            "start": 14446,
            "end": 14805
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 14819,
              "end": 14865
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
                        "start": 14873,
                        "end": 14886
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14887,
                        "end": 14898
                      },
                      "start": 14873,
                      "end": 14898
                    },
                    "typeArguments": null,
                    "start": 14873,
                    "end": 14898
                  },
                  "start": 14871,
                  "end": 14898
                },
                "start": 14866,
                "end": 14898
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 14900,
              "end": 14907
            },
            "expression": false,
            "start": 14810,
            "end": 14907
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 14929,
              "end": 14982
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
                        "start": 14990,
                        "end": 15003
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 15004,
                        "end": 15015
                      },
                      "start": 14990,
                      "end": 15015
                    },
                    "typeArguments": null,
                    "start": 14990,
                    "end": 15015
                  },
                  "start": 14988,
                  "end": 15015
                },
                "start": 14983,
                "end": 15015
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 15018,
                "end": 15022
              },
              "start": 15016,
              "end": 15022
            },
            "body": null,
            "expression": false,
            "start": 14912,
            "end": 15023
          }
        ],
        "start": 9975,
        "end": 15025
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 9954,
      "end": 15025
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 15026
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
        "start": 899,
        "end": 919
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
              "start": 932,
              "end": 944
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 945,
              "end": 952
            },
            "abstract": false,
            "declare": false,
            "start": 926,
            "end": 952
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
                "start": 971,
                "end": 982
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 983,
                "end": 990
              },
              "abstract": false,
              "declare": false,
              "start": 965,
              "end": 990
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 958,
            "end": 990
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1003,
              "end": 1016
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
                    "start": 1033,
                    "end": 1045
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 1046,
                    "end": 1057
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 1027,
                  "end": 1057
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
                      "start": 1080,
                      "end": 1091
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 1092,
                      "end": 1103
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1074,
                    "end": 1103
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1067,
                  "end": 1103
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
                      "start": 1130,
                      "end": 1169
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
                                    "start": 1196,
                                    "end": 1208
                                  },
                                  "typeArguments": null,
                                  "start": 1196,
                                  "end": 1208
                                },
                                "start": 1194,
                                "end": 1208
                              },
                              "start": 1189,
                              "end": 1208
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
                                "start": 1211,
                                "end": 1222
                              },
                              "typeArguments": null,
                              "start": 1211,
                              "end": 1222
                            },
                            "start": 1209,
                            "end": 1222
                          },
                          "start": 1184,
                          "end": 1223
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
                                    "start": 1244,
                                    "end": 1256
                                  },
                                  "typeArguments": null,
                                  "start": 1244,
                                  "end": 1256
                                },
                                "start": 1242,
                                "end": 1256
                              },
                              "start": 1237,
                              "end": 1256
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
                                "start": 1259,
                                "end": 1270
                              },
                              "typeArguments": null,
                              "start": 1259,
                              "end": 1270
                            },
                            "start": 1257,
                            "end": 1270
                          },
                          "start": 1236,
                          "end": 1271
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1284,
                            "end": 1292
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
                                    "start": 1300,
                                    "end": 1312
                                  },
                                  "typeArguments": null,
                                  "start": 1300,
                                  "end": 1312
                                },
                                "start": 1298,
                                "end": 1312
                              },
                              "start": 1293,
                              "end": 1312
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1315,
                              "end": 1319
                            },
                            "start": 1313,
                            "end": 1319
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 1284,
                          "end": 1320
                        }
                      ],
                      "start": 1170,
                      "end": 1330
                    },
                    "declare": false,
                    "start": 1120,
                    "end": 1330
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 1113,
                  "end": 1330
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
                      "start": 1357,
                      "end": 1395
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
                                    "start": 1422,
                                    "end": 1433
                                  },
                                  "typeArguments": null,
                                  "start": 1422,
                                  "end": 1433
                                },
                                "start": 1420,
                                "end": 1433
                              },
                              "start": 1415,
                              "end": 1433
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
                                "start": 1436,
                                "end": 1447
                              },
                              "typeArguments": null,
                              "start": 1436,
                              "end": 1447
                            },
                            "start": 1434,
                            "end": 1447
                          },
                          "start": 1410,
                          "end": 1448
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
                                    "start": 1469,
                                    "end": 1480
                                  },
                                  "typeArguments": null,
                                  "start": 1469,
                                  "end": 1480
                                },
                                "start": 1467,
                                "end": 1480
                              },
                              "start": 1462,
                              "end": 1480
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
                                "start": 1483,
                                "end": 1494
                              },
                              "typeArguments": null,
                              "start": 1483,
                              "end": 1494
                            },
                            "start": 1481,
                            "end": 1494
                          },
                          "start": 1461,
                          "end": 1495
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1508,
                            "end": 1516
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
                                    "start": 1524,
                                    "end": 1535
                                  },
                                  "typeArguments": null,
                                  "start": 1524,
                                  "end": 1535
                                },
                                "start": 1522,
                                "end": 1535
                              },
                              "start": 1517,
                              "end": 1535
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1538,
                              "end": 1542
                            },
                            "start": 1536,
                            "end": 1542
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 1508,
                          "end": 1543
                        }
                      ],
                      "start": 1396,
                      "end": 1553
                    },
                    "declare": false,
                    "start": 1347,
                    "end": 1553
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 1340,
                  "end": 1553
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivateParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1573,
                    "end": 1613
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
                                  "start": 1640,
                                  "end": 1652
                                },
                                "typeArguments": null,
                                "start": 1640,
                                "end": 1652
                              },
                              "start": 1638,
                              "end": 1652
                            },
                            "start": 1633,
                            "end": 1652
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
                              "start": 1655,
                              "end": 1667
                            },
                            "typeArguments": null,
                            "start": 1655,
                            "end": 1667
                          },
                          "start": 1653,
                          "end": 1667
                        },
                        "start": 1628,
                        "end": 1668
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
                                  "start": 1689,
                                  "end": 1701
                                },
                                "typeArguments": null,
                                "start": 1689,
                                "end": 1701
                              },
                              "start": 1687,
                              "end": 1701
                            },
                            "start": 1682,
                            "end": 1701
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
                              "start": 1704,
                              "end": 1716
                            },
                            "typeArguments": null,
                            "start": 1704,
                            "end": 1716
                          },
                          "start": 1702,
                          "end": 1716
                        },
                        "start": 1681,
                        "end": 1717
                      },
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1730,
                          "end": 1738
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
                                  "start": 1746,
                                  "end": 1758
                                },
                                "typeArguments": null,
                                "start": 1746,
                                "end": 1758
                              },
                              "start": 1744,
                              "end": 1758
                            },
                            "start": 1739,
                            "end": 1758
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1761,
                            "end": 1765
                          },
                          "start": 1759,
                          "end": 1765
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 1730,
                        "end": 1766
                      }
                    ],
                    "start": 1614,
                    "end": 1776
                  },
                  "declare": false,
                  "start": 1563,
                  "end": 1776
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPublicParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1796,
                    "end": 1835
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
                                  "start": 1862,
                                  "end": 1873
                                },
                                "typeArguments": null,
                                "start": 1862,
                                "end": 1873
                              },
                              "start": 1860,
                              "end": 1873
                            },
                            "start": 1855,
                            "end": 1873
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
                              "start": 1876,
                              "end": 1887
                            },
                            "typeArguments": null,
                            "start": 1876,
                            "end": 1887
                          },
                          "start": 1874,
                          "end": 1887
                        },
                        "start": 1850,
                        "end": 1888
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
                                  "start": 1909,
                                  "end": 1920
                                },
                                "typeArguments": null,
                                "start": 1909,
                                "end": 1920
                              },
                              "start": 1907,
                              "end": 1920
                            },
                            "start": 1902,
                            "end": 1920
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
                              "start": 1923,
                              "end": 1934
                            },
                            "typeArguments": null,
                            "start": 1923,
                            "end": 1934
                          },
                          "start": 1921,
                          "end": 1934
                        },
                        "start": 1901,
                        "end": 1935
                      },
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1948,
                          "end": 1956
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
                                  "start": 1964,
                                  "end": 1975
                                },
                                "typeArguments": null,
                                "start": 1964,
                                "end": 1975
                              },
                              "start": 1962,
                              "end": 1975
                            },
                            "start": 1957,
                            "end": 1975
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1978,
                            "end": 1982
                          },
                          "start": 1976,
                          "end": 1982
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 1948,
                        "end": 1983
                      }
                    ],
                    "start": 1836,
                    "end": 1993
                  },
                  "declare": false,
                  "start": 1786,
                  "end": 1993
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
                      "start": 2016,
                      "end": 2055
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
                            "start": 2077,
                            "end": 2097
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
                                      "start": 2105,
                                      "end": 2117
                                    },
                                    "typeArguments": null,
                                    "start": 2105,
                                    "end": 2117
                                  },
                                  "start": 2103,
                                  "end": 2117
                                },
                                "start": 2098,
                                "end": 2117
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2119,
                              "end": 2134
                            },
                            "expression": false,
                            "start": 2097,
                            "end": 2134
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2070,
                          "end": 2134
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
                            "start": 2162,
                            "end": 2183
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
                                      "start": 2191,
                                      "end": 2203
                                    },
                                    "typeArguments": null,
                                    "start": 2191,
                                    "end": 2203
                                  },
                                  "start": 2189,
                                  "end": 2203
                                },
                                "start": 2184,
                                "end": 2203
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2205,
                              "end": 2220
                            },
                            "expression": false,
                            "start": 2183,
                            "end": 2220
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2147,
                          "end": 2220
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
                            "start": 2233,
                            "end": 2247
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
                                      "start": 2255,
                                      "end": 2267
                                    },
                                    "typeArguments": null,
                                    "start": 2255,
                                    "end": 2267
                                  },
                                  "start": 2253,
                                  "end": 2267
                                },
                                "start": 2248,
                                "end": 2267
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2269,
                              "end": 2284
                            },
                            "expression": false,
                            "start": 2247,
                            "end": 2284
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2233,
                          "end": 2284
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
                            "start": 2305,
                            "end": 2320
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
                                      "start": 2328,
                                      "end": 2340
                                    },
                                    "typeArguments": null,
                                    "start": 2328,
                                    "end": 2340
                                  },
                                  "start": 2326,
                                  "end": 2340
                                },
                                "start": 2321,
                                "end": 2340
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2342,
                              "end": 2357
                            },
                            "expression": false,
                            "start": 2320,
                            "end": 2357
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2297,
                          "end": 2357
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
                            "start": 2370,
                            "end": 2381
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
                                      "start": 2389,
                                      "end": 2401
                                    },
                                    "typeArguments": null,
                                    "start": 2389,
                                    "end": 2401
                                  },
                                  "start": 2387,
                                  "end": 2401
                                },
                                "start": 2382,
                                "end": 2401
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
                                        "start": 2419,
                                        "end": 2431
                                      },
                                      "typeArguments": null,
                                      "start": 2419,
                                      "end": 2431
                                    },
                                    "start": 2417,
                                    "end": 2431
                                  },
                                  "start": 2411,
                                  "end": 2431
                                },
                                "readonly": false,
                                "static": false,
                                "start": 2403,
                                "end": 2431
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
                                        "start": 2448,
                                        "end": 2460
                                      },
                                      "typeArguments": null,
                                      "start": 2448,
                                      "end": 2460
                                    },
                                    "start": 2446,
                                    "end": 2460
                                  },
                                  "start": 2440,
                                  "end": 2460
                                },
                                "readonly": false,
                                "static": false,
                                "start": 2433,
                                "end": 2460
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2462,
                              "end": 2477
                            },
                            "expression": false,
                            "start": 2381,
                            "end": 2477
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2370,
                          "end": 2477
                        }
                      ],
                      "start": 2056,
                      "end": 2487
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 2010,
                    "end": 2487
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2003,
                  "end": 2487
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
                      "start": 2510,
                      "end": 2548
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
                            "start": 2570,
                            "end": 2590
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
                                      "start": 2598,
                                      "end": 2609
                                    },
                                    "typeArguments": null,
                                    "start": 2598,
                                    "end": 2609
                                  },
                                  "start": 2596,
                                  "end": 2609
                                },
                                "start": 2591,
                                "end": 2609
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2611,
                              "end": 2626
                            },
                            "expression": false,
                            "start": 2590,
                            "end": 2626
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2563,
                          "end": 2626
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
                            "start": 2654,
                            "end": 2675
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
                                      "start": 2683,
                                      "end": 2694
                                    },
                                    "typeArguments": null,
                                    "start": 2683,
                                    "end": 2694
                                  },
                                  "start": 2681,
                                  "end": 2694
                                },
                                "start": 2676,
                                "end": 2694
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2696,
                              "end": 2711
                            },
                            "expression": false,
                            "start": 2675,
                            "end": 2711
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2639,
                          "end": 2711
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
                            "start": 2724,
                            "end": 2738
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
                                      "start": 2746,
                                      "end": 2757
                                    },
                                    "typeArguments": null,
                                    "start": 2746,
                                    "end": 2757
                                  },
                                  "start": 2744,
                                  "end": 2757
                                },
                                "start": 2739,
                                "end": 2757
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2759,
                              "end": 2774
                            },
                            "expression": false,
                            "start": 2738,
                            "end": 2774
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2724,
                          "end": 2774
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
                            "start": 2795,
                            "end": 2810
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
                                      "start": 2818,
                                      "end": 2829
                                    },
                                    "typeArguments": null,
                                    "start": 2818,
                                    "end": 2829
                                  },
                                  "start": 2816,
                                  "end": 2829
                                },
                                "start": 2811,
                                "end": 2829
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2831,
                              "end": 2846
                            },
                            "expression": false,
                            "start": 2810,
                            "end": 2846
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2787,
                          "end": 2846
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
                            "start": 2859,
                            "end": 2870
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
                                      "start": 2878,
                                      "end": 2889
                                    },
                                    "typeArguments": null,
                                    "start": 2878,
                                    "end": 2889
                                  },
                                  "start": 2876,
                                  "end": 2889
                                },
                                "start": 2871,
                                "end": 2889
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
                                        "start": 2907,
                                        "end": 2918
                                      },
                                      "typeArguments": null,
                                      "start": 2907,
                                      "end": 2918
                                    },
                                    "start": 2905,
                                    "end": 2918
                                  },
                                  "start": 2899,
                                  "end": 2918
                                },
                                "readonly": false,
                                "static": false,
                                "start": 2891,
                                "end": 2918
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
                                        "start": 2935,
                                        "end": 2946
                                      },
                                      "typeArguments": null,
                                      "start": 2935,
                                      "end": 2946
                                    },
                                    "start": 2933,
                                    "end": 2946
                                  },
                                  "start": 2927,
                                  "end": 2946
                                },
                                "readonly": false,
                                "static": false,
                                "start": 2920,
                                "end": 2946
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 2948,
                              "end": 2963
                            },
                            "expression": false,
                            "start": 2870,
                            "end": 2963
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2859,
                          "end": 2963
                        }
                      ],
                      "start": 2549,
                      "end": 2973
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 2504,
                    "end": 2973
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2497,
                  "end": 2973
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
                    "start": 2989,
                    "end": 3029
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
                          "start": 3051,
                          "end": 3071
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
                                    "start": 3079,
                                    "end": 3091
                                  },
                                  "typeArguments": null,
                                  "start": 3079,
                                  "end": 3091
                                },
                                "start": 3077,
                                "end": 3091
                              },
                              "start": 3072,
                              "end": 3091
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3093,
                            "end": 3108
                          },
                          "expression": false,
                          "start": 3071,
                          "end": 3108
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3044,
                        "end": 3108
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
                          "start": 3136,
                          "end": 3157
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
                                    "start": 3165,
                                    "end": 3177
                                  },
                                  "typeArguments": null,
                                  "start": 3165,
                                  "end": 3177
                                },
                                "start": 3163,
                                "end": 3177
                              },
                              "start": 3158,
                              "end": 3177
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3179,
                            "end": 3194
                          },
                          "expression": false,
                          "start": 3157,
                          "end": 3194
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3121,
                        "end": 3194
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
                          "start": 3207,
                          "end": 3221
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
                                    "start": 3229,
                                    "end": 3241
                                  },
                                  "typeArguments": null,
                                  "start": 3229,
                                  "end": 3241
                                },
                                "start": 3227,
                                "end": 3241
                              },
                              "start": 3222,
                              "end": 3241
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3243,
                            "end": 3258
                          },
                          "expression": false,
                          "start": 3221,
                          "end": 3258
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3207,
                        "end": 3258
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
                          "start": 3279,
                          "end": 3294
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
                                    "start": 3302,
                                    "end": 3314
                                  },
                                  "typeArguments": null,
                                  "start": 3302,
                                  "end": 3314
                                },
                                "start": 3300,
                                "end": 3314
                              },
                              "start": 3295,
                              "end": 3314
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3316,
                            "end": 3331
                          },
                          "expression": false,
                          "start": 3294,
                          "end": 3331
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3271,
                        "end": 3331
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
                          "start": 3344,
                          "end": 3355
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
                                    "start": 3363,
                                    "end": 3375
                                  },
                                  "typeArguments": null,
                                  "start": 3363,
                                  "end": 3375
                                },
                                "start": 3361,
                                "end": 3375
                              },
                              "start": 3356,
                              "end": 3375
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
                                      "start": 3393,
                                      "end": 3405
                                    },
                                    "typeArguments": null,
                                    "start": 3393,
                                    "end": 3405
                                  },
                                  "start": 3391,
                                  "end": 3405
                                },
                                "start": 3385,
                                "end": 3405
                              },
                              "readonly": false,
                              "static": false,
                              "start": 3377,
                              "end": 3405
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
                                      "start": 3422,
                                      "end": 3434
                                    },
                                    "typeArguments": null,
                                    "start": 3422,
                                    "end": 3434
                                  },
                                  "start": 3420,
                                  "end": 3434
                                },
                                "start": 3414,
                                "end": 3434
                              },
                              "readonly": false,
                              "static": false,
                              "start": 3407,
                              "end": 3434
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3436,
                            "end": 3451
                          },
                          "expression": false,
                          "start": 3355,
                          "end": 3451
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3344,
                        "end": 3451
                      }
                    ],
                    "start": 3030,
                    "end": 3461
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 2983,
                  "end": 3461
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
                    "start": 3477,
                    "end": 3516
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
                          "start": 3538,
                          "end": 3558
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
                                    "start": 3566,
                                    "end": 3577
                                  },
                                  "typeArguments": null,
                                  "start": 3566,
                                  "end": 3577
                                },
                                "start": 3564,
                                "end": 3577
                              },
                              "start": 3559,
                              "end": 3577
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3579,
                            "end": 3594
                          },
                          "expression": false,
                          "start": 3558,
                          "end": 3594
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3531,
                        "end": 3594
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
                          "start": 3622,
                          "end": 3643
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
                                    "start": 3651,
                                    "end": 3662
                                  },
                                  "typeArguments": null,
                                  "start": 3651,
                                  "end": 3662
                                },
                                "start": 3649,
                                "end": 3662
                              },
                              "start": 3644,
                              "end": 3662
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3664,
                            "end": 3679
                          },
                          "expression": false,
                          "start": 3643,
                          "end": 3679
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3607,
                        "end": 3679
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
                          "start": 3692,
                          "end": 3706
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
                                    "start": 3714,
                                    "end": 3725
                                  },
                                  "typeArguments": null,
                                  "start": 3714,
                                  "end": 3725
                                },
                                "start": 3712,
                                "end": 3725
                              },
                              "start": 3707,
                              "end": 3725
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3727,
                            "end": 3742
                          },
                          "expression": false,
                          "start": 3706,
                          "end": 3742
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3692,
                        "end": 3742
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
                          "start": 3763,
                          "end": 3778
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
                                    "start": 3786,
                                    "end": 3797
                                  },
                                  "typeArguments": null,
                                  "start": 3786,
                                  "end": 3797
                                },
                                "start": 3784,
                                "end": 3797
                              },
                              "start": 3779,
                              "end": 3797
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3799,
                            "end": 3814
                          },
                          "expression": false,
                          "start": 3778,
                          "end": 3814
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3755,
                        "end": 3814
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
                          "start": 3827,
                          "end": 3838
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
                                    "start": 3846,
                                    "end": 3857
                                  },
                                  "typeArguments": null,
                                  "start": 3846,
                                  "end": 3857
                                },
                                "start": 3844,
                                "end": 3857
                              },
                              "start": 3839,
                              "end": 3857
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
                                      "start": 3875,
                                      "end": 3886
                                    },
                                    "typeArguments": null,
                                    "start": 3875,
                                    "end": 3886
                                  },
                                  "start": 3873,
                                  "end": 3886
                                },
                                "start": 3867,
                                "end": 3886
                              },
                              "readonly": false,
                              "static": false,
                              "start": 3859,
                              "end": 3886
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
                                      "start": 3903,
                                      "end": 3914
                                    },
                                    "typeArguments": null,
                                    "start": 3903,
                                    "end": 3914
                                  },
                                  "start": 3901,
                                  "end": 3914
                                },
                                "start": 3895,
                                "end": 3914
                              },
                              "readonly": false,
                              "static": false,
                              "start": 3888,
                              "end": 3914
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 3916,
                            "end": 3931
                          },
                          "expression": false,
                          "start": 3838,
                          "end": 3931
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3827,
                        "end": 3931
                      }
                    ],
                    "start": 3517,
                    "end": 3941
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3471,
                  "end": 3941
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
                      "start": 3967,
                      "end": 4005
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
                              "start": 4013,
                              "end": 4025
                            },
                            "typeArguments": null,
                            "start": 4013,
                            "end": 4025
                          },
                          "start": 4011,
                          "end": 4025
                        },
                        "start": 4006,
                        "end": 4025
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4027,
                      "end": 4038
                    },
                    "expression": false,
                    "start": 3958,
                    "end": 4038
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3951,
                  "end": 4038
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
                      "start": 4063,
                      "end": 4100
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
                              "start": 4108,
                              "end": 4119
                            },
                            "typeArguments": null,
                            "start": 4108,
                            "end": 4119
                          },
                          "start": 4106,
                          "end": 4119
                        },
                        "start": 4101,
                        "end": 4119
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4121,
                      "end": 4132
                    },
                    "expression": false,
                    "start": 4054,
                    "end": 4132
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 4047,
                  "end": 4132
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateFunctionWithPrivateParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4150,
                    "end": 4189
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
                            "start": 4197,
                            "end": 4209
                          },
                          "typeArguments": null,
                          "start": 4197,
                          "end": 4209
                        },
                        "start": 4195,
                        "end": 4209
                      },
                      "start": 4190,
                      "end": 4209
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 4211,
                    "end": 4222
                  },
                  "expression": false,
                  "start": 4141,
                  "end": 4222
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateFunctionWithPublicParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4240,
                    "end": 4278
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
                            "start": 4286,
                            "end": 4297
                          },
                          "typeArguments": null,
                          "start": 4286,
                          "end": 4297
                        },
                        "start": 4284,
                        "end": 4297
                      },
                      "start": 4279,
                      "end": 4297
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 4299,
                    "end": 4310
                  },
                  "expression": false,
                  "start": 4231,
                  "end": 4310
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
                      "start": 4344,
                      "end": 4389
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
                              "start": 4397,
                              "end": 4409
                            },
                            "typeArguments": null,
                            "start": 4397,
                            "end": 4409
                          },
                          "start": 4395,
                          "end": 4409
                        },
                        "start": 4390,
                        "end": 4409
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 4412,
                        "end": 4416
                      },
                      "start": 4410,
                      "end": 4416
                    },
                    "body": null,
                    "expression": false,
                    "start": 4327,
                    "end": 4417
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 4320,
                  "end": 4417
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
                      "start": 4450,
                      "end": 4494
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
                              "start": 4502,
                              "end": 4513
                            },
                            "typeArguments": null,
                            "start": 4502,
                            "end": 4513
                          },
                          "start": 4500,
                          "end": 4513
                        },
                        "start": 4495,
                        "end": 4513
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 4516,
                        "end": 4520
                      },
                      "start": 4514,
                      "end": 4520
                    },
                    "body": null,
                    "expression": false,
                    "start": 4433,
                    "end": 4521
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 4426,
                  "end": 4521
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateAmbientFunctionWithPrivateParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4547,
                    "end": 4593
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
                            "start": 4601,
                            "end": 4613
                          },
                          "typeArguments": null,
                          "start": 4601,
                          "end": 4613
                        },
                        "start": 4599,
                        "end": 4613
                      },
                      "start": 4594,
                      "end": 4613
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 4616,
                      "end": 4620
                    },
                    "start": 4614,
                    "end": 4620
                  },
                  "body": null,
                  "expression": false,
                  "start": 4530,
                  "end": 4621
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateAmbientFunctionWithPublicParmeterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4647,
                    "end": 4692
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
                            "start": 4700,
                            "end": 4711
                          },
                          "typeArguments": null,
                          "start": 4700,
                          "end": 4711
                        },
                        "start": 4698,
                        "end": 4711
                      },
                      "start": 4693,
                      "end": 4711
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 4714,
                      "end": 4718
                    },
                    "start": 4712,
                    "end": 4718
                  },
                  "body": null,
                  "expression": false,
                  "start": 4630,
                  "end": 4719
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
                      "start": 4746,
                      "end": 4792
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
                                      "start": 4819,
                                      "end": 4832
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4833,
                                      "end": 4844
                                    },
                                    "start": 4819,
                                    "end": 4844
                                  },
                                  "typeArguments": null,
                                  "start": 4819,
                                  "end": 4844
                                },
                                "start": 4817,
                                "end": 4844
                              },
                              "start": 4812,
                              "end": 4844
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
                                "start": 4847,
                                "end": 4858
                              },
                              "typeArguments": null,
                              "start": 4847,
                              "end": 4858
                            },
                            "start": 4845,
                            "end": 4858
                          },
                          "start": 4807,
                          "end": 4859
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
                                      "start": 4880,
                                      "end": 4893
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4894,
                                      "end": 4905
                                    },
                                    "start": 4880,
                                    "end": 4905
                                  },
                                  "typeArguments": null,
                                  "start": 4880,
                                  "end": 4905
                                },
                                "start": 4878,
                                "end": 4905
                              },
                              "start": 4873,
                              "end": 4905
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
                                "start": 4908,
                                "end": 4919
                              },
                              "typeArguments": null,
                              "start": 4908,
                              "end": 4919
                            },
                            "start": 4906,
                            "end": 4919
                          },
                          "start": 4872,
                          "end": 4920
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4933,
                            "end": 4941
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
                                      "start": 4949,
                                      "end": 4962
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4963,
                                      "end": 4974
                                    },
                                    "start": 4949,
                                    "end": 4974
                                  },
                                  "typeArguments": null,
                                  "start": 4949,
                                  "end": 4974
                                },
                                "start": 4947,
                                "end": 4974
                              },
                              "start": 4942,
                              "end": 4974
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 4977,
                              "end": 4981
                            },
                            "start": 4975,
                            "end": 4981
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 4933,
                          "end": 4982
                        }
                      ],
                      "start": 4793,
                      "end": 4992
                    },
                    "declare": false,
                    "start": 4736,
                    "end": 4992
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 4729,
                  "end": 4992
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
                      "start": 5014,
                      "end": 5056
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
                            "start": 5078,
                            "end": 5098
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
                                        "start": 5106,
                                        "end": 5119
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5120,
                                        "end": 5131
                                      },
                                      "start": 5106,
                                      "end": 5131
                                    },
                                    "typeArguments": null,
                                    "start": 5106,
                                    "end": 5131
                                  },
                                  "start": 5104,
                                  "end": 5131
                                },
                                "start": 5099,
                                "end": 5131
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5133,
                              "end": 5148
                            },
                            "expression": false,
                            "start": 5098,
                            "end": 5148
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5071,
                          "end": 5148
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
                            "start": 5161,
                            "end": 5175
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
                                        "start": 5183,
                                        "end": 5196
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5197,
                                        "end": 5208
                                      },
                                      "start": 5183,
                                      "end": 5208
                                    },
                                    "typeArguments": null,
                                    "start": 5183,
                                    "end": 5208
                                  },
                                  "start": 5181,
                                  "end": 5208
                                },
                                "start": 5176,
                                "end": 5208
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5210,
                              "end": 5225
                            },
                            "expression": false,
                            "start": 5175,
                            "end": 5225
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5161,
                          "end": 5225
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
                            "start": 5238,
                            "end": 5249
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
                                        "start": 5257,
                                        "end": 5270
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5271,
                                        "end": 5282
                                      },
                                      "start": 5257,
                                      "end": 5282
                                    },
                                    "typeArguments": null,
                                    "start": 5257,
                                    "end": 5282
                                  },
                                  "start": 5255,
                                  "end": 5282
                                },
                                "start": 5250,
                                "end": 5282
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
                                          "start": 5300,
                                          "end": 5313
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "publicClass",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5314,
                                          "end": 5325
                                        },
                                        "start": 5300,
                                        "end": 5325
                                      },
                                      "typeArguments": null,
                                      "start": 5300,
                                      "end": 5325
                                    },
                                    "start": 5298,
                                    "end": 5325
                                  },
                                  "start": 5292,
                                  "end": 5325
                                },
                                "readonly": false,
                                "static": false,
                                "start": 5284,
                                "end": 5325
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
                                          "start": 5342,
                                          "end": 5355
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "publicClass",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5356,
                                          "end": 5367
                                        },
                                        "start": 5342,
                                        "end": 5367
                                      },
                                      "typeArguments": null,
                                      "start": 5342,
                                      "end": 5367
                                    },
                                    "start": 5340,
                                    "end": 5367
                                  },
                                  "start": 5334,
                                  "end": 5367
                                },
                                "readonly": false,
                                "static": false,
                                "start": 5327,
                                "end": 5367
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5369,
                              "end": 5384
                            },
                            "expression": false,
                            "start": 5249,
                            "end": 5384
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5238,
                          "end": 5384
                        }
                      ],
                      "start": 5057,
                      "end": 5394
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 5008,
                    "end": 5394
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 5001,
                  "end": 5394
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
                      "start": 5419,
                      "end": 5464
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
                                "start": 5472,
                                "end": 5485
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5486,
                                "end": 5497
                              },
                              "start": 5472,
                              "end": 5497
                            },
                            "typeArguments": null,
                            "start": 5472,
                            "end": 5497
                          },
                          "start": 5470,
                          "end": 5497
                        },
                        "start": 5465,
                        "end": 5497
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5499,
                      "end": 5510
                    },
                    "expression": false,
                    "start": 5410,
                    "end": 5510
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 5403,
                  "end": 5510
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
                      "start": 5543,
                      "end": 5595
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
                                "start": 5603,
                                "end": 5616
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5617,
                                "end": 5628
                              },
                              "start": 5603,
                              "end": 5628
                            },
                            "typeArguments": null,
                            "start": 5603,
                            "end": 5628
                          },
                          "start": 5601,
                          "end": 5628
                        },
                        "start": 5596,
                        "end": 5628
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5631,
                        "end": 5635
                      },
                      "start": 5629,
                      "end": 5635
                    },
                    "body": null,
                    "expression": false,
                    "start": 5526,
                    "end": 5636
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 5519,
                  "end": 5636
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivateModuleParameterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5656,
                    "end": 5703
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
                                    "start": 5730,
                                    "end": 5743
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5744,
                                    "end": 5755
                                  },
                                  "start": 5730,
                                  "end": 5755
                                },
                                "typeArguments": null,
                                "start": 5730,
                                "end": 5755
                              },
                              "start": 5728,
                              "end": 5755
                            },
                            "start": 5723,
                            "end": 5755
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
                              "start": 5758,
                              "end": 5769
                            },
                            "typeArguments": null,
                            "start": 5758,
                            "end": 5769
                          },
                          "start": 5756,
                          "end": 5769
                        },
                        "start": 5718,
                        "end": 5770
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
                                    "start": 5791,
                                    "end": 5804
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5805,
                                    "end": 5816
                                  },
                                  "start": 5791,
                                  "end": 5816
                                },
                                "typeArguments": null,
                                "start": 5791,
                                "end": 5816
                              },
                              "start": 5789,
                              "end": 5816
                            },
                            "start": 5784,
                            "end": 5816
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
                              "start": 5819,
                              "end": 5830
                            },
                            "typeArguments": null,
                            "start": 5819,
                            "end": 5830
                          },
                          "start": 5817,
                          "end": 5830
                        },
                        "start": 5783,
                        "end": 5831
                      },
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5844,
                          "end": 5852
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
                                    "start": 5860,
                                    "end": 5873
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5874,
                                    "end": 5885
                                  },
                                  "start": 5860,
                                  "end": 5885
                                },
                                "typeArguments": null,
                                "start": 5860,
                                "end": 5885
                              },
                              "start": 5858,
                              "end": 5885
                            },
                            "start": 5853,
                            "end": 5885
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 5888,
                            "end": 5892
                          },
                          "start": 5886,
                          "end": 5892
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 5844,
                        "end": 5893
                      }
                    ],
                    "start": 5704,
                    "end": 5903
                  },
                  "declare": false,
                  "start": 5646,
                  "end": 5903
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
                    "start": 5918,
                    "end": 5961
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
                          "start": 5983,
                          "end": 6003
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
                                      "start": 6011,
                                      "end": 6024
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6025,
                                      "end": 6036
                                    },
                                    "start": 6011,
                                    "end": 6036
                                  },
                                  "typeArguments": null,
                                  "start": 6011,
                                  "end": 6036
                                },
                                "start": 6009,
                                "end": 6036
                              },
                              "start": 6004,
                              "end": 6036
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6038,
                            "end": 6053
                          },
                          "expression": false,
                          "start": 6003,
                          "end": 6053
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 5976,
                        "end": 6053
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
                          "start": 6066,
                          "end": 6080
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
                                      "start": 6088,
                                      "end": 6101
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6102,
                                      "end": 6113
                                    },
                                    "start": 6088,
                                    "end": 6113
                                  },
                                  "typeArguments": null,
                                  "start": 6088,
                                  "end": 6113
                                },
                                "start": 6086,
                                "end": 6113
                              },
                              "start": 6081,
                              "end": 6113
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6115,
                            "end": 6130
                          },
                          "expression": false,
                          "start": 6080,
                          "end": 6130
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 6066,
                        "end": 6130
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
                          "start": 6143,
                          "end": 6154
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
                                      "start": 6162,
                                      "end": 6175
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6176,
                                      "end": 6187
                                    },
                                    "start": 6162,
                                    "end": 6187
                                  },
                                  "typeArguments": null,
                                  "start": 6162,
                                  "end": 6187
                                },
                                "start": 6160,
                                "end": 6187
                              },
                              "start": 6155,
                              "end": 6187
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
                                        "start": 6205,
                                        "end": 6218
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6219,
                                        "end": 6230
                                      },
                                      "start": 6205,
                                      "end": 6230
                                    },
                                    "typeArguments": null,
                                    "start": 6205,
                                    "end": 6230
                                  },
                                  "start": 6203,
                                  "end": 6230
                                },
                                "start": 6197,
                                "end": 6230
                              },
                              "readonly": false,
                              "static": false,
                              "start": 6189,
                              "end": 6230
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
                                        "start": 6247,
                                        "end": 6260
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6261,
                                        "end": 6272
                                      },
                                      "start": 6247,
                                      "end": 6272
                                    },
                                    "typeArguments": null,
                                    "start": 6247,
                                    "end": 6272
                                  },
                                  "start": 6245,
                                  "end": 6272
                                },
                                "start": 6239,
                                "end": 6272
                              },
                              "readonly": false,
                              "static": false,
                              "start": 6232,
                              "end": 6272
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6274,
                            "end": 6289
                          },
                          "expression": false,
                          "start": 6154,
                          "end": 6289
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 6143,
                        "end": 6289
                      }
                    ],
                    "start": 5962,
                    "end": 6299
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 5912,
                  "end": 6299
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateFunctionWithPrivateModuleParameterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6317,
                    "end": 6363
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
                              "start": 6371,
                              "end": 6384
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6385,
                              "end": 6396
                            },
                            "start": 6371,
                            "end": 6396
                          },
                          "typeArguments": null,
                          "start": 6371,
                          "end": 6396
                        },
                        "start": 6369,
                        "end": 6396
                      },
                      "start": 6364,
                      "end": 6396
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 6398,
                    "end": 6409
                  },
                  "expression": false,
                  "start": 6308,
                  "end": 6409
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6435,
                    "end": 6488
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
                              "start": 6496,
                              "end": 6509
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6510,
                              "end": 6521
                            },
                            "start": 6496,
                            "end": 6521
                          },
                          "typeArguments": null,
                          "start": 6496,
                          "end": 6521
                        },
                        "start": 6494,
                        "end": 6521
                      },
                      "start": 6489,
                      "end": 6521
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 6524,
                      "end": 6528
                    },
                    "start": 6522,
                    "end": 6528
                  },
                  "body": null,
                  "expression": false,
                  "start": 6418,
                  "end": 6529
                }
              ],
              "start": 1017,
              "end": 6535
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 996,
            "end": 6535
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
                "start": 6558,
                "end": 6597
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
                              "start": 6620,
                              "end": 6632
                            },
                            "typeArguments": null,
                            "start": 6620,
                            "end": 6632
                          },
                          "start": 6618,
                          "end": 6632
                        },
                        "start": 6613,
                        "end": 6632
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
                          "start": 6635,
                          "end": 6646
                        },
                        "typeArguments": null,
                        "start": 6635,
                        "end": 6646
                      },
                      "start": 6633,
                      "end": 6646
                    },
                    "start": 6608,
                    "end": 6647
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
                              "start": 6673,
                              "end": 6685
                            },
                            "typeArguments": null,
                            "start": 6673,
                            "end": 6685
                          },
                          "start": 6671,
                          "end": 6685
                        },
                        "start": 6666,
                        "end": 6685
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
                          "start": 6688,
                          "end": 6699
                        },
                        "typeArguments": null,
                        "start": 6688,
                        "end": 6699
                      },
                      "start": 6686,
                      "end": 6699
                    },
                    "start": 6665,
                    "end": 6700
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6718,
                      "end": 6726
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
                              "start": 6734,
                              "end": 6746
                            },
                            "typeArguments": null,
                            "start": 6734,
                            "end": 6746
                          },
                          "start": 6732,
                          "end": 6746
                        },
                        "start": 6727,
                        "end": 6746
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 6749,
                        "end": 6753
                      },
                      "start": 6747,
                      "end": 6753
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 6718,
                    "end": 6754
                  }
                ],
                "start": 6598,
                "end": 6769
              },
              "declare": false,
              "start": 6548,
              "end": 6769
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6541,
            "end": 6769
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
                "start": 6792,
                "end": 6830
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
                              "start": 6853,
                              "end": 6864
                            },
                            "typeArguments": null,
                            "start": 6853,
                            "end": 6864
                          },
                          "start": 6851,
                          "end": 6864
                        },
                        "start": 6846,
                        "end": 6864
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
                          "start": 6867,
                          "end": 6878
                        },
                        "typeArguments": null,
                        "start": 6867,
                        "end": 6878
                      },
                      "start": 6865,
                      "end": 6878
                    },
                    "start": 6841,
                    "end": 6879
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
                              "start": 6896,
                              "end": 6907
                            },
                            "typeArguments": null,
                            "start": 6896,
                            "end": 6907
                          },
                          "start": 6894,
                          "end": 6907
                        },
                        "start": 6889,
                        "end": 6907
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
                          "start": 6910,
                          "end": 6921
                        },
                        "typeArguments": null,
                        "start": 6910,
                        "end": 6921
                      },
                      "start": 6908,
                      "end": 6921
                    },
                    "start": 6888,
                    "end": 6922
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6931,
                      "end": 6939
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
                              "start": 6947,
                              "end": 6958
                            },
                            "typeArguments": null,
                            "start": 6947,
                            "end": 6958
                          },
                          "start": 6945,
                          "end": 6958
                        },
                        "start": 6940,
                        "end": 6958
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 6961,
                        "end": 6965
                      },
                      "start": 6959,
                      "end": 6965
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 6931,
                    "end": 6966
                  }
                ],
                "start": 6831,
                "end": 6972
              },
              "declare": false,
              "start": 6782,
              "end": 6972
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6775,
            "end": 6972
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6988,
              "end": 7028
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
                            "start": 7051,
                            "end": 7063
                          },
                          "typeArguments": null,
                          "start": 7051,
                          "end": 7063
                        },
                        "start": 7049,
                        "end": 7063
                      },
                      "start": 7044,
                      "end": 7063
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
                        "start": 7066,
                        "end": 7078
                      },
                      "typeArguments": null,
                      "start": 7066,
                      "end": 7078
                    },
                    "start": 7064,
                    "end": 7078
                  },
                  "start": 7039,
                  "end": 7079
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
                            "start": 7096,
                            "end": 7108
                          },
                          "typeArguments": null,
                          "start": 7096,
                          "end": 7108
                        },
                        "start": 7094,
                        "end": 7108
                      },
                      "start": 7089,
                      "end": 7108
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
                        "start": 7111,
                        "end": 7123
                      },
                      "typeArguments": null,
                      "start": 7111,
                      "end": 7123
                    },
                    "start": 7109,
                    "end": 7123
                  },
                  "start": 7088,
                  "end": 7124
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7133,
                    "end": 7141
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
                            "start": 7149,
                            "end": 7161
                          },
                          "typeArguments": null,
                          "start": 7149,
                          "end": 7161
                        },
                        "start": 7147,
                        "end": 7161
                      },
                      "start": 7142,
                      "end": 7161
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7164,
                      "end": 7168
                    },
                    "start": 7162,
                    "end": 7168
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7133,
                  "end": 7169
                }
              ],
              "start": 7029,
              "end": 7175
            },
            "declare": false,
            "start": 6978,
            "end": 7175
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 7191,
              "end": 7230
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
                            "start": 7253,
                            "end": 7264
                          },
                          "typeArguments": null,
                          "start": 7253,
                          "end": 7264
                        },
                        "start": 7251,
                        "end": 7264
                      },
                      "start": 7246,
                      "end": 7264
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
                        "start": 7267,
                        "end": 7278
                      },
                      "typeArguments": null,
                      "start": 7267,
                      "end": 7278
                    },
                    "start": 7265,
                    "end": 7278
                  },
                  "start": 7241,
                  "end": 7279
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
                            "start": 7296,
                            "end": 7307
                          },
                          "typeArguments": null,
                          "start": 7296,
                          "end": 7307
                        },
                        "start": 7294,
                        "end": 7307
                      },
                      "start": 7289,
                      "end": 7307
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
                        "start": 7310,
                        "end": 7321
                      },
                      "typeArguments": null,
                      "start": 7310,
                      "end": 7321
                    },
                    "start": 7308,
                    "end": 7321
                  },
                  "start": 7288,
                  "end": 7322
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7331,
                    "end": 7339
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
                            "start": 7347,
                            "end": 7358
                          },
                          "typeArguments": null,
                          "start": 7347,
                          "end": 7358
                        },
                        "start": 7345,
                        "end": 7358
                      },
                      "start": 7340,
                      "end": 7358
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7361,
                      "end": 7365
                    },
                    "start": 7359,
                    "end": 7365
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7331,
                  "end": 7366
                }
              ],
              "start": 7231,
              "end": 7372
            },
            "declare": false,
            "start": 7181,
            "end": 7372
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
                "start": 7391,
                "end": 7430
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
                      "start": 7448,
                      "end": 7468
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
                                "start": 7476,
                                "end": 7488
                              },
                              "typeArguments": null,
                              "start": 7476,
                              "end": 7488
                            },
                            "start": 7474,
                            "end": 7488
                          },
                          "start": 7469,
                          "end": 7488
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7490,
                        "end": 7510
                      },
                      "expression": false,
                      "start": 7468,
                      "end": 7510
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7441,
                    "end": 7510
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
                      "start": 7534,
                      "end": 7555
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
                                "start": 7563,
                                "end": 7575
                              },
                              "typeArguments": null,
                              "start": 7563,
                              "end": 7575
                            },
                            "start": 7561,
                            "end": 7575
                          },
                          "start": 7556,
                          "end": 7575
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7577,
                        "end": 7588
                      },
                      "expression": false,
                      "start": 7555,
                      "end": 7588
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7519,
                    "end": 7588
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
                      "start": 7597,
                      "end": 7611
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
                                "start": 7619,
                                "end": 7631
                              },
                              "typeArguments": null,
                              "start": 7619,
                              "end": 7631
                            },
                            "start": 7617,
                            "end": 7631
                          },
                          "start": 7612,
                          "end": 7631
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7633,
                        "end": 7653
                      },
                      "expression": false,
                      "start": 7611,
                      "end": 7653
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7597,
                    "end": 7653
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
                      "start": 7670,
                      "end": 7685
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
                                "start": 7693,
                                "end": 7705
                              },
                              "typeArguments": null,
                              "start": 7693,
                              "end": 7705
                            },
                            "start": 7691,
                            "end": 7705
                          },
                          "start": 7686,
                          "end": 7705
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7707,
                        "end": 7718
                      },
                      "expression": false,
                      "start": 7685,
                      "end": 7718
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7662,
                    "end": 7718
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
                      "start": 7727,
                      "end": 7738
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
                                "start": 7746,
                                "end": 7758
                              },
                              "typeArguments": null,
                              "start": 7746,
                              "end": 7758
                            },
                            "start": 7744,
                            "end": 7758
                          },
                          "start": 7739,
                          "end": 7758
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
                                  "start": 7776,
                                  "end": 7788
                                },
                                "typeArguments": null,
                                "start": 7776,
                                "end": 7788
                              },
                              "start": 7774,
                              "end": 7788
                            },
                            "start": 7768,
                            "end": 7788
                          },
                          "readonly": false,
                          "static": false,
                          "start": 7760,
                          "end": 7788
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
                                  "start": 7805,
                                  "end": 7817
                                },
                                "typeArguments": null,
                                "start": 7805,
                                "end": 7817
                              },
                              "start": 7803,
                              "end": 7817
                            },
                            "start": 7797,
                            "end": 7817
                          },
                          "readonly": false,
                          "static": false,
                          "start": 7790,
                          "end": 7817
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7819,
                        "end": 7839
                      },
                      "expression": false,
                      "start": 7738,
                      "end": 7839
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7727,
                    "end": 7839
                  }
                ],
                "start": 7431,
                "end": 7845
              },
              "abstract": false,
              "declare": false,
              "start": 7385,
              "end": 7845
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7378,
            "end": 7845
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
                "start": 7864,
                "end": 7902
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
                      "start": 7920,
                      "end": 7940
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
                                "start": 7948,
                                "end": 7959
                              },
                              "typeArguments": null,
                              "start": 7948,
                              "end": 7959
                            },
                            "start": 7946,
                            "end": 7959
                          },
                          "start": 7941,
                          "end": 7959
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7961,
                        "end": 7972
                      },
                      "expression": false,
                      "start": 7940,
                      "end": 7972
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7913,
                    "end": 7972
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
                      "start": 7996,
                      "end": 8017
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
                                "start": 8025,
                                "end": 8036
                              },
                              "typeArguments": null,
                              "start": 8025,
                              "end": 8036
                            },
                            "start": 8023,
                            "end": 8036
                          },
                          "start": 8018,
                          "end": 8036
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8038,
                        "end": 8049
                      },
                      "expression": false,
                      "start": 8017,
                      "end": 8049
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7981,
                    "end": 8049
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
                      "start": 8058,
                      "end": 8072
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
                                "start": 8080,
                                "end": 8091
                              },
                              "typeArguments": null,
                              "start": 8080,
                              "end": 8091
                            },
                            "start": 8078,
                            "end": 8091
                          },
                          "start": 8073,
                          "end": 8091
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8093,
                        "end": 8104
                      },
                      "expression": false,
                      "start": 8072,
                      "end": 8104
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8058,
                    "end": 8104
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
                      "start": 8121,
                      "end": 8136
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
                                "start": 8144,
                                "end": 8155
                              },
                              "typeArguments": null,
                              "start": 8144,
                              "end": 8155
                            },
                            "start": 8142,
                            "end": 8155
                          },
                          "start": 8137,
                          "end": 8155
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8157,
                        "end": 8168
                      },
                      "expression": false,
                      "start": 8136,
                      "end": 8168
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8113,
                    "end": 8168
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
                      "start": 8177,
                      "end": 8188
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
                                "start": 8196,
                                "end": 8207
                              },
                              "typeArguments": null,
                              "start": 8196,
                              "end": 8207
                            },
                            "start": 8194,
                            "end": 8207
                          },
                          "start": 8189,
                          "end": 8207
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
                                  "start": 8225,
                                  "end": 8236
                                },
                                "typeArguments": null,
                                "start": 8225,
                                "end": 8236
                              },
                              "start": 8223,
                              "end": 8236
                            },
                            "start": 8217,
                            "end": 8236
                          },
                          "readonly": false,
                          "static": false,
                          "start": 8209,
                          "end": 8236
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
                                  "start": 8253,
                                  "end": 8264
                                },
                                "typeArguments": null,
                                "start": 8253,
                                "end": 8264
                              },
                              "start": 8251,
                              "end": 8264
                            },
                            "start": 8245,
                            "end": 8264
                          },
                          "readonly": false,
                          "static": false,
                          "start": 8238,
                          "end": 8264
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8266,
                        "end": 8277
                      },
                      "expression": false,
                      "start": 8188,
                      "end": 8277
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8177,
                    "end": 8277
                  }
                ],
                "start": 7903,
                "end": 8283
              },
              "abstract": false,
              "declare": false,
              "start": 7858,
              "end": 8283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7851,
            "end": 8283
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
              "start": 8295,
              "end": 8335
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
                    "start": 8353,
                    "end": 8373
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
                              "start": 8381,
                              "end": 8393
                            },
                            "typeArguments": null,
                            "start": 8381,
                            "end": 8393
                          },
                          "start": 8379,
                          "end": 8393
                        },
                        "start": 8374,
                        "end": 8393
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8395,
                      "end": 8406
                    },
                    "expression": false,
                    "start": 8373,
                    "end": 8406
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8346,
                  "end": 8406
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
                    "start": 8430,
                    "end": 8451
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
                              "start": 8459,
                              "end": 8471
                            },
                            "typeArguments": null,
                            "start": 8459,
                            "end": 8471
                          },
                          "start": 8457,
                          "end": 8471
                        },
                        "start": 8452,
                        "end": 8471
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8473,
                      "end": 8484
                    },
                    "expression": false,
                    "start": 8451,
                    "end": 8484
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 8415,
                  "end": 8484
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
                    "start": 8493,
                    "end": 8507
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
                              "start": 8515,
                              "end": 8527
                            },
                            "typeArguments": null,
                            "start": 8515,
                            "end": 8527
                          },
                          "start": 8513,
                          "end": 8527
                        },
                        "start": 8508,
                        "end": 8527
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8529,
                      "end": 8540
                    },
                    "expression": false,
                    "start": 8507,
                    "end": 8540
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8493,
                  "end": 8540
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
                    "start": 8557,
                    "end": 8572
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
                              "start": 8580,
                              "end": 8592
                            },
                            "typeArguments": null,
                            "start": 8580,
                            "end": 8592
                          },
                          "start": 8578,
                          "end": 8592
                        },
                        "start": 8573,
                        "end": 8592
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8594,
                      "end": 8605
                    },
                    "expression": false,
                    "start": 8572,
                    "end": 8605
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 8549,
                  "end": 8605
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
                    "start": 8614,
                    "end": 8625
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
                              "start": 8633,
                              "end": 8645
                            },
                            "typeArguments": null,
                            "start": 8633,
                            "end": 8645
                          },
                          "start": 8631,
                          "end": 8645
                        },
                        "start": 8626,
                        "end": 8645
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
                                "start": 8663,
                                "end": 8675
                              },
                              "typeArguments": null,
                              "start": 8663,
                              "end": 8675
                            },
                            "start": 8661,
                            "end": 8675
                          },
                          "start": 8655,
                          "end": 8675
                        },
                        "readonly": false,
                        "static": false,
                        "start": 8647,
                        "end": 8675
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
                                "start": 8692,
                                "end": 8704
                              },
                              "typeArguments": null,
                              "start": 8692,
                              "end": 8704
                            },
                            "start": 8690,
                            "end": 8704
                          },
                          "start": 8684,
                          "end": 8704
                        },
                        "readonly": false,
                        "static": false,
                        "start": 8677,
                        "end": 8704
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8706,
                      "end": 8717
                    },
                    "expression": false,
                    "start": 8625,
                    "end": 8717
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8614,
                  "end": 8717
                }
              ],
              "start": 8336,
              "end": 8723
            },
            "abstract": false,
            "declare": false,
            "start": 8289,
            "end": 8723
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
              "start": 8735,
              "end": 8774
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
                    "start": 8792,
                    "end": 8812
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
                              "start": 8820,
                              "end": 8831
                            },
                            "typeArguments": null,
                            "start": 8820,
                            "end": 8831
                          },
                          "start": 8818,
                          "end": 8831
                        },
                        "start": 8813,
                        "end": 8831
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8833,
                      "end": 8844
                    },
                    "expression": false,
                    "start": 8812,
                    "end": 8844
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8785,
                  "end": 8844
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
                    "start": 8868,
                    "end": 8889
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
                              "start": 8897,
                              "end": 8908
                            },
                            "typeArguments": null,
                            "start": 8897,
                            "end": 8908
                          },
                          "start": 8895,
                          "end": 8908
                        },
                        "start": 8890,
                        "end": 8908
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8910,
                      "end": 8921
                    },
                    "expression": false,
                    "start": 8889,
                    "end": 8921
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 8853,
                  "end": 8921
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
                    "start": 8930,
                    "end": 8944
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
                              "start": 8952,
                              "end": 8963
                            },
                            "typeArguments": null,
                            "start": 8952,
                            "end": 8963
                          },
                          "start": 8950,
                          "end": 8963
                        },
                        "start": 8945,
                        "end": 8963
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 8965,
                      "end": 8976
                    },
                    "expression": false,
                    "start": 8944,
                    "end": 8976
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 8930,
                  "end": 8976
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
                    "start": 8993,
                    "end": 9008
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
                              "start": 9016,
                              "end": 9027
                            },
                            "typeArguments": null,
                            "start": 9016,
                            "end": 9027
                          },
                          "start": 9014,
                          "end": 9027
                        },
                        "start": 9009,
                        "end": 9027
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 9029,
                      "end": 9040
                    },
                    "expression": false,
                    "start": 9008,
                    "end": 9040
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 8985,
                  "end": 9040
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
                    "start": 9049,
                    "end": 9060
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
                              "start": 9068,
                              "end": 9079
                            },
                            "typeArguments": null,
                            "start": 9068,
                            "end": 9079
                          },
                          "start": 9066,
                          "end": 9079
                        },
                        "start": 9061,
                        "end": 9079
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
                                "start": 9097,
                                "end": 9108
                              },
                              "typeArguments": null,
                              "start": 9097,
                              "end": 9108
                            },
                            "start": 9095,
                            "end": 9108
                          },
                          "start": 9089,
                          "end": 9108
                        },
                        "readonly": false,
                        "static": false,
                        "start": 9081,
                        "end": 9108
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
                                "start": 9125,
                                "end": 9136
                              },
                              "typeArguments": null,
                              "start": 9125,
                              "end": 9136
                            },
                            "start": 9123,
                            "end": 9136
                          },
                          "start": 9117,
                          "end": 9136
                        },
                        "readonly": false,
                        "static": false,
                        "start": 9110,
                        "end": 9136
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 9138,
                      "end": 9149
                    },
                    "expression": false,
                    "start": 9060,
                    "end": 9149
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 9049,
                  "end": 9149
                }
              ],
              "start": 8775,
              "end": 9155
            },
            "abstract": false,
            "declare": false,
            "start": 8729,
            "end": 9155
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
                "start": 9177,
                "end": 9215
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
                        "start": 9223,
                        "end": 9235
                      },
                      "typeArguments": null,
                      "start": 9223,
                      "end": 9235
                    },
                    "start": 9221,
                    "end": 9235
                  },
                  "start": 9216,
                  "end": 9235
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9237,
                "end": 9253
              },
              "expression": false,
              "start": 9168,
              "end": 9253
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 9161,
            "end": 9253
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
                "start": 9274,
                "end": 9311
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
                        "start": 9319,
                        "end": 9330
                      },
                      "typeArguments": null,
                      "start": 9319,
                      "end": 9330
                    },
                    "start": 9317,
                    "end": 9330
                  },
                  "start": 9312,
                  "end": 9330
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9332,
                "end": 9339
              },
              "expression": false,
              "start": 9265,
              "end": 9339
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 9258,
            "end": 9339
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9353,
              "end": 9392
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
                      "start": 9400,
                      "end": 9412
                    },
                    "typeArguments": null,
                    "start": 9400,
                    "end": 9412
                  },
                  "start": 9398,
                  "end": 9412
                },
                "start": 9393,
                "end": 9412
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 9414,
              "end": 9421
            },
            "expression": false,
            "start": 9344,
            "end": 9421
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9435,
              "end": 9473
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
                      "start": 9481,
                      "end": 9492
                    },
                    "typeArguments": null,
                    "start": 9481,
                    "end": 9492
                  },
                  "start": 9479,
                  "end": 9492
                },
                "start": 9474,
                "end": 9492
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 9494,
              "end": 9501
            },
            "expression": false,
            "start": 9426,
            "end": 9501
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
                "start": 9531,
                "end": 9576
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
                        "start": 9584,
                        "end": 9596
                      },
                      "typeArguments": null,
                      "start": 9584,
                      "end": 9596
                    },
                    "start": 9582,
                    "end": 9596
                  },
                  "start": 9577,
                  "end": 9596
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9599,
                  "end": 9603
                },
                "start": 9597,
                "end": 9603
              },
              "body": null,
              "expression": false,
              "start": 9514,
              "end": 9604
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 9507,
            "end": 9604
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
                "start": 9642,
                "end": 9686
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
                        "start": 9694,
                        "end": 9705
                      },
                      "typeArguments": null,
                      "start": 9694,
                      "end": 9705
                    },
                    "start": 9692,
                    "end": 9705
                  },
                  "start": 9687,
                  "end": 9705
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9708,
                  "end": 9712
                },
                "start": 9706,
                "end": 9712
              },
              "body": null,
              "expression": false,
              "start": 9625,
              "end": 9713
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 9618,
            "end": 9713
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPrivateParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9735,
              "end": 9781
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
                      "start": 9789,
                      "end": 9801
                    },
                    "typeArguments": null,
                    "start": 9789,
                    "end": 9801
                  },
                  "start": 9787,
                  "end": 9801
                },
                "start": 9782,
                "end": 9801
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 9804,
                "end": 9808
              },
              "start": 9802,
              "end": 9808
            },
            "body": null,
            "expression": false,
            "start": 9718,
            "end": 9809
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPublicParmeterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9831,
              "end": 9876
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
                      "start": 9884,
                      "end": 9895
                    },
                    "typeArguments": null,
                    "start": 9884,
                    "end": 9895
                  },
                  "start": 9882,
                  "end": 9895
                },
                "start": 9877,
                "end": 9895
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 9898,
                "end": 9902
              },
              "start": 9896,
              "end": 9902
            },
            "body": null,
            "expression": false,
            "start": 9814,
            "end": 9903
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
                "start": 9926,
                "end": 9972
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
                                "start": 9995,
                                "end": 10008
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10009,
                                "end": 10020
                              },
                              "start": 9995,
                              "end": 10020
                            },
                            "typeArguments": null,
                            "start": 9995,
                            "end": 10020
                          },
                          "start": 9993,
                          "end": 10020
                        },
                        "start": 9988,
                        "end": 10020
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
                          "start": 10023,
                          "end": 10034
                        },
                        "typeArguments": null,
                        "start": 10023,
                        "end": 10034
                      },
                      "start": 10021,
                      "end": 10034
                    },
                    "start": 9983,
                    "end": 10035
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
                                "start": 10061,
                                "end": 10074
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10075,
                                "end": 10086
                              },
                              "start": 10061,
                              "end": 10086
                            },
                            "typeArguments": null,
                            "start": 10061,
                            "end": 10086
                          },
                          "start": 10059,
                          "end": 10086
                        },
                        "start": 10054,
                        "end": 10086
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
                          "start": 10089,
                          "end": 10100
                        },
                        "typeArguments": null,
                        "start": 10089,
                        "end": 10100
                      },
                      "start": 10087,
                      "end": 10100
                    },
                    "start": 10053,
                    "end": 10101
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10119,
                      "end": 10127
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
                                "start": 10135,
                                "end": 10148
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10149,
                                "end": 10160
                              },
                              "start": 10135,
                              "end": 10160
                            },
                            "typeArguments": null,
                            "start": 10135,
                            "end": 10160
                          },
                          "start": 10133,
                          "end": 10160
                        },
                        "start": 10128,
                        "end": 10160
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10163,
                        "end": 10167
                      },
                      "start": 10161,
                      "end": 10167
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10119,
                    "end": 10168
                  }
                ],
                "start": 9973,
                "end": 10183
              },
              "declare": false,
              "start": 9916,
              "end": 10183
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 9909,
            "end": 10183
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
                "start": 10201,
                "end": 10243
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
                      "start": 10261,
                      "end": 10281
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
                                  "start": 10289,
                                  "end": 10302
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10303,
                                  "end": 10314
                                },
                                "start": 10289,
                                "end": 10314
                              },
                              "typeArguments": null,
                              "start": 10289,
                              "end": 10314
                            },
                            "start": 10287,
                            "end": 10314
                          },
                          "start": 10282,
                          "end": 10314
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10316,
                        "end": 10336
                      },
                      "expression": false,
                      "start": 10281,
                      "end": 10336
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10254,
                    "end": 10336
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
                      "start": 10345,
                      "end": 10359
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
                                  "start": 10367,
                                  "end": 10380
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10381,
                                  "end": 10392
                                },
                                "start": 10367,
                                "end": 10392
                              },
                              "typeArguments": null,
                              "start": 10367,
                              "end": 10392
                            },
                            "start": 10365,
                            "end": 10392
                          },
                          "start": 10360,
                          "end": 10392
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10394,
                        "end": 10414
                      },
                      "expression": false,
                      "start": 10359,
                      "end": 10414
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10345,
                    "end": 10414
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
                      "start": 10423,
                      "end": 10434
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
                                  "start": 10442,
                                  "end": 10455
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10456,
                                  "end": 10467
                                },
                                "start": 10442,
                                "end": 10467
                              },
                              "typeArguments": null,
                              "start": 10442,
                              "end": 10467
                            },
                            "start": 10440,
                            "end": 10467
                          },
                          "start": 10435,
                          "end": 10467
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
                                    "start": 10485,
                                    "end": 10498
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10499,
                                    "end": 10510
                                  },
                                  "start": 10485,
                                  "end": 10510
                                },
                                "typeArguments": null,
                                "start": 10485,
                                "end": 10510
                              },
                              "start": 10483,
                              "end": 10510
                            },
                            "start": 10477,
                            "end": 10510
                          },
                          "readonly": false,
                          "static": false,
                          "start": 10469,
                          "end": 10510
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
                                    "start": 10527,
                                    "end": 10540
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10541,
                                    "end": 10552
                                  },
                                  "start": 10527,
                                  "end": 10552
                                },
                                "typeArguments": null,
                                "start": 10527,
                                "end": 10552
                              },
                              "start": 10525,
                              "end": 10552
                            },
                            "start": 10519,
                            "end": 10552
                          },
                          "readonly": false,
                          "static": false,
                          "start": 10512,
                          "end": 10552
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10554,
                        "end": 10574
                      },
                      "expression": false,
                      "start": 10434,
                      "end": 10574
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10423,
                    "end": 10574
                  }
                ],
                "start": 10244,
                "end": 10580
              },
              "abstract": false,
              "declare": false,
              "start": 10195,
              "end": 10580
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10188,
            "end": 10580
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
                "start": 10601,
                "end": 10646
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
                          "start": 10654,
                          "end": 10667
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10668,
                          "end": 10679
                        },
                        "start": 10654,
                        "end": 10679
                      },
                      "typeArguments": null,
                      "start": 10654,
                      "end": 10679
                    },
                    "start": 10652,
                    "end": 10679
                  },
                  "start": 10647,
                  "end": 10679
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 10681,
                "end": 10697
              },
              "expression": false,
              "start": 10592,
              "end": 10697
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10585,
            "end": 10697
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
                "start": 10726,
                "end": 10778
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
                          "start": 10786,
                          "end": 10799
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10800,
                          "end": 10811
                        },
                        "start": 10786,
                        "end": 10811
                      },
                      "typeArguments": null,
                      "start": 10786,
                      "end": 10811
                    },
                    "start": 10784,
                    "end": 10811
                  },
                  "start": 10779,
                  "end": 10811
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 10814,
                  "end": 10818
                },
                "start": 10812,
                "end": 10818
              },
              "body": null,
              "expression": false,
              "start": 10709,
              "end": 10819
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10702,
            "end": 10819
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 10844,
              "end": 10891
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
                              "start": 10914,
                              "end": 10927
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10928,
                              "end": 10939
                            },
                            "start": 10914,
                            "end": 10939
                          },
                          "typeArguments": null,
                          "start": 10914,
                          "end": 10939
                        },
                        "start": 10912,
                        "end": 10939
                      },
                      "start": 10907,
                      "end": 10939
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
                        "start": 10942,
                        "end": 10953
                      },
                      "typeArguments": null,
                      "start": 10942,
                      "end": 10953
                    },
                    "start": 10940,
                    "end": 10953
                  },
                  "start": 10902,
                  "end": 10954
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
                              "start": 10971,
                              "end": 10984
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10985,
                              "end": 10996
                            },
                            "start": 10971,
                            "end": 10996
                          },
                          "typeArguments": null,
                          "start": 10971,
                          "end": 10996
                        },
                        "start": 10969,
                        "end": 10996
                      },
                      "start": 10964,
                      "end": 10996
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
                        "start": 10999,
                        "end": 11010
                      },
                      "typeArguments": null,
                      "start": 10999,
                      "end": 11010
                    },
                    "start": 10997,
                    "end": 11010
                  },
                  "start": 10963,
                  "end": 11011
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11020,
                    "end": 11028
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
                              "start": 11036,
                              "end": 11049
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11050,
                              "end": 11061
                            },
                            "start": 11036,
                            "end": 11061
                          },
                          "typeArguments": null,
                          "start": 11036,
                          "end": 11061
                        },
                        "start": 11034,
                        "end": 11061
                      },
                      "start": 11029,
                      "end": 11061
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 11064,
                      "end": 11068
                    },
                    "start": 11062,
                    "end": 11068
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 11020,
                  "end": 11069
                }
              ],
              "start": 10892,
              "end": 11075
            },
            "declare": false,
            "start": 10834,
            "end": 11075
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
              "start": 11086,
              "end": 11129
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
                    "start": 11147,
                    "end": 11167
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
                                "start": 11175,
                                "end": 11188
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11189,
                                "end": 11200
                              },
                              "start": 11175,
                              "end": 11200
                            },
                            "typeArguments": null,
                            "start": 11175,
                            "end": 11200
                          },
                          "start": 11173,
                          "end": 11200
                        },
                        "start": 11168,
                        "end": 11200
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11202,
                      "end": 11213
                    },
                    "expression": false,
                    "start": 11167,
                    "end": 11213
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11140,
                  "end": 11213
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
                    "start": 11222,
                    "end": 11236
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
                                "start": 11244,
                                "end": 11257
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11258,
                                "end": 11269
                              },
                              "start": 11244,
                              "end": 11269
                            },
                            "typeArguments": null,
                            "start": 11244,
                            "end": 11269
                          },
                          "start": 11242,
                          "end": 11269
                        },
                        "start": 11237,
                        "end": 11269
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11271,
                      "end": 11282
                    },
                    "expression": false,
                    "start": 11236,
                    "end": 11282
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11222,
                  "end": 11282
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
                    "start": 11291,
                    "end": 11302
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
                                "start": 11310,
                                "end": 11323
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11324,
                                "end": 11335
                              },
                              "start": 11310,
                              "end": 11335
                            },
                            "typeArguments": null,
                            "start": 11310,
                            "end": 11335
                          },
                          "start": 11308,
                          "end": 11335
                        },
                        "start": 11303,
                        "end": 11335
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
                                  "start": 11353,
                                  "end": 11366
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11367,
                                  "end": 11378
                                },
                                "start": 11353,
                                "end": 11378
                              },
                              "typeArguments": null,
                              "start": 11353,
                              "end": 11378
                            },
                            "start": 11351,
                            "end": 11378
                          },
                          "start": 11345,
                          "end": 11378
                        },
                        "readonly": false,
                        "static": false,
                        "start": 11337,
                        "end": 11378
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
                                  "start": 11395,
                                  "end": 11408
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11409,
                                  "end": 11420
                                },
                                "start": 11395,
                                "end": 11420
                              },
                              "typeArguments": null,
                              "start": 11395,
                              "end": 11420
                            },
                            "start": 11393,
                            "end": 11420
                          },
                          "start": 11387,
                          "end": 11420
                        },
                        "readonly": false,
                        "static": false,
                        "start": 11380,
                        "end": 11420
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11422,
                      "end": 11433
                    },
                    "expression": false,
                    "start": 11302,
                    "end": 11433
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11291,
                  "end": 11433
                }
              ],
              "start": 11130,
              "end": 11439
            },
            "abstract": false,
            "declare": false,
            "start": 11080,
            "end": 11439
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 11453,
              "end": 11499
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
                        "start": 11507,
                        "end": 11520
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11521,
                        "end": 11532
                      },
                      "start": 11507,
                      "end": 11532
                    },
                    "typeArguments": null,
                    "start": 11507,
                    "end": 11532
                  },
                  "start": 11505,
                  "end": 11532
                },
                "start": 11500,
                "end": 11532
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 11534,
              "end": 11541
            },
            "expression": false,
            "start": 11444,
            "end": 11541
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 11563,
              "end": 11616
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
                        "start": 11624,
                        "end": 11637
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11638,
                        "end": 11649
                      },
                      "start": 11624,
                      "end": 11649
                    },
                    "typeArguments": null,
                    "start": 11624,
                    "end": 11649
                  },
                  "start": 11622,
                  "end": 11649
                },
                "start": 11617,
                "end": 11649
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 11652,
                "end": 11656
              },
              "start": 11650,
              "end": 11656
            },
            "body": null,
            "expression": false,
            "start": 11546,
            "end": 11657
          }
        ],
        "start": 920,
        "end": 11659
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 892,
      "end": 11659
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 11659
}
```
