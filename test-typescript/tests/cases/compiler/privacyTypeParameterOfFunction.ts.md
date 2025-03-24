__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4001,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "privateClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "name": "publicClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 562,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 61,
        "end": 562,
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 111,
          "name": "publicInterfaceWithPrivateTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 112,
          "end": 562,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 221,
              "end": 266,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 225,
                "end": 249,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 226,
                    "end": 248,
                    "name": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 227,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 236,
                      "end": 248,
                      "typeName": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 248,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 251,
                "end": 265,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 253,
                  "end": 265,
                  "typeName": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 265,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 376,
              "end": 417,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 376,
                "end": 400,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 377,
                    "end": 399,
                    "name": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 387,
                      "end": 399,
                      "typeName": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 399,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 402,
                "end": 416,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 404,
                  "end": 416,
                  "typeName": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 416,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 511,
              "end": 560,
              "key": {
                "type": "Identifier",
                "start": 511,
                "end": 519,
                "name": "myMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 519,
                "end": 543,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 520,
                    "end": 542,
                    "name": {
                      "type": "Identifier",
                      "start": 520,
                      "end": 521,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 530,
                      "end": 542,
                      "typeName": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 542,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 545,
                "end": 559,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 547,
                  "end": 559,
                  "typeName": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 559,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 564,
      "end": 768,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 571,
        "end": 768,
        "id": {
          "type": "Identifier",
          "start": 581,
          "end": 620,
          "name": "publicInterfaceWithPublicTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 621,
          "end": 768,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 627,
              "end": 670,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 631,
                "end": 654,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 632,
                    "end": 653,
                    "name": {
                      "type": "Identifier",
                      "start": 632,
                      "end": 633,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 642,
                      "end": 653,
                      "typeName": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 653,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 656,
                "end": 669,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 658,
                  "end": 669,
                  "typeName": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 669,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 675,
              "end": 714,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 675,
                "end": 698,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 676,
                    "end": 697,
                    "name": {
                      "type": "Identifier",
                      "start": 676,
                      "end": 677,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 686,
                      "end": 697,
                      "typeName": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 697,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 700,
                "end": 713,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 702,
                  "end": 713,
                  "typeName": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 713,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 719,
              "end": 766,
              "key": {
                "type": "Identifier",
                "start": 719,
                "end": 727,
                "name": "myMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 727,
                "end": 750,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 728,
                    "end": 749,
                    "name": {
                      "type": "Identifier",
                      "start": 728,
                      "end": 729,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 738,
                      "end": 749,
                      "typeName": {
                        "type": "Identifier",
                        "start": 738,
                        "end": 749,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "start": 752,
                "end": 765,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 754,
                  "end": 765,
                  "typeName": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 765,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 770,
      "end": 975,
      "id": {
        "type": "Identifier",
        "start": 780,
        "end": 821,
        "name": "privateInterfaceWithPrivateTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 822,
        "end": 975,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 828,
            "end": 873,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 832,
              "end": 856,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 833,
                  "end": 855,
                  "name": {
                    "type": "Identifier",
                    "start": 833,
                    "end": 834,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 843,
                    "end": 855,
                    "typeName": {
                      "type": "Identifier",
                      "start": 843,
                      "end": 855,
                      "name": "privateClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "start": 858,
              "end": 872,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 860,
                "end": 872,
                "typeName": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 872,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 878,
            "end": 919,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 878,
              "end": 902,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 879,
                  "end": 901,
                  "name": {
                    "type": "Identifier",
                    "start": 879,
                    "end": 880,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 889,
                    "end": 901,
                    "typeName": {
                      "type": "Identifier",
                      "start": 889,
                      "end": 901,
                      "name": "privateClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "start": 904,
              "end": 918,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 906,
                "end": 918,
                "typeName": {
                  "type": "Identifier",
                  "start": 906,
                  "end": 918,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 924,
            "end": 973,
            "key": {
              "type": "Identifier",
              "start": 924,
              "end": 932,
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 932,
              "end": 956,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 933,
                  "end": 955,
                  "name": {
                    "type": "Identifier",
                    "start": 933,
                    "end": 934,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 943,
                    "end": 955,
                    "typeName": {
                      "type": "Identifier",
                      "start": 943,
                      "end": 955,
                      "name": "privateClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "start": 958,
              "end": 972,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 960,
                "end": 972,
                "typeName": {
                  "type": "Identifier",
                  "start": 960,
                  "end": 972,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 977,
      "end": 1175,
      "id": {
        "type": "Identifier",
        "start": 987,
        "end": 1027,
        "name": "privateInterfaceWithPublicTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1028,
        "end": 1175,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1034,
            "end": 1077,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1038,
              "end": 1061,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1039,
                  "end": 1060,
                  "name": {
                    "type": "Identifier",
                    "start": 1039,
                    "end": 1040,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1049,
                    "end": 1060,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1049,
                      "end": 1060,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "start": 1063,
              "end": 1076,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1065,
                "end": 1076,
                "typeName": {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1076,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1082,
            "end": 1121,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1082,
              "end": 1105,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1083,
                  "end": 1104,
                  "name": {
                    "type": "Identifier",
                    "start": 1083,
                    "end": 1084,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1093,
                    "end": 1104,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1093,
                      "end": 1104,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "start": 1107,
              "end": 1120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1109,
                "end": 1120,
                "typeName": {
                  "type": "Identifier",
                  "start": 1109,
                  "end": 1120,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1126,
            "end": 1173,
            "key": {
              "type": "Identifier",
              "start": 1126,
              "end": 1134,
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1134,
              "end": 1157,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1135,
                  "end": 1156,
                  "name": {
                    "type": "Identifier",
                    "start": 1135,
                    "end": 1136,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1145,
                    "end": 1156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1145,
                      "end": 1156,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "start": 1159,
              "end": 1172,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1161,
                "end": 1172,
                "typeName": {
                  "type": "Identifier",
                  "start": 1161,
                  "end": 1172,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 1177,
      "end": 1703,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1184,
        "end": 1703,
        "id": {
          "type": "Identifier",
          "start": 1190,
          "end": 1230,
          "name": "publicClassWithWithPrivateTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 1231,
          "end": 1703,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1335,
              "end": 1396,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1342,
                "end": 1362,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1362,
                "end": 1396,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1389,
                  "end": 1396,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1362,
                  "end": 1386,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1363,
                      "end": 1385,
                      "name": {
                        "type": "Identifier",
                        "start": 1363,
                        "end": 1364,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1373,
                        "end": 1385,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1373,
                          "end": 1385,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1401,
              "end": 1483,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1416,
                "end": 1437,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1437,
                "end": 1483,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1464,
                  "end": 1483,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1437,
                  "end": 1461,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1438,
                      "end": 1460,
                      "name": {
                        "type": "Identifier",
                        "start": 1438,
                        "end": 1439,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1448,
                        "end": 1460,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1448,
                          "end": 1460,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1579,
              "end": 1627,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1579,
                "end": 1593,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1593,
                "end": 1627,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1620,
                  "end": 1627,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1593,
                  "end": 1617,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1594,
                      "end": 1616,
                      "name": {
                        "type": "Identifier",
                        "start": 1594,
                        "end": 1595,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1604,
                        "end": 1616,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1604,
                          "end": 1616,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1632,
              "end": 1701,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1640,
                "end": 1655,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1655,
                "end": 1701,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1682,
                  "end": 1701,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1655,
                  "end": 1679,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1656,
                      "end": 1678,
                      "name": {
                        "type": "Identifier",
                        "start": 1656,
                        "end": 1657,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1666,
                        "end": 1678,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1666,
                          "end": 1678,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1705,
      "end": 2014,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1712,
        "end": 2014,
        "id": {
          "type": "Identifier",
          "start": 1718,
          "end": 1757,
          "name": "publicClassWithWithPublicTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 1758,
          "end": 2014,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1764,
              "end": 1824,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1771,
                "end": 1791,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1791,
                "end": 1824,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1817,
                  "end": 1824,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1791,
                  "end": 1814,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1792,
                      "end": 1813,
                      "name": {
                        "type": "Identifier",
                        "start": 1792,
                        "end": 1793,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1802,
                        "end": 1813,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1802,
                          "end": 1813,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1829,
              "end": 1899,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1844,
                "end": 1865,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1865,
                "end": 1899,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1891,
                  "end": 1899,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1865,
                  "end": 1888,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1866,
                      "end": 1887,
                      "name": {
                        "type": "Identifier",
                        "start": 1866,
                        "end": 1867,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1876,
                        "end": 1887,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1876,
                          "end": 1887,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1904,
              "end": 1951,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1904,
                "end": 1918,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1918,
                "end": 1951,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 1944,
                  "end": 1951,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1918,
                  "end": 1941,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1919,
                      "end": 1940,
                      "name": {
                        "type": "Identifier",
                        "start": 1919,
                        "end": 1920,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1929,
                        "end": 1940,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1929,
                          "end": 1940,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1956,
              "end": 2012,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1964,
                "end": 1979,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1979,
                "end": 2012,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 2005,
                  "end": 2012,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1979,
                  "end": 2002,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1980,
                      "end": 2001,
                      "name": {
                        "type": "Identifier",
                        "start": 1980,
                        "end": 1981,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1990,
                        "end": 2001,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1990,
                          "end": 2001,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 2016,
      "end": 2347,
      "id": {
        "type": "Identifier",
        "start": 2022,
        "end": 2063,
        "name": "privateClassWithWithPrivateTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2064,
        "end": 2347,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2070,
            "end": 2131,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2077,
              "end": 2097,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2097,
              "end": 2131,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2124,
                "end": 2131,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2097,
                "end": 2121,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2098,
                    "end": 2120,
                    "name": {
                      "type": "Identifier",
                      "start": 2098,
                      "end": 2099,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2108,
                      "end": 2120,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2108,
                        "end": 2120,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2136,
            "end": 2218,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2151,
              "end": 2172,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2172,
              "end": 2218,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2199,
                "end": 2218,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2172,
                "end": 2196,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2173,
                    "end": 2195,
                    "name": {
                      "type": "Identifier",
                      "start": 2173,
                      "end": 2174,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2183,
                      "end": 2195,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2183,
                        "end": 2195,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2223,
            "end": 2271,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2223,
              "end": 2237,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2237,
              "end": 2271,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2264,
                "end": 2271,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2237,
                "end": 2261,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2238,
                    "end": 2260,
                    "name": {
                      "type": "Identifier",
                      "start": 2238,
                      "end": 2239,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2248,
                      "end": 2260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2248,
                        "end": 2260,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2276,
            "end": 2345,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2284,
              "end": 2299,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2299,
              "end": 2345,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2326,
                "end": 2345,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2299,
                "end": 2323,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2300,
                    "end": 2322,
                    "name": {
                      "type": "Identifier",
                      "start": 2300,
                      "end": 2301,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2310,
                      "end": 2322,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2310,
                        "end": 2322,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2349,
      "end": 2651,
      "id": {
        "type": "Identifier",
        "start": 2355,
        "end": 2395,
        "name": "privateClassWithWithPublicTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2396,
        "end": 2651,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2402,
            "end": 2462,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2409,
              "end": 2429,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2429,
              "end": 2462,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2455,
                "end": 2462,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2429,
                "end": 2452,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2430,
                    "end": 2451,
                    "name": {
                      "type": "Identifier",
                      "start": 2430,
                      "end": 2431,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2440,
                      "end": 2451,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2440,
                        "end": 2451,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2467,
            "end": 2536,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2482,
              "end": 2503,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2503,
              "end": 2536,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2529,
                "end": 2536,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2503,
                "end": 2526,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2504,
                    "end": 2525,
                    "name": {
                      "type": "Identifier",
                      "start": 2504,
                      "end": 2505,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2514,
                      "end": 2525,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2514,
                        "end": 2525,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2541,
            "end": 2588,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2541,
              "end": 2555,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2555,
              "end": 2588,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2581,
                "end": 2588,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2555,
                "end": 2578,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2556,
                    "end": 2577,
                    "name": {
                      "type": "Identifier",
                      "start": 2556,
                      "end": 2557,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2566,
                      "end": 2577,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2566,
                        "end": 2577,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2593,
            "end": 2649,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2601,
              "end": 2616,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2616,
              "end": 2649,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2642,
                "end": 2649,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2616,
                "end": 2639,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2617,
                    "end": 2638,
                    "name": {
                      "type": "Identifier",
                      "start": 2617,
                      "end": 2618,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2627,
                      "end": 2638,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2627,
                        "end": 2638,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2724,
      "end": 2809,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2731,
        "end": 2809,
        "id": {
          "type": "Identifier",
          "start": 2740,
          "end": 2779,
          "name": "publicFunctionWithPrivateTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 2806,
          "end": 2809,
          "body": []
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2779,
          "end": 2803,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2780,
              "end": 2802,
              "name": {
                "type": "Identifier",
                "start": 2780,
                "end": 2781,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2790,
                "end": 2802,
                "typeName": {
                  "type": "Identifier",
                  "start": 2790,
                  "end": 2802,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2811,
      "end": 2894,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2818,
        "end": 2894,
        "id": {
          "type": "Identifier",
          "start": 2827,
          "end": 2865,
          "name": "publicFunctionWithPublicTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 2891,
          "end": 2894,
          "body": []
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2865,
          "end": 2888,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2866,
              "end": 2887,
              "name": {
                "type": "Identifier",
                "start": 2866,
                "end": 2867,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2876,
                "end": 2887,
                "typeName": {
                  "type": "Identifier",
                  "start": 2876,
                  "end": 2887,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2896,
      "end": 2975,
      "id": {
        "type": "Identifier",
        "start": 2905,
        "end": 2945,
        "name": "privateFunctionWithPrivateTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2972,
        "end": 2975,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2945,
        "end": 2969,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2946,
            "end": 2968,
            "name": {
              "type": "Identifier",
              "start": 2946,
              "end": 2947,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2956,
              "end": 2968,
              "typeName": {
                "type": "Identifier",
                "start": 2956,
                "end": 2968,
                "name": "privateClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2977,
      "end": 3054,
      "id": {
        "type": "Identifier",
        "start": 2986,
        "end": 3025,
        "name": "privateFunctionWithPublicTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3051,
        "end": 3054,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3025,
        "end": 3048,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3026,
            "end": 3047,
            "name": {
              "type": "Identifier",
              "start": 3026,
              "end": 3027,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3036,
              "end": 3047,
              "typeName": {
                "type": "Identifier",
                "start": 3036,
                "end": 3047,
                "name": "publicClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3056,
      "end": 3214,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 3063,
        "end": 3214,
        "id": {
          "type": "Identifier",
          "start": 3073,
          "end": 3126,
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 3127,
          "end": 3214,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 3133,
              "end": 3156,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3137,
                "end": 3140,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3138,
                    "end": 3139,
                    "name": {
                      "type": "Identifier",
                      "start": 3138,
                      "end": 3139,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3142,
                "end": 3155,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3144,
                  "end": 3155,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3144,
                    "end": 3155,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 3161,
              "end": 3180,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3161,
                "end": 3164,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3162,
                    "end": 3163,
                    "name": {
                      "type": "Identifier",
                      "start": 3162,
                      "end": 3163,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3166,
                "end": 3179,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3168,
                  "end": 3179,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3168,
                    "end": 3179,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 3185,
              "end": 3212,
              "key": {
                "type": "Identifier",
                "start": 3185,
                "end": 3193,
                "name": "myMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3193,
                "end": 3196,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3194,
                    "end": 3195,
                    "name": {
                      "type": "Identifier",
                      "start": 3194,
                      "end": 3195,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3198,
                "end": 3211,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3200,
                  "end": 3211,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3200,
                    "end": 3211,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3216,
      "end": 3368,
      "id": {
        "type": "Identifier",
        "start": 3226,
        "end": 3280,
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3281,
        "end": 3368,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 3287,
            "end": 3310,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3291,
              "end": 3294,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3292,
                  "end": 3293,
                  "name": {
                    "type": "Identifier",
                    "start": 3292,
                    "end": 3293,
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3296,
              "end": 3309,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3298,
                "end": 3309,
                "typeName": {
                  "type": "Identifier",
                  "start": 3298,
                  "end": 3309,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 3315,
            "end": 3334,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3315,
              "end": 3318,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3316,
                  "end": 3317,
                  "name": {
                    "type": "Identifier",
                    "start": 3316,
                    "end": 3317,
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3320,
              "end": 3333,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3322,
                "end": 3333,
                "typeName": {
                  "type": "Identifier",
                  "start": 3322,
                  "end": 3333,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 3339,
            "end": 3366,
            "key": {
              "type": "Identifier",
              "start": 3339,
              "end": 3347,
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3347,
              "end": 3350,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3348,
                  "end": 3349,
                  "name": {
                    "type": "Identifier",
                    "start": 3348,
                    "end": 3349,
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3352,
              "end": 3365,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3354,
                "end": 3365,
                "typeName": {
                  "type": "Identifier",
                  "start": 3354,
                  "end": 3365,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 3370,
      "end": 3612,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 3377,
        "end": 3612,
        "id": {
          "type": "Identifier",
          "start": 3383,
          "end": 3436,
          "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 3437,
          "end": 3612,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 3443,
              "end": 3483,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3450,
                "end": 3470,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 3470,
                "end": 3483,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3476,
                  "end": 3483,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3470,
                  "end": 3473,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3471,
                      "end": 3472,
                      "name": {
                        "type": "Identifier",
                        "start": 3471,
                        "end": 3472,
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 3488,
              "end": 3537,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3503,
                "end": 3524,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 3524,
                "end": 3537,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3530,
                  "end": 3537,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3524,
                  "end": 3527,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3525,
                      "end": 3526,
                      "name": {
                        "type": "Identifier",
                        "start": 3525,
                        "end": 3526,
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 3542,
              "end": 3569,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3542,
                "end": 3556,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 3556,
                "end": 3569,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3562,
                  "end": 3569,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3556,
                  "end": 3559,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3557,
                      "end": 3558,
                      "name": {
                        "type": "Identifier",
                        "start": 3557,
                        "end": 3558,
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 3574,
              "end": 3610,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3582,
                "end": 3597,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 3597,
                "end": 3610,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 3603,
                  "end": 3610,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3597,
                  "end": 3600,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3598,
                      "end": 3599,
                      "name": {
                        "type": "Identifier",
                        "start": 3598,
                        "end": 3599,
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
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 3613,
      "end": 3849,
      "id": {
        "type": "Identifier",
        "start": 3619,
        "end": 3673,
        "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3674,
        "end": 3849,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3680,
            "end": 3720,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3687,
              "end": 3707,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3707,
              "end": 3720,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3713,
                "end": 3720,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3707,
                "end": 3710,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3708,
                    "end": 3709,
                    "name": {
                      "type": "Identifier",
                      "start": 3708,
                      "end": 3709,
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3725,
            "end": 3774,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3740,
              "end": 3761,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3761,
              "end": 3774,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3767,
                "end": 3774,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3761,
                "end": 3764,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3762,
                    "end": 3763,
                    "name": {
                      "type": "Identifier",
                      "start": 3762,
                      "end": 3763,
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3779,
            "end": 3806,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3779,
              "end": 3793,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3793,
              "end": 3806,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3799,
                "end": 3806,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3793,
                "end": 3796,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3794,
                    "end": 3795,
                    "name": {
                      "type": "Identifier",
                      "start": 3794,
                      "end": 3795,
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3811,
            "end": 3847,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3819,
              "end": 3834,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3834,
              "end": 3847,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3840,
                "end": 3847,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3834,
                "end": 3837,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3835,
                    "end": 3836,
                    "name": {
                      "type": "Identifier",
                      "start": 3835,
                      "end": 3836,
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3851,
      "end": 3928,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3858,
        "end": 3928,
        "id": {
          "type": "Identifier",
          "start": 3867,
          "end": 3919,
          "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 3925,
          "end": 3928,
          "body": []
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3919,
          "end": 3922,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3920,
              "end": 3921,
              "name": {
                "type": "Identifier",
                "start": 3920,
                "end": 3921,
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 3930,
      "end": 4001,
      "id": {
        "type": "Identifier",
        "start": 3939,
        "end": 3992,
        "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 3998,
        "end": 4001,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3992,
        "end": 3995,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3993,
            "end": 3994,
            "name": {
              "type": "Identifier",
              "start": 3993,
              "end": 3994,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
