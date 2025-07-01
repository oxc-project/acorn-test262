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
          "name": "publicInterfaceWithPrivatePropertyTypes",
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
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 127
              },
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
              "accessibility": null,
              "static": false,
              "start": 117,
              "end": 142
            }
          ],
          "start": 111,
          "end": 154
        },
        "declare": false,
        "start": 61,
        "end": 154
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 154
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicPropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 211
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
                "name": "myProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 228
              },
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
                    "start": 230,
                    "end": 241
                  },
                  "typeArguments": null,
                  "start": 230,
                  "end": 241
                },
                "start": 228,
                "end": 241
              },
              "accessibility": null,
              "static": false,
              "start": 218,
              "end": 242
            }
          ],
          "start": 212,
          "end": 244
        },
        "declare": false,
        "start": 163,
        "end": 244
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 156,
      "end": 244
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivatePropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 296
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
              "name": "myProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 313
            },
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
                  "start": 315,
                  "end": 327
                },
                "typeArguments": null,
                "start": 315,
                "end": 327
              },
              "start": 313,
              "end": 327
            },
            "accessibility": null,
            "static": false,
            "start": 303,
            "end": 328
          }
        ],
        "start": 297,
        "end": 330
      },
      "declare": false,
      "start": 246,
      "end": 330
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicPropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 381
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
              "name": "myProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 398
            },
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
                  "start": 400,
                  "end": 411
                },
                "typeArguments": null,
                "start": 400,
                "end": 411
              },
              "start": 398,
              "end": 411
            },
            "accessibility": null,
            "static": false,
            "start": 388,
            "end": 412
          }
        ],
        "start": 382,
        "end": 414
      },
      "declare": false,
      "start": 332,
      "end": 414
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivatePropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 429,
          "end": 468
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 504
              },
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
                    "start": 506,
                    "end": 518
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 518
                },
                "start": 504,
                "end": 518
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 475,
              "end": 519
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 571
              },
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
                    "start": 573,
                    "end": 585
                  },
                  "typeArguments": null,
                  "start": 573,
                  "end": 585
                },
                "start": 571,
                "end": 585
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 533,
              "end": 586
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 607
              },
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
                    "start": 609,
                    "end": 621
                  },
                  "typeArguments": null,
                  "start": 609,
                  "end": 621
                },
                "start": 607,
                "end": 621
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 591,
              "end": 622
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 661
              },
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
                    "start": 663,
                    "end": 675
                  },
                  "typeArguments": null,
                  "start": 663,
                  "end": 675
                },
                "start": 661,
                "end": 675
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 636,
              "end": 676
            }
          ],
          "start": 469,
          "end": 678
        },
        "abstract": false,
        "declare": false,
        "start": 423,
        "end": 678
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 416,
      "end": 678
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicPropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 731
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 767
              },
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
                    "start": 769,
                    "end": 780
                  },
                  "typeArguments": null,
                  "start": 769,
                  "end": 780
                },
                "start": 767,
                "end": 780
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 738,
              "end": 781
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 824
              },
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
                    "start": 826,
                    "end": 837
                  },
                  "typeArguments": null,
                  "start": 826,
                  "end": 837
                },
                "start": 824,
                "end": 837
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 786,
              "end": 838
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 843,
                "end": 859
              },
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
                    "start": 861,
                    "end": 872
                  },
                  "typeArguments": null,
                  "start": 861,
                  "end": 872
                },
                "start": 859,
                "end": 872
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 843,
              "end": 873
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 886,
                "end": 903
              },
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
                    "start": 905,
                    "end": 916
                  },
                  "typeArguments": null,
                  "start": 905,
                  "end": 916
                },
                "start": 903,
                "end": 916
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 878,
              "end": 917
            }
          ],
          "start": 732,
          "end": 919
        },
        "abstract": false,
        "declare": false,
        "start": 687,
        "end": 919
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 680,
      "end": 919
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivatePropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 927,
        "end": 967
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 1003
            },
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
                  "start": 1005,
                  "end": 1017
                },
                "typeArguments": null,
                "start": 1005,
                "end": 1017
              },
              "start": 1003,
              "end": 1017
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 974,
            "end": 1018
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1038,
              "end": 1061
            },
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
                  "start": 1063,
                  "end": 1075
                },
                "typeArguments": null,
                "start": 1063,
                "end": 1075
              },
              "start": 1061,
              "end": 1075
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1023,
            "end": 1076
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1097
            },
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
                  "start": 1099,
                  "end": 1111
                },
                "typeArguments": null,
                "start": 1099,
                "end": 1111
              },
              "start": 1097,
              "end": 1111
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1081,
            "end": 1112
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1125,
              "end": 1142
            },
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
                  "start": 1144,
                  "end": 1156
                },
                "typeArguments": null,
                "start": 1144,
                "end": 1156
              },
              "start": 1142,
              "end": 1156
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1117,
            "end": 1157
          }
        ],
        "start": 968,
        "end": 1159
      },
      "abstract": false,
      "declare": false,
      "start": 921,
      "end": 1159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicPropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1167,
        "end": 1206
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1242
            },
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
                  "start": 1244,
                  "end": 1255
                },
                "typeArguments": null,
                "start": 1244,
                "end": 1255
              },
              "start": 1242,
              "end": 1255
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1213,
            "end": 1256
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1299
            },
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
                  "start": 1301,
                  "end": 1312
                },
                "typeArguments": null,
                "start": 1301,
                "end": 1312
              },
              "start": 1299,
              "end": 1312
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1261,
            "end": 1313
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1334
            },
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
                  "start": 1336,
                  "end": 1347
                },
                "typeArguments": null,
                "start": 1336,
                "end": 1347
              },
              "start": 1334,
              "end": 1347
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1318,
            "end": 1348
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 1361,
              "end": 1378
            },
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
                  "start": 1380,
                  "end": 1391
                },
                "typeArguments": null,
                "start": 1380,
                "end": 1391
              },
              "start": 1378,
              "end": 1391
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1353,
            "end": 1392
          }
        ],
        "start": 1207,
        "end": 1394
      },
      "abstract": false,
      "declare": false,
      "start": 1161,
      "end": 1394
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicVarWithPrivatePropertyTypes",
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
                    "start": 1442,
                    "end": 1454
                  },
                  "typeArguments": null,
                  "start": 1442,
                  "end": 1454
                },
                "start": 1440,
                "end": 1454
              },
              "start": 1407,
              "end": 1454
            },
            "init": null,
            "definite": false,
            "start": 1407,
            "end": 1454
          }
        ],
        "declare": false,
        "start": 1403,
        "end": 1455
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1396,
      "end": 1455
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicVarWithPublicPropertyTypes",
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
                    "start": 1510,
                    "end": 1521
                  },
                  "typeArguments": null,
                  "start": 1510,
                  "end": 1521
                },
                "start": 1508,
                "end": 1521
              },
              "start": 1476,
              "end": 1521
            },
            "init": null,
            "definite": false,
            "start": 1476,
            "end": 1521
          }
        ],
        "declare": false,
        "start": 1472,
        "end": 1522
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1465,
      "end": 1522
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
            "name": "privateVarWithPrivatePropertyTypes",
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
                  "start": 1563,
                  "end": 1575
                },
                "typeArguments": null,
                "start": 1563,
                "end": 1575
              },
              "start": 1561,
              "end": 1575
            },
            "start": 1527,
            "end": 1575
          },
          "init": null,
          "definite": false,
          "start": 1527,
          "end": 1575
        }
      ],
      "declare": false,
      "start": 1523,
      "end": 1576
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
            "name": "privateVarWithPublicPropertyTypes",
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
                  "start": 1616,
                  "end": 1627
                },
                "typeArguments": null,
                "start": 1616,
                "end": 1627
              },
              "start": 1614,
              "end": 1627
            },
            "start": 1581,
            "end": 1627
          },
          "init": null,
          "definite": false,
          "start": 1581,
          "end": 1627
        }
      ],
      "declare": false,
      "start": 1577,
      "end": 1628
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicAmbientVarWithPrivatePropertyTypes",
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
                    "start": 1691,
                    "end": 1703
                  },
                  "typeArguments": null,
                  "start": 1691,
                  "end": 1703
                },
                "start": 1689,
                "end": 1703
              },
              "start": 1649,
              "end": 1703
            },
            "init": null,
            "definite": false,
            "start": 1649,
            "end": 1703
          }
        ],
        "declare": true,
        "start": 1637,
        "end": 1704
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1630,
      "end": 1704
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicAmbientVarWithPublicPropertyTypes",
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
                    "start": 1774,
                    "end": 1785
                  },
                  "typeArguments": null,
                  "start": 1774,
                  "end": 1785
                },
                "start": 1772,
                "end": 1785
              },
              "start": 1733,
              "end": 1785
            },
            "init": null,
            "definite": false,
            "start": 1733,
            "end": 1785
          }
        ],
        "declare": true,
        "start": 1721,
        "end": 1786
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1714,
      "end": 1786
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
            "name": "privateAmbientVarWithPrivatePropertyTypes",
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
                  "start": 1842,
                  "end": 1854
                },
                "typeArguments": null,
                "start": 1842,
                "end": 1854
              },
              "start": 1840,
              "end": 1854
            },
            "start": 1799,
            "end": 1854
          },
          "init": null,
          "definite": false,
          "start": 1799,
          "end": 1854
        }
      ],
      "declare": true,
      "start": 1787,
      "end": 1855
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
            "name": "privateAmbientVarWithPublicPropertyTypes",
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
                  "start": 1910,
                  "end": 1921
                },
                "typeArguments": null,
                "start": 1910,
                "end": 1921
              },
              "start": 1908,
              "end": 1921
            },
            "start": 1868,
            "end": 1921
          },
          "init": null,
          "definite": false,
          "start": 1868,
          "end": 1921
        }
      ],
      "declare": true,
      "start": 1856,
      "end": 1922
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateModulePropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1941,
          "end": 1986
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
                "name": "myProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 1993,
                "end": 2003
              },
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
                      "start": 2005,
                      "end": 2018
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2019,
                      "end": 2030
                    },
                    "start": 2005,
                    "end": 2030
                  },
                  "typeArguments": null,
                  "start": 2005,
                  "end": 2030
                },
                "start": 2003,
                "end": 2030
              },
              "accessibility": null,
              "static": false,
              "start": 1993,
              "end": 2031
            }
          ],
          "start": 1987,
          "end": 2042
        },
        "declare": false,
        "start": 1931,
        "end": 2042
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1924,
      "end": 2042
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateModulePropertyTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 2056,
          "end": 2097
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 2111,
                "end": 2133
              },
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
                      "start": 2135,
                      "end": 2148
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2149,
                      "end": 2160
                    },
                    "start": 2135,
                    "end": 2160
                  },
                  "typeArguments": null,
                  "start": 2135,
                  "end": 2160
                },
                "start": 2133,
                "end": 2160
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2104,
              "end": 2161
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 2175,
                "end": 2191
              },
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
                      "start": 2193,
                      "end": 2206
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2207,
                      "end": 2218
                    },
                    "start": 2193,
                    "end": 2218
                  },
                  "typeArguments": null,
                  "start": 2193,
                  "end": 2218
                },
                "start": 2191,
                "end": 2218
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2175,
              "end": 2219
            }
          ],
          "start": 2098,
          "end": 2230
        },
        "abstract": false,
        "declare": false,
        "start": 2050,
        "end": 2230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2043,
      "end": 2230
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicVarWithPrivateModulePropertyTypes",
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
                      "start": 2283,
                      "end": 2296
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2297,
                      "end": 2308
                    },
                    "start": 2283,
                    "end": 2308
                  },
                  "typeArguments": null,
                  "start": 2283,
                  "end": 2308
                },
                "start": 2281,
                "end": 2308
              },
              "start": 2242,
              "end": 2308
            },
            "init": null,
            "definite": false,
            "start": 2242,
            "end": 2308
          }
        ],
        "declare": false,
        "start": 2238,
        "end": 2309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2231,
      "end": 2309
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                      "start": 2386,
                      "end": 2399
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2400,
                      "end": 2411
                    },
                    "start": 2386,
                    "end": 2411
                  },
                  "typeArguments": null,
                  "start": 2386,
                  "end": 2411
                },
                "start": 2384,
                "end": 2411
              },
              "start": 2338,
              "end": 2411
            },
            "init": null,
            "definite": false,
            "start": 2338,
            "end": 2411
          }
        ],
        "declare": true,
        "start": 2326,
        "end": 2412
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2319,
      "end": 2412
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateModulePropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2433,
        "end": 2479
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
              "name": "myProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 2486,
              "end": 2496
            },
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
                    "start": 2498,
                    "end": 2511
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2512,
                    "end": 2523
                  },
                  "start": 2498,
                  "end": 2523
                },
                "typeArguments": null,
                "start": 2498,
                "end": 2523
              },
              "start": 2496,
              "end": 2523
            },
            "accessibility": null,
            "static": false,
            "start": 2486,
            "end": 2524
          }
        ],
        "start": 2480,
        "end": 2526
      },
      "declare": false,
      "start": 2423,
      "end": 2526
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateModulePropertyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2533,
        "end": 2575
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 2589,
              "end": 2611
            },
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
                    "start": 2613,
                    "end": 2626
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2627,
                    "end": 2638
                  },
                  "start": 2613,
                  "end": 2638
                },
                "typeArguments": null,
                "start": 2613,
                "end": 2638
              },
              "start": 2611,
              "end": 2638
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2582,
            "end": 2639
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 2644,
              "end": 2660
            },
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
                    "start": 2662,
                    "end": 2675
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2676,
                    "end": 2687
                  },
                  "start": 2662,
                  "end": 2687
                },
                "typeArguments": null,
                "start": 2662,
                "end": 2687
              },
              "start": 2660,
              "end": 2687
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2644,
            "end": 2688
          }
        ],
        "start": 2576,
        "end": 2690
      },
      "abstract": false,
      "declare": false,
      "start": 2527,
      "end": 2690
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
            "name": "privateVarWithPrivateModulePropertyTypes",
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
                    "start": 2737,
                    "end": 2750
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2751,
                    "end": 2762
                  },
                  "start": 2737,
                  "end": 2762
                },
                "typeArguments": null,
                "start": 2737,
                "end": 2762
              },
              "start": 2735,
              "end": 2762
            },
            "start": 2695,
            "end": 2762
          },
          "init": null,
          "definite": false,
          "start": 2695,
          "end": 2762
        }
      ],
      "declare": false,
      "start": 2691,
      "end": 2763
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
            "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                    "start": 2825,
                    "end": 2838
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2839,
                    "end": 2850
                  },
                  "start": 2825,
                  "end": 2850
                },
                "typeArguments": null,
                "start": 2825,
                "end": 2850
              },
              "start": 2823,
              "end": 2850
            },
            "start": 2776,
            "end": 2850
          },
          "init": null,
          "definite": false,
          "start": 2776,
          "end": 2850
        }
      ],
      "declare": true,
      "start": 2764,
      "end": 2851
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
          "start": 2867,
          "end": 2879
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
                "start": 2892,
                "end": 2904
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2905,
                "end": 2912
              },
              "abstract": false,
              "declare": false,
              "start": 2886,
              "end": 2912
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
                  "start": 2931,
                  "end": 2942
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2943,
                  "end": 2950
                },
                "abstract": false,
                "declare": false,
                "start": 2925,
                "end": 2950
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2918,
              "end": 2950
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2973,
                  "end": 3012
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
                        "name": "myProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3023,
                        "end": 3033
                      },
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
                            "start": 3035,
                            "end": 3047
                          },
                          "typeArguments": null,
                          "start": 3035,
                          "end": 3047
                        },
                        "start": 3033,
                        "end": 3047
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3023,
                      "end": 3048
                    }
                  ],
                  "start": 3013,
                  "end": 3064
                },
                "declare": false,
                "start": 2963,
                "end": 3064
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 2956,
              "end": 3064
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3087,
                  "end": 3125
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
                        "name": "myProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3136,
                        "end": 3146
                      },
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
                            "start": 3148,
                            "end": 3159
                          },
                          "typeArguments": null,
                          "start": 3148,
                          "end": 3159
                        },
                        "start": 3146,
                        "end": 3159
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3136,
                      "end": 3160
                    }
                  ],
                  "start": 3126,
                  "end": 3166
                },
                "declare": false,
                "start": 3077,
                "end": 3166
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3070,
              "end": 3166
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3182,
                "end": 3222
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3233,
                      "end": 3243
                    },
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
                          "start": 3245,
                          "end": 3257
                        },
                        "typeArguments": null,
                        "start": 3245,
                        "end": 3257
                      },
                      "start": 3243,
                      "end": 3257
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3233,
                    "end": 3258
                  }
                ],
                "start": 3223,
                "end": 3264
              },
              "declare": false,
              "start": 3172,
              "end": 3264
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3280,
                "end": 3319
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3330,
                      "end": 3340
                    },
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
                          "start": 3342,
                          "end": 3353
                        },
                        "typeArguments": null,
                        "start": 3342,
                        "end": 3353
                      },
                      "start": 3340,
                      "end": 3353
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3330,
                    "end": 3354
                  }
                ],
                "start": 3320,
                "end": 3360
              },
              "declare": false,
              "start": 3270,
              "end": 3360
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivatePropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3379,
                  "end": 3418
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3436,
                        "end": 3458
                      },
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
                            "start": 3460,
                            "end": 3472
                          },
                          "typeArguments": null,
                          "start": 3460,
                          "end": 3472
                        },
                        "start": 3458,
                        "end": 3472
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 3429,
                      "end": 3473
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3506,
                        "end": 3529
                      },
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
                            "start": 3531,
                            "end": 3543
                          },
                          "typeArguments": null,
                          "start": 3531,
                          "end": 3543
                        },
                        "start": 3529,
                        "end": 3543
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 3491,
                      "end": 3544
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3553,
                        "end": 3569
                      },
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
                            "start": 3571,
                            "end": 3583
                          },
                          "typeArguments": null,
                          "start": 3571,
                          "end": 3583
                        },
                        "start": 3569,
                        "end": 3583
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 3553,
                      "end": 3584
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3610,
                        "end": 3627
                      },
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
                            "start": 3629,
                            "end": 3641
                          },
                          "typeArguments": null,
                          "start": 3629,
                          "end": 3641
                        },
                        "start": 3627,
                        "end": 3641
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 3602,
                      "end": 3642
                    }
                  ],
                  "start": 3419,
                  "end": 3648
                },
                "abstract": false,
                "declare": false,
                "start": 3373,
                "end": 3648
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3366,
              "end": 3648
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicPropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3667,
                  "end": 3705
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3723,
                        "end": 3745
                      },
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
                            "start": 3747,
                            "end": 3758
                          },
                          "typeArguments": null,
                          "start": 3747,
                          "end": 3758
                        },
                        "start": 3745,
                        "end": 3758
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 3716,
                      "end": 3759
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3783,
                        "end": 3806
                      },
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
                            "start": 3808,
                            "end": 3819
                          },
                          "typeArguments": null,
                          "start": 3808,
                          "end": 3819
                        },
                        "start": 3806,
                        "end": 3819
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 3768,
                      "end": 3820
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3829,
                        "end": 3845
                      },
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
                            "start": 3847,
                            "end": 3858
                          },
                          "typeArguments": null,
                          "start": 3847,
                          "end": 3858
                        },
                        "start": 3845,
                        "end": 3858
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 3829,
                      "end": 3859
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3876,
                        "end": 3893
                      },
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
                            "start": 3895,
                            "end": 3906
                          },
                          "typeArguments": null,
                          "start": 3895,
                          "end": 3906
                        },
                        "start": 3893,
                        "end": 3906
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 3868,
                      "end": 3907
                    }
                  ],
                  "start": 3706,
                  "end": 3913
                },
                "abstract": false,
                "declare": false,
                "start": 3661,
                "end": 3913
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3654,
              "end": 3913
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3925,
                "end": 3965
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3983,
                      "end": 4005
                    },
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
                          "start": 4007,
                          "end": 4019
                        },
                        "typeArguments": null,
                        "start": 4007,
                        "end": 4019
                      },
                      "start": 4005,
                      "end": 4019
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 3976,
                    "end": 4020
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4044,
                      "end": 4067
                    },
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
                          "start": 4069,
                          "end": 4081
                        },
                        "typeArguments": null,
                        "start": 4069,
                        "end": 4081
                      },
                      "start": 4067,
                      "end": 4081
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4029,
                    "end": 4082
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4091,
                      "end": 4107
                    },
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
                          "start": 4109,
                          "end": 4121
                        },
                        "typeArguments": null,
                        "start": 4109,
                        "end": 4121
                      },
                      "start": 4107,
                      "end": 4121
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4091,
                    "end": 4122
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4139,
                      "end": 4156
                    },
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
                          "start": 4158,
                          "end": 4170
                        },
                        "typeArguments": null,
                        "start": 4158,
                        "end": 4170
                      },
                      "start": 4156,
                      "end": 4170
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4131,
                    "end": 4171
                  }
                ],
                "start": 3966,
                "end": 4177
              },
              "abstract": false,
              "declare": false,
              "start": 3919,
              "end": 4177
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4189,
                "end": 4228
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4246,
                      "end": 4268
                    },
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
                          "start": 4270,
                          "end": 4281
                        },
                        "typeArguments": null,
                        "start": 4270,
                        "end": 4281
                      },
                      "start": 4268,
                      "end": 4281
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4239,
                    "end": 4282
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4306,
                      "end": 4329
                    },
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
                          "start": 4331,
                          "end": 4342
                        },
                        "typeArguments": null,
                        "start": 4331,
                        "end": 4342
                      },
                      "start": 4329,
                      "end": 4342
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4291,
                    "end": 4343
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4352,
                      "end": 4368
                    },
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
                          "start": 4370,
                          "end": 4381
                        },
                        "typeArguments": null,
                        "start": 4370,
                        "end": 4381
                      },
                      "start": 4368,
                      "end": 4381
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4352,
                    "end": 4382
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4399,
                      "end": 4416
                    },
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
                          "start": 4418,
                          "end": 4429
                        },
                        "typeArguments": null,
                        "start": 4418,
                        "end": 4429
                      },
                      "start": 4416,
                      "end": 4429
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4391,
                    "end": 4430
                  }
                ],
                "start": 4229,
                "end": 4436
              },
              "abstract": false,
              "declare": false,
              "start": 4183,
              "end": 4436
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicVarWithPrivatePropertyTypes",
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
                            "start": 4488,
                            "end": 4500
                          },
                          "typeArguments": null,
                          "start": 4488,
                          "end": 4500
                        },
                        "start": 4486,
                        "end": 4500
                      },
                      "start": 4453,
                      "end": 4500
                    },
                    "init": null,
                    "definite": false,
                    "start": 4453,
                    "end": 4500
                  }
                ],
                "declare": false,
                "start": 4449,
                "end": 4501
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 4442,
              "end": 4501
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicVarWithPublicPropertyTypes",
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
                            "start": 4560,
                            "end": 4571
                          },
                          "typeArguments": null,
                          "start": 4560,
                          "end": 4571
                        },
                        "start": 4558,
                        "end": 4571
                      },
                      "start": 4526,
                      "end": 4571
                    },
                    "init": null,
                    "definite": false,
                    "start": 4526,
                    "end": 4571
                  }
                ],
                "declare": false,
                "start": 4522,
                "end": 4572
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 4515,
              "end": 4572
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
                    "name": "privateVarWithPrivatePropertyTypes",
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
                          "start": 4617,
                          "end": 4629
                        },
                        "typeArguments": null,
                        "start": 4617,
                        "end": 4629
                      },
                      "start": 4615,
                      "end": 4629
                    },
                    "start": 4581,
                    "end": 4629
                  },
                  "init": null,
                  "definite": false,
                  "start": 4581,
                  "end": 4629
                }
              ],
              "declare": false,
              "start": 4577,
              "end": 4630
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
                    "name": "privateVarWithPublicPropertyTypes",
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
                          "start": 4674,
                          "end": 4685
                        },
                        "typeArguments": null,
                        "start": 4674,
                        "end": 4685
                      },
                      "start": 4672,
                      "end": 4685
                    },
                    "start": 4639,
                    "end": 4685
                  },
                  "init": null,
                  "definite": false,
                  "start": 4639,
                  "end": 4685
                }
              ],
              "declare": false,
              "start": 4635,
              "end": 4686
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicAmbientVarWithPrivatePropertyTypes",
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
                            "start": 4753,
                            "end": 4765
                          },
                          "typeArguments": null,
                          "start": 4753,
                          "end": 4765
                        },
                        "start": 4751,
                        "end": 4765
                      },
                      "start": 4711,
                      "end": 4765
                    },
                    "init": null,
                    "definite": false,
                    "start": 4711,
                    "end": 4765
                  }
                ],
                "declare": true,
                "start": 4699,
                "end": 4766
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4692,
              "end": 4766
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicAmbientVarWithPublicPropertyTypes",
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
                            "start": 4840,
                            "end": 4851
                          },
                          "typeArguments": null,
                          "start": 4840,
                          "end": 4851
                        },
                        "start": 4838,
                        "end": 4851
                      },
                      "start": 4799,
                      "end": 4851
                    },
                    "init": null,
                    "definite": false,
                    "start": 4799,
                    "end": 4851
                  }
                ],
                "declare": true,
                "start": 4787,
                "end": 4852
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4780,
              "end": 4852
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
                    "name": "privateAmbientVarWithPrivatePropertyTypes",
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
                    "start": 4869,
                    "end": 4924
                  },
                  "init": null,
                  "definite": false,
                  "start": 4869,
                  "end": 4924
                }
              ],
              "declare": true,
              "start": 4857,
              "end": 4925
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
                    "name": "privateAmbientVarWithPublicPropertyTypes",
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
                          "start": 4984,
                          "end": 4995
                        },
                        "typeArguments": null,
                        "start": 4984,
                        "end": 4995
                      },
                      "start": 4982,
                      "end": 4995
                    },
                    "start": 4942,
                    "end": 4995
                  },
                  "init": null,
                  "definite": false,
                  "start": 4942,
                  "end": 4995
                }
              ],
              "declare": true,
              "start": 4930,
              "end": 4996
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateModulePropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5019,
                  "end": 5064
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
                        "name": "myProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5075,
                        "end": 5085
                      },
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
                              "start": 5087,
                              "end": 5100
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5101,
                              "end": 5112
                            },
                            "start": 5087,
                            "end": 5112
                          },
                          "typeArguments": null,
                          "start": 5087,
                          "end": 5112
                        },
                        "start": 5085,
                        "end": 5112
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5075,
                      "end": 5113
                    }
                  ],
                  "start": 5065,
                  "end": 5128
                },
                "declare": false,
                "start": 5009,
                "end": 5128
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 5002,
              "end": 5128
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPrivateModulePropertyTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5146,
                  "end": 5187
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5205,
                        "end": 5227
                      },
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
                              "start": 5229,
                              "end": 5242
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5243,
                              "end": 5254
                            },
                            "start": 5229,
                            "end": 5254
                          },
                          "typeArguments": null,
                          "start": 5229,
                          "end": 5254
                        },
                        "start": 5227,
                        "end": 5254
                      },
                      "value": null,
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 5198,
                      "end": 5255
                    },
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5273,
                        "end": 5289
                      },
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
                              "start": 5291,
                              "end": 5304
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5305,
                              "end": 5316
                            },
                            "start": 5291,
                            "end": 5316
                          },
                          "typeArguments": null,
                          "start": 5291,
                          "end": 5316
                        },
                        "start": 5289,
                        "end": 5316
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 5273,
                      "end": 5317
                    }
                  ],
                  "start": 5188,
                  "end": 5332
                },
                "abstract": false,
                "declare": false,
                "start": 5140,
                "end": 5332
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5133,
              "end": 5332
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicVarWithPrivateModulePropertyTypes",
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
                              "start": 5389,
                              "end": 5402
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5403,
                              "end": 5414
                            },
                            "start": 5389,
                            "end": 5414
                          },
                          "typeArguments": null,
                          "start": 5389,
                          "end": 5414
                        },
                        "start": 5387,
                        "end": 5414
                      },
                      "start": 5348,
                      "end": 5414
                    },
                    "init": null,
                    "definite": false,
                    "start": 5348,
                    "end": 5414
                  }
                ],
                "declare": false,
                "start": 5344,
                "end": 5415
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5337,
              "end": 5415
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                              "start": 5496,
                              "end": 5509
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5510,
                              "end": 5521
                            },
                            "start": 5496,
                            "end": 5521
                          },
                          "typeArguments": null,
                          "start": 5496,
                          "end": 5521
                        },
                        "start": 5494,
                        "end": 5521
                      },
                      "start": 5448,
                      "end": 5521
                    },
                    "init": null,
                    "definite": false,
                    "start": 5448,
                    "end": 5521
                  }
                ],
                "declare": true,
                "start": 5436,
                "end": 5522
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 5429,
              "end": 5522
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5547,
                "end": 5593
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5604,
                      "end": 5614
                    },
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
                            "start": 5616,
                            "end": 5629
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5630,
                            "end": 5641
                          },
                          "start": 5616,
                          "end": 5641
                        },
                        "typeArguments": null,
                        "start": 5616,
                        "end": 5641
                      },
                      "start": 5614,
                      "end": 5641
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5604,
                    "end": 5642
                  }
                ],
                "start": 5594,
                "end": 5648
              },
              "declare": false,
              "start": 5537,
              "end": 5648
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 5659,
                "end": 5701
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5719,
                      "end": 5741
                    },
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
                            "start": 5743,
                            "end": 5756
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5757,
                            "end": 5768
                          },
                          "start": 5743,
                          "end": 5768
                        },
                        "typeArguments": null,
                        "start": 5743,
                        "end": 5768
                      },
                      "start": 5741,
                      "end": 5768
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 5712,
                    "end": 5769
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5778,
                      "end": 5794
                    },
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
                            "start": 5796,
                            "end": 5809
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5810,
                            "end": 5821
                          },
                          "start": 5796,
                          "end": 5821
                        },
                        "typeArguments": null,
                        "start": 5796,
                        "end": 5821
                      },
                      "start": 5794,
                      "end": 5821
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 5778,
                    "end": 5822
                  }
                ],
                "start": 5702,
                "end": 5828
              },
              "abstract": false,
              "declare": false,
              "start": 5653,
              "end": 5828
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
                    "name": "privateVarWithPrivateModulePropertyTypes",
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
                            "start": 5879,
                            "end": 5892
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5893,
                            "end": 5904
                          },
                          "start": 5879,
                          "end": 5904
                        },
                        "typeArguments": null,
                        "start": 5879,
                        "end": 5904
                      },
                      "start": 5877,
                      "end": 5904
                    },
                    "start": 5837,
                    "end": 5904
                  },
                  "init": null,
                  "definite": false,
                  "start": 5837,
                  "end": 5904
                }
              ],
              "declare": false,
              "start": 5833,
              "end": 5905
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
                    "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                            "start": 5971,
                            "end": 5984
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5985,
                            "end": 5996
                          },
                          "start": 5971,
                          "end": 5996
                        },
                        "typeArguments": null,
                        "start": 5971,
                        "end": 5996
                      },
                      "start": 5969,
                      "end": 5996
                    },
                    "start": 5922,
                    "end": 5996
                  },
                  "init": null,
                  "definite": false,
                  "start": 5922,
                  "end": 5996
                }
              ],
              "declare": true,
              "start": 5910,
              "end": 5997
            }
          ],
          "start": 2880,
          "end": 5999
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 2860,
        "end": 5999
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2853,
      "end": 5999
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 6008,
        "end": 6021
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
              "start": 6034,
              "end": 6046
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 6047,
              "end": 6054
            },
            "abstract": false,
            "declare": false,
            "start": 6028,
            "end": 6054
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
                "start": 6073,
                "end": 6084
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 6085,
                "end": 6092
              },
              "abstract": false,
              "declare": false,
              "start": 6067,
              "end": 6092
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6060,
            "end": 6092
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6115,
                "end": 6154
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6165,
                      "end": 6175
                    },
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
                          "start": 6177,
                          "end": 6189
                        },
                        "typeArguments": null,
                        "start": 6177,
                        "end": 6189
                      },
                      "start": 6175,
                      "end": 6189
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 6165,
                    "end": 6190
                  }
                ],
                "start": 6155,
                "end": 6198
              },
              "declare": false,
              "start": 6105,
              "end": 6198
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6098,
            "end": 6198
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6221,
                "end": 6259
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6270,
                      "end": 6280
                    },
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
                          "start": 6282,
                          "end": 6293
                        },
                        "typeArguments": null,
                        "start": 6282,
                        "end": 6293
                      },
                      "start": 6280,
                      "end": 6293
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 6270,
                    "end": 6294
                  }
                ],
                "start": 6260,
                "end": 6300
              },
              "declare": false,
              "start": 6211,
              "end": 6300
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6204,
            "end": 6300
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6316,
              "end": 6356
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6367,
                    "end": 6377
                  },
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
                        "start": 6379,
                        "end": 6391
                      },
                      "typeArguments": null,
                      "start": 6379,
                      "end": 6391
                    },
                    "start": 6377,
                    "end": 6391
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6367,
                  "end": 6392
                }
              ],
              "start": 6357,
              "end": 6398
            },
            "declare": false,
            "start": 6306,
            "end": 6398
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6414,
              "end": 6453
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6464,
                    "end": 6474
                  },
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
                        "start": 6476,
                        "end": 6487
                      },
                      "typeArguments": null,
                      "start": 6476,
                      "end": 6487
                    },
                    "start": 6474,
                    "end": 6487
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6464,
                  "end": 6488
                }
              ],
              "start": 6454,
              "end": 6494
            },
            "declare": false,
            "start": 6404,
            "end": 6494
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6513,
                "end": 6552
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6570,
                      "end": 6592
                    },
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
                          "start": 6594,
                          "end": 6606
                        },
                        "typeArguments": null,
                        "start": 6594,
                        "end": 6606
                      },
                      "start": 6592,
                      "end": 6606
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6563,
                    "end": 6607
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6632,
                      "end": 6655
                    },
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
                          "start": 6657,
                          "end": 6669
                        },
                        "typeArguments": null,
                        "start": 6657,
                        "end": 6669
                      },
                      "start": 6655,
                      "end": 6669
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 6617,
                    "end": 6670
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6679,
                      "end": 6695
                    },
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
                          "start": 6697,
                          "end": 6709
                        },
                        "typeArguments": null,
                        "start": 6697,
                        "end": 6709
                      },
                      "start": 6695,
                      "end": 6709
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6679,
                    "end": 6710
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6728,
                      "end": 6745
                    },
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
                          "start": 6747,
                          "end": 6759
                        },
                        "typeArguments": null,
                        "start": 6747,
                        "end": 6759
                      },
                      "start": 6745,
                      "end": 6759
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 6720,
                    "end": 6760
                  }
                ],
                "start": 6553,
                "end": 6766
              },
              "abstract": false,
              "declare": false,
              "start": 6507,
              "end": 6766
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6500,
            "end": 6766
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6785,
                "end": 6823
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6841,
                      "end": 6863
                    },
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
                          "start": 6865,
                          "end": 6876
                        },
                        "typeArguments": null,
                        "start": 6865,
                        "end": 6876
                      },
                      "start": 6863,
                      "end": 6876
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6834,
                    "end": 6877
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6901,
                      "end": 6924
                    },
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
                          "start": 6926,
                          "end": 6937
                        },
                        "typeArguments": null,
                        "start": 6926,
                        "end": 6937
                      },
                      "start": 6924,
                      "end": 6937
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 6886,
                    "end": 6938
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6947,
                      "end": 6963
                    },
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
                          "start": 6965,
                          "end": 6976
                        },
                        "typeArguments": null,
                        "start": 6965,
                        "end": 6976
                      },
                      "start": 6963,
                      "end": 6976
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6947,
                    "end": 6977
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6994,
                      "end": 7011
                    },
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
                          "start": 7013,
                          "end": 7024
                        },
                        "typeArguments": null,
                        "start": 7013,
                        "end": 7024
                      },
                      "start": 7011,
                      "end": 7024
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 6986,
                    "end": 7025
                  }
                ],
                "start": 6824,
                "end": 7031
              },
              "abstract": false,
              "declare": false,
              "start": 6779,
              "end": 7031
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6772,
            "end": 7031
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 7043,
              "end": 7083
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7101,
                    "end": 7123
                  },
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
                        "start": 7125,
                        "end": 7137
                      },
                      "typeArguments": null,
                      "start": 7125,
                      "end": 7137
                    },
                    "start": 7123,
                    "end": 7137
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 7094,
                  "end": 7138
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7162,
                    "end": 7185
                  },
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
                        "start": 7187,
                        "end": 7199
                      },
                      "typeArguments": null,
                      "start": 7187,
                      "end": 7199
                    },
                    "start": 7185,
                    "end": 7199
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 7147,
                  "end": 7200
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7209,
                    "end": 7225
                  },
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
                        "start": 7227,
                        "end": 7239
                      },
                      "typeArguments": null,
                      "start": 7227,
                      "end": 7239
                    },
                    "start": 7225,
                    "end": 7239
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 7209,
                  "end": 7240
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7257,
                    "end": 7274
                  },
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
                        "start": 7276,
                        "end": 7288
                      },
                      "typeArguments": null,
                      "start": 7276,
                      "end": 7288
                    },
                    "start": 7274,
                    "end": 7288
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 7249,
                  "end": 7289
                }
              ],
              "start": 7084,
              "end": 7295
            },
            "abstract": false,
            "declare": false,
            "start": 7037,
            "end": 7295
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 7307,
              "end": 7346
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7364,
                    "end": 7386
                  },
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
                        "start": 7388,
                        "end": 7399
                      },
                      "typeArguments": null,
                      "start": 7388,
                      "end": 7399
                    },
                    "start": 7386,
                    "end": 7399
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 7357,
                  "end": 7400
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7424,
                    "end": 7447
                  },
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
                        "start": 7449,
                        "end": 7460
                      },
                      "typeArguments": null,
                      "start": 7449,
                      "end": 7460
                    },
                    "start": 7447,
                    "end": 7460
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 7409,
                  "end": 7461
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7470,
                    "end": 7486
                  },
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
                        "start": 7488,
                        "end": 7499
                      },
                      "typeArguments": null,
                      "start": 7488,
                      "end": 7499
                    },
                    "start": 7486,
                    "end": 7499
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 7470,
                  "end": 7500
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7517,
                    "end": 7534
                  },
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
                        "start": 7536,
                        "end": 7547
                      },
                      "typeArguments": null,
                      "start": 7536,
                      "end": 7547
                    },
                    "start": 7534,
                    "end": 7547
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 7509,
                  "end": 7548
                }
              ],
              "start": 7347,
              "end": 7554
            },
            "abstract": false,
            "declare": false,
            "start": 7301,
            "end": 7554
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicVarWithPrivatePropertyTypes",
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
                          "start": 7606,
                          "end": 7618
                        },
                        "typeArguments": null,
                        "start": 7606,
                        "end": 7618
                      },
                      "start": 7604,
                      "end": 7618
                    },
                    "start": 7571,
                    "end": 7618
                  },
                  "init": null,
                  "definite": false,
                  "start": 7571,
                  "end": 7618
                }
              ],
              "declare": false,
              "start": 7567,
              "end": 7619
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7560,
            "end": 7619
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicVarWithPublicPropertyTypes",
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
                          "start": 7670,
                          "end": 7681
                        },
                        "typeArguments": null,
                        "start": 7670,
                        "end": 7681
                      },
                      "start": 7668,
                      "end": 7681
                    },
                    "start": 7636,
                    "end": 7681
                  },
                  "init": null,
                  "definite": false,
                  "start": 7636,
                  "end": 7681
                }
              ],
              "declare": false,
              "start": 7632,
              "end": 7682
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7625,
            "end": 7682
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
                  "name": "privateVarWithPrivatePropertyTypes",
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
                        "start": 7727,
                        "end": 7739
                      },
                      "typeArguments": null,
                      "start": 7727,
                      "end": 7739
                    },
                    "start": 7725,
                    "end": 7739
                  },
                  "start": 7691,
                  "end": 7739
                },
                "init": null,
                "definite": false,
                "start": 7691,
                "end": 7739
              }
            ],
            "declare": false,
            "start": 7687,
            "end": 7740
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
                  "name": "privateVarWithPublicPropertyTypes",
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
                        "start": 7784,
                        "end": 7795
                      },
                      "typeArguments": null,
                      "start": 7784,
                      "end": 7795
                    },
                    "start": 7782,
                    "end": 7795
                  },
                  "start": 7749,
                  "end": 7795
                },
                "init": null,
                "definite": false,
                "start": 7749,
                "end": 7795
              }
            ],
            "declare": false,
            "start": 7745,
            "end": 7796
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicAmbientVarWithPrivatePropertyTypes",
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
                          "start": 7863,
                          "end": 7875
                        },
                        "typeArguments": null,
                        "start": 7863,
                        "end": 7875
                      },
                      "start": 7861,
                      "end": 7875
                    },
                    "start": 7821,
                    "end": 7875
                  },
                  "init": null,
                  "definite": false,
                  "start": 7821,
                  "end": 7875
                }
              ],
              "declare": true,
              "start": 7809,
              "end": 7876
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 7802,
            "end": 7876
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicAmbientVarWithPublicPropertyTypes",
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
                          "start": 7942,
                          "end": 7953
                        },
                        "typeArguments": null,
                        "start": 7942,
                        "end": 7953
                      },
                      "start": 7940,
                      "end": 7953
                    },
                    "start": 7901,
                    "end": 7953
                  },
                  "init": null,
                  "definite": false,
                  "start": 7901,
                  "end": 7953
                }
              ],
              "declare": true,
              "start": 7889,
              "end": 7954
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 7882,
            "end": 7954
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
                  "name": "privateAmbientVarWithPrivatePropertyTypes",
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
                        "start": 8014,
                        "end": 8026
                      },
                      "typeArguments": null,
                      "start": 8014,
                      "end": 8026
                    },
                    "start": 8012,
                    "end": 8026
                  },
                  "start": 7971,
                  "end": 8026
                },
                "init": null,
                "definite": false,
                "start": 7971,
                "end": 8026
              }
            ],
            "declare": true,
            "start": 7959,
            "end": 8027
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
                  "name": "privateAmbientVarWithPublicPropertyTypes",
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
                  "start": 8044,
                  "end": 8097
                },
                "init": null,
                "definite": false,
                "start": 8044,
                "end": 8097
              }
            ],
            "declare": true,
            "start": 8032,
            "end": 8098
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8121,
                "end": 8166
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8177,
                      "end": 8187
                    },
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
                            "start": 8189,
                            "end": 8202
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8203,
                            "end": 8214
                          },
                          "start": 8189,
                          "end": 8214
                        },
                        "typeArguments": null,
                        "start": 8189,
                        "end": 8214
                      },
                      "start": 8187,
                      "end": 8214
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8177,
                    "end": 8215
                  }
                ],
                "start": 8167,
                "end": 8222
              },
              "declare": false,
              "start": 8111,
              "end": 8222
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 8104,
            "end": 8222
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8240,
                "end": 8281
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8299,
                      "end": 8321
                    },
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
                            "start": 8323,
                            "end": 8336
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8337,
                            "end": 8348
                          },
                          "start": 8323,
                          "end": 8348
                        },
                        "typeArguments": null,
                        "start": 8323,
                        "end": 8348
                      },
                      "start": 8321,
                      "end": 8348
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 8292,
                    "end": 8349
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8359,
                      "end": 8375
                    },
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
                            "start": 8377,
                            "end": 8390
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8391,
                            "end": 8402
                          },
                          "start": 8377,
                          "end": 8402
                        },
                        "typeArguments": null,
                        "start": 8377,
                        "end": 8402
                      },
                      "start": 8375,
                      "end": 8402
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 8359,
                    "end": 8403
                  }
                ],
                "start": 8282,
                "end": 8410
              },
              "abstract": false,
              "declare": false,
              "start": 8234,
              "end": 8410
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8227,
            "end": 8410
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicVarWithPrivateModulePropertyTypes",
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
                            "start": 8467,
                            "end": 8480
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8481,
                            "end": 8492
                          },
                          "start": 8467,
                          "end": 8492
                        },
                        "typeArguments": null,
                        "start": 8467,
                        "end": 8492
                      },
                      "start": 8465,
                      "end": 8492
                    },
                    "start": 8426,
                    "end": 8492
                  },
                  "init": null,
                  "definite": false,
                  "start": 8426,
                  "end": 8492
                }
              ],
              "declare": false,
              "start": 8422,
              "end": 8493
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8415,
            "end": 8493
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                            "start": 8566,
                            "end": 8579
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8580,
                            "end": 8591
                          },
                          "start": 8566,
                          "end": 8591
                        },
                        "typeArguments": null,
                        "start": 8566,
                        "end": 8591
                      },
                      "start": 8564,
                      "end": 8591
                    },
                    "start": 8518,
                    "end": 8591
                  },
                  "init": null,
                  "definite": false,
                  "start": 8518,
                  "end": 8591
                }
              ],
              "declare": true,
              "start": 8506,
              "end": 8592
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 8499,
            "end": 8592
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 8608,
              "end": 8654
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8665,
                    "end": 8675
                  },
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
                          "start": 8677,
                          "end": 8690
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8691,
                          "end": 8702
                        },
                        "start": 8677,
                        "end": 8702
                      },
                      "typeArguments": null,
                      "start": 8677,
                      "end": 8702
                    },
                    "start": 8675,
                    "end": 8702
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 8665,
                  "end": 8703
                }
              ],
              "start": 8655,
              "end": 8709
            },
            "declare": false,
            "start": 8598,
            "end": 8709
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 8720,
              "end": 8762
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8780,
                    "end": 8802
                  },
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
                          "start": 8804,
                          "end": 8817
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8818,
                          "end": 8829
                        },
                        "start": 8804,
                        "end": 8829
                      },
                      "typeArguments": null,
                      "start": 8804,
                      "end": 8829
                    },
                    "start": 8802,
                    "end": 8829
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 8773,
                  "end": 8830
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8839,
                    "end": 8855
                  },
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
                          "start": 8857,
                          "end": 8870
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8871,
                          "end": 8882
                        },
                        "start": 8857,
                        "end": 8882
                      },
                      "typeArguments": null,
                      "start": 8857,
                      "end": 8882
                    },
                    "start": 8855,
                    "end": 8882
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 8839,
                  "end": 8883
                }
              ],
              "start": 8763,
              "end": 8889
            },
            "abstract": false,
            "declare": false,
            "start": 8714,
            "end": 8889
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
                  "name": "privateVarWithPrivateModulePropertyTypes",
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
                          "start": 8940,
                          "end": 8953
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8954,
                          "end": 8965
                        },
                        "start": 8940,
                        "end": 8965
                      },
                      "typeArguments": null,
                      "start": 8940,
                      "end": 8965
                    },
                    "start": 8938,
                    "end": 8965
                  },
                  "start": 8898,
                  "end": 8965
                },
                "init": null,
                "definite": false,
                "start": 8898,
                "end": 8965
              }
            ],
            "declare": false,
            "start": 8894,
            "end": 8966
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
                  "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                          "start": 9032,
                          "end": 9045
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9046,
                          "end": 9057
                        },
                        "start": 9032,
                        "end": 9057
                      },
                      "typeArguments": null,
                      "start": 9032,
                      "end": 9057
                    },
                    "start": 9030,
                    "end": 9057
                  },
                  "start": 8983,
                  "end": 9057
                },
                "init": null,
                "definite": false,
                "start": 8983,
                "end": 9057
              }
            ],
            "declare": true,
            "start": 8971,
            "end": 9058
          }
        ],
        "start": 6022,
        "end": 9060
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 6001,
      "end": 9060
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9061
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
        "name": "publicInterfaceWithPublicPropertyTypesInGlobal",
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
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 103
            },
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
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 125
          }
        ],
        "start": 87,
        "end": 127
      },
      "declare": false,
      "start": 30,
      "end": 127
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassWithWithPublicPropertyTypesInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 180
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 216
            },
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
                  "start": 218,
                  "end": 237
                },
                "typeArguments": null,
                "start": 218,
                "end": 237
              },
              "start": 216,
              "end": 237
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 187,
            "end": 238
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 281
            },
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
                  "start": 283,
                  "end": 302
                },
                "typeArguments": null,
                "start": 283,
                "end": 302
              },
              "start": 281,
              "end": 302
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 243,
            "end": 303
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 324
            },
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
                  "start": 326,
                  "end": 345
                },
                "typeArguments": null,
                "start": 326,
                "end": 345
              },
              "start": 324,
              "end": 345
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 308,
            "end": 346
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 376
            },
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
                  "start": 378,
                  "end": 397
                },
                "typeArguments": null,
                "start": 378,
                "end": 397
              },
              "start": 376,
              "end": 397
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 351,
            "end": 398
          }
        ],
        "start": 181,
        "end": 400
      },
      "abstract": false,
      "declare": false,
      "start": 128,
      "end": 400
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
            "name": "publicVarWithPublicPropertyTypesInGlobal",
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
                  "start": 447,
                  "end": 466
                },
                "typeArguments": null,
                "start": 447,
                "end": 466
              },
              "start": 445,
              "end": 466
            },
            "start": 405,
            "end": 466
          },
          "init": null,
          "definite": false,
          "start": 405,
          "end": 466
        }
      ],
      "declare": false,
      "start": 401,
      "end": 467
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
            "name": "publicAmbientVarWithPublicPropertyTypesInGlobal",
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
                  "start": 529,
                  "end": 548
                },
                "typeArguments": null,
                "start": 529,
                "end": 548
              },
              "start": 527,
              "end": 548
            },
            "start": 480,
            "end": 548
          },
          "init": null,
          "definite": false,
          "start": 480,
          "end": 548
        }
      ],
      "declare": true,
      "start": 468,
      "end": 549
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 578
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
              "start": 591,
              "end": 603
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 604,
              "end": 611
            },
            "abstract": false,
            "declare": false,
            "start": 585,
            "end": 611
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
                "start": 630,
                "end": 641
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 642,
                "end": 649
              },
              "abstract": false,
              "declare": false,
              "start": 624,
              "end": 649
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 617,
            "end": 649
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 675
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
                    "start": 692,
                    "end": 704
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 705,
                    "end": 716
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 686,
                  "end": 716
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
                      "start": 739,
                      "end": 750
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 751,
                      "end": 762
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 733,
                    "end": 762
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 726,
                  "end": 762
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPrivatePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 789,
                      "end": 828
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
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 843,
                            "end": 853
                          },
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
                                "start": 855,
                                "end": 867
                              },
                              "typeArguments": null,
                              "start": 855,
                              "end": 867
                            },
                            "start": 853,
                            "end": 867
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 843,
                          "end": 868
                        }
                      ],
                      "start": 829,
                      "end": 878
                    },
                    "declare": false,
                    "start": 779,
                    "end": 878
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 772,
                  "end": 878
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPublicPropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 905,
                      "end": 943
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
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 958,
                            "end": 968
                          },
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
                                "start": 970,
                                "end": 981
                              },
                              "typeArguments": null,
                              "start": 970,
                              "end": 981
                            },
                            "start": 968,
                            "end": 981
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 958,
                          "end": 982
                        }
                      ],
                      "start": 944,
                      "end": 992
                    },
                    "declare": false,
                    "start": 895,
                    "end": 992
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 888,
                  "end": 992
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1012,
                    "end": 1052
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
                          "name": "myProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1067,
                          "end": 1077
                        },
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
                              "start": 1079,
                              "end": 1091
                            },
                            "typeArguments": null,
                            "start": 1079,
                            "end": 1091
                          },
                          "start": 1077,
                          "end": 1091
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1067,
                        "end": 1092
                      }
                    ],
                    "start": 1053,
                    "end": 1102
                  },
                  "declare": false,
                  "start": 1002,
                  "end": 1102
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1122,
                    "end": 1161
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
                          "name": "myProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1176,
                          "end": 1186
                        },
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
                              "start": 1188,
                              "end": 1199
                            },
                            "typeArguments": null,
                            "start": 1188,
                            "end": 1199
                          },
                          "start": 1186,
                          "end": 1199
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1176,
                        "end": 1200
                      }
                    ],
                    "start": 1162,
                    "end": 1210
                  },
                  "declare": false,
                  "start": 1112,
                  "end": 1210
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPrivatePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1233,
                      "end": 1272
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1294,
                            "end": 1316
                          },
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
                                "start": 1318,
                                "end": 1330
                              },
                              "typeArguments": null,
                              "start": 1318,
                              "end": 1330
                            },
                            "start": 1316,
                            "end": 1330
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1287,
                          "end": 1331
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1359,
                            "end": 1382
                          },
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
                                "start": 1384,
                                "end": 1396
                              },
                              "typeArguments": null,
                              "start": 1384,
                              "end": 1396
                            },
                            "start": 1382,
                            "end": 1396
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 1344,
                          "end": 1397
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1410,
                            "end": 1426
                          },
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
                                "start": 1428,
                                "end": 1440
                              },
                              "typeArguments": null,
                              "start": 1428,
                              "end": 1440
                            },
                            "start": 1426,
                            "end": 1440
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1410,
                          "end": 1441
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1462,
                            "end": 1479
                          },
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
                                "start": 1481,
                                "end": 1493
                              },
                              "typeArguments": null,
                              "start": 1481,
                              "end": 1493
                            },
                            "start": 1479,
                            "end": 1493
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 1454,
                          "end": 1494
                        }
                      ],
                      "start": 1273,
                      "end": 1504
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1227,
                    "end": 1504
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1220,
                  "end": 1504
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPublicPropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1527,
                      "end": 1565
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1609
                          },
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
                                "start": 1611,
                                "end": 1622
                              },
                              "typeArguments": null,
                              "start": 1611,
                              "end": 1622
                            },
                            "start": 1609,
                            "end": 1622
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1580,
                          "end": 1623
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1651,
                            "end": 1674
                          },
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
                                "start": 1676,
                                "end": 1687
                              },
                              "typeArguments": null,
                              "start": 1676,
                              "end": 1687
                            },
                            "start": 1674,
                            "end": 1687
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 1636,
                          "end": 1688
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1701,
                            "end": 1717
                          },
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
                                "start": 1719,
                                "end": 1730
                              },
                              "typeArguments": null,
                              "start": 1719,
                              "end": 1730
                            },
                            "start": 1717,
                            "end": 1730
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1701,
                          "end": 1731
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1752,
                            "end": 1769
                          },
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
                                "start": 1771,
                                "end": 1782
                              },
                              "typeArguments": null,
                              "start": 1771,
                              "end": 1782
                            },
                            "start": 1769,
                            "end": 1782
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 1744,
                          "end": 1783
                        }
                      ],
                      "start": 1566,
                      "end": 1793
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1521,
                    "end": 1793
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1514,
                  "end": 1793
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPrivatePropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1849
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1871,
                          "end": 1893
                        },
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
                              "start": 1895,
                              "end": 1907
                            },
                            "typeArguments": null,
                            "start": 1895,
                            "end": 1907
                          },
                          "start": 1893,
                          "end": 1907
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 1864,
                        "end": 1908
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1936,
                          "end": 1959
                        },
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
                              "start": 1961,
                              "end": 1973
                            },
                            "typeArguments": null,
                            "start": 1961,
                            "end": 1973
                          },
                          "start": 1959,
                          "end": 1973
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "private",
                        "start": 1921,
                        "end": 1974
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1987,
                          "end": 2003
                        },
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
                              "start": 2005,
                              "end": 2017
                            },
                            "typeArguments": null,
                            "start": 2005,
                            "end": 2017
                          },
                          "start": 2003,
                          "end": 2017
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 1987,
                        "end": 2018
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2039,
                          "end": 2056
                        },
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
                              "start": 2058,
                              "end": 2070
                            },
                            "typeArguments": null,
                            "start": 2058,
                            "end": 2070
                          },
                          "start": 2056,
                          "end": 2070
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "private",
                        "start": 2031,
                        "end": 2071
                      }
                    ],
                    "start": 1850,
                    "end": 2081
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 1803,
                  "end": 2081
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPublicPropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2097,
                    "end": 2136
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2158,
                          "end": 2180
                        },
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
                              "start": 2182,
                              "end": 2193
                            },
                            "typeArguments": null,
                            "start": 2182,
                            "end": 2193
                          },
                          "start": 2180,
                          "end": 2193
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 2151,
                        "end": 2194
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2222,
                          "end": 2245
                        },
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
                              "start": 2247,
                              "end": 2258
                            },
                            "typeArguments": null,
                            "start": 2247,
                            "end": 2258
                          },
                          "start": 2245,
                          "end": 2258
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "private",
                        "start": 2207,
                        "end": 2259
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2272,
                          "end": 2288
                        },
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
                              "start": 2290,
                              "end": 2301
                            },
                            "typeArguments": null,
                            "start": 2290,
                            "end": 2301
                          },
                          "start": 2288,
                          "end": 2301
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 2272,
                        "end": 2302
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2323,
                          "end": 2340
                        },
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
                              "start": 2342,
                              "end": 2353
                            },
                            "typeArguments": null,
                            "start": 2342,
                            "end": 2353
                          },
                          "start": 2340,
                          "end": 2353
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "private",
                        "start": 2315,
                        "end": 2354
                      }
                    ],
                    "start": 2137,
                    "end": 2364
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 2091,
                  "end": 2364
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicVarWithPrivatePropertyTypes",
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
                                "start": 2420,
                                "end": 2432
                              },
                              "typeArguments": null,
                              "start": 2420,
                              "end": 2432
                            },
                            "start": 2418,
                            "end": 2432
                          },
                          "start": 2385,
                          "end": 2432
                        },
                        "init": null,
                        "definite": false,
                        "start": 2385,
                        "end": 2432
                      }
                    ],
                    "declare": false,
                    "start": 2381,
                    "end": 2433
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2374,
                  "end": 2433
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicVarWithPublicPropertyTypes",
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
                                "start": 2487,
                                "end": 2498
                              },
                              "typeArguments": null,
                              "start": 2487,
                              "end": 2498
                            },
                            "start": 2485,
                            "end": 2498
                          },
                          "start": 2453,
                          "end": 2498
                        },
                        "init": null,
                        "definite": false,
                        "start": 2453,
                        "end": 2498
                      }
                    ],
                    "declare": false,
                    "start": 2449,
                    "end": 2499
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2442,
                  "end": 2499
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
                        "name": "privateVarWithPrivatePropertyTypes",
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
                              "start": 2548,
                              "end": 2560
                            },
                            "typeArguments": null,
                            "start": 2548,
                            "end": 2560
                          },
                          "start": 2546,
                          "end": 2560
                        },
                        "start": 2512,
                        "end": 2560
                      },
                      "init": null,
                      "definite": false,
                      "start": 2512,
                      "end": 2560
                    }
                  ],
                  "declare": false,
                  "start": 2508,
                  "end": 2561
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
                        "name": "privateVarWithPublicPropertyTypes",
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
                              "start": 2609,
                              "end": 2620
                            },
                            "typeArguments": null,
                            "start": 2609,
                            "end": 2620
                          },
                          "start": 2607,
                          "end": 2620
                        },
                        "start": 2574,
                        "end": 2620
                      },
                      "init": null,
                      "definite": false,
                      "start": 2574,
                      "end": 2620
                    }
                  ],
                  "declare": false,
                  "start": 2570,
                  "end": 2621
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicAmbientVarWithPrivatePropertyTypes",
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
                                "start": 2692,
                                "end": 2704
                              },
                              "typeArguments": null,
                              "start": 2692,
                              "end": 2704
                            },
                            "start": 2690,
                            "end": 2704
                          },
                          "start": 2650,
                          "end": 2704
                        },
                        "init": null,
                        "definite": false,
                        "start": 2650,
                        "end": 2704
                      }
                    ],
                    "declare": true,
                    "start": 2638,
                    "end": 2705
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 2631,
                  "end": 2705
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicAmbientVarWithPublicPropertyTypes",
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
                                "start": 2774,
                                "end": 2785
                              },
                              "typeArguments": null,
                              "start": 2774,
                              "end": 2785
                            },
                            "start": 2772,
                            "end": 2785
                          },
                          "start": 2733,
                          "end": 2785
                        },
                        "init": null,
                        "definite": false,
                        "start": 2733,
                        "end": 2785
                      }
                    ],
                    "declare": true,
                    "start": 2721,
                    "end": 2786
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 2714,
                  "end": 2786
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
                        "name": "privateAmbientVarWithPrivatePropertyTypes",
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
                              "start": 2850,
                              "end": 2862
                            },
                            "typeArguments": null,
                            "start": 2850,
                            "end": 2862
                          },
                          "start": 2848,
                          "end": 2862
                        },
                        "start": 2807,
                        "end": 2862
                      },
                      "init": null,
                      "definite": false,
                      "start": 2807,
                      "end": 2862
                    }
                  ],
                  "declare": true,
                  "start": 2795,
                  "end": 2863
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
                        "name": "privateAmbientVarWithPublicPropertyTypes",
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
                              "start": 2926,
                              "end": 2937
                            },
                            "typeArguments": null,
                            "start": 2926,
                            "end": 2937
                          },
                          "start": 2924,
                          "end": 2937
                        },
                        "start": 2884,
                        "end": 2937
                      },
                      "init": null,
                      "definite": false,
                      "start": 2884,
                      "end": 2937
                    }
                  ],
                  "declare": true,
                  "start": 2872,
                  "end": 2938
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceWithPrivateModulePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2965,
                      "end": 3010
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
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3025,
                            "end": 3035
                          },
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
                                  "start": 3037,
                                  "end": 3050
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3051,
                                  "end": 3062
                                },
                                "start": 3037,
                                "end": 3062
                              },
                              "typeArguments": null,
                              "start": 3037,
                              "end": 3062
                            },
                            "start": 3035,
                            "end": 3062
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3025,
                          "end": 3063
                        }
                      ],
                      "start": 3011,
                      "end": 3073
                    },
                    "declare": false,
                    "start": 2955,
                    "end": 3073
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 2948,
                  "end": 3073
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithPrivateModulePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3095,
                      "end": 3136
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3158,
                            "end": 3180
                          },
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
                                  "start": 3182,
                                  "end": 3195
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3196,
                                  "end": 3207
                                },
                                "start": 3182,
                                "end": 3207
                              },
                              "typeArguments": null,
                              "start": 3182,
                              "end": 3207
                            },
                            "start": 3180,
                            "end": 3207
                          },
                          "value": null,
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 3151,
                          "end": 3208
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3221,
                            "end": 3237
                          },
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
                                  "start": 3239,
                                  "end": 3252
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3253,
                                  "end": 3264
                                },
                                "start": 3239,
                                "end": 3264
                              },
                              "typeArguments": null,
                              "start": 3239,
                              "end": 3264
                            },
                            "start": 3237,
                            "end": 3264
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 3221,
                          "end": 3265
                        }
                      ],
                      "start": 3137,
                      "end": 3275
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3089,
                    "end": 3275
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3082,
                  "end": 3275
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicVarWithPrivateModulePropertyTypes",
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
                                  "start": 3336,
                                  "end": 3349
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3350,
                                  "end": 3361
                                },
                                "start": 3336,
                                "end": 3361
                              },
                              "typeArguments": null,
                              "start": 3336,
                              "end": 3361
                            },
                            "start": 3334,
                            "end": 3361
                          },
                          "start": 3295,
                          "end": 3361
                        },
                        "init": null,
                        "definite": false,
                        "start": 3295,
                        "end": 3361
                      }
                    ],
                    "declare": false,
                    "start": 3291,
                    "end": 3362
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3284,
                  "end": 3362
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                                  "start": 3438,
                                  "end": 3451
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3452,
                                  "end": 3463
                                },
                                "start": 3438,
                                "end": 3463
                              },
                              "typeArguments": null,
                              "start": 3438,
                              "end": 3463
                            },
                            "start": 3436,
                            "end": 3463
                          },
                          "start": 3390,
                          "end": 3463
                        },
                        "init": null,
                        "definite": false,
                        "start": 3390,
                        "end": 3463
                      }
                    ],
                    "declare": true,
                    "start": 3378,
                    "end": 3464
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 3371,
                  "end": 3464
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3484,
                    "end": 3530
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
                          "name": "myProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3545,
                          "end": 3555
                        },
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
                                "start": 3557,
                                "end": 3570
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3571,
                                "end": 3582
                              },
                              "start": 3557,
                              "end": 3582
                            },
                            "typeArguments": null,
                            "start": 3557,
                            "end": 3582
                          },
                          "start": 3555,
                          "end": 3582
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3545,
                        "end": 3583
                      }
                    ],
                    "start": 3531,
                    "end": 3593
                  },
                  "declare": false,
                  "start": 3474,
                  "end": 3593
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithPrivateModulePropertyTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3608,
                    "end": 3650
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3672,
                          "end": 3694
                        },
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
                                "start": 3696,
                                "end": 3709
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3710,
                                "end": 3721
                              },
                              "start": 3696,
                              "end": 3721
                            },
                            "typeArguments": null,
                            "start": 3696,
                            "end": 3721
                          },
                          "start": 3694,
                          "end": 3721
                        },
                        "value": null,
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 3665,
                        "end": 3722
                      },
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3735,
                          "end": 3751
                        },
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
                                "start": 3753,
                                "end": 3766
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3767,
                                "end": 3778
                              },
                              "start": 3753,
                              "end": 3778
                            },
                            "typeArguments": null,
                            "start": 3753,
                            "end": 3778
                          },
                          "start": 3751,
                          "end": 3778
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 3735,
                        "end": 3779
                      }
                    ],
                    "start": 3651,
                    "end": 3789
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3602,
                  "end": 3789
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
                        "name": "privateVarWithPrivateModulePropertyTypes",
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
                                "start": 3844,
                                "end": 3857
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3858,
                                "end": 3869
                              },
                              "start": 3844,
                              "end": 3869
                            },
                            "typeArguments": null,
                            "start": 3844,
                            "end": 3869
                          },
                          "start": 3842,
                          "end": 3869
                        },
                        "start": 3802,
                        "end": 3869
                      },
                      "init": null,
                      "definite": false,
                      "start": 3802,
                      "end": 3869
                    }
                  ],
                  "declare": false,
                  "start": 3798,
                  "end": 3870
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
                        "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                                "start": 3940,
                                "end": 3953
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3954,
                                "end": 3965
                              },
                              "start": 3940,
                              "end": 3965
                            },
                            "typeArguments": null,
                            "start": 3940,
                            "end": 3965
                          },
                          "start": 3938,
                          "end": 3965
                        },
                        "start": 3891,
                        "end": 3965
                      },
                      "init": null,
                      "definite": false,
                      "start": 3891,
                      "end": 3965
                    }
                  ],
                  "declare": true,
                  "start": 3879,
                  "end": 3966
                }
              ],
              "start": 676,
              "end": 3972
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 655,
            "end": 3972
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3995,
                "end": 4034
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4045,
                      "end": 4055
                    },
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
                          "start": 4057,
                          "end": 4069
                        },
                        "typeArguments": null,
                        "start": 4057,
                        "end": 4069
                      },
                      "start": 4055,
                      "end": 4069
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4045,
                    "end": 4070
                  }
                ],
                "start": 4035,
                "end": 4086
              },
              "declare": false,
              "start": 3985,
              "end": 4086
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3978,
            "end": 4086
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4109,
                "end": 4147
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4158,
                      "end": 4168
                    },
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
                          "start": 4170,
                          "end": 4181
                        },
                        "typeArguments": null,
                        "start": 4170,
                        "end": 4181
                      },
                      "start": 4168,
                      "end": 4181
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4158,
                    "end": 4182
                  }
                ],
                "start": 4148,
                "end": 4188
              },
              "declare": false,
              "start": 4099,
              "end": 4188
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 4092,
            "end": 4188
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 4204,
              "end": 4244
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4255,
                    "end": 4265
                  },
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
                        "start": 4267,
                        "end": 4279
                      },
                      "typeArguments": null,
                      "start": 4267,
                      "end": 4279
                    },
                    "start": 4265,
                    "end": 4279
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4255,
                  "end": 4280
                }
              ],
              "start": 4245,
              "end": 4286
            },
            "declare": false,
            "start": 4194,
            "end": 4286
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 4302,
              "end": 4341
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4352,
                    "end": 4362
                  },
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
                        "start": 4364,
                        "end": 4375
                      },
                      "typeArguments": null,
                      "start": 4364,
                      "end": 4375
                    },
                    "start": 4362,
                    "end": 4375
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4352,
                  "end": 4376
                }
              ],
              "start": 4342,
              "end": 4382
            },
            "declare": false,
            "start": 4292,
            "end": 4382
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivatePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4401,
                "end": 4440
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4458,
                      "end": 4480
                    },
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
                          "start": 4482,
                          "end": 4494
                        },
                        "typeArguments": null,
                        "start": 4482,
                        "end": 4494
                      },
                      "start": 4480,
                      "end": 4494
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4451,
                    "end": 4495
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4528,
                      "end": 4551
                    },
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
                          "start": 4553,
                          "end": 4565
                        },
                        "typeArguments": null,
                        "start": 4553,
                        "end": 4565
                      },
                      "start": 4551,
                      "end": 4565
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4513,
                    "end": 4566
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4575,
                      "end": 4591
                    },
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
                          "start": 4593,
                          "end": 4605
                        },
                        "typeArguments": null,
                        "start": 4593,
                        "end": 4605
                      },
                      "start": 4591,
                      "end": 4605
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4575,
                    "end": 4606
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4632,
                      "end": 4649
                    },
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
                          "start": 4651,
                          "end": 4663
                        },
                        "typeArguments": null,
                        "start": 4651,
                        "end": 4663
                      },
                      "start": 4649,
                      "end": 4663
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4624,
                    "end": 4664
                  }
                ],
                "start": 4441,
                "end": 4670
              },
              "abstract": false,
              "declare": false,
              "start": 4395,
              "end": 4670
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4388,
            "end": 4670
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicPropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 4689,
                "end": 4727
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4745,
                      "end": 4767
                    },
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
                          "start": 4769,
                          "end": 4780
                        },
                        "typeArguments": null,
                        "start": 4769,
                        "end": 4780
                      },
                      "start": 4767,
                      "end": 4780
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4738,
                    "end": 4781
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4805,
                      "end": 4828
                    },
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
                          "start": 4830,
                          "end": 4841
                        },
                        "typeArguments": null,
                        "start": 4830,
                        "end": 4841
                      },
                      "start": 4828,
                      "end": 4841
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4790,
                    "end": 4842
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4851,
                      "end": 4867
                    },
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
                          "start": 4869,
                          "end": 4880
                        },
                        "typeArguments": null,
                        "start": 4869,
                        "end": 4880
                      },
                      "start": 4867,
                      "end": 4880
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 4851,
                    "end": 4881
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4898,
                      "end": 4915
                    },
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
                          "start": 4917,
                          "end": 4928
                        },
                        "typeArguments": null,
                        "start": 4917,
                        "end": 4928
                      },
                      "start": 4915,
                      "end": 4928
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 4890,
                    "end": 4929
                  }
                ],
                "start": 4728,
                "end": 4935
              },
              "abstract": false,
              "declare": false,
              "start": 4683,
              "end": 4935
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4676,
            "end": 4935
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivatePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 4947,
              "end": 4987
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5005,
                    "end": 5027
                  },
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
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 4998,
                  "end": 5042
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5066,
                    "end": 5089
                  },
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
                        "start": 5091,
                        "end": 5103
                      },
                      "typeArguments": null,
                      "start": 5091,
                      "end": 5103
                    },
                    "start": 5089,
                    "end": 5103
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 5051,
                  "end": 5104
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5113,
                    "end": 5129
                  },
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
                        "start": 5131,
                        "end": 5143
                      },
                      "typeArguments": null,
                      "start": 5131,
                      "end": 5143
                    },
                    "start": 5129,
                    "end": 5143
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5113,
                  "end": 5144
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5161,
                    "end": 5178
                  },
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
                        "start": 5180,
                        "end": 5192
                      },
                      "typeArguments": null,
                      "start": 5180,
                      "end": 5192
                    },
                    "start": 5178,
                    "end": 5192
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 5153,
                  "end": 5193
                }
              ],
              "start": 4988,
              "end": 5199
            },
            "abstract": false,
            "declare": false,
            "start": 4941,
            "end": 5199
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicPropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 5211,
              "end": 5250
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5268,
                    "end": 5290
                  },
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
                        "start": 5292,
                        "end": 5303
                      },
                      "typeArguments": null,
                      "start": 5292,
                      "end": 5303
                    },
                    "start": 5290,
                    "end": 5303
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5261,
                  "end": 5304
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5328,
                    "end": 5351
                  },
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
                        "start": 5353,
                        "end": 5364
                      },
                      "typeArguments": null,
                      "start": 5353,
                      "end": 5364
                    },
                    "start": 5351,
                    "end": 5364
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 5313,
                  "end": 5365
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5374,
                    "end": 5390
                  },
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
                        "start": 5392,
                        "end": 5403
                      },
                      "typeArguments": null,
                      "start": 5392,
                      "end": 5403
                    },
                    "start": 5390,
                    "end": 5403
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5374,
                  "end": 5404
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5421,
                    "end": 5438
                  },
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
                        "start": 5440,
                        "end": 5451
                      },
                      "typeArguments": null,
                      "start": 5440,
                      "end": 5451
                    },
                    "start": 5438,
                    "end": 5451
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 5413,
                  "end": 5452
                }
              ],
              "start": 5251,
              "end": 5458
            },
            "abstract": false,
            "declare": false,
            "start": 5205,
            "end": 5458
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicVarWithPrivatePropertyTypes",
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
                          "start": 5510,
                          "end": 5522
                        },
                        "typeArguments": null,
                        "start": 5510,
                        "end": 5522
                      },
                      "start": 5508,
                      "end": 5522
                    },
                    "start": 5475,
                    "end": 5522
                  },
                  "init": null,
                  "definite": false,
                  "start": 5475,
                  "end": 5522
                }
              ],
              "declare": false,
              "start": 5471,
              "end": 5523
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5464,
            "end": 5523
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicVarWithPublicPropertyTypes",
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
                          "start": 5582,
                          "end": 5593
                        },
                        "typeArguments": null,
                        "start": 5582,
                        "end": 5593
                      },
                      "start": 5580,
                      "end": 5593
                    },
                    "start": 5548,
                    "end": 5593
                  },
                  "init": null,
                  "definite": false,
                  "start": 5548,
                  "end": 5593
                }
              ],
              "declare": false,
              "start": 5544,
              "end": 5594
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5537,
            "end": 5594
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
                  "name": "privateVarWithPrivatePropertyTypes",
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
                        "start": 5639,
                        "end": 5651
                      },
                      "typeArguments": null,
                      "start": 5639,
                      "end": 5651
                    },
                    "start": 5637,
                    "end": 5651
                  },
                  "start": 5603,
                  "end": 5651
                },
                "init": null,
                "definite": false,
                "start": 5603,
                "end": 5651
              }
            ],
            "declare": false,
            "start": 5599,
            "end": 5652
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
                  "name": "privateVarWithPublicPropertyTypes",
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
                        "start": 5696,
                        "end": 5707
                      },
                      "typeArguments": null,
                      "start": 5696,
                      "end": 5707
                    },
                    "start": 5694,
                    "end": 5707
                  },
                  "start": 5661,
                  "end": 5707
                },
                "init": null,
                "definite": false,
                "start": 5661,
                "end": 5707
              }
            ],
            "declare": false,
            "start": 5657,
            "end": 5708
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicAmbientVarWithPrivatePropertyTypes",
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
                          "start": 5775,
                          "end": 5787
                        },
                        "typeArguments": null,
                        "start": 5775,
                        "end": 5787
                      },
                      "start": 5773,
                      "end": 5787
                    },
                    "start": 5733,
                    "end": 5787
                  },
                  "init": null,
                  "definite": false,
                  "start": 5733,
                  "end": 5787
                }
              ],
              "declare": true,
              "start": 5721,
              "end": 5788
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5714,
            "end": 5788
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicAmbientVarWithPublicPropertyTypes",
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
                          "start": 5862,
                          "end": 5873
                        },
                        "typeArguments": null,
                        "start": 5862,
                        "end": 5873
                      },
                      "start": 5860,
                      "end": 5873
                    },
                    "start": 5821,
                    "end": 5873
                  },
                  "init": null,
                  "definite": false,
                  "start": 5821,
                  "end": 5873
                }
              ],
              "declare": true,
              "start": 5809,
              "end": 5874
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5802,
            "end": 5874
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
                  "name": "privateAmbientVarWithPrivatePropertyTypes",
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
                        "start": 5934,
                        "end": 5946
                      },
                      "typeArguments": null,
                      "start": 5934,
                      "end": 5946
                    },
                    "start": 5932,
                    "end": 5946
                  },
                  "start": 5891,
                  "end": 5946
                },
                "init": null,
                "definite": false,
                "start": 5891,
                "end": 5946
              }
            ],
            "declare": true,
            "start": 5879,
            "end": 5947
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
                  "name": "privateAmbientVarWithPublicPropertyTypes",
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
                        "start": 6006,
                        "end": 6017
                      },
                      "typeArguments": null,
                      "start": 6006,
                      "end": 6017
                    },
                    "start": 6004,
                    "end": 6017
                  },
                  "start": 5964,
                  "end": 6017
                },
                "init": null,
                "definite": false,
                "start": 5964,
                "end": 6017
              }
            ],
            "declare": true,
            "start": 5952,
            "end": 6018
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6041,
                "end": 6086
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
                      "name": "myProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6097,
                      "end": 6107
                    },
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
                            "start": 6109,
                            "end": 6122
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6123,
                            "end": 6134
                          },
                          "start": 6109,
                          "end": 6134
                        },
                        "typeArguments": null,
                        "start": 6109,
                        "end": 6134
                      },
                      "start": 6107,
                      "end": 6134
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 6097,
                    "end": 6135
                  }
                ],
                "start": 6087,
                "end": 6150
              },
              "declare": false,
              "start": 6031,
              "end": 6150
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6024,
            "end": 6150
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModulePropertyTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 6168,
                "end": 6209
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6227,
                      "end": 6249
                    },
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
                            "start": 6251,
                            "end": 6264
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6265,
                            "end": 6276
                          },
                          "start": 6251,
                          "end": 6276
                        },
                        "typeArguments": null,
                        "start": 6251,
                        "end": 6276
                      },
                      "start": 6249,
                      "end": 6276
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6220,
                    "end": 6277
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6295,
                      "end": 6311
                    },
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
                            "start": 6313,
                            "end": 6326
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6327,
                            "end": 6338
                          },
                          "start": 6313,
                          "end": 6338
                        },
                        "typeArguments": null,
                        "start": 6313,
                        "end": 6338
                      },
                      "start": 6311,
                      "end": 6338
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6295,
                    "end": 6339
                  }
                ],
                "start": 6210,
                "end": 6354
              },
              "abstract": false,
              "declare": false,
              "start": 6162,
              "end": 6354
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6155,
            "end": 6354
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicVarWithPrivateModulePropertyTypes",
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
                            "start": 6411,
                            "end": 6424
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6425,
                            "end": 6436
                          },
                          "start": 6411,
                          "end": 6436
                        },
                        "typeArguments": null,
                        "start": 6411,
                        "end": 6436
                      },
                      "start": 6409,
                      "end": 6436
                    },
                    "start": 6370,
                    "end": 6436
                  },
                  "init": null,
                  "definite": false,
                  "start": 6370,
                  "end": 6436
                }
              ],
              "declare": false,
              "start": 6366,
              "end": 6437
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6359,
            "end": 6437
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicAmbientVarWithPrivateModulePropertyTypes",
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
                            "start": 6518,
                            "end": 6531
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6532,
                            "end": 6543
                          },
                          "start": 6518,
                          "end": 6543
                        },
                        "typeArguments": null,
                        "start": 6518,
                        "end": 6543
                      },
                      "start": 6516,
                      "end": 6543
                    },
                    "start": 6470,
                    "end": 6543
                  },
                  "init": null,
                  "definite": false,
                  "start": 6470,
                  "end": 6543
                }
              ],
              "declare": true,
              "start": 6458,
              "end": 6544
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 6451,
            "end": 6544
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6569,
              "end": 6615
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
                    "name": "myProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6626,
                    "end": 6636
                  },
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
                          "start": 6638,
                          "end": 6651
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6652,
                          "end": 6663
                        },
                        "start": 6638,
                        "end": 6663
                      },
                      "typeArguments": null,
                      "start": 6638,
                      "end": 6663
                    },
                    "start": 6636,
                    "end": 6663
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6626,
                  "end": 6664
                }
              ],
              "start": 6616,
              "end": 6670
            },
            "declare": false,
            "start": 6559,
            "end": 6670
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModulePropertyTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 6681,
              "end": 6723
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6741,
                    "end": 6763
                  },
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
                          "start": 6765,
                          "end": 6778
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6779,
                          "end": 6790
                        },
                        "start": 6765,
                        "end": 6790
                      },
                      "typeArguments": null,
                      "start": 6765,
                      "end": 6790
                    },
                    "start": 6763,
                    "end": 6790
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 6734,
                  "end": 6791
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6800,
                    "end": 6816
                  },
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
                          "start": 6818,
                          "end": 6831
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6832,
                          "end": 6843
                        },
                        "start": 6818,
                        "end": 6843
                      },
                      "typeArguments": null,
                      "start": 6818,
                      "end": 6843
                    },
                    "start": 6816,
                    "end": 6843
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 6800,
                  "end": 6844
                }
              ],
              "start": 6724,
              "end": 6850
            },
            "abstract": false,
            "declare": false,
            "start": 6675,
            "end": 6850
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
                  "name": "privateVarWithPrivateModulePropertyTypes",
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
                          "start": 6901,
                          "end": 6914
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6915,
                          "end": 6926
                        },
                        "start": 6901,
                        "end": 6926
                      },
                      "typeArguments": null,
                      "start": 6901,
                      "end": 6926
                    },
                    "start": 6899,
                    "end": 6926
                  },
                  "start": 6859,
                  "end": 6926
                },
                "init": null,
                "definite": false,
                "start": 6859,
                "end": 6926
              }
            ],
            "declare": false,
            "start": 6855,
            "end": 6927
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
                  "name": "privateAmbientVarWithPrivateModulePropertyTypes",
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
                          "start": 6993,
                          "end": 7006
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7007,
                          "end": 7018
                        },
                        "start": 6993,
                        "end": 7018
                      },
                      "typeArguments": null,
                      "start": 6993,
                      "end": 7018
                    },
                    "start": 6991,
                    "end": 7018
                  },
                  "start": 6944,
                  "end": 7018
                },
                "init": null,
                "definite": false,
                "start": 6944,
                "end": 7018
              }
            ],
            "declare": true,
            "start": 6932,
            "end": 7019
          }
        ],
        "start": 579,
        "end": 7021
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 551,
      "end": 7021
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 7021
}
```
