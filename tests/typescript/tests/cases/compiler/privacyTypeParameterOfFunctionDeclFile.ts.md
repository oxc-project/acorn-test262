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
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 111
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                      "start": 123,
                      "end": 124
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 133,
                      "end": 145
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 123,
                    "end": 145
                  }
                ],
                "start": 122,
                "end": 146
              },
              "params": [],
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
                    "start": 150,
                    "end": 162
                  },
                  "typeArguments": null,
                  "start": 150,
                  "end": 162
                },
                "start": 148,
                "end": 162
              },
              "start": 118,
              "end": 163
            },
            {
              "type": "TSCallSignatureDeclaration",
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
                      "start": 179,
                      "end": 180
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 201
                      },
                      "typeArguments": null,
                      "start": 189,
                      "end": 201
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 179,
                    "end": 201
                  }
                ],
                "start": 178,
                "end": 202
              },
              "params": [],
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
                    "start": 206,
                    "end": 218
                  },
                  "typeArguments": null,
                  "start": 206,
                  "end": 218
                },
                "start": 204,
                "end": 218
              },
              "start": 178,
              "end": 219
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 242
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 243,
                      "end": 244
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 265
                      },
                      "typeArguments": null,
                      "start": 253,
                      "end": 265
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 243,
                    "end": 265
                  }
                ],
                "start": 242,
                "end": 266
              },
              "params": [],
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
                    "start": 270,
                    "end": 282
                  },
                  "typeArguments": null,
                  "start": 270,
                  "end": 282
                },
                "start": 268,
                "end": 282
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 234,
              "end": 283
            }
          ],
          "start": 112,
          "end": 295
        },
        "declare": false,
        "start": 61,
        "end": 295
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 295
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 353
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                      "start": 365,
                      "end": 366
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 375,
                        "end": 386
                      },
                      "typeArguments": null,
                      "start": 375,
                      "end": 386
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 365,
                    "end": 386
                  }
                ],
                "start": 364,
                "end": 387
              },
              "params": [],
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
                    "start": 391,
                    "end": 402
                  },
                  "typeArguments": null,
                  "start": 391,
                  "end": 402
                },
                "start": 389,
                "end": 402
              },
              "start": 360,
              "end": 403
            },
            {
              "type": "TSCallSignatureDeclaration",
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
                      "start": 409,
                      "end": 410
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 419,
                        "end": 430
                      },
                      "typeArguments": null,
                      "start": 419,
                      "end": 430
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 409,
                    "end": 430
                  }
                ],
                "start": 408,
                "end": 431
              },
              "params": [],
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
                    "start": 435,
                    "end": 446
                  },
                  "typeArguments": null,
                  "start": 435,
                  "end": 446
                },
                "start": 433,
                "end": 446
              },
              "start": 408,
              "end": 447
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 460
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 461,
                      "end": 462
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 471,
                        "end": 482
                      },
                      "typeArguments": null,
                      "start": 471,
                      "end": 482
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 461,
                    "end": 482
                  }
                ],
                "start": 460,
                "end": 483
              },
              "params": [],
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
                    "start": 487,
                    "end": 498
                  },
                  "typeArguments": null,
                  "start": 487,
                  "end": 498
                },
                "start": 485,
                "end": 498
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 452,
              "end": 499
            }
          ],
          "start": 354,
          "end": 501
        },
        "declare": false,
        "start": 304,
        "end": 501
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 297,
      "end": 501
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 554
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 566,
                    "end": 567
                  },
                  "constraint": {
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
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 566,
                  "end": 588
                }
              ],
              "start": 565,
              "end": 589
            },
            "params": [],
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
                  "start": 593,
                  "end": 605
                },
                "typeArguments": null,
                "start": 593,
                "end": 605
              },
              "start": 591,
              "end": 605
            },
            "start": 561,
            "end": 606
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 612,
                    "end": 613
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 634
                    },
                    "typeArguments": null,
                    "start": 622,
                    "end": 634
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 612,
                  "end": 634
                }
              ],
              "start": 611,
              "end": 635
            },
            "params": [],
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
                  "start": 639,
                  "end": 651
                },
                "typeArguments": null,
                "start": 639,
                "end": 651
              },
              "start": 637,
              "end": 651
            },
            "start": 611,
            "end": 652
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 665
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 666,
                    "end": 667
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 688
                    },
                    "typeArguments": null,
                    "start": 676,
                    "end": 688
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 666,
                  "end": 688
                }
              ],
              "start": 665,
              "end": 689
            },
            "params": [],
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
                  "start": 693,
                  "end": 705
                },
                "typeArguments": null,
                "start": 693,
                "end": 705
              },
              "start": 691,
              "end": 705
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 657,
            "end": 706
          }
        ],
        "start": 555,
        "end": 708
      },
      "declare": false,
      "start": 503,
      "end": 708
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 720,
        "end": 760
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 772,
                    "end": 773
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 793
                    },
                    "typeArguments": null,
                    "start": 782,
                    "end": 793
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 772,
                  "end": 793
                }
              ],
              "start": 771,
              "end": 794
            },
            "params": [],
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
                  "start": 798,
                  "end": 809
                },
                "typeArguments": null,
                "start": 798,
                "end": 809
              },
              "start": 796,
              "end": 809
            },
            "start": 767,
            "end": 810
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 816,
                    "end": 817
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 826,
                      "end": 837
                    },
                    "typeArguments": null,
                    "start": 826,
                    "end": 837
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 816,
                  "end": 837
                }
              ],
              "start": 815,
              "end": 838
            },
            "params": [],
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
                  "start": 842,
                  "end": 853
                },
                "typeArguments": null,
                "start": 842,
                "end": 853
              },
              "start": 840,
              "end": 853
            },
            "start": 815,
            "end": 854
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 867
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 868,
                    "end": 869
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 889
                    },
                    "typeArguments": null,
                    "start": 878,
                    "end": 889
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 868,
                  "end": 889
                }
              ],
              "start": 867,
              "end": 890
            },
            "params": [],
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
                  "start": 894,
                  "end": 905
                },
                "typeArguments": null,
                "start": 894,
                "end": 905
              },
              "start": 892,
              "end": 905
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 859,
            "end": 906
          }
        ],
        "start": 761,
        "end": 908
      },
      "declare": false,
      "start": 710,
      "end": 908
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 923,
          "end": 963
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
                "start": 977,
                "end": 997
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 998,
                        "end": 999
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1008,
                          "end": 1020
                        },
                        "typeArguments": null,
                        "start": 1008,
                        "end": 1020
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 998,
                      "end": 1020
                    }
                  ],
                  "start": 997,
                  "end": 1021
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1024,
                  "end": 1041
                },
                "expression": false,
                "start": 997,
                "end": 1041
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 970,
              "end": 1041
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
                "start": 1061,
                "end": 1082
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1083,
                        "end": 1084
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1093,
                          "end": 1105
                        },
                        "typeArguments": null,
                        "start": 1093,
                        "end": 1105
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1083,
                      "end": 1105
                    }
                  ],
                  "start": 1082,
                  "end": 1106
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1109,
                  "end": 1116
                },
                "expression": false,
                "start": 1082,
                "end": 1116
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1046,
              "end": 1116
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
                "start": 1121,
                "end": 1135
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1136,
                        "end": 1137
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1146,
                          "end": 1158
                        },
                        "typeArguments": null,
                        "start": 1146,
                        "end": 1158
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1136,
                      "end": 1158
                    }
                  ],
                  "start": 1135,
                  "end": 1159
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1162,
                  "end": 1179
                },
                "expression": false,
                "start": 1135,
                "end": 1179
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1121,
              "end": 1179
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
                "start": 1192,
                "end": 1207
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1208,
                        "end": 1209
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1218,
                          "end": 1230
                        },
                        "typeArguments": null,
                        "start": 1218,
                        "end": 1230
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1208,
                      "end": 1230
                    }
                  ],
                  "start": 1207,
                  "end": 1231
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1234,
                  "end": 1241
                },
                "expression": false,
                "start": 1207,
                "end": 1241
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1184,
              "end": 1241
            }
          ],
          "start": 964,
          "end": 1243
        },
        "abstract": false,
        "declare": false,
        "start": 917,
        "end": 1243
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 910,
      "end": 1243
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 1258,
          "end": 1297
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
                "start": 1311,
                "end": 1331
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1332,
                        "end": 1333
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1342,
                          "end": 1353
                        },
                        "typeArguments": null,
                        "start": 1342,
                        "end": 1353
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1332,
                      "end": 1353
                    }
                  ],
                  "start": 1331,
                  "end": 1354
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1357,
                  "end": 1364
                },
                "expression": false,
                "start": 1331,
                "end": 1364
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1304,
              "end": 1364
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
                "start": 1384,
                "end": 1405
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1406,
                        "end": 1407
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1416,
                          "end": 1427
                        },
                        "typeArguments": null,
                        "start": 1416,
                        "end": 1427
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1406,
                      "end": 1427
                    }
                  ],
                  "start": 1405,
                  "end": 1428
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1431,
                  "end": 1439
                },
                "expression": false,
                "start": 1405,
                "end": 1439
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1369,
              "end": 1439
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
                "start": 1444,
                "end": 1458
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1459,
                        "end": 1460
                      },
                      "constraint": {
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
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1459,
                      "end": 1480
                    }
                  ],
                  "start": 1458,
                  "end": 1481
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1484,
                  "end": 1491
                },
                "expression": false,
                "start": 1458,
                "end": 1491
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1444,
              "end": 1491
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
                "start": 1504,
                "end": 1519
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1520,
                        "end": 1521
                      },
                      "constraint": {
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
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1520,
                      "end": 1541
                    }
                  ],
                  "start": 1519,
                  "end": 1542
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1545,
                  "end": 1552
                },
                "expression": false,
                "start": 1519,
                "end": 1552
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1496,
              "end": 1552
            }
          ],
          "start": 1298,
          "end": 1554
        },
        "abstract": false,
        "declare": false,
        "start": 1252,
        "end": 1554
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1245,
      "end": 1554
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1603
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
              "start": 1617,
              "end": 1637
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 1638,
                      "end": 1639
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1648,
                        "end": 1660
                      },
                      "typeArguments": null,
                      "start": 1648,
                      "end": 1660
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1638,
                    "end": 1660
                  }
                ],
                "start": 1637,
                "end": 1661
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1664,
                "end": 1671
              },
              "expression": false,
              "start": 1637,
              "end": 1671
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1610,
            "end": 1671
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
              "start": 1691,
              "end": 1712
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 1713,
                      "end": 1714
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1723,
                        "end": 1735
                      },
                      "typeArguments": null,
                      "start": 1723,
                      "end": 1735
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1713,
                    "end": 1735
                  }
                ],
                "start": 1712,
                "end": 1736
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1739,
                "end": 1746
              },
              "expression": false,
              "start": 1712,
              "end": 1746
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1676,
            "end": 1746
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
              "start": 1751,
              "end": 1765
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 1766,
                      "end": 1767
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1776,
                        "end": 1788
                      },
                      "typeArguments": null,
                      "start": 1776,
                      "end": 1788
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1766,
                    "end": 1788
                  }
                ],
                "start": 1765,
                "end": 1789
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1792,
                "end": 1799
              },
              "expression": false,
              "start": 1765,
              "end": 1799
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1751,
            "end": 1799
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
              "start": 1812,
              "end": 1827
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 1828,
                      "end": 1829
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1838,
                        "end": 1850
                      },
                      "typeArguments": null,
                      "start": 1838,
                      "end": 1850
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1828,
                    "end": 1850
                  }
                ],
                "start": 1827,
                "end": 1851
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1854,
                "end": 1861
              },
              "expression": false,
              "start": 1827,
              "end": 1861
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1804,
            "end": 1861
          }
        ],
        "start": 1604,
        "end": 1863
      },
      "abstract": false,
      "declare": false,
      "start": 1556,
      "end": 1863
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1871,
        "end": 1911
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
              "start": 1925,
              "end": 1945
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 1946,
                      "end": 1947
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1956,
                        "end": 1967
                      },
                      "typeArguments": null,
                      "start": 1956,
                      "end": 1967
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1946,
                    "end": 1967
                  }
                ],
                "start": 1945,
                "end": 1968
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1971,
                "end": 1978
              },
              "expression": false,
              "start": 1945,
              "end": 1978
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1918,
            "end": 1978
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
              "start": 1998,
              "end": 2019
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 2020,
                      "end": 2021
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2030,
                        "end": 2041
                      },
                      "typeArguments": null,
                      "start": 2030,
                      "end": 2041
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2020,
                    "end": 2041
                  }
                ],
                "start": 2019,
                "end": 2042
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2045,
                "end": 2052
              },
              "expression": false,
              "start": 2019,
              "end": 2052
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1983,
            "end": 2052
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
              "start": 2057,
              "end": 2071
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 2072,
                      "end": 2073
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2082,
                        "end": 2093
                      },
                      "typeArguments": null,
                      "start": 2082,
                      "end": 2093
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2072,
                    "end": 2093
                  }
                ],
                "start": 2071,
                "end": 2094
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2097,
                "end": 2104
              },
              "expression": false,
              "start": 2071,
              "end": 2104
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2057,
            "end": 2104
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
              "start": 2117,
              "end": 2132
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 2133,
                      "end": 2134
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2143,
                        "end": 2154
                      },
                      "typeArguments": null,
                      "start": 2143,
                      "end": 2154
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2133,
                    "end": 2154
                  }
                ],
                "start": 2132,
                "end": 2155
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2158,
                "end": 2165
              },
              "expression": false,
              "start": 2132,
              "end": 2165
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2109,
            "end": 2165
          }
        ],
        "start": 1912,
        "end": 2167
      },
      "abstract": false,
      "declare": false,
      "start": 1865,
      "end": 2167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2185,
          "end": 2224
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 2225,
                "end": 2226
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2235,
                  "end": 2247
                },
                "typeArguments": null,
                "start": 2235,
                "end": 2247
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2225,
              "end": 2247
            }
          ],
          "start": 2224,
          "end": 2248
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 2251,
          "end": 2264
        },
        "expression": false,
        "start": 2176,
        "end": 2264
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2169,
      "end": 2264
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2282,
          "end": 2320
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 2321,
                "end": 2322
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2331,
                  "end": 2342
                },
                "typeArguments": null,
                "start": 2331,
                "end": 2342
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2321,
              "end": 2342
            }
          ],
          "start": 2320,
          "end": 2343
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 2346,
          "end": 2349
        },
        "expression": false,
        "start": 2273,
        "end": 2349
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2266,
      "end": 2349
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 2360,
        "end": 2400
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 2401,
              "end": 2402
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2411,
                "end": 2423
              },
              "typeArguments": null,
              "start": 2411,
              "end": 2423
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2401,
            "end": 2423
          }
        ],
        "start": 2400,
        "end": 2424
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2427,
        "end": 2430
      },
      "expression": false,
      "start": 2351,
      "end": 2430
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 2441,
        "end": 2480
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 2481,
              "end": 2482
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2491,
                "end": 2502
              },
              "typeArguments": null,
              "start": 2491,
              "end": 2502
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2481,
            "end": 2502
          }
        ],
        "start": 2480,
        "end": 2503
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2506,
        "end": 2509
      },
      "expression": false,
      "start": 2432,
      "end": 2509
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 2528,
          "end": 2581
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                      "start": 2593,
                      "end": 2594
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2593,
                    "end": 2594
                  }
                ],
                "start": 2592,
                "end": 2595
              },
              "params": [],
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
                    "start": 2599,
                    "end": 2610
                  },
                  "typeArguments": null,
                  "start": 2599,
                  "end": 2610
                },
                "start": 2597,
                "end": 2610
              },
              "start": 2588,
              "end": 2611
            },
            {
              "type": "TSCallSignatureDeclaration",
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
                      "start": 2617,
                      "end": 2618
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2617,
                    "end": 2618
                  }
                ],
                "start": 2616,
                "end": 2619
              },
              "params": [],
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
                    "start": 2623,
                    "end": 2634
                  },
                  "typeArguments": null,
                  "start": 2623,
                  "end": 2634
                },
                "start": 2621,
                "end": 2634
              },
              "start": 2616,
              "end": 2635
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 2640,
                "end": 2648
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 2649,
                      "end": 2650
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2649,
                    "end": 2650
                  }
                ],
                "start": 2648,
                "end": 2651
              },
              "params": [],
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
                    "start": 2655,
                    "end": 2666
                  },
                  "typeArguments": null,
                  "start": 2655,
                  "end": 2666
                },
                "start": 2653,
                "end": 2666
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2640,
              "end": 2667
            }
          ],
          "start": 2582,
          "end": 2669
        },
        "declare": false,
        "start": 2518,
        "end": 2669
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2511,
      "end": 2669
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 2681,
        "end": 2735
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 2747,
                    "end": 2748
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2747,
                  "end": 2748
                }
              ],
              "start": 2746,
              "end": 2749
            },
            "params": [],
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
                  "start": 2753,
                  "end": 2764
                },
                "typeArguments": null,
                "start": 2753,
                "end": 2764
              },
              "start": 2751,
              "end": 2764
            },
            "start": 2742,
            "end": 2765
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 2771,
                    "end": 2772
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2771,
                  "end": 2772
                }
              ],
              "start": 2770,
              "end": 2773
            },
            "params": [],
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
                  "start": 2777,
                  "end": 2788
                },
                "typeArguments": null,
                "start": 2777,
                "end": 2788
              },
              "start": 2775,
              "end": 2788
            },
            "start": 2770,
            "end": 2789
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2794,
              "end": 2802
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 2803,
                    "end": 2804
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2803,
                  "end": 2804
                }
              ],
              "start": 2802,
              "end": 2805
            },
            "params": [],
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
                  "start": 2809,
                  "end": 2820
                },
                "typeArguments": null,
                "start": 2809,
                "end": 2820
              },
              "start": 2807,
              "end": 2820
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2794,
            "end": 2821
          }
        ],
        "start": 2736,
        "end": 2823
      },
      "declare": false,
      "start": 2671,
      "end": 2823
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 2838,
          "end": 2891
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
                "start": 2905,
                "end": 2925
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2926,
                        "end": 2927
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2926,
                      "end": 2927
                    }
                  ],
                  "start": 2925,
                  "end": 2928
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2931,
                  "end": 2938
                },
                "expression": false,
                "start": 2925,
                "end": 2938
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2898,
              "end": 2938
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
                "start": 2958,
                "end": 2979
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2980,
                        "end": 2981
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2980,
                      "end": 2981
                    }
                  ],
                  "start": 2979,
                  "end": 2982
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2985,
                  "end": 2992
                },
                "expression": false,
                "start": 2979,
                "end": 2992
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2943,
              "end": 2992
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
                "start": 2997,
                "end": 3011
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 3012,
                        "end": 3013
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3012,
                      "end": 3013
                    }
                  ],
                  "start": 3011,
                  "end": 3014
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3017,
                  "end": 3024
                },
                "expression": false,
                "start": 3011,
                "end": 3024
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2997,
              "end": 3024
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
                "start": 3037,
                "end": 3052
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 3053,
                        "end": 3054
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3053,
                      "end": 3054
                    }
                  ],
                  "start": 3052,
                  "end": 3055
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3058,
                  "end": 3065
                },
                "expression": false,
                "start": 3052,
                "end": 3065
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3029,
              "end": 3065
            }
          ],
          "start": 2892,
          "end": 3067
        },
        "abstract": false,
        "declare": false,
        "start": 2832,
        "end": 3067
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2825,
      "end": 3067
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 3074,
        "end": 3128
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
              "start": 3142,
              "end": 3162
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 3163,
                      "end": 3164
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3163,
                    "end": 3164
                  }
                ],
                "start": 3162,
                "end": 3165
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3168,
                "end": 3175
              },
              "expression": false,
              "start": 3162,
              "end": 3175
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3135,
            "end": 3175
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
              "start": 3195,
              "end": 3216
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 3217,
                      "end": 3218
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3217,
                    "end": 3218
                  }
                ],
                "start": 3216,
                "end": 3219
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3222,
                "end": 3229
              },
              "expression": false,
              "start": 3216,
              "end": 3229
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3180,
            "end": 3229
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
              "start": 3234,
              "end": 3248
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 3249,
                      "end": 3250
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3249,
                    "end": 3250
                  }
                ],
                "start": 3248,
                "end": 3251
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3254,
                "end": 3261
              },
              "expression": false,
              "start": 3248,
              "end": 3261
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3234,
            "end": 3261
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
              "start": 3274,
              "end": 3289
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 3290,
                      "end": 3291
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3290,
                    "end": 3291
                  }
                ],
                "start": 3289,
                "end": 3292
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3295,
                "end": 3302
              },
              "expression": false,
              "start": 3289,
              "end": 3302
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3266,
            "end": 3302
          }
        ],
        "start": 3129,
        "end": 3304
      },
      "abstract": false,
      "declare": false,
      "start": 3068,
      "end": 3304
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 3322,
          "end": 3374
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 3375,
                "end": 3376
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3375,
              "end": 3376
            }
          ],
          "start": 3374,
          "end": 3377
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3380,
          "end": 3383
        },
        "expression": false,
        "start": 3313,
        "end": 3383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3306,
      "end": 3383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 3394,
        "end": 3447
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 3448,
              "end": 3449
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3448,
            "end": 3449
          }
        ],
        "start": 3447,
        "end": 3450
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3453,
        "end": 3456
      },
      "expression": false,
      "start": 3385,
      "end": 3456
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivatModuleTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 3475,
          "end": 3520
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                      "start": 3532,
                      "end": 3533
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3542,
                          "end": 3555
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3556,
                          "end": 3567
                        },
                        "start": 3542,
                        "end": 3567
                      },
                      "typeArguments": null,
                      "start": 3542,
                      "end": 3567
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3532,
                    "end": 3567
                  }
                ],
                "start": 3531,
                "end": 3568
              },
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
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3572,
                      "end": 3585
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3586,
                      "end": 3597
                    },
                    "start": 3572,
                    "end": 3597
                  },
                  "typeArguments": null,
                  "start": 3572,
                  "end": 3597
                },
                "start": 3570,
                "end": 3597
              },
              "start": 3527,
              "end": 3598
            },
            {
              "type": "TSCallSignatureDeclaration",
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
                      "start": 3614,
                      "end": 3615
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3624,
                          "end": 3637
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3638,
                          "end": 3649
                        },
                        "start": 3624,
                        "end": 3649
                      },
                      "typeArguments": null,
                      "start": 3624,
                      "end": 3649
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3614,
                    "end": 3649
                  }
                ],
                "start": 3613,
                "end": 3650
              },
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
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3654,
                      "end": 3667
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3668,
                      "end": 3679
                    },
                    "start": 3654,
                    "end": 3679
                  },
                  "typeArguments": null,
                  "start": 3654,
                  "end": 3679
                },
                "start": 3652,
                "end": 3679
              },
              "start": 3613,
              "end": 3680
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3695,
                "end": 3703
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 3704,
                      "end": 3705
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3714,
                          "end": 3727
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3728,
                          "end": 3739
                        },
                        "start": 3714,
                        "end": 3739
                      },
                      "typeArguments": null,
                      "start": 3714,
                      "end": 3739
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3704,
                    "end": 3739
                  }
                ],
                "start": 3703,
                "end": 3740
              },
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
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3744,
                      "end": 3757
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3758,
                      "end": 3769
                    },
                    "start": 3744,
                    "end": 3769
                  },
                  "typeArguments": null,
                  "start": 3744,
                  "end": 3769
                },
                "start": 3742,
                "end": 3769
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3695,
              "end": 3770
            }
          ],
          "start": 3521,
          "end": 3782
        },
        "declare": false,
        "start": 3465,
        "end": 3782
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3458,
      "end": 3782
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateModuleTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 3796,
          "end": 3842
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
                "start": 3856,
                "end": 3876
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 3877,
                        "end": 3878
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3887,
                            "end": 3900
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3901,
                            "end": 3912
                          },
                          "start": 3887,
                          "end": 3912
                        },
                        "typeArguments": null,
                        "start": 3887,
                        "end": 3912
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3877,
                      "end": 3912
                    }
                  ],
                  "start": 3876,
                  "end": 3913
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3916,
                  "end": 3933
                },
                "expression": false,
                "start": 3876,
                "end": 3933
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3849,
              "end": 3933
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
                "start": 3938,
                "end": 3952
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 3953,
                        "end": 3954
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3963,
                            "end": 3976
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3977,
                            "end": 3988
                          },
                          "start": 3963,
                          "end": 3988
                        },
                        "typeArguments": null,
                        "start": 3963,
                        "end": 3988
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3953,
                      "end": 3988
                    }
                  ],
                  "start": 3952,
                  "end": 3989
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3992,
                  "end": 4009
                },
                "expression": false,
                "start": 3952,
                "end": 4009
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3938,
              "end": 4009
            }
          ],
          "start": 3843,
          "end": 4011
        },
        "abstract": false,
        "declare": false,
        "start": 3790,
        "end": 4011
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3783,
      "end": 4011
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPrivateMopduleTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4028,
          "end": 4074
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 4075,
                "end": 4076
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4085,
                    "end": 4098
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4099,
                    "end": 4110
                  },
                  "start": 4085,
                  "end": 4110
                },
                "typeArguments": null,
                "start": 4085,
                "end": 4110
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4075,
              "end": 4110
            }
          ],
          "start": 4074,
          "end": 4111
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 4114,
          "end": 4127
        },
        "expression": false,
        "start": 4019,
        "end": 4127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4012,
      "end": 4127
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivatModuleTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 4140,
        "end": 4186
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 4198,
                    "end": 4199
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4208,
                        "end": 4221
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4222,
                        "end": 4233
                      },
                      "start": 4208,
                      "end": 4233
                    },
                    "typeArguments": null,
                    "start": 4208,
                    "end": 4233
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4198,
                  "end": 4233
                }
              ],
              "start": 4197,
              "end": 4234
            },
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
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4238,
                    "end": 4251
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4252,
                    "end": 4263
                  },
                  "start": 4238,
                  "end": 4263
                },
                "typeArguments": null,
                "start": 4238,
                "end": 4263
              },
              "start": 4236,
              "end": 4263
            },
            "start": 4193,
            "end": 4264
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 4270,
                    "end": 4271
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4280,
                        "end": 4293
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4294,
                        "end": 4305
                      },
                      "start": 4280,
                      "end": 4305
                    },
                    "typeArguments": null,
                    "start": 4280,
                    "end": 4305
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4270,
                  "end": 4305
                }
              ],
              "start": 4269,
              "end": 4306
            },
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
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4310,
                    "end": 4323
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4324,
                    "end": 4335
                  },
                  "start": 4310,
                  "end": 4335
                },
                "typeArguments": null,
                "start": 4310,
                "end": 4335
              },
              "start": 4308,
              "end": 4335
            },
            "start": 4269,
            "end": 4336
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4341,
              "end": 4349
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 4350,
                    "end": 4351
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4360,
                        "end": 4373
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4374,
                        "end": 4385
                      },
                      "start": 4360,
                      "end": 4385
                    },
                    "typeArguments": null,
                    "start": 4360,
                    "end": 4385
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4350,
                  "end": 4385
                }
              ],
              "start": 4349,
              "end": 4386
            },
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
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4390,
                    "end": 4403
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4404,
                    "end": 4415
                  },
                  "start": 4390,
                  "end": 4415
                },
                "typeArguments": null,
                "start": 4390,
                "end": 4415
              },
              "start": 4388,
              "end": 4415
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4341,
            "end": 4416
          }
        ],
        "start": 4187,
        "end": 4418
      },
      "declare": false,
      "start": 4130,
      "end": 4418
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivateModuleTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 4425,
        "end": 4472
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
              "start": 4486,
              "end": 4506
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 4507,
                      "end": 4508
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4517,
                          "end": 4530
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4531,
                          "end": 4542
                        },
                        "start": 4517,
                        "end": 4542
                      },
                      "typeArguments": null,
                      "start": 4517,
                      "end": 4542
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4507,
                    "end": 4542
                  }
                ],
                "start": 4506,
                "end": 4543
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4546,
                "end": 4553
              },
              "expression": false,
              "start": 4506,
              "end": 4553
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4479,
            "end": 4553
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
              "start": 4558,
              "end": 4572
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 4573,
                      "end": 4574
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4583,
                          "end": 4596
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4597,
                          "end": 4608
                        },
                        "start": 4583,
                        "end": 4608
                      },
                      "typeArguments": null,
                      "start": 4583,
                      "end": 4608
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4573,
                    "end": 4608
                  }
                ],
                "start": 4572,
                "end": 4609
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4612,
                "end": 4619
              },
              "expression": false,
              "start": 4572,
              "end": 4619
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4558,
            "end": 4619
          }
        ],
        "start": 4473,
        "end": 4621
      },
      "abstract": false,
      "declare": false,
      "start": 4419,
      "end": 4621
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPrivateMopduleTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 4631,
        "end": 4678
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 4679,
              "end": 4680
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4689,
                  "end": 4702
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4703,
                  "end": 4714
                },
                "start": 4689,
                "end": 4714
              },
              "typeArguments": null,
              "start": 4689,
              "end": 4714
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4679,
            "end": 4714
          }
        ],
        "start": 4678,
        "end": 4715
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4718,
        "end": 4721
      },
      "expression": false,
      "start": 4622,
      "end": 4721
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
          "start": 4741,
          "end": 4753
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
                "start": 4766,
                "end": 4778
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4779,
                "end": 4786
              },
              "abstract": false,
              "declare": false,
              "start": 4760,
              "end": 4786
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
                  "start": 4805,
                  "end": 4816
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 4817,
                  "end": 4824
                },
                "abstract": false,
                "declare": false,
                "start": 4799,
                "end": 4824
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 4792,
              "end": 4824
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4847,
                  "end": 4887
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
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
                              "start": 4903,
                              "end": 4904
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4913,
                                "end": 4925
                              },
                              "typeArguments": null,
                              "start": 4913,
                              "end": 4925
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4903,
                            "end": 4925
                          }
                        ],
                        "start": 4902,
                        "end": 4926
                      },
                      "params": [],
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
                            "start": 4930,
                            "end": 4942
                          },
                          "typeArguments": null,
                          "start": 4930,
                          "end": 4942
                        },
                        "start": 4928,
                        "end": 4942
                      },
                      "start": 4898,
                      "end": 4943
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
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
                              "start": 4963,
                              "end": 4964
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4973,
                                "end": 4985
                              },
                              "typeArguments": null,
                              "start": 4973,
                              "end": 4985
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4963,
                            "end": 4985
                          }
                        ],
                        "start": 4962,
                        "end": 4986
                      },
                      "params": [],
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
                            "start": 4990,
                            "end": 5002
                          },
                          "typeArguments": null,
                          "start": 4990,
                          "end": 5002
                        },
                        "start": 4988,
                        "end": 5002
                      },
                      "start": 4962,
                      "end": 5003
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5022,
                        "end": 5030
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                              "start": 5031,
                              "end": 5032
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5041,
                                "end": 5053
                              },
                              "typeArguments": null,
                              "start": 5041,
                              "end": 5053
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5031,
                            "end": 5053
                          }
                        ],
                        "start": 5030,
                        "end": 5054
                      },
                      "params": [],
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
                            "start": 5058,
                            "end": 5070
                          },
                          "typeArguments": null,
                          "start": 5058,
                          "end": 5070
                        },
                        "start": 5056,
                        "end": 5070
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5022,
                      "end": 5071
                    }
                  ],
                  "start": 4888,
                  "end": 5087
                },
                "declare": false,
                "start": 4837,
                "end": 5087
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4830,
              "end": 5087
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5110,
                  "end": 5149
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
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
                              "start": 5165,
                              "end": 5166
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5175,
                                "end": 5186
                              },
                              "typeArguments": null,
                              "start": 5175,
                              "end": 5186
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5165,
                            "end": 5186
                          }
                        ],
                        "start": 5164,
                        "end": 5187
                      },
                      "params": [],
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
                      "start": 5160,
                      "end": 5203
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
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
                              "start": 5213,
                              "end": 5214
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5223,
                                "end": 5234
                              },
                              "typeArguments": null,
                              "start": 5223,
                              "end": 5234
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5213,
                            "end": 5234
                          }
                        ],
                        "start": 5212,
                        "end": 5235
                      },
                      "params": [],
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
                      "start": 5212,
                      "end": 5251
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5260,
                        "end": 5268
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                              "start": 5269,
                              "end": 5270
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5279,
                                "end": 5290
                              },
                              "typeArguments": null,
                              "start": 5279,
                              "end": 5290
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5269,
                            "end": 5290
                          }
                        ],
                        "start": 5268,
                        "end": 5291
                      },
                      "params": [],
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
                            "start": 5295,
                            "end": 5306
                          },
                          "typeArguments": null,
                          "start": 5295,
                          "end": 5306
                        },
                        "start": 5293,
                        "end": 5306
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5260,
                      "end": 5307
                    }
                  ],
                  "start": 5150,
                  "end": 5313
                },
                "declare": false,
                "start": 5100,
                "end": 5313
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 5093,
              "end": 5313
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 5329,
                "end": 5370
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 5386,
                            "end": 5387
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5396,
                              "end": 5408
                            },
                            "typeArguments": null,
                            "start": 5396,
                            "end": 5408
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5386,
                          "end": 5408
                        }
                      ],
                      "start": 5385,
                      "end": 5409
                    },
                    "params": [],
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
                          "start": 5413,
                          "end": 5425
                        },
                        "typeArguments": null,
                        "start": 5413,
                        "end": 5425
                      },
                      "start": 5411,
                      "end": 5425
                    },
                    "start": 5381,
                    "end": 5426
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 5436,
                            "end": 5437
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5446,
                              "end": 5458
                            },
                            "typeArguments": null,
                            "start": 5446,
                            "end": 5458
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5436,
                          "end": 5458
                        }
                      ],
                      "start": 5435,
                      "end": 5459
                    },
                    "params": [],
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
                          "start": 5463,
                          "end": 5475
                        },
                        "typeArguments": null,
                        "start": 5463,
                        "end": 5475
                      },
                      "start": 5461,
                      "end": 5475
                    },
                    "start": 5435,
                    "end": 5476
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5485,
                      "end": 5493
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 5494,
                            "end": 5495
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5504,
                              "end": 5516
                            },
                            "typeArguments": null,
                            "start": 5504,
                            "end": 5516
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5494,
                          "end": 5516
                        }
                      ],
                      "start": 5493,
                      "end": 5517
                    },
                    "params": [],
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
                          "start": 5521,
                          "end": 5533
                        },
                        "typeArguments": null,
                        "start": 5521,
                        "end": 5533
                      },
                      "start": 5519,
                      "end": 5533
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5485,
                    "end": 5534
                  }
                ],
                "start": 5371,
                "end": 5540
              },
              "declare": false,
              "start": 5319,
              "end": 5540
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 5556,
                "end": 5596
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 5612,
                            "end": 5613
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5622,
                              "end": 5633
                            },
                            "typeArguments": null,
                            "start": 5622,
                            "end": 5633
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5612,
                          "end": 5633
                        }
                      ],
                      "start": 5611,
                      "end": 5634
                    },
                    "params": [],
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
                          "start": 5638,
                          "end": 5649
                        },
                        "typeArguments": null,
                        "start": 5638,
                        "end": 5649
                      },
                      "start": 5636,
                      "end": 5649
                    },
                    "start": 5607,
                    "end": 5650
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 5660,
                            "end": 5661
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5670,
                              "end": 5681
                            },
                            "typeArguments": null,
                            "start": 5670,
                            "end": 5681
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5660,
                          "end": 5681
                        }
                      ],
                      "start": 5659,
                      "end": 5682
                    },
                    "params": [],
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
                          "start": 5686,
                          "end": 5697
                        },
                        "typeArguments": null,
                        "start": 5686,
                        "end": 5697
                      },
                      "start": 5684,
                      "end": 5697
                    },
                    "start": 5659,
                    "end": 5698
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5707,
                      "end": 5715
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 5716,
                            "end": 5717
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5726,
                              "end": 5737
                            },
                            "typeArguments": null,
                            "start": 5726,
                            "end": 5737
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5716,
                          "end": 5737
                        }
                      ],
                      "start": 5715,
                      "end": 5738
                    },
                    "params": [],
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
                          "start": 5742,
                          "end": 5753
                        },
                        "typeArguments": null,
                        "start": 5742,
                        "end": 5753
                      },
                      "start": 5740,
                      "end": 5753
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5707,
                    "end": 5754
                  }
                ],
                "start": 5597,
                "end": 5760
              },
              "declare": false,
              "start": 5546,
              "end": 5760
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5779,
                  "end": 5819
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
                        "start": 5837,
                        "end": 5857
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 5858,
                                "end": 5859
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5868,
                                  "end": 5880
                                },
                                "typeArguments": null,
                                "start": 5868,
                                "end": 5880
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 5858,
                              "end": 5880
                            }
                          ],
                          "start": 5857,
                          "end": 5881
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5884,
                          "end": 5905
                        },
                        "expression": false,
                        "start": 5857,
                        "end": 5905
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5830,
                      "end": 5905
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
                        "start": 5929,
                        "end": 5950
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 5951,
                                "end": 5952
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5961,
                                  "end": 5973
                                },
                                "typeArguments": null,
                                "start": 5961,
                                "end": 5973
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 5951,
                              "end": 5973
                            }
                          ],
                          "start": 5950,
                          "end": 5974
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5977,
                          "end": 5988
                        },
                        "expression": false,
                        "start": 5950,
                        "end": 5988
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5914,
                      "end": 5988
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
                        "start": 5997,
                        "end": 6011
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 6012,
                                "end": 6013
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6022,
                                  "end": 6034
                                },
                                "typeArguments": null,
                                "start": 6022,
                                "end": 6034
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6012,
                              "end": 6034
                            }
                          ],
                          "start": 6011,
                          "end": 6035
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6038,
                          "end": 6059
                        },
                        "expression": false,
                        "start": 6011,
                        "end": 6059
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5997,
                      "end": 6059
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
                        "start": 6076,
                        "end": 6091
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 6092,
                                "end": 6093
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6102,
                                  "end": 6114
                                },
                                "typeArguments": null,
                                "start": 6102,
                                "end": 6114
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6092,
                              "end": 6114
                            }
                          ],
                          "start": 6091,
                          "end": 6115
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6118,
                          "end": 6129
                        },
                        "expression": false,
                        "start": 6091,
                        "end": 6129
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6068,
                      "end": 6129
                    }
                  ],
                  "start": 5820,
                  "end": 6135
                },
                "abstract": false,
                "declare": false,
                "start": 5773,
                "end": 6135
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5766,
              "end": 6135
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6154,
                  "end": 6193
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
                        "start": 6211,
                        "end": 6231
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 6232,
                                "end": 6233
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6242,
                                  "end": 6253
                                },
                                "typeArguments": null,
                                "start": 6242,
                                "end": 6253
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6232,
                              "end": 6253
                            }
                          ],
                          "start": 6231,
                          "end": 6254
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6257,
                          "end": 6268
                        },
                        "expression": false,
                        "start": 6231,
                        "end": 6268
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6204,
                      "end": 6268
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
                        "start": 6292,
                        "end": 6313
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 6314,
                                "end": 6315
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6324,
                                  "end": 6335
                                },
                                "typeArguments": null,
                                "start": 6324,
                                "end": 6335
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6314,
                              "end": 6335
                            }
                          ],
                          "start": 6313,
                          "end": 6336
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6339,
                          "end": 6350
                        },
                        "expression": false,
                        "start": 6313,
                        "end": 6350
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6277,
                      "end": 6350
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
                        "start": 6359,
                        "end": 6373
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 6374,
                                "end": 6375
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6384,
                                  "end": 6395
                                },
                                "typeArguments": null,
                                "start": 6384,
                                "end": 6395
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6374,
                              "end": 6395
                            }
                          ],
                          "start": 6373,
                          "end": 6396
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6399,
                          "end": 6410
                        },
                        "expression": false,
                        "start": 6373,
                        "end": 6410
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6359,
                      "end": 6410
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
                        "start": 6427,
                        "end": 6442
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 6443,
                                "end": 6444
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6453,
                                  "end": 6464
                                },
                                "typeArguments": null,
                                "start": 6453,
                                "end": 6464
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6443,
                              "end": 6464
                            }
                          ],
                          "start": 6442,
                          "end": 6465
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6468,
                          "end": 6479
                        },
                        "expression": false,
                        "start": 6442,
                        "end": 6479
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6419,
                      "end": 6479
                    }
                  ],
                  "start": 6194,
                  "end": 6485
                },
                "abstract": false,
                "declare": false,
                "start": 6148,
                "end": 6485
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6141,
              "end": 6485
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 6497,
                "end": 6538
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
                      "start": 6556,
                      "end": 6576
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 6577,
                              "end": 6578
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6587,
                                "end": 6599
                              },
                              "typeArguments": null,
                              "start": 6587,
                              "end": 6599
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6577,
                            "end": 6599
                          }
                        ],
                        "start": 6576,
                        "end": 6600
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6603,
                        "end": 6614
                      },
                      "expression": false,
                      "start": 6576,
                      "end": 6614
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6549,
                    "end": 6614
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
                      "start": 6638,
                      "end": 6659
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 6660,
                              "end": 6661
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6670,
                                "end": 6682
                              },
                              "typeArguments": null,
                              "start": 6670,
                              "end": 6682
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6660,
                            "end": 6682
                          }
                        ],
                        "start": 6659,
                        "end": 6683
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6686,
                        "end": 6697
                      },
                      "expression": false,
                      "start": 6659,
                      "end": 6697
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6623,
                    "end": 6697
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
                      "start": 6706,
                      "end": 6720
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 6721,
                              "end": 6722
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6731,
                                "end": 6743
                              },
                              "typeArguments": null,
                              "start": 6731,
                              "end": 6743
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6721,
                            "end": 6743
                          }
                        ],
                        "start": 6720,
                        "end": 6744
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6747,
                        "end": 6758
                      },
                      "expression": false,
                      "start": 6720,
                      "end": 6758
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6706,
                    "end": 6758
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
                      "start": 6775,
                      "end": 6790
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 6791,
                              "end": 6792
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6801,
                                "end": 6813
                              },
                              "typeArguments": null,
                              "start": 6801,
                              "end": 6813
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6791,
                            "end": 6813
                          }
                        ],
                        "start": 6790,
                        "end": 6814
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6817,
                        "end": 6828
                      },
                      "expression": false,
                      "start": 6790,
                      "end": 6828
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6767,
                    "end": 6828
                  }
                ],
                "start": 6539,
                "end": 6834
              },
              "abstract": false,
              "declare": false,
              "start": 6491,
              "end": 6834
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 6846,
                "end": 6886
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
                      "start": 6904,
                      "end": 6924
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 6925,
                              "end": 6926
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6935,
                                "end": 6946
                              },
                              "typeArguments": null,
                              "start": 6935,
                              "end": 6946
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6925,
                            "end": 6946
                          }
                        ],
                        "start": 6924,
                        "end": 6947
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6950,
                        "end": 6961
                      },
                      "expression": false,
                      "start": 6924,
                      "end": 6961
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6897,
                    "end": 6961
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
                      "start": 6985,
                      "end": 7006
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 7007,
                              "end": 7008
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7017,
                                "end": 7028
                              },
                              "typeArguments": null,
                              "start": 7017,
                              "end": 7028
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7007,
                            "end": 7028
                          }
                        ],
                        "start": 7006,
                        "end": 7029
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7032,
                        "end": 7043
                      },
                      "expression": false,
                      "start": 7006,
                      "end": 7043
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6970,
                    "end": 7043
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
                      "start": 7052,
                      "end": 7066
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 7067,
                              "end": 7068
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7077,
                                "end": 7088
                              },
                              "typeArguments": null,
                              "start": 7077,
                              "end": 7088
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7067,
                            "end": 7088
                          }
                        ],
                        "start": 7066,
                        "end": 7089
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7092,
                        "end": 7103
                      },
                      "expression": false,
                      "start": 7066,
                      "end": 7103
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7052,
                    "end": 7103
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
                      "start": 7120,
                      "end": 7135
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 7136,
                              "end": 7137
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7146,
                                "end": 7157
                              },
                              "typeArguments": null,
                              "start": 7146,
                              "end": 7157
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7136,
                            "end": 7157
                          }
                        ],
                        "start": 7135,
                        "end": 7158
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7161,
                        "end": 7172
                      },
                      "expression": false,
                      "start": 7135,
                      "end": 7172
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7112,
                    "end": 7172
                  }
                ],
                "start": 6887,
                "end": 7178
              },
              "abstract": false,
              "declare": false,
              "start": 6840,
              "end": 7178
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7200,
                  "end": 7239
                },
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 7240,
                        "end": 7241
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7250,
                          "end": 7262
                        },
                        "typeArguments": null,
                        "start": 7250,
                        "end": 7262
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7240,
                      "end": 7262
                    }
                  ],
                  "start": 7239,
                  "end": 7263
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7266,
                  "end": 7283
                },
                "expression": false,
                "start": 7191,
                "end": 7283
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7184,
              "end": 7283
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7305,
                  "end": 7343
                },
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 7344,
                        "end": 7345
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7354,
                          "end": 7365
                        },
                        "typeArguments": null,
                        "start": 7354,
                        "end": 7365
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7344,
                      "end": 7365
                    }
                  ],
                  "start": 7343,
                  "end": 7366
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7369,
                  "end": 7376
                },
                "expression": false,
                "start": 7296,
                "end": 7376
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7289,
              "end": 7376
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 7391,
                "end": 7431
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 7432,
                      "end": 7433
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7442,
                        "end": 7454
                      },
                      "typeArguments": null,
                      "start": 7442,
                      "end": 7454
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 7432,
                    "end": 7454
                  }
                ],
                "start": 7431,
                "end": 7455
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 7458,
                "end": 7465
              },
              "expression": false,
              "start": 7382,
              "end": 7465
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 7480,
                "end": 7519
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 7520,
                      "end": 7521
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7530,
                        "end": 7541
                      },
                      "typeArguments": null,
                      "start": 7530,
                      "end": 7541
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 7520,
                    "end": 7541
                  }
                ],
                "start": 7519,
                "end": 7542
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 7545,
                "end": 7552
              },
              "expression": false,
              "start": 7471,
              "end": 7552
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7575,
                  "end": 7628
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
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
                              "start": 7644,
                              "end": 7645
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7644,
                            "end": 7645
                          }
                        ],
                        "start": 7643,
                        "end": 7646
                      },
                      "params": [],
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
                            "start": 7650,
                            "end": 7661
                          },
                          "typeArguments": null,
                          "start": 7650,
                          "end": 7661
                        },
                        "start": 7648,
                        "end": 7661
                      },
                      "start": 7639,
                      "end": 7662
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
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
                              "start": 7672,
                              "end": 7673
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7672,
                            "end": 7673
                          }
                        ],
                        "start": 7671,
                        "end": 7674
                      },
                      "params": [],
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
                            "start": 7678,
                            "end": 7689
                          },
                          "typeArguments": null,
                          "start": 7678,
                          "end": 7689
                        },
                        "start": 7676,
                        "end": 7689
                      },
                      "start": 7671,
                      "end": 7690
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7699,
                        "end": 7707
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                              "start": 7708,
                              "end": 7709
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7708,
                            "end": 7709
                          }
                        ],
                        "start": 7707,
                        "end": 7710
                      },
                      "params": [],
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
                            "start": 7714,
                            "end": 7725
                          },
                          "typeArguments": null,
                          "start": 7714,
                          "end": 7725
                        },
                        "start": 7712,
                        "end": 7725
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 7699,
                      "end": 7726
                    }
                  ],
                  "start": 7629,
                  "end": 7732
                },
                "declare": false,
                "start": 7565,
                "end": 7732
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 7558,
              "end": 7732
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 7748,
                "end": 7802
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 7818,
                            "end": 7819
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 7818,
                          "end": 7819
                        }
                      ],
                      "start": 7817,
                      "end": 7820
                    },
                    "params": [],
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
                          "start": 7824,
                          "end": 7835
                        },
                        "typeArguments": null,
                        "start": 7824,
                        "end": 7835
                      },
                      "start": 7822,
                      "end": 7835
                    },
                    "start": 7813,
                    "end": 7836
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 7846,
                            "end": 7847
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 7846,
                          "end": 7847
                        }
                      ],
                      "start": 7845,
                      "end": 7848
                    },
                    "params": [],
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
                          "start": 7852,
                          "end": 7863
                        },
                        "typeArguments": null,
                        "start": 7852,
                        "end": 7863
                      },
                      "start": 7850,
                      "end": 7863
                    },
                    "start": 7845,
                    "end": 7864
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7873,
                      "end": 7881
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 7882,
                            "end": 7883
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 7882,
                          "end": 7883
                        }
                      ],
                      "start": 7881,
                      "end": 7884
                    },
                    "params": [],
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
                          "start": 7888,
                          "end": 7899
                        },
                        "typeArguments": null,
                        "start": 7888,
                        "end": 7899
                      },
                      "start": 7886,
                      "end": 7899
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 7873,
                    "end": 7900
                  }
                ],
                "start": 7803,
                "end": 7906
              },
              "declare": false,
              "start": 7738,
              "end": 7906
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7925,
                  "end": 7978
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
                        "start": 7996,
                        "end": 8016
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 8017,
                                "end": 8018
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 8017,
                              "end": 8018
                            }
                          ],
                          "start": 8016,
                          "end": 8019
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8022,
                          "end": 8033
                        },
                        "expression": false,
                        "start": 8016,
                        "end": 8033
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7989,
                      "end": 8033
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
                        "start": 8057,
                        "end": 8078
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 8079,
                                "end": 8080
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 8079,
                              "end": 8080
                            }
                          ],
                          "start": 8078,
                          "end": 8081
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8084,
                          "end": 8095
                        },
                        "expression": false,
                        "start": 8078,
                        "end": 8095
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 8042,
                      "end": 8095
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
                        "start": 8104,
                        "end": 8118
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 8119,
                                "end": 8120
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 8119,
                              "end": 8120
                            }
                          ],
                          "start": 8118,
                          "end": 8121
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8124,
                          "end": 8135
                        },
                        "expression": false,
                        "start": 8118,
                        "end": 8135
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8104,
                      "end": 8135
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
                        "start": 8152,
                        "end": 8167
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 8168,
                                "end": 8169
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 8168,
                              "end": 8169
                            }
                          ],
                          "start": 8167,
                          "end": 8170
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8173,
                          "end": 8184
                        },
                        "expression": false,
                        "start": 8167,
                        "end": 8184
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 8144,
                      "end": 8184
                    }
                  ],
                  "start": 7979,
                  "end": 8190
                },
                "abstract": false,
                "declare": false,
                "start": 7919,
                "end": 8190
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7912,
              "end": 8190
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 8201,
                "end": 8255
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
                      "start": 8273,
                      "end": 8293
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 8294,
                              "end": 8295
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8294,
                            "end": 8295
                          }
                        ],
                        "start": 8293,
                        "end": 8296
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8299,
                        "end": 8310
                      },
                      "expression": false,
                      "start": 8293,
                      "end": 8310
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8266,
                    "end": 8310
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
                      "start": 8334,
                      "end": 8355
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 8356,
                              "end": 8357
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8356,
                            "end": 8357
                          }
                        ],
                        "start": 8355,
                        "end": 8358
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8361,
                        "end": 8372
                      },
                      "expression": false,
                      "start": 8355,
                      "end": 8372
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8319,
                    "end": 8372
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
                      "start": 8381,
                      "end": 8395
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 8396,
                              "end": 8397
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8396,
                            "end": 8397
                          }
                        ],
                        "start": 8395,
                        "end": 8398
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8401,
                        "end": 8412
                      },
                      "expression": false,
                      "start": 8395,
                      "end": 8412
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8381,
                    "end": 8412
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
                      "start": 8429,
                      "end": 8444
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 8445,
                              "end": 8446
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8445,
                            "end": 8446
                          }
                        ],
                        "start": 8444,
                        "end": 8447
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8450,
                        "end": 8461
                      },
                      "expression": false,
                      "start": 8444,
                      "end": 8461
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8421,
                    "end": 8461
                  }
                ],
                "start": 8256,
                "end": 8467
              },
              "abstract": false,
              "declare": false,
              "start": 8195,
              "end": 8467
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8489,
                  "end": 8541
                },
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 8542,
                        "end": 8543
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8542,
                      "end": 8543
                    }
                  ],
                  "start": 8541,
                  "end": 8544
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 8547,
                  "end": 8554
                },
                "expression": false,
                "start": 8480,
                "end": 8554
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8473,
              "end": 8554
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 8569,
                "end": 8622
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 8623,
                      "end": 8624
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 8623,
                    "end": 8624
                  }
                ],
                "start": 8622,
                "end": 8625
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8628,
                "end": 8635
              },
              "expression": false,
              "start": 8560,
              "end": 8635
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivatModuleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8658,
                  "end": 8703
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
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
                              "start": 8719,
                              "end": 8720
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8729,
                                  "end": 8742
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8743,
                                  "end": 8754
                                },
                                "start": 8729,
                                "end": 8754
                              },
                              "typeArguments": null,
                              "start": 8729,
                              "end": 8754
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8719,
                            "end": 8754
                          }
                        ],
                        "start": 8718,
                        "end": 8755
                      },
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
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8759,
                              "end": 8772
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8773,
                              "end": 8784
                            },
                            "start": 8759,
                            "end": 8784
                          },
                          "typeArguments": null,
                          "start": 8759,
                          "end": 8784
                        },
                        "start": 8757,
                        "end": 8784
                      },
                      "start": 8714,
                      "end": 8785
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
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
                              "start": 8805,
                              "end": 8806
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8815,
                                  "end": 8828
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8829,
                                  "end": 8840
                                },
                                "start": 8815,
                                "end": 8840
                              },
                              "typeArguments": null,
                              "start": 8815,
                              "end": 8840
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8805,
                            "end": 8840
                          }
                        ],
                        "start": 8804,
                        "end": 8841
                      },
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
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8845,
                              "end": 8858
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8859,
                              "end": 8870
                            },
                            "start": 8845,
                            "end": 8870
                          },
                          "typeArguments": null,
                          "start": 8845,
                          "end": 8870
                        },
                        "start": 8843,
                        "end": 8870
                      },
                      "start": 8804,
                      "end": 8871
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8890,
                        "end": 8898
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                              "start": 8899,
                              "end": 8900
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8909,
                                  "end": 8922
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8923,
                                  "end": 8934
                                },
                                "start": 8909,
                                "end": 8934
                              },
                              "typeArguments": null,
                              "start": 8909,
                              "end": 8934
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8899,
                            "end": 8934
                          }
                        ],
                        "start": 8898,
                        "end": 8935
                      },
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
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8939,
                              "end": 8952
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8953,
                              "end": 8964
                            },
                            "start": 8939,
                            "end": 8964
                          },
                          "typeArguments": null,
                          "start": 8939,
                          "end": 8964
                        },
                        "start": 8937,
                        "end": 8964
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8890,
                      "end": 8965
                    }
                  ],
                  "start": 8704,
                  "end": 8981
                },
                "declare": false,
                "start": 8648,
                "end": 8981
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 8641,
              "end": 8981
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivateModuleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8999,
                  "end": 9045
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
                        "start": 9063,
                        "end": 9083
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 9084,
                                "end": 9085
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9094,
                                    "end": 9107
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9108,
                                    "end": 9119
                                  },
                                  "start": 9094,
                                  "end": 9119
                                },
                                "typeArguments": null,
                                "start": 9094,
                                "end": 9119
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 9084,
                              "end": 9119
                            }
                          ],
                          "start": 9083,
                          "end": 9120
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9123,
                          "end": 9144
                        },
                        "expression": false,
                        "start": 9083,
                        "end": 9144
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 9056,
                      "end": 9144
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
                        "start": 9153,
                        "end": 9167
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                                "start": 9168,
                                "end": 9169
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9178,
                                    "end": 9191
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9192,
                                    "end": 9203
                                  },
                                  "start": 9178,
                                  "end": 9203
                                },
                                "typeArguments": null,
                                "start": 9178,
                                "end": 9203
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 9168,
                              "end": 9203
                            }
                          ],
                          "start": 9167,
                          "end": 9204
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9207,
                          "end": 9228
                        },
                        "expression": false,
                        "start": 9167,
                        "end": 9228
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 9153,
                      "end": 9228
                    }
                  ],
                  "start": 9046,
                  "end": 9234
                },
                "abstract": false,
                "declare": false,
                "start": 8993,
                "end": 9234
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8986,
              "end": 9234
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPrivateMopduleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9255,
                  "end": 9301
                },
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 9302,
                        "end": 9303
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9312,
                            "end": 9325
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9326,
                            "end": 9337
                          },
                          "start": 9312,
                          "end": 9337
                        },
                        "typeArguments": null,
                        "start": 9312,
                        "end": 9337
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 9302,
                      "end": 9337
                    }
                  ],
                  "start": 9301,
                  "end": 9338
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 9341,
                  "end": 9358
                },
                "expression": false,
                "start": 9246,
                "end": 9358
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9239,
              "end": 9358
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivatModuleTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 9375,
                "end": 9421
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 9437,
                            "end": 9438
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9447,
                                "end": 9460
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9461,
                                "end": 9472
                              },
                              "start": 9447,
                              "end": 9472
                            },
                            "typeArguments": null,
                            "start": 9447,
                            "end": 9472
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 9437,
                          "end": 9472
                        }
                      ],
                      "start": 9436,
                      "end": 9473
                    },
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9477,
                            "end": 9490
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9491,
                            "end": 9502
                          },
                          "start": 9477,
                          "end": 9502
                        },
                        "typeArguments": null,
                        "start": 9477,
                        "end": 9502
                      },
                      "start": 9475,
                      "end": 9502
                    },
                    "start": 9432,
                    "end": 9503
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 9515,
                            "end": 9516
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9525,
                                "end": 9538
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9539,
                                "end": 9550
                              },
                              "start": 9525,
                              "end": 9550
                            },
                            "typeArguments": null,
                            "start": 9525,
                            "end": 9550
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 9515,
                          "end": 9550
                        }
                      ],
                      "start": 9514,
                      "end": 9551
                    },
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9555,
                            "end": 9568
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9569,
                            "end": 9580
                          },
                          "start": 9555,
                          "end": 9580
                        },
                        "typeArguments": null,
                        "start": 9555,
                        "end": 9580
                      },
                      "start": 9553,
                      "end": 9580
                    },
                    "start": 9514,
                    "end": 9581
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9592,
                      "end": 9600
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 9601,
                            "end": 9602
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9611,
                                "end": 9624
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9625,
                                "end": 9636
                              },
                              "start": 9611,
                              "end": 9636
                            },
                            "typeArguments": null,
                            "start": 9611,
                            "end": 9636
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 9601,
                          "end": 9636
                        }
                      ],
                      "start": 9600,
                      "end": 9637
                    },
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
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9641,
                            "end": 9654
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9655,
                            "end": 9666
                          },
                          "start": 9641,
                          "end": 9666
                        },
                        "typeArguments": null,
                        "start": 9641,
                        "end": 9666
                      },
                      "start": 9639,
                      "end": 9666
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 9592,
                    "end": 9667
                  }
                ],
                "start": 9422,
                "end": 9675
              },
              "declare": false,
              "start": 9365,
              "end": 9675
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivateModuleTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 9686,
                "end": 9733
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
                      "start": 9751,
                      "end": 9771
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 9772,
                              "end": 9773
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9782,
                                  "end": 9795
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9796,
                                  "end": 9807
                                },
                                "start": 9782,
                                "end": 9807
                              },
                              "typeArguments": null,
                              "start": 9782,
                              "end": 9807
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 9772,
                            "end": 9807
                          }
                        ],
                        "start": 9771,
                        "end": 9808
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9811,
                        "end": 9824
                      },
                      "expression": false,
                      "start": 9771,
                      "end": 9824
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9744,
                    "end": 9824
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
                      "start": 9833,
                      "end": 9847
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 9848,
                              "end": 9849
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9858,
                                  "end": 9871
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9872,
                                  "end": 9883
                                },
                                "start": 9858,
                                "end": 9883
                              },
                              "typeArguments": null,
                              "start": 9858,
                              "end": 9883
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 9848,
                            "end": 9883
                          }
                        ],
                        "start": 9847,
                        "end": 9884
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9887,
                        "end": 9899
                      },
                      "expression": false,
                      "start": 9847,
                      "end": 9899
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9833,
                    "end": 9899
                  }
                ],
                "start": 9734,
                "end": 9905
              },
              "abstract": false,
              "declare": false,
              "start": 9680,
              "end": 9905
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPrivateMopduleTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 9919,
                "end": 9966
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 9967,
                      "end": 9968
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9977,
                          "end": 9990
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9991,
                          "end": 10002
                        },
                        "start": 9977,
                        "end": 10002
                      },
                      "typeArguments": null,
                      "start": 9977,
                      "end": 10002
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 9967,
                    "end": 10002
                  }
                ],
                "start": 9966,
                "end": 10003
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 10006,
                "end": 10014
              },
              "expression": false,
              "start": 9910,
              "end": 10014
            }
          ],
          "start": 4754,
          "end": 10017
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 4731,
        "end": 10017
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4724,
      "end": 10017
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 10029,
        "end": 10042
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
              "start": 10055,
              "end": 10067
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 10068,
              "end": 10075
            },
            "abstract": false,
            "declare": false,
            "start": 10049,
            "end": 10075
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
                "start": 10094,
                "end": 10105
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 10106,
                "end": 10113
              },
              "abstract": false,
              "declare": false,
              "start": 10088,
              "end": 10113
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10081,
            "end": 10113
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 10136,
                "end": 10176
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 10192,
                            "end": 10193
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10202,
                              "end": 10214
                            },
                            "typeArguments": null,
                            "start": 10202,
                            "end": 10214
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10192,
                          "end": 10214
                        }
                      ],
                      "start": 10191,
                      "end": 10215
                    },
                    "params": [],
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
                          "start": 10219,
                          "end": 10231
                        },
                        "typeArguments": null,
                        "start": 10219,
                        "end": 10231
                      },
                      "start": 10217,
                      "end": 10231
                    },
                    "start": 10187,
                    "end": 10232
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 10243,
                            "end": 10244
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10253,
                              "end": 10265
                            },
                            "typeArguments": null,
                            "start": 10253,
                            "end": 10265
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10243,
                          "end": 10265
                        }
                      ],
                      "start": 10242,
                      "end": 10266
                    },
                    "params": [],
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
                          "start": 10270,
                          "end": 10282
                        },
                        "typeArguments": null,
                        "start": 10270,
                        "end": 10282
                      },
                      "start": 10268,
                      "end": 10282
                    },
                    "start": 10242,
                    "end": 10283
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10292,
                      "end": 10300
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 10301,
                            "end": 10302
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10311,
                              "end": 10323
                            },
                            "typeArguments": null,
                            "start": 10311,
                            "end": 10323
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10301,
                          "end": 10323
                        }
                      ],
                      "start": 10300,
                      "end": 10324
                    },
                    "params": [],
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
                          "start": 10328,
                          "end": 10340
                        },
                        "typeArguments": null,
                        "start": 10328,
                        "end": 10340
                      },
                      "start": 10326,
                      "end": 10340
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10292,
                    "end": 10341
                  }
                ],
                "start": 10177,
                "end": 10348
              },
              "declare": false,
              "start": 10126,
              "end": 10348
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10119,
            "end": 10348
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 10371,
                "end": 10410
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 10426,
                            "end": 10427
                          },
                          "constraint": {
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
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10426,
                          "end": 10447
                        }
                      ],
                      "start": 10425,
                      "end": 10448
                    },
                    "params": [],
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
                          "start": 10452,
                          "end": 10463
                        },
                        "typeArguments": null,
                        "start": 10452,
                        "end": 10463
                      },
                      "start": 10450,
                      "end": 10463
                    },
                    "start": 10421,
                    "end": 10464
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 10474,
                            "end": 10475
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10484,
                              "end": 10495
                            },
                            "typeArguments": null,
                            "start": 10484,
                            "end": 10495
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10474,
                          "end": 10495
                        }
                      ],
                      "start": 10473,
                      "end": 10496
                    },
                    "params": [],
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
                          "start": 10500,
                          "end": 10511
                        },
                        "typeArguments": null,
                        "start": 10500,
                        "end": 10511
                      },
                      "start": 10498,
                      "end": 10511
                    },
                    "start": 10473,
                    "end": 10512
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10521,
                      "end": 10529
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 10530,
                            "end": 10531
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10540,
                              "end": 10551
                            },
                            "typeArguments": null,
                            "start": 10540,
                            "end": 10551
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10530,
                          "end": 10551
                        }
                      ],
                      "start": 10529,
                      "end": 10552
                    },
                    "params": [],
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
                          "start": 10556,
                          "end": 10567
                        },
                        "typeArguments": null,
                        "start": 10556,
                        "end": 10567
                      },
                      "start": 10554,
                      "end": 10567
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10521,
                    "end": 10568
                  }
                ],
                "start": 10411,
                "end": 10574
              },
              "declare": false,
              "start": 10361,
              "end": 10574
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10354,
            "end": 10574
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 10590,
              "end": 10631
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 10647,
                          "end": 10648
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10657,
                            "end": 10669
                          },
                          "typeArguments": null,
                          "start": 10657,
                          "end": 10669
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10647,
                        "end": 10669
                      }
                    ],
                    "start": 10646,
                    "end": 10670
                  },
                  "params": [],
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
                        "start": 10674,
                        "end": 10686
                      },
                      "typeArguments": null,
                      "start": 10674,
                      "end": 10686
                    },
                    "start": 10672,
                    "end": 10686
                  },
                  "start": 10642,
                  "end": 10687
                },
                {
                  "type": "TSCallSignatureDeclaration",
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
                          "start": 10697,
                          "end": 10698
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10707,
                            "end": 10719
                          },
                          "typeArguments": null,
                          "start": 10707,
                          "end": 10719
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10697,
                        "end": 10719
                      }
                    ],
                    "start": 10696,
                    "end": 10720
                  },
                  "params": [],
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
                        "start": 10724,
                        "end": 10736
                      },
                      "typeArguments": null,
                      "start": 10724,
                      "end": 10736
                    },
                    "start": 10722,
                    "end": 10736
                  },
                  "start": 10696,
                  "end": 10737
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10746,
                    "end": 10754
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "start": 10755,
                          "end": 10756
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10765,
                            "end": 10777
                          },
                          "typeArguments": null,
                          "start": 10765,
                          "end": 10777
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10755,
                        "end": 10777
                      }
                    ],
                    "start": 10754,
                    "end": 10778
                  },
                  "params": [],
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
                        "start": 10782,
                        "end": 10794
                      },
                      "typeArguments": null,
                      "start": 10782,
                      "end": 10794
                    },
                    "start": 10780,
                    "end": 10794
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 10746,
                  "end": 10795
                }
              ],
              "start": 10632,
              "end": 10801
            },
            "declare": false,
            "start": 10580,
            "end": 10801
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 10817,
              "end": 10857
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 10873,
                          "end": 10874
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10883,
                            "end": 10894
                          },
                          "typeArguments": null,
                          "start": 10883,
                          "end": 10894
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10873,
                        "end": 10894
                      }
                    ],
                    "start": 10872,
                    "end": 10895
                  },
                  "params": [],
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
                        "start": 10899,
                        "end": 10910
                      },
                      "typeArguments": null,
                      "start": 10899,
                      "end": 10910
                    },
                    "start": 10897,
                    "end": 10910
                  },
                  "start": 10868,
                  "end": 10911
                },
                {
                  "type": "TSCallSignatureDeclaration",
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
                          "start": 10921,
                          "end": 10922
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10931,
                            "end": 10942
                          },
                          "typeArguments": null,
                          "start": 10931,
                          "end": 10942
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10921,
                        "end": 10942
                      }
                    ],
                    "start": 10920,
                    "end": 10943
                  },
                  "params": [],
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
                        "start": 10947,
                        "end": 10958
                      },
                      "typeArguments": null,
                      "start": 10947,
                      "end": 10958
                    },
                    "start": 10945,
                    "end": 10958
                  },
                  "start": 10920,
                  "end": 10959
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10968,
                    "end": 10976
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "start": 10977,
                          "end": 10978
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10987,
                            "end": 10998
                          },
                          "typeArguments": null,
                          "start": 10987,
                          "end": 10998
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10977,
                        "end": 10998
                      }
                    ],
                    "start": 10976,
                    "end": 10999
                  },
                  "params": [],
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
                        "start": 11003,
                        "end": 11014
                      },
                      "typeArguments": null,
                      "start": 11003,
                      "end": 11014
                    },
                    "start": 11001,
                    "end": 11014
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 10968,
                  "end": 11015
                }
              ],
              "start": 10858,
              "end": 11021
            },
            "declare": false,
            "start": 10807,
            "end": 11021
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 11040,
                "end": 11080
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
                      "start": 11098,
                      "end": 11118
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 11119,
                              "end": 11120
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11129,
                                "end": 11141
                              },
                              "typeArguments": null,
                              "start": 11129,
                              "end": 11141
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11119,
                            "end": 11141
                          }
                        ],
                        "start": 11118,
                        "end": 11142
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11145,
                        "end": 11157
                      },
                      "expression": false,
                      "start": 11118,
                      "end": 11157
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11091,
                    "end": 11157
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
                      "start": 11181,
                      "end": 11202
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 11203,
                              "end": 11204
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11213,
                                "end": 11225
                              },
                              "typeArguments": null,
                              "start": 11213,
                              "end": 11225
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11203,
                            "end": 11225
                          }
                        ],
                        "start": 11202,
                        "end": 11226
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11229,
                        "end": 11240
                      },
                      "expression": false,
                      "start": 11202,
                      "end": 11240
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11166,
                    "end": 11240
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
                      "start": 11249,
                      "end": 11263
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 11264,
                              "end": 11265
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11274,
                                "end": 11286
                              },
                              "typeArguments": null,
                              "start": 11274,
                              "end": 11286
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11264,
                            "end": 11286
                          }
                        ],
                        "start": 11263,
                        "end": 11287
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11290,
                        "end": 11303
                      },
                      "expression": false,
                      "start": 11263,
                      "end": 11303
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11249,
                    "end": 11303
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
                      "start": 11320,
                      "end": 11335
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 11336,
                              "end": 11337
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11346,
                                "end": 11358
                              },
                              "typeArguments": null,
                              "start": 11346,
                              "end": 11358
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11336,
                            "end": 11358
                          }
                        ],
                        "start": 11335,
                        "end": 11359
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11362,
                        "end": 11373
                      },
                      "expression": false,
                      "start": 11335,
                      "end": 11373
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11312,
                    "end": 11373
                  }
                ],
                "start": 11081,
                "end": 11379
              },
              "abstract": false,
              "declare": false,
              "start": 11034,
              "end": 11379
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11027,
            "end": 11379
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 11398,
                "end": 11437
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
                      "start": 11455,
                      "end": 11475
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 11476,
                              "end": 11477
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11486,
                                "end": 11497
                              },
                              "typeArguments": null,
                              "start": 11486,
                              "end": 11497
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11476,
                            "end": 11497
                          }
                        ],
                        "start": 11475,
                        "end": 11498
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11501,
                        "end": 11512
                      },
                      "expression": false,
                      "start": 11475,
                      "end": 11512
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11448,
                    "end": 11512
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
                      "start": 11536,
                      "end": 11557
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 11558,
                              "end": 11559
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11568,
                                "end": 11579
                              },
                              "typeArguments": null,
                              "start": 11568,
                              "end": 11579
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11558,
                            "end": 11579
                          }
                        ],
                        "start": 11557,
                        "end": 11580
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11583,
                        "end": 11594
                      },
                      "expression": false,
                      "start": 11557,
                      "end": 11594
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11521,
                    "end": 11594
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
                      "start": 11603,
                      "end": 11617
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 11618,
                              "end": 11619
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11628,
                                "end": 11639
                              },
                              "typeArguments": null,
                              "start": 11628,
                              "end": 11639
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11618,
                            "end": 11639
                          }
                        ],
                        "start": 11617,
                        "end": 11640
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11643,
                        "end": 11654
                      },
                      "expression": false,
                      "start": 11617,
                      "end": 11654
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11603,
                    "end": 11654
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
                      "start": 11671,
                      "end": 11686
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 11687,
                              "end": 11688
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11697,
                                "end": 11708
                              },
                              "typeArguments": null,
                              "start": 11697,
                              "end": 11708
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11687,
                            "end": 11708
                          }
                        ],
                        "start": 11686,
                        "end": 11709
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11712,
                        "end": 11723
                      },
                      "expression": false,
                      "start": 11686,
                      "end": 11723
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11663,
                    "end": 11723
                  }
                ],
                "start": 11438,
                "end": 11729
              },
              "abstract": false,
              "declare": false,
              "start": 11392,
              "end": 11729
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11385,
            "end": 11729
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 11741,
              "end": 11782
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
                    "start": 11800,
                    "end": 11820
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 11821,
                            "end": 11822
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11831,
                              "end": 11843
                            },
                            "typeArguments": null,
                            "start": 11831,
                            "end": 11843
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 11821,
                          "end": 11843
                        }
                      ],
                      "start": 11820,
                      "end": 11844
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11847,
                      "end": 11858
                    },
                    "expression": false,
                    "start": 11820,
                    "end": 11858
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11793,
                  "end": 11858
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
                    "start": 11882,
                    "end": 11903
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 11904,
                            "end": 11905
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11914,
                              "end": 11926
                            },
                            "typeArguments": null,
                            "start": 11914,
                            "end": 11926
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 11904,
                          "end": 11926
                        }
                      ],
                      "start": 11903,
                      "end": 11927
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11930,
                      "end": 11941
                    },
                    "expression": false,
                    "start": 11903,
                    "end": 11941
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 11867,
                  "end": 11941
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
                    "start": 11950,
                    "end": 11964
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 11965,
                            "end": 11966
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11975,
                              "end": 11987
                            },
                            "typeArguments": null,
                            "start": 11975,
                            "end": 11987
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 11965,
                          "end": 11987
                        }
                      ],
                      "start": 11964,
                      "end": 11988
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11991,
                      "end": 12002
                    },
                    "expression": false,
                    "start": 11964,
                    "end": 12002
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11950,
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
                            "start": 12035,
                            "end": 12036
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12045,
                              "end": 12057
                            },
                            "typeArguments": null,
                            "start": 12045,
                            "end": 12057
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12035,
                          "end": 12057
                        }
                      ],
                      "start": 12034,
                      "end": 12058
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12061,
                      "end": 12072
                    },
                    "expression": false,
                    "start": 12034,
                    "end": 12072
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12011,
                  "end": 12072
                }
              ],
              "start": 11783,
              "end": 12078
            },
            "abstract": false,
            "declare": false,
            "start": 11735,
            "end": 12078
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 12090,
              "end": 12130
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
                    "start": 12148,
                    "end": 12168
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 12169,
                            "end": 12170
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12179,
                              "end": 12190
                            },
                            "typeArguments": null,
                            "start": 12179,
                            "end": 12190
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12169,
                          "end": 12190
                        }
                      ],
                      "start": 12168,
                      "end": 12191
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12194,
                      "end": 12205
                    },
                    "expression": false,
                    "start": 12168,
                    "end": 12205
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12141,
                  "end": 12205
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
                    "start": 12229,
                    "end": 12250
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 12251,
                            "end": 12252
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12261,
                              "end": 12272
                            },
                            "typeArguments": null,
                            "start": 12261,
                            "end": 12272
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12251,
                          "end": 12272
                        }
                      ],
                      "start": 12250,
                      "end": 12273
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12276,
                      "end": 12287
                    },
                    "expression": false,
                    "start": 12250,
                    "end": 12287
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12214,
                  "end": 12287
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
                    "start": 12296,
                    "end": 12310
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 12311,
                            "end": 12312
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12321,
                              "end": 12332
                            },
                            "typeArguments": null,
                            "start": 12321,
                            "end": 12332
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12311,
                          "end": 12332
                        }
                      ],
                      "start": 12310,
                      "end": 12333
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12336,
                      "end": 12347
                    },
                    "expression": false,
                    "start": 12310,
                    "end": 12347
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12296,
                  "end": 12347
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
                    "start": 12364,
                    "end": 12379
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 12380,
                            "end": 12381
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12390,
                              "end": 12401
                            },
                            "typeArguments": null,
                            "start": 12390,
                            "end": 12401
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12380,
                          "end": 12401
                        }
                      ],
                      "start": 12379,
                      "end": 12402
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12405,
                      "end": 12416
                    },
                    "expression": false,
                    "start": 12379,
                    "end": 12416
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12356,
                  "end": 12416
                }
              ],
              "start": 12131,
              "end": 12422
            },
            "abstract": false,
            "declare": false,
            "start": 12084,
            "end": 12422
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 12444,
                "end": 12483
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 12484,
                      "end": 12485
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12494,
                        "end": 12506
                      },
                      "typeArguments": null,
                      "start": 12494,
                      "end": 12506
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 12484,
                    "end": 12506
                  }
                ],
                "start": 12483,
                "end": 12507
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 12510,
                "end": 12518
              },
              "expression": false,
              "start": 12435,
              "end": 12518
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12428,
            "end": 12518
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 12540,
                "end": 12578
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 12579,
                      "end": 12580
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12589,
                        "end": 12600
                      },
                      "typeArguments": null,
                      "start": 12589,
                      "end": 12600
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 12579,
                    "end": 12600
                  }
                ],
                "start": 12578,
                "end": 12601
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 12604,
                "end": 12611
              },
              "expression": false,
              "start": 12531,
              "end": 12611
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12524,
            "end": 12611
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 12626,
              "end": 12666
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 12667,
                    "end": 12668
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12677,
                      "end": 12689
                    },
                    "typeArguments": null,
                    "start": 12677,
                    "end": 12689
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 12667,
                  "end": 12689
                }
              ],
              "start": 12666,
              "end": 12690
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 12693,
              "end": 12700
            },
            "expression": false,
            "start": 12617,
            "end": 12700
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 12715,
              "end": 12754
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 12755,
                    "end": 12756
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12765,
                      "end": 12776
                    },
                    "typeArguments": null,
                    "start": 12765,
                    "end": 12776
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 12755,
                  "end": 12776
                }
              ],
              "start": 12754,
              "end": 12777
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 12780,
              "end": 12787
            },
            "expression": false,
            "start": 12706,
            "end": 12787
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 12810,
                "end": 12863
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 12879,
                            "end": 12880
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12879,
                          "end": 12880
                        }
                      ],
                      "start": 12878,
                      "end": 12881
                    },
                    "params": [],
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
                          "start": 12885,
                          "end": 12896
                        },
                        "typeArguments": null,
                        "start": 12885,
                        "end": 12896
                      },
                      "start": 12883,
                      "end": 12896
                    },
                    "start": 12874,
                    "end": 12897
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 12907,
                            "end": 12908
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12907,
                          "end": 12908
                        }
                      ],
                      "start": 12906,
                      "end": 12909
                    },
                    "params": [],
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
                          "start": 12913,
                          "end": 12924
                        },
                        "typeArguments": null,
                        "start": 12913,
                        "end": 12924
                      },
                      "start": 12911,
                      "end": 12924
                    },
                    "start": 12906,
                    "end": 12925
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12934,
                      "end": 12942
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 12943,
                            "end": 12944
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12943,
                          "end": 12944
                        }
                      ],
                      "start": 12942,
                      "end": 12945
                    },
                    "params": [],
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
                          "start": 12949,
                          "end": 12960
                        },
                        "typeArguments": null,
                        "start": 12949,
                        "end": 12960
                      },
                      "start": 12947,
                      "end": 12960
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 12934,
                    "end": 12961
                  }
                ],
                "start": 12864,
                "end": 12967
              },
              "declare": false,
              "start": 12800,
              "end": 12967
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 12793,
            "end": 12967
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 12983,
              "end": 13037
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 13053,
                          "end": 13054
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 13053,
                        "end": 13054
                      }
                    ],
                    "start": 13052,
                    "end": 13055
                  },
                  "params": [],
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
                        "start": 13059,
                        "end": 13070
                      },
                      "typeArguments": null,
                      "start": 13059,
                      "end": 13070
                    },
                    "start": 13057,
                    "end": 13070
                  },
                  "start": 13048,
                  "end": 13071
                },
                {
                  "type": "TSCallSignatureDeclaration",
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
                          "start": 13081,
                          "end": 13082
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 13081,
                        "end": 13082
                      }
                    ],
                    "start": 13080,
                    "end": 13083
                  },
                  "params": [],
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
                        "start": 13087,
                        "end": 13098
                      },
                      "typeArguments": null,
                      "start": 13087,
                      "end": 13098
                    },
                    "start": 13085,
                    "end": 13098
                  },
                  "start": 13080,
                  "end": 13099
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13108,
                    "end": 13116
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "start": 13117,
                          "end": 13118
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 13117,
                        "end": 13118
                      }
                    ],
                    "start": 13116,
                    "end": 13119
                  },
                  "params": [],
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
                        "start": 13123,
                        "end": 13134
                      },
                      "typeArguments": null,
                      "start": 13123,
                      "end": 13134
                    },
                    "start": 13121,
                    "end": 13134
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 13108,
                  "end": 13135
                }
              ],
              "start": 13038,
              "end": 13141
            },
            "declare": false,
            "start": 12973,
            "end": 13141
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 13160,
                "end": 13213
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
                      "start": 13231,
                      "end": 13251
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 13252,
                              "end": 13253
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 13252,
                            "end": 13253
                          }
                        ],
                        "start": 13251,
                        "end": 13254
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13257,
                        "end": 13268
                      },
                      "expression": false,
                      "start": 13251,
                      "end": 13268
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13224,
                    "end": 13268
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
                      "start": 13292,
                      "end": 13313
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 13314,
                              "end": 13315
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 13314,
                            "end": 13315
                          }
                        ],
                        "start": 13313,
                        "end": 13316
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13319,
                        "end": 13330
                      },
                      "expression": false,
                      "start": 13313,
                      "end": 13330
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 13277,
                    "end": 13330
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
                      "start": 13339,
                      "end": 13353
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 13354,
                              "end": 13355
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 13354,
                            "end": 13355
                          }
                        ],
                        "start": 13353,
                        "end": 13356
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13359,
                        "end": 13370
                      },
                      "expression": false,
                      "start": 13353,
                      "end": 13370
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13339,
                    "end": 13370
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
                      "start": 13387,
                      "end": 13402
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                              "start": 13403,
                              "end": 13404
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 13403,
                            "end": 13404
                          }
                        ],
                        "start": 13402,
                        "end": 13405
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13408,
                        "end": 13419
                      },
                      "expression": false,
                      "start": 13402,
                      "end": 13419
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 13379,
                    "end": 13419
                  }
                ],
                "start": 13214,
                "end": 13425
              },
              "abstract": false,
              "declare": false,
              "start": 13154,
              "end": 13425
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13147,
            "end": 13425
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 13436,
              "end": 13490
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
                    "start": 13508,
                    "end": 13528
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 13529,
                            "end": 13530
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 13529,
                          "end": 13530
                        }
                      ],
                      "start": 13528,
                      "end": 13531
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13534,
                      "end": 13545
                    },
                    "expression": false,
                    "start": 13528,
                    "end": 13545
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13501,
                  "end": 13545
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
                    "start": 13569,
                    "end": 13590
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 13591,
                            "end": 13592
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 13591,
                          "end": 13592
                        }
                      ],
                      "start": 13590,
                      "end": 13593
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13596,
                      "end": 13607
                    },
                    "expression": false,
                    "start": 13590,
                    "end": 13607
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13554,
                  "end": 13607
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
                    "start": 13616,
                    "end": 13630
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 13631,
                            "end": 13632
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 13631,
                          "end": 13632
                        }
                      ],
                      "start": 13630,
                      "end": 13633
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13636,
                      "end": 13647
                    },
                    "expression": false,
                    "start": 13630,
                    "end": 13647
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13616,
                  "end": 13647
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
                    "start": 13664,
                    "end": 13679
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                            "start": 13680,
                            "end": 13681
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 13680,
                          "end": 13681
                        }
                      ],
                      "start": 13679,
                      "end": 13682
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13685,
                      "end": 13696
                    },
                    "expression": false,
                    "start": 13679,
                    "end": 13696
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13656,
                  "end": 13696
                }
              ],
              "start": 13491,
              "end": 13702
            },
            "abstract": false,
            "declare": false,
            "start": 13430,
            "end": 13702
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 13724,
                "end": 13776
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 13777,
                      "end": 13778
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 13777,
                    "end": 13778
                  }
                ],
                "start": 13776,
                "end": 13779
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 13782,
                "end": 13789
              },
              "expression": false,
              "start": 13715,
              "end": 13789
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13708,
            "end": 13789
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 13804,
              "end": 13857
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 13858,
                    "end": 13859
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 13858,
                  "end": 13859
                }
              ],
              "start": 13857,
              "end": 13860
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 13863,
              "end": 13870
            },
            "expression": false,
            "start": 13795,
            "end": 13870
          }
        ],
        "start": 10043,
        "end": 13872
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 10019,
      "end": 13872
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 13872
}
```
