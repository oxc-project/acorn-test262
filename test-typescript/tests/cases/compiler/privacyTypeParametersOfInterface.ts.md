__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2054,
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
      "type": "ClassDeclaration",
      "start": 54,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 73,
        "name": "privateClassT",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 80,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 114,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 89,
        "end": 114,
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 107,
          "name": "publicClassT",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 111,
          "end": 114,
          "body": []
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 107,
          "end": 110,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 108,
              "end": 109,
              "name": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
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
      "start": 190,
      "end": 570,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 197,
        "end": 570,
        "id": {
          "type": "Identifier",
          "start": 207,
          "end": 247,
          "name": "publicInterfaceWithPrivateTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 247,
          "end": 271,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 248,
              "end": 270,
              "name": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 258,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 270,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 272,
          "end": 570,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 278,
              "end": 298,
              "key": {
                "type": "Identifier",
                "start": 278,
                "end": 286,
                "name": "myMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 287,
                  "end": 293,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 290,
                    "end": 293,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 292,
                      "end": 293,
                      "typeName": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 294,
                "end": 297,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 296,
                  "end": 297,
                  "typeName": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 297,
                    "name": "T",
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
            },
            {
              "type": "TSMethodSignature",
              "start": 312,
              "end": 341,
              "key": {
                "type": "Identifier",
                "start": 312,
                "end": 321,
                "name": "myMethod0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 323,
                "end": 340,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 325,
                  "end": 340,
                  "typeName": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 337,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 337,
                    "end": 340,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 338,
                        "end": 339,
                        "typeName": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 339,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 355,
              "end": 396,
              "key": {
                "type": "Identifier",
                "start": 355,
                "end": 364,
                "name": "myMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 366,
                "end": 395,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 368,
                  "end": 395,
                  "typeName": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 381,
                    "name": "privateClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 381,
                    "end": 395,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 382,
                        "end": 394,
                        "typeName": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 394,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 410,
              "end": 450,
              "key": {
                "type": "Identifier",
                "start": 410,
                "end": 419,
                "name": "myMethod2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 421,
                "end": 449,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 423,
                  "end": 449,
                  "typeName": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 436,
                    "name": "privateClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 436,
                    "end": 449,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 437,
                        "end": 448,
                        "typeName": {
                          "type": "Identifier",
                          "start": 437,
                          "end": 448,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 464,
              "end": 504,
              "key": {
                "type": "Identifier",
                "start": 464,
                "end": 473,
                "name": "myMethod3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 475,
                "end": 503,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 477,
                  "end": 503,
                  "typeName": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 489,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 489,
                    "end": 503,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 490,
                        "end": 502,
                        "typeName": {
                          "type": "Identifier",
                          "start": 490,
                          "end": 502,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 517,
              "end": 556,
              "key": {
                "type": "Identifier",
                "start": 517,
                "end": 526,
                "name": "myMethod4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 528,
                "end": 555,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 530,
                  "end": 555,
                  "typeName": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 542,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 542,
                    "end": 555,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 543,
                        "end": 554,
                        "typeName": {
                          "type": "Identifier",
                          "start": 543,
                          "end": 554,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
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
      "start": 572,
      "end": 956,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 579,
        "end": 956,
        "id": {
          "type": "Identifier",
          "start": 589,
          "end": 628,
          "name": "publicInterfaceWithPublicTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 628,
          "end": 651,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 629,
              "end": 650,
              "name": {
                "type": "Identifier",
                "start": 629,
                "end": 630,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 639,
                "end": 650,
                "typeName": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 650,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 652,
          "end": 956,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 658,
              "end": 678,
              "key": {
                "type": "Identifier",
                "start": 658,
                "end": 666,
                "name": "myMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 667,
                  "end": 673,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 670,
                    "end": 673,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 672,
                      "end": 673,
                      "typeName": {
                        "type": "Identifier",
                        "start": 672,
                        "end": 673,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 674,
                "end": 677,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 676,
                  "end": 677,
                  "typeName": {
                    "type": "Identifier",
                    "start": 676,
                    "end": 677,
                    "name": "T",
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
            },
            {
              "type": "TSMethodSignature",
              "start": 695,
              "end": 724,
              "key": {
                "type": "Identifier",
                "start": 695,
                "end": 704,
                "name": "myMethod0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 706,
                "end": 723,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 708,
                  "end": 723,
                  "typeName": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 720,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 720,
                    "end": 723,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 721,
                        "end": 722,
                        "typeName": {
                          "type": "Identifier",
                          "start": 721,
                          "end": 722,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 741,
              "end": 782,
              "key": {
                "type": "Identifier",
                "start": 741,
                "end": 750,
                "name": "myMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 752,
                "end": 781,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 754,
                  "end": 781,
                  "typeName": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 767,
                    "name": "privateClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 767,
                    "end": 781,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 768,
                        "end": 780,
                        "typeName": {
                          "type": "Identifier",
                          "start": 768,
                          "end": 780,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 796,
              "end": 836,
              "key": {
                "type": "Identifier",
                "start": 796,
                "end": 805,
                "name": "myMethod2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 807,
                "end": 835,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 809,
                  "end": 835,
                  "typeName": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 822,
                    "name": "privateClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 822,
                    "end": 835,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 823,
                        "end": 834,
                        "typeName": {
                          "type": "Identifier",
                          "start": 823,
                          "end": 834,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 850,
              "end": 890,
              "key": {
                "type": "Identifier",
                "start": 850,
                "end": 859,
                "name": "myMethod3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 861,
                "end": 889,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 863,
                  "end": 889,
                  "typeName": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 875,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 875,
                    "end": 889,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 876,
                        "end": 888,
                        "typeName": {
                          "type": "Identifier",
                          "start": 876,
                          "end": 888,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 903,
              "end": 942,
              "key": {
                "type": "Identifier",
                "start": 903,
                "end": 912,
                "name": "myMethod4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 914,
                "end": 941,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 916,
                  "end": 941,
                  "typeName": {
                    "type": "Identifier",
                    "start": 916,
                    "end": 928,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 928,
                    "end": 941,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 929,
                        "end": 940,
                        "typeName": {
                          "type": "Identifier",
                          "start": 929,
                          "end": 940,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
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
      "start": 958,
      "end": 1347,
      "id": {
        "type": "Identifier",
        "start": 968,
        "end": 1009,
        "name": "privateInterfaceWithPrivateTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1009,
        "end": 1033,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1010,
            "end": 1032,
            "name": {
              "type": "Identifier",
              "start": 1010,
              "end": 1011,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1020,
              "end": 1032,
              "typeName": {
                "type": "Identifier",
                "start": 1020,
                "end": 1032,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1034,
        "end": 1347,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1040,
            "end": 1060,
            "key": {
              "type": "Identifier",
              "start": 1040,
              "end": 1048,
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1049,
                "end": 1055,
                "name": "val",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1052,
                  "end": 1055,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1054,
                    "end": 1055,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1054,
                      "end": 1055,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1056,
              "end": 1059,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1058,
                "end": 1059,
                "typeName": {
                  "type": "Identifier",
                  "start": 1058,
                  "end": 1059,
                  "name": "T",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1077,
            "end": 1106,
            "key": {
              "type": "Identifier",
              "start": 1077,
              "end": 1086,
              "name": "myMethod0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1088,
              "end": 1105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1090,
                "end": 1105,
                "typeName": {
                  "type": "Identifier",
                  "start": 1090,
                  "end": 1102,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1102,
                  "end": 1105,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1103,
                      "end": 1104,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1103,
                        "end": 1104,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1123,
            "end": 1164,
            "key": {
              "type": "Identifier",
              "start": 1123,
              "end": 1132,
              "name": "myMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1134,
              "end": 1163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1136,
                "end": 1163,
                "typeName": {
                  "type": "Identifier",
                  "start": 1136,
                  "end": 1149,
                  "name": "privateClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1149,
                  "end": 1163,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1150,
                      "end": 1162,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1150,
                        "end": 1162,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1181,
            "end": 1221,
            "key": {
              "type": "Identifier",
              "start": 1181,
              "end": 1190,
              "name": "myMethod2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1192,
              "end": 1220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1194,
                "end": 1220,
                "typeName": {
                  "type": "Identifier",
                  "start": 1194,
                  "end": 1207,
                  "name": "privateClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1207,
                  "end": 1220,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1208,
                      "end": 1219,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1208,
                        "end": 1219,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1238,
            "end": 1278,
            "key": {
              "type": "Identifier",
              "start": 1238,
              "end": 1247,
              "name": "myMethod3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1249,
              "end": 1277,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1251,
                "end": 1277,
                "typeName": {
                  "type": "Identifier",
                  "start": 1251,
                  "end": 1263,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1263,
                  "end": 1277,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1264,
                      "end": 1276,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1264,
                        "end": 1276,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1294,
            "end": 1333,
            "key": {
              "type": "Identifier",
              "start": 1294,
              "end": 1303,
              "name": "myMethod4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1305,
              "end": 1332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1307,
                "end": 1332,
                "typeName": {
                  "type": "Identifier",
                  "start": 1307,
                  "end": 1319,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1319,
                  "end": 1332,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1320,
                      "end": 1331,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1320,
                        "end": 1331,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
      "start": 1349,
      "end": 1736,
      "id": {
        "type": "Identifier",
        "start": 1359,
        "end": 1399,
        "name": "privateInterfaceWithPublicTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1399,
        "end": 1422,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1400,
            "end": 1421,
            "name": {
              "type": "Identifier",
              "start": 1400,
              "end": 1401,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1410,
              "end": 1421,
              "typeName": {
                "type": "Identifier",
                "start": 1410,
                "end": 1421,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1423,
        "end": 1736,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1429,
            "end": 1449,
            "key": {
              "type": "Identifier",
              "start": 1429,
              "end": 1437,
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1438,
                "end": 1444,
                "name": "val",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1441,
                  "end": 1444,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1443,
                    "end": 1444,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1443,
                      "end": 1444,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1445,
              "end": 1448,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1447,
                "end": 1448,
                "typeName": {
                  "type": "Identifier",
                  "start": 1447,
                  "end": 1448,
                  "name": "T",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1466,
            "end": 1495,
            "key": {
              "type": "Identifier",
              "start": 1466,
              "end": 1475,
              "name": "myMethod0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1477,
              "end": 1494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1479,
                "end": 1494,
                "typeName": {
                  "type": "Identifier",
                  "start": 1479,
                  "end": 1491,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1491,
                  "end": 1494,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1492,
                      "end": 1493,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1492,
                        "end": 1493,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1512,
            "end": 1553,
            "key": {
              "type": "Identifier",
              "start": 1512,
              "end": 1521,
              "name": "myMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1523,
              "end": 1552,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1525,
                "end": 1552,
                "typeName": {
                  "type": "Identifier",
                  "start": 1525,
                  "end": 1538,
                  "name": "privateClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1538,
                  "end": 1552,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1539,
                      "end": 1551,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1539,
                        "end": 1551,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1570,
            "end": 1610,
            "key": {
              "type": "Identifier",
              "start": 1570,
              "end": 1579,
              "name": "myMethod2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1581,
              "end": 1609,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1583,
                "end": 1609,
                "typeName": {
                  "type": "Identifier",
                  "start": 1583,
                  "end": 1596,
                  "name": "privateClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1596,
                  "end": 1609,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1597,
                      "end": 1608,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1597,
                        "end": 1608,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1627,
            "end": 1667,
            "key": {
              "type": "Identifier",
              "start": 1627,
              "end": 1636,
              "name": "myMethod3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1638,
              "end": 1666,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1640,
                "end": 1666,
                "typeName": {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1652,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1652,
                  "end": 1666,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1653,
                      "end": 1665,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1653,
                        "end": 1665,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1683,
            "end": 1722,
            "key": {
              "type": "Identifier",
              "start": 1683,
              "end": 1692,
              "name": "myMethod4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1694,
              "end": 1721,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1696,
                "end": 1721,
                "typeName": {
                  "type": "Identifier",
                  "start": 1696,
                  "end": 1708,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1708,
                  "end": 1721,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1709,
                      "end": 1720,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1709,
                        "end": 1720,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
      "start": 1738,
      "end": 1898,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1745,
        "end": 1898,
        "id": {
          "type": "Identifier",
          "start": 1755,
          "end": 1808,
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1808,
          "end": 1811,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1809,
              "end": 1810,
              "name": {
                "type": "Identifier",
                "start": 1809,
                "end": 1810,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 1812,
          "end": 1898,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 1818,
              "end": 1838,
              "key": {
                "type": "Identifier",
                "start": 1818,
                "end": 1826,
                "name": "myMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1827,
                  "end": 1833,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1830,
                    "end": 1833,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1832,
                      "end": 1833,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1832,
                        "end": 1833,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1834,
                "end": 1837,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1836,
                  "end": 1837,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1836,
                    "end": 1837,
                    "name": "T",
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
            },
            {
              "type": "TSMethodSignature",
              "start": 1855,
              "end": 1884,
              "key": {
                "type": "Identifier",
                "start": 1855,
                "end": 1864,
                "name": "myMethod0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1866,
                "end": 1883,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1868,
                  "end": 1883,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1868,
                    "end": 1880,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1880,
                    "end": 1883,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1881,
                        "end": 1882,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1881,
                          "end": 1882,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
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
      "start": 1900,
      "end": 2054,
      "id": {
        "type": "Identifier",
        "start": 1910,
        "end": 1964,
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1964,
        "end": 1967,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1965,
            "end": 1966,
            "name": {
              "type": "Identifier",
              "start": 1965,
              "end": 1966,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1968,
        "end": 2054,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1974,
            "end": 1994,
            "key": {
              "type": "Identifier",
              "start": 1974,
              "end": 1982,
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1983,
                "end": 1989,
                "name": "val",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1986,
                  "end": 1989,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1988,
                    "end": 1989,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1988,
                      "end": 1989,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1990,
              "end": 1993,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1992,
                "end": 1993,
                "typeName": {
                  "type": "Identifier",
                  "start": 1992,
                  "end": 1993,
                  "name": "T",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 2011,
            "end": 2040,
            "key": {
              "type": "Identifier",
              "start": 2011,
              "end": 2020,
              "name": "myMethod0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2022,
              "end": 2039,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2024,
                "end": 2039,
                "typeName": {
                  "type": "Identifier",
                  "start": 2024,
                  "end": 2036,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2036,
                  "end": 2039,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2037,
                      "end": 2038,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2037,
                        "end": 2038,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
