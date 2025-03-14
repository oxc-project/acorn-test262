privacyTypeParametersOfInterface.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "privateClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "decorators": [],
          "name": "publicClass",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 80,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 80,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 73,
        "decorators": [],
        "name": "privateClassT",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 114,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 89,
        "end": 114,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 111,
          "end": 114,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 107,
          "decorators": [],
          "name": "publicClassT",
          "optional": false
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 107,
          "end": 110,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 108,
              "end": 109,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 190,
      "end": 570,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 197,
        "end": 570,
        "body": {
          "type": "TSInterfaceBody",
          "start": 272,
          "end": 570,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 278,
              "end": 298,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 278,
                "end": 286,
                "decorators": [],
                "name": "myMethod",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 287,
                  "end": 293,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "readonly": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 312,
              "end": 341,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 312,
                "end": 321,
                "decorators": [],
                "name": "myMethod0",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 323,
                "end": 340,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 325,
                  "end": 340,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 337,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 355,
              "end": 396,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 355,
                "end": 364,
                "decorators": [],
                "name": "myMethod1",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 366,
                "end": 395,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 368,
                  "end": 395,
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
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 381,
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 410,
              "end": 450,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 410,
                "end": 419,
                "decorators": [],
                "name": "myMethod2",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 421,
                "end": 449,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 423,
                  "end": 449,
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
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 436,
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 464,
              "end": 504,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 464,
                "end": 473,
                "decorators": [],
                "name": "myMethod3",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 475,
                "end": 503,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 477,
                  "end": 503,
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
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 489,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 517,
              "end": 556,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 517,
                "end": 526,
                "decorators": [],
                "name": "myMethod4",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 528,
                "end": 555,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 530,
                  "end": 555,
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
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 542,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 207,
          "end": 247,
          "decorators": [],
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 247,
          "end": 271,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 248,
              "end": 270,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 258,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 270,
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 572,
      "end": 956,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 579,
        "end": 956,
        "body": {
          "type": "TSInterfaceBody",
          "start": 652,
          "end": 956,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 658,
              "end": 678,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 658,
                "end": 666,
                "decorators": [],
                "name": "myMethod",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 667,
                  "end": 673,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "readonly": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 695,
              "end": 724,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 695,
                "end": 704,
                "decorators": [],
                "name": "myMethod0",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 706,
                "end": 723,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 708,
                  "end": 723,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 720,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 741,
              "end": 782,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 741,
                "end": 750,
                "decorators": [],
                "name": "myMethod1",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 752,
                "end": 781,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 754,
                  "end": 781,
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
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 767,
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 796,
              "end": 836,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 796,
                "end": 805,
                "decorators": [],
                "name": "myMethod2",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 807,
                "end": 835,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 809,
                  "end": 835,
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
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 822,
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 850,
              "end": 890,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 850,
                "end": 859,
                "decorators": [],
                "name": "myMethod3",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 861,
                "end": 889,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 863,
                  "end": 889,
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
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 875,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 903,
              "end": 942,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 903,
                "end": 912,
                "decorators": [],
                "name": "myMethod4",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 914,
                "end": 941,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 916,
                  "end": 941,
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
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 916,
                    "end": 928,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 589,
          "end": 628,
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParameters",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 628,
          "end": 651,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 629,
              "end": 650,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 639,
                "end": 650,
                "typeName": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 650,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 629,
                "end": 630,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 958,
      "end": 1347,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1034,
        "end": 1347,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1040,
            "end": 1060,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1040,
              "end": 1048,
              "decorators": [],
              "name": "myMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1049,
                "end": 1055,
                "decorators": [],
                "name": "val",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1077,
            "end": 1106,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1077,
              "end": 1086,
              "decorators": [],
              "name": "myMethod0",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1088,
              "end": 1105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1090,
                "end": 1105,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1090,
                  "end": 1102,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1123,
            "end": 1164,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1123,
              "end": 1132,
              "decorators": [],
              "name": "myMethod1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1134,
              "end": 1163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1136,
                "end": 1163,
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
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1136,
                  "end": 1149,
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1181,
            "end": 1221,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1181,
              "end": 1190,
              "decorators": [],
              "name": "myMethod2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1192,
              "end": 1220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1194,
                "end": 1220,
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
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1194,
                  "end": 1207,
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1238,
            "end": 1278,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1238,
              "end": 1247,
              "decorators": [],
              "name": "myMethod3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1249,
              "end": 1277,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1251,
                "end": 1277,
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
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1251,
                  "end": 1263,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1294,
            "end": 1333,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1294,
              "end": 1303,
              "decorators": [],
              "name": "myMethod4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1305,
              "end": 1332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1307,
                "end": 1332,
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
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1307,
                  "end": 1319,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 968,
        "end": 1009,
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1009,
        "end": 1033,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1010,
            "end": 1032,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1020,
              "end": 1032,
              "typeName": {
                "type": "Identifier",
                "start": 1020,
                "end": 1032,
                "decorators": [],
                "name": "privateClass",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1010,
              "end": 1011,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1349,
      "end": 1736,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1423,
        "end": 1736,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1429,
            "end": 1449,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1429,
              "end": 1437,
              "decorators": [],
              "name": "myMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1438,
                "end": 1444,
                "decorators": [],
                "name": "val",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1466,
            "end": 1495,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1466,
              "end": 1475,
              "decorators": [],
              "name": "myMethod0",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1477,
              "end": 1494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1479,
                "end": 1494,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1479,
                  "end": 1491,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1512,
            "end": 1553,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1512,
              "end": 1521,
              "decorators": [],
              "name": "myMethod1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1523,
              "end": 1552,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1525,
                "end": 1552,
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
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1525,
                  "end": 1538,
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1570,
            "end": 1610,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1570,
              "end": 1579,
              "decorators": [],
              "name": "myMethod2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1581,
              "end": 1609,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1583,
                "end": 1609,
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
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1583,
                  "end": 1596,
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1627,
            "end": 1667,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1627,
              "end": 1636,
              "decorators": [],
              "name": "myMethod3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1638,
              "end": 1666,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1640,
                "end": 1666,
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
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1652,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1683,
            "end": 1722,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1683,
              "end": 1692,
              "decorators": [],
              "name": "myMethod4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1694,
              "end": 1721,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1696,
                "end": 1721,
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
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1696,
                  "end": 1708,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1359,
        "end": 1399,
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1399,
        "end": 1422,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1400,
            "end": 1421,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1410,
              "end": 1421,
              "typeName": {
                "type": "Identifier",
                "start": 1410,
                "end": 1421,
                "decorators": [],
                "name": "publicClass",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1400,
              "end": 1401,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1738,
      "end": 1898,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1745,
        "end": 1898,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1812,
          "end": 1898,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 1818,
              "end": 1838,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1818,
                "end": 1826,
                "decorators": [],
                "name": "myMethod",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1827,
                  "end": 1833,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "readonly": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 1855,
              "end": 1884,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1855,
                "end": 1864,
                "decorators": [],
                "name": "myMethod0",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1866,
                "end": 1883,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1868,
                  "end": 1883,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1868,
                    "end": 1880,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false
                  }
                }
              },
              "static": false
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1755,
          "end": 1808,
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1808,
          "end": 1811,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1809,
              "end": 1810,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1809,
                "end": 1810,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1900,
      "end": 2054,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1968,
        "end": 2054,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1974,
            "end": 1994,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1974,
              "end": 1982,
              "decorators": [],
              "name": "myMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1983,
                "end": 1989,
                "decorators": [],
                "name": "val",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2011,
            "end": 2040,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2011,
              "end": 2020,
              "decorators": [],
              "name": "myMethod0",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2022,
              "end": 2039,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2024,
                "end": 2039,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2024,
                  "end": 2036,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1910,
        "end": 1964,
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1964,
        "end": 1967,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1965,
            "end": 1966,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1965,
              "end": 1966,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
