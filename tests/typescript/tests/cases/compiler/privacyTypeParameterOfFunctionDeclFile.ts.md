__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 13866,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 295,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 61,
        "end": 295,
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 111,
          "decorators": [],
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 112,
          "end": 295,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 118,
              "end": 163,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 122,
                "end": 146,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 123,
                    "end": 145,
                    "name": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 133,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 145,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 162,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 150,
                  "end": 162,
                  "typeName": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 162,
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 178,
              "end": 219,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 178,
                "end": 202,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 179,
                    "end": 201,
                    "name": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 189,
                      "end": 201,
                      "typeName": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 201,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 204,
                "end": 218,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 206,
                  "end": 218,
                  "typeName": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 218,
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 234,
              "end": 283,
              "key": {
                "type": "Identifier",
                "start": 234,
                "end": 242,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 242,
                "end": 266,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 243,
                    "end": 265,
                    "name": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 253,
                      "end": 265,
                      "typeName": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 265,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 268,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 270,
                  "end": 282,
                  "typeName": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 282,
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 297,
      "end": 501,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 304,
        "end": 501,
        "id": {
          "type": "Identifier",
          "start": 314,
          "end": 353,
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 354,
          "end": 501,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 360,
              "end": 403,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 364,
                "end": 387,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 365,
                    "end": 386,
                    "name": {
                      "type": "Identifier",
                      "start": 365,
                      "end": 366,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 375,
                      "end": 386,
                      "typeName": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 386,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 389,
                "end": 402,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 391,
                  "end": 402,
                  "typeName": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 402,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 408,
              "end": 447,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 408,
                "end": 431,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 409,
                    "end": 430,
                    "name": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 410,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 419,
                      "end": 430,
                      "typeName": {
                        "type": "Identifier",
                        "start": 419,
                        "end": 430,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 433,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 435,
                  "end": 446,
                  "typeName": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 446,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 452,
              "end": 499,
              "key": {
                "type": "Identifier",
                "start": 452,
                "end": 460,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 460,
                "end": 483,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 461,
                    "end": 482,
                    "name": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 471,
                      "end": 482,
                      "typeName": {
                        "type": "Identifier",
                        "start": 471,
                        "end": 482,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 485,
                "end": 498,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 487,
                  "end": 498,
                  "typeName": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 498,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 503,
      "end": 708,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 554,
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 555,
        "end": 708,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 561,
            "end": 606,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 565,
              "end": 589,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 566,
                  "end": 588,
                  "name": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 567,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 576,
                    "end": 588,
                    "typeName": {
                      "type": "Identifier",
                      "start": 576,
                      "end": 588,
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 591,
              "end": 605,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 593,
                "end": 605,
                "typeName": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 605,
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 611,
            "end": 652,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 611,
              "end": 635,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 612,
                  "end": 634,
                  "name": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 613,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 622,
                    "end": 634,
                    "typeName": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 634,
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 637,
              "end": 651,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 639,
                "end": 651,
                "typeName": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 651,
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 657,
            "end": 706,
            "key": {
              "type": "Identifier",
              "start": 657,
              "end": 665,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 665,
              "end": 689,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 666,
                  "end": 688,
                  "name": {
                    "type": "Identifier",
                    "start": 666,
                    "end": 667,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 676,
                    "end": 688,
                    "typeName": {
                      "type": "Identifier",
                      "start": 676,
                      "end": 688,
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 691,
              "end": 705,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 693,
                "end": 705,
                "typeName": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 705,
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 710,
      "end": 908,
      "id": {
        "type": "Identifier",
        "start": 720,
        "end": 760,
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 761,
        "end": 908,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 767,
            "end": 810,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 771,
              "end": 794,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 772,
                  "end": 793,
                  "name": {
                    "type": "Identifier",
                    "start": 772,
                    "end": 773,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 782,
                    "end": 793,
                    "typeName": {
                      "type": "Identifier",
                      "start": 782,
                      "end": 793,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 809,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 798,
                "end": 809,
                "typeName": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 809,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 815,
            "end": 854,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 815,
              "end": 838,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 816,
                  "end": 837,
                  "name": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 817,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 826,
                    "end": 837,
                    "typeName": {
                      "type": "Identifier",
                      "start": 826,
                      "end": 837,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 840,
              "end": 853,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 842,
                "end": 853,
                "typeName": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 853,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 859,
            "end": 906,
            "key": {
              "type": "Identifier",
              "start": 859,
              "end": 867,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 867,
              "end": 890,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 868,
                  "end": 889,
                  "name": {
                    "type": "Identifier",
                    "start": 868,
                    "end": 869,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 878,
                    "end": 889,
                    "typeName": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 889,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 892,
              "end": 905,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 894,
                "end": 905,
                "typeName": {
                  "type": "Identifier",
                  "start": 894,
                  "end": 905,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 910,
      "end": 1243,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 917,
        "end": 1243,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 923,
          "end": 963,
          "decorators": [],
          "name": "publicClassWithWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 964,
          "end": 1243,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 970,
              "end": 1041,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 977,
                "end": 997,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 997,
                "end": 1041,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 997,
                  "end": 1021,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 998,
                      "end": 1020,
                      "name": {
                        "type": "Identifier",
                        "start": 998,
                        "end": 999,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1008,
                        "end": 1020,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1008,
                          "end": 1020,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1024,
                  "end": 1041,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1046,
              "end": 1116,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1061,
                "end": 1082,
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1082,
                "end": 1116,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1082,
                  "end": 1106,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1083,
                      "end": 1105,
                      "name": {
                        "type": "Identifier",
                        "start": 1083,
                        "end": 1084,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1093,
                        "end": 1105,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1093,
                          "end": 1105,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1109,
                  "end": 1116,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1121,
              "end": 1179,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1121,
                "end": 1135,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1135,
                "end": 1179,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1135,
                  "end": 1159,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1136,
                      "end": 1158,
                      "name": {
                        "type": "Identifier",
                        "start": 1136,
                        "end": 1137,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1146,
                        "end": 1158,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1146,
                          "end": 1158,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1162,
                  "end": 1179,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1184,
              "end": 1241,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1192,
                "end": 1207,
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1207,
                "end": 1241,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1207,
                  "end": 1231,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1208,
                      "end": 1230,
                      "name": {
                        "type": "Identifier",
                        "start": 1208,
                        "end": 1209,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1218,
                        "end": 1230,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1218,
                          "end": 1230,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1234,
                  "end": 1241,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1245,
      "end": 1554,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1252,
        "end": 1554,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1258,
          "end": 1297,
          "decorators": [],
          "name": "publicClassWithWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 1298,
          "end": 1554,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1304,
              "end": 1364,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1311,
                "end": 1331,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1331,
                "end": 1364,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1331,
                  "end": 1354,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1332,
                      "end": 1353,
                      "name": {
                        "type": "Identifier",
                        "start": 1332,
                        "end": 1333,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1342,
                        "end": 1353,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1342,
                          "end": 1353,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1357,
                  "end": 1364,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1369,
              "end": 1439,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1384,
                "end": 1405,
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1405,
                "end": 1439,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1405,
                  "end": 1428,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1406,
                      "end": 1427,
                      "name": {
                        "type": "Identifier",
                        "start": 1406,
                        "end": 1407,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1416,
                        "end": 1427,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1416,
                          "end": 1427,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1431,
                  "end": 1439,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1444,
              "end": 1491,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1444,
                "end": 1458,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1458,
                "end": 1491,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1458,
                  "end": 1481,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1459,
                      "end": 1480,
                      "name": {
                        "type": "Identifier",
                        "start": 1459,
                        "end": 1460,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1469,
                        "end": 1480,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1469,
                          "end": 1480,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1484,
                  "end": 1491,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1496,
              "end": 1552,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1504,
                "end": 1519,
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1519,
                "end": 1552,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1519,
                  "end": 1542,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1520,
                      "end": 1541,
                      "name": {
                        "type": "Identifier",
                        "start": 1520,
                        "end": 1521,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1530,
                        "end": 1541,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1530,
                          "end": 1541,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1545,
                  "end": 1552,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 1556,
      "end": 1863,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1603,
        "decorators": [],
        "name": "privateClassWithWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1604,
        "end": 1863,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1610,
            "end": 1671,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1617,
              "end": 1637,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1637,
              "end": 1671,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1637,
                "end": 1661,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1638,
                    "end": 1660,
                    "name": {
                      "type": "Identifier",
                      "start": 1638,
                      "end": 1639,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1648,
                      "end": 1660,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1648,
                        "end": 1660,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1664,
                "end": 1671,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1676,
            "end": 1746,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1691,
              "end": 1712,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1712,
              "end": 1746,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1712,
                "end": 1736,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1713,
                    "end": 1735,
                    "name": {
                      "type": "Identifier",
                      "start": 1713,
                      "end": 1714,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1723,
                      "end": 1735,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1723,
                        "end": 1735,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1739,
                "end": 1746,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1751,
            "end": 1799,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1751,
              "end": 1765,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1765,
              "end": 1799,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1765,
                "end": 1789,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1766,
                    "end": 1788,
                    "name": {
                      "type": "Identifier",
                      "start": 1766,
                      "end": 1767,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1776,
                      "end": 1788,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1776,
                        "end": 1788,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1792,
                "end": 1799,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1804,
            "end": 1861,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1812,
              "end": 1827,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1827,
              "end": 1861,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1827,
                "end": 1851,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1828,
                    "end": 1850,
                    "name": {
                      "type": "Identifier",
                      "start": 1828,
                      "end": 1829,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1838,
                      "end": 1850,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1838,
                        "end": 1850,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1854,
                "end": 1861,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1865,
      "end": 2167,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1871,
        "end": 1911,
        "decorators": [],
        "name": "privateClassWithWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1912,
        "end": 2167,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1918,
            "end": 1978,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1925,
              "end": 1945,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1945,
              "end": 1978,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1945,
                "end": 1968,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1946,
                    "end": 1967,
                    "name": {
                      "type": "Identifier",
                      "start": 1946,
                      "end": 1947,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1956,
                      "end": 1967,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1956,
                        "end": 1967,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1971,
                "end": 1978,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1983,
            "end": 2052,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1998,
              "end": 2019,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2019,
              "end": 2052,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2019,
                "end": 2042,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2020,
                    "end": 2041,
                    "name": {
                      "type": "Identifier",
                      "start": 2020,
                      "end": 2021,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2030,
                      "end": 2041,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2030,
                        "end": 2041,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2045,
                "end": 2052,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2057,
            "end": 2104,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2057,
              "end": 2071,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2071,
              "end": 2104,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2071,
                "end": 2094,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2072,
                    "end": 2093,
                    "name": {
                      "type": "Identifier",
                      "start": 2072,
                      "end": 2073,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2082,
                      "end": 2093,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2082,
                        "end": 2093,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2097,
                "end": 2104,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2109,
            "end": 2165,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2117,
              "end": 2132,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2132,
              "end": 2165,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2132,
                "end": 2155,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2133,
                    "end": 2154,
                    "name": {
                      "type": "Identifier",
                      "start": 2133,
                      "end": 2134,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2143,
                      "end": 2154,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2143,
                        "end": 2154,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2158,
                "end": 2165,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2169,
      "end": 2264,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2176,
        "end": 2264,
        "id": {
          "type": "Identifier",
          "start": 2185,
          "end": 2224,
          "decorators": [],
          "name": "publicFunctionWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2224,
          "end": 2248,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2225,
              "end": 2247,
              "name": {
                "type": "Identifier",
                "start": 2225,
                "end": 2226,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2235,
                "end": 2247,
                "typeName": {
                  "type": "Identifier",
                  "start": 2235,
                  "end": 2247,
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 2251,
          "end": 2264,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2266,
      "end": 2349,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2273,
        "end": 2349,
        "id": {
          "type": "Identifier",
          "start": 2282,
          "end": 2320,
          "decorators": [],
          "name": "publicFunctionWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2320,
          "end": 2343,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2321,
              "end": 2342,
              "name": {
                "type": "Identifier",
                "start": 2321,
                "end": 2322,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2331,
                "end": 2342,
                "typeName": {
                  "type": "Identifier",
                  "start": 2331,
                  "end": 2342,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 2346,
          "end": 2349,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 2351,
      "end": 2430,
      "id": {
        "type": "Identifier",
        "start": 2360,
        "end": 2400,
        "decorators": [],
        "name": "privateFunctionWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2400,
        "end": 2424,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2401,
            "end": 2423,
            "name": {
              "type": "Identifier",
              "start": 2401,
              "end": 2402,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2411,
              "end": 2423,
              "typeName": {
                "type": "Identifier",
                "start": 2411,
                "end": 2423,
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2427,
        "end": 2430,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2432,
      "end": 2509,
      "id": {
        "type": "Identifier",
        "start": 2441,
        "end": 2480,
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2480,
        "end": 2503,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2481,
            "end": 2502,
            "name": {
              "type": "Identifier",
              "start": 2481,
              "end": 2482,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2491,
              "end": 2502,
              "typeName": {
                "type": "Identifier",
                "start": 2491,
                "end": 2502,
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2506,
        "end": 2509,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2511,
      "end": 2669,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2518,
        "end": 2669,
        "id": {
          "type": "Identifier",
          "start": 2528,
          "end": 2581,
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 2582,
          "end": 2669,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 2588,
              "end": 2611,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2592,
                "end": 2595,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2593,
                    "end": 2594,
                    "name": {
                      "type": "Identifier",
                      "start": 2593,
                      "end": 2594,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2597,
                "end": 2610,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2599,
                  "end": 2610,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2599,
                    "end": 2610,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 2616,
              "end": 2635,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2616,
                "end": 2619,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2617,
                    "end": 2618,
                    "name": {
                      "type": "Identifier",
                      "start": 2617,
                      "end": 2618,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2621,
                "end": 2634,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2623,
                  "end": 2634,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2623,
                    "end": 2634,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 2640,
              "end": 2667,
              "key": {
                "type": "Identifier",
                "start": 2640,
                "end": 2648,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2648,
                "end": 2651,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2649,
                    "end": 2650,
                    "name": {
                      "type": "Identifier",
                      "start": 2649,
                      "end": 2650,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2653,
                "end": 2666,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2655,
                  "end": 2666,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2655,
                    "end": 2666,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2671,
      "end": 2823,
      "id": {
        "type": "Identifier",
        "start": 2681,
        "end": 2735,
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2736,
        "end": 2823,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2742,
            "end": 2765,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2746,
              "end": 2749,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2747,
                  "end": 2748,
                  "name": {
                    "type": "Identifier",
                    "start": 2747,
                    "end": 2748,
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2751,
              "end": 2764,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2753,
                "end": 2764,
                "typeName": {
                  "type": "Identifier",
                  "start": 2753,
                  "end": 2764,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 2770,
            "end": 2789,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2770,
              "end": 2773,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2771,
                  "end": 2772,
                  "name": {
                    "type": "Identifier",
                    "start": 2771,
                    "end": 2772,
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2775,
              "end": 2788,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2777,
                "end": 2788,
                "typeName": {
                  "type": "Identifier",
                  "start": 2777,
                  "end": 2788,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 2794,
            "end": 2821,
            "key": {
              "type": "Identifier",
              "start": 2794,
              "end": 2802,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2802,
              "end": 2805,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2803,
                  "end": 2804,
                  "name": {
                    "type": "Identifier",
                    "start": 2803,
                    "end": 2804,
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2807,
              "end": 2820,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2809,
                "end": 2820,
                "typeName": {
                  "type": "Identifier",
                  "start": 2809,
                  "end": 2820,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2825,
      "end": 3067,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2832,
        "end": 3067,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2838,
          "end": 2891,
          "decorators": [],
          "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 2892,
          "end": 3067,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 2898,
              "end": 2938,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2905,
                "end": 2925,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2925,
                "end": 2938,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2925,
                  "end": 2928,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2926,
                      "end": 2927,
                      "name": {
                        "type": "Identifier",
                        "start": 2926,
                        "end": 2927,
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2931,
                  "end": 2938,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 2943,
              "end": 2992,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2958,
                "end": 2979,
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2979,
                "end": 2992,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2979,
                  "end": 2982,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2980,
                      "end": 2981,
                      "name": {
                        "type": "Identifier",
                        "start": 2980,
                        "end": 2981,
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2985,
                  "end": 2992,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 2997,
              "end": 3024,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2997,
                "end": 3011,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 3011,
                "end": 3024,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3011,
                  "end": 3014,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3012,
                      "end": 3013,
                      "name": {
                        "type": "Identifier",
                        "start": 3012,
                        "end": 3013,
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3017,
                  "end": 3024,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 3029,
              "end": 3065,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3037,
                "end": 3052,
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 3052,
                "end": 3065,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3052,
                  "end": 3055,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3053,
                      "end": 3054,
                      "name": {
                        "type": "Identifier",
                        "start": 3053,
                        "end": 3054,
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3058,
                  "end": 3065,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 3068,
      "end": 3304,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3074,
        "end": 3128,
        "decorators": [],
        "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3129,
        "end": 3304,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3135,
            "end": 3175,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3142,
              "end": 3162,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3162,
              "end": 3175,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3162,
                "end": 3165,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3163,
                    "end": 3164,
                    "name": {
                      "type": "Identifier",
                      "start": 3163,
                      "end": 3164,
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3168,
                "end": 3175,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3180,
            "end": 3229,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3195,
              "end": 3216,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3216,
              "end": 3229,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3216,
                "end": 3219,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3217,
                    "end": 3218,
                    "name": {
                      "type": "Identifier",
                      "start": 3217,
                      "end": 3218,
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3222,
                "end": 3229,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3234,
            "end": 3261,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3234,
              "end": 3248,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3248,
              "end": 3261,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3248,
                "end": 3251,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3249,
                    "end": 3250,
                    "name": {
                      "type": "Identifier",
                      "start": 3249,
                      "end": 3250,
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3254,
                "end": 3261,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3266,
            "end": 3302,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3274,
              "end": 3289,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3289,
              "end": 3302,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3289,
                "end": 3292,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3290,
                    "end": 3291,
                    "name": {
                      "type": "Identifier",
                      "start": 3290,
                      "end": 3291,
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3295,
                "end": 3302,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3306,
      "end": 3383,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3313,
        "end": 3383,
        "id": {
          "type": "Identifier",
          "start": 3322,
          "end": 3374,
          "decorators": [],
          "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3374,
          "end": 3377,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3375,
              "end": 3376,
              "name": {
                "type": "Identifier",
                "start": 3375,
                "end": 3376,
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
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 3380,
          "end": 3383,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 3385,
      "end": 3456,
      "id": {
        "type": "Identifier",
        "start": 3394,
        "end": 3447,
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3447,
        "end": 3450,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3448,
            "end": 3449,
            "name": {
              "type": "Identifier",
              "start": 3448,
              "end": 3449,
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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3453,
        "end": 3456,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3458,
      "end": 3782,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 3465,
        "end": 3782,
        "id": {
          "type": "Identifier",
          "start": 3475,
          "end": 3520,
          "decorators": [],
          "name": "publicInterfaceWithPrivatModuleTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 3521,
          "end": 3782,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 3527,
              "end": 3598,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3531,
                "end": 3568,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3532,
                    "end": 3567,
                    "name": {
                      "type": "Identifier",
                      "start": 3532,
                      "end": 3533,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3542,
                      "end": 3567,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 3542,
                        "end": 3567,
                        "left": {
                          "type": "Identifier",
                          "start": 3542,
                          "end": 3555,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3556,
                          "end": 3567,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3570,
                "end": 3597,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3572,
                  "end": 3597,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 3572,
                    "end": 3597,
                    "left": {
                      "type": "Identifier",
                      "start": 3572,
                      "end": 3585,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3586,
                      "end": 3597,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 3613,
              "end": 3680,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3613,
                "end": 3650,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3614,
                    "end": 3649,
                    "name": {
                      "type": "Identifier",
                      "start": 3614,
                      "end": 3615,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3624,
                      "end": 3649,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 3624,
                        "end": 3649,
                        "left": {
                          "type": "Identifier",
                          "start": 3624,
                          "end": 3637,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3638,
                          "end": 3649,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3652,
                "end": 3679,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3654,
                  "end": 3679,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 3654,
                    "end": 3679,
                    "left": {
                      "type": "Identifier",
                      "start": 3654,
                      "end": 3667,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3668,
                      "end": 3679,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 3695,
              "end": 3770,
              "key": {
                "type": "Identifier",
                "start": 3695,
                "end": 3703,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3703,
                "end": 3740,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3704,
                    "end": 3739,
                    "name": {
                      "type": "Identifier",
                      "start": 3704,
                      "end": 3705,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3714,
                      "end": 3739,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 3714,
                        "end": 3739,
                        "left": {
                          "type": "Identifier",
                          "start": 3714,
                          "end": 3727,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3728,
                          "end": 3739,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3742,
                "end": 3769,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3744,
                  "end": 3769,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 3744,
                    "end": 3769,
                    "left": {
                      "type": "Identifier",
                      "start": 3744,
                      "end": 3757,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3758,
                      "end": 3769,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3783,
      "end": 4011,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 3790,
        "end": 4011,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 3796,
          "end": 3842,
          "decorators": [],
          "name": "publicClassWithWithPrivateModuleTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 3843,
          "end": 4011,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 3849,
              "end": 3933,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3856,
                "end": 3876,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 3876,
                "end": 3933,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3876,
                  "end": 3913,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3877,
                      "end": 3912,
                      "name": {
                        "type": "Identifier",
                        "start": 3877,
                        "end": 3878,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3887,
                        "end": 3912,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3887,
                          "end": 3912,
                          "left": {
                            "type": "Identifier",
                            "start": 3887,
                            "end": 3900,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3901,
                            "end": 3912,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3916,
                  "end": 3933,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 3938,
              "end": 4009,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3938,
                "end": 3952,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 3952,
                "end": 4009,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3952,
                  "end": 3989,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3953,
                      "end": 3988,
                      "name": {
                        "type": "Identifier",
                        "start": 3953,
                        "end": 3954,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3963,
                        "end": 3988,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3963,
                          "end": 3988,
                          "left": {
                            "type": "Identifier",
                            "start": 3963,
                            "end": 3976,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3977,
                            "end": 3988,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3992,
                  "end": 4009,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4012,
      "end": 4127,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 4019,
        "end": 4127,
        "id": {
          "type": "Identifier",
          "start": 4028,
          "end": 4074,
          "decorators": [],
          "name": "publicFunctionWithPrivateMopduleTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4074,
          "end": 4111,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4075,
              "end": 4110,
              "name": {
                "type": "Identifier",
                "start": 4075,
                "end": 4076,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 4085,
                "end": 4110,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 4085,
                  "end": 4110,
                  "left": {
                    "type": "Identifier",
                    "start": 4085,
                    "end": 4098,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4099,
                    "end": 4110,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 4114,
          "end": 4127,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4130,
      "end": 4418,
      "id": {
        "type": "Identifier",
        "start": 4140,
        "end": 4186,
        "decorators": [],
        "name": "privateInterfaceWithPrivatModuleTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 4187,
        "end": 4418,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 4193,
            "end": 4264,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4197,
              "end": 4234,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4198,
                  "end": 4233,
                  "name": {
                    "type": "Identifier",
                    "start": 4198,
                    "end": 4199,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4208,
                    "end": 4233,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4208,
                      "end": 4233,
                      "left": {
                        "type": "Identifier",
                        "start": 4208,
                        "end": 4221,
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4222,
                        "end": 4233,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4236,
              "end": 4263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4238,
                "end": 4263,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 4238,
                  "end": 4263,
                  "left": {
                    "type": "Identifier",
                    "start": 4238,
                    "end": 4251,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4252,
                    "end": 4263,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 4269,
            "end": 4336,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4269,
              "end": 4306,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4270,
                  "end": 4305,
                  "name": {
                    "type": "Identifier",
                    "start": 4270,
                    "end": 4271,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4280,
                    "end": 4305,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4280,
                      "end": 4305,
                      "left": {
                        "type": "Identifier",
                        "start": 4280,
                        "end": 4293,
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4294,
                        "end": 4305,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4308,
              "end": 4335,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4310,
                "end": 4335,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 4310,
                  "end": 4335,
                  "left": {
                    "type": "Identifier",
                    "start": 4310,
                    "end": 4323,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4324,
                    "end": 4335,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 4341,
            "end": 4416,
            "key": {
              "type": "Identifier",
              "start": 4341,
              "end": 4349,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4349,
              "end": 4386,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4350,
                  "end": 4385,
                  "name": {
                    "type": "Identifier",
                    "start": 4350,
                    "end": 4351,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4360,
                    "end": 4385,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4360,
                      "end": 4385,
                      "left": {
                        "type": "Identifier",
                        "start": 4360,
                        "end": 4373,
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4374,
                        "end": 4385,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4388,
              "end": 4415,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4390,
                "end": 4415,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 4390,
                  "end": 4415,
                  "left": {
                    "type": "Identifier",
                    "start": 4390,
                    "end": 4403,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4404,
                    "end": 4415,
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 4419,
      "end": 4621,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4425,
        "end": 4472,
        "decorators": [],
        "name": "privateClassWithWithPrivateModuleTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4473,
        "end": 4621,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4479,
            "end": 4553,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4486,
              "end": 4506,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4506,
              "end": 4553,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4506,
                "end": 4543,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4507,
                    "end": 4542,
                    "name": {
                      "type": "Identifier",
                      "start": 4507,
                      "end": 4508,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 4517,
                      "end": 4542,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 4517,
                        "end": 4542,
                        "left": {
                          "type": "Identifier",
                          "start": 4517,
                          "end": 4530,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4531,
                          "end": 4542,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 4546,
                "end": 4553,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4558,
            "end": 4619,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4558,
              "end": 4572,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4572,
              "end": 4619,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4572,
                "end": 4609,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4573,
                    "end": 4608,
                    "name": {
                      "type": "Identifier",
                      "start": 4573,
                      "end": 4574,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 4583,
                      "end": 4608,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 4583,
                        "end": 4608,
                        "left": {
                          "type": "Identifier",
                          "start": 4583,
                          "end": 4596,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4597,
                          "end": 4608,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 4612,
                "end": 4619,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4622,
      "end": 4721,
      "id": {
        "type": "Identifier",
        "start": 4631,
        "end": 4678,
        "decorators": [],
        "name": "privateFunctionWithPrivateMopduleTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4678,
        "end": 4715,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4679,
            "end": 4714,
            "name": {
              "type": "Identifier",
              "start": 4679,
              "end": 4680,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4689,
              "end": 4714,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 4689,
                "end": 4714,
                "left": {
                  "type": "Identifier",
                  "start": 4689,
                  "end": 4702,
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4703,
                  "end": 4714,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4718,
        "end": 4721,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4724,
      "end": 10014,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 4731,
        "end": 10014,
        "id": {
          "type": "Identifier",
          "start": 4738,
          "end": 4750,
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 4751,
          "end": 10014,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 4757,
              "end": 4783,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 4763,
                "end": 4775,
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 4776,
                "end": 4783,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 4789,
              "end": 4821,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 4796,
                "end": 4821,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 4802,
                  "end": 4813,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 4814,
                  "end": 4821,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 4827,
              "end": 5084,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 4834,
                "end": 5084,
                "id": {
                  "type": "Identifier",
                  "start": 4844,
                  "end": 4884,
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 4885,
                  "end": 5084,
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 4895,
                      "end": 4940,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4899,
                        "end": 4923,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4900,
                            "end": 4922,
                            "name": {
                              "type": "Identifier",
                              "start": 4900,
                              "end": 4901,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 4910,
                              "end": 4922,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4910,
                                "end": 4922,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4925,
                        "end": 4939,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4927,
                          "end": 4939,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4927,
                            "end": 4939,
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 4959,
                      "end": 5000,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 4959,
                        "end": 4983,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 4960,
                            "end": 4982,
                            "name": {
                              "type": "Identifier",
                              "start": 4960,
                              "end": 4961,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 4970,
                              "end": 4982,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4970,
                                "end": 4982,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4985,
                        "end": 4999,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4987,
                          "end": 4999,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4987,
                            "end": 4999,
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 5019,
                      "end": 5068,
                      "key": {
                        "type": "Identifier",
                        "start": 5019,
                        "end": 5027,
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5027,
                        "end": 5051,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5028,
                            "end": 5050,
                            "name": {
                              "type": "Identifier",
                              "start": 5028,
                              "end": 5029,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 5038,
                              "end": 5050,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5038,
                                "end": 5050,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5053,
                        "end": 5067,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5055,
                          "end": 5067,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5055,
                            "end": 5067,
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5090,
              "end": 5310,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 5097,
                "end": 5310,
                "id": {
                  "type": "Identifier",
                  "start": 5107,
                  "end": 5146,
                  "decorators": [],
                  "name": "publicInterfaceWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 5147,
                  "end": 5310,
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 5157,
                      "end": 5200,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5161,
                        "end": 5184,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5162,
                            "end": 5183,
                            "name": {
                              "type": "Identifier",
                              "start": 5162,
                              "end": 5163,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 5172,
                              "end": 5183,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5172,
                                "end": 5183,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5186,
                        "end": 5199,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5188,
                          "end": 5199,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5188,
                            "end": 5199,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 5209,
                      "end": 5248,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5209,
                        "end": 5232,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5210,
                            "end": 5231,
                            "name": {
                              "type": "Identifier",
                              "start": 5210,
                              "end": 5211,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 5220,
                              "end": 5231,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5220,
                                "end": 5231,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5234,
                        "end": 5247,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5236,
                          "end": 5247,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5236,
                            "end": 5247,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 5257,
                      "end": 5304,
                      "key": {
                        "type": "Identifier",
                        "start": 5257,
                        "end": 5265,
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 5265,
                        "end": 5288,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 5266,
                            "end": 5287,
                            "name": {
                              "type": "Identifier",
                              "start": 5266,
                              "end": 5267,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 5276,
                              "end": 5287,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5276,
                                "end": 5287,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 5290,
                        "end": 5303,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5292,
                          "end": 5303,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5292,
                            "end": 5303,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 5316,
              "end": 5537,
              "id": {
                "type": "Identifier",
                "start": 5326,
                "end": 5367,
                "decorators": [],
                "name": "privateInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 5368,
                "end": 5537,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 5378,
                    "end": 5423,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5382,
                      "end": 5406,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5383,
                          "end": 5405,
                          "name": {
                            "type": "Identifier",
                            "start": 5383,
                            "end": 5384,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 5393,
                            "end": 5405,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5393,
                              "end": 5405,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5408,
                      "end": 5422,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5410,
                        "end": 5422,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5410,
                          "end": 5422,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 5432,
                    "end": 5473,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5432,
                      "end": 5456,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5433,
                          "end": 5455,
                          "name": {
                            "type": "Identifier",
                            "start": 5433,
                            "end": 5434,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 5443,
                            "end": 5455,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5443,
                              "end": 5455,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5458,
                      "end": 5472,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5460,
                        "end": 5472,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5460,
                          "end": 5472,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5482,
                    "end": 5531,
                    "key": {
                      "type": "Identifier",
                      "start": 5482,
                      "end": 5490,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5490,
                      "end": 5514,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5491,
                          "end": 5513,
                          "name": {
                            "type": "Identifier",
                            "start": 5491,
                            "end": 5492,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 5501,
                            "end": 5513,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5501,
                              "end": 5513,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5516,
                      "end": 5530,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5518,
                        "end": 5530,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5518,
                          "end": 5530,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 5543,
              "end": 5757,
              "id": {
                "type": "Identifier",
                "start": 5553,
                "end": 5593,
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 5594,
                "end": 5757,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 5604,
                    "end": 5647,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5608,
                      "end": 5631,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5609,
                          "end": 5630,
                          "name": {
                            "type": "Identifier",
                            "start": 5609,
                            "end": 5610,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 5619,
                            "end": 5630,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5619,
                              "end": 5630,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5633,
                      "end": 5646,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5635,
                        "end": 5646,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5635,
                          "end": 5646,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 5656,
                    "end": 5695,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5656,
                      "end": 5679,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5657,
                          "end": 5678,
                          "name": {
                            "type": "Identifier",
                            "start": 5657,
                            "end": 5658,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 5667,
                            "end": 5678,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5667,
                              "end": 5678,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5681,
                      "end": 5694,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5683,
                        "end": 5694,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5683,
                          "end": 5694,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5704,
                    "end": 5751,
                    "key": {
                      "type": "Identifier",
                      "start": 5704,
                      "end": 5712,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5712,
                      "end": 5735,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5713,
                          "end": 5734,
                          "name": {
                            "type": "Identifier",
                            "start": 5713,
                            "end": 5714,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 5723,
                            "end": 5734,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5723,
                              "end": 5734,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5737,
                      "end": 5750,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5739,
                        "end": 5750,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5739,
                          "end": 5750,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5763,
              "end": 6132,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 5770,
                "end": 6132,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 5776,
                  "end": 5816,
                  "decorators": [],
                  "name": "publicClassWithWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 5817,
                  "end": 6132,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 5827,
                      "end": 5902,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 5834,
                        "end": 5854,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5854,
                        "end": 5902,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 5854,
                          "end": 5878,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 5855,
                              "end": 5877,
                              "name": {
                                "type": "Identifier",
                                "start": 5855,
                                "end": 5856,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 5865,
                                "end": 5877,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5865,
                                  "end": 5877,
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 5881,
                          "end": 5902,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 5911,
                      "end": 5985,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 5926,
                        "end": 5947,
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5947,
                        "end": 5985,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 5947,
                          "end": 5971,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 5948,
                              "end": 5970,
                              "name": {
                                "type": "Identifier",
                                "start": 5948,
                                "end": 5949,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 5958,
                                "end": 5970,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5958,
                                  "end": 5970,
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 5974,
                          "end": 5985,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 5994,
                      "end": 6056,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 5994,
                        "end": 6008,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6008,
                        "end": 6056,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 6008,
                          "end": 6032,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 6009,
                              "end": 6031,
                              "name": {
                                "type": "Identifier",
                                "start": 6009,
                                "end": 6010,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 6019,
                                "end": 6031,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6019,
                                  "end": 6031,
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6035,
                          "end": 6056,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6065,
                      "end": 6126,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6073,
                        "end": 6088,
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6088,
                        "end": 6126,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 6088,
                          "end": 6112,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 6089,
                              "end": 6111,
                              "name": {
                                "type": "Identifier",
                                "start": 6089,
                                "end": 6090,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 6099,
                                "end": 6111,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6099,
                                  "end": 6111,
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6115,
                          "end": 6126,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6138,
              "end": 6482,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6145,
                "end": 6482,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 6151,
                  "end": 6190,
                  "decorators": [],
                  "name": "publicClassWithWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6191,
                  "end": 6482,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 6201,
                      "end": 6265,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6208,
                        "end": 6228,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6228,
                        "end": 6265,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 6228,
                          "end": 6251,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 6229,
                              "end": 6250,
                              "name": {
                                "type": "Identifier",
                                "start": 6229,
                                "end": 6230,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 6239,
                                "end": 6250,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6239,
                                  "end": 6250,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6254,
                          "end": 6265,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6274,
                      "end": 6347,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6289,
                        "end": 6310,
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6310,
                        "end": 6347,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 6310,
                          "end": 6333,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 6311,
                              "end": 6332,
                              "name": {
                                "type": "Identifier",
                                "start": 6311,
                                "end": 6312,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 6321,
                                "end": 6332,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6321,
                                  "end": 6332,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6336,
                          "end": 6347,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6356,
                      "end": 6407,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6356,
                        "end": 6370,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6370,
                        "end": 6407,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 6370,
                          "end": 6393,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 6371,
                              "end": 6392,
                              "name": {
                                "type": "Identifier",
                                "start": 6371,
                                "end": 6372,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 6381,
                                "end": 6392,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6381,
                                  "end": 6392,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6396,
                          "end": 6407,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6416,
                      "end": 6476,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6424,
                        "end": 6439,
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6439,
                        "end": 6476,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 6439,
                          "end": 6462,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 6440,
                              "end": 6461,
                              "name": {
                                "type": "Identifier",
                                "start": 6440,
                                "end": 6441,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 6450,
                                "end": 6461,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6450,
                                  "end": 6461,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6465,
                          "end": 6476,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ClassDeclaration",
              "start": 6488,
              "end": 6831,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 6494,
                "end": 6535,
                "decorators": [],
                "name": "privateClassWithWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 6536,
                "end": 6831,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 6546,
                    "end": 6611,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 6553,
                      "end": 6573,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6573,
                      "end": 6611,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 6573,
                        "end": 6597,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 6574,
                            "end": 6596,
                            "name": {
                              "type": "Identifier",
                              "start": 6574,
                              "end": 6575,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 6584,
                              "end": 6596,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6584,
                                "end": 6596,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 6600,
                        "end": 6611,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 6620,
                    "end": 6694,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 6635,
                      "end": 6656,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6656,
                      "end": 6694,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 6656,
                        "end": 6680,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 6657,
                            "end": 6679,
                            "name": {
                              "type": "Identifier",
                              "start": 6657,
                              "end": 6658,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 6667,
                              "end": 6679,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6667,
                                "end": 6679,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 6683,
                        "end": 6694,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 6703,
                    "end": 6755,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 6703,
                      "end": 6717,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6717,
                      "end": 6755,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 6717,
                        "end": 6741,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 6718,
                            "end": 6740,
                            "name": {
                              "type": "Identifier",
                              "start": 6718,
                              "end": 6719,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 6728,
                              "end": 6740,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6728,
                                "end": 6740,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 6744,
                        "end": 6755,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 6764,
                    "end": 6825,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 6772,
                      "end": 6787,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6787,
                      "end": 6825,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 6787,
                        "end": 6811,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 6788,
                            "end": 6810,
                            "name": {
                              "type": "Identifier",
                              "start": 6788,
                              "end": 6789,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 6798,
                              "end": 6810,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6798,
                                "end": 6810,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 6814,
                        "end": 6825,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 6837,
              "end": 7175,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 6843,
                "end": 6883,
                "decorators": [],
                "name": "privateClassWithWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 6884,
                "end": 7175,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 6894,
                    "end": 6958,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 6901,
                      "end": 6921,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6921,
                      "end": 6958,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 6921,
                        "end": 6944,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 6922,
                            "end": 6943,
                            "name": {
                              "type": "Identifier",
                              "start": 6922,
                              "end": 6923,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 6932,
                              "end": 6943,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6932,
                                "end": 6943,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 6947,
                        "end": 6958,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 6967,
                    "end": 7040,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 6982,
                      "end": 7003,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7003,
                      "end": 7040,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 7003,
                        "end": 7026,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 7004,
                            "end": 7025,
                            "name": {
                              "type": "Identifier",
                              "start": 7004,
                              "end": 7005,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 7014,
                              "end": 7025,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7014,
                                "end": 7025,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7029,
                        "end": 7040,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7049,
                    "end": 7100,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7049,
                      "end": 7063,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7063,
                      "end": 7100,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 7063,
                        "end": 7086,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 7064,
                            "end": 7085,
                            "name": {
                              "type": "Identifier",
                              "start": 7064,
                              "end": 7065,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 7074,
                              "end": 7085,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7074,
                                "end": 7085,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7089,
                        "end": 7100,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7109,
                    "end": 7169,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7117,
                      "end": 7132,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7132,
                      "end": 7169,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 7132,
                        "end": 7155,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 7133,
                            "end": 7154,
                            "name": {
                              "type": "Identifier",
                              "start": 7133,
                              "end": 7134,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 7143,
                              "end": 7154,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7143,
                                "end": 7154,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7158,
                        "end": 7169,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 7181,
              "end": 7280,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 7188,
                "end": 7280,
                "id": {
                  "type": "Identifier",
                  "start": 7197,
                  "end": 7236,
                  "decorators": [],
                  "name": "publicFunctionWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7236,
                  "end": 7260,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 7237,
                      "end": 7259,
                      "name": {
                        "type": "Identifier",
                        "start": 7237,
                        "end": 7238,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 7247,
                        "end": 7259,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7247,
                          "end": 7259,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 7263,
                  "end": 7280,
                  "body": []
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 7286,
              "end": 7373,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 7293,
                "end": 7373,
                "id": {
                  "type": "Identifier",
                  "start": 7302,
                  "end": 7340,
                  "decorators": [],
                  "name": "publicFunctionWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 7340,
                  "end": 7363,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 7341,
                      "end": 7362,
                      "name": {
                        "type": "Identifier",
                        "start": 7341,
                        "end": 7342,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 7351,
                        "end": 7362,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7351,
                          "end": 7362,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 7366,
                  "end": 7373,
                  "body": []
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "FunctionDeclaration",
              "start": 7379,
              "end": 7462,
              "id": {
                "type": "Identifier",
                "start": 7388,
                "end": 7428,
                "decorators": [],
                "name": "privateFunctionWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 7428,
                "end": 7452,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 7429,
                    "end": 7451,
                    "name": {
                      "type": "Identifier",
                      "start": 7429,
                      "end": 7430,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 7439,
                      "end": 7451,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7439,
                        "end": 7451,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 7455,
                "end": 7462,
                "body": []
              },
              "expression": false
            },
            {
              "type": "FunctionDeclaration",
              "start": 7468,
              "end": 7549,
              "id": {
                "type": "Identifier",
                "start": 7477,
                "end": 7516,
                "decorators": [],
                "name": "privateFunctionWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 7516,
                "end": 7539,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 7517,
                    "end": 7538,
                    "name": {
                      "type": "Identifier",
                      "start": 7517,
                      "end": 7518,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 7527,
                      "end": 7538,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7527,
                        "end": 7538,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 7542,
                "end": 7549,
                "body": []
              },
              "expression": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 7555,
              "end": 7729,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 7562,
                "end": 7729,
                "id": {
                  "type": "Identifier",
                  "start": 7572,
                  "end": 7625,
                  "decorators": [],
                  "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 7626,
                  "end": 7729,
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 7636,
                      "end": 7659,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 7640,
                        "end": 7643,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 7641,
                            "end": 7642,
                            "name": {
                              "type": "Identifier",
                              "start": 7641,
                              "end": 7642,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 7645,
                        "end": 7658,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7647,
                          "end": 7658,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7647,
                            "end": 7658,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 7668,
                      "end": 7687,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 7668,
                        "end": 7671,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 7669,
                            "end": 7670,
                            "name": {
                              "type": "Identifier",
                              "start": 7669,
                              "end": 7670,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 7673,
                        "end": 7686,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7675,
                          "end": 7686,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7675,
                            "end": 7686,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 7696,
                      "end": 7723,
                      "key": {
                        "type": "Identifier",
                        "start": 7696,
                        "end": 7704,
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 7704,
                        "end": 7707,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 7705,
                            "end": 7706,
                            "name": {
                              "type": "Identifier",
                              "start": 7705,
                              "end": 7706,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 7709,
                        "end": 7722,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7711,
                          "end": 7722,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7711,
                            "end": 7722,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 7735,
              "end": 7903,
              "id": {
                "type": "Identifier",
                "start": 7745,
                "end": 7799,
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 7800,
                "end": 7903,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 7810,
                    "end": 7833,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 7814,
                      "end": 7817,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 7815,
                          "end": 7816,
                          "name": {
                            "type": "Identifier",
                            "start": 7815,
                            "end": 7816,
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 7819,
                      "end": 7832,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7821,
                        "end": 7832,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7821,
                          "end": 7832,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 7842,
                    "end": 7861,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 7842,
                      "end": 7845,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 7843,
                          "end": 7844,
                          "name": {
                            "type": "Identifier",
                            "start": 7843,
                            "end": 7844,
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 7847,
                      "end": 7860,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7849,
                        "end": 7860,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7849,
                          "end": 7860,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 7870,
                    "end": 7897,
                    "key": {
                      "type": "Identifier",
                      "start": 7870,
                      "end": 7878,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 7878,
                      "end": 7881,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 7879,
                          "end": 7880,
                          "name": {
                            "type": "Identifier",
                            "start": 7879,
                            "end": 7880,
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 7883,
                      "end": 7896,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7885,
                        "end": 7896,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7885,
                          "end": 7896,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 7909,
              "end": 8187,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 7916,
                "end": 8187,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 7922,
                  "end": 7975,
                  "decorators": [],
                  "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 7976,
                  "end": 8187,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 7986,
                      "end": 8030,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7993,
                        "end": 8013,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8013,
                        "end": 8030,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 8013,
                          "end": 8016,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 8014,
                              "end": 8015,
                              "name": {
                                "type": "Identifier",
                                "start": 8014,
                                "end": 8015,
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
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 8019,
                          "end": 8030,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8039,
                      "end": 8092,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 8054,
                        "end": 8075,
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8075,
                        "end": 8092,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 8075,
                          "end": 8078,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 8076,
                              "end": 8077,
                              "name": {
                                "type": "Identifier",
                                "start": 8076,
                                "end": 8077,
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
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 8081,
                          "end": 8092,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8101,
                      "end": 8132,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 8101,
                        "end": 8115,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8115,
                        "end": 8132,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 8115,
                          "end": 8118,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 8116,
                              "end": 8117,
                              "name": {
                                "type": "Identifier",
                                "start": 8116,
                                "end": 8117,
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
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 8121,
                          "end": 8132,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8141,
                      "end": 8181,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 8149,
                        "end": 8164,
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8164,
                        "end": 8181,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 8164,
                          "end": 8167,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 8165,
                              "end": 8166,
                              "name": {
                                "type": "Identifier",
                                "start": 8165,
                                "end": 8166,
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
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 8170,
                          "end": 8181,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ClassDeclaration",
              "start": 8192,
              "end": 8464,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 8198,
                "end": 8252,
                "decorators": [],
                "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 8253,
                "end": 8464,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 8263,
                    "end": 8307,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8270,
                      "end": 8290,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8290,
                      "end": 8307,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8290,
                        "end": 8293,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8291,
                            "end": 8292,
                            "name": {
                              "type": "Identifier",
                              "start": 8291,
                              "end": 8292,
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
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8296,
                        "end": 8307,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8316,
                    "end": 8369,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8331,
                      "end": 8352,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8352,
                      "end": 8369,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8352,
                        "end": 8355,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8353,
                            "end": 8354,
                            "name": {
                              "type": "Identifier",
                              "start": 8353,
                              "end": 8354,
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
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8358,
                        "end": 8369,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8378,
                    "end": 8409,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8378,
                      "end": 8392,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8392,
                      "end": 8409,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8392,
                        "end": 8395,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8393,
                            "end": 8394,
                            "name": {
                              "type": "Identifier",
                              "start": 8393,
                              "end": 8394,
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
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8398,
                        "end": 8409,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8418,
                    "end": 8458,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8426,
                      "end": 8441,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8441,
                      "end": 8458,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8441,
                        "end": 8444,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8442,
                            "end": 8443,
                            "name": {
                              "type": "Identifier",
                              "start": 8442,
                              "end": 8443,
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
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8447,
                        "end": 8458,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 8470,
              "end": 8551,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 8477,
                "end": 8551,
                "id": {
                  "type": "Identifier",
                  "start": 8486,
                  "end": 8538,
                  "decorators": [],
                  "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 8538,
                  "end": 8541,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 8539,
                      "end": 8540,
                      "name": {
                        "type": "Identifier",
                        "start": 8539,
                        "end": 8540,
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
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 8544,
                  "end": 8551,
                  "body": []
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "FunctionDeclaration",
              "start": 8557,
              "end": 8632,
              "id": {
                "type": "Identifier",
                "start": 8566,
                "end": 8619,
                "decorators": [],
                "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 8619,
                "end": 8622,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 8620,
                    "end": 8621,
                    "name": {
                      "type": "Identifier",
                      "start": 8620,
                      "end": 8621,
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 8625,
                "end": 8632,
                "body": []
              },
              "expression": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 8638,
              "end": 8978,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 8645,
                "end": 8978,
                "id": {
                  "type": "Identifier",
                  "start": 8655,
                  "end": 8700,
                  "decorators": [],
                  "name": "publicInterfaceWithPrivatModuleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 8701,
                  "end": 8978,
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 8711,
                      "end": 8782,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8715,
                        "end": 8752,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8716,
                            "end": 8751,
                            "name": {
                              "type": "Identifier",
                              "start": 8716,
                              "end": 8717,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 8726,
                              "end": 8751,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 8726,
                                "end": 8751,
                                "left": {
                                  "type": "Identifier",
                                  "start": 8726,
                                  "end": 8739,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 8740,
                                  "end": 8751,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8754,
                        "end": 8781,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8756,
                          "end": 8781,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 8756,
                            "end": 8781,
                            "left": {
                              "type": "Identifier",
                              "start": 8756,
                              "end": 8769,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 8770,
                              "end": 8781,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 8801,
                      "end": 8868,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8801,
                        "end": 8838,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8802,
                            "end": 8837,
                            "name": {
                              "type": "Identifier",
                              "start": 8802,
                              "end": 8803,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 8812,
                              "end": 8837,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 8812,
                                "end": 8837,
                                "left": {
                                  "type": "Identifier",
                                  "start": 8812,
                                  "end": 8825,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 8826,
                                  "end": 8837,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8840,
                        "end": 8867,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8842,
                          "end": 8867,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 8842,
                            "end": 8867,
                            "left": {
                              "type": "Identifier",
                              "start": 8842,
                              "end": 8855,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 8856,
                              "end": 8867,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 8887,
                      "end": 8962,
                      "key": {
                        "type": "Identifier",
                        "start": 8887,
                        "end": 8895,
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 8895,
                        "end": 8932,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 8896,
                            "end": 8931,
                            "name": {
                              "type": "Identifier",
                              "start": 8896,
                              "end": 8897,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 8906,
                              "end": 8931,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 8906,
                                "end": 8931,
                                "left": {
                                  "type": "Identifier",
                                  "start": 8906,
                                  "end": 8919,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 8920,
                                  "end": 8931,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8934,
                        "end": 8961,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8936,
                          "end": 8961,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 8936,
                            "end": 8961,
                            "left": {
                              "type": "Identifier",
                              "start": 8936,
                              "end": 8949,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 8950,
                              "end": 8961,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 8983,
              "end": 9231,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 8990,
                "end": 9231,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 8996,
                  "end": 9042,
                  "decorators": [],
                  "name": "publicClassWithWithPrivateModuleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 9043,
                  "end": 9231,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 9053,
                      "end": 9141,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 9060,
                        "end": 9080,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9080,
                        "end": 9141,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 9080,
                          "end": 9117,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 9081,
                              "end": 9116,
                              "name": {
                                "type": "Identifier",
                                "start": 9081,
                                "end": 9082,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 9091,
                                "end": 9116,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 9091,
                                  "end": 9116,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 9091,
                                    "end": 9104,
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 9105,
                                    "end": 9116,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 9120,
                          "end": 9141,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 9150,
                      "end": 9225,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 9150,
                        "end": 9164,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9164,
                        "end": 9225,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 9164,
                          "end": 9201,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 9165,
                              "end": 9200,
                              "name": {
                                "type": "Identifier",
                                "start": 9165,
                                "end": 9166,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 9175,
                                "end": 9200,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 9175,
                                  "end": 9200,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 9175,
                                    "end": 9188,
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 9189,
                                    "end": 9200,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 9204,
                          "end": 9225,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9236,
              "end": 9355,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 9243,
                "end": 9355,
                "id": {
                  "type": "Identifier",
                  "start": 9252,
                  "end": 9298,
                  "decorators": [],
                  "name": "publicFunctionWithPrivateMopduleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 9298,
                  "end": 9335,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 9299,
                      "end": 9334,
                      "name": {
                        "type": "Identifier",
                        "start": 9299,
                        "end": 9300,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 9309,
                        "end": 9334,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 9309,
                          "end": 9334,
                          "left": {
                            "type": "Identifier",
                            "start": 9309,
                            "end": 9322,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 9323,
                            "end": 9334,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 9338,
                  "end": 9355,
                  "body": []
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 9362,
              "end": 9672,
              "id": {
                "type": "Identifier",
                "start": 9372,
                "end": 9418,
                "decorators": [],
                "name": "privateInterfaceWithPrivatModuleTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 9419,
                "end": 9672,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 9429,
                    "end": 9500,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 9433,
                      "end": 9470,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 9434,
                          "end": 9469,
                          "name": {
                            "type": "Identifier",
                            "start": 9434,
                            "end": 9435,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 9444,
                            "end": 9469,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 9444,
                              "end": 9469,
                              "left": {
                                "type": "Identifier",
                                "start": 9444,
                                "end": 9457,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 9458,
                                "end": 9469,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 9472,
                      "end": 9499,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9474,
                        "end": 9499,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 9474,
                          "end": 9499,
                          "left": {
                            "type": "Identifier",
                            "start": 9474,
                            "end": 9487,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 9488,
                            "end": 9499,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 9511,
                    "end": 9578,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 9511,
                      "end": 9548,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 9512,
                          "end": 9547,
                          "name": {
                            "type": "Identifier",
                            "start": 9512,
                            "end": 9513,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 9522,
                            "end": 9547,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 9522,
                              "end": 9547,
                              "left": {
                                "type": "Identifier",
                                "start": 9522,
                                "end": 9535,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 9536,
                                "end": 9547,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 9550,
                      "end": 9577,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9552,
                        "end": 9577,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 9552,
                          "end": 9577,
                          "left": {
                            "type": "Identifier",
                            "start": 9552,
                            "end": 9565,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 9566,
                            "end": 9577,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 9589,
                    "end": 9664,
                    "key": {
                      "type": "Identifier",
                      "start": 9589,
                      "end": 9597,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 9597,
                      "end": 9634,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 9598,
                          "end": 9633,
                          "name": {
                            "type": "Identifier",
                            "start": 9598,
                            "end": 9599,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 9608,
                            "end": 9633,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 9608,
                              "end": 9633,
                              "left": {
                                "type": "Identifier",
                                "start": 9608,
                                "end": 9621,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 9622,
                                "end": 9633,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 9636,
                      "end": 9663,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9638,
                        "end": 9663,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 9638,
                          "end": 9663,
                          "left": {
                            "type": "Identifier",
                            "start": 9638,
                            "end": 9651,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 9652,
                            "end": 9663,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 9677,
              "end": 9902,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 9683,
                "end": 9730,
                "decorators": [],
                "name": "privateClassWithWithPrivateModuleTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 9731,
                "end": 9902,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 9741,
                    "end": 9821,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9748,
                      "end": 9768,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9768,
                      "end": 9821,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 9768,
                        "end": 9805,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 9769,
                            "end": 9804,
                            "name": {
                              "type": "Identifier",
                              "start": 9769,
                              "end": 9770,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 9779,
                              "end": 9804,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 9779,
                                "end": 9804,
                                "left": {
                                  "type": "Identifier",
                                  "start": 9779,
                                  "end": 9792,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 9793,
                                  "end": 9804,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9808,
                        "end": 9821,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9830,
                    "end": 9896,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9830,
                      "end": 9844,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9844,
                      "end": 9896,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 9844,
                        "end": 9881,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 9845,
                            "end": 9880,
                            "name": {
                              "type": "Identifier",
                              "start": 9845,
                              "end": 9846,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 9855,
                              "end": 9880,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 9855,
                                "end": 9880,
                                "left": {
                                  "type": "Identifier",
                                  "start": 9855,
                                  "end": 9868,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 9869,
                                  "end": 9880,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9884,
                        "end": 9896,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "FunctionDeclaration",
              "start": 9907,
              "end": 10011,
              "id": {
                "type": "Identifier",
                "start": 9916,
                "end": 9963,
                "decorators": [],
                "name": "privateFunctionWithPrivateMopduleTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 9963,
                "end": 10000,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 9964,
                    "end": 9999,
                    "name": {
                      "type": "Identifier",
                      "start": 9964,
                      "end": 9965,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 9974,
                      "end": 9999,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 9974,
                        "end": 9999,
                        "left": {
                          "type": "Identifier",
                          "start": 9974,
                          "end": 9987,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 9988,
                          "end": 9999,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 10003,
                "end": 10011,
                "body": []
              },
              "expression": false
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10016,
      "end": 13866,
      "id": {
        "type": "Identifier",
        "start": 10023,
        "end": 10036,
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10037,
        "end": 13866,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 10043,
            "end": 10069,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 10049,
              "end": 10061,
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 10062,
              "end": 10069,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10075,
            "end": 10107,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 10082,
              "end": 10107,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 10088,
                "end": 10099,
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 10100,
                "end": 10107,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10113,
            "end": 10342,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 10120,
              "end": 10342,
              "id": {
                "type": "Identifier",
                "start": 10130,
                "end": 10170,
                "decorators": [],
                "name": "publicInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 10171,
                "end": 10342,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 10181,
                    "end": 10226,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 10185,
                      "end": 10209,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 10186,
                          "end": 10208,
                          "name": {
                            "type": "Identifier",
                            "start": 10186,
                            "end": 10187,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 10196,
                            "end": 10208,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10196,
                              "end": 10208,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10211,
                      "end": 10225,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10213,
                        "end": 10225,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10213,
                          "end": 10225,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 10236,
                    "end": 10277,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 10236,
                      "end": 10260,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 10237,
                          "end": 10259,
                          "name": {
                            "type": "Identifier",
                            "start": 10237,
                            "end": 10238,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 10247,
                            "end": 10259,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10247,
                              "end": 10259,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10262,
                      "end": 10276,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10264,
                        "end": 10276,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10264,
                          "end": 10276,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 10286,
                    "end": 10335,
                    "key": {
                      "type": "Identifier",
                      "start": 10286,
                      "end": 10294,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 10294,
                      "end": 10318,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 10295,
                          "end": 10317,
                          "name": {
                            "type": "Identifier",
                            "start": 10295,
                            "end": 10296,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 10305,
                            "end": 10317,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10305,
                              "end": 10317,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10320,
                      "end": 10334,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10322,
                        "end": 10334,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10322,
                          "end": 10334,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10348,
            "end": 10568,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 10355,
              "end": 10568,
              "id": {
                "type": "Identifier",
                "start": 10365,
                "end": 10404,
                "decorators": [],
                "name": "publicInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 10405,
                "end": 10568,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 10415,
                    "end": 10458,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 10419,
                      "end": 10442,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 10420,
                          "end": 10441,
                          "name": {
                            "type": "Identifier",
                            "start": 10420,
                            "end": 10421,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 10430,
                            "end": 10441,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10430,
                              "end": 10441,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10444,
                      "end": 10457,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10446,
                        "end": 10457,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10446,
                          "end": 10457,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 10467,
                    "end": 10506,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 10467,
                      "end": 10490,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 10468,
                          "end": 10489,
                          "name": {
                            "type": "Identifier",
                            "start": 10468,
                            "end": 10469,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 10478,
                            "end": 10489,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10478,
                              "end": 10489,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10492,
                      "end": 10505,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10494,
                        "end": 10505,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10494,
                          "end": 10505,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 10515,
                    "end": 10562,
                    "key": {
                      "type": "Identifier",
                      "start": 10515,
                      "end": 10523,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 10523,
                      "end": 10546,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 10524,
                          "end": 10545,
                          "name": {
                            "type": "Identifier",
                            "start": 10524,
                            "end": 10525,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 10534,
                            "end": 10545,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10534,
                              "end": 10545,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10548,
                      "end": 10561,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10550,
                        "end": 10561,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10550,
                          "end": 10561,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 10574,
            "end": 10795,
            "id": {
              "type": "Identifier",
              "start": 10584,
              "end": 10625,
              "decorators": [],
              "name": "privateInterfaceWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 10626,
              "end": 10795,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 10636,
                  "end": 10681,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 10640,
                    "end": 10664,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 10641,
                        "end": 10663,
                        "name": {
                          "type": "Identifier",
                          "start": 10641,
                          "end": 10642,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 10651,
                          "end": 10663,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10651,
                            "end": 10663,
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 10666,
                    "end": 10680,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10668,
                      "end": 10680,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10668,
                        "end": 10680,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 10690,
                  "end": 10731,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 10690,
                    "end": 10714,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 10691,
                        "end": 10713,
                        "name": {
                          "type": "Identifier",
                          "start": 10691,
                          "end": 10692,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 10701,
                          "end": 10713,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10701,
                            "end": 10713,
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 10716,
                    "end": 10730,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10718,
                      "end": 10730,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10718,
                        "end": 10730,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 10740,
                  "end": 10789,
                  "key": {
                    "type": "Identifier",
                    "start": 10740,
                    "end": 10748,
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 10748,
                    "end": 10772,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 10749,
                        "end": 10771,
                        "name": {
                          "type": "Identifier",
                          "start": 10749,
                          "end": 10750,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 10759,
                          "end": 10771,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10759,
                            "end": 10771,
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 10774,
                    "end": 10788,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10776,
                      "end": 10788,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10776,
                        "end": 10788,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 10801,
            "end": 11015,
            "id": {
              "type": "Identifier",
              "start": 10811,
              "end": 10851,
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 10852,
              "end": 11015,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 10862,
                  "end": 10905,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 10866,
                    "end": 10889,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 10867,
                        "end": 10888,
                        "name": {
                          "type": "Identifier",
                          "start": 10867,
                          "end": 10868,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 10877,
                          "end": 10888,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10877,
                            "end": 10888,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 10891,
                    "end": 10904,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10893,
                      "end": 10904,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10893,
                        "end": 10904,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 10914,
                  "end": 10953,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 10914,
                    "end": 10937,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 10915,
                        "end": 10936,
                        "name": {
                          "type": "Identifier",
                          "start": 10915,
                          "end": 10916,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 10925,
                          "end": 10936,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10925,
                            "end": 10936,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 10939,
                    "end": 10952,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10941,
                      "end": 10952,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10941,
                        "end": 10952,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 10962,
                  "end": 11009,
                  "key": {
                    "type": "Identifier",
                    "start": 10962,
                    "end": 10970,
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 10970,
                    "end": 10993,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 10971,
                        "end": 10992,
                        "name": {
                          "type": "Identifier",
                          "start": 10971,
                          "end": 10972,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 10981,
                          "end": 10992,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10981,
                            "end": 10992,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 10995,
                    "end": 11008,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10997,
                      "end": 11008,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10997,
                        "end": 11008,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11021,
            "end": 11373,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11028,
              "end": 11373,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 11034,
                "end": 11074,
                "decorators": [],
                "name": "publicClassWithWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 11075,
                "end": 11373,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11085,
                    "end": 11151,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11092,
                      "end": 11112,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11112,
                      "end": 11151,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 11112,
                        "end": 11136,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 11113,
                            "end": 11135,
                            "name": {
                              "type": "Identifier",
                              "start": 11113,
                              "end": 11114,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 11123,
                              "end": 11135,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11123,
                                "end": 11135,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11139,
                        "end": 11151,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11160,
                    "end": 11234,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11175,
                      "end": 11196,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11196,
                      "end": 11234,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 11196,
                        "end": 11220,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 11197,
                            "end": 11219,
                            "name": {
                              "type": "Identifier",
                              "start": 11197,
                              "end": 11198,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 11207,
                              "end": 11219,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11207,
                                "end": 11219,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11223,
                        "end": 11234,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11243,
                    "end": 11297,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11243,
                      "end": 11257,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11257,
                      "end": 11297,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 11257,
                        "end": 11281,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 11258,
                            "end": 11280,
                            "name": {
                              "type": "Identifier",
                              "start": 11258,
                              "end": 11259,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 11268,
                              "end": 11280,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11268,
                                "end": 11280,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11284,
                        "end": 11297,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11306,
                    "end": 11367,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11314,
                      "end": 11329,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11329,
                      "end": 11367,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 11329,
                        "end": 11353,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 11330,
                            "end": 11352,
                            "name": {
                              "type": "Identifier",
                              "start": 11330,
                              "end": 11331,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 11340,
                              "end": 11352,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11340,
                                "end": 11352,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11356,
                        "end": 11367,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11379,
            "end": 11723,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11386,
              "end": 11723,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 11392,
                "end": 11431,
                "decorators": [],
                "name": "publicClassWithWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 11432,
                "end": 11723,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11442,
                    "end": 11506,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11449,
                      "end": 11469,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11469,
                      "end": 11506,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 11469,
                        "end": 11492,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 11470,
                            "end": 11491,
                            "name": {
                              "type": "Identifier",
                              "start": 11470,
                              "end": 11471,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 11480,
                              "end": 11491,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11480,
                                "end": 11491,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11495,
                        "end": 11506,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11515,
                    "end": 11588,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11530,
                      "end": 11551,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11551,
                      "end": 11588,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 11551,
                        "end": 11574,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 11552,
                            "end": 11573,
                            "name": {
                              "type": "Identifier",
                              "start": 11552,
                              "end": 11553,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 11562,
                              "end": 11573,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11562,
                                "end": 11573,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11577,
                        "end": 11588,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11597,
                    "end": 11648,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11597,
                      "end": 11611,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11611,
                      "end": 11648,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 11611,
                        "end": 11634,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 11612,
                            "end": 11633,
                            "name": {
                              "type": "Identifier",
                              "start": 11612,
                              "end": 11613,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 11622,
                              "end": 11633,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11622,
                                "end": 11633,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11637,
                        "end": 11648,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11657,
                    "end": 11717,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11665,
                      "end": 11680,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11680,
                      "end": 11717,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 11680,
                        "end": 11703,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 11681,
                            "end": 11702,
                            "name": {
                              "type": "Identifier",
                              "start": 11681,
                              "end": 11682,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 11691,
                              "end": 11702,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11691,
                                "end": 11702,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11706,
                        "end": 11717,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 11729,
            "end": 12072,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 11735,
              "end": 11776,
              "decorators": [],
              "name": "privateClassWithWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 11777,
              "end": 12072,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 11787,
                  "end": 11852,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 11794,
                    "end": 11814,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11814,
                    "end": 11852,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 11814,
                      "end": 11838,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 11815,
                          "end": 11837,
                          "name": {
                            "type": "Identifier",
                            "start": 11815,
                            "end": 11816,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 11825,
                            "end": 11837,
                            "typeName": {
                              "type": "Identifier",
                              "start": 11825,
                              "end": 11837,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 11841,
                      "end": 11852,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 11861,
                  "end": 11935,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 11876,
                    "end": 11897,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11897,
                    "end": 11935,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 11897,
                      "end": 11921,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 11898,
                          "end": 11920,
                          "name": {
                            "type": "Identifier",
                            "start": 11898,
                            "end": 11899,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 11908,
                            "end": 11920,
                            "typeName": {
                              "type": "Identifier",
                              "start": 11908,
                              "end": 11920,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 11924,
                      "end": 11935,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 11944,
                  "end": 11996,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 11944,
                    "end": 11958,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11958,
                    "end": 11996,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 11958,
                      "end": 11982,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 11959,
                          "end": 11981,
                          "name": {
                            "type": "Identifier",
                            "start": 11959,
                            "end": 11960,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 11969,
                            "end": 11981,
                            "typeName": {
                              "type": "Identifier",
                              "start": 11969,
                              "end": 11981,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 11985,
                      "end": 11996,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 12005,
                  "end": 12066,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12013,
                    "end": 12028,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12028,
                    "end": 12066,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 12028,
                      "end": 12052,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12029,
                          "end": 12051,
                          "name": {
                            "type": "Identifier",
                            "start": 12029,
                            "end": 12030,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 12039,
                            "end": 12051,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12039,
                              "end": 12051,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12055,
                      "end": 12066,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 12078,
            "end": 12416,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 12084,
              "end": 12124,
              "decorators": [],
              "name": "privateClassWithWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 12125,
              "end": 12416,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 12135,
                  "end": 12199,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12142,
                    "end": 12162,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12162,
                    "end": 12199,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 12162,
                      "end": 12185,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12163,
                          "end": 12184,
                          "name": {
                            "type": "Identifier",
                            "start": 12163,
                            "end": 12164,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 12173,
                            "end": 12184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12173,
                              "end": 12184,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12188,
                      "end": 12199,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 12208,
                  "end": 12281,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12223,
                    "end": 12244,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12244,
                    "end": 12281,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 12244,
                      "end": 12267,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12245,
                          "end": 12266,
                          "name": {
                            "type": "Identifier",
                            "start": 12245,
                            "end": 12246,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 12255,
                            "end": 12266,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12255,
                              "end": 12266,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12270,
                      "end": 12281,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 12290,
                  "end": 12341,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12290,
                    "end": 12304,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12304,
                    "end": 12341,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 12304,
                      "end": 12327,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12305,
                          "end": 12326,
                          "name": {
                            "type": "Identifier",
                            "start": 12305,
                            "end": 12306,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 12315,
                            "end": 12326,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12315,
                              "end": 12326,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12330,
                      "end": 12341,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 12350,
                  "end": 12410,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12358,
                    "end": 12373,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12373,
                    "end": 12410,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 12373,
                      "end": 12396,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12374,
                          "end": 12395,
                          "name": {
                            "type": "Identifier",
                            "start": 12374,
                            "end": 12375,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 12384,
                            "end": 12395,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12384,
                              "end": 12395,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12399,
                      "end": 12410,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12422,
            "end": 12512,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 12429,
              "end": 12512,
              "id": {
                "type": "Identifier",
                "start": 12438,
                "end": 12477,
                "decorators": [],
                "name": "publicFunctionWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 12477,
                "end": 12501,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 12478,
                    "end": 12500,
                    "name": {
                      "type": "Identifier",
                      "start": 12478,
                      "end": 12479,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 12488,
                      "end": 12500,
                      "typeName": {
                        "type": "Identifier",
                        "start": 12488,
                        "end": 12500,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 12504,
                "end": 12512,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12518,
            "end": 12605,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 12525,
              "end": 12605,
              "id": {
                "type": "Identifier",
                "start": 12534,
                "end": 12572,
                "decorators": [],
                "name": "publicFunctionWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 12572,
                "end": 12595,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 12573,
                    "end": 12594,
                    "name": {
                      "type": "Identifier",
                      "start": 12573,
                      "end": 12574,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 12583,
                      "end": 12594,
                      "typeName": {
                        "type": "Identifier",
                        "start": 12583,
                        "end": 12594,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 12598,
                "end": 12605,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 12611,
            "end": 12694,
            "id": {
              "type": "Identifier",
              "start": 12620,
              "end": 12660,
              "decorators": [],
              "name": "privateFunctionWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 12660,
              "end": 12684,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 12661,
                  "end": 12683,
                  "name": {
                    "type": "Identifier",
                    "start": 12661,
                    "end": 12662,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 12671,
                    "end": 12683,
                    "typeName": {
                      "type": "Identifier",
                      "start": 12671,
                      "end": 12683,
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 12687,
              "end": 12694,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 12700,
            "end": 12781,
            "id": {
              "type": "Identifier",
              "start": 12709,
              "end": 12748,
              "decorators": [],
              "name": "privateFunctionWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 12748,
              "end": 12771,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 12749,
                  "end": 12770,
                  "name": {
                    "type": "Identifier",
                    "start": 12749,
                    "end": 12750,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 12759,
                    "end": 12770,
                    "typeName": {
                      "type": "Identifier",
                      "start": 12759,
                      "end": 12770,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 12774,
              "end": 12781,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12787,
            "end": 12961,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 12794,
              "end": 12961,
              "id": {
                "type": "Identifier",
                "start": 12804,
                "end": 12857,
                "decorators": [],
                "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 12858,
                "end": 12961,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 12868,
                    "end": 12891,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 12872,
                      "end": 12875,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12873,
                          "end": 12874,
                          "name": {
                            "type": "Identifier",
                            "start": 12873,
                            "end": 12874,
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 12877,
                      "end": 12890,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 12879,
                        "end": 12890,
                        "typeName": {
                          "type": "Identifier",
                          "start": 12879,
                          "end": 12890,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 12900,
                    "end": 12919,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 12900,
                      "end": 12903,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12901,
                          "end": 12902,
                          "name": {
                            "type": "Identifier",
                            "start": 12901,
                            "end": 12902,
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 12905,
                      "end": 12918,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 12907,
                        "end": 12918,
                        "typeName": {
                          "type": "Identifier",
                          "start": 12907,
                          "end": 12918,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 12928,
                    "end": 12955,
                    "key": {
                      "type": "Identifier",
                      "start": 12928,
                      "end": 12936,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 12936,
                      "end": 12939,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12937,
                          "end": 12938,
                          "name": {
                            "type": "Identifier",
                            "start": 12937,
                            "end": 12938,
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 12941,
                      "end": 12954,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 12943,
                        "end": 12954,
                        "typeName": {
                          "type": "Identifier",
                          "start": 12943,
                          "end": 12954,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 12967,
            "end": 13135,
            "id": {
              "type": "Identifier",
              "start": 12977,
              "end": 13031,
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 13032,
              "end": 13135,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 13042,
                  "end": 13065,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 13046,
                    "end": 13049,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 13047,
                        "end": 13048,
                        "name": {
                          "type": "Identifier",
                          "start": 13047,
                          "end": 13048,
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
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 13051,
                    "end": 13064,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 13053,
                      "end": 13064,
                      "typeName": {
                        "type": "Identifier",
                        "start": 13053,
                        "end": 13064,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 13074,
                  "end": 13093,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 13074,
                    "end": 13077,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 13075,
                        "end": 13076,
                        "name": {
                          "type": "Identifier",
                          "start": 13075,
                          "end": 13076,
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
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 13079,
                    "end": 13092,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 13081,
                      "end": 13092,
                      "typeName": {
                        "type": "Identifier",
                        "start": 13081,
                        "end": 13092,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 13102,
                  "end": 13129,
                  "key": {
                    "type": "Identifier",
                    "start": 13102,
                    "end": 13110,
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 13110,
                    "end": 13113,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 13111,
                        "end": 13112,
                        "name": {
                          "type": "Identifier",
                          "start": 13111,
                          "end": 13112,
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
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 13115,
                    "end": 13128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 13117,
                      "end": 13128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 13117,
                        "end": 13128,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 13141,
            "end": 13419,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 13148,
              "end": 13419,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 13154,
                "end": 13207,
                "decorators": [],
                "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 13208,
                "end": 13419,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 13218,
                    "end": 13262,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13225,
                      "end": 13245,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13245,
                      "end": 13262,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 13245,
                        "end": 13248,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 13246,
                            "end": 13247,
                            "name": {
                              "type": "Identifier",
                              "start": 13246,
                              "end": 13247,
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
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13251,
                        "end": 13262,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13271,
                    "end": 13324,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13286,
                      "end": 13307,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13307,
                      "end": 13324,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 13307,
                        "end": 13310,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 13308,
                            "end": 13309,
                            "name": {
                              "type": "Identifier",
                              "start": 13308,
                              "end": 13309,
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
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13313,
                        "end": 13324,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13333,
                    "end": 13364,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13333,
                      "end": 13347,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13347,
                      "end": 13364,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 13347,
                        "end": 13350,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 13348,
                            "end": 13349,
                            "name": {
                              "type": "Identifier",
                              "start": 13348,
                              "end": 13349,
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
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13353,
                        "end": 13364,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13373,
                    "end": 13413,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13381,
                      "end": 13396,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13396,
                      "end": 13413,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 13396,
                        "end": 13399,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 13397,
                            "end": 13398,
                            "name": {
                              "type": "Identifier",
                              "start": 13397,
                              "end": 13398,
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
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13402,
                        "end": 13413,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 13424,
            "end": 13696,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 13430,
              "end": 13484,
              "decorators": [],
              "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 13485,
              "end": 13696,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 13495,
                  "end": 13539,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13502,
                    "end": 13522,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13522,
                    "end": 13539,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 13522,
                      "end": 13525,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 13523,
                          "end": 13524,
                          "name": {
                            "type": "Identifier",
                            "start": 13523,
                            "end": 13524,
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
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13528,
                      "end": 13539,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 13548,
                  "end": 13601,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13563,
                    "end": 13584,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13584,
                    "end": 13601,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 13584,
                      "end": 13587,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 13585,
                          "end": 13586,
                          "name": {
                            "type": "Identifier",
                            "start": 13585,
                            "end": 13586,
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
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13590,
                      "end": 13601,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 13610,
                  "end": 13641,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13610,
                    "end": 13624,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13624,
                    "end": 13641,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 13624,
                      "end": 13627,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 13625,
                          "end": 13626,
                          "name": {
                            "type": "Identifier",
                            "start": 13625,
                            "end": 13626,
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
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13630,
                      "end": 13641,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 13650,
                  "end": 13690,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13658,
                    "end": 13673,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13673,
                    "end": 13690,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 13673,
                      "end": 13676,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 13674,
                          "end": 13675,
                          "name": {
                            "type": "Identifier",
                            "start": 13674,
                            "end": 13675,
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
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13679,
                      "end": 13690,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 13702,
            "end": 13783,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 13709,
              "end": 13783,
              "id": {
                "type": "Identifier",
                "start": 13718,
                "end": 13770,
                "decorators": [],
                "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 13770,
                "end": 13773,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 13771,
                    "end": 13772,
                    "name": {
                      "type": "Identifier",
                      "start": 13771,
                      "end": 13772,
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 13776,
                "end": 13783,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 13789,
            "end": 13864,
            "id": {
              "type": "Identifier",
              "start": 13798,
              "end": 13851,
              "decorators": [],
              "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 13851,
              "end": 13854,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 13852,
                  "end": 13853,
                  "name": {
                    "type": "Identifier",
                    "start": 13852,
                    "end": 13853,
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
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 13857,
              "end": 13864,
              "body": []
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
