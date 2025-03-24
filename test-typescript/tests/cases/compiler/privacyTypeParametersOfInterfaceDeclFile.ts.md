__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 7376,
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
      "start": 116,
      "end": 451,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 123,
        "end": 451,
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 173,
          "name": "publicInterfaceWithPrivateTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 173,
          "end": 197,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 174,
              "end": 196,
              "name": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 184,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 196,
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
          "start": 198,
          "end": 451,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 213,
              "end": 233,
              "key": {
                "type": "Identifier",
                "start": 213,
                "end": 221,
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
                  "start": 222,
                  "end": 228,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 227,
                      "end": 228,
                      "typeName": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 228,
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
                "start": 229,
                "end": 232,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 231,
                  "end": 232,
                  "typeName": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
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
              "start": 238,
              "end": 267,
              "key": {
                "type": "Identifier",
                "start": 238,
                "end": 247,
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
                "start": 249,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 251,
                  "end": 266,
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 263,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 263,
                    "end": 266,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 264,
                        "end": 265,
                        "typeName": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 265,
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
              "start": 272,
              "end": 313,
              "key": {
                "type": "Identifier",
                "start": 272,
                "end": 281,
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
                "start": 283,
                "end": 312,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 285,
                  "end": 312,
                  "typeName": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 298,
                    "name": "privateClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 298,
                    "end": 312,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 299,
                        "end": 311,
                        "typeName": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 311,
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
              "start": 319,
              "end": 359,
              "key": {
                "type": "Identifier",
                "start": 319,
                "end": 328,
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
                "start": 330,
                "end": 358,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 332,
                  "end": 358,
                  "typeName": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 345,
                    "name": "privateClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 345,
                    "end": 358,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 346,
                        "end": 357,
                        "typeName": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 357,
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
              "start": 364,
              "end": 404,
              "key": {
                "type": "Identifier",
                "start": 364,
                "end": 373,
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
                "start": 375,
                "end": 403,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 377,
                  "end": 403,
                  "typeName": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 389,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 389,
                    "end": 403,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 390,
                        "end": 402,
                        "typeName": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 402,
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
              "start": 409,
              "end": 448,
              "key": {
                "type": "Identifier",
                "start": 409,
                "end": 418,
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
                "start": 420,
                "end": 447,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 422,
                  "end": 447,
                  "typeName": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 434,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 434,
                    "end": 447,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 435,
                        "end": 446,
                        "typeName": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 446,
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
      "start": 453,
      "end": 774,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 460,
        "end": 774,
        "id": {
          "type": "Identifier",
          "start": 470,
          "end": 509,
          "name": "publicInterfaceWithPublicTypeParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 509,
          "end": 532,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 510,
              "end": 531,
              "name": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 520,
                "end": 531,
                "typeName": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 531,
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
          "start": 533,
          "end": 774,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 539,
              "end": 559,
              "key": {
                "type": "Identifier",
                "start": 539,
                "end": 547,
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
                  "start": 548,
                  "end": 554,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 551,
                    "end": 554,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 553,
                      "end": 554,
                      "typeName": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
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
                "start": 555,
                "end": 558,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 557,
                  "end": 558,
                  "typeName": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
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
              "start": 564,
              "end": 592,
              "key": {
                "type": "Identifier",
                "start": 564,
                "end": 573,
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
                "start": 575,
                "end": 592,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 577,
                  "end": 592,
                  "typeName": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 589,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 589,
                    "end": 592,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 590,
                        "end": 591,
                        "typeName": {
                          "type": "Identifier",
                          "start": 590,
                          "end": 591,
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
              "start": 597,
              "end": 638,
              "key": {
                "type": "Identifier",
                "start": 597,
                "end": 606,
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
                "start": 608,
                "end": 637,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 610,
                  "end": 637,
                  "typeName": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 623,
                    "name": "privateClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 623,
                    "end": 637,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 624,
                        "end": 636,
                        "typeName": {
                          "type": "Identifier",
                          "start": 624,
                          "end": 636,
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
              "start": 643,
              "end": 683,
              "key": {
                "type": "Identifier",
                "start": 643,
                "end": 652,
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
                "start": 654,
                "end": 682,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 656,
                  "end": 682,
                  "typeName": {
                    "type": "Identifier",
                    "start": 656,
                    "end": 669,
                    "name": "privateClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 669,
                    "end": 682,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 670,
                        "end": 681,
                        "typeName": {
                          "type": "Identifier",
                          "start": 670,
                          "end": 681,
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
              "start": 688,
              "end": 728,
              "key": {
                "type": "Identifier",
                "start": 688,
                "end": 697,
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
                "start": 699,
                "end": 727,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 701,
                  "end": 727,
                  "typeName": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 713,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 713,
                    "end": 727,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 714,
                        "end": 726,
                        "typeName": {
                          "type": "Identifier",
                          "start": 714,
                          "end": 726,
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
              "start": 733,
              "end": 772,
              "key": {
                "type": "Identifier",
                "start": 733,
                "end": 742,
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
                "start": 744,
                "end": 771,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 746,
                  "end": 771,
                  "typeName": {
                    "type": "Identifier",
                    "start": 746,
                    "end": 758,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 758,
                    "end": 771,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 759,
                        "end": 770,
                        "typeName": {
                          "type": "Identifier",
                          "start": 759,
                          "end": 770,
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
      "start": 776,
      "end": 1094,
      "id": {
        "type": "Identifier",
        "start": 786,
        "end": 827,
        "name": "privateInterfaceWithPrivateTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 827,
        "end": 851,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 828,
            "end": 850,
            "name": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 838,
              "end": 850,
              "typeName": {
                "type": "Identifier",
                "start": 838,
                "end": 850,
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
        "start": 852,
        "end": 1094,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 858,
            "end": 878,
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 866,
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
                "start": 867,
                "end": 873,
                "name": "val",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 870,
                  "end": 873,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 872,
                    "end": 873,
                    "typeName": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 873,
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
              "start": 874,
              "end": 877,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 876,
                "end": 877,
                "typeName": {
                  "type": "Identifier",
                  "start": 876,
                  "end": 877,
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
            "start": 883,
            "end": 912,
            "key": {
              "type": "Identifier",
              "start": 883,
              "end": 892,
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
              "start": 894,
              "end": 911,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 896,
                "end": 911,
                "typeName": {
                  "type": "Identifier",
                  "start": 896,
                  "end": 908,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 908,
                  "end": 911,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 909,
                      "end": 910,
                      "typeName": {
                        "type": "Identifier",
                        "start": 909,
                        "end": 910,
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
            "start": 917,
            "end": 958,
            "key": {
              "type": "Identifier",
              "start": 917,
              "end": 926,
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
              "start": 928,
              "end": 957,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 930,
                "end": 957,
                "typeName": {
                  "type": "Identifier",
                  "start": 930,
                  "end": 943,
                  "name": "privateClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 943,
                  "end": 957,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 944,
                      "end": 956,
                      "typeName": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 956,
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
            "start": 963,
            "end": 1003,
            "key": {
              "type": "Identifier",
              "start": 963,
              "end": 972,
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
              "start": 974,
              "end": 1002,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 976,
                "end": 1002,
                "typeName": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 989,
                  "name": "privateClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 989,
                  "end": 1002,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 990,
                      "end": 1001,
                      "typeName": {
                        "type": "Identifier",
                        "start": 990,
                        "end": 1001,
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
            "start": 1008,
            "end": 1048,
            "key": {
              "type": "Identifier",
              "start": 1008,
              "end": 1017,
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
              "start": 1019,
              "end": 1047,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1021,
                "end": 1047,
                "typeName": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1033,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1033,
                  "end": 1047,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1034,
                      "end": 1046,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1034,
                        "end": 1046,
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
            "start": 1053,
            "end": 1092,
            "key": {
              "type": "Identifier",
              "start": 1053,
              "end": 1062,
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
              "start": 1064,
              "end": 1091,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1066,
                "end": 1091,
                "typeName": {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1078,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1078,
                  "end": 1091,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1079,
                      "end": 1090,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1090,
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
      "start": 1096,
      "end": 1412,
      "id": {
        "type": "Identifier",
        "start": 1106,
        "end": 1146,
        "name": "privateInterfaceWithPublicTypeParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1146,
        "end": 1169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1147,
            "end": 1168,
            "name": {
              "type": "Identifier",
              "start": 1147,
              "end": 1148,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1157,
              "end": 1168,
              "typeName": {
                "type": "Identifier",
                "start": 1157,
                "end": 1168,
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
        "start": 1170,
        "end": 1412,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1176,
            "end": 1196,
            "key": {
              "type": "Identifier",
              "start": 1176,
              "end": 1184,
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
                "start": 1185,
                "end": 1191,
                "name": "val",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1188,
                  "end": 1191,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1190,
                    "end": 1191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1190,
                      "end": 1191,
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
              "start": 1192,
              "end": 1195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1194,
                "end": 1195,
                "typeName": {
                  "type": "Identifier",
                  "start": 1194,
                  "end": 1195,
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
            "start": 1201,
            "end": 1230,
            "key": {
              "type": "Identifier",
              "start": 1201,
              "end": 1210,
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
              "start": 1212,
              "end": 1229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1214,
                "end": 1229,
                "typeName": {
                  "type": "Identifier",
                  "start": 1214,
                  "end": 1226,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1226,
                  "end": 1229,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1227,
                      "end": 1228,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1227,
                        "end": 1228,
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
            "start": 1235,
            "end": 1276,
            "key": {
              "type": "Identifier",
              "start": 1235,
              "end": 1244,
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
              "start": 1246,
              "end": 1275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1248,
                "end": 1275,
                "typeName": {
                  "type": "Identifier",
                  "start": 1248,
                  "end": 1261,
                  "name": "privateClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1261,
                  "end": 1275,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1262,
                      "end": 1274,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1262,
                        "end": 1274,
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
            "start": 1281,
            "end": 1321,
            "key": {
              "type": "Identifier",
              "start": 1281,
              "end": 1290,
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
              "start": 1292,
              "end": 1320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1294,
                "end": 1320,
                "typeName": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1307,
                  "name": "privateClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1307,
                  "end": 1320,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1308,
                      "end": 1319,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1308,
                        "end": 1319,
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
            "start": 1326,
            "end": 1366,
            "key": {
              "type": "Identifier",
              "start": 1326,
              "end": 1335,
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
              "start": 1337,
              "end": 1365,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1339,
                "end": 1365,
                "typeName": {
                  "type": "Identifier",
                  "start": 1339,
                  "end": 1351,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1351,
                  "end": 1365,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1352,
                      "end": 1364,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1352,
                        "end": 1364,
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
            "start": 1371,
            "end": 1410,
            "key": {
              "type": "Identifier",
              "start": 1371,
              "end": 1380,
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
              "start": 1382,
              "end": 1409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1384,
                "end": 1409,
                "typeName": {
                  "type": "Identifier",
                  "start": 1384,
                  "end": 1396,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1396,
                  "end": 1409,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1397,
                      "end": 1408,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1397,
                        "end": 1408,
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
      "start": 1414,
      "end": 1550,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1421,
        "end": 1550,
        "id": {
          "type": "Identifier",
          "start": 1431,
          "end": 1484,
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1484,
          "end": 1487,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1485,
              "end": 1486,
              "name": {
                "type": "Identifier",
                "start": 1485,
                "end": 1486,
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
          "start": 1488,
          "end": 1550,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 1494,
              "end": 1514,
              "key": {
                "type": "Identifier",
                "start": 1494,
                "end": 1502,
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
                  "start": 1503,
                  "end": 1509,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1506,
                    "end": 1509,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1508,
                      "end": 1509,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1508,
                        "end": 1509,
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
                "start": 1510,
                "end": 1513,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1512,
                  "end": 1513,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1512,
                    "end": 1513,
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
              "start": 1519,
              "end": 1548,
              "key": {
                "type": "Identifier",
                "start": 1519,
                "end": 1528,
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
                "start": 1530,
                "end": 1547,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1532,
                  "end": 1547,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1532,
                    "end": 1544,
                    "name": "publicClassT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1544,
                    "end": 1547,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1545,
                        "end": 1546,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1545,
                          "end": 1546,
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
      "start": 1552,
      "end": 1682,
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1616,
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1616,
        "end": 1619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1617,
            "end": 1618,
            "name": {
              "type": "Identifier",
              "start": 1617,
              "end": 1618,
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
        "start": 1620,
        "end": 1682,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1626,
            "end": 1646,
            "key": {
              "type": "Identifier",
              "start": 1626,
              "end": 1634,
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
                "start": 1635,
                "end": 1641,
                "name": "val",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1638,
                  "end": 1641,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1640,
                    "end": 1641,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1640,
                      "end": 1641,
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
              "start": 1642,
              "end": 1645,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1644,
                "end": 1645,
                "typeName": {
                  "type": "Identifier",
                  "start": 1644,
                  "end": 1645,
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
            "start": 1651,
            "end": 1680,
            "key": {
              "type": "Identifier",
              "start": 1651,
              "end": 1660,
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
              "start": 1662,
              "end": 1679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1664,
                "end": 1679,
                "typeName": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1676,
                  "name": "publicClassT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1676,
                  "end": 1679,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1677,
                      "end": 1678,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1677,
                        "end": 1678,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 1685,
      "end": 1823,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1692,
        "end": 1823,
        "id": {
          "type": "Identifier",
          "start": 1702,
          "end": 1758,
          "name": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1758,
          "end": 1810,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1759,
              "end": 1809,
              "name": {
                "type": "Identifier",
                "start": 1759,
                "end": 1760,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1769,
                "end": 1809,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1769,
                  "end": 1809,
                  "left": {
                    "type": "Identifier",
                    "start": 1769,
                    "end": 1782,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1783,
                    "end": 1809,
                    "name": "publicClassInPrivateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 1811,
          "end": 1823,
          "body": []
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
      "start": 1825,
      "end": 1957,
      "id": {
        "type": "Identifier",
        "start": 1835,
        "end": 1892,
        "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1892,
        "end": 1944,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1893,
            "end": 1943,
            "name": {
              "type": "Identifier",
              "start": 1893,
              "end": 1894,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1903,
              "end": 1943,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1903,
                "end": 1943,
                "left": {
                  "type": "Identifier",
                  "start": 1903,
                  "end": 1916,
                  "name": "privateModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1917,
                  "end": 1943,
                  "name": "publicClassInPrivateModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1945,
        "end": 1957,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1959,
      "end": 4796,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 1966,
        "end": 4796,
        "id": {
          "type": "Identifier",
          "start": 1973,
          "end": 1985,
          "name": "publicModule",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 1986,
          "end": 4796,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 1992,
              "end": 2032,
              "id": {
                "type": "Identifier",
                "start": 1998,
                "end": 2024,
                "name": "privateClassInPublicModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 2025,
                "end": 2032,
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
              "start": 2038,
              "end": 2084,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 2045,
                "end": 2084,
                "id": {
                  "type": "Identifier",
                  "start": 2051,
                  "end": 2076,
                  "name": "publicClassInPublicModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 2077,
                  "end": 2084,
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
              "start": 2090,
              "end": 2134,
              "id": {
                "type": "Identifier",
                "start": 2096,
                "end": 2123,
                "name": "privateClassInPublicModuleT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 2127,
                "end": 2134,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2123,
                "end": 2126,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2124,
                    "end": 2125,
                    "name": {
                      "type": "Identifier",
                      "start": 2124,
                      "end": 2125,
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
              "start": 2140,
              "end": 2190,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 2147,
                "end": 2190,
                "id": {
                  "type": "Identifier",
                  "start": 2153,
                  "end": 2179,
                  "name": "publicClassInPublicModuleT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 2183,
                  "end": 2190,
                  "body": []
                },
                "decorators": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2179,
                  "end": 2182,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2180,
                      "end": 2181,
                      "name": {
                        "type": "Identifier",
                        "start": 2180,
                        "end": 2181,
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
              "start": 2196,
              "end": 2697,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 2203,
                "end": 2697,
                "id": {
                  "type": "Identifier",
                  "start": 2213,
                  "end": 2253,
                  "name": "publicInterfaceWithPrivateTypeParameters",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2253,
                  "end": 2291,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2254,
                      "end": 2290,
                      "name": {
                        "type": "Identifier",
                        "start": 2254,
                        "end": 2255,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2264,
                        "end": 2290,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2264,
                          "end": 2290,
                          "name": "privateClassInPublicModule",
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
                  "start": 2292,
                  "end": 2697,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 2311,
                      "end": 2331,
                      "key": {
                        "type": "Identifier",
                        "start": 2311,
                        "end": 2319,
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
                          "start": 2320,
                          "end": 2326,
                          "name": "val",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2323,
                            "end": 2326,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2325,
                              "end": 2326,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2325,
                                "end": 2326,
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
                        "start": 2327,
                        "end": 2330,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2329,
                          "end": 2330,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2329,
                            "end": 2330,
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
                      "start": 2340,
                      "end": 2383,
                      "key": {
                        "type": "Identifier",
                        "start": 2340,
                        "end": 2349,
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
                        "start": 2351,
                        "end": 2382,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2353,
                          "end": 2382,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2353,
                            "end": 2379,
                            "name": "publicClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2379,
                            "end": 2382,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2380,
                                "end": 2381,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2380,
                                  "end": 2381,
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
                      "start": 2392,
                      "end": 2461,
                      "key": {
                        "type": "Identifier",
                        "start": 2392,
                        "end": 2401,
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
                        "start": 2403,
                        "end": 2460,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2405,
                          "end": 2460,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2405,
                            "end": 2432,
                            "name": "privateClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2432,
                            "end": 2460,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2433,
                                "end": 2459,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2433,
                                  "end": 2459,
                                  "name": "privateClassInPublicModule",
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
                      "start": 2470,
                      "end": 2538,
                      "key": {
                        "type": "Identifier",
                        "start": 2470,
                        "end": 2479,
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
                        "start": 2481,
                        "end": 2537,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2483,
                          "end": 2537,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2483,
                            "end": 2510,
                            "name": "privateClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2510,
                            "end": 2537,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2511,
                                "end": 2536,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2511,
                                  "end": 2536,
                                  "name": "publicClassInPublicModule",
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
                      "start": 2547,
                      "end": 2615,
                      "key": {
                        "type": "Identifier",
                        "start": 2547,
                        "end": 2556,
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
                        "start": 2558,
                        "end": 2614,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2560,
                          "end": 2614,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2560,
                            "end": 2586,
                            "name": "publicClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2586,
                            "end": 2614,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2587,
                                "end": 2613,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2587,
                                  "end": 2613,
                                  "name": "privateClassInPublicModule",
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
                      "start": 2624,
                      "end": 2691,
                      "key": {
                        "type": "Identifier",
                        "start": 2624,
                        "end": 2633,
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
                        "start": 2635,
                        "end": 2690,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2637,
                          "end": 2690,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2637,
                            "end": 2663,
                            "name": "publicClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2663,
                            "end": 2690,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2664,
                                "end": 2689,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2664,
                                  "end": 2689,
                                  "name": "publicClassInPublicModule",
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
              "start": 2703,
              "end": 3192,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 2710,
                "end": 3192,
                "id": {
                  "type": "Identifier",
                  "start": 2720,
                  "end": 2759,
                  "name": "publicInterfaceWithPublicTypeParameters",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2759,
                  "end": 2796,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2760,
                      "end": 2795,
                      "name": {
                        "type": "Identifier",
                        "start": 2760,
                        "end": 2761,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2770,
                        "end": 2795,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2770,
                          "end": 2795,
                          "name": "publicClassInPublicModule",
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
                  "start": 2797,
                  "end": 3192,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 2807,
                      "end": 2827,
                      "key": {
                        "type": "Identifier",
                        "start": 2807,
                        "end": 2815,
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
                          "start": 2816,
                          "end": 2822,
                          "name": "val",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2819,
                            "end": 2822,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2821,
                              "end": 2822,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2821,
                                "end": 2822,
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
                        "start": 2823,
                        "end": 2826,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2825,
                          "end": 2826,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2825,
                            "end": 2826,
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
                      "start": 2836,
                      "end": 2878,
                      "key": {
                        "type": "Identifier",
                        "start": 2836,
                        "end": 2845,
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
                        "start": 2847,
                        "end": 2878,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2849,
                          "end": 2878,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2849,
                            "end": 2875,
                            "name": "publicClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2875,
                            "end": 2878,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2876,
                                "end": 2877,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2876,
                                  "end": 2877,
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
                      "start": 2887,
                      "end": 2956,
                      "key": {
                        "type": "Identifier",
                        "start": 2887,
                        "end": 2896,
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
                        "start": 2898,
                        "end": 2955,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2900,
                          "end": 2955,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2900,
                            "end": 2927,
                            "name": "privateClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2927,
                            "end": 2955,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2928,
                                "end": 2954,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2928,
                                  "end": 2954,
                                  "name": "privateClassInPublicModule",
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
                      "start": 2965,
                      "end": 3033,
                      "key": {
                        "type": "Identifier",
                        "start": 2965,
                        "end": 2974,
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
                        "start": 2976,
                        "end": 3032,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2978,
                          "end": 3032,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2978,
                            "end": 3005,
                            "name": "privateClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3005,
                            "end": 3032,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3006,
                                "end": 3031,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3006,
                                  "end": 3031,
                                  "name": "publicClassInPublicModule",
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
                      "start": 3042,
                      "end": 3110,
                      "key": {
                        "type": "Identifier",
                        "start": 3042,
                        "end": 3051,
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
                        "start": 3053,
                        "end": 3109,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3055,
                          "end": 3109,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3055,
                            "end": 3081,
                            "name": "publicClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3081,
                            "end": 3109,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3082,
                                "end": 3108,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3082,
                                  "end": 3108,
                                  "name": "privateClassInPublicModule",
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
                      "start": 3119,
                      "end": 3186,
                      "key": {
                        "type": "Identifier",
                        "start": 3119,
                        "end": 3128,
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
                        "start": 3130,
                        "end": 3185,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3132,
                          "end": 3185,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3132,
                            "end": 3158,
                            "name": "publicClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3158,
                            "end": 3185,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3159,
                                "end": 3184,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3159,
                                  "end": 3184,
                                  "name": "publicClassInPublicModule",
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
              "start": 3198,
              "end": 3684,
              "id": {
                "type": "Identifier",
                "start": 3208,
                "end": 3249,
                "name": "privateInterfaceWithPrivateTypeParameters",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3249,
                "end": 3287,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3250,
                    "end": 3286,
                    "name": {
                      "type": "Identifier",
                      "start": 3250,
                      "end": 3251,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3260,
                      "end": 3286,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3260,
                        "end": 3286,
                        "name": "privateClassInPublicModule",
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
                "start": 3288,
                "end": 3684,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 3298,
                    "end": 3318,
                    "key": {
                      "type": "Identifier",
                      "start": 3298,
                      "end": 3306,
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
                        "start": 3307,
                        "end": 3313,
                        "name": "val",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3310,
                          "end": 3313,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3312,
                            "end": 3313,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3312,
                              "end": 3313,
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
                      "start": 3314,
                      "end": 3317,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3316,
                        "end": 3317,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3316,
                          "end": 3317,
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
                    "start": 3327,
                    "end": 3370,
                    "key": {
                      "type": "Identifier",
                      "start": 3327,
                      "end": 3336,
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
                      "start": 3338,
                      "end": 3369,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3340,
                        "end": 3369,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3340,
                          "end": 3366,
                          "name": "publicClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3366,
                          "end": 3369,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3367,
                              "end": 3368,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3367,
                                "end": 3368,
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
                    "start": 3379,
                    "end": 3448,
                    "key": {
                      "type": "Identifier",
                      "start": 3379,
                      "end": 3388,
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
                      "start": 3390,
                      "end": 3447,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3392,
                        "end": 3447,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3392,
                          "end": 3419,
                          "name": "privateClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3419,
                          "end": 3447,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3420,
                              "end": 3446,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3420,
                                "end": 3446,
                                "name": "privateClassInPublicModule",
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
                    "start": 3457,
                    "end": 3525,
                    "key": {
                      "type": "Identifier",
                      "start": 3457,
                      "end": 3466,
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
                      "start": 3468,
                      "end": 3524,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3470,
                        "end": 3524,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3470,
                          "end": 3497,
                          "name": "privateClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3497,
                          "end": 3524,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3498,
                              "end": 3523,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3498,
                                "end": 3523,
                                "name": "publicClassInPublicModule",
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
                    "start": 3534,
                    "end": 3602,
                    "key": {
                      "type": "Identifier",
                      "start": 3534,
                      "end": 3543,
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
                      "start": 3545,
                      "end": 3601,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3547,
                        "end": 3601,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3547,
                          "end": 3573,
                          "name": "publicClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3573,
                          "end": 3601,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3574,
                              "end": 3600,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3574,
                                "end": 3600,
                                "name": "privateClassInPublicModule",
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
                    "start": 3611,
                    "end": 3678,
                    "key": {
                      "type": "Identifier",
                      "start": 3611,
                      "end": 3620,
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
                      "start": 3622,
                      "end": 3677,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3624,
                        "end": 3677,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3624,
                          "end": 3650,
                          "name": "publicClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3650,
                          "end": 3677,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3651,
                              "end": 3676,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3651,
                                "end": 3676,
                                "name": "publicClassInPublicModule",
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
              "start": 3690,
              "end": 4174,
              "id": {
                "type": "Identifier",
                "start": 3700,
                "end": 3740,
                "name": "privateInterfaceWithPublicTypeParameters",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3740,
                "end": 3777,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3741,
                    "end": 3776,
                    "name": {
                      "type": "Identifier",
                      "start": 3741,
                      "end": 3742,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3751,
                      "end": 3776,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3751,
                        "end": 3776,
                        "name": "publicClassInPublicModule",
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
                "start": 3778,
                "end": 4174,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 3788,
                    "end": 3808,
                    "key": {
                      "type": "Identifier",
                      "start": 3788,
                      "end": 3796,
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
                        "start": 3797,
                        "end": 3803,
                        "name": "val",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3800,
                          "end": 3803,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3802,
                            "end": 3803,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3802,
                              "end": 3803,
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
                      "start": 3804,
                      "end": 3807,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3806,
                        "end": 3807,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3806,
                          "end": 3807,
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
                    "start": 3817,
                    "end": 3860,
                    "key": {
                      "type": "Identifier",
                      "start": 3817,
                      "end": 3826,
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
                      "start": 3828,
                      "end": 3859,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3830,
                        "end": 3859,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3830,
                          "end": 3856,
                          "name": "publicClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3856,
                          "end": 3859,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3857,
                              "end": 3858,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3857,
                                "end": 3858,
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
                    "start": 3869,
                    "end": 3938,
                    "key": {
                      "type": "Identifier",
                      "start": 3869,
                      "end": 3878,
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
                      "start": 3880,
                      "end": 3937,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3882,
                        "end": 3937,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3882,
                          "end": 3909,
                          "name": "privateClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3909,
                          "end": 3937,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3910,
                              "end": 3936,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3910,
                                "end": 3936,
                                "name": "privateClassInPublicModule",
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
                    "start": 3947,
                    "end": 4015,
                    "key": {
                      "type": "Identifier",
                      "start": 3947,
                      "end": 3956,
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
                      "start": 3958,
                      "end": 4014,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3960,
                        "end": 4014,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3960,
                          "end": 3987,
                          "name": "privateClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3987,
                          "end": 4014,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3988,
                              "end": 4013,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3988,
                                "end": 4013,
                                "name": "publicClassInPublicModule",
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
                    "start": 4024,
                    "end": 4092,
                    "key": {
                      "type": "Identifier",
                      "start": 4024,
                      "end": 4033,
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
                      "start": 4035,
                      "end": 4091,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4037,
                        "end": 4091,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4037,
                          "end": 4063,
                          "name": "publicClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4063,
                          "end": 4091,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4064,
                              "end": 4090,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4064,
                                "end": 4090,
                                "name": "privateClassInPublicModule",
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
                    "start": 4101,
                    "end": 4168,
                    "key": {
                      "type": "Identifier",
                      "start": 4101,
                      "end": 4110,
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
                      "start": 4112,
                      "end": 4167,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4114,
                        "end": 4167,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4114,
                          "end": 4140,
                          "name": "publicClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4140,
                          "end": 4167,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4141,
                              "end": 4166,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4141,
                                "end": 4166,
                                "name": "publicClassInPublicModule",
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
              "start": 4180,
              "end": 4342,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 4187,
                "end": 4342,
                "id": {
                  "type": "Identifier",
                  "start": 4197,
                  "end": 4250,
                  "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4250,
                  "end": 4253,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4251,
                      "end": 4252,
                      "name": {
                        "type": "Identifier",
                        "start": 4251,
                        "end": 4252,
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
                  "start": 4254,
                  "end": 4342,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 4264,
                      "end": 4284,
                      "key": {
                        "type": "Identifier",
                        "start": 4264,
                        "end": 4272,
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
                          "start": 4273,
                          "end": 4279,
                          "name": "val",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4276,
                            "end": 4279,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4278,
                              "end": 4279,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4278,
                                "end": 4279,
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
                        "start": 4280,
                        "end": 4283,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4282,
                          "end": 4283,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4282,
                            "end": 4283,
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
                      "start": 4293,
                      "end": 4336,
                      "key": {
                        "type": "Identifier",
                        "start": 4293,
                        "end": 4302,
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
                        "start": 4304,
                        "end": 4335,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4306,
                          "end": 4335,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4306,
                            "end": 4332,
                            "name": "publicClassInPublicModuleT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4332,
                            "end": 4335,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4333,
                                "end": 4334,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4333,
                                  "end": 4334,
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
              "start": 4348,
              "end": 4504,
              "id": {
                "type": "Identifier",
                "start": 4358,
                "end": 4412,
                "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4412,
                "end": 4415,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4413,
                    "end": 4414,
                    "name": {
                      "type": "Identifier",
                      "start": 4413,
                      "end": 4414,
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
                "start": 4416,
                "end": 4504,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 4426,
                    "end": 4446,
                    "key": {
                      "type": "Identifier",
                      "start": 4426,
                      "end": 4434,
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
                        "start": 4435,
                        "end": 4441,
                        "name": "val",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4438,
                          "end": 4441,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4440,
                            "end": 4441,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4440,
                              "end": 4441,
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
                      "start": 4442,
                      "end": 4445,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4444,
                        "end": 4445,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4444,
                          "end": 4445,
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
                    "start": 4455,
                    "end": 4498,
                    "key": {
                      "type": "Identifier",
                      "start": 4455,
                      "end": 4464,
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
                      "start": 4466,
                      "end": 4497,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4468,
                        "end": 4497,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4468,
                          "end": 4494,
                          "name": "publicClassInPublicModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4494,
                          "end": 4497,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4495,
                              "end": 4496,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4495,
                                "end": 4496,
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
            {
              "type": "ExportNamedDeclaration",
              "start": 4510,
              "end": 4652,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 4517,
                "end": 4652,
                "id": {
                  "type": "Identifier",
                  "start": 4527,
                  "end": 4583,
                  "name": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4583,
                  "end": 4635,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4584,
                      "end": 4634,
                      "name": {
                        "type": "Identifier",
                        "start": 4584,
                        "end": 4585,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4594,
                        "end": 4634,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4594,
                          "end": 4634,
                          "left": {
                            "type": "Identifier",
                            "start": 4594,
                            "end": 4607,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4608,
                            "end": 4634,
                            "name": "publicClassInPrivateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 4636,
                  "end": 4652,
                  "body": []
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
              "start": 4658,
              "end": 4794,
              "id": {
                "type": "Identifier",
                "start": 4668,
                "end": 4725,
                "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4725,
                "end": 4777,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4726,
                    "end": 4776,
                    "name": {
                      "type": "Identifier",
                      "start": 4726,
                      "end": 4727,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 4736,
                      "end": 4776,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 4736,
                        "end": 4776,
                        "left": {
                          "type": "Identifier",
                          "start": 4736,
                          "end": 4749,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4750,
                          "end": 4776,
                          "name": "publicClassInPrivateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
              "body": {
                "type": "TSInterfaceBody",
                "start": 4778,
                "end": 4794,
                "body": []
              },
              "declare": false
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
      "start": 4798,
      "end": 7376,
      "id": {
        "type": "Identifier",
        "start": 4805,
        "end": 4818,
        "name": "privateModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4819,
        "end": 7376,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 4825,
            "end": 4866,
            "id": {
              "type": "Identifier",
              "start": 4831,
              "end": 4858,
              "name": "privateClassInPrivateModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 4859,
              "end": 4866,
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
            "start": 4872,
            "end": 4919,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 4879,
              "end": 4919,
              "id": {
                "type": "Identifier",
                "start": 4885,
                "end": 4911,
                "name": "publicClassInPrivateModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 4912,
                "end": 4919,
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
            "start": 4925,
            "end": 4970,
            "id": {
              "type": "Identifier",
              "start": 4931,
              "end": 4959,
              "name": "privateClassInPrivateModuleT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 4963,
              "end": 4970,
              "body": []
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4959,
              "end": 4962,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4960,
                  "end": 4961,
                  "name": {
                    "type": "Identifier",
                    "start": 4960,
                    "end": 4961,
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
            "start": 4976,
            "end": 5027,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 4983,
              "end": 5027,
              "id": {
                "type": "Identifier",
                "start": 4989,
                "end": 5016,
                "name": "publicClassInPrivateModuleT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 5020,
                "end": 5027,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 5016,
                "end": 5019,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 5017,
                    "end": 5018,
                    "name": {
                      "type": "Identifier",
                      "start": 5017,
                      "end": 5018,
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
            "start": 5033,
            "end": 5535,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 5040,
              "end": 5535,
              "id": {
                "type": "Identifier",
                "start": 5050,
                "end": 5090,
                "name": "publicInterfaceWithPrivateTypeParameters",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 5090,
                "end": 5129,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 5091,
                    "end": 5128,
                    "name": {
                      "type": "Identifier",
                      "start": 5091,
                      "end": 5092,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 5101,
                      "end": 5128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5101,
                        "end": 5128,
                        "name": "privateClassInPrivateModule",
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
                "start": 5130,
                "end": 5535,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 5140,
                    "end": 5160,
                    "key": {
                      "type": "Identifier",
                      "start": 5140,
                      "end": 5148,
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
                        "start": 5149,
                        "end": 5155,
                        "name": "val",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5152,
                          "end": 5155,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5154,
                            "end": 5155,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5154,
                              "end": 5155,
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
                      "start": 5156,
                      "end": 5159,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5158,
                        "end": 5159,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5158,
                          "end": 5159,
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
                    "start": 5169,
                    "end": 5213,
                    "key": {
                      "type": "Identifier",
                      "start": 5169,
                      "end": 5178,
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
                      "start": 5180,
                      "end": 5212,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5182,
                        "end": 5212,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5182,
                          "end": 5209,
                          "name": "publicClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5209,
                          "end": 5212,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5210,
                              "end": 5211,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5210,
                                "end": 5211,
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
                    "start": 5222,
                    "end": 5293,
                    "key": {
                      "type": "Identifier",
                      "start": 5222,
                      "end": 5231,
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
                      "start": 5233,
                      "end": 5292,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5235,
                        "end": 5292,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5235,
                          "end": 5263,
                          "name": "privateClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5263,
                          "end": 5292,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5264,
                              "end": 5291,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5264,
                                "end": 5291,
                                "name": "privateClassInPrivateModule",
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
                    "start": 5302,
                    "end": 5372,
                    "key": {
                      "type": "Identifier",
                      "start": 5302,
                      "end": 5311,
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
                      "start": 5313,
                      "end": 5371,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5315,
                        "end": 5371,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5315,
                          "end": 5343,
                          "name": "privateClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5343,
                          "end": 5371,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5344,
                              "end": 5370,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5344,
                                "end": 5370,
                                "name": "publicClassInPrivateModule",
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
                    "start": 5381,
                    "end": 5451,
                    "key": {
                      "type": "Identifier",
                      "start": 5381,
                      "end": 5390,
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
                      "start": 5392,
                      "end": 5450,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5394,
                        "end": 5450,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5394,
                          "end": 5421,
                          "name": "publicClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5421,
                          "end": 5450,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5422,
                              "end": 5449,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5422,
                                "end": 5449,
                                "name": "privateClassInPrivateModule",
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
                    "start": 5460,
                    "end": 5529,
                    "key": {
                      "type": "Identifier",
                      "start": 5460,
                      "end": 5469,
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
                      "start": 5471,
                      "end": 5528,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5473,
                        "end": 5528,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5473,
                          "end": 5500,
                          "name": "publicClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5500,
                          "end": 5528,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5501,
                              "end": 5527,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5501,
                                "end": 5527,
                                "name": "publicClassInPrivateModule",
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
            "start": 5541,
            "end": 6040,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 5548,
              "end": 6040,
              "id": {
                "type": "Identifier",
                "start": 5558,
                "end": 5597,
                "name": "publicInterfaceWithPublicTypeParameters",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 5597,
                "end": 5635,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 5598,
                    "end": 5634,
                    "name": {
                      "type": "Identifier",
                      "start": 5598,
                      "end": 5599,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 5608,
                      "end": 5634,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5608,
                        "end": 5634,
                        "name": "publicClassInPrivateModule",
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
                "start": 5636,
                "end": 6040,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 5646,
                    "end": 5666,
                    "key": {
                      "type": "Identifier",
                      "start": 5646,
                      "end": 5654,
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
                        "start": 5655,
                        "end": 5661,
                        "name": "val",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5658,
                          "end": 5661,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5660,
                            "end": 5661,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5660,
                              "end": 5661,
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
                      "start": 5662,
                      "end": 5665,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5664,
                        "end": 5665,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5664,
                          "end": 5665,
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
                    "start": 5675,
                    "end": 5718,
                    "key": {
                      "type": "Identifier",
                      "start": 5675,
                      "end": 5684,
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
                      "start": 5686,
                      "end": 5718,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5688,
                        "end": 5718,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5688,
                          "end": 5715,
                          "name": "publicClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5715,
                          "end": 5718,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5716,
                              "end": 5717,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5716,
                                "end": 5717,
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
                    "start": 5727,
                    "end": 5798,
                    "key": {
                      "type": "Identifier",
                      "start": 5727,
                      "end": 5736,
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
                      "start": 5738,
                      "end": 5797,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5740,
                        "end": 5797,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5740,
                          "end": 5768,
                          "name": "privateClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5768,
                          "end": 5797,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5769,
                              "end": 5796,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5769,
                                "end": 5796,
                                "name": "privateClassInPrivateModule",
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
                    "start": 5807,
                    "end": 5877,
                    "key": {
                      "type": "Identifier",
                      "start": 5807,
                      "end": 5816,
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
                      "start": 5818,
                      "end": 5876,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5820,
                        "end": 5876,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5820,
                          "end": 5848,
                          "name": "privateClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5848,
                          "end": 5876,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5849,
                              "end": 5875,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5849,
                                "end": 5875,
                                "name": "publicClassInPrivateModule",
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
                    "start": 5886,
                    "end": 5956,
                    "key": {
                      "type": "Identifier",
                      "start": 5886,
                      "end": 5895,
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
                      "start": 5897,
                      "end": 5955,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5899,
                        "end": 5955,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5899,
                          "end": 5926,
                          "name": "publicClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5926,
                          "end": 5955,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5927,
                              "end": 5954,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5927,
                                "end": 5954,
                                "name": "privateClassInPrivateModule",
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
                    "start": 5965,
                    "end": 6034,
                    "key": {
                      "type": "Identifier",
                      "start": 5965,
                      "end": 5974,
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
                      "start": 5976,
                      "end": 6033,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5978,
                        "end": 6033,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5978,
                          "end": 6005,
                          "name": "publicClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 6005,
                          "end": 6033,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 6006,
                              "end": 6032,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6006,
                                "end": 6032,
                                "name": "publicClassInPrivateModule",
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
            "start": 6046,
            "end": 6542,
            "id": {
              "type": "Identifier",
              "start": 6056,
              "end": 6097,
              "name": "privateInterfaceWithPrivateTypeParameters",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 6097,
              "end": 6136,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 6098,
                  "end": 6135,
                  "name": {
                    "type": "Identifier",
                    "start": 6098,
                    "end": 6099,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 6108,
                    "end": 6135,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6108,
                      "end": 6135,
                      "name": "privateClassInPrivateModule",
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
              "start": 6137,
              "end": 6542,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 6147,
                  "end": 6167,
                  "key": {
                    "type": "Identifier",
                    "start": 6147,
                    "end": 6155,
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
                      "start": 6156,
                      "end": 6162,
                      "name": "val",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6159,
                        "end": 6162,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6161,
                          "end": 6162,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6161,
                            "end": 6162,
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
                    "start": 6163,
                    "end": 6166,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6165,
                      "end": 6166,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6165,
                        "end": 6166,
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
                  "start": 6176,
                  "end": 6220,
                  "key": {
                    "type": "Identifier",
                    "start": 6176,
                    "end": 6185,
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
                    "start": 6187,
                    "end": 6219,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6189,
                      "end": 6219,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6189,
                        "end": 6216,
                        "name": "publicClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6216,
                        "end": 6219,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6217,
                            "end": 6218,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6217,
                              "end": 6218,
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
                  "start": 6229,
                  "end": 6300,
                  "key": {
                    "type": "Identifier",
                    "start": 6229,
                    "end": 6238,
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
                    "start": 6240,
                    "end": 6299,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6242,
                      "end": 6299,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6242,
                        "end": 6270,
                        "name": "privateClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6270,
                        "end": 6299,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6271,
                            "end": 6298,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6271,
                              "end": 6298,
                              "name": "privateClassInPrivateModule",
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
                  "start": 6309,
                  "end": 6379,
                  "key": {
                    "type": "Identifier",
                    "start": 6309,
                    "end": 6318,
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
                    "start": 6320,
                    "end": 6378,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6322,
                      "end": 6378,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6322,
                        "end": 6350,
                        "name": "privateClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6350,
                        "end": 6378,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6351,
                            "end": 6377,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6351,
                              "end": 6377,
                              "name": "publicClassInPrivateModule",
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
                  "start": 6388,
                  "end": 6458,
                  "key": {
                    "type": "Identifier",
                    "start": 6388,
                    "end": 6397,
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
                    "start": 6399,
                    "end": 6457,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6401,
                      "end": 6457,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6401,
                        "end": 6428,
                        "name": "publicClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6428,
                        "end": 6457,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6429,
                            "end": 6456,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6429,
                              "end": 6456,
                              "name": "privateClassInPrivateModule",
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
                  "start": 6467,
                  "end": 6536,
                  "key": {
                    "type": "Identifier",
                    "start": 6467,
                    "end": 6476,
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
                    "start": 6478,
                    "end": 6535,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6480,
                      "end": 6535,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6480,
                        "end": 6507,
                        "name": "publicClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6507,
                        "end": 6535,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6508,
                            "end": 6534,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6508,
                              "end": 6534,
                              "name": "publicClassInPrivateModule",
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
            "start": 6548,
            "end": 7042,
            "id": {
              "type": "Identifier",
              "start": 6558,
              "end": 6598,
              "name": "privateInterfaceWithPublicTypeParameters",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 6598,
              "end": 6636,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 6599,
                  "end": 6635,
                  "name": {
                    "type": "Identifier",
                    "start": 6599,
                    "end": 6600,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 6609,
                    "end": 6635,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6609,
                      "end": 6635,
                      "name": "publicClassInPrivateModule",
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
              "start": 6637,
              "end": 7042,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 6647,
                  "end": 6667,
                  "key": {
                    "type": "Identifier",
                    "start": 6647,
                    "end": 6655,
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
                      "start": 6656,
                      "end": 6662,
                      "name": "val",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6659,
                        "end": 6662,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6661,
                          "end": 6662,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6661,
                            "end": 6662,
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
                    "start": 6663,
                    "end": 6666,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6665,
                      "end": 6666,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6665,
                        "end": 6666,
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
                  "start": 6676,
                  "end": 6720,
                  "key": {
                    "type": "Identifier",
                    "start": 6676,
                    "end": 6685,
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
                    "start": 6687,
                    "end": 6719,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6689,
                      "end": 6719,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6689,
                        "end": 6716,
                        "name": "publicClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6716,
                        "end": 6719,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6717,
                            "end": 6718,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6717,
                              "end": 6718,
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
                  "start": 6729,
                  "end": 6800,
                  "key": {
                    "type": "Identifier",
                    "start": 6729,
                    "end": 6738,
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
                    "start": 6740,
                    "end": 6799,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6742,
                      "end": 6799,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6742,
                        "end": 6770,
                        "name": "privateClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6770,
                        "end": 6799,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6771,
                            "end": 6798,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6771,
                              "end": 6798,
                              "name": "privateClassInPrivateModule",
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
                  "start": 6809,
                  "end": 6879,
                  "key": {
                    "type": "Identifier",
                    "start": 6809,
                    "end": 6818,
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
                    "start": 6820,
                    "end": 6878,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6822,
                      "end": 6878,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6822,
                        "end": 6850,
                        "name": "privateClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6850,
                        "end": 6878,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6851,
                            "end": 6877,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6851,
                              "end": 6877,
                              "name": "publicClassInPrivateModule",
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
                  "start": 6888,
                  "end": 6958,
                  "key": {
                    "type": "Identifier",
                    "start": 6888,
                    "end": 6897,
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
                    "start": 6899,
                    "end": 6957,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6901,
                      "end": 6957,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6901,
                        "end": 6928,
                        "name": "publicClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6928,
                        "end": 6957,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6929,
                            "end": 6956,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6929,
                              "end": 6956,
                              "name": "privateClassInPrivateModule",
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
                  "start": 6967,
                  "end": 7036,
                  "key": {
                    "type": "Identifier",
                    "start": 6967,
                    "end": 6976,
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
                    "start": 6978,
                    "end": 7035,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6980,
                      "end": 7035,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6980,
                        "end": 7007,
                        "name": "publicClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 7007,
                        "end": 7035,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 7008,
                            "end": 7034,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7008,
                              "end": 7034,
                              "name": "publicClassInPrivateModule",
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
            "start": 7048,
            "end": 7211,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 7055,
              "end": 7211,
              "id": {
                "type": "Identifier",
                "start": 7065,
                "end": 7118,
                "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 7118,
                "end": 7121,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 7119,
                    "end": 7120,
                    "name": {
                      "type": "Identifier",
                      "start": 7119,
                      "end": 7120,
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
                "start": 7122,
                "end": 7211,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 7132,
                    "end": 7152,
                    "key": {
                      "type": "Identifier",
                      "start": 7132,
                      "end": 7140,
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
                        "start": 7141,
                        "end": 7147,
                        "name": "val",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 7144,
                          "end": 7147,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 7146,
                            "end": 7147,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7146,
                              "end": 7147,
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
                      "start": 7148,
                      "end": 7151,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7150,
                        "end": 7151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7150,
                          "end": 7151,
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
                    "start": 7161,
                    "end": 7205,
                    "key": {
                      "type": "Identifier",
                      "start": 7161,
                      "end": 7170,
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
                      "start": 7172,
                      "end": 7204,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7174,
                        "end": 7204,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7174,
                          "end": 7201,
                          "name": "publicClassInPrivateModuleT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 7201,
                          "end": 7204,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 7202,
                              "end": 7203,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7202,
                                "end": 7203,
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
            "start": 7217,
            "end": 7374,
            "id": {
              "type": "Identifier",
              "start": 7227,
              "end": 7281,
              "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 7281,
              "end": 7284,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 7282,
                  "end": 7283,
                  "name": {
                    "type": "Identifier",
                    "start": 7282,
                    "end": 7283,
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
              "start": 7285,
              "end": 7374,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 7295,
                  "end": 7315,
                  "key": {
                    "type": "Identifier",
                    "start": 7295,
                    "end": 7303,
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
                      "start": 7304,
                      "end": 7310,
                      "name": "val",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7307,
                        "end": 7310,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7309,
                          "end": 7310,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7309,
                            "end": 7310,
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
                    "start": 7311,
                    "end": 7314,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7313,
                      "end": 7314,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7313,
                        "end": 7314,
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
                  "start": 7324,
                  "end": 7368,
                  "key": {
                    "type": "Identifier",
                    "start": 7324,
                    "end": 7333,
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
                    "start": 7335,
                    "end": 7367,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7337,
                      "end": 7367,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7337,
                        "end": 7364,
                        "name": "publicClassInPrivateModuleT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 7364,
                        "end": 7367,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 7365,
                            "end": 7366,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7365,
                              "end": 7366,
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
