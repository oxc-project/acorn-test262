__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 9061,
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
      "end": 154,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 61,
        "end": 154,
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 110,
          "name": "publicInterfaceWithPrivatePropertyTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 111,
          "end": 154,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 117,
              "end": 142,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 127,
                "name": "myProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 141,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 129,
                  "end": 141,
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 141,
                    "name": "privateClass",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 156,
      "end": 244,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 163,
        "end": 244,
        "id": {
          "type": "Identifier",
          "start": 173,
          "end": 211,
          "name": "publicInterfaceWithPublicPropertyTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 212,
          "end": 244,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 218,
              "end": 242,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 218,
                "end": 228,
                "name": "myProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 228,
                "end": 241,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 230,
                  "end": 241,
                  "typeName": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 241,
                    "name": "publicClass",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 246,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 296,
        "name": "privateInterfaceWithPrivatePropertyTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 297,
        "end": 330,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 303,
            "end": 328,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 313,
              "name": "myProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 313,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 315,
                "end": 327,
                "typeName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 327,
                  "name": "privateClass",
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
      "type": "TSInterfaceDeclaration",
      "start": 332,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 381,
        "name": "privateInterfaceWithPublicPropertyTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 382,
        "end": 414,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 388,
            "end": 412,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 398,
              "name": "myProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 411,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 400,
                "end": 411,
                "typeName": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 411,
                  "name": "publicClass",
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
      "type": "ExportNamedDeclaration",
      "start": 416,
      "end": 678,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 423,
        "end": 678,
        "id": {
          "type": "Identifier",
          "start": 429,
          "end": 468,
          "name": "publicClassWithWithPrivatePropertyTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 469,
          "end": 678,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 475,
              "end": 519,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 482,
                "end": 504,
                "name": "myPublicStaticProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 504,
                "end": 518,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 506,
                  "end": 518,
                  "typeName": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 518,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 533,
              "end": 586,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 548,
                "end": 571,
                "name": "myPrivateStaticProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 571,
                "end": 585,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 573,
                  "end": 585,
                  "typeName": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 585,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 591,
              "end": 622,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 591,
                "end": 607,
                "name": "myPublicProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 607,
                "end": 621,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 609,
                  "end": 621,
                  "typeName": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 621,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 636,
              "end": 676,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 644,
                "end": 661,
                "name": "myPrivateProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 661,
                "end": 675,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 663,
                  "end": 675,
                  "typeName": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 675,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
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
      "start": 680,
      "end": 919,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 687,
        "end": 919,
        "id": {
          "type": "Identifier",
          "start": 693,
          "end": 731,
          "name": "publicClassWithWithPublicPropertyTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 732,
          "end": 919,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 738,
              "end": 781,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 745,
                "end": 767,
                "name": "myPublicStaticProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 767,
                "end": 780,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 769,
                  "end": 780,
                  "typeName": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 780,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 786,
              "end": 838,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 801,
                "end": 824,
                "name": "myPrivateStaticProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 824,
                "end": 837,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 826,
                  "end": 837,
                  "typeName": {
                    "type": "Identifier",
                    "start": 826,
                    "end": 837,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 843,
              "end": 873,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 843,
                "end": 859,
                "name": "myPublicProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 859,
                "end": 872,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 861,
                  "end": 872,
                  "typeName": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 872,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 878,
              "end": 917,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 886,
                "end": 903,
                "name": "myPrivateProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 903,
                "end": 916,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 905,
                  "end": 916,
                  "typeName": {
                    "type": "Identifier",
                    "start": 905,
                    "end": 916,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
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
      "start": 921,
      "end": 1159,
      "id": {
        "type": "Identifier",
        "start": 927,
        "end": 967,
        "name": "privateClassWithWithPrivatePropertyTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 968,
        "end": 1159,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 974,
            "end": 1018,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 981,
              "end": 1003,
              "name": "myPublicStaticProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1003,
              "end": 1017,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1005,
                "end": 1017,
                "typeName": {
                  "type": "Identifier",
                  "start": 1005,
                  "end": 1017,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1023,
            "end": 1076,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1038,
              "end": 1061,
              "name": "myPrivateStaticProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1061,
              "end": 1075,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1063,
                "end": 1075,
                "typeName": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1075,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 1081,
            "end": 1112,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1081,
              "end": 1097,
              "name": "myPublicProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1097,
              "end": 1111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1099,
                "end": 1111,
                "typeName": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1111,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1117,
            "end": 1157,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1125,
              "end": 1142,
              "name": "myPrivateProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1142,
              "end": 1156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1144,
                "end": 1156,
                "typeName": {
                  "type": "Identifier",
                  "start": 1144,
                  "end": 1156,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
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
      "start": 1161,
      "end": 1394,
      "id": {
        "type": "Identifier",
        "start": 1167,
        "end": 1206,
        "name": "privateClassWithWithPublicPropertyTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1207,
        "end": 1394,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1213,
            "end": 1256,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1220,
              "end": 1242,
              "name": "myPublicStaticProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1242,
              "end": 1255,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1244,
                "end": 1255,
                "typeName": {
                  "type": "Identifier",
                  "start": 1244,
                  "end": 1255,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1261,
            "end": 1313,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1276,
              "end": 1299,
              "name": "myPrivateStaticProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1299,
              "end": 1312,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1301,
                "end": 1312,
                "typeName": {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1312,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 1318,
            "end": 1348,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1318,
              "end": 1334,
              "name": "myPublicProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1334,
              "end": 1347,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1336,
                "end": 1347,
                "typeName": {
                  "type": "Identifier",
                  "start": 1336,
                  "end": 1347,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1353,
            "end": 1392,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1361,
              "end": 1378,
              "name": "myPrivateProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1378,
              "end": 1391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1380,
                "end": 1391,
                "typeName": {
                  "type": "Identifier",
                  "start": 1380,
                  "end": 1391,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
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
      "start": 1396,
      "end": 1455,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1403,
        "end": 1455,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1407,
            "end": 1454,
            "id": {
              "type": "Identifier",
              "start": 1407,
              "end": 1454,
              "name": "publicVarWithPrivatePropertyTypes",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1440,
                "end": 1454,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1442,
                  "end": 1454,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1442,
                    "end": 1454,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1465,
      "end": 1522,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1472,
        "end": 1522,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1476,
            "end": 1521,
            "id": {
              "type": "Identifier",
              "start": 1476,
              "end": 1521,
              "name": "publicVarWithPublicPropertyTypes",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1508,
                "end": 1521,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1510,
                  "end": 1521,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1510,
                    "end": 1521,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 1523,
      "end": 1576,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1527,
          "end": 1575,
          "id": {
            "type": "Identifier",
            "start": 1527,
            "end": 1575,
            "name": "privateVarWithPrivatePropertyTypes",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1561,
              "end": 1575,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1563,
                "end": 1575,
                "typeName": {
                  "type": "Identifier",
                  "start": 1563,
                  "end": 1575,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1577,
      "end": 1628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1581,
          "end": 1627,
          "id": {
            "type": "Identifier",
            "start": 1581,
            "end": 1627,
            "name": "privateVarWithPublicPropertyTypes",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1614,
              "end": 1627,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1616,
                "end": 1627,
                "typeName": {
                  "type": "Identifier",
                  "start": 1616,
                  "end": 1627,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1630,
      "end": 1704,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1637,
        "end": 1704,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1649,
            "end": 1703,
            "id": {
              "type": "Identifier",
              "start": 1649,
              "end": 1703,
              "name": "publicAmbientVarWithPrivatePropertyTypes",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1689,
                "end": 1703,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1691,
                  "end": 1703,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1691,
                    "end": 1703,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1714,
      "end": 1786,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1721,
        "end": 1786,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1733,
            "end": 1785,
            "id": {
              "type": "Identifier",
              "start": 1733,
              "end": 1785,
              "name": "publicAmbientVarWithPublicPropertyTypes",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1772,
                "end": 1785,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1774,
                  "end": 1785,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1774,
                    "end": 1785,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 1787,
      "end": 1855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1799,
          "end": 1854,
          "id": {
            "type": "Identifier",
            "start": 1799,
            "end": 1854,
            "name": "privateAmbientVarWithPrivatePropertyTypes",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1840,
              "end": 1854,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1842,
                "end": 1854,
                "typeName": {
                  "type": "Identifier",
                  "start": 1842,
                  "end": 1854,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1856,
      "end": 1922,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1868,
          "end": 1921,
          "id": {
            "type": "Identifier",
            "start": 1868,
            "end": 1921,
            "name": "privateAmbientVarWithPublicPropertyTypes",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1908,
              "end": 1921,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1910,
                "end": 1921,
                "typeName": {
                  "type": "Identifier",
                  "start": 1910,
                  "end": 1921,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1924,
      "end": 2042,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1931,
        "end": 2042,
        "id": {
          "type": "Identifier",
          "start": 1941,
          "end": 1986,
          "name": "publicInterfaceWithPrivateModulePropertyTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1987,
          "end": 2042,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1993,
              "end": 2031,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1993,
                "end": 2003,
                "name": "myProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2003,
                "end": 2030,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2005,
                  "end": 2030,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2005,
                    "end": 2030,
                    "left": {
                      "type": "Identifier",
                      "start": 2005,
                      "end": 2018,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2019,
                      "end": 2030,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2043,
      "end": 2230,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2050,
        "end": 2230,
        "id": {
          "type": "Identifier",
          "start": 2056,
          "end": 2097,
          "name": "publicClassWithPrivateModulePropertyTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2098,
          "end": 2230,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 2104,
              "end": 2161,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2111,
                "end": 2133,
                "name": "myPublicStaticProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2133,
                "end": 2160,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2135,
                  "end": 2160,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2135,
                    "end": 2160,
                    "left": {
                      "type": "Identifier",
                      "start": 2135,
                      "end": 2148,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2149,
                      "end": 2160,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2175,
              "end": 2219,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2175,
                "end": 2191,
                "name": "myPublicProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2191,
                "end": 2218,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2193,
                  "end": 2218,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2193,
                    "end": 2218,
                    "left": {
                      "type": "Identifier",
                      "start": 2193,
                      "end": 2206,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2207,
                      "end": 2218,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
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
      "start": 2231,
      "end": 2309,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2238,
        "end": 2309,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2242,
            "end": 2308,
            "id": {
              "type": "Identifier",
              "start": 2242,
              "end": 2308,
              "name": "publicVarWithPrivateModulePropertyTypes",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2281,
                "end": 2308,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2283,
                  "end": 2308,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2283,
                    "end": 2308,
                    "left": {
                      "type": "Identifier",
                      "start": 2283,
                      "end": 2296,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2297,
                      "end": 2308,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2319,
      "end": 2412,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2326,
        "end": 2412,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2338,
            "end": 2411,
            "id": {
              "type": "Identifier",
              "start": 2338,
              "end": 2411,
              "name": "publicAmbientVarWithPrivateModulePropertyTypes",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2384,
                "end": 2411,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2386,
                  "end": 2411,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2386,
                    "end": 2411,
                    "left": {
                      "type": "Identifier",
                      "start": 2386,
                      "end": 2399,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2400,
                      "end": 2411,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2423,
      "end": 2526,
      "id": {
        "type": "Identifier",
        "start": 2433,
        "end": 2479,
        "name": "privateInterfaceWithPrivateModulePropertyTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2480,
        "end": 2526,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2486,
            "end": 2524,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2486,
              "end": 2496,
              "name": "myProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2496,
              "end": 2523,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2498,
                "end": 2523,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2498,
                  "end": 2523,
                  "left": {
                    "type": "Identifier",
                    "start": 2498,
                    "end": 2511,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2512,
                    "end": 2523,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "type": "ClassDeclaration",
      "start": 2527,
      "end": 2690,
      "id": {
        "type": "Identifier",
        "start": 2533,
        "end": 2575,
        "name": "privateClassWithPrivateModulePropertyTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2576,
        "end": 2690,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2582,
            "end": 2639,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2589,
              "end": 2611,
              "name": "myPublicStaticProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2611,
              "end": 2638,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2613,
                "end": 2638,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2613,
                  "end": 2638,
                  "left": {
                    "type": "Identifier",
                    "start": 2613,
                    "end": 2626,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2627,
                    "end": 2638,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2644,
            "end": 2688,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2644,
              "end": 2660,
              "name": "myPublicProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2660,
              "end": 2687,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2662,
                "end": 2687,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2662,
                  "end": 2687,
                  "left": {
                    "type": "Identifier",
                    "start": 2662,
                    "end": 2675,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2676,
                    "end": 2687,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null
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
      "type": "VariableDeclaration",
      "start": 2691,
      "end": 2763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2695,
          "end": 2762,
          "id": {
            "type": "Identifier",
            "start": 2695,
            "end": 2762,
            "name": "privateVarWithPrivateModulePropertyTypes",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2735,
              "end": 2762,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2737,
                "end": 2762,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2737,
                  "end": 2762,
                  "left": {
                    "type": "Identifier",
                    "start": 2737,
                    "end": 2750,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2751,
                    "end": 2762,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2764,
      "end": 2851,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2776,
          "end": 2850,
          "id": {
            "type": "Identifier",
            "start": 2776,
            "end": 2850,
            "name": "privateAmbientVarWithPrivateModulePropertyTypes",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2823,
              "end": 2850,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2825,
                "end": 2850,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2825,
                  "end": 2850,
                  "left": {
                    "type": "Identifier",
                    "start": 2825,
                    "end": 2838,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2839,
                    "end": 2850,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2853,
      "end": 5999,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 2860,
        "end": 5999,
        "id": {
          "type": "Identifier",
          "start": 2867,
          "end": 2879,
          "name": "publicModule",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 2880,
          "end": 5999,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 2886,
              "end": 2912,
              "id": {
                "type": "Identifier",
                "start": 2892,
                "end": 2904,
                "name": "privateClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 2905,
                "end": 2912,
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
              "start": 2918,
              "end": 2950,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 2925,
                "end": 2950,
                "id": {
                  "type": "Identifier",
                  "start": 2931,
                  "end": 2942,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 2943,
                  "end": 2950,
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
              "start": 2956,
              "end": 3064,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 2963,
                "end": 3064,
                "id": {
                  "type": "Identifier",
                  "start": 2973,
                  "end": 3012,
                  "name": "publicInterfaceWithPrivatePropertyTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 3013,
                  "end": 3064,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3023,
                      "end": 3048,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3023,
                        "end": 3033,
                        "name": "myProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3033,
                        "end": 3047,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3035,
                          "end": 3047,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3035,
                            "end": 3047,
                            "name": "privateClass",
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
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3070,
              "end": 3166,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 3077,
                "end": 3166,
                "id": {
                  "type": "Identifier",
                  "start": 3087,
                  "end": 3125,
                  "name": "publicInterfaceWithPublicPropertyTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 3126,
                  "end": 3166,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3136,
                      "end": 3160,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3136,
                        "end": 3146,
                        "name": "myProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3146,
                        "end": 3159,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3148,
                          "end": 3159,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3148,
                            "end": 3159,
                            "name": "publicClass",
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
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 3172,
              "end": 3264,
              "id": {
                "type": "Identifier",
                "start": 3182,
                "end": 3222,
                "name": "privateInterfaceWithPrivatePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 3223,
                "end": 3264,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3233,
                    "end": 3258,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3233,
                      "end": 3243,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3243,
                      "end": 3257,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3245,
                        "end": 3257,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3245,
                          "end": 3257,
                          "name": "privateClass",
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
              "type": "TSInterfaceDeclaration",
              "start": 3270,
              "end": 3360,
              "id": {
                "type": "Identifier",
                "start": 3280,
                "end": 3319,
                "name": "privateInterfaceWithPublicPropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 3320,
                "end": 3360,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3330,
                    "end": 3354,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3330,
                      "end": 3340,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3340,
                      "end": 3353,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3342,
                        "end": 3353,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3342,
                          "end": 3353,
                          "name": "publicClass",
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
              "type": "ExportNamedDeclaration",
              "start": 3366,
              "end": 3648,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 3373,
                "end": 3648,
                "id": {
                  "type": "Identifier",
                  "start": 3379,
                  "end": 3418,
                  "name": "publicClassWithWithPrivatePropertyTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 3419,
                  "end": 3648,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 3429,
                      "end": 3473,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3436,
                        "end": 3458,
                        "name": "myPublicStaticProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3458,
                        "end": 3472,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3460,
                          "end": 3472,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3460,
                            "end": 3472,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 3491,
                      "end": 3544,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3506,
                        "end": 3529,
                        "name": "myPrivateStaticProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3529,
                        "end": 3543,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3531,
                          "end": 3543,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3531,
                            "end": 3543,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": "private"
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 3553,
                      "end": 3584,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3553,
                        "end": 3569,
                        "name": "myPublicProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3569,
                        "end": 3583,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3571,
                          "end": 3583,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3571,
                            "end": 3583,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 3602,
                      "end": 3642,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3610,
                        "end": 3627,
                        "name": "myPrivateProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3627,
                        "end": 3641,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3629,
                          "end": 3641,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3629,
                            "end": 3641,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
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
              "start": 3654,
              "end": 3913,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 3661,
                "end": 3913,
                "id": {
                  "type": "Identifier",
                  "start": 3667,
                  "end": 3705,
                  "name": "publicClassWithWithPublicPropertyTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 3706,
                  "end": 3913,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 3716,
                      "end": 3759,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3723,
                        "end": 3745,
                        "name": "myPublicStaticProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3745,
                        "end": 3758,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3747,
                          "end": 3758,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3747,
                            "end": 3758,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 3768,
                      "end": 3820,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3783,
                        "end": 3806,
                        "name": "myPrivateStaticProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3806,
                        "end": 3819,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3808,
                          "end": 3819,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3808,
                            "end": 3819,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": "private"
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 3829,
                      "end": 3859,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3829,
                        "end": 3845,
                        "name": "myPublicProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3845,
                        "end": 3858,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3847,
                          "end": 3858,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3847,
                            "end": 3858,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 3868,
                      "end": 3907,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3876,
                        "end": 3893,
                        "name": "myPrivateProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3893,
                        "end": 3906,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3895,
                          "end": 3906,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3895,
                            "end": 3906,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
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
              "start": 3919,
              "end": 4177,
              "id": {
                "type": "Identifier",
                "start": 3925,
                "end": 3965,
                "name": "privateClassWithWithPrivatePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 3966,
                "end": 4177,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 3976,
                    "end": 4020,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3983,
                      "end": 4005,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4005,
                      "end": 4019,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4007,
                        "end": 4019,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4007,
                          "end": 4019,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4029,
                    "end": 4082,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4044,
                      "end": 4067,
                      "name": "myPrivateStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4067,
                      "end": 4081,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4069,
                        "end": 4081,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4069,
                          "end": 4081,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4091,
                    "end": 4122,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4091,
                      "end": 4107,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4107,
                      "end": 4121,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4109,
                        "end": 4121,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4109,
                          "end": 4121,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4131,
                    "end": 4171,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4139,
                      "end": 4156,
                      "name": "myPrivateProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4156,
                      "end": 4170,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4158,
                        "end": 4170,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4158,
                          "end": 4170,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
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
              "start": 4183,
              "end": 4436,
              "id": {
                "type": "Identifier",
                "start": 4189,
                "end": 4228,
                "name": "privateClassWithWithPublicPropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 4229,
                "end": 4436,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 4239,
                    "end": 4282,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4246,
                      "end": 4268,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4268,
                      "end": 4281,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4270,
                        "end": 4281,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4270,
                          "end": 4281,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4291,
                    "end": 4343,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4306,
                      "end": 4329,
                      "name": "myPrivateStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4329,
                      "end": 4342,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4331,
                        "end": 4342,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4331,
                          "end": 4342,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4352,
                    "end": 4382,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4352,
                      "end": 4368,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4368,
                      "end": 4381,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4370,
                        "end": 4381,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4370,
                          "end": 4381,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4391,
                    "end": 4430,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4399,
                      "end": 4416,
                      "name": "myPrivateProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4416,
                      "end": 4429,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4418,
                        "end": 4429,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4418,
                          "end": 4429,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
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
              "start": 4442,
              "end": 4501,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 4449,
                "end": 4501,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4453,
                    "end": 4500,
                    "id": {
                      "type": "Identifier",
                      "start": 4453,
                      "end": 4500,
                      "name": "publicVarWithPrivatePropertyTypes",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4486,
                        "end": 4500,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4488,
                          "end": 4500,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4488,
                            "end": 4500,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 4515,
              "end": 4572,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 4522,
                "end": 4572,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4526,
                    "end": 4571,
                    "id": {
                      "type": "Identifier",
                      "start": 4526,
                      "end": 4571,
                      "name": "publicVarWithPublicPropertyTypes",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4558,
                        "end": 4571,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4560,
                          "end": 4571,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4560,
                            "end": 4571,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "VariableDeclaration",
              "start": 4577,
              "end": 4630,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4581,
                  "end": 4629,
                  "id": {
                    "type": "Identifier",
                    "start": 4581,
                    "end": 4629,
                    "name": "privateVarWithPrivatePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4615,
                      "end": 4629,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4617,
                        "end": 4629,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4617,
                          "end": 4629,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 4635,
              "end": 4686,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4639,
                  "end": 4685,
                  "id": {
                    "type": "Identifier",
                    "start": 4639,
                    "end": 4685,
                    "name": "privateVarWithPublicPropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4672,
                      "end": 4685,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4674,
                        "end": 4685,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4674,
                          "end": 4685,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 4692,
              "end": 4766,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 4699,
                "end": 4766,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4711,
                    "end": 4765,
                    "id": {
                      "type": "Identifier",
                      "start": 4711,
                      "end": 4765,
                      "name": "publicAmbientVarWithPrivatePropertyTypes",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4751,
                        "end": 4765,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4753,
                          "end": 4765,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4753,
                            "end": 4765,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": true
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 4780,
              "end": 4852,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 4787,
                "end": 4852,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 4799,
                    "end": 4851,
                    "id": {
                      "type": "Identifier",
                      "start": 4799,
                      "end": 4851,
                      "name": "publicAmbientVarWithPublicPropertyTypes",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4838,
                        "end": 4851,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4840,
                          "end": 4851,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4840,
                            "end": 4851,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": true
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "VariableDeclaration",
              "start": 4857,
              "end": 4925,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4869,
                  "end": 4924,
                  "id": {
                    "type": "Identifier",
                    "start": 4869,
                    "end": 4924,
                    "name": "privateAmbientVarWithPrivatePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4910,
                      "end": 4924,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4912,
                        "end": 4924,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4912,
                          "end": 4924,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            {
              "type": "VariableDeclaration",
              "start": 4930,
              "end": 4996,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4942,
                  "end": 4995,
                  "id": {
                    "type": "Identifier",
                    "start": 4942,
                    "end": 4995,
                    "name": "privateAmbientVarWithPublicPropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4982,
                      "end": 4995,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4984,
                        "end": 4995,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4984,
                          "end": 4995,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5002,
              "end": 5128,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 5009,
                "end": 5128,
                "id": {
                  "type": "Identifier",
                  "start": 5019,
                  "end": 5064,
                  "name": "publicInterfaceWithPrivateModulePropertyTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 5065,
                  "end": 5128,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 5075,
                      "end": 5113,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5075,
                        "end": 5085,
                        "name": "myProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5085,
                        "end": 5112,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5087,
                          "end": 5112,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 5087,
                            "end": 5112,
                            "left": {
                              "type": "Identifier",
                              "start": 5087,
                              "end": 5100,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5101,
                              "end": 5112,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
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
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5133,
              "end": 5332,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 5140,
                "end": 5332,
                "id": {
                  "type": "Identifier",
                  "start": 5146,
                  "end": 5187,
                  "name": "publicClassWithPrivateModulePropertyTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 5188,
                  "end": 5332,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 5198,
                      "end": 5255,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5205,
                        "end": 5227,
                        "name": "myPublicStaticProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5227,
                        "end": 5254,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5229,
                          "end": 5254,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 5229,
                            "end": 5254,
                            "left": {
                              "type": "Identifier",
                              "start": 5229,
                              "end": 5242,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5243,
                              "end": 5254,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 5273,
                      "end": 5317,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5273,
                        "end": 5289,
                        "name": "myPublicProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": null,
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5289,
                        "end": 5316,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5291,
                          "end": 5316,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 5291,
                            "end": 5316,
                            "left": {
                              "type": "Identifier",
                              "start": 5291,
                              "end": 5304,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5305,
                              "end": 5316,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null
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
              "start": 5337,
              "end": 5415,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 5344,
                "end": 5415,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 5348,
                    "end": 5414,
                    "id": {
                      "type": "Identifier",
                      "start": 5348,
                      "end": 5414,
                      "name": "publicVarWithPrivateModulePropertyTypes",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5387,
                        "end": 5414,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5389,
                          "end": 5414,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 5389,
                            "end": 5414,
                            "left": {
                              "type": "Identifier",
                              "start": 5389,
                              "end": 5402,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5403,
                              "end": 5414,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5429,
              "end": 5522,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 5436,
                "end": 5522,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 5448,
                    "end": 5521,
                    "id": {
                      "type": "Identifier",
                      "start": 5448,
                      "end": 5521,
                      "name": "publicAmbientVarWithPrivateModulePropertyTypes",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5494,
                        "end": 5521,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5496,
                          "end": 5521,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 5496,
                            "end": 5521,
                            "left": {
                              "type": "Identifier",
                              "start": 5496,
                              "end": 5509,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5510,
                              "end": 5521,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": true
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 5537,
              "end": 5648,
              "id": {
                "type": "Identifier",
                "start": 5547,
                "end": 5593,
                "name": "privateInterfaceWithPrivateModulePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 5594,
                "end": 5648,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 5604,
                    "end": 5642,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5604,
                      "end": 5614,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5614,
                      "end": 5641,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5616,
                        "end": 5641,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5616,
                          "end": 5641,
                          "left": {
                            "type": "Identifier",
                            "start": 5616,
                            "end": 5629,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5630,
                            "end": 5641,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
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
              "type": "ClassDeclaration",
              "start": 5653,
              "end": 5828,
              "id": {
                "type": "Identifier",
                "start": 5659,
                "end": 5701,
                "name": "privateClassWithPrivateModulePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 5702,
                "end": 5828,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 5712,
                    "end": 5769,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5719,
                      "end": 5741,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5741,
                      "end": 5768,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5743,
                        "end": 5768,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5743,
                          "end": 5768,
                          "left": {
                            "type": "Identifier",
                            "start": 5743,
                            "end": 5756,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5757,
                            "end": 5768,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 5778,
                    "end": 5822,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5778,
                      "end": 5794,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5794,
                      "end": 5821,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5796,
                        "end": 5821,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5796,
                          "end": 5821,
                          "left": {
                            "type": "Identifier",
                            "start": 5796,
                            "end": 5809,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5810,
                            "end": 5821,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
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
              "type": "VariableDeclaration",
              "start": 5833,
              "end": 5905,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5837,
                  "end": 5904,
                  "id": {
                    "type": "Identifier",
                    "start": 5837,
                    "end": 5904,
                    "name": "privateVarWithPrivateModulePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5877,
                      "end": 5904,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5879,
                        "end": 5904,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5879,
                          "end": 5904,
                          "left": {
                            "type": "Identifier",
                            "start": 5879,
                            "end": 5892,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5893,
                            "end": 5904,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 5910,
              "end": 5997,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5922,
                  "end": 5996,
                  "id": {
                    "type": "Identifier",
                    "start": 5922,
                    "end": 5996,
                    "name": "privateAmbientVarWithPrivateModulePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5969,
                      "end": 5996,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5971,
                        "end": 5996,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 5971,
                          "end": 5996,
                          "left": {
                            "type": "Identifier",
                            "start": 5971,
                            "end": 5984,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 5985,
                            "end": 5996,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 6001,
      "end": 9060,
      "id": {
        "type": "Identifier",
        "start": 6008,
        "end": 6021,
        "name": "privateModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 6022,
        "end": 9060,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 6028,
            "end": 6054,
            "id": {
              "type": "Identifier",
              "start": 6034,
              "end": 6046,
              "name": "privateClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 6047,
              "end": 6054,
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
            "start": 6060,
            "end": 6092,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 6067,
              "end": 6092,
              "id": {
                "type": "Identifier",
                "start": 6073,
                "end": 6084,
                "name": "publicClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 6085,
                "end": 6092,
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
            "start": 6098,
            "end": 6198,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 6105,
              "end": 6198,
              "id": {
                "type": "Identifier",
                "start": 6115,
                "end": 6154,
                "name": "publicInterfaceWithPrivatePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 6155,
                "end": 6198,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 6165,
                    "end": 6190,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6165,
                      "end": 6175,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6175,
                      "end": 6189,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6177,
                        "end": 6189,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6177,
                          "end": 6189,
                          "name": "privateClass",
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6204,
            "end": 6300,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 6211,
              "end": 6300,
              "id": {
                "type": "Identifier",
                "start": 6221,
                "end": 6259,
                "name": "publicInterfaceWithPublicPropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 6260,
                "end": 6300,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 6270,
                    "end": 6294,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6270,
                      "end": 6280,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6280,
                      "end": 6293,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6282,
                        "end": 6293,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6282,
                          "end": 6293,
                          "name": "publicClass",
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 6306,
            "end": 6398,
            "id": {
              "type": "Identifier",
              "start": 6316,
              "end": 6356,
              "name": "privateInterfaceWithPrivatePropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 6357,
              "end": 6398,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 6367,
                  "end": 6392,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6367,
                    "end": 6377,
                    "name": "myProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6377,
                    "end": 6391,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6379,
                      "end": 6391,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6379,
                        "end": 6391,
                        "name": "privateClass",
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
            "type": "TSInterfaceDeclaration",
            "start": 6404,
            "end": 6494,
            "id": {
              "type": "Identifier",
              "start": 6414,
              "end": 6453,
              "name": "privateInterfaceWithPublicPropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 6454,
              "end": 6494,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 6464,
                  "end": 6488,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6464,
                    "end": 6474,
                    "name": "myProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6474,
                    "end": 6487,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6476,
                      "end": 6487,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6476,
                        "end": 6487,
                        "name": "publicClass",
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
            "type": "ExportNamedDeclaration",
            "start": 6500,
            "end": 6766,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 6507,
              "end": 6766,
              "id": {
                "type": "Identifier",
                "start": 6513,
                "end": 6552,
                "name": "publicClassWithWithPrivatePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 6553,
                "end": 6766,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 6563,
                    "end": 6607,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6570,
                      "end": 6592,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6592,
                      "end": 6606,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6594,
                        "end": 6606,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6594,
                          "end": 6606,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 6617,
                    "end": 6670,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6632,
                      "end": 6655,
                      "name": "myPrivateStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6655,
                      "end": 6669,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6657,
                        "end": 6669,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6657,
                          "end": 6669,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 6679,
                    "end": 6710,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6679,
                      "end": 6695,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6695,
                      "end": 6709,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6697,
                        "end": 6709,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6697,
                          "end": 6709,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 6720,
                    "end": 6760,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6728,
                      "end": 6745,
                      "name": "myPrivateProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6745,
                      "end": 6759,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6747,
                        "end": 6759,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6747,
                          "end": 6759,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
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
            "start": 6772,
            "end": 7031,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 6779,
              "end": 7031,
              "id": {
                "type": "Identifier",
                "start": 6785,
                "end": 6823,
                "name": "publicClassWithWithPublicPropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 6824,
                "end": 7031,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 6834,
                    "end": 6877,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6841,
                      "end": 6863,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6863,
                      "end": 6876,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6865,
                        "end": 6876,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6865,
                          "end": 6876,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 6886,
                    "end": 6938,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6901,
                      "end": 6924,
                      "name": "myPrivateStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6924,
                      "end": 6937,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6926,
                        "end": 6937,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6926,
                          "end": 6937,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 6947,
                    "end": 6977,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6947,
                      "end": 6963,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6963,
                      "end": 6976,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6965,
                        "end": 6976,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6965,
                          "end": 6976,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 6986,
                    "end": 7025,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6994,
                      "end": 7011,
                      "name": "myPrivateProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7011,
                      "end": 7024,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7013,
                        "end": 7024,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7013,
                          "end": 7024,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
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
            "start": 7037,
            "end": 7295,
            "id": {
              "type": "Identifier",
              "start": 7043,
              "end": 7083,
              "name": "privateClassWithWithPrivatePropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 7084,
              "end": 7295,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 7094,
                  "end": 7138,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7101,
                    "end": 7123,
                    "name": "myPublicStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7123,
                    "end": 7137,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7125,
                      "end": 7137,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7125,
                        "end": 7137,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 7147,
                  "end": 7200,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7162,
                    "end": 7185,
                    "name": "myPrivateStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7185,
                    "end": 7199,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7187,
                      "end": 7199,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7187,
                        "end": 7199,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 7209,
                  "end": 7240,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7209,
                    "end": 7225,
                    "name": "myPublicProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7225,
                    "end": 7239,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7227,
                      "end": 7239,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7227,
                        "end": 7239,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 7249,
                  "end": 7289,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7257,
                    "end": 7274,
                    "name": "myPrivateProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7274,
                    "end": 7288,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7276,
                      "end": 7288,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7276,
                        "end": 7288,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
            "start": 7301,
            "end": 7554,
            "id": {
              "type": "Identifier",
              "start": 7307,
              "end": 7346,
              "name": "privateClassWithWithPublicPropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 7347,
              "end": 7554,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 7357,
                  "end": 7400,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7364,
                    "end": 7386,
                    "name": "myPublicStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7386,
                    "end": 7399,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7388,
                      "end": 7399,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7388,
                        "end": 7399,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 7409,
                  "end": 7461,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7424,
                    "end": 7447,
                    "name": "myPrivateStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7447,
                    "end": 7460,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7449,
                      "end": 7460,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7449,
                        "end": 7460,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 7470,
                  "end": 7500,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7470,
                    "end": 7486,
                    "name": "myPublicProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7486,
                    "end": 7499,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7488,
                      "end": 7499,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7488,
                        "end": 7499,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 7509,
                  "end": 7548,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7517,
                    "end": 7534,
                    "name": "myPrivateProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7534,
                    "end": 7547,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7536,
                      "end": 7547,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7536,
                        "end": 7547,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
            "start": 7560,
            "end": 7619,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 7567,
              "end": 7619,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 7571,
                  "end": 7618,
                  "id": {
                    "type": "Identifier",
                    "start": 7571,
                    "end": 7618,
                    "name": "publicVarWithPrivatePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7604,
                      "end": 7618,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7606,
                        "end": 7618,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7606,
                          "end": 7618,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7625,
            "end": 7682,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 7632,
              "end": 7682,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 7636,
                  "end": 7681,
                  "id": {
                    "type": "Identifier",
                    "start": 7636,
                    "end": 7681,
                    "name": "publicVarWithPublicPropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7668,
                      "end": 7681,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7670,
                        "end": 7681,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7670,
                          "end": 7681,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 7687,
            "end": 7740,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 7691,
                "end": 7739,
                "id": {
                  "type": "Identifier",
                  "start": 7691,
                  "end": 7739,
                  "name": "privateVarWithPrivatePropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7725,
                    "end": 7739,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7727,
                      "end": 7739,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7727,
                        "end": 7739,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 7745,
            "end": 7796,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 7749,
                "end": 7795,
                "id": {
                  "type": "Identifier",
                  "start": 7749,
                  "end": 7795,
                  "name": "privateVarWithPublicPropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7782,
                    "end": 7795,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7784,
                      "end": 7795,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7784,
                        "end": 7795,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7802,
            "end": 7876,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 7809,
              "end": 7876,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 7821,
                  "end": 7875,
                  "id": {
                    "type": "Identifier",
                    "start": 7821,
                    "end": 7875,
                    "name": "publicAmbientVarWithPrivatePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7861,
                      "end": 7875,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7863,
                        "end": 7875,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7863,
                          "end": 7875,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7882,
            "end": 7954,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 7889,
              "end": 7954,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 7901,
                  "end": 7953,
                  "id": {
                    "type": "Identifier",
                    "start": 7901,
                    "end": 7953,
                    "name": "publicAmbientVarWithPublicPropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7940,
                      "end": 7953,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7942,
                        "end": 7953,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7942,
                          "end": 7953,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "VariableDeclaration",
            "start": 7959,
            "end": 8027,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 7971,
                "end": 8026,
                "id": {
                  "type": "Identifier",
                  "start": 7971,
                  "end": 8026,
                  "name": "privateAmbientVarWithPrivatePropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8012,
                    "end": 8026,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8014,
                      "end": 8026,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8014,
                        "end": 8026,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
          },
          {
            "type": "VariableDeclaration",
            "start": 8032,
            "end": 8098,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 8044,
                "end": 8097,
                "id": {
                  "type": "Identifier",
                  "start": 8044,
                  "end": 8097,
                  "name": "privateAmbientVarWithPublicPropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8084,
                    "end": 8097,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8086,
                      "end": 8097,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8086,
                        "end": 8097,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8104,
            "end": 8222,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 8111,
              "end": 8222,
              "id": {
                "type": "Identifier",
                "start": 8121,
                "end": 8166,
                "name": "publicInterfaceWithPrivateModulePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 8167,
                "end": 8222,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 8177,
                    "end": 8215,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8177,
                      "end": 8187,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8187,
                      "end": 8214,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8189,
                        "end": 8214,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 8189,
                          "end": 8214,
                          "left": {
                            "type": "Identifier",
                            "start": 8189,
                            "end": 8202,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 8203,
                            "end": 8214,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8227,
            "end": 8410,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 8234,
              "end": 8410,
              "id": {
                "type": "Identifier",
                "start": 8240,
                "end": 8281,
                "name": "publicClassWithPrivateModulePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 8282,
                "end": 8410,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 8292,
                    "end": 8349,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8299,
                      "end": 8321,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8321,
                      "end": 8348,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8323,
                        "end": 8348,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 8323,
                          "end": 8348,
                          "left": {
                            "type": "Identifier",
                            "start": 8323,
                            "end": 8336,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 8337,
                            "end": 8348,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 8359,
                    "end": 8403,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8359,
                      "end": 8375,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8375,
                      "end": 8402,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8377,
                        "end": 8402,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 8377,
                          "end": 8402,
                          "left": {
                            "type": "Identifier",
                            "start": 8377,
                            "end": 8390,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 8391,
                            "end": 8402,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
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
            "start": 8415,
            "end": 8493,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 8422,
              "end": 8493,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 8426,
                  "end": 8492,
                  "id": {
                    "type": "Identifier",
                    "start": 8426,
                    "end": 8492,
                    "name": "publicVarWithPrivateModulePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8465,
                      "end": 8492,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8467,
                        "end": 8492,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 8467,
                          "end": 8492,
                          "left": {
                            "type": "Identifier",
                            "start": 8467,
                            "end": 8480,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 8481,
                            "end": 8492,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8499,
            "end": 8592,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 8506,
              "end": 8592,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 8518,
                  "end": 8591,
                  "id": {
                    "type": "Identifier",
                    "start": 8518,
                    "end": 8591,
                    "name": "publicAmbientVarWithPrivateModulePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8564,
                      "end": 8591,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8566,
                        "end": 8591,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 8566,
                          "end": 8591,
                          "left": {
                            "type": "Identifier",
                            "start": 8566,
                            "end": 8579,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 8580,
                            "end": 8591,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 8598,
            "end": 8709,
            "id": {
              "type": "Identifier",
              "start": 8608,
              "end": 8654,
              "name": "privateInterfaceWithPrivateModulePropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 8655,
              "end": 8709,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 8665,
                  "end": 8703,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8665,
                    "end": 8675,
                    "name": "myProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8675,
                    "end": 8702,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8677,
                      "end": 8702,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 8677,
                        "end": 8702,
                        "left": {
                          "type": "Identifier",
                          "start": 8677,
                          "end": 8690,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 8691,
                          "end": 8702,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
            "type": "ClassDeclaration",
            "start": 8714,
            "end": 8889,
            "id": {
              "type": "Identifier",
              "start": 8720,
              "end": 8762,
              "name": "privateClassWithPrivateModulePropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 8763,
              "end": 8889,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 8773,
                  "end": 8830,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8780,
                    "end": 8802,
                    "name": "myPublicStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8802,
                    "end": 8829,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8804,
                      "end": 8829,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 8804,
                        "end": 8829,
                        "left": {
                          "type": "Identifier",
                          "start": 8804,
                          "end": 8817,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 8818,
                          "end": 8829,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 8839,
                  "end": 8883,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8839,
                    "end": 8855,
                    "name": "myPublicProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8855,
                    "end": 8882,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8857,
                      "end": 8882,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 8857,
                        "end": 8882,
                        "left": {
                          "type": "Identifier",
                          "start": 8857,
                          "end": 8870,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 8871,
                          "end": 8882,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
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
            "type": "VariableDeclaration",
            "start": 8894,
            "end": 8966,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 8898,
                "end": 8965,
                "id": {
                  "type": "Identifier",
                  "start": 8898,
                  "end": 8965,
                  "name": "privateVarWithPrivateModulePropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8938,
                    "end": 8965,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8940,
                      "end": 8965,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 8940,
                        "end": 8965,
                        "left": {
                          "type": "Identifier",
                          "start": 8940,
                          "end": 8953,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 8954,
                          "end": 8965,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 8971,
            "end": 9058,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 8983,
                "end": 9057,
                "id": {
                  "type": "Identifier",
                  "start": 8983,
                  "end": 9057,
                  "name": "privateAmbientVarWithPrivateModulePropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 9030,
                    "end": 9057,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 9032,
                      "end": 9057,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 9032,
                        "end": 9057,
                        "left": {
                          "type": "Identifier",
                          "start": 9032,
                          "end": 9045,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 9046,
                          "end": 9057,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 7021,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 25,
        "name": "publicClassInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
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
      "type": "TSInterfaceDeclaration",
      "start": 30,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 86,
        "name": "publicInterfaceWithPublicPropertyTypesInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 127,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 125,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 103,
              "name": "myProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 124,
                  "name": "publicClassInGlobal",
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
      "type": "ClassDeclaration",
      "start": 128,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 180,
        "name": "publicClassWithWithPublicPropertyTypesInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 238,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 216,
              "name": "myPublicStaticProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 237,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 237,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 237,
                  "name": "publicClassInGlobal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 243,
            "end": 303,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 281,
              "name": "myPrivateStaticProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 283,
                "end": 302,
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 302,
                  "name": "publicClassInGlobal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 308,
            "end": 346,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 324,
              "name": "myPublicProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 345,
                  "name": "publicClassInGlobal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 351,
            "end": 398,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 376,
              "name": "myPrivateProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 378,
                "end": 397,
                "typeName": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 397,
                  "name": "publicClassInGlobal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
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
      "type": "VariableDeclaration",
      "start": 401,
      "end": 467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 466,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 466,
            "name": "publicVarWithPublicPropertyTypesInGlobal",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 447,
                "end": 466,
                "typeName": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 466,
                  "name": "publicClassInGlobal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 548,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 548,
            "name": "publicAmbientVarWithPublicPropertyTypesInGlobal",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 548,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 529,
                "end": 548,
                "typeName": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 548,
                  "name": "publicClassInGlobal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 551,
      "end": 7021,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 578,
        "name": "publicModuleInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 579,
        "end": 7021,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 585,
            "end": 611,
            "id": {
              "type": "Identifier",
              "start": 591,
              "end": 603,
              "name": "privateClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 604,
              "end": 611,
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
            "start": 617,
            "end": 649,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 624,
              "end": 649,
              "id": {
                "type": "Identifier",
                "start": 630,
                "end": 641,
                "name": "publicClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 642,
                "end": 649,
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
            "type": "TSModuleDeclaration",
            "start": 655,
            "end": 3972,
            "id": {
              "type": "Identifier",
              "start": 662,
              "end": 675,
              "name": "privateModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 676,
              "end": 3972,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 686,
                  "end": 716,
                  "id": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 704,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 705,
                    "end": 716,
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
                  "start": 726,
                  "end": 762,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 733,
                    "end": 762,
                    "id": {
                      "type": "Identifier",
                      "start": 739,
                      "end": 750,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 751,
                      "end": 762,
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
                  "start": 772,
                  "end": 878,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 779,
                    "end": 878,
                    "id": {
                      "type": "Identifier",
                      "start": 789,
                      "end": 828,
                      "name": "publicInterfaceWithPrivatePropertyTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 829,
                      "end": 878,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 843,
                          "end": 868,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 843,
                            "end": 853,
                            "name": "myProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 853,
                            "end": 867,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 855,
                              "end": 867,
                              "typeName": {
                                "type": "Identifier",
                                "start": 855,
                                "end": 867,
                                "name": "privateClass",
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
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 888,
                  "end": 992,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 895,
                    "end": 992,
                    "id": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 943,
                      "name": "publicInterfaceWithPublicPropertyTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 944,
                      "end": 992,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 958,
                          "end": 982,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 958,
                            "end": 968,
                            "name": "myProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 968,
                            "end": 981,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 970,
                              "end": 981,
                              "typeName": {
                                "type": "Identifier",
                                "start": 970,
                                "end": 981,
                                "name": "publicClass",
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
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1002,
                  "end": 1102,
                  "id": {
                    "type": "Identifier",
                    "start": 1012,
                    "end": 1052,
                    "name": "privateInterfaceWithPrivatePropertyTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1053,
                    "end": 1102,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1067,
                        "end": 1092,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1067,
                          "end": 1077,
                          "name": "myProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1077,
                          "end": 1091,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1079,
                            "end": 1091,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1079,
                              "end": 1091,
                              "name": "privateClass",
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
                  "type": "TSInterfaceDeclaration",
                  "start": 1112,
                  "end": 1210,
                  "id": {
                    "type": "Identifier",
                    "start": 1122,
                    "end": 1161,
                    "name": "privateInterfaceWithPublicPropertyTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1162,
                    "end": 1210,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1176,
                        "end": 1200,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1176,
                          "end": 1186,
                          "name": "myProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1186,
                          "end": 1199,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1188,
                            "end": 1199,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1188,
                              "end": 1199,
                              "name": "publicClass",
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
                  "type": "ExportNamedDeclaration",
                  "start": 1220,
                  "end": 1504,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 1227,
                    "end": 1504,
                    "id": {
                      "type": "Identifier",
                      "start": 1233,
                      "end": 1272,
                      "name": "publicClassWithWithPrivatePropertyTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 1273,
                      "end": 1504,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 1287,
                          "end": 1331,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1294,
                            "end": 1316,
                            "name": "myPublicStaticProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1316,
                            "end": 1330,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1318,
                              "end": 1330,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1318,
                                "end": 1330,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 1344,
                          "end": 1397,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1359,
                            "end": 1382,
                            "name": "myPrivateStaticProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1382,
                            "end": 1396,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1384,
                              "end": 1396,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1384,
                                "end": 1396,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": "private"
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 1410,
                          "end": 1441,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1410,
                            "end": 1426,
                            "name": "myPublicProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1426,
                            "end": 1440,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1428,
                              "end": 1440,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1428,
                                "end": 1440,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 1454,
                          "end": 1494,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1462,
                            "end": 1479,
                            "name": "myPrivateProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1479,
                            "end": 1493,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1481,
                              "end": 1493,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1481,
                                "end": 1493,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
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
                  "start": 1514,
                  "end": 1793,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 1521,
                    "end": 1793,
                    "id": {
                      "type": "Identifier",
                      "start": 1527,
                      "end": 1565,
                      "name": "publicClassWithWithPublicPropertyTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 1566,
                      "end": 1793,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 1580,
                          "end": 1623,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1587,
                            "end": 1609,
                            "name": "myPublicStaticProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1609,
                            "end": 1622,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1611,
                              "end": 1622,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1611,
                                "end": 1622,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 1636,
                          "end": 1688,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1651,
                            "end": 1674,
                            "name": "myPrivateStaticProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1674,
                            "end": 1687,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1676,
                              "end": 1687,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1676,
                                "end": 1687,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": "private"
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 1701,
                          "end": 1731,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1701,
                            "end": 1717,
                            "name": "myPublicProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1717,
                            "end": 1730,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1719,
                              "end": 1730,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1719,
                                "end": 1730,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 1744,
                          "end": 1783,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1752,
                            "end": 1769,
                            "name": "myPrivateProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1769,
                            "end": 1782,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1771,
                              "end": 1782,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1771,
                                "end": 1782,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
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
                  "start": 1803,
                  "end": 2081,
                  "id": {
                    "type": "Identifier",
                    "start": 1809,
                    "end": 1849,
                    "name": "privateClassWithWithPrivatePropertyTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 1850,
                    "end": 2081,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 1864,
                        "end": 1908,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1871,
                          "end": 1893,
                          "name": "myPublicStaticProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1893,
                          "end": 1907,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1895,
                            "end": 1907,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1895,
                              "end": 1907,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 1921,
                        "end": 1974,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1936,
                          "end": 1959,
                          "name": "myPrivateStaticProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1959,
                          "end": 1973,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1961,
                            "end": 1973,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1961,
                              "end": 1973,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": "private"
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 1987,
                        "end": 2018,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1987,
                          "end": 2003,
                          "name": "myPublicProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2003,
                          "end": 2017,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2005,
                            "end": 2017,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2005,
                              "end": 2017,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 2031,
                        "end": 2071,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2039,
                          "end": 2056,
                          "name": "myPrivateProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2056,
                          "end": 2070,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2058,
                            "end": 2070,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2058,
                              "end": 2070,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
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
                  "start": 2091,
                  "end": 2364,
                  "id": {
                    "type": "Identifier",
                    "start": 2097,
                    "end": 2136,
                    "name": "privateClassWithWithPublicPropertyTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 2137,
                    "end": 2364,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 2151,
                        "end": 2194,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2158,
                          "end": 2180,
                          "name": "myPublicStaticProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2180,
                          "end": 2193,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2182,
                            "end": 2193,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2182,
                              "end": 2193,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 2207,
                        "end": 2259,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2222,
                          "end": 2245,
                          "name": "myPrivateStaticProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2245,
                          "end": 2258,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2247,
                            "end": 2258,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2247,
                              "end": 2258,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": "private"
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 2272,
                        "end": 2302,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2272,
                          "end": 2288,
                          "name": "myPublicProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2288,
                          "end": 2301,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2290,
                            "end": 2301,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2290,
                              "end": 2301,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 2315,
                        "end": 2354,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2323,
                          "end": 2340,
                          "name": "myPrivateProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2340,
                          "end": 2353,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2342,
                            "end": 2353,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2342,
                              "end": 2353,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
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
                  "start": 2374,
                  "end": 2433,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 2381,
                    "end": 2433,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2385,
                        "end": 2432,
                        "id": {
                          "type": "Identifier",
                          "start": 2385,
                          "end": 2432,
                          "name": "publicVarWithPrivatePropertyTypes",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2418,
                            "end": 2432,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2420,
                              "end": 2432,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2420,
                                "end": 2432,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 2442,
                  "end": 2499,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 2449,
                    "end": 2499,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2453,
                        "end": 2498,
                        "id": {
                          "type": "Identifier",
                          "start": 2453,
                          "end": 2498,
                          "name": "publicVarWithPublicPropertyTypes",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2485,
                            "end": 2498,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2487,
                              "end": 2498,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2487,
                                "end": 2498,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2508,
                  "end": 2561,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2512,
                      "end": 2560,
                      "id": {
                        "type": "Identifier",
                        "start": 2512,
                        "end": 2560,
                        "name": "privateVarWithPrivatePropertyTypes",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2546,
                          "end": 2560,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2548,
                            "end": 2560,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2548,
                              "end": 2560,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2570,
                  "end": 2621,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2574,
                      "end": 2620,
                      "id": {
                        "type": "Identifier",
                        "start": 2574,
                        "end": 2620,
                        "name": "privateVarWithPublicPropertyTypes",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2607,
                          "end": 2620,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2609,
                            "end": 2620,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2609,
                              "end": 2620,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 2631,
                  "end": 2705,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 2638,
                    "end": 2705,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2650,
                        "end": 2704,
                        "id": {
                          "type": "Identifier",
                          "start": 2650,
                          "end": 2704,
                          "name": "publicAmbientVarWithPrivatePropertyTypes",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2690,
                            "end": 2704,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2692,
                              "end": 2704,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2692,
                                "end": 2704,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": true
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 2714,
                  "end": 2786,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 2721,
                    "end": 2786,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2733,
                        "end": 2785,
                        "id": {
                          "type": "Identifier",
                          "start": 2733,
                          "end": 2785,
                          "name": "publicAmbientVarWithPublicPropertyTypes",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2772,
                            "end": 2785,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2774,
                              "end": 2785,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2774,
                                "end": 2785,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": true
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2795,
                  "end": 2863,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2807,
                      "end": 2862,
                      "id": {
                        "type": "Identifier",
                        "start": 2807,
                        "end": 2862,
                        "name": "privateAmbientVarWithPrivatePropertyTypes",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2848,
                          "end": 2862,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2850,
                            "end": 2862,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2850,
                              "end": 2862,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": true
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2872,
                  "end": 2938,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2884,
                      "end": 2937,
                      "id": {
                        "type": "Identifier",
                        "start": 2884,
                        "end": 2937,
                        "name": "privateAmbientVarWithPublicPropertyTypes",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2924,
                          "end": 2937,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2926,
                            "end": 2937,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2926,
                              "end": 2937,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": true
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 2948,
                  "end": 3073,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 2955,
                    "end": 3073,
                    "id": {
                      "type": "Identifier",
                      "start": 2965,
                      "end": 3010,
                      "name": "publicInterfaceWithPrivateModulePropertyTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 3011,
                      "end": 3073,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3025,
                          "end": 3063,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3025,
                            "end": 3035,
                            "name": "myProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3035,
                            "end": 3062,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3037,
                              "end": 3062,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 3037,
                                "end": 3062,
                                "left": {
                                  "type": "Identifier",
                                  "start": 3037,
                                  "end": 3050,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 3051,
                                  "end": 3062,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
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
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3082,
                  "end": 3275,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 3089,
                    "end": 3275,
                    "id": {
                      "type": "Identifier",
                      "start": 3095,
                      "end": 3136,
                      "name": "publicClassWithPrivateModulePropertyTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 3137,
                      "end": 3275,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 3151,
                          "end": 3208,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3158,
                            "end": 3180,
                            "name": "myPublicStaticProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3180,
                            "end": 3207,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3182,
                              "end": 3207,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 3182,
                                "end": 3207,
                                "left": {
                                  "type": "Identifier",
                                  "start": 3182,
                                  "end": 3195,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 3196,
                                  "end": 3207,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 3221,
                          "end": 3265,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3221,
                            "end": 3237,
                            "name": "myPublicProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": null,
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3237,
                            "end": 3264,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3239,
                              "end": 3264,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 3239,
                                "end": 3264,
                                "left": {
                                  "type": "Identifier",
                                  "start": 3239,
                                  "end": 3252,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 3253,
                                  "end": 3264,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null
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
                  "start": 3284,
                  "end": 3362,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 3291,
                    "end": 3362,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3295,
                        "end": 3361,
                        "id": {
                          "type": "Identifier",
                          "start": 3295,
                          "end": 3361,
                          "name": "publicVarWithPrivateModulePropertyTypes",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3334,
                            "end": 3361,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3336,
                              "end": 3361,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 3336,
                                "end": 3361,
                                "left": {
                                  "type": "Identifier",
                                  "start": 3336,
                                  "end": 3349,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 3350,
                                  "end": 3361,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3371,
                  "end": 3464,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 3378,
                    "end": 3464,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3390,
                        "end": 3463,
                        "id": {
                          "type": "Identifier",
                          "start": 3390,
                          "end": 3463,
                          "name": "publicAmbientVarWithPrivateModulePropertyTypes",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3436,
                            "end": 3463,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3438,
                              "end": 3463,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 3438,
                                "end": 3463,
                                "left": {
                                  "type": "Identifier",
                                  "start": 3438,
                                  "end": 3451,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 3452,
                                  "end": 3463,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": true
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 3474,
                  "end": 3593,
                  "id": {
                    "type": "Identifier",
                    "start": 3484,
                    "end": 3530,
                    "name": "privateInterfaceWithPrivateModulePropertyTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 3531,
                    "end": 3593,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3545,
                        "end": 3583,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3545,
                          "end": 3555,
                          "name": "myProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3555,
                          "end": 3582,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3557,
                            "end": 3582,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3557,
                              "end": 3582,
                              "left": {
                                "type": "Identifier",
                                "start": 3557,
                                "end": 3570,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3571,
                                "end": 3582,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
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
                  "type": "ClassDeclaration",
                  "start": 3602,
                  "end": 3789,
                  "id": {
                    "type": "Identifier",
                    "start": 3608,
                    "end": 3650,
                    "name": "privateClassWithPrivateModulePropertyTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 3651,
                    "end": 3789,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 3665,
                        "end": 3722,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3672,
                          "end": 3694,
                          "name": "myPublicStaticProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3694,
                          "end": 3721,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3696,
                            "end": 3721,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3696,
                              "end": 3721,
                              "left": {
                                "type": "Identifier",
                                "start": 3696,
                                "end": 3709,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3710,
                                "end": 3721,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 3735,
                        "end": 3779,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3735,
                          "end": 3751,
                          "name": "myPublicProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": null,
                        "decorators": [],
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3751,
                          "end": 3778,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3753,
                            "end": 3778,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3753,
                              "end": 3778,
                              "left": {
                                "type": "Identifier",
                                "start": 3753,
                                "end": 3766,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3767,
                                "end": 3778,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null
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
                  "type": "VariableDeclaration",
                  "start": 3798,
                  "end": 3870,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3802,
                      "end": 3869,
                      "id": {
                        "type": "Identifier",
                        "start": 3802,
                        "end": 3869,
                        "name": "privateVarWithPrivateModulePropertyTypes",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3842,
                          "end": 3869,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3844,
                            "end": 3869,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3844,
                              "end": 3869,
                              "left": {
                                "type": "Identifier",
                                "start": 3844,
                                "end": 3857,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3858,
                                "end": 3869,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3879,
                  "end": 3966,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3891,
                      "end": 3965,
                      "id": {
                        "type": "Identifier",
                        "start": 3891,
                        "end": 3965,
                        "name": "privateAmbientVarWithPrivateModulePropertyTypes",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3938,
                          "end": 3965,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3940,
                            "end": 3965,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3940,
                              "end": 3965,
                              "left": {
                                "type": "Identifier",
                                "start": 3940,
                                "end": 3953,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3954,
                                "end": 3965,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": true
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3978,
            "end": 4086,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 3985,
              "end": 4086,
              "id": {
                "type": "Identifier",
                "start": 3995,
                "end": 4034,
                "name": "publicInterfaceWithPrivatePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 4035,
                "end": 4086,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4045,
                    "end": 4070,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4045,
                      "end": 4055,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4055,
                      "end": 4069,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4057,
                        "end": 4069,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4057,
                          "end": 4069,
                          "name": "privateClass",
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4092,
            "end": 4188,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 4099,
              "end": 4188,
              "id": {
                "type": "Identifier",
                "start": 4109,
                "end": 4147,
                "name": "publicInterfaceWithPublicPropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 4148,
                "end": 4188,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4158,
                    "end": 4182,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4158,
                      "end": 4168,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4168,
                      "end": 4181,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4170,
                        "end": 4181,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4170,
                          "end": 4181,
                          "name": "publicClass",
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 4194,
            "end": 4286,
            "id": {
              "type": "Identifier",
              "start": 4204,
              "end": 4244,
              "name": "privateInterfaceWithPrivatePropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 4245,
              "end": 4286,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4255,
                  "end": 4280,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4255,
                    "end": 4265,
                    "name": "myProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4265,
                    "end": 4279,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4267,
                      "end": 4279,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4267,
                        "end": 4279,
                        "name": "privateClass",
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
            "type": "TSInterfaceDeclaration",
            "start": 4292,
            "end": 4382,
            "id": {
              "type": "Identifier",
              "start": 4302,
              "end": 4341,
              "name": "privateInterfaceWithPublicPropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 4342,
              "end": 4382,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 4352,
                  "end": 4376,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4352,
                    "end": 4362,
                    "name": "myProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4362,
                    "end": 4375,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4364,
                      "end": 4375,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4364,
                        "end": 4375,
                        "name": "publicClass",
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
            "type": "ExportNamedDeclaration",
            "start": 4388,
            "end": 4670,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 4395,
              "end": 4670,
              "id": {
                "type": "Identifier",
                "start": 4401,
                "end": 4440,
                "name": "publicClassWithWithPrivatePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 4441,
                "end": 4670,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 4451,
                    "end": 4495,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4458,
                      "end": 4480,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4480,
                      "end": 4494,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4482,
                        "end": 4494,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4482,
                          "end": 4494,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4513,
                    "end": 4566,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4528,
                      "end": 4551,
                      "name": "myPrivateStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4551,
                      "end": 4565,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4553,
                        "end": 4565,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4553,
                          "end": 4565,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4575,
                    "end": 4606,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4575,
                      "end": 4591,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4591,
                      "end": 4605,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4593,
                        "end": 4605,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4593,
                          "end": 4605,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4624,
                    "end": 4664,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4632,
                      "end": 4649,
                      "name": "myPrivateProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4649,
                      "end": 4663,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4651,
                        "end": 4663,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4651,
                          "end": 4663,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
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
            "start": 4676,
            "end": 4935,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 4683,
              "end": 4935,
              "id": {
                "type": "Identifier",
                "start": 4689,
                "end": 4727,
                "name": "publicClassWithWithPublicPropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 4728,
                "end": 4935,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 4738,
                    "end": 4781,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4745,
                      "end": 4767,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4767,
                      "end": 4780,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4769,
                        "end": 4780,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4769,
                          "end": 4780,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4790,
                    "end": 4842,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4805,
                      "end": 4828,
                      "name": "myPrivateStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4828,
                      "end": 4841,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4830,
                        "end": 4841,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4830,
                          "end": 4841,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4851,
                    "end": 4881,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4851,
                      "end": 4867,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4867,
                      "end": 4880,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4869,
                        "end": 4880,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4869,
                          "end": 4880,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 4890,
                    "end": 4929,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4898,
                      "end": 4915,
                      "name": "myPrivateProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4915,
                      "end": 4928,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4917,
                        "end": 4928,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4917,
                          "end": 4928,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
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
            "start": 4941,
            "end": 5199,
            "id": {
              "type": "Identifier",
              "start": 4947,
              "end": 4987,
              "name": "privateClassWithWithPrivatePropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 4988,
              "end": 5199,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 4998,
                  "end": 5042,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5005,
                    "end": 5027,
                    "name": "myPublicStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5027,
                    "end": 5041,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5029,
                      "end": 5041,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5029,
                        "end": 5041,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 5051,
                  "end": 5104,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5066,
                    "end": 5089,
                    "name": "myPrivateStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5089,
                    "end": 5103,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5091,
                      "end": 5103,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5091,
                        "end": 5103,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 5113,
                  "end": 5144,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5113,
                    "end": 5129,
                    "name": "myPublicProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5129,
                    "end": 5143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5131,
                      "end": 5143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5131,
                        "end": 5143,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 5153,
                  "end": 5193,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5161,
                    "end": 5178,
                    "name": "myPrivateProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5178,
                    "end": 5192,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5180,
                      "end": 5192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5180,
                        "end": 5192,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
            "start": 5205,
            "end": 5458,
            "id": {
              "type": "Identifier",
              "start": 5211,
              "end": 5250,
              "name": "privateClassWithWithPublicPropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 5251,
              "end": 5458,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 5261,
                  "end": 5304,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5268,
                    "end": 5290,
                    "name": "myPublicStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
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
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 5313,
                  "end": 5365,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5328,
                    "end": 5351,
                    "name": "myPrivateStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5351,
                    "end": 5364,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5353,
                      "end": 5364,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5353,
                        "end": 5364,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 5374,
                  "end": 5404,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5374,
                    "end": 5390,
                    "name": "myPublicProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5390,
                    "end": 5403,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5392,
                      "end": 5403,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5392,
                        "end": 5403,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 5413,
                  "end": 5452,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5421,
                    "end": 5438,
                    "name": "myPrivateProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5438,
                    "end": 5451,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5440,
                      "end": 5451,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5440,
                        "end": 5451,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
            "start": 5464,
            "end": 5523,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5471,
              "end": 5523,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5475,
                  "end": 5522,
                  "id": {
                    "type": "Identifier",
                    "start": 5475,
                    "end": 5522,
                    "name": "publicVarWithPrivatePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5508,
                      "end": 5522,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5510,
                        "end": 5522,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5510,
                          "end": 5522,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5537,
            "end": 5594,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5544,
              "end": 5594,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5548,
                  "end": 5593,
                  "id": {
                    "type": "Identifier",
                    "start": 5548,
                    "end": 5593,
                    "name": "publicVarWithPublicPropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5580,
                      "end": 5593,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5582,
                        "end": 5593,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5582,
                          "end": 5593,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 5599,
            "end": 5652,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5603,
                "end": 5651,
                "id": {
                  "type": "Identifier",
                  "start": 5603,
                  "end": 5651,
                  "name": "privateVarWithPrivatePropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5637,
                    "end": 5651,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5639,
                      "end": 5651,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5639,
                        "end": 5651,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 5657,
            "end": 5708,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5661,
                "end": 5707,
                "id": {
                  "type": "Identifier",
                  "start": 5661,
                  "end": 5707,
                  "name": "privateVarWithPublicPropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5694,
                    "end": 5707,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5696,
                      "end": 5707,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5696,
                        "end": 5707,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5714,
            "end": 5788,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5721,
              "end": 5788,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5733,
                  "end": 5787,
                  "id": {
                    "type": "Identifier",
                    "start": 5733,
                    "end": 5787,
                    "name": "publicAmbientVarWithPrivatePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5773,
                      "end": 5787,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5775,
                        "end": 5787,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5775,
                          "end": 5787,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5802,
            "end": 5874,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5809,
              "end": 5874,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5821,
                  "end": 5873,
                  "id": {
                    "type": "Identifier",
                    "start": 5821,
                    "end": 5873,
                    "name": "publicAmbientVarWithPublicPropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5860,
                      "end": 5873,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5862,
                        "end": 5873,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5862,
                          "end": 5873,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "VariableDeclaration",
            "start": 5879,
            "end": 5947,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5891,
                "end": 5946,
                "id": {
                  "type": "Identifier",
                  "start": 5891,
                  "end": 5946,
                  "name": "privateAmbientVarWithPrivatePropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5932,
                    "end": 5946,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5934,
                      "end": 5946,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5934,
                        "end": 5946,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
          },
          {
            "type": "VariableDeclaration",
            "start": 5952,
            "end": 6018,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5964,
                "end": 6017,
                "id": {
                  "type": "Identifier",
                  "start": 5964,
                  "end": 6017,
                  "name": "privateAmbientVarWithPublicPropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6004,
                    "end": 6017,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6006,
                      "end": 6017,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6006,
                        "end": 6017,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6024,
            "end": 6150,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 6031,
              "end": 6150,
              "id": {
                "type": "Identifier",
                "start": 6041,
                "end": 6086,
                "name": "publicInterfaceWithPrivateModulePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 6087,
                "end": 6150,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 6097,
                    "end": 6135,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6097,
                      "end": 6107,
                      "name": "myProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6107,
                      "end": 6134,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6109,
                        "end": 6134,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6109,
                          "end": 6134,
                          "left": {
                            "type": "Identifier",
                            "start": 6109,
                            "end": 6122,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6123,
                            "end": 6134,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6155,
            "end": 6354,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 6162,
              "end": 6354,
              "id": {
                "type": "Identifier",
                "start": 6168,
                "end": 6209,
                "name": "publicClassWithPrivateModulePropertyTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 6210,
                "end": 6354,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 6220,
                    "end": 6277,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6227,
                      "end": 6249,
                      "name": "myPublicStaticProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6249,
                      "end": 6276,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6251,
                        "end": 6276,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6251,
                          "end": 6276,
                          "left": {
                            "type": "Identifier",
                            "start": 6251,
                            "end": 6264,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6265,
                            "end": 6276,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 6295,
                    "end": 6339,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6295,
                      "end": 6311,
                      "name": "myPublicProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6311,
                      "end": 6338,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6313,
                        "end": 6338,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6313,
                          "end": 6338,
                          "left": {
                            "type": "Identifier",
                            "start": 6313,
                            "end": 6326,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6327,
                            "end": 6338,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null
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
            "start": 6359,
            "end": 6437,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6366,
              "end": 6437,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6370,
                  "end": 6436,
                  "id": {
                    "type": "Identifier",
                    "start": 6370,
                    "end": 6436,
                    "name": "publicVarWithPrivateModulePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6409,
                      "end": 6436,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6411,
                        "end": 6436,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6411,
                          "end": 6436,
                          "left": {
                            "type": "Identifier",
                            "start": 6411,
                            "end": 6424,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6425,
                            "end": 6436,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6451,
            "end": 6544,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 6458,
              "end": 6544,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 6470,
                  "end": 6543,
                  "id": {
                    "type": "Identifier",
                    "start": 6470,
                    "end": 6543,
                    "name": "publicAmbientVarWithPrivateModulePropertyTypes",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6516,
                      "end": 6543,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6518,
                        "end": 6543,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 6518,
                          "end": 6543,
                          "left": {
                            "type": "Identifier",
                            "start": 6518,
                            "end": 6531,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 6532,
                            "end": 6543,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 6559,
            "end": 6670,
            "id": {
              "type": "Identifier",
              "start": 6569,
              "end": 6615,
              "name": "privateInterfaceWithPrivateModulePropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 6616,
              "end": 6670,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 6626,
                  "end": 6664,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6626,
                    "end": 6636,
                    "name": "myProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6636,
                    "end": 6663,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6638,
                      "end": 6663,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 6638,
                        "end": 6663,
                        "left": {
                          "type": "Identifier",
                          "start": 6638,
                          "end": 6651,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 6652,
                          "end": 6663,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
            "type": "ClassDeclaration",
            "start": 6675,
            "end": 6850,
            "id": {
              "type": "Identifier",
              "start": 6681,
              "end": 6723,
              "name": "privateClassWithPrivateModulePropertyTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 6724,
              "end": 6850,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 6734,
                  "end": 6791,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6741,
                    "end": 6763,
                    "name": "myPublicStaticProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6763,
                    "end": 6790,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6765,
                      "end": 6790,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 6765,
                        "end": 6790,
                        "left": {
                          "type": "Identifier",
                          "start": 6765,
                          "end": 6778,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 6779,
                          "end": 6790,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 6800,
                  "end": 6844,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6800,
                    "end": 6816,
                    "name": "myPublicProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6816,
                    "end": 6843,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6818,
                      "end": 6843,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 6818,
                        "end": 6843,
                        "left": {
                          "type": "Identifier",
                          "start": 6818,
                          "end": 6831,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 6832,
                          "end": 6843,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
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
            "type": "VariableDeclaration",
            "start": 6855,
            "end": 6927,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6859,
                "end": 6926,
                "id": {
                  "type": "Identifier",
                  "start": 6859,
                  "end": 6926,
                  "name": "privateVarWithPrivateModulePropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6899,
                    "end": 6926,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6901,
                      "end": 6926,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 6901,
                        "end": 6926,
                        "left": {
                          "type": "Identifier",
                          "start": 6901,
                          "end": 6914,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 6915,
                          "end": 6926,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 6932,
            "end": 7019,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6944,
                "end": 7018,
                "id": {
                  "type": "Identifier",
                  "start": 6944,
                  "end": 7018,
                  "name": "privateAmbientVarWithPrivateModulePropertyTypes",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6991,
                    "end": 7018,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6993,
                      "end": 7018,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 6993,
                        "end": 7018,
                        "left": {
                          "type": "Identifier",
                          "start": 6993,
                          "end": 7006,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 7007,
                          "end": 7018,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
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
